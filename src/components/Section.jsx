export function Section({ id, index, title, intro, children }) {
  const headingId = `${id}-title`
  return (
    <section id={id} className="section" aria-labelledby={headingId}>
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">{index}</p>
          <h2 id={headingId}>{title}</h2>
          {intro ? <p className="section-intro">{intro}</p> : null}
        </header>
        {children}
      </div>
    </section>
  )
}

export function StatusTag({ value }) {
  const key = value.split('/')[0].trim().toLowerCase().replace(/\s+/g, '-')
  return (
    <span className="tag" data-status={key}>
      {value}
    </span>
  )
}
