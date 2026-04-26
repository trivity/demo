# Premier Demolition — South West WA

A single-page marketing site for Premier Demolition, a family-owned demolition and asbestos removal business based in Brunswick Junction, servicing the South West of Western Australia.

## Stack

- **Next.js 14** (App Router, JavaScript)
- **Tailwind CSS** via Play CDN (per spec)
- **Google Fonts** — Anton (display) + DM Sans (body) + JetBrains Mono (technical)
- Pure CSS keyframe animations + IntersectionObserver scroll reveals (no animation libs)

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm start
```

## Notes for the client

- The **green brick pattern** from your flyer is preserved as a recurring brand motif (hero panel, logo mark, footer).
- All copy, FAQ answers, regions, and process steps come straight from your brief.
- Photos use Unsplash placeholders — swap them for your real before/after photos. Any `<img src="https://images.unsplash.com/...">` can be replaced with your media-storage URLs.
- License number **WR 2489**, phone **0439 510 783**, and email **premierdemolition2@hotmail.com** are pulled from your flyer.
- Tailwind is loaded via the Play CDN as requested. For long-term production, consider switching to compiled Tailwind for smaller payload + better performance.

## Sections

1. Header (sticky) with license bar
2. Hero with animated headline + 25+ counter
3. Trust strip (4 stats)
4. Services (Demolition, Asbestos Removal)
5. Process (8 steps)
6. Recent jobs (before/after style)
7. Service area (5 regions, 50+ towns, interactive)
8. About
9. FAQ (accordion, 6 questions)
10. Final quote CTA
11. Footer
