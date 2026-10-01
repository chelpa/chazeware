# CHAZEWARE

**Immutable history. Governed state. Evolvable structure.**

This repository is the public CHAZEWARE shell: an experimental interface for documenting governed human–AI work, research status, projects, evidence and system evolution.

## Current public evolution

- **v0.1 baseline:** `f2e32a8dead911d992b7aafd7865d15a25cf9cd8`
- **v0.2 candidate:** developed through `CHZ-MORPH-001`
- **Method:** preserve history → observe evidence → create a new revision → verify → promote or reject

The v0.2 candidate introduces an explicit distinction between:

- **morphostasis:** preserve a valid governance regime;
- **morphogenesis:** change the governance regime through a versioned, evidence-bound process.

These are analytical concepts, not new runtime engines.

## Core public statement

> CHAZEWARE explores a design intended to retain identity through history, support safety through governed transitions, and evolve through versioned changes to future rules. These are intended properties, not established safety guarantees.

This public shell describes the proposed model; it does not enforce the workflow. Verifiers check authorization within an identified actor's scope. Verifiers and learning outcomes do not manufacture authority or permission.

CHAZEWARE, CHELPAHAZE and CHZ remain distinct:

- **CHAZEWARE** — experimental control-plane architecture;
- **CHELPAHAZE** — governance/coordination protocol for transitions;
- **CHZ** — evidence, provenance and durable-trace contract.

## Research status

The public shell describes candidate research and engineering work. It does **not** claim scientific validation, autonomous governance, production readiness, proved CHAZEWARE-specific theorems or superiority over established systems.

See `docs/experiments/CHZ-MORPH-001.md` for the first explicit public morphogenesis record.

## Review and exact revision binding

[PR #1](https://github.com/chelpa/chazeware/pull/1) is the evolving review object, not immutable evidence. The prior `HOLD_REPAIR_REQUIRED` audit remains bound only to `a3556ea4e55f5054799667e13c9703fe69ce2c71` and is preserved unchanged outside the candidate source. The original experiment record is recoverable at that exact Git revision.

Repair Round R1 is documented in [CHZ-MORPH-001-R1](docs/experiments/CHZ-MORPH-001-R1.md). Exact candidate SHAs, verification observations and audit dispositions are recorded in external envelopes after commit creation. The source does not embed the final SHA of the bytes that contain it. R1 requires new independent readjudication; verification is not promotion.

## Version namespaces

The npm package version `0.1.0` and public-model version `v0.2 candidate` are intentionally independent. The package version identifies the private React/Vite shell package; the public-model version identifies the documented model revision. R1 leaves the package and lockfile versions unchanged. Neither version grants release or promotion authority.

## Earlier public entries

- **EGLON:** removed from the current public inventory, with its v0.1 `COMING SOON` entry retained in Git history. This removal does not assert project termination, migration, or equivalence to CHZ Finance World.
- **CHZ-DOGFOOD-EXP-001:** retired from the current experiment display. Its v0.1 design-candidate record still says not executed, no published protocol and no results. CHZ-MORPH-001 replaces its display slot as a distinct experiment; it does not retroactively execute, complete or validate the earlier design.
