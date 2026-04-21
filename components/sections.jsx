// Body sections
const DATA = () => window.SITE_DATA;

function ValueCreation() {
  const d = DATA();
  return (
    <section id="value" className="sec sec-value">
      <SectionHeader number="01" kicker="Value Creation" title="How I move the needle." lead="Six levers I come back to — from week-one cadence through target goals or exit." />
      <div className="vc-grid">
        {d.valueCreation.map((v, i) => (
          <article key={v.title} className="vc-card">
            <div className="vc-num">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="vc-title">{v.title}</h3>
            <p className="vc-body">{v.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  const d = DATA();
  return (
    <section id="skills" className="sec sec-skills">
      <SectionHeader number="02" kicker="Capabilities" title="Where I operate." lead="A working vocabulary built over 25+ years across operating, advisory, and sponsor roles." />
      <div className="skills-list">
        {d.skills.map((s) => <Pill key={s}>{s}</Pill>)}
      </div>
    </section>
  );
}

function Career() {
  const d = DATA();
  return (
    <section id="career" className="sec sec-career">
      <SectionHeader number="03" kicker="Career" title="The arc." />
      <ol className="timeline">
        {d.timeline.map((t, i) => (
          <li key={i} className="timeline-row">
            <div className="timeline-period">{t.period}</div>
            <div className="timeline-body">
              <div className="timeline-role">{t.role}</div>
              {t.org && <div className="timeline-org">{t.org}</div>}
              <div className="timeline-note">{t.note}</div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}

function Deals() {
  const d = DATA();
  return (
    <section id="deals" className="sec sec-deals">
      <SectionHeader number="04" kicker="Case Studies" title="Representative work." lead="Sanitized for confidentiality — specifics available on request." />
      <div className="deals-grid">
        {d.deals.map((x, i) => (
          <article key={i} className="deal-card">
            <div className="deal-tag">{x.tag}</div>
            <h3 className="deal-title">{x.title}</h3>
            <div className="deal-metric">{x.metric}</div>
            <p className="deal-note">{x.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AITech() {
  const d = DATA();
  return (
    <section id="aitech" className="sec sec-aitech">
      <SectionHeader number="05" kicker="AI & Tech" title="A modern operator's stack." lead="Technology is a force multiplier for operators who still know where the data comes from." />
      <div className="ai-grid">
        {d.aiTech.map((x) => (
          <div key={x.title} className="ai-card">
            <h3 className="ai-title">{x.title}</h3>
            <p className="ai-body">{x.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function About() {
  const d = DATA();
  return (
    <section id="about" className="sec sec-about">
      <SectionHeader number="06" kicker="About" title="Operating philosophy." />
      <div className="about-grid">
        <div className="about-body">
          <p className="about-lead">{d.positioning}</p>
          <p className="about-seek">{d.seeking}</p>
        </div>
        <aside className="about-facts">
          <div className="about-fact">
            <div className="about-fact-l">Role</div>
            <div className="about-fact-v">CFO · CIO · President · CEO</div>
          </div>
          <div className="about-fact">
            <div className="about-fact-l">Stage</div>
            <div className="about-fact-v">Sponsor-backed platforms</div>
          </div>
          <div className="about-fact">
            <div className="about-fact-l">Industries</div>
            <div className="about-fact-v">Asset-intensive operating businesses</div>
          </div>
          <div className="about-fact">
            <div className="about-fact-l">Education</div>
            <div className="about-fact-v">MBA — Finance & Operations</div>
          </div>
        </aside>
      </div>
    </section>
  );
}

function Contact() {
  const d = DATA();
  return (
    <section id="contact" className="sec sec-contact">
      <div className="contact-wrap">
        <div className="contact-kicker">Let's talk.</div>
        <h2 className="contact-title">
          Open to CEO, CFO, and President mandates in sponsor-backed platforms.
        </h2>
        <p className="contact-note">{d.contact.note}</p>
        <div className="contact-ctas">
          <a className="btn btn-primary btn-lg" href={d.contact.linkedin} target="_blank" rel="noreferrer">
            Connect on LinkedIn →
          </a>
          <a className="btn btn-ghost btn-lg" href={`mailto:${d.contact.email}`}>
            {d.contact.email}
          </a>
        </div>
        <div className="contact-details">
          <div className="contact-detail">
            <div className="contact-detail-l">Phone</div>
            <div className="contact-detail-v">{d.contact.phone}</div>
          </div>
          <div className="contact-detail">
            <div className="contact-detail-l">Location</div>
            <div className="contact-detail-v">{d.contact.location}</div>
          </div>
          <div className="contact-detail">
            <div className="contact-detail-l">LinkedIn</div>
            <div className="contact-detail-v">in/andrewpmcallister</div>
          </div>
        </div>
        <div className="contact-foot">
          © {new Date().getFullYear()} Andrew P. McAllister · MBA, NYU Stern
        </div>
      </div>
    </section>
  );
}

function Nav({ sections }) {
  const items = [
    { id: "value", label: "Value Creation", flag: "value" },
    { id: "skills", label: "Skills", flag: "skills" },
    { id: "career", label: "Career", flag: "career" },
    { id: "deals", label: "Case Studies", flag: "deals" },
    { id: "aitech", label: "AI & Tech", flag: "aitech" },
    { id: "about", label: "About", flag: "about" },
    { id: "contact", label: "Contact", flag: "contact" },
  ];
  return (
    <nav className="nav">
      <div className="nav-brand">
        <span className="nav-mono">APMcA</span>
        <span className="nav-sep">/</span>
        <span className="nav-sub">CFO · CIO · Operator</span>
      </div>
      <ul className="nav-list">
        {items.filter(i => sections[i.flag] !== false).map((i) => (
          <li key={i.id}><a href={`#${i.id}`}>{i.label}</a></li>
        ))}
      </ul>
    </nav>
  );
}

Object.assign(window, { ValueCreation, Skills, Career, Deals, AITech, About, Contact, Nav });
