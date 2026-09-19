// Static public content for the CHAZEWARE shell (v0.1 prototype).
// Kept in one place so every public claim can be reviewed in a single file.

export const VERSION = 'v0.1'

export const NAV = [
  { id: 'what', label: 'What' },
  { id: 'how', label: 'How it works' },
  { id: 'projects', label: 'Projects' },
  { id: 'experiments', label: 'Experiments' },
  { id: 'evidence', label: 'Evidence' },
  { id: 'map', label: 'System map' },
  { id: 'history', label: 'History' },
  { id: 'log', label: 'Dev log' },
]

export const PRINCIPLES = [
  {
    term: 'Planning',
    text: 'Work is framed as a problem, a decision and an artifact before anything is executed.',
  },
  {
    term: 'Authority',
    text: 'Who may decide, and who may authorize, is stated rather than assumed.',
  },
  {
    term: 'Execution',
    text: 'Carrying out an authorized plan is a separate step from deciding on it.',
  },
  {
    term: 'Evidence',
    text: 'Outcomes leave inspectable records that can be checked against the original claim.',
  },
  {
    term: 'Audit',
    text: 'Records are reviewed after the fact. Audit informs decisions; it does not grant authorization.',
  },
  {
    term: 'Learning',
    text: 'Findings are carried into the next plan instead of being left implicit.',
  },
]

export const NOT_CLAIMED = [
  'Not a scientifically validated method.',
  'Not an autonomous governance system.',
  'Not shown to be better than other approaches.',
  'Not production-ready.',
]

// Group is presentation only; the order of steps is the workflow order.
export const WORKFLOW = [
  { step: 'Problem', group: 'Frame', text: 'State what needs to change, and why.' },
  { step: 'Decision', group: 'Frame', text: 'Decide what to attempt, and what not to.' },
  { step: 'Authority', group: 'Frame', text: 'Name who has standing to approve action.' },
  { step: 'Plan / Artifact', group: 'Prepare', text: 'Write the plan or produce the artifact that will be acted on.' },
  { step: 'Verify', group: 'Prepare', text: 'Check the plan or artifact before anything depends on it.' },
  { step: 'Authorize', group: 'Act', text: 'The named authority approves, or withholds approval.' },
  { step: 'Execute', group: 'Act', text: 'Carry out only what was authorized.' },
  { step: 'Evidence', group: 'Learn', text: 'Keep the records the work produced.' },
  { step: 'Audit', group: 'Learn', text: 'Review the records against the plan. Audit informs; it does not authorize.' },
  { step: 'Learn', group: 'Learn', text: 'Decide what to change in how the work is done.' },
  { step: 'Repeat', group: 'Learn', text: 'Return to the problem with what was learned.' },
]

export const PROJECTS = [
  {
    name: 'CHAZEWARE Lab',
    status: 'PROTOTYPE',
    summary:
      'This public prototype: a static site that describes the CHAZEWARE approach and tracks its own development.',
    evidence: 'This repository and its revision history.',
    governed: 'Described here; not yet formalized as software.',
  },
  {
    name: 'BuscaCursos',
    status: 'COMING SOON',
    summary: 'Public project summary in preparation.',
    evidence: 'None linked yet.',
    governed: 'Not yet documented.',
  },
  {
    name: 'CEIC USACH',
    status: 'COMING SOON',
    summary: 'Public project summary in preparation.',
    evidence: 'None linked yet.',
    governed: 'Not yet documented.',
  },
  {
    name: 'EGLON',
    status: 'COMING SOON',
    summary: 'Public project summary in preparation.',
    evidence: 'None linked yet.',
    governed: 'Not yet documented.',
  },
]

// Design candidate only: not executed, no protocol, no results, no participants.
export const EXPERIMENT = {
  id: 'CHZ-DOGFOOD-EXP-001',
  status: 'RESEARCH / DESIGN CANDIDATE',
  question:
    'Can a lightweight governed workflow preserve traceability from plan → task → evidence → gate → deployed artifact while CHAZEWARE builds itself?',
  facts: [
    { label: 'Protocol', value: 'Not published' },
    { label: 'Execution', value: 'Not executed' },
    { label: 'Results', value: 'None' },
    { label: 'Participation', value: 'Closed' },
  ],
}

export const EVIDENCE_CHAIN = [
  { term: 'CLAIM', text: 'A statement about what is true, needed or achieved. On its own it is unsupported.' },
  { term: 'EVIDENCE', text: 'Material that bears on the claim: records, outputs, measurements, logs.' },
  { term: 'REVIEW', text: 'Someone examines the evidence against the claim and notes what is missing.' },
  { term: 'DECISION', text: 'A choice made in light of the review: accept, revise, reject or defer.' },
  { term: 'AUTHORITY', text: 'The identified party with standing to approve acting on the decision.' },
  { term: 'EXECUTION', text: 'The action carried out under that authority, and only that action.' },
  { term: 'VERIFIED OUTCOME', text: 'The result, checked against the original claim with its own evidence.' },
]

// Conceptual map only. Tiers are ordered top to bottom.
export const MAP = {
  shell: ['This site'],
  work: {
    projects: ['CHAZEWARE Lab', 'BuscaCursos', 'CEIC USACH', 'EGLON'],
    experiments: ['CHZ-DOGFOOD-EXP-001'],
  },
  governance: ['Planning', 'Authority', 'Execution'],
  record: ['Evidence', 'Audit', 'Learning'],
}

export const DEVLOG = [
  {
    revision: '611607c',
    date: '2026-09-19',
    summary: 'Initialize public repository.',
    evidence: 'Commit in repository history: README and ignore rules.',
    status: 'RECORDED',
  },
  {
    revision: '7a7b6fe',
    date: '2026-09-19',
    summary: 'Scaffold public v0.1: minimal React + Vite placeholder page.',
    evidence: 'Commit in repository history: application source and build config.',
    status: 'RECORDED',
  },
  {
    revision: 'ce8ffc5',
    date: '2026-09-19',
    summary: 'Add a GitHub Pages deployment workflow.',
    evidence: 'Commit in repository history: workflow definition file.',
    status: 'RECORDED',
  },
  {
    revision: '75e962a',
    date: '2026-09-19',
    summary: 'Public shell v0.1: the page you are reading.',
    evidence: 'Implementation committed locally after CONTROL PASS. Not yet pushed or deployed.',
    status: 'RECORDED',
  },
]
