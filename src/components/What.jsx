import { Section } from './Section.jsx'
import { DEFINITIONS, PRINCIPLES, NOT_CLAIMED } from '../content.js'

export function What() {
  return (
    <Section
      id="what"
      index="01"
      title="What is CHAZEWARE"
      intro="A public research-and-engineering prototype for governed human–AI work. The architecture is intentionally narrower than an autonomous agent platform."
    >
      <dl className="grid grid-3 defs">
        {DEFINITIONS.map((p) => (
          <div className="cell" key={p.term}>
            <dt>{p.term}</dt>
            <dd>{p.text}</dd>
          </div>
        ))}
      </dl>

      <h3 className="principles-title">Current design principles</h3>
      <dl className="grid grid-3 defs">
        {PRINCIPLES.map((p) => (
          <div className="cell" key={p.term}>
            <dt>{p.term}</dt>
            <dd>{p.text}</dd>
          </div>
        ))}
      </dl>

      <aside className="limits" aria-label="Limits of this prototype">
        <h3>Limits of this prototype</h3>
        <ul>
          {NOT_CLAIMED.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </aside>
    </Section>
  )
}
