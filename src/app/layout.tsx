import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import ReduxProvider from "@/providers/ReduxProvider";
import Header from "@/components/layout/Header/Header";
import MobileNav from "@/components/layout/MobileNav/MobileNav";
import Footer from "@/components/layout/Footer/Footer";
import ScrollToTop from "@/components/layout/ScrollToTop/ScrollToTop";
import WhatsAppButton from "@/components/layout/WhatsAppButton/WhatsAppButton";
import { SITE_INFO } from "@/data/site";
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

export const metadata: Metadata = {
  title: {
    default: `${SITE_INFO.name} | Luxury Villas Near Pawna Lake, Lonavala`,
    template: `%s | ${SITE_INFO.name}`,
  },
  description: SITE_INFO.description,
  keywords: [
    "luxury villa Pawna Lake",
    "villa near Lonavala",
    "Pawna Lake villa booking",
    "weekend getaway Lonavala",
    "private pool villa Maharashtra",
    "group stay Pawna Lake",
    "Velora Stays",
  ],
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
    title: `${SITE_INFO.name} | Luxury Villas Near Pawna Lake, Lonavala`,
    description: SITE_INFO.description,
    images: [
      {
        url: "/schemaimage.jpeg",
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_INFO.name} | Luxury Villas Near Pawna Lake, Lonavala`,
    description: SITE_INFO.description,
    images: ["/schemaimage.jpeg"],
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
