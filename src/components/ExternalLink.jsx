// Ordinary anchor to an external page. The arrow marks it as leaving this site;
// the aria-label carries the same information for assistive technology.
export function ExternalLink({ href, label, children }) {
  return (
    <a className="ext" href={href} aria-label={`${label} (external link, GitHub)`}>
      {children}
      <span className="ext-mark" aria-hidden="true">
        {' '}↗
      </span>
    </a>
  )
}
