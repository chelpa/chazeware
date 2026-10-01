import { Section, StatusTag } from './Section.jsx'
import { ExternalLink } from './ExternalLink.jsx'
import { PROJECTS } from '../content.js'

export function Projects() {
  return (
    <Section
      id="projects"
      index="04"
      title="Projects"
      intro="Products and research lines associated with the ecosystem. Public links are shown only where a public repository exists; internal work is labelled rather than implied to be public."
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
                <dt>Evidence / visibility</dt>
                <dd>
                  {p.evidence}
                  {p.evidenceLink && (
                    <>
                      {' '}
                      <ExternalLink href={p.evidenceLink.href} label={'Repository ' + p.evidenceLink.label}>
                        {p.evidenceLink.label}
                      </ExternalLink>
                    </>
                  )}
                </dd>
              </div>
              <div>
                <dt>Governance use</dt>
                <dd>{p.governed}</dd>
              </div>
            </dl>
          </article>
        ))}
      </div>
    </Section>
  )
}
