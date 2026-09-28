import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { VILLAS, VILLAS_CONTENT } from "@/data/villas";
import { SITE_INFO } from "@/data/site";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { generateCanonicalUrl } from "@/utils/seo";
import VillaListClient from "./VillaListClient";

export const metadata: Metadata = {
  title: "Our Rooms | Bishnu Bhaban, Puri",
  description:
    "Choose from our three room categories at Bishnu Bhaban, a budget hotel at the West Gate of the Jagannath Temple in Puri. Each room has air conditioning, an attached bathroom, free WiFi, and television.",
  alternates: { canonical: "/villas" },
  openGraph: {
    title: "Our Rooms | Bishnu Bhaban Puri",
    description:
      "Browse our Standard, Deluxe, and Multi-Bed rooms at Bishnu Bhaban, a budget hotel steps from the Jagannath Temple in Puri.",
    url: generateCanonicalUrl("/villas"),
  },
};

export default function VillasPage() {
  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "Rooms", url: `${SITE_INFO.url}/villas` },
        ])}
      />
      <PageHero
        eyebrow={VILLAS_CONTENT.eyebrow}
        heading={VILLAS_CONTENT.heading}
        description={VILLAS_CONTENT.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Rooms", href: "/villas" }]}
        bgImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1600"
      />
      <VillaListClient fallbackVillas={VILLAS} />
    </>
  );
}
