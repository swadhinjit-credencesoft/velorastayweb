# The Queen's Head – Paharganj

Marketing site for The Queen's Head – Paharganj, a hotel at 2282–2285, Rajguru Marg, Chuna Mandi, Paharganj, New Delhi. Built with:

- **Next.js 14** (App Router) + **TypeScript**
- **SCSS Modules** for component styling, with a shared token/mixin layer
- **Redux Toolkit** for UI state (mobile nav, mega menu, booking form state)
- **Iconify (`@iconify/react`)** for the Lucide icon set
- Content fully driven by typed data files — no copy or config hard-coded in components
- Static export (`output: "export"`) with WhatsApp-based booking flow

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

## Booking flow

All booking actions (room pages, `/book-now`, homepage CTAs) open a pre-filled WhatsApp chat with the hotel on **+91 9899739777**. No booking engine or third-party API is used.

## File structure

```
velorastayweb/
├── next.config.mjs          # Static export, unoptimized images, sass includePaths
├── tsconfig.json            # Path alias: "@/*" -> "src/*"
├── package.json
├── .htaccess                # Force HTTPS/non-www, old-route redirects, cache & gzip
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout, fonts, Redux provider, metadata
│   │   ├── page.tsx          # Homepage composing all sections
│   │   ├── globals.scss      # Reset, body styles, utility classes
│   │   ├── rooms/            # Room listing and room detail pages
│   │   ├── amenities/        # Facilities / amenities page
│   │   ├── location/         # Location and nearby attractions
│   │   ├── restaurant/       # On-site restaurant page
│   │   ├── gallery/          # Photo gallery (by category)
│   │   ├── book-now/         # WhatsApp booking form
│   │   ├── about/            # About the hotel
│   │   ├── reviews/          # Guest reviews
│   │   ├── faq/              # FAQ page
│   │   ├── contact/          # Contact page
│   │   ├── legal/            # Privacy, terms, cancellation, cookies, accessibility
│   │   ├── hotel-near-*/     # Local-SEO landing pages (New Delhi Railway Station, etc.)
│   │   ├── business-hotel-paharganj/   # Local-SEO landing page
│   │   ├── family-hotel-paharganj/     # Local-SEO landing page
│   │   ├── hotel-near-delhi-airport/   # Local-SEO landing page
│   │   ├── sitemap.ts        # Sitemap generator
│   │   ├── robots.ts         # Robots.txt generator
│   │   └── not-found.tsx     # Custom 404
│   ├── components/
│   │   ├── layout/           # Header, MobileNav, Footer, ScrollToTop, WhatsAppButton, Breadcrumb
│   │   ├── sections/         # Hero, SearchBar, FeaturedRooms, WhyChooseUs, Testimonials, Gallery, etc.
│   │   ├── ui/               # Accordion, Badge, Button, Card, Input, Modal, Rating, Select, Tabs, etc.
│   │   ├── seo/              # JsonLd structured data
│   │   └── Icon/             # Iconify wrapper
│   ├── data/                 # ALL site copy & content — single source of truth
│   │   ├── site.ts           # Hotel identity, contact, WhatsApp link, navigation-safe constants
│   │   ├── rooms.ts          # Room types, tariffs, amenities, popular rooms
│   │   ├── gallery.ts        # Gallery categories and images
│   │   ├── seoPages.ts       # Local-SEO landing page content
│   │   └── ...               # navigation, facilities, nearby, restaurant, reviews, faq, legal, etc.
│   ├── store/
│   │   ├── store.ts          # configureStore, makeStore factory
│   │   ├── hooks.ts          # Typed useAppDispatch / useAppSelector
│   │   └── slices/
│   │       ├── uiSlice.ts    # Mobile nav, mega menu, modal, scroll state
│   │       └── bookingSlice.ts # Search bar dates/guest state
│   ├── providers/
│   │   └── ReduxProvider.tsx  # Client component wrapping <Provider>
│   ├── styles/
│   │   ├── _variables.scss   # Design tokens (color, type, spacing, radii, motion)
│   │   ├── _mixins.scss      # container, section-padding, glass-surface, pill-button, etc.
│   │   ├── _animations.scss  # Keyframe animations
│   │   ├── _typography.scss  # Typography styles
│   │   └── _utilities.scss   # Utility classes
│   ├── hooks/                # Custom hooks (scroll position, etc.)
│   ├── types/
│   │   └── index.ts          # Shared TS interfaces for all data models
│   └── utils/
│       ├── schema.ts         # JSON-LD schema generators (Hotel, Organization, FAQ, Breadcrumb)
│       └── seo.ts            # SEO helper functions
```

## Notes

- Placeholder images under `public/` (e.g. `Pawnalake.jpg`, `Karlacaves.jpg`, `BhushiDam.webp`) are used as stand-ins in gallery/nearby/SEO pages — replace them with real hotel photos when available.
- The logo file `public/veloralogo-v2.png` still carries the old Velora mark — replace it with the new brand logo when ready.
