import { Section } from './Section.jsx'
import { PRINCIPLES, NOT_CLAIMED } from '../content.js'

export function What() {
  return (
    <Section
      id="what"
      index="01"
      title="What is CHAZEWARE"
      intro="CHAZEWARE is an experimental project on governed human–AI systems. Its public prototype treats each part of a piece of work as a named, visible step instead of an implicit side effect."
    >
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
