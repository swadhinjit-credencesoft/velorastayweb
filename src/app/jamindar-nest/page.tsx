import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import JamindarHero from "@/components/jamindar/JamindarHero/JamindarHero";
import JamindarIntro from "@/components/jamindar/JamindarIntro/JamindarIntro";
import JamindarCinematicStory from "@/components/jamindar/JamindarCinematicStory/JamindarCinematicStory";
import JamindarJourney from "@/components/jamindar/JamindarJourney/JamindarJourney";
import JamindarRooms from "@/components/jamindar/JamindarRooms/JamindarRooms";
import JamindarExperience from "@/components/jamindar/JamindarExperience/JamindarExperience";
import JamindarOdisha from "@/components/jamindar/JamindarOdisha/JamindarOdisha";
import JamindarHorizon from "@/components/jamindar/JamindarHorizon/JamindarHorizon";
import JamindarGallery from "@/components/jamindar/JamindarGallery/JamindarGallery";
import JamindarCTA from "@/components/jamindar/JamindarCTA/JamindarCTA";
import { jamindarData, jamindarBooking } from "@/data/jamindar";
import { getApiJamindarRooms } from "@/lib/api/thehotelmate";
import { JamindarRoomsProvider } from "@/providers/JamindarRoomsProvider";
import { SITE_INFO } from "@/data/site";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { generateCanonicalUrl } from "@/utils/seo";

export const metadata: Metadata = {
  title: `${jamindarData.name} | Heritage Stay on Chakra Tirtha Road, Puri`,
  description:
    "Discover Jamindar Nest on Chakra Tirtha Road, Puri — a refined boutique heritage stay featuring air-conditioned rooms, terrace views, and authentic hospitality.",
  alternates: {
    canonical: "/jamindar-nest",
  },
  openGraph: {
    title: `${jamindarData.name} | A New Chapter of Heritage`,
    description:
      "A refined stay experience shaped by warmth, character and the spirit of Odisha. Reserve direct at Jamindar Nest on Chakra Tirtha Road, Puri.",
    url: generateCanonicalUrl("/jamindar-nest"),
    images: [
      {
        url: jamindarData.hero.image,
        width: 1200,
        height: 630,
        alt: `${jamindarData.name} Heritage Stay, Puri`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${jamindarData.name} | Heritage Stay on Chakra Tirtha Road, Puri`,
    description:
      "Discover Jamindar Nest on Chakra Tirtha Road, Puri — a refined boutique heritage stay experience.",
    images: [jamindarData.hero.image],
  },
};

export default async function JamindarNestPage() {
  const apiRooms = await getApiJamindarRooms();

  const hotelSchema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: jamindarData.name,
    description:
      "A refined stay experience shaped by warmth, character and the spirit of Odisha, located on Chakra Tirtha Road, Puri.",
    url: `${SITE_INFO.url}/jamindar-nest`,
    image: `${SITE_INFO.url}${jamindarData.hero.image}`,
    telephone: jamindarBooking.phone,
    email: jamindarBooking.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Chakra Tirtha Road",
      addressLocality: "Puri",
      addressRegion: "Odisha",
      postalCode: "752002",
      addressCountry: "India",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: jamindarData.geo.latitude,
      longitude: jamindarData.geo.longitude,
    },
    priceRange: "₹₹",
  };

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: SITE_INFO.url },
    { name: "Jamindar Nest", url: `${SITE_INFO.url}/jamindar-nest` },
  ]);

  return (
    <>
      <JsonLd schema={hotelSchema} />
      <JsonLd schema={breadcrumbSchema} />

      <JamindarRoomsProvider rooms={apiRooms}>
        <JamindarHero />
        <JamindarIntro />
        <JamindarCinematicStory />
        <JamindarRooms />
        <JamindarJourney />
        <JamindarExperience />
        <JamindarOdisha />
        <JamindarHorizon />
        <JamindarGallery />
        <JamindarCTA />
      </JamindarRoomsProvider>
    </>
  );
}
