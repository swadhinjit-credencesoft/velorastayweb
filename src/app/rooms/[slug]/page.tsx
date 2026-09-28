import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { VILLAS, getVillaBySlug } from "@/data/villas";
import { SITE_INFO } from "@/data/site";
import { generateVillaSchema, generateBreadcrumbSchema } from "@/utils/schema";
import { generateCanonicalUrl } from "@/utils/seo";
import RoomDetailClient from "./RoomDetailClient";

interface RoomPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return VILLAS.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const room = getVillaBySlug(params.slug);
  if (!room) return { title: "Room Not Found" };
  return {
    title: `${room.name} | Book at ${SITE_INFO.name}`,
    description: `${room.name} starting from ₹${room.price}/night. ${room.description.substring(0, 150)}. Book now for the best rates.`,
    alternates: { canonical: `/rooms/${room.slug}` },
    openGraph: {
      title: `${room.name} | ${SITE_INFO.name}`,
      description: room.description.substring(0, 200),
      url: generateCanonicalUrl(`/rooms/${room.slug}`),
      images: [{ url: room.images[0]?.src, width: 800, height: 600, alt: room.name }],
    },
  };
}

export default function RoomDetailPage({ params }: RoomPageProps) {
  const room = getVillaBySlug(params.slug);
  if (!room) notFound();

  return (
    <>
      <JsonLd
        schema={generateVillaSchema({
          name: room.name,
          description: room.description,
          price: room.price,
          currency: room.currency === "₹" ? "INR" : room.currency,
          image: room.images[0]?.src || "",
          capacity: room.maxOccupancy,
        })}
      />
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "Rooms", url: `${SITE_INFO.url}/rooms` },
          { name: room.name, url: `${SITE_INFO.url}/rooms/${room.slug}` },
        ])}
      />
      <Breadcrumb
        items={[
          { label: "Rooms", href: "/rooms" },
          { label: room.name, href: `/rooms/${room.slug}` },
        ]}
      />

      <RoomDetailClient slug={params.slug} fallbackRoom={room} />
    </>
  );
}
