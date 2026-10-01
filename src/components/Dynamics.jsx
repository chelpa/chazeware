import { Section, StatusTag } from './Section.jsx'
import { DYNAMICS } from '../content.js'

export function Dynamics() {
  return (
    <Section
      id="dynamics"
      index="03"
      title="Stability & adaptation"
      intro="CHAZEWARE now uses morphostasis and morphogenesis as analytical concepts, not as new engines. The useful distinction is whether a deviation should be contained inside the current regime or should justify a governed change to the regime itself."
    >
      <div className="grid grid-2">
        {DYNAMICS.map((d) => (
          <article className="card" key={d.name}>
            <header className="card-head">
              <h3>{d.name}</h3>
              <StatusTag value="ANALYTICAL CONCEPT" />
            </header>
            <p className="question">{d.subtitle}</p>
            <p>{d.text}</p>
            <dl className="facts">
              <div>
                <dt>Current CHAZEWARE vocabulary</dt>
                <dd>{d.terms}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>

      <aside className="callout">
        <h3>The boundary is governed</h3>
        <p>
          CHELPAHAZE is not only a workflow. Its deeper role is deciding whether
          a perturbation should be absorbed by the current rules or preserved as
          evidence for a candidate structural change.
        </p>
      </aside>
    </Section>
  )
}
