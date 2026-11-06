import type { Metadata } from "next";
import { Inter, Oswald, Cormorant_Garamond } from "next/font/google";
import ReduxProvider from "@/providers/ReduxProvider";
import { HotelRoomsProvider } from "@/providers/HotelRoomsProvider";
import { HOTEL_ROOMS } from "@/data/villas";
import LayoutSwitcher from "@/components/layout/LayoutSwitcher/LayoutSwitcher";
import ScrollToTop from "@/components/layout/ScrollToTop/ScrollToTop";
import { SITE_INFO } from "@/data/site";
import GoogleTagManager from "@/components/analytics/GoogleTagManager";
import "./globals.scss";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const OG_IMAGE = `${SITE_INFO.url}/y-hotels-room.svg`;

export const metadata: Metadata = {
  title: {
    default: `${SITE_INFO.name} | Hotel in Jharsuguda, Odisha`,
    template: `%s | ${SITE_INFO.name}`,
  },
  description: SITE_INFO.description,
  keywords: [
    "Y Hotels Signature",
    "hotel in Jharsuguda",
    "hotel near Sarbahal Road Jharsuguda",
    "rooms in Jharsuguda Odisha",
  ],
  applicationName: SITE_INFO.name,
  authors: [{ name: SITE_INFO.name }],
  creator: SITE_INFO.name,
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/yhotel.png", type: "image/png" }],
    shortcut: "/yhotel.png",
    apple: [{ url: "/yhotel.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_INFO.url,
    siteName: SITE_INFO.name,
    title: `${SITE_INFO.name} | Hotel in Jharsuguda, Odisha`,
    description: SITE_INFO.description,
    images: [
      {
        url: OG_IMAGE,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_INFO.name} | Hotel in Jharsuguda, Odisha`,
    description: SITE_INFO.description,
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <GoogleTagManager />
        <HotelRoomsProvider rooms={HOTEL_ROOMS}>
          <ReduxProvider>
            <LayoutSwitcher>
              <main className="main-content">{children}</main>
              <ScrollToTop />
            </LayoutSwitcher>
          </ReduxProvider>
        </HotelRoomsProvider>
      </body>
    </html>
  );
}
