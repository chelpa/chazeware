# CHZ-MORPH-001 — Public Shell v0.2 Closeout

**Experiment status:** COMPLETED / PROMOTED

**Date:** 2026-10-01

This is a post-promotion documentation revision. It records a completed transition without changing previous source revisions or historical audit verdicts. The closeout patch itself remains subject to a separate human closeout decision; it is not covered by the earlier source PASS and is not merged or deployed by this act.

## Experiment question

Can CHAZEWARE evolve its own public model without silently redefining what the previous public model said?

The experiment concerns this repository, its public shell and the human-controlled candidate/review/promotion process. It does not establish novelty for morphostasis or morphogenesis.

## Exact registration

| Object | Identity / observation |
|---|---|
| V0_1_BASELINE | `f2e32a8dead911d992b7aafd7865d15a25cf9cd8` |
| Initial candidate | `a3556ea4e55f5054799667e13c9703fe69ce2c71` |
| R1 candidate | `c7bb65f8008b5e0b20a905cd6004a3645159ed70` |
| PROMOTED_SOURCE_SHA | `d83c7f80c3a6b617d7bc08a98d20eb391b2731c4` |
| Source tree | `13bb9853ada20aa2f69607e59098fbcb6b86c000` |
| HUMAN AUTHORITY_DECISION | `PROMOTE` the approved exact source |
| PROMOTION_MERGE_COMMIT | `e3e40f39322e8b9aeae562896a7a923a88828294` |
| Promotion PR | [PR #1](https://github.com/chelpa/chazeware/pull/1), merged |
| PAGES_DEPLOYMENT_RUN | [36912166784](https://github.com/chelpa/chazeware/actions/runs/36912166784) |
| Deployment execution subject | Promotion merge `e3e40f39322e8b9aeae562896a7a923a88828294` |
| DEPLOYMENT_RESULT | `SUCCESS` |
| PUBLIC_OBSERVATION | `CONFIRMED_BY_HUMAN`: requester reported deployed v0.2 observed online |

The source SHA identifies approved source bytes. The merge SHA identifies a promotion transition with baseline and approved-source parents. The workflow run identifies deployment execution/result. The human public observation is a separate report supplied by the requester; workflow success alone does not manufacture that observation.

The merge's tree matches the approved source tree. Promotion used a merge commit, retaining candidate ancestry. No squash, rebase or rewriting is inferred or performed here.

## Candidate lineage and decisions

The preserved ancestry is:

`f2e32a8dead911d992b7aafd7865d15a25cf9cd8`
→ initial implementation `840735d9d98bd2af49f48e1e1869568d4b430e14`
→ initial audit subject `a3556ea4e55f5054799667e13c9703fe69ce2c71`
→ R1 `c7bb65f8008b5e0b20a905cd6004a3645159ed70`
→ R2 `d83c7f80c3a6b617d7bc08a98d20eb391b2731c4`.

| Meaningful event | Exact binding / disposition |
|---|---|
| Preserve v0.1 baseline | `f2e32a8dead911d992b7aafd7865d15a25cf9cd8` |
| Create initial v0.2 candidate | `a3556ea4e55f5054799667e13c9703fe69ce2c71` |
| Initial audit | `HOLD_REPAIR_REQUIRED` only for `a3556ea4e55f5054799667e13c9703fe69ce2c71`; B1–B5 required repair |
| R1 repair | New subject `c7bb65f8008b5e0b20a905cd6004a3645159ed70` |
| R1 independent readjudication | `HOLD_REPAIR_REQUIRED` only for `c7bb65f8008b5e0b20a905cd6004a3645159ed70`; residual B4 directed accessibility |
| R2 repair | New subject `d83c7f80c3a6b617d7bc08a98d20eb391b2731c4` |
| R2 independent readjudication | `PASS_FOR_HUMAN_PROMOTION_DECISION` only for `d83c7f80c3a6b617d7bc08a98d20eb391b2731c4` |
| Human authority decision | `AUTHORITY_DECISION = PROMOTE`, separate from evaluation |
| Merge | `e3e40f39322e8b9aeae562896a7a923a88828294`, PR #1 |
| Pages deployment | Run `36912166784`, `SUCCESS`, executing the merge subject |
| Public observation | `CONFIRMED_BY_HUMAN`, reported by requester |

The three independent audit records remain unchanged in external exact-subject envelopes. This table is a summary, not a replacement audit or retroactive disposition:

| Historical record | Recorded report SHA-256 |
|---|---|
| Initial HOLD report, subject `a3556ea4…` | `b7456b71c153c3436bd4e56226ee9d2b62a53346594af7a3666e4d0a38eb611a` |
| R1 independent HOLD report, subject `c7bb65f…` | `3bb1d2977fa250ab3164c37d5acf5396b9cfffd6a39fe776f929114dd8b053d5` |
| R2 independent PASS report, subject `d83c7f80…` | `97796b3cd400f32bdb5234715665b1e948fe1560aef94f67b1fdc1c8c6d27bfb` |

[Initial experiment definition](https://github.com/chelpa/chazeware/blob/a3556ea4e55f5054799667e13c9703fe69ce2c71/docs/experiments/CHZ-MORPH-001.md) and [R1 record](https://github.com/chelpa/chazeware/blob/c7bb65f8008b5e0b20a905cd6004a3645159ed70/docs/experiments/CHZ-MORPH-001-R1.md) remain recoverable at exact revisions. Their candidate and pending-promotion wording is historical. PR and branch URLs are locators; exact source/audit bindings remain necessary.

## Distinct experiment lines and DOGFOOD correction

| Experiment line | Closeout boundary |
|---|---|
| CHZ-DOGFOOD-EXP-001 | PLANNED / DESIGN CANDIDATE / NOT EXECUTED; no results or completion |
| CHZ-EXP-001-v1 | Separate experiment line; this closeout issues no execution/result/completion verdict |
| CHZ-EXP-001-v2 | Separate experiment line; not executed by this closeout |
| CHZ-EXP-002 | Separate experiment line; not executed by this closeout |
| CHZ-HIST-001 | Separate reported internal historical case; not completed or validated by CHZ-MORPH-001 |
| CHZ-MORPH-001 | This completed/promoted public-shell repository/process experiment |

CHZ-DOGFOOD-EXP-001 has **not been completed** and **has not been superseded by CHZ-MORPH-001**. CHZ-MORPH-001 is a distinct experiment. DOGFOOD's [original v0.1 definition](https://github.com/chelpa/chazeware/blob/f2e32a8dead911d992b7aafd7865d15a25cf9cd8/src/content.js) remains preserved in Git history and may still be executed later under an explicit protocol.

The historical R1 record described a display retirement/supersession. That wording did not execute DOGFOOD or establish cancellation; this closeout corrects its present public status without altering the historical record. Public development, an audit PASS, promotion and deployment of CHZ-MORPH-001 do not execute DOGFOOD.

This work does not start CHZ-GATE-001 or execute DOGFOOD, CHZ-EXP-001-v2 or CHZ-EXP-002. No experiment line completes another.

## APODE — closeout revision

- **Audit:** inspect promoted main, current website/source, README, hero, History, Experiments, evidence summaries, Dev Log, footer, metadata and experiment record; verify PR/merge/Pages evidence and identify stale candidate wording.
- **Plan:** make the smallest post-promotion status/history correction while retaining scientific/safety/evidence limits and directed accessibility.
- **Organize:** keep baseline, approved source, merge, deployment execution/result and human public observation distinct; preserve historical audits and the R1 record.
- **Direct:** update current status, record the meaningful public sequence, restore DOGFOOD as pending/unexecuted and add this durable closeout.
- **Execute:** change only the closeout branch, verify the patch, register its exact new subject externally after commit creation, and open a PR to main. No merge, deployment or force-push.

## RADO — closeout registration and verification

### Register

- Branch: `closeout/chz-morph-001-v0.2`.
- Parent main: `e3e40f39322e8b9aeae562896a7a923a88828294`.
- Changed files: README.md; index.html; src/content.js; src/index.css (version comment and narrow-screen Dev Log wrapping); src/components/Hero.jsx; History.jsx; Experiments.jsx; DevLog.jsx; docs/experiments/CHZ-MORPH-001.md; this new closeout record.
- Footer and navigation receive v0.2 through the shared VERSION value.
- Exact new closeout SHA, complete diff, command logs, observations and decision are registered in the external post-commit closeout envelope. No self-referential final SHA is embedded in its own source.
- This new subject does not inherit the earlier PASS.

### Expected output

Successful installation/build; runtime, anchor/link/ID, accessibility, five-width responsive and overflow checks; DOGFOOD shown pending/unexecuted; MORPH shown completed/promoted; clean diff; dedicated-branch commit/push and a PR awaiting a human decision.

Expected outputs are not observations. Closeout verification observations and final disposition belong to the external exact-subject envelope; repository-level promotion evidence above concerns the already-promoted source.

### Decision / authority boundary

The human authorized this closeout patch and opening a PR, while prohibiting merge/deployment and the other experiment executions. Verification may support `PASS_FOR_HUMAN_CLOSEOUT_DECISION` or require `HOLD_REPAIR_REQUIRED`; neither grants promotion authority.

## Final narrow finding and limitations

The completed repository/process case supports **“Immutable history. Governed state. Evolvable structure.”**: previous revisions and HOLDs remain recoverable; repairs create new subjects; independent evaluation precedes an explicit human promotion decision; source, transition and deployment evidence remain distinct.

This is not a scientific theorem or validation of CHAZEWARE as a whole. It does not validate private kernels, unpublished papers, internal incidents or other experiment lines, establish comparative advantage, prove universal safety, or demonstrate autonomous governance. Git's content-addressed objects preserve these observed revisions; mutable refs do not guarantee permanent retention. The static shell describes the proposed protocol and does not enforce it. Safety remains a design aim. The promotion process observed here is human-controlled, and technical enforcement of all future boundaries is not established.

CLAIM ≠ EVIDENCE ≠ FINDING ≠ DECISION ≠ AUTHORITY ≠ EXECUTION ≠ OBSERVATION

TRUTH OF A CLAIM ≠ STANDING OF THE ACT THAT PRODUCED IT

BUILD PASS ≠ SEMANTIC PASS ≠ AUTHORITY TO PROMOTE
