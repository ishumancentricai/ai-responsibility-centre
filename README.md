# AI Responsibility Centre (ARC) — Landing Page

A modern, responsive, academic landing site for the **AI Responsibility Centre
(ARC)** at the University of Bayreuth & Fraunhofer FIT.

Built with **React + Vite + Tailwind CSS v4** and **Framer Motion** for
Apple-style scroll-driven animations (elements that fade, rotate, scale and
reveal as you scroll).

## Pages

`Home` (interactive scroll story) · `About` (Vision / Mission / Strategy) ·
`Research` · `Policy Advisory` · `Roadmap` · `Team` · `Contact`

All copy lives in one place: [`src/data/content.js`](src/data/content.js) — edit
there to update the site without touching components.

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build into dist/
npm run preview    # preview the production build
```

Requires Node 20+ (Node 22 recommended).

## Deployment (GitHub Pages — default domain)

This repo ships with a workflow at
[`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) that builds and
publishes to GitHub Pages on every push to `main`.

**One-time setup:**

1. Push this repo to GitHub (remote already set to
   `ishumancentricai/ai-responsibility-centre`).
2. In the repo: **Settings → Pages → Build and deployment → Source → GitHub
   Actions**.
3. Push to `main`. The site goes live at:

   ```
   https://ishumancentricai.github.io/ai-responsibility-centre/
   ```

The workflow automatically sets Vite's `base` to `/<repo-name>/` so all assets
resolve correctly on the project page. Routing uses `HashRouter`, so deep links
work on any static host with no extra server config.

## Custom domain (later)

When you buy a domain:

1. Add a **repository variable** `CUSTOM_DOMAIN` (Settings → Secrets and
   variables → Actions → Variables) set to e.g. `arc.example.org`.
2. Point the domain's DNS at GitHub Pages (a `CNAME` record to
   `ishumancentricai.github.io`, or `A`/`AAAA` records to GitHub's IPs).
3. Re-run the workflow. It will:
   - build with `base = "/"` (clean asset paths at the domain root), and
   - write a `CNAME` file into the deploy so Pages serves your domain.

No code changes needed — just the variable + DNS.

## Tech stack

| Concern        | Choice                          |
| -------------- | ------------------------------- |
| Framework      | React 18                        |
| Build tool     | Vite 6                          |
| Styling        | Tailwind CSS v4 (CSS-first)     |
| Animations     | Framer Motion                   |
| Routing        | React Router (HashRouter)       |
| Hosting        | GitHub Pages via Actions        |

## Customising the look

Brand colours and fonts are defined as design tokens in
[`src/index.css`](src/index.css) under `@theme` (the `arc-*` green scale and
`ink-*` neutrals). Adjust them in one place to re-skin the whole site.
