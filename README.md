# AgentForge

A modern landing website for customized personal AI Agent tools, built with Next.js 16, TypeScript, and Tailwind CSS v4.

## Features

- Bilingual routes for SEO (`/` English, `/zh/` 中文)
- Dark-mode-first design
- Responsive layout (mobile + desktop)
- Static export — deployable to any CDN or GitHub Pages
- Animated sections with Framer Motion
- Sections: Hero, Features, How It Works, Use Cases, Pricing, FAQ, CTA, Footer

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build   # produces /out with static HTML/CSS/JS
```

## Deployment

The site auto-deploys to GitHub Pages via `.github/workflows/deploy.yml` on every push to `master`.
