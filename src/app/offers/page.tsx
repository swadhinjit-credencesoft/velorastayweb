import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero/PageHero";
import { HOTEL_ROOMS } from "@/data/villas";
import { SITE_INFO } from "@/data/site";
import { STOCK_IMAGES } from "@/data/images";

export const metadata: Metadata = {
  title: "Room Rates and Meal Plans | Y Hotels Signature",
  description: "Published single and double occupancy base rates for Deluxe, Super Deluxe and Executive rooms in Jharsuguda.",
  alternates: { canonical: "/offers" },
};

export default function OffersPage() {
  return <>
    <PageHero eyebrow="Published base rates" heading="Room rates and meal plans" description="Rates shown are the supplied single-occupancy base rates. Double occupancy adds ₹500 per room. Confirm availability, taxes and meal-plan pricing for your dates." breadcrumbs={[{ label: "Home", href: "/" }, { label: "Rates", href: "/offers" }]} bgImage={STOCK_IMAGES.deluxe} />
    <main className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid gap-5 md:grid-cols-3">{HOTEL_ROOMS.map((room) => <article key={room.id} className="rounded-xl border bg-white p-6"><p className="text-sm text-slate-500">{room.roomCount} rooms</p><h2 className="mt-1 text-xl font-bold text-slate-900">{room.name}</h2><p className="mt-4 text-sm text-slate-600">Single occupancy</p><p className="text-3xl font-bold text-slate-950">₹{room.price.toLocaleString("en-IN")} <span className="text-sm font-normal text-slate-500">per night</span></p><p className="mt-3 text-sm text-slate-600">Double occupancy: ₹{(room.price + 500).toLocaleString("en-IN")} per night</p><p className="mt-2 text-sm text-slate-600">Additional person: ₹{SITE_INFO.extraPersonCharge.toLocaleString("en-IN")}</p><Link className="mt-5 inline-block font-semibold text-amber-800 underline" href={`/rooms/${room.slug}`}>Room details and numbers</Link></article>)}</div>
      <section className="mt-10 rounded-xl bg-slate-50 p-6"><h2 className="text-xl font-bold text-slate-900">Meal plans</h2><p className="mt-2 leading-relaxed text-slate-700">EP, CP, MAP and AP are listed as available options. The room-wise meal-plan rates provided earlier conflict with the selected base-rate rule, so this page does not assign unverified prices to individual plans. Contact the hotel to confirm each plan’s inclusions and price.</p><a className="mt-4 inline-block rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white" href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`}>Call to confirm rates</a> <Link className="ml-3 inline-block font-semibold text-amber-800 underline" href="/dining">Dining information</Link></section>
    </main>
  </>;
}
