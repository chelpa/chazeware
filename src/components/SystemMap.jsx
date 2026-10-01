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
      index="08"
      title="System map"
      intro="A conceptual map of the current architecture. It describes relationships and responsibilities; it is not a claim that every element is an independently deployed software service."
    >
      <figure className="map">
        <div className="tier tier-shell">
          <h3 className="tier-label">Public shell</h3>
          <Chips items={MAP.shell} />
        </div>

        <Link down="describes" up="publishes evidence from" />

        <div className="tier tier-work">
          <h3 className="tier-label">Work</h3>
          <div className="tier-split">
            <div>
              <p className="sub-label">Projects</p>
              <Chips items={MAP.work.projects} />
            </div>
            <div>
              <p className="sub-label">Experiments / cases</p>
              <Chips items={MAP.work.experiments} />
            </div>
          </div>
        </div>

        <Link down="is governed by" up="permits / blocks transitions" />

        <div className="tier tier-gov">
          <h3 className="tier-label">Governance core semantics</h3>
          <Chips items={MAP.governance} />
        </div>

        <Link down="produces" up="grounds claims about" />

        <div className="tier tier-record">
          <h3 className="tier-label">Evidence & record</h3>
          <Chips items={MAP.record} />
        </div>

        <Link down="feeds learning when material" up="constrains future change" />

        <div className="tier tier-work">
          <h3 className="tier-label">Adaptation</h3>
          <Chips items={MAP.adaptation} />
        </div>

        <p className="map-loop" aria-hidden="true">
          ↺ A promoted revision becomes the next governed regime
        </p>

        <figcaption>
          Conceptual map. Morphostasis and morphogenesis are analytical modes;
          they are not separate runtime engines.
        </figcaption>
      </figure>
    </Section>
  )
}
