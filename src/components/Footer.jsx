import { VERSION } from '../content.js'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-inner">
        <p className="footer-brand">CHAZEWARE</p>
        <p>
          Public prototype {VERSION}. An experimental project; not a finished
          product.
        </p>
        <p>
          <a href="#top">Back to top</a>
        </p>
      </div>
    </footer>
  )
}
