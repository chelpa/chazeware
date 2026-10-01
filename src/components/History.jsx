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
          v0.2 is the promoted revision that introduces the operational/learning
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
            <StatusTag value="PROMOTED / DEPLOYED" />
          </header>
          <p>
            A versioned structural change promoted after two historical HOLDs,
            R1/R2 repairs, exact-subject independent PASS and an explicit human
            decision. Pages deployment succeeded; the human confirmed v0.2 online.
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
          CHZ-DOGFOOD-EXP-001 remains PLANNED / DESIGN CANDIDATE / NOT EXECUTED.
          It has not been completed or superseded by CHZ-MORPH-001, which is a
          distinct experiment. Its original v0.1 definition remains preserved in
          Git history; it may still be executed later under an explicit protocol.
        </p>
      </aside>
    </Section>
  )
}
