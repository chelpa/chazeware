import { Section, StatusTag } from './Section.jsx'
import { ExternalLink } from './ExternalLink.jsx'
import { PROJECTS } from '../content.js'

export function Projects() {
  return (
    <Section
      id="projects"
      index="03"
      title="Projects"
      intro="Work associated with CHAZEWARE. Only what can be shown from this repository is described; the rest is marked as in preparation."
    >
      <div className="grid grid-2">
        {PROJECTS.map((p) => (
          <article className="card" key={p.name}>
            <header className="card-head">
              <h3>{p.name}</h3>
              <StatusTag value={p.status} />
            </header>
            <p>{p.summary}</p>
            <dl className="facts">
              <div>
                <dt>Public evidence</dt>
                <dd>
                  {p.evidence}
                  {p.evidenceLink && (
                    <>
                      {' '}
                      <ExternalLink href={p.evidenceLink.href} label={`Repository ${p.evidenceLink.label}`}>
                        {p.evidenceLink.label}
                      </ExternalLink>
                    </>
                  )}
                </dd>
              </div>
              <div>
                <dt>Governed workflow</dt>
                <dd>{p.governed}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  )
}
