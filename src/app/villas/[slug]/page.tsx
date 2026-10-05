import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { SITE_INFO } from "@/data/site";
import { getDynamicVillas, getDynamicVillaBySlug } from "@/lib/api/thehotelmate";
import { generateVillaSchema, generateBreadcrumbSchema } from "@/utils/schema";
import { generateCanonicalUrl } from "@/utils/seo";
import VillaDetailClient from "./VillaDetailClient";

export const revalidate = 60;

interface VillaPageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const villas = await getDynamicVillas();
  return villas.map((villa) => ({ slug: villa.slug }));
}

export async function generateMetadata({ params }: VillaPageProps): Promise<Metadata> {
  const villa = await getDynamicVillaBySlug(params.slug);
  if (!villa) return { title: "Villa Not Found" };
  return {
    title: `${villa.name} | Book at ${SITE_INFO.name}`,
    description: `${villa.name} starting from ₹${villa.price}/night. ${villa.description.substring(0, 150)}. Book now for the best rates.`,
    alternates: { canonical: `/villas/${villa.slug}` },
    openGraph: {
      title: `${villa.name} | ${SITE_INFO.name}`,
      description: villa.description.substring(0, 200),
      url: generateCanonicalUrl(`/villas/${villa.slug}`),
      images: [{ url: villa.images[0]?.src, width: 800, height: 600, alt: villa.name }],
    },
  };
}

export default async function VillaDetailPage({ params }: VillaPageProps) {
  const villa = await getDynamicVillaBySlug(params.slug);
  if (!villa) notFound();

  return (
    <>
      <JsonLd
        schema={generateVillaSchema({
          name: villa.name,
          description: villa.description,
          price: villa.price,
          currency: villa.currency === "₹" ? "INR" : villa.currency,
          image: villa.images[0]?.src || "",
          capacity: villa.maxOccupancy,
        })}
      />
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "The Villa", url: `${SITE_INFO.url}/villas` },
          { name: villa.name, url: `${SITE_INFO.url}/villas/${villa.slug}` },
        ])}
      />
      <Breadcrumb
        items={[
          { label: "The Villa", href: "/villas" },
          { label: villa.name, href: `/villas/${villa.slug}` },
        ]}
      />

      <VillaDetailClient slug={params.slug} fallbackVilla={villa} />
    </>
  );
}
