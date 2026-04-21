// Three hero variants
const D = () => window.SITE_DATA;

function HeroEditorial() {
  const d = D();
  return (
    <section className="hero hero-editorial">
      <div className="hero-grid">
        <div className="hero-copy">
          <Eyebrow>Andrew P. McAllister, {d.credential}</Eyebrow>
          <h1 className="hero-name">
            <span className="hero-name-line">Andrew P.</span>
            <span className="hero-name-line hero-name-italic">McAllister</span>
          </h1>
          <div className="hero-titles">
            {d.titles.map((t, i) => (
              <React.Fragment key={t}>
                <span>{t}</span>
                {i < d.titles.length - 1 && <span className="hero-titles-sep">·</span>}
              </React.Fragment>
            ))}
          </div>
          <p className="hero-tagline">{d.tagline}</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#contact">Start a conversation</a>
            <a className="btn btn-ghost" href={d.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn →</a>
          </div>
        </div>
        <div className="hero-portrait-wrap">
          <div className="hero-portrait-frame">
            <img src="assets/headshot.png" alt="Andrew P. McAllister" className="hero-portrait" />
          </div>
          <div className="hero-portrait-caption">
            <span>New York · Open to relocation</span>
          </div>
        </div>
      </div>
      <div className="hero-stats">
        {d.stats.map((s) => (
          <Stat key={s.label} {...s} />
        ))}
      </div>
    </section>
  );
}

function HeroStatsFirst() {
  const d = D();
  return (
    <section className="hero hero-statsfirst">
      <div className="hero-sf-top">
        <Eyebrow>Andrew P. McAllister, {d.credential}</Eyebrow>
        <div className="hero-sf-titles">
          {d.titles.join(" · ")} · Operating Executive
        </div>
      </div>
      <div className="hero-sf-kpis">
        {d.stats.map((s, i) => (
          <div key={s.label} className="hero-sf-kpi">
            <div className="hero-sf-kpi-num">{s.value}</div>
            <div className="hero-sf-kpi-label">{s.label}</div>
            <div className="hero-sf-kpi-sub">{s.sub}</div>
          </div>
        ))}
      </div>
      <div className="hero-sf-split">
        <div className="hero-sf-split-copy">
          <h1 className="hero-sf-name">
            Andrew P. <em>McAllister</em>
          </h1>
          <p className="hero-sf-tagline">{d.tagline}</p>
          <div className="hero-ctas">
            <a className="btn btn-primary" href="#contact">Start a conversation</a>
            <a className="btn btn-ghost" href={d.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn →</a>
          </div>
        </div>
        <div className="hero-sf-split-portrait">
          <img src="assets/headshot.png" alt="Andrew P. McAllister" />
        </div>
      </div>
    </section>
  );
}

function HeroStatement() {
  const d = D();
  return (
    <section className="hero hero-statement">
      <div className="hero-st-meta">
        <Eyebrow>Andrew P. McAllister, {d.credential}</Eyebrow>
        <div className="hero-st-titles">{d.titles.join(" · ")}</div>
      </div>
      <div className="hero-st-body">
        <blockquote className="hero-st-quote">
          <span className="hero-st-mark">“</span>
          I roll up my sleeves to learn <em>where</em> and <em>how</em> the data is generated — not just digging deep into numbers, but being onsite where they originate.
        </blockquote>
        <div className="hero-st-attrib">
          <img src="assets/headshot.png" alt="Andrew P. McAllister" className="hero-st-portrait" />
          <div>
            <div className="hero-st-name">Andrew P. McAllister</div>
            <div className="hero-st-role">CFO · CIO · Operating Executive</div>
          </div>
        </div>
      </div>
      <div className="hero-st-footer">
        <div className="hero-st-footer-stats">
          {d.stats.slice(0, 3).map((s) => (
            <div key={s.label} className="hero-st-stat">
              <span className="hero-st-stat-v">{s.value}</span>
              <span className="hero-st-stat-l">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="hero-ctas">
          <a className="btn btn-primary" href="#contact">Start a conversation</a>
          <a className="btn btn-ghost" href={d.contact.linkedin} target="_blank" rel="noreferrer">LinkedIn →</a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { HeroEditorial, HeroStatsFirst, HeroStatement });
