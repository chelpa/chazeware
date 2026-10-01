import { Section } from './Section.jsx'
import { BRANCHES, WORKFLOW } from '../content.js'

export function How() {
  return (
    <Section
      id="how"
      index="02"
      title="How it works"
      intro="The primary operational loop stays small. Adjudication and learning are conditional branches rather than mandatory bureaucracy on every execution."
    >
      <ol className="steps">
        {WORKFLOW.map((s, i) => (
          <li className="step" key={s.step} data-group={s.group.toLowerCase()}>
            <span className="step-num">{String(i + 1).padStart(2, '0')}</span>
            <span className="step-group">{s.group}</span>
            <h3>{s.step}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>

      <div className="grid grid-2">
        {BRANCHES.map((b) => (
          <article className="card" key={b.path}>
            <p className="eyebrow">{b.trigger}</p>
            <h3>{b.path}</h3>
            <p>{b.text}</p>
          </article>
        ))}
      </div>

      <p className="note">
        Evidence can justify a factual finding. It cannot manufacture authority.
        Agreement can increase confidence; it does not increase permission.
      </p>
    </Section>
  )
}
