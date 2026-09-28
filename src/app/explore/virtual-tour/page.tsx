import type { Metadata } from "next";
import VirtualTourViewer from "./VirtualTourViewer";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { SITE_INFO } from "@/data/site";
import { generateBreadcrumbSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Property Walkthrough | Bishnu Bhaban",
  description:
    "Photographs of Bishnu Bhaban in Puri: the entrance and front desk, guest rooms, bedding, the attached bathroom, and the dining area.",
  alternates: { canonical: "/explore/virtual-tour" },
  openGraph: {
    title: "Property Walkthrough | Bishnu Bhaban",
    description: "A look at the entrance, the rooms, and the dining area before you book.",
    url: "https://bishnubhaban.com/explore/virtual-tour",
  },
};

export default function VirtualTourPage() {
  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "Explore", url: `${SITE_INFO.url}/explore` },
          { name: "Property Walkthrough", url: `${SITE_INFO.url}/explore/virtual-tour` },
        ])}
      />
      <VirtualTourViewer />
    </>
  );
}
