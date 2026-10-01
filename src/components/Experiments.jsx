import { Section, StatusTag } from './Section.jsx'
import { EXPERIMENTS } from '../content.js'

export function Experiments() {
  return (
    <Section
      id="experiments"
      index="05"
      title="Experiments & governed cases"
      intro="CHAZEWARE distinguishes design candidates, engineering experiments and documented cases. A useful case is not automatically a scientific result."
    >
      <div className="grid grid-2">
        {EXPERIMENTS.map((experiment) => (
          <article className="card experiment" aria-labelledby={experiment.id + '-id'} key={experiment.id}>
            <header className="card-head">
              <h3 className="eyebrow" id={experiment.id + '-id'}>
                {experiment.id}
              </h3>
              <StatusTag value={experiment.status} />
            </header>
            <p className="question">{experiment.question}</p>
            <dl className="facts">
              {experiment.facts.map((f) => (
                <div key={f.label}>
                  <dt>{f.label}</dt>
                  <dd>{f.value}</dd>
                </div>
              ))}
            </dl>
            <p className="experiment-note">{experiment.note}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
