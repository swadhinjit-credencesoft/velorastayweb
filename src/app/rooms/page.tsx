import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { VILLAS_CONTENT } from "@/data/villas";
import { SITE_INFO } from "@/data/site";
import { HOTEL_ROOMS } from "@/data/villas";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { generateCanonicalUrl } from "@/utils/seo";
import RoomListClient from "./RoomListClient";
import { STOCK_IMAGES } from "@/data/images";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Rooms | Y Hotels Signature, Jharsuguda",
  description: "Explore 34 Deluxe, Super Deluxe and Executive rooms at Y Hotels Signature in Jharsuguda, Odisha. EP, CP, MAP and AP meal plans are available.",
  alternates: { canonical: "/rooms" },
  openGraph: {
    title: "Rooms | Y Hotels Signature, Jharsuguda",
    description: "Compare room categories, occupancy and listed room numbers at Y Hotels Signature.",
    url: generateCanonicalUrl("/rooms"),
  },
};

export default function RoomsPage() {
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
        bgImage={STOCK_IMAGES.deluxe}
      />
      <RoomListClient fallbackRooms={HOTEL_ROOMS} />
    </>
  );
}
