#!/usr/bin/env python3
"""CHZ-CORE-VAL-001: deterministic evidence gate; no LLM or deployment."""
from __future__ import annotations
import argparse
from datetime import datetime, timezone
import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import subprocess
import sys

def canonical(obj):
    return json.dumps(obj, sort_keys=True, separators=(",", ":"), ensure_ascii=False).encode("utf-8")

def digest(obj):
    return hashlib.sha256(canonical(obj)).hexdigest()

def git(repo, *args):
    p = subprocess.run(["git", "-C", str(repo), *args], capture_output=True)
    if p.returncode:
        raise ValueError(f"git {args[0]} failed: {p.stderr.decode(errors='replace')[:300]}")
    return p.stdout

def git_names(repo, *args):
    return {p.decode("utf-8") for p in git(repo, *args).split(b"\0") if p}

def safe_path(raw):
    if not isinstance(raw, str) or not raw or "\\" in raw or "\0" in raw:
        raise ValueError(f"unsafe path: {raw!r}")
    p = PurePosixPath(raw)
    if p.is_absolute() or p.as_posix() != raw or any(x in {".", "..", ".git"} for x in raw.split("/")):
        raise ValueError(f"unsafe path: {raw!r}")
    return raw

def validate_policy(policy):
    if not isinstance(policy, dict) or not isinstance(policy.get("candidate"), dict):
        raise ValueError("candidate policy required")
    c = policy["candidate"]
    if not isinstance(c.get("id"), str) or not c["id"].strip():
        raise ValueError("candidate.id required")
    paths, scope = c.get("paths"), c.get("patch_scope")
    if not isinstance(paths, list) or not paths or not isinstance(scope, list) or not scope:
        raise ValueError("nonempty candidate.paths and patch_scope required")
    if len(set(map(safe_path, paths))) != len(paths) or len(set(map(safe_path, scope))) != len(scope):
        raise ValueError("duplicate path")
    if not set(paths).issubset(scope):
        raise ValueError("candidate must be contained in patch scope")
    allowed = policy.get("allowed_untracked", {})
    if not isinstance(allowed, dict) or any(safe_path(p) != p or v != "NON_BLOCKING" for p, v in allowed.items()):
        raise ValueError("allowed_untracked must map exact paths to NON_BLOCKING")
    if set(allowed).intersection(scope):
        raise ValueError("allowed untracked path cannot be in candidate scope")
    actors = policy.get("human_actors")
    if not isinstance(actors, list) or not actors or any(not isinstance(a, str) or not a for a in actors):
        raise ValueError("nonempty human_actors required")
    return policy

def snapshot(repo, policy):
    repo = Path(repo).resolve()
    root = Path(git(repo, "rev-parse", "--show-toplevel").decode().strip()).resolve()
    if repo != root:
        raise ValueError("--repo must be worktree root")
    head = git(repo, "rev-parse", "HEAD").decode().strip()
    tracked = git_names(repo, "ls-files", "--cached", "-z")
    untracked = git_names(repo, "ls-files", "--others", "--exclude-standard", "-z")
    modified = git_names(repo, "diff", "--no-ext-diff", "--no-textconv", "--name-only", "-z", "HEAD")
    evidence = []
    for rel in policy["candidate"]["paths"]:
        file = repo / rel
        if file.is_symlink():
            state = "SYMLINK_UNSUPPORTED"
        elif rel in untracked:
            state = "UNTRACKED"
        elif rel not in tracked:
            state = "NOT_TRACKED"
        elif not file.is_file():
            state = "MISSING"
        elif rel in modified:
            state = "MODIFIED_TRACKED"
        else:
            state = "UNCHANGED_TRACKED"
        is_tracked = state in {"MODIFIED_TRACKED", "UNCHANGED_TRACKED"}
        evidence.append({
            "path": rel,
            "claim": f"artifact {rel} has state {state}",
            "artifact_state": state,
            "method": "git-ls-files+git-diff-HEAD+sha256" if is_tracked else "git-ls-files+filesystem",
            "method_valid_for": ["TRACKED_CHANGE", "PRESENCE", "CONTENT"] if is_tracked else ["PRESENCE"],
            "artifact_sha256": hashlib.sha256(file.read_bytes()).hexdigest() if file.is_file() and not file.is_symlink() else None
        })
    extra = []
    for rel in sorted(untracked):
        file = repo / rel
        extra.append({
            "path": rel, "artifact_state": "UNTRACKED",
            "method": "git-ls-files--others+filesystem-sha256",
            "method_valid_for": ["PRESENCE", "CONTENT"],
            "artifact_sha256": hashlib.sha256(file.read_bytes()).hexdigest() if file.is_file() and not file.is_symlink() else None
        })
    return {
        "head": head, "candidate_evidence": evidence,
        "worktree": {
            "tracked_modified": sorted(modified), "untracked": sorted(untracked),
            "untracked_evidence": extra, "tracked_paths_count": len(tracked)
        }
    }

def evaluate(policy, state):
    scope = set(policy["candidate"]["patch_scope"])
    allowed = policy.get("allowed_untracked", {})
    reasons, unexpected = [], []
    for item in state["candidate_evidence"]:
        if item["artifact_state"] not in {"MODIFIED_TRACKED", "UNCHANGED_TRACKED"}:
            reasons.append(f"INVALID_CANDIDATE_EVIDENCE:{item['path']}:{item['artifact_state']}")
    for rel in state["worktree"]["tracked_modified"]:
        if rel not in scope:
            unexpected.append({"path": rel, "state": "MODIFIED_TRACKED", "classification": "BLOCKING_OUT_OF_SCOPE"})
            reasons.append(f"OUT_OF_SCOPE_MODIFICATION:{rel}")
    for rel in state["worktree"]["untracked"]:
        if rel in scope:
            unexpected.append({"path": rel, "state": "UNTRACKED", "classification": "INVALID_IN_SCOPE"})
            reasons.append(f"UNTRACKED_IN_SCOPE:{rel}")
        elif allowed.get(rel) == "NON_BLOCKING":
            unexpected.append({"path": rel, "state": "UNTRACKED", "classification": "NON_BLOCKING_POLICY_EXPLICIT"})
        else:
            unexpected.append({"path": rel, "state": "UNTRACKED", "classification": "HOLD_UNKNOWN"})
            reasons.append(f"UNKNOWN_UNTRACKED:{rel}")
    if any(x.startswith(("INVALID_CANDIDATE_EVIDENCE", "UNTRACKED_IN_SCOPE")) for x in reasons):
        verdict = "FAIL"
    elif reasons:
        verdict = "HOLD"
    else:
        verdict = "PASS"
    return {
        "verdict": verdict, "reasons": reasons, "unexpected": unexpected,
        "guards_transition": "EVIDENCE_FROZEN->AUDITED",
        "pass_means": "ELIGIBLE_ONLY_NOT_AUTHORIZED"
    }

def make_report(repo, policy):
    validate_policy(policy)
    state = snapshot(repo, policy)
    return {
        "schema": "chz-core-val-001/v0.1",
        "experiment_id": "CHZ-CORE-VAL-001",
        "audit_id": "AUD-" + digest({"state": state, "policy": policy})[:24],
        "timestamp": datetime.now(timezone.utc).isoformat(),
        "policy": policy, "policy_sha256": digest(policy),
        "candidate": policy["candidate"], "worktree": state["worktree"],
        "evidence": state["candidate_evidence"], "head": state["head"],
        "snapshot_sha256": digest(state),
        "provenance": {
            "runner": "Python CLI", "model_declared": None, "model_observed": None,
            "model_identity_status": "UNKNOWN_NOT_APPLICABLE"
        },
        "gate": evaluate(policy, state),
        "authority": {"status": "PENDING_HUMAN_DECISION", "identity_verified": False}
    }

def ledger_read(path):
    path = Path(path)
    if not path.exists():
        return []
    entries, previous = [], "GENESIS"
    for seq, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        try:
            item = json.loads(line)
        except json.JSONDecodeError as error:
            raise ValueError(f"invalid ledger JSON at line {seq}") from error
        data = {"seq": seq, "prev_hash": previous, "event": item.get("event")}
        if item.get("seq") != seq or item.get("prev_hash") != previous:
            raise ValueError(f"invalid ledger chain at line {seq}")
        if item.get("hash") != digest(data):
            raise ValueError(f"ledger hash mismatch at line {seq}")
        previous = item["hash"]
        entries.append(item)
    return entries

def ledger_append(path, event):
    # Only one writer; this is not a trusted immutable log.
    path = Path(path)
    history = ledger_read(path)
    previous = history[-1]["hash"] if history else "GENESIS"
    data = {"seq": len(history) + 1, "prev_hash": previous, "event": event}
    row = {**data, "hash": digest(data)}
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("a", encoding="utf-8") as stream:
        stream.write(canonical(row).decode("utf-8") + "\n")
        stream.flush()
        os.fsync(stream.fileno())
    return row

def require_outside_repo(file, repo):
    dest = Path(file).resolve()
    repo = Path(repo).resolve()
    if dest == repo or repo in dest.parents:
        raise ValueError("report and ledger must be stored outside observed repository")

def command_audit(args):
    repo = Path(args.repo).resolve()
    require_outside_repo(args.report, repo)
    require_outside_repo(args.ledger, repo)
    policy = json.loads(Path(args.policy).read_text(encoding="utf-8"))
    report = make_report(repo, policy)
    out = Path(args.report)
    if out.exists():
        raise ValueError("report exists: preserve it; use another filename")
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_bytes(canonical(report) + b"\n")
    ledger_append(args.ledger, {
        "type": "AUDIT", "audit_id": report["audit_id"],
        "report_sha256": digest(report), "verdict": report["gate"]["verdict"],
        "policy_sha256": report["policy_sha256"]
    })
    print(json.dumps({"audit_id": report["audit_id"], "verdict": report["gate"]["verdict"],
                      "reasons": report["gate"]["reasons"], "report": str(out)}, indent=2))

def command_decide(args):
    report = json.loads(Path(args.report).read_text(encoding="utf-8"))
    repo = Path(args.repo).resolve()
    require_outside_repo(args.ledger, repo)
    validate_policy(report["policy"])
    if args.actor not in report["policy"]["human_actors"]:
        raise ValueError("actor not listed in policy")
    entries = ledger_read(args.ledger)
    if not any(e["event"].get("type") == "AUDIT"
               and e["event"].get("audit_id") == report["audit_id"]
               and e["event"].get("report_sha256") == digest(report) for e in entries):
        raise ValueError("audit report not anchored to this ledger")
    if any(e["event"].get("type") == "DECISION"
           and e["event"].get("audit_id") == report["audit_id"] for e in entries):
        raise ValueError("this audit already has a decision")
    if args.decision == "APPROVE":
        if report["gate"]["verdict"] != "PASS":
            raise ValueError("cannot approve a non-PASS gate")
        now = make_report(repo, report["policy"])
        if now["snapshot_sha256"] != report["snapshot_sha256"]:
            raise ValueError("worktree changed since audit; rerun audit")
        expected = report["candidate"]["id"]
        actual = input(f"Human gate: type candidate ID '{expected}' to record approval: ")
        if actual != expected:
            raise ValueError("approval confirmation mismatch")
    elif input("Human gate: type DENY to record rejection: ") != "DENY":
        raise ValueError("denial confirmation mismatch")
    row = ledger_append(args.ledger, {
        "type": "DECISION", "audit_id": report["audit_id"],
        "candidate_id": report["candidate"]["id"],
        "decision": args.decision, "actor_claimed": args.actor,
        "identity_authentication": "UNVERIFIED_CLI_ASSERTION",
        "scope": "RECORD_DECISION_ONLY_NO_COMMIT",
        "timestamp": datetime.now(timezone.utc).isoformat()
    })
    print(json.dumps({"decision": args.decision, "ledger_sequence": row["seq"],
                      "identity_authentication": "UNVERIFIED_CLI_ASSERTION",
                      "committed": False}, indent=2))

def main(argv=None):
    parser = argparse.ArgumentParser(description="CHZ-CORE-VAL-001 deterministic prototype")
    sub = parser.add_subparsers(dest="command", required=True)
    audit = sub.add_parser("audit")
    for option in ("repo", "policy", "report", "ledger"):
        audit.add_argument("--" + option, required=True)
    decide = sub.add_parser("decide")
    for option in ("repo", "report", "ledger", "actor"):
        decide.add_argument("--" + option, required=True)
    decide.add_argument("--decision", choices=["APPROVE", "DENY"], required=True)
    verify = sub.add_parser("verify-ledger")
    verify.add_argument("--ledger", required=True)
    args = parser.parse_args(argv)
    try:
        if args.command == "audit":
            command_audit(args)
        elif args.command == "decide":
            command_decide(args)
        else:
            rows = ledger_read(args.ledger)
            print(json.dumps({"status": "PASS", "entries": len(rows),
                              "tip_hash": rows[-1]["hash"] if rows else "GENESIS"}, indent=2))
    except (ValueError, OSError, RuntimeError) as exc:
        print("CHZ ERROR:", str(exc), file=sys.stderr)
        return 2
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
