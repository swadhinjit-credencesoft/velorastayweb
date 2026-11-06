import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero/PageHero";
import { TOURS_CONTENT, LOCAL_ITINERARY_IDEAS } from "@/data/tours";
import { NEARBY_ATTRACTIONS } from "@/data/nearby";
import { STOCK_IMAGES } from "@/data/images";

export const metadata: Metadata = { title: "Regional Route Ideas | Y Hotels Signature", description: "Self-planned nature, heritage and cultural outing ideas around Western Odisha.", alternates: { canonical: "/explore/tour-packages" } };

export default function TourPackagesPage() {
  return <>
    <PageHero eyebrow={TOURS_CONTENT.eyebrow} heading={TOURS_CONTENT.heading} description={TOURS_CONTENT.description} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Explore", href: "/explore" }, { label: "Route ideas", href: "/explore/tour-packages" }]} bgImage={STOCK_IMAGES.landscape} />
    <main className="mx-auto max-w-6xl px-4 py-12">
      <p className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">These are independent route ideas, not hotel-run or priced tour packages. Travel time, transport, access, fees and opening details have not been verified. Confirm them before travel.</p>
      <div className="grid gap-5 md:grid-cols-3">{LOCAL_ITINERARY_IDEAS.map((idea) => <article key={idea.id} className="rounded-xl border bg-white p-6"><p className="text-xs font-semibold uppercase tracking-wide text-amber-700">Self-planned outing</p><h2 className="mt-2 text-xl font-bold text-slate-900">{idea.title}</h2><ul className="mt-4 space-y-2">{idea.places.map((name) => { const place = NEARBY_ATTRACTIONS.find((item) => item.name === name); return <li key={name}>{place ? <Link className="text-amber-800 underline" href={`/nearby/${place.slug}`}>{name}</Link> : name}</li>; })}</ul><p className="mt-4 text-sm text-slate-600">{idea.note}</p></article>)}</div>
      <p className="mt-8 text-center text-sm text-slate-600">Ask the hotel team for local directions. They have not confirmed transport or guided-tour services.</p>
    </main>
  </>;
}
