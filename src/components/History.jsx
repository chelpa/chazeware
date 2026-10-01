import { Section, StatusTag } from './Section.jsx'
import { BASELINE_SHA, VERSION } from '../content.js'

export function History() {
  return (
    <Section id="history" index="09" title="History / evolution">
      <div className="prose">
        <p>
          CHAZEWARE is being developed through products, engineering experiments,
          historical cases and research design. Its public meaning is allowed to
          evolve, but prior revisions are not silently rewritten.
        </p>
        <p>
          The first public shell is preserved at <code>{BASELINE_SHA.slice(0, 8)}</code>.
          v0.2 is a new candidate revision that introduces the operational/learning
          split, explicit CHAZEWARE–CHELPAHAZE–CHZ definitions, research state and
          the morphostasis/morphogenesis distinction.
        </p>
      </div>

      <div className="grid grid-2">
        <article className="card">
          <header className="card-head">
            <h3>Public shell v0.1</h3>
            <StatusTag value="PRESERVED BASELINE" />
          </header>
          <p>
            Historical public model. It remains inspectable in Git and is the
            comparison point for CHZ-MORPH-001.
          </p>
        </article>

        <article className="card">
          <header className="card-head">
            <h3>{VERSION}</h3>
            <StatusTag value="MORPHOGENESIS CANDIDATE" />
          </header>
          <p>
            A versioned structural change. Promotion should occur only after the
            candidate is inspected and the delta remains consistent with its stated evidence and limits.
          </p>
        </article>
      </div>
    </Section>
  )
}
