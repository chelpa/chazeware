# CHZ-MORPH-001 · Public Shell v0.1 → v0.2

**Status:** CANDIDATE / ACTIVE  
**Date:** 2026-10-01  
**Subject:** `chelpa/chazeware` public shell  
**Baseline revision:** `f2e32a8dead911d992b7aafd7865d15a25cf9cd8`  
**Authority:** human-authorized website update; this record does not create authority by itself.

## 1. Research / engineering question

Can CHAZEWARE evolve its own public model without silently redefining what the previous public model said?

This is an engineering and governance experiment. It does not establish scientific novelty for the terms morphostasis or morphogenesis.

## 2. Starting state

The v0.1 public shell described CHAZEWARE primarily through a linear workflow:

`Problem → Decision → Authority → Plan / Artifact → Verify → Authorize → Execute → Evidence → Audit → Learn → Repeat`

It deliberately presented experiments and case studies conservatively.

Since that release, the working architecture developed additional distinctions:

- a small primary operational loop with conditional adjudication/learning branches;
- explicit CHAZEWARE / CHELPAHAZE / CHZ roles;
- stronger subject/revision binding and durable-history semantics;
- experimental kernel repair work;
- historical and source-scope case studies;
- candidate Paper 00 / Paper 01 / Paper 02Q research states;
- a useful systems distinction between morphostasis and morphogenesis.

## 3. Candidate invariant set

The v0.2 change must preserve at least:

1. `CLAIM ≠ EVIDENCE ≠ FINDING ≠ DECISION ≠ AUTHORITY`.
2. Historical v0.1 bytes remain recoverable from Git history.
3. New claims remain explicitly status-labelled.
4. A public summary must not imply that internal evidence has been published when it has not.
5. Morphostasis and morphogenesis are treated as analytical concepts, not prematurely implemented as separate engines.
6. Learning does not manufacture authority.
7. A changed governance model is a new revision, not a retroactive rewrite of the old one.

## 4. APODE

### Audit

The public shell baseline is fixed to the exact Git revision above. Its model is useful but no longer represents the full current working architecture.

### Plan

Create a separate v0.2 candidate that:

- preserves the v0.1 baseline;
- updates the public definition;
- replaces the universal linear loop with a primary operational loop plus conditional branches;
- adds stability/adaptation;
- adds current projects, experiments/cases and research-state summaries;
- records the change itself as `CHZ-MORPH-001`.

### Organize

The public site remains a static React/Vite shell. No new backend, database, autonomous learner or governance daemon is introduced.

### Direct

The candidate change is scoped to public documentation and presentation. It does not change the private/internal authority of research artifacts or products.

### Execute

Apply the candidate on a dedicated branch before promotion to `main`.

## 5. RADO record

### Register

- baseline subject: `chelpa/chazeware@f2e32a8...`
- candidate subject: branch `experiment/chz-morph-001-public-v0.2`
- mutation class: public semantic/documentation revision
- history policy: append/version; do not rewrite baseline

### Automatically Data Output

Expected observable outputs:

- changed public model;
- explicit baseline reference;
- Git commit(s) for the candidate;
- a pull request or equivalent reviewable delta;
- eventual deployment evidence only after promotion.

## 6. Morphostasis / morphogenesis interpretation

### Morphostatic path

`deviation → detect → evaluate → gate → contain/correct → verify`

The current regime remains valid.

### Morphogenetic path

`material deviation → preserve evidence → learn → propose structural change → authorize → version → test/review → promote`

The regime itself changes, but history and lineage remain intact.

## 7. Success condition for this experiment

A successful candidate is not merely “the new page looks better.”

It must make the following facts inspectable:

- what the v0.1 baseline was;
- what changed in v0.2;
- what remained invariant;
- which claims are public evidence versus internal summaries;
- that promotion is a distinct act from drafting the candidate.

## 8. Current disposition

`CANDIDATE / ACTIVE`

The candidate should be reviewed before promotion. If promoted, the deployment becomes evidence of the transition; it does not prove the broader CHAZEWARE theory.
