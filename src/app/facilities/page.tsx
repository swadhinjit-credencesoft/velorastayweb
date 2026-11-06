import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero/PageHero";
import { FACILITIES, FACILITIES_CONTENT } from "@/data/facilities";
import { STOCK_IMAGES } from "@/data/images";

export const metadata: Metadata = {
  title: "Facilities and Amenities | Y Hotels Signature",
  description: "Confirmed room, occupancy, meal-plan and arrival information for Y Hotels Signature in Jharsuguda.",
  alternates: { canonical: "/facilities" },
};

export default function FacilitiesPage() {
  return <>
    <PageHero eyebrow={FACILITIES_CONTENT.eyebrow} heading={FACILITIES_CONTENT.heading} description={FACILITIES_CONTENT.description} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Facilities", href: "/facilities" }]} bgImage={STOCK_IMAGES.lobby} />
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {FACILITIES.map((facility) => <article key={facility.id} className="rounded-xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900">{facility.name}</h2><p className="mt-2 text-sm leading-relaxed text-slate-600">{facility.description}</p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">{facility.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
          <Link href={`/facilities/${facility.slug}`} className="mt-5 inline-block font-semibold text-amber-700 hover:underline">More details</Link>
        </article>)}
      </div>
      <p className="mt-8 rounded-lg bg-slate-50 p-5 text-sm text-slate-600">Information about Wi-Fi, parking, restaurant/room service, accessibility and other amenities was not supplied. Please contact the hotel to confirm what is available before booking.</p>
    </main>
  </>;
}
