# ARC Brand Assets

Corporate-design assets for the **AI Responsibility Centre**, derived from the
website. Use these as the basis for PowerPoint, Word and other templates.

## Contents

- **`arc-brand-guidelines.pdf`** — the 2-page design sheet (logo, colour,
  typography, UI, voice). Hand this to anyone building templates.
- **`arc-brand-guidelines.html`** — the source for the PDF (edit this, then
  re-export).
- **`logos/`** — scalable logo files (SVG):
  - `arc-logo-horizontal.svg` — primary lockup (dark text, light backgrounds)
  - `arc-logo-horizontal-white.svg` — reversed lockup (dark backgrounds)
  - `arc-badge.svg` — green tile + white arch (app icon / avatar)
  - `arc-mark-green.svg` / `arc-mark-white.svg` — the arch mark only

## Quick reference

- **Primary colour:** `#00805A` (arc-600) · **Dark:** `#02261E` (arc-950) ·
  **Tint:** `#ECFDF5` (arc-50) · full palette + hex codes are in the PDF.
- **Typeface:** Inter (open source, Google Fonts). Office fallback: Arial / Aptos.

## Using the logos in PowerPoint / Office

SVG imports natively into PowerPoint and Word (Insert → Pictures). For tools that
need PNG, export from any SVG (e.g. open in a browser and screenshot, or
`rsvg-convert logos/arc-badge.svg -w 1024 -o arc-badge.png`).

## Regenerating the PDF

Edit `arc-brand-guidelines.html`, then **open it in a browser → Print → Save as
PDF** (A4) — this works on any OS.

Alternatively, on **macOS** (the path below is macOS-specific), run headless
Chrome:

```bash
cd brand
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="arc-brand-guidelines.pdf" \
  "file://$(pwd)/arc-brand-guidelines.html"
```
