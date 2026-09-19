import { Section, StatusTag } from './Section.jsx'
import { EVIDENCE_CHAIN } from '../content.js'

export function Evidence() {
  return (
    <Section
      id="evidence"
      index="05"
      title="Evidence / Case studies"
      intro="CHAZEWARE keeps seven things distinct. Collapsing any two of them is how a claim ends up treated as a fact."
    >
      <ol className="chain">
        {EVIDENCE_CHAIN.map((e, i) => (
          <li key={e.term}>
            <span className="chain-num">{i + 1}</span>
            <h3>{e.term}</h3>
            <p>{e.text}</p>
          </li>
        ))}
      </ol>

      <aside className="callout" aria-label="Audit is not authorization">
        <h3>Audit is not authorization</h3>
        <p>
          Review and audit produce information for a decision. They do not
          approve anything. Only the identified authority can authorize
          execution.
        </p>
      </aside>

      <div className="card card-wide">
        <header className="card-head">
          <h3>Case studies</h3>
          <StatusTag value="COMING SOON" />
        </header>
        <p>
          No case studies are published yet. Each one is intended to state its
          claim, cite its evidence and name its limits.
        </p>
      </div>
    </Section>
  )
}
