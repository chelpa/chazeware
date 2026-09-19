import { Section, StatusTag } from './Section.jsx'
import { DEVLOG } from '../content.js'

export function DevLog() {
  return (
    <Section
      id="log"
      index="08"
      title="Public development log"
      intro="A small static sample of how development can be tracked: each entry pairs a revision with the evidence behind it and a status. Entries are written by hand in this prototype."
    >
      <ol className="log">
        {DEVLOG.map((e) => (
          <li className="log-row" key={e.revision}>
            <div className="log-rev">
              <code>{e.revision}</code>
              <time>{e.date}</time>
            </div>
            <div className="log-body">
              <p className="log-summary">{e.summary}</p>
              <p className="log-evidence">
                <span>Evidence</span> {e.evidence}
              </p>
            </div>
            <StatusTag value={e.status} />
          </li>
        ))}
      </ol>
    </Section>
  )
}
