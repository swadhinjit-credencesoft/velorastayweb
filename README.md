# Hotel Yogiraj – Shirdi

Marketing site for Hotel Yogiraj, a hotel at Pimpalwadi Rd, near Sai Baba Temple, Shiv Nagar, Shirdi, Maharashtra 423109. Built with:

- **Next.js 14** (App Router) + **TypeScript**
- **SCSS Modules** for component styling, with a shared token/mixin layer
- **Redux Toolkit** for UI state (mobile nav, mega menu, booking form state)
- **Iconify (`@iconify/react`)** for the Lucide icon set
- Content fully driven by typed data files — no copy or config hard-coded in components
- BookOne booking engine (`https://bookone.io/Hotel-Yogiraj`) with live availability via the THM hotel API

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

Booking actions (room pages, homepage CTAs, search bar) open the BookOne engine at **https://bookone.io/Hotel-Yogiraj?bookingEngine=true**. Live room availability and prices (property **651**) are fetched from the THM API. Guests can also reach the hotel directly on **+91 95955 33535** (call/WhatsApp) or **info@yogirajhotel.com**.

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
│   │   ├── hotel-in-shirdi/  # Local-SEO landing page
│   │   ├── hotel-near-sai-baba-temple/         # Local-SEO landing page
│   │   ├── hotel-near-shirdi-bus-station/      # Local-SEO landing page
│   │   ├── hotel-near-shirdi-airport/          # Local-SEO landing page
│   │   ├── hotel-for-sai-baba-pilgrims/        # Local-SEO landing page
│   │   ├── family-hotel-shirdi/                # Local-SEO landing page
│   │   ├── budget-hotel-in-shirdi/             # Local-SEO landing page
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

- Site images now use the real Hotel Yogiraj photos under `public/yogirajimg/` (gallery, pages, backgrounds, seo) and `public/nearby/` (Shirdi place photos). Legacy placeholder assets (`homehero*.png`, `whychooseus.png`, `schemaimg.png`, `deluxeroomimage/`, `PremiumDoubleRoom/`, `TripleSuitewithJacuzzi/`, `queenslogo.png`) have been removed. Note: room listing images come from the booking API (`ApiRoom.imageList`), not `public/`.
- The nav/header logo still uses `public/yogirajlogo.webp` (the old Queen's Head mark). Replace it with a Hotel Yogiraj logo file and update `SITE_ASSETS.logo` plus the `src` refs in `Header.tsx`, `Footer.tsx` and `MobileNav.tsx`.
