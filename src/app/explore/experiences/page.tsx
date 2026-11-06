import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero/PageHero";
import { NEARBY_ATTRACTIONS } from "@/data/nearby";
import { STOCK_IMAGES } from "@/data/images";

export const metadata: Metadata = {
  title: "Experiences in Jharsuguda | Y Hotels Signature",
  description: "Plan a self-guided visit to regional nature, heritage and cultural destinations from Jharsuguda.",
  alternates: { canonical: "/explore/experiences" },
};

export default function ExperiencesPage() {
  return <>
    <PageHero eyebrow="Explore Western Odisha" heading="Experiences around Jharsuguda" description="Discover regional nature, heritage and culture. Confirm routes, access and current visitor information before you travel." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Explore", href: "/explore" }, { label: "Experiences", href: "/explore/experiences" }]} bgImage={STOCK_IMAGES.landscape} />
    <main className="mx-auto max-w-6xl px-4 py-12">
      <p className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">Images are representative stock photos. These are regional visitor ideas, not activities operated or sold by the hotel. Travel times, tour services and access have not been confirmed.</p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{NEARBY_ATTRACTIONS.map((place) => <article key={place.id} className="rounded-xl border bg-white p-6"><p className="text-xs font-semibold uppercase tracking-wide text-amber-700">{place.category}</p><h2 className="mt-2 text-xl font-bold text-slate-900">{place.name}</h2><p className="mt-3 text-sm leading-relaxed text-slate-600">{place.description}</p><Link href={`/nearby/${place.slug}`} className="mt-4 inline-block font-semibold text-amber-800 underline">Visitor information</Link></article>)}</div>
      <div className="mt-10 flex flex-wrap justify-center gap-3"><Link href="/dining" className="rounded-lg border px-5 py-3 font-semibold">Regional food guide</Link><Link href="/explore/tour-packages" className="rounded-lg border px-5 py-3 font-semibold">Self-planned route ideas</Link></div>
    </main>
  </>;
}
