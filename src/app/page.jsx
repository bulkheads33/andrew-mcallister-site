"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";

const compareRows = [
  { old: "Owns accounting and reporting", next: "Builds systems that improve revenue, margin, and decision quality" },
  { old: "Builds dashboards after the fact", next: "Designs KPI architecture around the real drivers of performance" },
  { old: "Maintains banking relationships", next: "Continuously tests capital markets for better pricing and growth flexibility" },
  { old: "Manages cash as a finance task", next: "Connects operations, treasury, and hedging into one decision system" },
  { old: "Supports the business", next: "Helps leadership teams build the operating system of the business" },
];

const filters = ["All", "Revenue", "EBITDA", "Cash", "Systems", "Capital"];

const caseStudies = [
  {
    id: "newco",
    tags: ["Systems", "EBITDA"],
    title: "Built a company from zero into a scalable platform",
    story: "This is the clearest example of what happens when systems, alignment, and speed come together.",
    challenge:
      "After the assets were taken out of bankruptcy and a non performing technology manager was removed, the business needed to stand up immediately with no room for administrative drag.",
    action:
      "Industry tools were brought in across billing, HR, compliance, and operations. The model was digital from day one with no paper process and no manual reporting culture to unwind later.",
    outcome:
      "The company scaled to more than 135 employees, supported over $80M of investment, and generated $60M of revenue in year one without adding administrative overhead beyond the founding team.",
  },
  {
    id: "pricing",
    tags: ["Revenue", "EBITDA"],
    title: "Repriced tariffs to match the real economics of the work",
    story: "Pricing work rarely gets the attention it deserves, even though it is one of the fastest paths to better margins.",
    challenge:
      "Legacy tariffs no longer reflected the actual work being performed and several charges were either missing or misaligned with current operating reality.",
    action:
      "A full tariff and pricing review was completed, work was repriced to reflect real economics, new charges were added, and fuel surcharge logic was improved so recovery tracked more closely to actual exposure.",
    outcome:
      "Revenue increased, margin quality improved, and management gained a much clearer line of sight into where value was being created and where it was being given away. The combined impact was an estimated ten percent EBITDA improvement driven by four percent revenue growth, four percent cost reduction from automation, and faster billing cycles improving cash collection.",
  },
  {
    id: "capital",
    tags: ["Cash", "Capital"],
    title: "Reshaped the capital structure to unlock flexibility",
    story: "The best capital structures do more than reduce cost. They create room to invest and room to move.",
    challenge:
      "A fragmented debt structure limited flexibility and made it harder to allocate capital toward the best long term uses of cash.",
    action:
      "Engagement was led across banks, private credit providers, insurers, and advisors to move the business to a single interest only revolver that better matched the operating profile of the company.",
    outcome:
      "More than $8M of annual cash flow was unlocked and the business gained flexibility to reinvest in assets, buy out leases, and purchase strategic land that strengthened long term stability.",
  },
  {
    id: "billing",
    tags: ["EBITDA", "Systems"],
    title: "Turned billing into a KPI and pricing engine",
    story: "Better reporting was never the point. Better economics were the point.",
    challenge:
      "Manual invoicing created friction, delayed billing, and limited visibility into profitability across jobs, customers, and locations.",
    action:
      "The workflow was redesigned and connected to KPI tracking across revenue, cost, and operations so the business could see its economics with much greater precision.",
    outcome:
      "The work reduced staffing needs, accelerated cycle times, and created the insight needed to improve pricing discipline. Combined with pricing changes and faster billing, the effort contributed to an estimated ten percent improvement in EBITDA through revenue growth, cost reduction, and improved cash timing.",
  },
];

function pillStyle(active) {
  return {
    padding: "10px 16px",
    borderRadius: "999px",
    border: active ? "1px solid #67e8f9" : "1px solid rgba(255,255,255,0.2)",
    background: active ? "rgba(6,182,212,0.16)" : "rgba(255,255,255,0.04)",
    color: "#fff",
    cursor: "pointer",
    fontSize: "14px",
  };
}

function cardStyle(extra = {}) {
  return {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "24px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    ...extra,
  };
}

function SectionIntro({ eyebrow, title, body }) {
  return (
    <div style={{ maxWidth: 900 }}>
      <div style={{ color: "#67e8f9", textTransform: "uppercase", letterSpacing: "0.2em", fontSize: 12, fontWeight: 700 }}>
        {eyebrow}
      </div>
      <h2 style={{ color: "#fff", fontSize: 40, marginTop: 12, marginBottom: 0, lineHeight: 1.1 }}>
        {title}
      </h2>
      {body && (
        <p style={{ color: "#cbd5e1", fontSize: 20, lineHeight: 1.7, marginTop: 20 }}>
          {body}
        </p>
      )}
    </div>
  );
}

function Case({ c }) {
  const [open, setOpen] = useState(false);

  return (
    <div style={cardStyle()}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%",
          textAlign: "left",
          background: "transparent",
          border: "none",
          color: "inherit",
          padding: 24,
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", gap: 16, alignItems: "flex-start" }}>
          <div>
            <h3 style={{ color: "#fff", fontSize: 28, margin: 0, lineHeight: 1.2 }}>{c.title}</h3>
            <p style={{ color: "#cbd5e1", marginTop: 16, lineHeight: 1.7 }}>{c.story}</p>
            <p style={{ color: "#a5f3fc", fontWeight: 600, marginTop: 18, lineHeight: 1.7 }}>{c.outcome}</p>
          </div>
          <ChevronDown
            size={20}
            style={{
              color: "#cbd5e1",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
              flexShrink: 0,
              marginTop: 4,
            }}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                padding: 24,
                borderTop: "1px solid rgba(255,255,255,0.1)",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 20,
              }}
            >
              <div>
                <div style={{ color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.16em", fontSize: 12, fontWeight: 700, marginBottom: 8 }}>
                  Challenge
                </div>
                <p style={{ color: "#cbd5e1", lineHeight: 1.7, margin: 0 }}>{c.challenge}</p>
              </div>
              <div>
                <div style={{ color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.16em", fontSize: 12, fontWeight: 700, marginBottom: 8 }}>
                  Action
                </div>
                <p style={{ color: "#cbd5e1", lineHeight: 1.7, margin: 0 }}>{c.action}</p>
              </div>
              <div
                style={{
                  gridColumn: "1 / -1",
                  borderRadius: 18,
                  border: "1px solid rgba(103,232,249,0.15)",
                  background: "rgba(34,211,238,0.06)",
                  padding: 20,
                }}
              >
                <div style={{ color: "#67e8f9", textTransform: "uppercase", letterSpacing: "0.16em", fontSize: 12, fontWeight: 700, marginBottom: 8 }}>
                  Outcome
                </div>
                <p style={{ color: "#fff", lineHeight: 1.7, margin: 0 }}>{c.outcome}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Site() {
  const [filter, setFilter] = useState("All");
  const [imageError, setImageError] = useState(false);

  const filtered = useMemo(() => {
    if (filter === "All") return caseStudies;
    return caseStudies.filter((c) => c.tags.includes(filter));
  }, [filter]);

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at top left, rgba(34,211,238,0.16), transparent 22%), radial-gradient(circle at 80% 10%, rgba(168,85,247,0.16), transparent 20%), radial-gradient(circle at 50% 60%, rgba(59,130,246,0.10), transparent 28%), linear-gradient(to bottom, #020617, #020617)",
        color: "#fff",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 24px 96px" }}>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1.1fr 0.9fr",
            gap: 48,
            alignItems: "start",
          }}
        >
          <div>
            <div
              style={{
                display: "inline-block",
                padding: "8px 14px",
                borderRadius: 999,
                border: "1px solid rgba(103,232,249,0.2)",
                background: "rgba(34,211,238,0.1)",
                color: "#a5f3fc",
                fontSize: 14,
                marginBottom: 20,
              }}
            >
              Hybrid view for PE sponsors, CEOs, and operating teams
            </div>

            <h1 style={{ fontSize: 64, lineHeight: 1.05, margin: 0, maxWidth: 900 }}>
              Finance should shape how a business performs, not just report on it.
            </h1>

            <p style={{ color: "#cbd5e1", fontSize: 22, lineHeight: 1.7, marginTop: 24, maxWidth: 900 }}>
              The strongest finance leaders do more than oversee reporting. They help teams see the business clearly, align around the right plan, and build systems that improve revenue, margin, cash flow, and long term value. The work is done alongside teams so the system is understood, trusted, and used to drive better decisions every day.
            </p>

            <div
              style={{
                marginTop: 28,
                borderRadius: 28,
                border: "1px solid rgba(103,232,249,0.15)",
                background: "linear-gradient(to right, rgba(34,211,238,0.10), rgba(168,85,247,0.10))",
                padding: 24,
              }}
            >
              <p style={{ color: "#f8fafc", fontSize: 22, lineHeight: 1.7, margin: 0 }}>
                Sustainable EBITDA growth comes from alignment, with systems, teams, and decisions reinforcing each other over time.
              </p>
            </div>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 28 }}>
              <a
                href="/Andrew_McAllister_Resume.pdf"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 22px",
                  borderRadius: 18,
                  background: "#ffffff",
                  color: "#0f172a",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Resume <Download size={16} />
              </a>

              <a
                href="#cases"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  padding: "14px 22px",
                  borderRadius: 18,
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#fff",
                  textDecoration: "none",
                  background: "transparent",
                }}
              >
                Explore case studies
              </a>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={cardStyle({ overflow: "hidden", padding: 0 })}>
              {!imageError ? (
                <img
                  src="/headshot.png"
                  alt="Andrew McAllister"
                  onError={() => setImageError(true)}
                  style={{ width: "100%", aspectRatio: "4 / 5", objectFit: "cover", display: "block" }}
                />
              ) : (
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "4 / 5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#64748b",
                    fontSize: 18,
                  }}
                >
                  Photo not found
                </div>
              )}
            </div>

            <div style={cardStyle({ padding: 24, background: "rgba(16,185,129,0.08)", border: "1px solid rgba(52,211,153,0.2)" })}>
              <div style={{ color: "#86efac", textTransform: "uppercase", letterSpacing: "0.18em", fontSize: 12, fontWeight: 700 }}>
                Transaction and capital experience
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
                {["M&A", "Refinancing", "Capital Structuring", "Hedging", "Underwriting"].map((item) => (
                  <span
                    key={item}
                    style={{
                      padding: "8px 12px",
                      borderRadius: 999,
                      border: "1px solid rgba(134,239,172,0.15)",
                      background: "rgba(16,185,129,0.12)",
                      color: "#dcfce7",
                      fontSize: 14,
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: 64 }}>
          <SectionIntro
            eyebrow="Old and new"
            title="The role is changing, even when job descriptions do not say so clearly."
            body="The old CFO model centers on control, reporting, and process stewardship. The newer model still needs those disciplines, but uses them as a base for stronger pricing, better capital decisions, and more durable value creation."
          />

          <div style={{ ...cardStyle({ marginTop: 28, overflow: "hidden" }) }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", background: "linear-gradient(to right, #0f172a, #1e293b)" }}>
              <div style={{ padding: 20, color: "#cbd5e1", textTransform: "uppercase", letterSpacing: "0.16em", fontSize: 12, fontWeight: 700 }}>
                Old CFO
              </div>
              <div style={{ padding: 20, color: "#a5f3fc", textTransform: "uppercase", letterSpacing: "0.16em", fontSize: 12, fontWeight: 700 }}>
                New CFO
              </div>
            </div>
            {compareRows.map((r) => (
              <div key={r.old} style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
                <div style={{ padding: 20, color: "#94a3b8" }}>{r.old}</div>
                <div style={{ padding: 20, color: "#fff", borderLeft: "1px solid rgba(255,255,255,0.1)" }}>{r.next}</div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ marginTop: 64 }}>
          <SectionIntro
            eyebrow="Operating lens"
            title="A creative operating approach still needs financial rigor."
            body="Solving difficult problems, whether financial, operational, or strategic, rarely comes from staying inside one lane. The work often requires a mix of structure, creativity, and real time collaboration with teams close to the problem."
          />

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginTop: 28 }}>
            {[
              ["Automate the repeatable", "Routine workflow should not consume executive energy when it can be systemized and monitored.", "rgba(34,211,238,0.10)"],
              ["Capture meaningful data", "The value is not cleaner reports alone. The value is knowing what the business is truly doing in real time.", "rgba(168,85,247,0.10)"],
              ["Translate insight into margin", "Better visibility should lead to smarter pricing, sharper cost discipline, and improved cash generation.", "rgba(16,185,129,0.10)"],
              ["Help teams move together", "Sustainable gains usually happen when the organization understands the plan and believes in how to execute it.", "rgba(245,158,11,0.10)"],
            ].map(([title, text, bg]) => (
              <div key={title} style={cardStyle({ padding: 24, background: bg })}>
                <h3 style={{ margin: 0, color: "#fff", fontSize: 24 }}>{title}</h3>
                <p style={{ marginTop: 14, color: "#e2e8f0", lineHeight: 1.7 }}>{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="cases" style={{ marginTop: 64 }}>
          <SectionIntro
            eyebrow="Case studies"
            title="A few examples where systems, pricing, capital, and team alignment came together."
            body="These examples are not just finance projects. They show how better information and better execution can change how a company operates and what it earns."
          />

          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 28 }}>
            {filters.map((f) => (
              <button key={f} onClick={() => setFilter(f)} style={pillStyle(filter === f)}>
                {f}
              </button>
            ))}
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 28 }}>
            {filtered.map((c) => (
              <Case key={c.id} c={c} />
            ))}
          </div>
        </section>

        <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginTop: 64 }}>
          <div style={cardStyle({ padding: 24, background: "rgba(34,211,238,0.08)", border: "1px solid rgba(34,211,238,0.2)" })}>
            <h3 style={{ margin: 0, color: "#fff", fontSize: 30 }}>Right fit</h3>
            <p style={{ marginTop: 14, color: "#e2e8f0", lineHeight: 1.7 }}>
              This profile fits best when a company wants to align teams, build a clear plan, and improve EBITDA through better systems, better pricing, and better capital decisions.
            </p>
          </div>

          <div style={cardStyle({ padding: 24, background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.2)" })}>
            <h3 style={{ margin: 0, color: "#fff", fontSize: 30 }}>Not the best fit</h3>
            <p style={{ marginTop: 14, color: "#e2e8f0", lineHeight: 1.7 }}>
              This is likely not the right fit if the need is limited to supervising accounting, preserving the status quo, or pursuing short term gains without building stronger operating foundations.
            </p>
          </div>
        </section>

        <section style={{ marginTop: 64 }}>
          <div style={cardStyle({ padding: 32, background: "linear-gradient(to right, #0f172a, #1e293b)" })}>
            <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 32 }}>
              <div>
                <div style={{ color: "#67e8f9", textTransform: "uppercase", letterSpacing: "0.18em", fontSize: 12, fontWeight: 700 }}>
                  Contact
                </div>
                <h2 style={{ color: "#fff", fontSize: 40, marginTop: 12, marginBottom: 0, lineHeight: 1.1 }}>
                  If the goal is to bring people along and build something durable, it is worth having a conversation.
                </h2>
                <p style={{ color: "#cbd5e1", fontSize: 20, lineHeight: 1.7, marginTop: 18 }}>
                  The best change usually comes when the goal is clear, the plan is practical, and the team understands how the work connects to long term performance.
                </p>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <a
                  href="mailto:APMcA@outlook.com"
                  style={{
                    display: "block",
                    padding: 18,
                    borderRadius: 18,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.05)",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  APMcA@outlook.com
                </a>

                <a
                  href="https://www.linkedin.com/in/andrewpmcallister"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: "block",
                    padding: 18,
                    borderRadius: 18,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.05)",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  linkedin.com/in/andrewpmcallister
                </a>

                <div
                  style={{
                    padding: 18,
                    borderRadius: 18,
                    border: "1px solid rgba(255,255,255,0.1)",
                    background: "rgba(255,255,255,0.05)",
                    color: "#e2e8f0",
                  }}
                >
                  Brooklyn, New York
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
