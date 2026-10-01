import { StatusTag } from './Section.jsx'
import { VERSION, WORKFLOW } from '../content.js'

export function Hero() {
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="wrap">
        <p className="hero-meta">
          <span>Public prototype {VERSION}</span>
          <StatusTag value="CANDIDATE" />
        </p>
        <h1 id="hero-title">CHAZEWARE</h1>
        <p className="hero-sub">Immutable history. Governed state. Evolvable structure.</p>
        <p className="hero-lead">
          CHAZEWARE explores a design intended to retain identity through history,
          support safety through governed transitions, and evolve through explicit
          versioned changes to future rules. These are design aims, not established guarantees.
        </p>
        <p className="hero-notice">
          v0.2 is the first explicit public morphogenesis candidate. The v0.1
          baseline remains preserved in Git history; this revision explains what
          changed, what stayed invariant and why.
        </p>

        <ol className="flow" aria-label="Primary operational loop, in order">
          {WORKFLOW.map((s) => (
            <li key={s.step}>{s.step}</li>
          ))}
        </ol>

        <p className="hero-links">
          <a href="#dynamics">Stability & adaptation</a>
          <a href="#experiments">CHZ-MORPH-001</a>
          <a href="#research">Research state</a>
        </p>
      </div>
    </section>
  )
}
