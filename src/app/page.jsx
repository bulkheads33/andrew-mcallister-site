"use client";

import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Landmark,
  Sparkles,
  UserCircle2,
} from "lucide-react";

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
      "Engagement was led across a syndicate of new banks to move the business to a single interest only revolver that better matched the operating profile of the company.",
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

function badgeStyle(background, border, color) {
  return {
    display: "inline-block",
    padding: "8px 14px",
    borderRadius: 999,
    border,
    background,
    color,
    fontSize: 14,
    lineHeight: 1,
    whiteSpace: "nowrap",
  };
}

function sectionCard(extra = {}) {
  return {
    background: "rgba(255,255,255,0.05)",
    border: "1px solid rgba(255,255,255,0.10)",
    borderRadius: 28,
    boxShadow: "0 18px 50px rgba(0,0,0,0.22)",
    ...extra,
  };
}

function buttonPrimaryStyle() {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "14px 22px",
    borderRadius: 18,
    background: "#ffffff",
    color: "#0f172a",
    fontWeight: 700,
    textDecoration: "none",
    border: "none",
  };
}

function buttonSecondaryStyle() {
  return {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    padding: "14px 22px",
    borderRadius: 18,
    border: "1px solid rgba(255,255,255,0.18)",
    color: "#ffffff",
    textDecoration: "none",
    background: "transparent",
  };
}

function filterStyle(active) {
  return {
    borderRadius: 999,
    border: active ? "1px solid rgba(103,232,249,0.7)" : "1px solid rgba(255,255,255,0.18)",
    background: active ? "rgba(6,182,212,0.18)" : "rgba(255,255,255,0.05)",
    color: "#fff",
    padding: "10px 16px",
    fontSize: 14,
    cursor: "pointer",
    boxShadow: active ? "0 12px 28px rgba(8,145,178,0.18)" : "none",
  };
}

function SectionIntro({ eyebrow, title, body }) {
  return (
    <div style={{ maxWidth: 920 }}>
      <div
        style={{
          color: "#67e8f9",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
          fontSize: 12,
          fontWeight: 700,
        }}
      >
        {eyebrow}
      </div>
      <h2
        style={{
          color: "#fff",
          fontSize: "clamp(32px, 4vw, 52px)",
          lineHeight: 1.08,
          marginTop: 14,
          marginBottom: 0,
        }}
      >
        {title}
      </h2>
      {body ? (
        <p
          style={{
            marginTop: 18,
            color: "#cbd5e1",
            fontSize: 20,
            lineHeight: 1.7,
          }}
        >
          {body}
        </p>
      ) : null}
    </div>
  );
}

function Case({ c }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={sectionCard({
        overflow: "hidden",
        background: "linear-gradient(145deg, rgba(15,23,42,0.95), rgba(15,23,42,0.78))",
      })}
    >
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
            <h3 style={{ fontSize: 30, lineHeight: 1.18, color: "#fff", margin: 0 }}>{c.title}</h3>
            <p style={{ marginTop: 14, color: "#cbd5e1", lineHeight: 1.75 }}>{c.story}</p>
            <p style={{ marginTop: 16, color: "#a5f3fc", fontWeight: 600, lineHeight: 1.75 }}>{c.outcome}</p>
          </div>
          <ChevronDown
            size={20}
            style={{
              color: "#cbd5e1",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease",
              marginTop: 6,
              flexShrink: 0,
            }}
          />
        </div>
      </button>

      <AnimatePresence initial={false}>
        {open ? (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                display: "grid",
                gap: 20,
                padding: 24,
                borderTop: "1px solid rgba(255,255,255,0.10)",
                background: "rgba(0,0,0,0.10)",
              }}
            >
              <div
                style={{
                  display: "grid",
                  gap: 20,
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
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
              </div>

              <div
                style={{
                  borderRadius: 20,
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
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export default function Page() {
  const [imageError, setImageError] = useState(false);
  const [filter, setFilter] = useState("All");

  const filtered = useMemo(() => {
    if (filter === "All") return caseStudies;
    return caseStudies.filter((c) => c.tags.includes(filter));
  }, [filter]);

  return (
    <div
      style={{
        minHeight: "100vh",
        color: "#fff",
        background:
          "radial-gradient(circle at top left, rgba(34,211,238,0.16), transparent 22%), radial-gradient(circle at 80% 10%, rgba(168,85,247,0.16), transparent 20%), radial-gradient(circle at 50% 60%, rgba(59,130,246,0.10), transparent 28%), linear-gradient(to bottom, #020617, #020617)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "40px 24px 80px" }}>
        <section style={{ marginBottom: 24 }}>
          <div
            style={{
              color: "#67e8f9",
              fontSize: "clamp(18px, 2vw, 24px)",
              letterSpacing: "0.28em",
              fontWeight: 700,
            }}
          >
            ANDREW P. McALLISTER, MBA
          </div>
          <div style={{ color: "#94a3b8", fontSize: 14, marginTop: 6 }}>
            CFO • CIO • Systems Architect
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gap: 48,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            alignItems: "start",
          }}
        >
          <div>
            <div style={badgeStyle("rgba(34,211,238,0.10)", "1px solid rgba(103,232,249,0.20)", "#a5f3fc")}>
              Hybrid view for PE sponsors, CEOs, and operating teams
            </div>

            <h1
              style={{
                marginTop: 18,
                marginBottom: 0,
                maxWidth: 900,
                fontSize: "clamp(48px, 7vw, 86px)",
                lineHeight: 1.02,
                letterSpacing: "-0.03em",
              }}
            >
              Finance should shape how a business performs, not just report on it.
            </h1>

            <p
              style={{
                marginTop: 24,
                maxWidth: 900,
                color: "#cbd5e1",
                fontSize: "clamp(18px, 2vw, 24px)",
                lineHeight: 1.72,
              }}
            >
              The strongest finance leaders do more than oversee reporting. They help teams see the business clearly, align around the right plan, and build systems that improve revenue, margin, cash flow, and long term value. The work is done alongside teams so the system is understood, trusted, and used to drive better decisions every day.
            </p>

            <div style={{ marginTop: 22, color: "#67e8f9", fontWeight: 700, fontSize: 20 }}>
              ~10% EBITDA improvement driven by pricing redesign, billing automation, and faster cash collection
            </div>

            <div
              style={{
                marginTop: 28,
                borderRadius: 28,
                border: "1px solid rgba(103,232,249,0.15)",
                background: "linear-gradient(to right, rgba(34,211,238,0.10), rgba(168,85,247,0.10))",
                padding: 24,
              }}
            >
              <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                <Sparkles size={20} style={{ color: "#67e8f9", marginTop: 4, flexShrink: 0 }} />
                <p style={{ color: "#f8fafc", fontSize: 22, lineHeight: 1.7, margin: 0 }}>
                  Sustainable EBITDA growth comes from alignment, with systems, teams, and decisions reinforcing each other over time.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginTop: 28 }}>
              <a href="/Andrew_McAllister_Resume.pdf" target="_blank" rel="noreferrer" style={buttonPrimaryStyle()}>
                Resume <Download size={16} />
              </a>
              <a href="#cases" style={buttonSecondaryStyle()}>
                Explore case studies <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={sectionCard({ overflow: "hidden", padding: 0 })}>
              {!imageError ? (
                <img
                  src="/headshot.png"
                  alt="ANDREW P. McALLISTER"
                  onError={() => setImageError(true)}
                  style={{ width: "100%", aspectRatio: "4 / 5", display: "block", objectFit: "cover" }}
                />
              ) : (
                <div
                  style={{
                    aspectRatio: "4 / 5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#64748b",
                  }}
                >
                  <UserCircle2 size={220} />
                </div>
              )}
            </div>

            <div
              style={sectionCard({
                padding: 24,
                background: "rgba(16,185,129,0.08)",
                border: "1px solid rgba(52,211,153,0.20)",
              })}
            >
              <div style={{ color: "#86efac", textTransform: "uppercase", letterSpacing: "0.18em", fontSize: 12, fontWeight: 700 }}>
                Transaction and capital experience
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 14 }}>
                {["M&A", "Refinancing", "Capital Structuring", "Hedging", "Underwriting"].map((item) => (
                  <span
                    key={item}
                    style={badgeStyle("rgba(16,185,129,0.12)", "1px solid rgba(134,239,172,0.15)", "#dcfce7")}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section style={{ marginTop: 28 }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              color: "#94a3b8",
              opacity: 0.85,
              fontSize: 14,
            }}
          >
            <span>Rose Cay Capital / Rose Cay Maritime</span>
            <span>•</span>
            <span>McAllister Towing / Bridgeport & Port Jeff Ferry</span>
            <span>•</span>
            <span>Merrill Lynch</span>
            <span>•</span>
            <span>Prudential Securities</span>
          </div>
        </section>

        <section style={{ marginTop: 56 }}>
          <SectionIntro
            eyebrow="Old and new"
            title="The role is changing, even when job descriptions do not say so clearly."
            body="The old CFO model centers on control, reporting, and process stewardship. The newer model still needs those disciplines, but uses them as a base for stronger pricing, better capital decisions, and more durable value creation."
          />

          <div style={{ ...sectionCard({ marginTop: 28, overflow: "hidden" }) }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                background: "linear-gradient(to right, #0f172a, #1e293b)",
              }}
            >
              <div style={{ padding: 20, color: "#cbd5e1", textTransform: "uppercase", letterSpacing: "0.16em", fontSize: 12, fontWeight: 700 }}>
                Old CFO
              </div>
              <div style={{ padding: 20, color: "#a5f3fc", textTransform: "uppercase", letterSpacing: "0.16em", fontSize: 12, fontWeight: 700 }}>
                New CFO
              </div>
            </div>

            {compareRows.map((r) => (
              <div
                key={r.old}
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                  borderTop: "1px solid rgba(255,255,255,0.10)",
                }}
              >
                <div style={{ padding: 20, color: "#94a3b8" }}>{r.old}</div>
                <div style={{ padding: 20, color: "#fff", borderLeft: "1px solid rgba(255,255,255,0.10)" }}>{r.next}</div>
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

          <div
            style={{
              display: "grid",
              gap: 24,
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              marginTop: 28,
            }}
          >
            {[
              {
                title: "Automate the repeatable",
                text: "Routine workflow should not consume executive energy when it can be systemized and monitored.",
                background: "linear-gradient(145deg, rgba(34,211,238,0.14), rgba(59,130,246,0.10))",
              },
              {
                title: "Capture meaningful data",
                text: "The value is not cleaner reports alone. The value is knowing what the business is truly doing in real time.",
                background: "linear-gradient(145deg, rgba(168,85,247,0.14), rgba(217,70,239,0.10))",
              },
              {
                title: "Translate insight into margin",
                text: "Better visibility should lead to smarter pricing, sharper cost discipline, and improved cash generation.",
                background: "linear-gradient(145deg, rgba(16,185,129,0.14), rgba(20,184,166,0.10))",
              },
              {
                title: "Help teams move together",
                text: "Sustainable gains usually happen when the organization understands the plan and believes in how to execute it.",
                background: "linear-gradient(145deg, rgba(245,158,11,0.14), rgba(249,115,22,0.10))",
              },
            ].map((item) => (
              <div key={item.title} style={sectionCard({ padding: 24, background: item.background })}>
                <h3 style={{ margin: 0, color: "#fff", fontSize: 24, lineHeight: 1.2 }}>{item.title}</h3>
                <p style={{ marginTop: 14, color: "#e2e8f0", lineHeight: 1.7 }}>{item.text}</p>
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
              <button key={f} onClick={() => setFilter(f)} style={filterStyle(filter === f)}>
                {f}
              </button>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gap: 24,
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              marginTop: 28,
            }}
          >
            {filtered.map((c) => (
              <Case key={c.id} c={c} />
            ))}
          </div>
        </section>

        <section
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            marginTop: 64,
          }}
        >
          <div
            style={sectionCard({
              padding: 24,
              background: "rgba(34,211,238,0.08)",
              border: "1px solid rgba(34,211,238,0.20)",
            })}
          >
            <h3 style={{ margin: 0, color: "#fff", fontSize: 30 }}>Right fit</h3>
            <p style={{ marginTop: 14, color: "#e2e8f0", lineHeight: 1.7 }}>
              This profile fits best when a company wants to align teams, build a clear plan, and improve EBITDA through better systems, better pricing, and better capital decisions.
            </p>
          </div>

          <div
            style={sectionCard({
              padding: 24,
              background: "rgba(168,85,247,0.08)",
              border: "1px solid rgba(168,85,247,0.20)",
            })}
          >
            <h3 style={{ margin: 0, color: "#fff", fontSize: 30 }}>Not the best fit</h3>
            <p style={{ marginTop: 14, color: "#e2e8f0", lineHeight: 1.7 }}>
              This is likely not the right fit if the need is limited to supervising accounting, preserving the status quo, or pursuing short term gains without building stronger operating foundations.
            </p>
          </div>
        </section>

        <section style={{ marginTop: 64 }}>
          <div
            style={sectionCard({
              padding: 32,
              background: "linear-gradient(to right, #0f172a, #1e293b)",
            })}
          >
            <div
              style={{
                display: "grid",
                gap: 32,
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              }}
            >
              <div>
                <div style={{ color: "#67e8f9", textTransform: "uppercase", letterSpacing: "0.18em", fontSize: 12, fontWeight: 700 }}>
                  Contact
                </div>
                <h2 style={{ color: "#fff", fontSize: "clamp(30px, 4vw, 46px)", lineHeight: 1.08, marginTop: 14, marginBottom: 0 }}>
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
                    border: "1px solid rgba(255,255,255,0.10)",
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
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(255,255,255,0.05)",
                    color: "#fff",
                    textDecoration: "none",
                  }}
                >
                  linkedin.com/in/andrewpmcallister
                </a>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    padding: 18,
                    borderRadius: 18,
                    border: "1px solid rgba(255,255,255,0.10)",
                    background: "rgba(255,255,255,0.05)",
                    color: "#e2e8f0",
                  }}
                >
                  <Landmark size={18} style={{ color: "#67e8f9" }} />
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
