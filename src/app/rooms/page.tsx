import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { VILLAS_CONTENT } from "@/data/villas";
import { SITE_INFO } from "@/data/site";
import { getApiRooms } from "@/lib/api/thehotelmate";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { generateCanonicalUrl } from "@/utils/seo";
import RoomListClient from "./RoomListClient";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Our Rooms | Bishnu Bhaban, Puri",
  description:
    "Choose from our rooms at Bishnu Bhaban, a comfortable stay at the West Gate of the Shri Jagannath Temple in Puri. Air-conditioned and non-AC options, four-bed family rooms, and suites, all with an attached bathroom and free WiFi.",
  alternates: { canonical: "/rooms" },
  openGraph: {
    title: "Our Rooms | Bishnu Bhaban Puri",
    description:
      "Browse the air-conditioned, non-AC, four-bed, and suite rooms at Bishnu Bhaban, a comfortable stay just 50 metres from the West Gate of Shri Jagannath Temple, Puri.",
    url: generateCanonicalUrl("/rooms"),
  },
};

export default async function RoomsPage() {
  // Fetched at build time (static export) so room names, prices and images are
  // baked into the HTML. The browser fetch in useBhabanData is blocked by CORS
  // on the live domain, so this build-time call is the only room source.
  const apiRooms = await getApiRooms();

  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "Rooms", url: `${SITE_INFO.url}/rooms` },
        ])}
      />
      <PageHero
        eyebrow={VILLAS_CONTENT.eyebrow}
        heading={VILLAS_CONTENT.heading}
        description={VILLAS_CONTENT.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Rooms", href: "/rooms" }]}
        bgImage="/bishnyhomeimage/homehero22.webp"
      />
      <RoomListClient fallbackRooms={apiRooms} />
    </>
  );
}
