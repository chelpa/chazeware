import { NAV, VERSION } from '../content.js'

export function Nav() {
  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          CHAZEWARE
          <span className="brand-version">{VERSION}</span>
        </a>
        <nav aria-label="Sections">
          <ul className="nav-links">
            {NAV.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
