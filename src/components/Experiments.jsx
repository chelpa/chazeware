import { Section, StatusTag } from './Section.jsx'
import { EXPERIMENT } from '../content.js'

export function Experiments() {
  return (
    <Section
      id="experiments"
      index="04"
      title="Experiments"
      intro="One candidate experiment design. It is not a completed experiment: nothing has been run, no protocol is published, and there are no results."
    >
      <article className="card experiment" aria-labelledby="exp-001-id">
        <header className="card-head">
          <h3 className="eyebrow" id="exp-001-id">
            {EXPERIMENT.id}
          </h3>
          <StatusTag value={EXPERIMENT.status} />
        </header>
        <p className="question">{EXPERIMENT.question}</p>
        <dl className="facts">
          {EXPERIMENT.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </article>
    </Section>
  )
}
