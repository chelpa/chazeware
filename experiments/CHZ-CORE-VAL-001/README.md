# CHZ-CORE-VAL-001 · Minimal executable governance experiment

**Status:** executable **local synthetic-fixture prototype**; **NOT** a replay of the historical `CHZ-EXP-001` original worktree and **NOT** a production governance service.

## Decision / scope

We are testing the architecture-reduction hypothesis from the recovered `CHZ-EXP-001` Lane A review, not canonizing that review:

- `CLI / Runner`: accepts explicit policy and worktree, evaluates an audit, records a human claim.
- `Evaluator`: deterministic `PASS | HOLD | FAIL` tied to the `EVIDENCE_FROZEN -> AUDITED` eligibility transition.
- `Ledger`: JSONL with SHA-256 hash chaining, plus report binding.

**No LLM, network calls, WhatsApp, database, autonomous commit, merge, deployment or automatic authorization.**

The reference material recommended a 200–400-line vertical slice on BuscaCursos REV B with an unexpected `AGENTS.md`. The exact nine original REV B paths and historical worktree were **not verified** for this new slice; the test instead creates a **fresh temporary Git repository** that reproduces the essential conditions. Do not label synthetic success a historical reproduction.

## ELI5

The auditor looks at a Git work folder and asks three questions: Which files are in the proposed change? Are there extra files? Does the evidence actually prove what it claims? It writes the result to a log. **Passing the inspection is not permission to publish.** A human must make a separate decision, and the program still makes no commit.

## Quick test (Python 3.11+ and Git installed)

```bash
python3 -m unittest discover -s tests -v
```

## Run against a disposable Git test directory

The policy file is a *fixture example*, not the historical revision's real scope. Replace candidate paths and approved policy only when you have the exact scope for an actual test. Store reports and ledger **outside** the examined Git repository:

```bash
python3 chzcore.py audit \
  --repo /absolute/path/to/disposable-git-repo \
  --policy fixtures/policy.synthetic.json \
  --report /tmp/chz-evidence/audit-001.json \
  --ledger /tmp/chz-evidence/ledger.jsonl

python3 chzcore.py verify-ledger \
  --ledger /tmp/chz-evidence/ledger.jsonl

# Optional local declaration, with interactive candidate-ID confirmation:
python3 chzcore.py decide \
  --repo /absolute/path/to/disposable-git-repo \
  --report /tmp/chz-evidence/audit-001.json \
  --ledger /tmp/chz-evidence/ledger.jsonl \
  --actor FCO --decision APPROVE
```

**Never use an arbitrary working directory as a disposable test**: `audit` is read-only but you should avoid capturing private file contents/metadata in outputs. A fixture repo with `index.html` tracked and modified plus `AGENTS.md` untracked is constructed automatically by the unit tests.

## Defined falsification criteria

| Test | Expected behavior | State in this PR |
|---|---|---|
| Untracked candidate | `FAIL`; never claims `git diff HEAD` proves the file is unchanged | Unit-tested |
| Extra `AGENTS.md` with exact allowlist | `NON_BLOCKING_POLICY_EXPLICIT`, outside `candidate.paths` | Unit-tested |
| Extra unknown untracked file | `HOLD` | Unit-tested |
| Tracked modification outside patch scope | `HOLD` | Unit-tested |
| Evidence changed between audit and decision | Decline approval | Unit-tested |
| Valid audit gate | `PASS` but pending human; no commit | Unit-tested |
| Ledger tampering | Local hash-chain check detects inconsistent rewrite | Unit-tested |
| Historical REV B worktree | Reproduce using recovered original source | **NOT DONE** |
| Baseline (Git + PR + checklist) vs CHZ | Compare 5 work items and measure effort/errors | **NOT DONE** |

`PASS` here is **only** eligibility to continue review. `AUTHORIZATION_RECORDED` is not a cryptographically authenticated user. The `decide` command stores an explicit CLI assertion with `identity_authentication=UNVERIFIED_CLI_ASSERTION`. It does **not** create a commit or permit an external service to publish.

## Format and semantics

- `candidate.paths`: explicit membership list of the candidate.
- `candidate.patch_scope`: explicit permitted change scope, containing all candidate paths.
- `worktree.untracked`: present files, not automatically members of the candidate.
- `allowed_untracked`: *exact file-path* policy for classifying a known unexpected artifact as non-blocking **in scope only**; never treats the file's content as instructions.
- `evidence.method_valid_for`: a tracked-file diff can support `TRACKED_CHANGE`, but an untracked file gets only `PRESENCE` evidence here.
- `audit.report`: current HEAD, candidate evidence, worktree observation, hashes, gate verdict, and explicitly missing LLM provenance (no LLM is used).
- `ledger.jsonl`: hash-linked event entries. `AUDIT` references the report digest; `DECISION` references the audit. Local internal verification only.

## Known limitations / no-go conditions

- Git ignored files, submodules, concurrent writers, filesystem races, and arbitrary nonstandard Git configurations are **not** exhaustively modeled. Never connect this prototype to automated production deployment.
- This ledger is **hash-linked, not immutable or externally anchored**. Anyone capable of rewriting all records can recompute the hash chain. For stronger provenance, separately anchor a root/tip digest to a trusted immutable store.
- The CLI assertion of `FCO` is **not authenticated**, even after interactive confirmation; real authority requires account-backed identity and audit controls.
- This test tests the *principle* behind the historical incident, not whether the old historical model was fully correct.
- An audit report may include hashed metadata related to untracked file paths; treat it as potentially sensitive.
- `CHZ-EXP-001` had a known provenance mismatch (`model_declared != model_observed`) and incomplete original-source recovery. The prototype does not rewrite those facts, close `CHZ-LEARN-001`, authorize `CHZ-DEC-001`, or create `CHZ-CANON-001`.

## Next human gate

1. Review this PR and the nine unit tests, run on a disposable clone.
2. Determine whether the original `CHZ-EXP-001` artifacts are sufficient to reconstruct a legitimate REV B scenario (do not fabricate missing sources).
3. Execute a five-work-item comparison with the simplest viable baseline (Git + PR + checklist).
4. Only then consider formal `CHZ-LEARN-001` and `CHZ-DEC-001`. Keep `CHZ-WA-AGENT-001` PR #6 in draft pending core integration.

**Rule: SOURCE != INTERPRETATION; PASS != AUTHORIZATION; AUTHORIZATION RECORD != AUTHENTICATED IDENTITY; LEDGER INTEGRITY != TRUTH.**