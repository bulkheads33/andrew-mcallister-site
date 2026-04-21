// Tweaks panel
const { useState: useStateT, useEffect: useEffectT } = React;

const PALETTES = {
  navy: { name: "Navy & Cream", bg: "oklch(0.97 0.008 85)", ink: "oklch(0.22 0.03 255)", accent: "oklch(0.38 0.08 255)", muted: "oklch(0.55 0.015 255)", card: "oklch(0.995 0.004 85)" },
  forest: { name: "Forest & Bone", bg: "oklch(0.97 0.006 100)", ink: "oklch(0.2 0.02 150)", accent: "oklch(0.42 0.08 155)", muted: "oklch(0.5 0.012 150)", card: "oklch(1 0.003 100)" },
  oxblood: { name: "Oxblood & Ink", bg: "oklch(0.975 0.005 60)", ink: "oklch(0.18 0.015 30)", accent: "oklch(0.4 0.11 25)", muted: "oklch(0.52 0.015 30)", card: "oklch(1 0.002 60)" },
  mono: { name: "Pure Mono", bg: "oklch(0.98 0 0)", ink: "oklch(0.15 0 0)", accent: "oklch(0.25 0 0)", muted: "oklch(0.55 0 0)", card: "oklch(1 0 0)" },
  charcoal: { name: "Dark Operator", bg: "oklch(0.18 0.01 240)", ink: "oklch(0.96 0.005 85)", accent: "oklch(0.75 0.09 85)", muted: "oklch(0.65 0.01 240)", card: "oklch(0.22 0.012 240)" },
};

const FONTS = {
  editorial: { name: "Fraunces × Inter", display: "'Fraunces', serif", body: "'Inter', sans-serif" },
  modern: { name: "Instrument × Inter", display: "'Instrument Serif', serif", body: "'Inter', sans-serif" },
  classic: { name: "Libre × Work Sans", display: "'Libre Caslon Text', serif", body: "'Work Sans', sans-serif" },
  sans: { name: "Space Grotesk × Inter", display: "'Space Grotesk', sans-serif", body: "'Inter', sans-serif" },
};

function applyTweaks(t) {
  const root = document.documentElement;
  const p = PALETTES[t.palette] || PALETTES.forest;
  root.style.setProperty("--bg", p.bg);
  root.style.setProperty("--ink", p.ink);
  root.style.setProperty("--accent", p.accent);
  root.style.setProperty("--muted", p.muted);
  root.style.setProperty("--card", p.card);
  const f = FONTS[t.font] || FONTS.editorial;
  root.style.setProperty("--font-display", f.display);
  root.style.setProperty("--font-body", f.body);
  root.style.setProperty("--density", t.density === "tight" ? "0.78" : t.density === "airy" ? "1.18" : "1");
  root.dataset.hero = t.hero || "editorial";
  root.dataset.palette = t.palette || "forest";
}

function TweaksPanel({ tweaks, setTweaks, show }) {
  if (!show) return null;
  const update = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
  };
  const updateSection = (key, val) => {
    const sections = { ...(tweaks.sections || {}), [key]: val };
    const next = { ...tweaks, sections };
    setTweaks(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { sections } }, "*");
  };
  return (
    <div className="tweaks">
      <div className="tweaks-head">
        <span className="tweaks-title">Tweaks</span>
        <span className="tweaks-sub">live preview</span>
      </div>

      <div className="tweaks-group">
        <div className="tweaks-label">Hero layout</div>
        <div className="tweaks-seg">
          {["editorial", "statsfirst", "statement"].map((h) => (
            <button key={h} className={`tweaks-segbtn ${tweaks.hero === h ? "on" : ""}`} onClick={() => update("hero", h)}>
              {h === "editorial" ? "Editorial" : h === "statsfirst" ? "Stats-first" : "Statement"}
            </button>
          ))}
        </div>
      </div>

      <div className="tweaks-group">
        <div className="tweaks-label">Palette</div>
        <div className="tweaks-swatches">
          {Object.entries(PALETTES).map(([k, p]) => (
            <button key={k} title={p.name} className={`tweaks-sw ${tweaks.palette === k ? "on" : ""}`} onClick={() => update("palette", k)}>
              <span style={{ background: p.bg }} />
              <span style={{ background: p.ink }} />
              <span style={{ background: p.accent }} />
            </button>
          ))}
        </div>
      </div>

      <div className="tweaks-group">
        <div className="tweaks-label">Type</div>
        <div className="tweaks-seg tweaks-seg-wrap">
          {Object.entries(FONTS).map(([k, f]) => (
            <button key={k} className={`tweaks-segbtn ${tweaks.font === k ? "on" : ""}`} onClick={() => update("font", k)}>{f.name}</button>
          ))}
        </div>
      </div>

      <div className="tweaks-group">
        <div className="tweaks-label">Density</div>
        <div className="tweaks-seg">
          {["tight", "default", "airy"].map((d) => (
            <button key={d} className={`tweaks-segbtn ${tweaks.density === d ? "on" : ""}`} onClick={() => update("density", d)}>{d}</button>
          ))}
        </div>
      </div>

      <div className="tweaks-group">
        <div className="tweaks-label">Sections</div>
        <div className="tweaks-sections">
          {[
            ["value", "Value Creation"],
            ["skills", "Skills"],
            ["career", "Career"],
            ["deals", "Case Studies"],
            ["aitech", "AI & Tech"],
            ["about", "About"],
            ["contact", "Contact"],
          ].map(([k, l]) => {
            const on = (tweaks.sections || {})[k] !== false;
            return (
              <label key={k} className="tweaks-check">
                <input type="checkbox" checked={on} onChange={(e) => updateSection(k, e.target.checked)} />
                <span>{l}</span>
              </label>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { TweaksPanel, applyTweaks, PALETTES, FONTS });
