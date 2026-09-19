import { Section } from './Section.jsx'
import { MAP } from '../content.js'

function Chips({ items }) {
  return (
    <ul className="chips">
      {items.map((label) => (
        <li key={label}>{label}</li>
      ))}
    </ul>
  )
}

function Link({ down, up }) {
  return (
    <div className="map-link" aria-hidden="true">
      <span>↓ {down}</span>
      <span>↑ {up}</span>
    </div>
  )
}

export function SystemMap() {
  return (
    <Section
      id="map"
      index="06"
      title="System map"
      intro="A conceptual picture of how the parts relate. It is not a live diagram of running software."
    >
      <figure className="map">
        <div className="tier tier-shell">
          <h3 className="tier-label">Public shell</h3>
          <Chips items={MAP.shell} />
        </div>

        <Link down="describes" up="published from" />

        <div className="tier tier-work">
          <h3 className="tier-label">Work</h3>
          <div className="tier-split">
            <div>
              <p className="sub-label">Projects</p>
              <Chips items={MAP.work.projects} />
            </div>
            <div>
              <p className="sub-label">Experiment design candidate</p>
              <Chips items={MAP.work.experiments} />
            </div>
          </div>
        </div>

        <Link down="framed by" up="outcomes return" />

        <div className="tier tier-gov">
          <h3 className="tier-label">Governance: kept separate</h3>
          <Chips items={MAP.governance} />
        </div>

        <Link down="leaves" up="informs" />

        <div className="tier tier-record">
          <h3 className="tier-label">Record</h3>
          <Chips items={MAP.record} />
        </div>

        <p className="map-loop" aria-hidden="true">
          ↺ Learning feeds the next plan
        </p>

        <figcaption>
          Conceptual map. Arrows show intended direction of information, not
          implemented integrations.
        </figcaption>
      </figure>
    </Section>
  )
}
