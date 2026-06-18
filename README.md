# AI Responsibility Centre (ARC) — Website

Public website for the **AI Responsibility Centre (ARC)**, University of Bayreuth.
Built with React, Vite and Tailwind CSS. Live at **https://ai-responsibility-centre.eu**.

## Quick start

```bash
npm install
npm run dev       # local dev server
npm run build     # production build → dist/
```

Requires Node 20+ (Node 22 recommended).

## Editing content

All text lives in [`src/data/content.js`](src/data/content.js) — edit there to
update the site. Legal details (Impressum / Datenschutz) are in the `LEGAL`
block of that file; values wrapped in `⟨…⟩` are placeholders to fill before
relying on the legal pages.

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml),
which builds the site and publishes it to GitHub Pages.

One-time GitHub setup:

- The repo must be **public** (GitHub Pages on the free plan).
- **Settings → Pages → Source → GitHub Actions**.

## Custom domain (ai-responsibility-centre.eu)

The domain is pinned in the repo via [`public/CNAME`](public/CNAME), so each
deploy keeps it. To make it resolve, set these DNS records at the registrar
(IONOS) for the apex domain — and remove any domain *forwarding/redirect*:

```
A     @   185.199.108.153
A     @   185.199.109.153
A     @   185.199.110.153
A     @   185.199.111.153
AAAA  @   2606:50c0:8000::153
AAAA  @   2606:50c0:8001::153
AAAA  @   2606:50c0:8002::153
AAAA  @   2606:50c0:8003::153
CNAME www ishumancentricai.github.io
```

Then in **Settings → Pages**: confirm the custom domain check passes and enable
**Enforce HTTPS** (GitHub issues the certificate automatically once DNS
resolves).
