import type { Metadata } from "next";
import { Inter, Oswald, Cormorant_Garamond } from "next/font/google";
import ReduxProvider from "@/providers/ReduxProvider";
import { BhabanRoomsProvider } from "@/providers/BhabanRoomsProvider";
import { getApiRooms } from "@/lib/api/thehotelmate";
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

const OG_IMAGE =
  `${SITE_INFO.url}/bishnyhomeimage/homehero1.png`;

export const metadata: Metadata = {
  title: {
    default: `${SITE_INFO.name} | Rooms Near Shri Jagannath Temple, Puri`,
    template: `%s | ${SITE_INFO.name}`,
  },
  description: SITE_INFO.description,
  keywords: [
    "hotel near Shri Jagannath Temple",
    "Bishnu Bhaban Puri",
    "comfortable stay near Shri Jagannath Temple",
    "Puri darshan hotel",
    "rooms at Shri Jagannath Temple gate",
    "Puri Grand Road hotel",
    "temple visit accommodation Puri",
  ],
  applicationName: SITE_INFO.name,
  authors: [{ name: SITE_INFO.name }],
  creator: SITE_INFO.name,
  metadataBase: new URL(SITE_INFO.url),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_INFO.url,
    siteName: SITE_INFO.name,
    title: `${SITE_INFO.name} | Rooms Near Shri Jagannath Temple, Puri`,
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
    title: `${SITE_INFO.name} | Rooms Near Shri Jagannath Temple, Puri`,
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

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const apiRooms = await getApiRooms();

  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable} ${cormorant.variable}`}>
      <body className="antialiased">
        <GoogleTagManager />
        <BhabanRoomsProvider rooms={apiRooms}>
          <ReduxProvider>
            <LayoutSwitcher>
              <main className="main-content">{children}</main>
              <ScrollToTop />
            </LayoutSwitcher>
          </ReduxProvider>
        </BhabanRoomsProvider>
      </body>
    </html>
  );
}
