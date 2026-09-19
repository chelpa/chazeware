import { StatusTag } from './Section.jsx'
import { VERSION, WORKFLOW } from '../content.js'

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <p className="hero-meta">
          <span>Public prototype {VERSION}</span>
          <StatusTag value="PROTOTYPE" />
        </p>
        <h1 id="hero-title">CHAZEWARE</h1>
        <p className="hero-sub">Experimental governed human–AI systems.</p>
        <p className="hero-lead">
          A public prototype exploring systems where planning, authority,
          execution, evidence, audit and learning remain explicit.
        </p>
        <p className="hero-notice">
          This is an early prototype. Nothing here claims scientific
          validation, autonomous governance, proven superiority or production
          readiness.
        </p>

        <ol className="flow" aria-label="Workflow, in order">
          {WORKFLOW.map((s) => (
            <li key={s.step}>{s.step}</li>
          ))}
        </ol>

        <p className="hero-links">
          <a href="#how">How it works</a>
          <a href="#log">Development log</a>
        </p>
      </div>
    </section>
  )
}
