import contextlib
import io
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
from chzcore import make_report, ledger_append, ledger_read, command_audit, command_decide

def git(repo, *args):
    return subprocess.run(["git", "-C", str(repo), *args], capture_output=True, text=True, check=True).stdout.strip()

class CoreTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.root = Path(self.temp.name)
        self.repo = self.root / "repo"
        self.repo.mkdir()
        git(self.repo, "init", "-q")
        git(self.repo, "config", "user.email", "test@example.test")
        git(self.repo, "config", "user.name", "Tester")
        (self.repo / "index.html").write_text("<h1>BuscaCursos</h1>\n")
        (self.repo / "existing.txt").write_text("base\n")
        git(self.repo, "add", "index.html", "existing.txt")
        git(self.repo, "commit", "-qm", "fixture baseline")
        (self.repo / "index.html").write_text("<h1>BuscaCursos revisión B</h1>\n")
        (self.repo / "AGENTS.md").write_text("unexpected instructions\n")
        self.policy = {
            "candidate": {"id": "BC-REV-B-FIXTURE", "paths": ["index.html"], "patch_scope": ["index.html"]},
            "allowed_untracked": {"AGENTS.md": "NON_BLOCKING"},
            "human_actors": ["FCO"]
        }
        self.ledger = self.root / "evidence" / "ledger.jsonl"
        self.report = self.root / "evidence" / "report.json"

    def audit(self):
        (self.root / "policy.json").write_text(json.dumps(self.policy))
        with contextlib.redirect_stdout(io.StringIO()):
            command_audit(type("Args", (), {"repo": str(self.repo), "policy": str(self.root / "policy.json"),
                "report": str(self.report), "ledger": str(self.ledger)})())

    def test_allowlisted_agents_is_nonblocking_without_candidate_membership(self):
        report = make_report(self.repo, self.policy)
        self.assertEqual(report["gate"]["verdict"], "PASS")
        self.assertEqual(report["candidate"]["paths"], ["index.html"])
        self.assertEqual(report["worktree"]["untracked"], ["AGENTS.md"])
        self.assertEqual(report["gate"]["unexpected"][0]["classification"], "NON_BLOCKING_POLICY_EXPLICIT")
        self.assertEqual(report["authority"]["status"], "PENDING_HUMAN_DECISION")

    def test_untracked_candidate_never_uses_tracked_diff_evidence(self):
        self.policy["candidate"]["paths"] = ["AGENTS.md"]
        self.policy["candidate"]["patch_scope"] = ["AGENTS.md"]
        self.policy["allowed_untracked"] = {}
        report = make_report(self.repo, self.policy)
        self.assertEqual(report["gate"]["verdict"], "FAIL")
        self.assertEqual(report["evidence"][0]["artifact_state"], "UNTRACKED")
        self.assertNotIn("TRACKED_CHANGE", report["evidence"][0]["method_valid_for"])

    def test_unknown_untracked_is_hold(self):
        self.policy["allowed_untracked"] = {}
        report = make_report(self.repo, self.policy)
        self.assertEqual(report["gate"]["verdict"], "HOLD")

    def test_out_of_scope_tracked_change_is_hold(self):
        (self.repo / "existing.txt").write_text("changed\n")
        report = make_report(self.repo, self.policy)
        self.assertEqual(report["gate"]["verdict"], "HOLD")

    def test_untracked_content_hash_changes_audit(self):
        before = make_report(self.repo, self.policy)["snapshot_sha256"]
        (self.repo / "AGENTS.md").write_text("changed")
        after = make_report(self.repo, self.policy)["snapshot_sha256"]
        self.assertNotEqual(before, after)

    def test_hash_chain_detects_partial_tampering(self):
        ledger_append(self.ledger, {"type": "TEST", "number": 1})
        ledger_append(self.ledger, {"type": "TEST", "number": 2})
        self.assertEqual(len(ledger_read(self.ledger)), 2)
        self.ledger.write_text(self.ledger.read_text().replace('"number":1', '"number":8'))
        with self.assertRaisesRegex(ValueError, "hash mismatch"):
            ledger_read(self.ledger)

    def test_gate_pass_is_not_authorization(self):
        self.audit()
        report = json.loads(self.report.read_text())
        self.assertEqual(report["gate"]["verdict"], "PASS")
        self.assertEqual(len(ledger_read(self.ledger)), 1)
        args = type("Args", (), {"repo": str(self.repo), "report": str(self.report),
            "ledger": str(self.ledger), "actor": "FCO", "decision": "APPROVE"})()
        with patch("builtins.input", return_value="BC-REV-B-FIXTURE"), contextlib.redirect_stdout(io.StringIO()):
            command_decide(args)
        self.assertEqual(ledger_read(self.ledger)[1]["event"]["scope"], "RECORD_DECISION_ONLY_NO_COMMIT")
        with self.assertRaisesRegex(ValueError, "already has a decision"):
            command_decide(args)

    def test_stale_worktree_blocks_approval(self):
        self.audit()
        (self.repo / "index.html").write_text("later edit\n")
        args = type("Args", (), {"repo": str(self.repo), "report": str(self.report),
            "ledger": str(self.ledger), "actor": "FCO", "decision": "APPROVE"})()
        with self.assertRaisesRegex(ValueError, "worktree changed"):
            command_decide(args)

    def test_policy_rejects_traversal(self):
        self.policy["candidate"]["paths"] = ["../secret"]
        self.policy["candidate"]["patch_scope"] = ["../secret"]
        with self.assertRaisesRegex(ValueError, "unsafe path"):
            make_report(self.repo, self.policy)

if __name__ == "__main__":
    unittest.main()
