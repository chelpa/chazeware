import { Section, StatusTag } from './Section.jsx'
import { RESEARCH } from '../content.js'

export function Research() {
  return (
    <Section
      id="research"
      index="07"
      title="Research / papers"
      intro="These are current internal research directions and gates. Listing them here does not promote candidate claims into proved results or publication-ready work."
    >
      <div className="grid grid-3">
        {RESEARCH.map((paper) => (
          <article className="card" key={paper.id}>
            <header className="card-head">
              <h3>{paper.id}</h3>
              <StatusTag value={paper.status} />
            </header>
            <p>{paper.focus}</p>
            <dl className="facts">
              <div>
                <dt>Current gate</dt>
                <dd><code>{paper.gate}</code></dd>
              </div>
              <div>
                <dt>Limit</dt>
                <dd>{paper.limit}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  )
}
