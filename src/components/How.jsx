import { Section } from './Section.jsx'
import { WORKFLOW } from '../content.js'

export function How() {
  return (
    <Section
      id="how"
      index="02"
      title="How it works"
      intro="A compact model of the intended workflow. It is a description of how CHAZEWARE frames work, not a software kernel: this prototype does not enforce these steps."
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
      <p className="note">
        “Authority” names who may approve. “Authorize” is the moment they do.
        They are separate steps on purpose.
      </p>
    </Section>
  )
}
