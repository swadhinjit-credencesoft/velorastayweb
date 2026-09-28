import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import ReduxProvider from "@/providers/ReduxProvider";
import Header from "@/components/layout/Header/Header";
import MobileNav from "@/components/layout/MobileNav/MobileNav";
import Footer from "@/components/layout/Footer/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop/ScrollToTop";
import WhatsAppButton from "@/components/layout/WhatsAppButton/WhatsAppButton";
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

const OG_IMAGE =
  "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&h=630&fit=crop";

export const metadata: Metadata = {
  title: {
    default: `${SITE_INFO.name} | Rooms Near Jagannath Temple, Puri`,
    template: `%s | ${SITE_INFO.name}`,
  },
  description: SITE_INFO.description,
  keywords: [
    "hotel near Jagannath Temple",
    "Bishnu Bhaban Puri",
    "budget hotel in Puri",
    "Puri darshan hotel",
    "rooms at Jagannath Temple gate",
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
    title: `${SITE_INFO.name} | Rooms Near Jagannath Temple, Puri`,
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
    title: `${SITE_INFO.name} | Rooms Near Jagannath Temple, Puri`,
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
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <body className="antialiased">
        <GoogleTagManager />
        <ReduxProvider>
          <Header />
          <MobileNav />
          <main className="main-content">{children}</main>
          <Footer />
          <ScrollToTop />
          <WhatsAppButton />
        </ReduxProvider>
      </body>
    </html>
  );
}
