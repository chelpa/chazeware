import { Section, StatusTag } from './Section.jsx'
import { ExternalLink } from './ExternalLink.jsx'
import { DEVLOG, REPO_URL } from '../content.js'

export function DevLog() {
  return (
    <Section
      id="log"
      index="10"
      title="Public development log"
      intro="Selected public milestones, including the CHZ-MORPH-001 candidate, audit, human decision, merge and deployment sequence. This is a curated record, not a list of every Git commit. Audit subjects and promotion events remain distinct."
    >
      <p className="log-repo">
        <span>Repository</span>
        <ExternalLink href={REPO_URL} label="CHAZEWARE repository">
          github.com/chelpa/chazeware
        </ExternalLink>
      </p>
      <ol className="log">
        {DEVLOG.map((e) => (
          <li className="log-row" key={e.revision}>
            <div className="log-rev">
              <ExternalLink
                href={e.reference?.href || `${REPO_URL}/commit/${e.sha}`}
                label={e.reference?.label || `Commit ${e.revision}`}
              >
                <code>{e.revision}</code>
              </ExternalLink>
              <time>{e.date}</time>
            </div>
            <div className="log-body">
              <p className="log-summary">{e.summary}</p>
              <p className="log-evidence">
                <span>Evidence</span> {e.evidence}
                {e.evidenceLink && (
                  <>
                    {' '}
                    <ExternalLink href={e.evidenceLink.href} label={e.evidenceLink.label}>
                      {e.evidenceLink.label}
                    </ExternalLink>
                  </>
                )}
              </p>
            </div>
            <StatusTag value={e.status} />
          </li>
        ))}
      </ol>
    </Section>
  )
}
