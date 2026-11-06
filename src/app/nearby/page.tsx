import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import { NEARBY_ATTRACTIONS, NEARBY_CONTENT } from "@/data/nearby";

export const metadata: Metadata = { title: "Explore Western Odisha | Y Hotels Signature", description: "Regional nature, heritage and cultural places to explore from Jharsuguda.", alternates: { canonical: "/nearby" } };

export default function NearbyPage() {
  return <>
    <section className="bg-slate-950 px-4 pb-12 pt-32 text-white"><div className="mx-auto max-w-7xl"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Explore", href: "/nearby" }]} /><p className="mt-6 text-sm font-semibold uppercase tracking-widest text-amber-300">{NEARBY_CONTENT.eyebrow}</p><h1 className="mt-2 text-4xl font-bold">{NEARBY_CONTENT.heading}</h1><p className="mt-3 max-w-3xl text-gray-300">{NEARBY_CONTENT.description}</p></div></section>
    <main className="mx-auto max-w-7xl px-4 py-10"><p className="mb-7 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">Images are representative Unsplash landscape stock photos. The hotel has not supplied destination photography or verified distances. Open a map and confirm transport details before departure.</p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{NEARBY_ATTRACTIONS.map((place) => <article key={place.id} className="overflow-hidden rounded-xl border bg-white shadow-sm"><div className="relative aspect-[4/3]"><Image src={place.image} alt="Representative landscape stock photo; not this destination" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" /></div><div className="p-5"><p className="text-xs font-semibold uppercase tracking-wide text-amber-700">{place.category}</p><h2 className="mt-2 text-xl font-bold text-slate-900">{place.name}</h2><p className="mt-2 text-sm leading-relaxed text-slate-600">{place.description}</p><div className="mt-4 flex gap-4 text-sm"><Link href={`/nearby/${place.slug}`} className="font-semibold text-amber-700 hover:underline">Explore details</Link><a href={place.mapUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-700 hover:underline">Open map</a></div></div></article>)}</div>
    </main>
  </>;
}
