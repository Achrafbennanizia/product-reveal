# AURALIS — Product Reveal

Cinematic **3D product launch landing** for a fictional spatial audio node. Built as a portfolio piece that shows marketing funnel discipline + scroll-scrubbed WebGL craft.

**Live intent:** awareness → shift → desire → proof → conversion.

## Stack
- Next.js (App Router) + TypeScript + Tailwind CSS v4
- React Three Fiber + Drei (procedural product model)
- Motion (`motion/react`) for UI entrances
- Lenis for smooth scrolling

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
npm start
```

## Structure
- `src/components/canvas/` — Three.js product + lighting
- `src/components/sections/` — marketing sections
- `docs/marketing.md` — brief, audience, funnel, metrics

## Portfolio notes
- Procedural product (no downloaded asset packs)
- Scroll progress drives rotation, lift, and halo explode
- `prefers-reduced-motion` disables Lenis float / idle motion
- Single primary conversion CTA after proof — not a noisy hero stack

## Deploy
Push to GitHub and connect to Vercel. Root directory: `product-reveal` if this lives in a monorepo.
# product-reveal
