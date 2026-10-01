import { Section, StatusTag } from './Section.jsx'
import { ExternalLink } from './ExternalLink.jsx'
import { CASES, EVIDENCE_CHAIN } from '../content.js'

export function Evidence() {
  return (
    <Section
      id="evidence"
      index="06"
      title="Evidence, provenance & case studies"
      intro="The public model keeps governance objects distinct and shows where evidence is public, summarized or still internal."
    >
      <ol className="chain">
        {EVIDENCE_CHAIN.map((e, i) => (
          <li key={e.term}>
            <span className="chain-num">{i + 1}</span>
            <h3>{e.term}</h3>
            <p>{e.text}</p>
          </li>
        ))}
      </ol>

      <aside className="callout" aria-label="Core separation">
        <h3>Core separation</h3>
        <p>
          CLAIM ≠ EVIDENCE ≠ FINDING ≠ DECISION ≠ AUTHORITY ≠ EXECUTION ≠ OBSERVATION.
          A durable record preserves lineage; it does not collapse those categories.
        </p>
      </aside>

      <div className="grid grid-2">
        {CASES.map((c) => (
          <article className="card" key={c.id}>
            <header className="card-head">
              <h3>{c.id}</h3>
              <StatusTag value={c.status} />
            </header>
            <dl className="facts">
              <div>
                <dt>Claim / question</dt>
                <dd>{c.claim}</dd>
              </div>
              <div>
                <dt>Evidence status</dt>
                <dd>
                  {c.evidence}
                  {c.href && (
                    <>
                      {' '}
                      <ExternalLink href={c.href} label={c.linkLabel}>
                        {c.linkLabel}
                      </ExternalLink>
                    </>
                  )}
                  {c.snapshotLink && (
                    <>
                      {' '}
                      <ExternalLink href={c.snapshotLink.href} label={c.snapshotLink.label}>
                        {c.snapshotLink.label}
                      </ExternalLink>
                    </>
                  )}
                </dd>
              </div>
              {c.auditBinding && (
                <div>
                  <dt>Exact audit binding</dt>
                  <dd>{c.auditBinding}</dd>
                </div>
              )}
              <div>
                <dt>Current lesson</dt>
                <dd>{c.lesson}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  )
}
