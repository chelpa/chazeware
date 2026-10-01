import { Section } from './Section.jsx'
import { BRANCHES, WORKFLOW } from '../content.js'

export function How() {
  return (
    <Section
      id="how"
      index="02"
      title="How it works"
      intro="This public shell describes the proposed model; it does not enforce the workflow. The primary operational loop stays small, with adjudication and learning as conditional branches."
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

      <div className="grid grid-2 conditional-branches">
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
        Verifiers check scoped authorization; they do not acquire standing to authorize.
        Learning outcomes propose changes; they do not grant permission.
        Agreement can increase confidence; it does not increase permission.
      </p>
    </Section>
  )
}
