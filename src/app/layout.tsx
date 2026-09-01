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
    default: `${SITE_INFO.name} | Hotel Near Sai Baba Temple, Shirdi`,
    template: `%s | ${SITE_INFO.name}`,
  },
  description: SITE_INFO.description,
  keywords: [
    "hotel in Shirdi",
    "hotels in Shirdi",
    "Hotel Yogiraj Shirdi",
    "hotel near Sai Baba Temple",
    "hotel near Sai Baba Mandir Shirdi",
    "budget hotel in Shirdi",
    "family hotel in Shirdi",
    "hotel near Shirdi temple",
    "Shirdi hotel booking",
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
    title: `${SITE_INFO.name} | Hotel Near Sai Baba Temple, Shirdi`,
    description: SITE_INFO.description,
    images: [
      {
        url: `${SITE_INFO.url}/yogirajimg/AKS08545.avif`,
        width: 1200,
        height: 630,
        alt: SITE_INFO.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_INFO.name} | Hotel Near Sai Baba Temple, Shirdi`,
    description: SITE_INFO.description,
    images: [`${SITE_INFO.url}/yogirajimg/AKS08545.avif`],
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
