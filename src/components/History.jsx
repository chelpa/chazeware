import { Section } from './Section.jsx'
import { VERSION } from '../content.js'

export function History() {
  return (
    <Section id="history" index="07" title="History / About">
      <div className="prose">
        <p>
          CHAZEWARE has been shaped through work on software projects and
          research design work. This site is a prototype of how that work can be
          described in public.
        </p>
        <p>
          It is a prototype. Its descriptions will change as the work does, and
          anything that cannot yet be backed by evidence is marked as such.
        </p>
      </div>
      <dl className="facts facts-row">
        <div>
          <dt>Version</dt>
          <dd>{VERSION} public prototype</dd>
        </div>
        <div>
          <dt>Form</dt>
          <dd>Static site. No accounts, forms or tracking scripts.</dd>
        </div>
        <div>
          <dt>Stage</dt>
          <dd>Prototype</dd>
        </div>
      </dl>
    </Section>
  )
}
