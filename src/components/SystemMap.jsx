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

function Link({ down, up, forward, reverse }) {
  return (
    <div className="map-link">
      <span className="sr-only">{forward} {reverse}</span>
      <span aria-hidden="true">↓ {down}</span>
      <span aria-hidden="true">↑ {up}</span>
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

        <Link
          down="describes"
          up="publishes public evidence or labelled summaries"
          forward="Public shell describes Work."
          reverse="Work publishes public evidence or labelled summaries to the Public shell."
        />

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

        <Link
          down="is governed by"
          up="permits / blocks transitions"
          forward="Work is governed by Governance core semantics."
          reverse="Governance core semantics permits or blocks transitions in Work."
        />

        <div className="tier tier-gov">
          <h3 className="tier-label">Governance core semantics</h3>
          <Chips items={MAP.governance} />
        </div>

        <Link
          down="produces"
          up="grounds claims about"
          forward="Governance core semantics produces Evidence & record."
          reverse="Evidence & record grounds claims about Governance core semantics."
        />

        <div className="tier tier-record">
          <h3 className="tier-label">Evidence & record</h3>
          <Chips items={MAP.record} />
        </div>

        <Link
          down="feeds learning when material"
          up="constrains future change"
          forward="Evidence & record feeds learning in Adaptation when material."
          reverse="Adaptation constrains future change to Evidence & record."
        />

        <div className="tier tier-work">
          <h3 className="tier-label">Adaptation</h3>
          <Chips items={MAP.adaptation} />
        </div>

        <p className="map-loop">
          <span aria-hidden="true">↺ </span>
          Only if the human authorizes promotion does a candidate become the next governed regime.
        </p>

        <figcaption>
          Conceptual map. Morphostasis and morphogenesis are analytical modes;
          they are not separate runtime engines.
        </figcaption>
      </figure>
    </Section>
  )
}
