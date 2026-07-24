# Velora Stays

Marketing site for Velora Stays — luxury villas near Pawna Lake, Lonavala. Built with:

- **Next.js 14** (App Router) + **TypeScript**
- **SCSS Modules** for component styling, with a shared token/mixin layer
- **Redux Toolkit** for UI state (mobile nav, mega menu, booking flow)
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
velorastayweb/
├── next.config.mjs          # Static export, image config, sass includePaths
├── tsconfig.json            # Path alias: "@/*" -> "src/*"
├── package.json
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, fonts, Redux provider
│   │   ├── page.tsx          # Homepage composing all sections
│   │   ├── globals.scss      # Reset, body styles, utility classes
│   │   ├── villas/           # Villa listing and detail pages
│   │   ├── facilities/       # Amenities listing and detail pages
│   │   ├── nearby/           # Nearby attractions
│   │   ├── about/            # About, story, team, mission, vision, values, awards, careers, sustainability
│   │   ├── contact/          # Contact page
│   │   ├── booking/          # Booking flow
│   │   ├── gallery/          # Photo gallery
│   │   ├── reviews/          # Guest reviews
│   │   ├── faq/              # FAQ page
│   │   ├── offers/           # Special offers
│   │   ├── events/           # Events and celebrations
│   │   ├── blog/             # Travel blog
│   │   ├── tours/            # Tour packages
│   │   ├── explore/          # Explore hub (experiences, attractions, tours, gallery, virtual tour)
│   │   ├── search/           # Search page
│   │   └── legal/            # Legal pages (privacy, terms, refund, cookies, accessibility)
│   ├── components/
│   │   ├── layout/           # Header, MobileNav, Footer, ScrollToTop, WhatsAppButton, Breadcrumb
│   │   ├── sections/         # Hero, SearchBar, FeaturedVillas, WhyChooseUs, Testimonials, Gallery, etc.
│   │   ├── ui/               # Accordion, Badge, Button, Card, Input, Modal, Rating, Select, Tabs, etc.
│   │   ├── villas/           # VillaCard, VillaGallery, VillaAmenities, VillaPricing, VillaComparison, etc.
│   │   ├── seo/              # JsonLd structured data
│   │   └── Icon/             # Iconify wrapper
│   ├── data/                 # ALL site copy & content — single source of truth
│   ├── store/
│   │   ├── store.ts          # configureStore, makeStore factory
│   │   ├── hooks.ts          # Typed useAppDispatch / useAppSelector
│   │   └── slices/
│   │       ├── uiSlice.ts    # Mobile nav, mega menu, modal, scroll state
│   │       └── bookingSlice.ts # Booking flow state
│   ├── providers/
│   │   └── ReduxProvider.tsx  # Client component wrapping <Provider>
│   ├── styles/
│   │   ├── _variables.scss   # Design tokens (color, type, spacing, radii, motion)
│   │   ├── _mixins.scss      # container, section-padding, glass-surface, pill-button, etc.
│   │   ├── _animations.scss  # Keyframe animations
│   │   ├── _typography.scss  # Typography styles
│   │   └── _utilities.scss   # Utility classes
│   ├── hooks/                # Custom hooks (IntersectionObserver, localStorage, mediaQuery, scroll)
│   ├── types/
│   │   └── index.ts          # Shared TS interfaces for all data models
│   └── utils/
│       ├── constants.ts      # Site constants
│       ├── schema.ts         # JSON-LD schema generators
│       └── seo.ts            # SEO helper functions
```
