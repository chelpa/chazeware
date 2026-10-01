// Static public content for the CHAZEWARE shell.
// v0.2 is the first explicit public morphogenesis candidate:
// preserve v0.1 history, change the model visibly, record why.

export const VERSION = 'v0.2 candidate'

export const REPO_URL = 'https://github.com/chelpa/chazeware'
export const BASELINE_SHA = 'f2e32a8dead911d992b7aafd7865d15a25cf9cd8'

export const NAV = [
  { id: 'what', label: 'What' },
  { id: 'how', label: 'How it works' },
  { id: 'dynamics', label: 'Stability & adaptation' },
  { id: 'projects', label: 'Projects' },
  { id: 'experiments', label: 'Experiments' },
  { id: 'evidence', label: 'Evidence' },
  { id: 'research', label: 'Research' },
  { id: 'map', label: 'System map' },
  { id: 'log', label: 'Dev log' },
]

export const DEFINITIONS = [
  {
    term: 'CHAZEWARE',
    text: 'An experimental control-plane architecture for governed human–AI work: identity, evidence, state, authority, decision, execution and record remain distinguishable.',
  },
  {
    term: 'CHELPAHAZE',
    text: 'The governance and coordination protocol that determines which state transitions are permitted, blocked, escalated or learned from.',
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
    text: 'Present transitions are checked against scope, evidence, policy and authority.',
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
    status: 'RESEARCH',
    summary:
      'A minimal experimental governance-kernel line used to test authentication, ledger-derived state, tri-state checks, malformed input handling and mandatory gate paths.',
    evidence: 'Internal reproducible test/evidence packages; public summary only here.',
    governed: 'Repair contracts define success before implementation; regression and adversarial tests remain separate.',
  },
  {
    name: 'BuscaCursos',
    status: 'ACTIVE',
    summary:
      'A USACH course-search and schedule-planning product that has also produced real governance and provenance cases.',
    evidence: 'Public repository.',
    evidenceLink: { label: 'chelpa/buscacursos-usach', href: 'https://github.com/chelpa/buscacursos-usach' },
    governed: 'Used as a product and as a source of version, evidence, gate and source-scope lessons.',
  },
  {
    name: 'CEIC USACH',
    status: 'ACTIVE',
    summary:
      'A public student-facing project in the broader academic ecosystem.',
    evidence: 'Public repository.',
    evidenceLink: { label: 'chelpa/ceic-usach', href: 'https://github.com/chelpa/ceic-usach' },
    governed: 'Product scope and shared academic data are kept distinct from governance claims.',
  },
  {
    name: 'Mi Semestre',
    status: 'RESEARCH',
    summary:
      'A study and academic-evidence project used to explore structured learning, navigation and provenance.',
    evidence: 'Working repository is not linked from this public shell.',
    governed: 'Frozen checkpoints and gated revisions are used during development.',
  },
  {
    name: 'CHZ Finance World',
    status: 'RESEARCH',
    summary:
      'An experimental governed simulation/game line that reuses CHAZEWARE distinctions without treating game symbols as authority.',
    evidence: 'Working repository is not linked from this public shell.',
    governed: 'Major feature growth is intentionally downstream of stronger upstream academic data and governance work.',
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
      { label: 'Current result', value: 'v0.2 candidate created as a separate governed revision' },
    ],
    note: 'This is an engineering/research case, not evidence that morphogenesis is a novel CHAZEWARE invention.',
  },
  {
    id: 'CHZ-HIST-001',
    status: 'DOCUMENTED CASE',
    question:
      'Can source evidence remain frozen while later interpretation evolves without rewriting the past?',
    facts: [
      { label: 'Pattern', value: 'EXP → HIST → LEARN' },
      { label: 'Source', value: 'Frozen snapshot' },
      { label: 'Interpretation', value: 'May evolve in a separate layer' },
      { label: 'Lesson', value: 'Declared provenance ≠ observed provenance' },
    ],
    note: 'The complete historical package is not yet published from this public shell.',
  },
  {
    id: 'CHZ-KERNEL-R1',
    status: 'ENGINEERING EXPERIMENT',
    question:
      'Can known governance counterexamples be made unreachable while preserving previously accepted behavior?',
    facts: [
      { label: 'Control', value: 'Frozen v0.1 specimen' },
      { label: 'Repair', value: 'New revision, not silent mutation of the specimen' },
      { label: 'Tests', value: 'Regression + adversarial suites' },
      { label: 'Boundary', value: 'A repaired slice ≠ a complete CHAZEWARE kernel' },
    ],
    note: 'This line tests concrete controls; it does not establish general scientific superiority.',
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
    status: 'PUBLIC',
    claim: 'The public shell can change its model while preserving the v0.1 baseline and explaining the delta.',
    evidence: 'Baseline SHA, candidate branch/PR, repository history and this experiment record.',
    lesson: 'Evolution should create a new governed revision rather than silently redefining the past.',
    href: 'https://github.com/chelpa/chazeware/blob/experiment/chz-morph-001-public-v0.2/docs/experiments/CHZ-MORPH-001.md',
  },
  {
    id: 'CHZ-HIST-001',
    status: 'SUMMARY',
    claim: 'Historical source and evolving interpretation require separate provenance layers.',
    evidence: 'Frozen historical package exists outside this public shell.',
    lesson: 'INTEGRITY ≠ TRUTH; RAW SOURCE ≠ INTERPRETATION.',
  },
  {
    id: 'R1P SOURCE-SCOPE',
    status: 'SUMMARY',
    claim: 'A plausible claim can survive only by re-derivation when the act that first produced it loses standing.',
    evidence: 'Governed BuscaCursos source-scope incident; full evidence not published here.',
    lesson: 'TRUTH OF A CLAIM ≠ STANDING OF THE ACT THAT PRODUCED IT.',
  },
]

export const RESEARCH = [
  {
    id: 'Paper 00',
    status: 'CANDIDATE / FORMALIZATION',
    focus: 'Semantic separation, version-bound work objects, non-coercion and candidate safety properties.',
    gate: 'THEORY_INCOMPLETE',
    limit: 'No CHAZEWARE theorem is claimed as proved here.',
  },
  {
    id: 'Paper 01',
    status: 'CANDIDATE / ALGORITHM SPECIFICATION',
    focus: 'CHZ_VALIDATE-style validation with explicit subject, revision, evidence, blocker and authority checks.',
    gate: 'IMPLEMENTATION_REQUIRED',
    limit: 'Specification and experiments do not yet establish comparative advantage.',
  },
  {
    id: 'Paper 02Q',
    status: 'CANDIDATE / EXPLORATORY',
    focus: 'Exploratory finite/quantum encodings with a final classical policy verifier retaining authority.',
    gate: 'QUANTUM_ENCODING_REQUIRED',
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
    evidence: 'Implementation revision recorded in repository history.',
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
