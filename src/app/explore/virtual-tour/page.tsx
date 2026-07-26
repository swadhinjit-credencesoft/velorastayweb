import type { Metadata } from "next";
import VirtualTourViewer from "./VirtualTourViewer";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { SITE_INFO } from "@/data/site";
import { generateBreadcrumbSchema } from "@/utils/schema";

export const metadata: Metadata = {
  title: "Virtual Tour | Velora Stays",
  description:
    "Take an immersive 360° virtual tour of Velora Stays luxury villas near Pawna Lake, Lonavala. Explore our spaces before you arrive.",
  alternates: { canonical: "/explore/virtual-tour" },
  openGraph: {
    title: "Virtual Tour | Velora Stays",
    description: "Take a 360° virtual tour of Velora Stays luxury villas.",
    url: "https://velorastays.in/explore/virtual-tour",
  },
};

export default function VirtualTourPage() {
  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "Explore", url: `${SITE_INFO.url}/explore` },
          { name: "Virtual Tour", url: `${SITE_INFO.url}/explore/virtual-tour` },
        ])}
      />
      <VirtualTourViewer />
    </>
  );
}
