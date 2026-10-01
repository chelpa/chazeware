// Static public content for the CHAZEWARE shell.
// v0.2 is the first explicit public morphogenesis candidate:
// preserve v0.1 history, change the model visibly, record why.

export const VERSION = 'v0.2 candidate'

export const REPO_URL = 'https://github.com/chelpa/chazeware'
export const BASELINE_SHA = 'f2e32a8dead911d992b7aafd7865d15a25cf9cd8'
export const PR_URL = `${REPO_URL}/pull/1`
// Historical subject only. Current candidate SHAs belong in external audit envelopes.
export const PRIOR_AUDIT_SHA = 'a3556ea4e55f5054799667e13c9703fe69ce2c71'

export const NAV = [
  { id: 'what', label: 'What' },
  { id: 'how', label: 'How it works' },
  { id: 'dynamics', label: 'Stability & adaptation' },
  { id: 'projects', label: 'Projects' },
  { id: 'experiments', label: 'Experiments' },
  { id: 'evidence', label: 'Evidence' },
  { id: 'research', label: 'Research' },
  { id: 'map', label: 'System map' },
  { id: 'history', label: 'History' },
  { id: 'log', label: 'Dev log' },
]

export const DEFINITIONS = [
  {
    term: 'CHAZEWARE',
    text: 'An experimental control-plane architecture for governed human–AI work: identity, evidence, state, authority, decision, execution and record remain distinguishable.',
  },
  {
    term: 'CHELPAHAZE',
    text: 'The proposed governance and coordination protocol for determining which state transitions may be permitted, blocked, escalated or learned from. This shell does not implement those controls.',
  },
  {
    term: 'CHZ',
    text: 'The evidence, provenance and durable-trace contract. A record can preserve what happened without automatically making a claim true or authorized.',
  },
]

export const PRINCIPLES = [
  {
    term: 'Immutable history',
    text: 'Past evidence and released revisions are preserved rather than silently rewritten.',
  },
  {
    term: 'Governed state',
    text: 'The design calls for present transitions to be checked against scope, evidence, policy and authority; this shell does not enforce those checks.',
  },
  {
    term: 'Evolvable structure',
    text: 'Rules and structures may change, but through explicit revisions with retained lineage.',
  },
  {
    term: 'Evidence separation',
    text: 'CLAIM, EVIDENCE, FINDING, DECISION and AUTHORITY are different semantic objects.',
  },
  {
    term: 'Version binding',
    text: 'Material verdicts bind to an exact subject revision; a verdict does not silently float to changed bytes.',
  },
  {
    term: 'Governed learning',
    text: 'A useful incident can propose a new invariant or policy, but learning does not manufacture authority.',
  },
]

export const NOT_CLAIMED = [
  'Not a scientifically validated method.',
  'Not an autonomous governance system.',
  'Not shown to be better than established alternatives.',
  'Not a complete production implementation.',
  'No CHAZEWARE-specific theorem is claimed as proved by this public shell.',
]

export const WORKFLOW = [
  { step: 'Intent', group: 'Frame', text: 'State the intended change and its scope.' },
  { step: 'Plan', group: 'Frame', text: 'Define the work item, expected result and relevant constraints.' },
  { step: 'Authorize', group: 'Govern', text: 'Require authority when the transition or effect demands it.' },
  { step: 'Execute', group: 'Act', text: 'Carry out only the bounded authorized work.' },
  { step: 'Observe', group: 'Observe', text: 'Capture what actually happened rather than what was expected to happen.' },
  { step: 'Verify', group: 'Observe', text: 'Compare evidence with claims, invariants and acceptance conditions.' },
  { step: 'Transition', group: 'Govern', text: 'Permit, deny, defer, hold, complete or otherwise move to an explicit next state.' },
]

export const BRANCHES = [
  {
    trigger: 'Disagreement / ambiguity',
    path: 'ADJUDICATE',
    text: 'Escalate only when competing interpretations or unresolved authority require adjudication.',
  },
  {
    trigger: 'Material incident / valuable lesson',
    path: 'LEARNING PROTOCOL',
    text: 'Preserve evidence, derive a candidate lesson and govern any proposed change to future rules.',
  },
]

export const DYNAMICS = [
  {
    name: 'Morphostasis',
    subtitle: 'Preserve a valid regime',
    text: 'Detect, contain or correct deviations while keeping the current governance regime valid.',
    terms: 'GATE · VERIFY · HOLD · DENY · FREEZE · REGRESSION · exact revision binding',
  },
  {
    name: 'Morphogenesis',
    subtitle: 'Change the regime deliberately',
    text: 'When evidence shows a structural lesson, propose a versioned change to rules, policy, tests or architecture and govern its promotion.',
    terms: 'LEARNING PROTOCOL · ERR-TO-INTUV · REVISION · SUPERSESSION · RE-DERIVATION · CHANGE CONTROL · adversarial repair',
  },
]

export const PROJECTS = [
  {
    name: 'CHAZEWARE Public Shell',
    status: 'PROTOTYPE',
    summary:
      'The public interface you are reading. v0.2 is being used as the first explicit public morphogenesis case.',
    evidence: 'Repository history and the CHZ-MORPH-001 experiment record.',
    evidenceLink: { label: 'chelpa/chazeware', href: REPO_URL },
    governed: 'Public changes are versioned; v0.1 remains preserved in Git history.',
  },
  {
    name: 'CHZ Kernel',
    status: 'RESEARCH / INTERNAL_EVIDENCE_ONLY',
    summary:
      'A minimal experimental governance-kernel line used to test authentication, ledger-derived state, tri-state checks, malformed input handling and mandatory gate paths.',
    evidence: 'INTERNAL_EVIDENCE_ONLY. Reported internal test/evidence packages; this public summary does not independently verify their reproducibility or results.',
    governed: 'Reported internal repair design: contracts define success before implementation; regression and adversarial tests are separate.',
  },
  {
    name: 'BuscaCursos',
    status: 'ACTIVE',
    summary:
      'A USACH course-search and schedule-planning product.',
    evidence: 'PUBLIC_EVIDENCE for the product: public repository. This link does not substantiate internal governance incidents.',
    evidenceLink: { label: 'chelpa/buscacursos-usach', href: 'https://github.com/chelpa/buscacursos-usach' },
    governed: 'INTERNAL_EVIDENCE_ONLY for reported version, gate, provenance and R1P source-scope cases; full incident evidence is not published here.',
  },
  {
    name: 'CEIC USACH',
    status: 'ACTIVE',
    summary:
      'A public student-facing project in the broader academic ecosystem.',
    evidence: 'PUBLIC_EVIDENCE for the student-facing project: public repository.',
    evidenceLink: { label: 'chelpa/ceic-usach', href: 'https://github.com/chelpa/ceic-usach' },
    governed: 'INTERNAL_EVIDENCE_ONLY for reported governance practice. The intended boundary keeps product scope and shared academic data distinct from governance claims.',
  },
  {
    name: 'Mi Semestre',
    status: 'RESEARCH / INTERNAL_EVIDENCE_ONLY',
    summary:
      'A study and academic-evidence project used to explore structured learning, navigation and provenance.',
    evidence: 'INTERNAL_EVIDENCE_ONLY. Working repository and checkpoint evidence are not published from this shell.',
    governed: 'Reported internal development practice: frozen checkpoints and gated revisions; not independently verified here.',
  },
  {
    name: 'CHZ Finance World',
    status: 'RESEARCH / INTERNAL_EVIDENCE_ONLY',
    summary:
      'An experimental governed simulation/game line that reuses CHAZEWARE distinctions without treating game symbols as authority.',
    evidence: 'INTERNAL_EVIDENCE_ONLY. Working repository and research evidence are not published from this shell.',
    governed: 'Reported internal plan: major feature growth depends on upstream academic data and governance work; this is not an observed delivery result.',
  },
]

export const EXPERIMENTS = [
  {
    id: 'CHZ-MORPH-001',
    status: 'CANDIDATE / ACTIVE',
    question:
      'Can CHAZEWARE evolve its own public model without rewriting the model that came before it?',
    facts: [
      { label: 'Baseline', value: 'Public shell v0.1 @ f2e32a8' },
      { label: 'Method', value: 'Preserve → observe → revise → verify → promote' },
      { label: 'Invariant', value: 'History is retained; claims remain status-labelled' },
      { label: 'OBSERVATION', value: 'A separate v0.2 candidate artifact was created; creation is not promotion or experiment success.' },
      { label: 'DECISION', value: 'R1 repairs require a new independent audit before any human promotion decision.' },
    ],
    note: 'This is an engineering/research case, not evidence that morphogenesis is a novel CHAZEWARE invention.',
  },
  {
    id: 'CHZ-HIST-001',
    status: 'DOCUMENTED CASE / INTERNAL_EVIDENCE_ONLY',
    question:
      'Can source evidence remain frozen while later interpretation evolves without rewriting the past?',
    facts: [
      { label: 'Pattern', value: 'EXP → HIST → LEARN' },
      { label: 'Source', value: 'Reported internal frozen snapshot; not independently inspected by this shell' },
      { label: 'Interpretation', value: 'May evolve in a separate layer' },
      { label: 'Lesson', value: 'Declared provenance ≠ observed provenance' },
    ],
    note: 'INTERNAL_EVIDENCE_ONLY. The case and its lesson are reported summaries; the complete historical package is not published here.',
  },
  {
    id: 'CHZ-KERNEL-R1',
    status: 'ENGINEERING EXPERIMENT / INTERNAL_EVIDENCE_ONLY',
    question:
      'Can known governance counterexamples be made unreachable while preserving previously accepted behavior?',
    facts: [
      { label: 'Control / repair design', value: 'Reported internal design: frozen v0.1 specimen and a separate repair revision' },
      { label: 'Test design', value: 'Reported regression and adversarial suites; a suite description is not an execution record' },
      { label: 'Execution', value: 'INTERNAL_EVIDENCE_ONLY; no exact execution subject, revision or run record is published here' },
      { label: 'Results', value: 'Not independently verified by this public shell; no test-pass or counterexample-elimination verdict is issued here' },
      { label: 'Boundary', value: 'A repaired slice ≠ a complete CHAZEWARE kernel' },
    ],
    note: 'INTERNAL_EVIDENCE_ONLY. This summary describes the research line and its test design, not public execution evidence or established superiority.',
  },
]

export const EVIDENCE_CHAIN = [
  { term: 'CLAIM', text: 'A proposition about what is true, needed or achieved.' },
  { term: 'EVIDENCE', text: 'Material that can support, contradict or leave the claim unresolved.' },
  { term: 'FINDING', text: 'An interpretation derived from evidence; not the evidence itself.' },
  { term: 'DECISION', text: 'A chosen disposition such as accept, revise, reject, defer or hold.' },
  { term: 'AUTHORITY', text: 'Standing to make a specified class of decision within scope.' },
  { term: 'EXECUTION', text: 'The bounded action actually carried out.' },
  { term: 'OBSERVATION', text: 'What was observed after execution, including unexpected outcomes.' },
  { term: 'RECORD', text: 'The durable history tying subjects, revisions, actors, evidence and transitions together.' },
]

export const CASES = [
  {
    id: 'CHZ-MORPH-001',
    status: 'PUBLIC SUMMARY / CANDIDATE',
    claim: 'The public shell can change its model while preserving the v0.1 baseline and explaining the delta.',
    evidence: 'PR #1 is the evolving review object. The original experiment record is pinned to the previously audited revision; it does not describe later repaired bytes.',
    lesson: 'Evolution should create a new governed revision rather than silently redefining the past.',
    auditBinding: `The prior HOLD_REPAIR_REQUIRED disposition binds only to ${PRIOR_AUDIT_SHA}. Each exact candidate SHA and audit disposition must be registered in an external audit envelope; R1 requires a new independent audit.`,
    href: PR_URL,
    linkLabel: 'PR #1 review object',
    snapshotLink: {
      label: 'Original experiment record @ a3556ea4',
      href: `${REPO_URL}/blob/${PRIOR_AUDIT_SHA}/docs/experiments/CHZ-MORPH-001.md`,
    },
  },
  {
    id: 'CHZ-HIST-001',
    status: 'SUMMARY / INTERNAL_EVIDENCE_ONLY',
    claim: 'Historical source and evolving interpretation require separate provenance layers.',
    evidence: 'INTERNAL_EVIDENCE_ONLY. A frozen historical package is reported outside this public shell; its provenance and contents are not independently verified here.',
    lesson: 'INTEGRITY ≠ TRUTH; RAW SOURCE ≠ INTERPRETATION.',
  },
  {
    id: 'R1P SOURCE-SCOPE',
    status: 'SUMMARY / INTERNAL_EVIDENCE_ONLY',
    claim: 'Under this proposed protocol, a plausible claim requires independent re-derivation if its originating act loses standing; factual truth and permission are separate questions.',
    evidence: 'INTERNAL_EVIDENCE_ONLY. Reported BuscaCursos R1P source-scope incident; full evidence and standing adjudication are not published here.',
    lesson: 'TRUTH OF A CLAIM ≠ STANDING OF THE ACT THAT PRODUCED IT.',
  },
]

export const RESEARCH = [
  {
    id: 'Paper 00',
    status: 'CANDIDATE / FORMALIZATION',
    focus: 'Semantic separation, version-bound work objects, non-coercion and candidate safety properties.',
    gate: 'THEORY_INCOMPLETE',
    evidence: 'INTERNAL_EVIDENCE_ONLY. Topic and gate are reported from unpublished research; no exact paper revision or independent evaluation is published here.',
    limit: 'No CHAZEWARE theorem is claimed as proved here.',
  },
  {
    id: 'Paper 01',
    status: 'CANDIDATE / ALGORITHM SPECIFICATION',
    focus: 'CHZ_VALIDATE-style validation with explicit subject, revision, evidence, blocker and authority checks.',
    gate: 'IMPLEMENTATION_REQUIRED',
    evidence: 'INTERNAL_EVIDENCE_ONLY. Specification and gate are reported from unpublished research; no exact paper revision or independent evaluation is published here.',
    limit: 'Specification and experiments do not yet establish comparative advantage.',
  },
  {
    id: 'Paper 02Q',
    status: 'CANDIDATE / EXPLORATORY',
    focus: 'Exploratory finite/quantum encodings with a final classical policy verifier checking scoped authorization. The verifier does not manufacture authority.',
    gate: 'QUANTUM_ENCODING_REQUIRED',
    evidence: 'INTERNAL_EVIDENCE_ONLY. Exploratory topic and gate are reported from unpublished research; no exact paper revision or independent evaluation is published here.',
    limit: 'No CHAZEWARE-specific quantum advantage or theorem is claimed.',
  },
]

export const MAP = {
  shell: ['Public shell v0.2 candidate'],
  work: {
    projects: ['Public Shell', 'CHZ Kernel', 'BuscaCursos', 'CEIC USACH', 'Mi Semestre', 'CHZ Finance World'],
    experiments: ['CHZ-MORPH-001', 'CHZ-HIST-001', 'CHZ-KERNEL-R1'],
  },
  governance: ['Identity', 'State', 'Evaluation', 'Gate', 'Authority'],
  record: ['Evidence', 'CHZ trace', 'History'],
  adaptation: ['Morphostasis', 'Learning Protocol', 'Morphogenesis'],
}

export const DEVLOG = [
  {
    revision: '611607c',
    sha: '611607c21fc831d7e7300c81b92247f1406fab72',
    date: '2026-09-19',
    summary: 'Initialize public repository.',
    evidence: 'Commit in repository history: README and ignore rules.',
    status: 'RECORDED',
  },
  {
    revision: '7a7b6fe',
    sha: '7a7b6fe3bf94b538b9120587a38cd4585c55d7c6',
    date: '2026-09-19',
    summary: 'Scaffold public v0.1.',
    evidence: 'Commit in repository history: React/Vite source and build config.',
    status: 'RECORDED',
  },
  {
    revision: 'ce8ffc5',
    sha: 'ce8ffc5b6e03cfcc7bfdac7da36cdfeb92e28481',
    date: '2026-09-19',
    summary: 'Configure GitHub Pages deployment.',
    evidence: 'Commit in repository history: workflow definition.',
    status: 'RECORDED',
  },
  {
    revision: '75e962a',
    sha: '75e962a9762c8e78af2ece445ccc866e2f9395ed',
    date: '2026-09-19',
    summary: 'Build CHAZEWARE public shell v0.1.',
    evidence: 'Implementation revision included in successful historical Pages deployment run 35465901154 at deployed revision f3bb386; this is v0.1 evidence, not v0.2 deployment.',
    evidenceLink: {
      label: 'Historical v0.1 Pages deployment run 35465901154',
      href: `${REPO_URL}/actions/runs/35465901154`,
    },
    status: 'RECORDED',
  },
  {
    revision: 'f1d3635',
    sha: 'f1d363518083598624d99646f369d39fc67f60f2',
    date: '2026-09-19',
    summary: 'Record public shell milestone.',
    evidence: 'Documentation revision in repository history.',
    status: 'RECORDED',
  },
  {
    revision: 'f3bb386',
    sha: 'f3bb3861a7499acdc768a2a957a4e9f00c06110f',
    date: '2026-09-19',
    summary: 'Update public shell deployment evidence.',
    evidence: 'Documentation revision tied the shell to a successful Pages deployment.',
    status: 'RECORDED',
  },
  {
    revision: 'f2e32a8',
    sha: BASELINE_SHA,
    date: '2026-09-19',
    summary: 'Address CHZ-009 publication audit findings.',
    evidence: 'This exact commit is the frozen baseline for CHZ-MORPH-001.',
    status: 'V0.1 BASELINE',
  },
]
