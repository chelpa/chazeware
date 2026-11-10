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
          v0.2 is the current public experimental revision. It introduced the
          operational/learning split, explicit CHAZEWARE–CHELPAHAZE–CHZ definitions,
          research state and the morphostasis/morphogenesis distinction.
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
            <StatusTag value="PUBLIC / EXPERIMENTAL" />
          </header>
          <p>
            A versioned structural change promoted through PR #1. The repository
            records deployment; deployment alone does not establish semantic validation or production readiness.
          </p>
        </article>
      </div>

      <aside className="callout">
        <h3>Earlier public entries remain historical</h3>
        <p>
          EGLON was removed from the current inventory; its v0.1 COMING SOON entry
          remains in Git. This is not a claim of termination or a rename to CHZ Finance World.
        </p>
        <p>
          CHZ-DOGFOOD-EXP-001 was retired from the current display as an unexecuted
          design candidate with no results. CHZ-MORPH-001 is a distinct experiment;
          replacing the display slot does not complete or validate the earlier design.
        </p>
      </aside>
    </Section>
  )
}
