# AURALIS — Product Reveal

Cinematic **3D product launch landing** for a fictional spatial audio node. Built as a portfolio piece that shows marketing funnel discipline + scroll-scrubbed WebGL craft.

**Live intent:** awareness → shift → desire → proof → conversion.

**Repo:** [github.com/Achrafbennanizia/product-reveal](https://github.com/Achrafbennanizia/product-reveal)  
**Live site (GitHub Pages):** [achrafbennanizia.github.io/product-reveal](https://achrafbennanizia.github.io/product-reveal/)

## Stack
- Next.js (App Router) + TypeScript + Tailwind CSS v4
- React Three Fiber + Drei (procedural product model)
- Motion (`motion/react`) for UI entrances
- Lenis for slow smooth scrolling + threshold section snap (~93%)

## Design read
Premium hardware launch for portfolio reviewers: deep ink atmosphere, warm copper accent, Syne + Manrope, brand-first hero, no card clutter in the first viewport.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npx serve out
```

## CI/CD
- **CI** (`.github/workflows/ci.yml`) — lint + static build on every push/PR to `main`
- **Deploy** (`.github/workflows/deploy.yml`) — publishes `out/` to GitHub Pages on `main`

After the first push, enable Pages in the repo: **Settings → Pages → Source: GitHub Actions**.

## Structure
- `src/components/canvas/` — Three.js product + lighting
- `src/components/sections/` — marketing sections
- `docs/marketing.md` — brief, audience, funnel, metrics

## Portfolio notes
- Procedural product (no downloaded asset packs)
- Scroll progress drives rotation, lift, and halo explode
- `prefers-reduced-motion` disables Lenis float / idle motion
- Single primary conversion CTA after proof — not a noisy hero stack
