// Small reusable bits
const { useState, useEffect, useRef } = React;

function Eyebrow({ children, className = "" }) {
  return (
    <div className={`eyebrow ${className}`}>
      <span className="eyebrow-dot" />
      {children}
    </div>
  );
}

function SectionHeader({ number, kicker, title, lead }) {
  return (
    <div className="section-head">
      <div className="section-head-meta">
        <span className="section-number">{number}</span>
        <span className="section-kicker">{kicker}</span>
      </div>
      <h2 className="section-title">{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}

function Pill({ children }) {
  return <span className="pill">{children}</span>;
}

function Stat({ value, label, sub }) {
  return (
    <div className="stat">
      <div className="stat-value">{value}</div>
      <div className="stat-label">{label}</div>
      {sub && <div className="stat-sub">{sub}</div>}
    </div>
  );
}

function Rule() {
  return <div className="rule" />;
}

Object.assign(window, { Eyebrow, SectionHeader, Pill, Stat, Rule });
