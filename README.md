# GrainBot Agro Analytics

Production-grade recreation of the GrainBot Agro Analytics marketing site, built with:

- **Next.js 14** (App Router) + **TypeScript**
- **SCSS Modules** for component styling, with a shared token/mixin layer
- **Redux Toolkit** for UI state (accordion, mobile nav, pricing selection)
- **Iconify (`@iconify/react`)** for the Lucide icon set
- Content fully driven by typed data files — no copy or config hard-coded in components

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Build for production:

```bash
npm run build
npm run start
```

## File structure

```
grainbot/
├── next.config.mjs          # Image domains, sass includePaths
├── tsconfig.json            # Path alias: "@/*" -> "src/*"
├── package.json
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, fonts, Redux provider
│   │   ├── page.tsx          # Composes all sections in order
│   │   └── globals.scss      # Reset, body font-feature-settings, selection, .font-oswald, .clip-image
│   ├── components/
│   │   ├── Navigation/        # Fixed glass nav + mobile menu
│   │   ├── Hero/               # Split "Smart Grain [pill] — Trading" headline, stats, overlays
│   │   ├── VisualBreak/        # Full-bleed grayscale break section
│   │   ├── Features/           # "Advantage" gap-px card grid
│   │   ├── Analysis/           # Accordion with grid-rows animation + sticky cross-fade image
│   │   ├── Pricing/            # Telegram Stars plans + How it works guide
│   │   ├── Trust/              # Trust section, CTA form, Footer
│   │   └── Icon/                # Iconify wrapper
│   ├── data/                  # ALL site copy & content — single source of truth
│   │   ├── site.ts             # Nav, hero, assets, visual break
│   │   ├── features.ts
│   │   ├── analysis.ts
│   │   ├── pricing.ts
│   │   └── trust.ts
│   ├── store/
│   │   ├── store.ts            # configureStore, makeStore factory
│   │   ├── hooks.ts             # Typed useAppDispatch / useAppSelector
│   │   └── slices/
│   │       ├── uiSlice.ts       # activeAnalysisIndex, isMobileNavOpen
│   │       └── pricingSlice.ts  # selectedPlanId
│   ├── providers/
│   │   └── ReduxProvider.tsx    # Client component wrapping <Provider>
│   ├── styles/
│   │   ├── _variables.scss      # Design tokens (color, type, spacing, radii, motion)
│   │   └── _mixins.scss         # container, section-padding, glass-surface, pill-button, etc.
│   └── types/
│       └── index.ts             # Shared TS interfaces for all data models
```

## Notes on fidelity

- Body sets `font-feature-settings: "cv11", "ss01"`.
- Hero headline is split by an in-flow `rounded-full` pill image between "Smart Grain" and "— Trading".
- Visual Break and Trust images use `grayscale` filters; Advantage/Analysis/Pricing imagery does not.
- Nav logo uses wide tracking; hero headline uses tight (`-0.05em`) tracking.
- Analysis accordion animates via CSS Grid `grid-template-rows` (`0fr` → `1fr`), driven by Redux state (`activeAnalysisIndex`) instead of imperative DOM toggling.
- Features grid uses the `gap-px` + colored-background technique for hairline borders instead of per-card borders.
