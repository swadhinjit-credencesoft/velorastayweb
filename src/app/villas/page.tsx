import type { Metadata } from "next";
import PageHero from "@/components/sections/PageHero/PageHero";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { VILLAS, VILLAS_CONTENT } from "@/data/villas";
import { SITE_INFO } from "@/data/site";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { generateCanonicalUrl } from "@/utils/seo";
import VillaListClient from "./VillaListClient";

export const metadata: Metadata = {
  title: "Our Villas | Luxury Villa Stays Near Pawna Lake, Lonavala",
  description:
    "Choose from our range of luxury villas at Velora Stays near Pawna Lake, Lonavala. From cozy 2 BHK villas to expansive 7 BHK villas, each features modern amenities and a fully equipped kitchen.",
  alternates: { canonical: "/villas" },
  openGraph: {
    title: "Our Villas | Velora Stays Pawna Lake",
    description: "Browse our luxury villas near Pawna Lake with modern amenities, private pool, and stunning views.",
    url: generateCanonicalUrl("/villas"),
  },
};

export default function VillasPage() {
  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "The Villa", url: `${SITE_INFO.url}/villas` },
        ])}
      />
      <PageHero
        eyebrow={VILLAS_CONTENT.eyebrow}
        heading={VILLAS_CONTENT.heading}
        description={VILLAS_CONTENT.description}
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "The Villa", href: "/villas" }]}
        bgImage="/villaheroimg.jpeg"
      />
      <VillaListClient fallbackVillas={VILLAS} />
    </>
  );
}
