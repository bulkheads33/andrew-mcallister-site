# Andrew P. McAllister — CFO · CIO · Operating Executive

Personal resume / site. Served as static files via GitHub Pages.

**Live:** https://bulkheads33.github.io/andrew-mcallister-site/

## Structure

```
index.html        Single-page site (React + Babel inlined via CDN)
styles.css        All site styles
assets/
  headshot.png    Portrait
```

No build step. Everything ships as-is.

## Deploying to GitHub Pages

1. Upload the contents of this folder to the root of [bulkheads33/andrew-mcallister-site](https://github.com/bulkheads33/andrew-mcallister-site) (drag and drop via *Add file → Upload files*).
2. **Settings → Pages → Source:** `main` / `/ (root)` → Save.
3. Wait ~1 minute. Site is live at the URL above.

If the repo already has older files (e.g. a `components/` folder, `Andrew McAllister.html`), delete them — the current `index.html` has all JSX inlined and no longer needs them.

## Versioning

Each upload creates a commit. For named milestones, use **Releases → Draft a new release** and tag (`v1.0`, `v1.1`, …). Edits should always flow: local working copy → commit → push; don't edit on GitHub directly or the two will drift.

## Editing locally

Open `index.html` directly in a browser — Babel-standalone compiles the inline JSX on load. No `npm install`, no dev server.
