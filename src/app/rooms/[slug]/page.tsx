import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { getApiRooms } from "@/lib/api/thehotelmate";
import { SITE_INFO } from "@/data/site";
import { generateVillaSchema, generateBreadcrumbSchema } from "@/utils/schema";
import { generateCanonicalUrl } from "@/utils/seo";
import RoomDetailClient from "./RoomDetailClient";

interface RoomPageProps {
  params: { slug: string };
}

/** API-only: throws at build time if thehotelmate cannot be reached. */
async function resolveRoom(slug: string) {
  const apiRooms = await getApiRooms();
  return apiRooms.find((room) => room.slug === slug);
}

export async function generateStaticParams() {
  const rooms = await getApiRooms();
  return rooms.map((room) => ({ slug: room.slug }));
}

export async function generateMetadata({ params }: RoomPageProps): Promise<Metadata> {
  const room = await resolveRoom(params.slug);
  if (!room) return { title: "Room Not Found" };
  return {
    title: `${room.name} | Book at ${SITE_INFO.name}`,
    description: `${room.name} starting from ₹${room.price}. ${room.description.substring(0, 150)}. Book now for the best rates.`,
    alternates: { canonical: `/rooms/${room.slug}` },
    openGraph: {
      title: `${room.name} | ${SITE_INFO.name}`,
      description: room.description.substring(0, 200),
      url: generateCanonicalUrl(`/rooms/${room.slug}`),
      images: [{ url: room.images[0]?.src, width: 800, height: 600, alt: room.name }],
    },
  };
}

export default async function RoomDetailPage({ params }: RoomPageProps) {
  const room = await resolveRoom(params.slug);
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
