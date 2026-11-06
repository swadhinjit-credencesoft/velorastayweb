import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import { NEARBY_ATTRACTIONS, getAttractionBySlug } from "@/data/nearby";

type Props = { params: { slug: string } };
export const dynamicParams = false;
export function generateStaticParams() { return NEARBY_ATTRACTIONS.map((place) => ({ slug: place.slug })); }
export function generateMetadata({ params }: Props): Metadata {
  const place = getAttractionBySlug(params.slug);
  return place ? { title: `${place.name} | Explore Western Odisha`, description: place.description, alternates: { canonical: `/nearby/${place.slug}` } } : { title: "Destination not found | Y Hotels Signature" };
}

export default function NearbyDetailPage({ params }: Props) {
  const place = getAttractionBySlug(params.slug);
  if (!place) notFound();
  return <main className="mx-auto max-w-5xl px-4 py-32">
    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Explore", href: "/nearby" }, { label: place.name, href: `/nearby/${place.slug}` }]} />
    <div className="mt-8 grid gap-8 md:grid-cols-2">
      <div className="relative min-h-72 overflow-hidden rounded-xl"><Image src={place.image} alt="Representative landscape stock photo; not this destination" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /><span className="absolute bottom-3 left-3 rounded bg-black/60 px-3 py-1 text-xs text-white">Representative stock photo</span></div>
      <div><p className="text-sm font-semibold uppercase tracking-wide text-amber-700">{place.category}</p><h1 className="mt-2 text-3xl font-bold text-slate-900">{place.name}</h1><p className="mt-4 leading-relaxed text-slate-600">{place.description}</p><h2 className="mt-6 font-semibold text-slate-900">Before you go</h2><ul className="mt-2 list-disc space-y-2 pl-5 text-sm text-slate-600">{place.highlights.map((item) => <li key={item}>{item}</li>)}</ul><p className="mt-4 text-sm text-slate-600">{place.tips}</p><p className="mt-4 text-sm text-slate-500">Distance and travel time from the hotel have not been verified. Check the route, opening details and access before travelling.</p><div className="mt-6 flex flex-wrap gap-3"><a href={place.mapUrl} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white">Open map</a><Link href="/contact" className="rounded-lg border px-5 py-3">Ask the hotel</Link></div></div>
    </div>
  </main>;
}
