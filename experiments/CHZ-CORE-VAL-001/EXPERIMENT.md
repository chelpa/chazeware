# CHZ-CORE-VAL-001 · Experiment protocol v0.1

## Research question

Can a small deterministic system distinguish **artifact presence** from **candidate membership**, reject invalid evidence methods, preserve an append-only local trace, and prevent audit results from silently becoming authority?

## Claim and limitations

This is a **new executable validation** derived from the *recovered Lane A review* of `CHZ-EXP-001`, **not a historical rerun** of `CHZ-EXP-001`. The test fixture is synthetic. The original historical source brief was not fully recovered byte-for-byte in `CHZ-HIST-001`.

## Hypotheses

- H1: `git diff HEAD` is not sufficient evidence for an untracked artifact; the evaluator rejects a candidate built from it.
- H2: An unexpected `AGENTS.md` can be `NON_BLOCKING` only when exact-scope policy explicitly says so and the file is **not** silently promoted into candidate membership.
- H3: A `PASS` result does not create a `DECISION` record, a commit, or deployment.
- H4: Report/ledger integrity checks detect accidental or partial tampering (not malicious whole-chain re-anchoring).

## Preconditions

- Disposable Git repository; clean baseline commit with tracked `index.html`.
- Modified tracked `index.html` representing candidate, untracked `AGENTS.md` representing unexpected presence.
- Fixed explicit candidate and patch scope, explicit non-blocking classification for this single artifact.
- Local test executes without LLMs, network access, GitHub write permission, or deployment credentials.

## Adversarial controls

- Remove the `allowed_untracked` exception: expect `HOLD`.
- Declare `AGENTS.md` as candidate: expect `FAIL` and only presence evidence.
- Modify an out-of-scope tracked file: expect `HOLD`.
- Change worktree content after PASS: expect authorization recording to reject stale evidence.
- Rewrite an existing ledger event without adjusting its hash: expect verification error.

## Distinguish results

- `OBSERVED`: outputs of tests and CI on this revision.
- `INTERPRETATION`: the test supports scoped evidence semantics.
- `UNKNOWN`: general applicability, real REV B replay, comparative benefit over Git-only baseline.
- `AUTHORITY`: no canonical decision implied; formal disposition remains pending.

## Follow-on comparative test

Pre-register five similar engineering work items. Randomize order, use either Git + PR + checklist or CHZ CLI + Git, and measure scope errors detected, false blocks, human minutes, reproducibility of audit results and evidence missingness. If CHZ does not improve evidence quality or does so only at unjustifiable overhead, reduce or eliminate its abstractions. Preserve dissent and negative results.