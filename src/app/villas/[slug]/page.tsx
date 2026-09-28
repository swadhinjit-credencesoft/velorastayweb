import { redirect } from "next/navigation";
import { VILLAS } from "@/data/villas";

const LEGACY_SLUG_REDIRECTS: Record<string, string> = {
  "standard-room": "double-bed-ac-room",
  "deluxe-room": "deluxe-double-bedded-temple-facing-room",
  "multi-bed-room": "four-bed-ac-room",
};

export const dynamicParams = false;

export function generateStaticParams() {
  const legacy = Object.keys(LEGACY_SLUG_REDIRECTS);
  const current = VILLAS.map((room) => room.slug);
  return [...new Set([...legacy, ...current])].map((slug) => ({ slug }));
}

export const metadata = {
  robots: { index: false, follow: true },
};

export default function LegacyVillaDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const target = LEGACY_SLUG_REDIRECTS[params.slug] ?? params.slug;
  redirect(`/rooms/${target}`);
}
