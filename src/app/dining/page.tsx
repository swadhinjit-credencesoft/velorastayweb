import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero/PageHero";
import { DINING_CONTENT, DINING_NOTICE, MEAL_PLAN_GUIDE } from "@/data/dining";
import { SITE_INFO } from "@/data/site";
import { STOCK_IMAGES } from "@/data/images";

export const metadata: Metadata = {
  title: "Dining at Y Hotels Signature | Jharsuguda",
  description: "Explore EP, CP, MAP and AP meal-plan options at Y Hotels Signature. Contact the hotel for the current menu and meal prices.",
  alternates: { canonical: "/dining" },
};

const foodPhotos = [
  { src: STOCK_IMAGES.indianFood, alt: "Representative Indian meal stock photo" },
  { src: STOCK_IMAGES.freshFood, alt: "Representative fresh food stock photo" },
  { src: STOCK_IMAGES.diningTable, alt: "Representative restaurant table stock photo" },
];

export default function DiningPage() {
  return <>
    <PageHero eyebrow="Dining at Y Hotels Signature" heading={DINING_CONTENT.title} description={DINING_CONTENT.description} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dining", href: "/dining" }]} bgImage={DINING_CONTENT.image} />
    <main>
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div><p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">For your stay</p><h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Meal plans, made clear</h2><p className="mt-4 leading-7 text-slate-600">EP, CP, MAP and AP options are listed by the hotel. Meal inclusions and prices can vary by booking, so confirm the exact plan before you reserve.</p><Link href="/restaurant" className="mt-6 inline-flex items-center rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white transition hover:bg-amber-700">View restaurant information</Link></div>
          <div className="relative aspect-[5/4] overflow-hidden rounded-2xl shadow-xl"><Image src={STOCK_IMAGES.diningTable} alt="Representative restaurant dining room stock photo, not a Y Hotels Signature restaurant photo" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" /><span className="absolute bottom-4 left-4 rounded-full bg-slate-950/75 px-4 py-2 text-xs font-medium text-white">Illustrative Unsplash photo</span></div>
        </div>
      </section>
      <section className="bg-[#f7f5f0] px-4 py-14 md:py-16"><div className="mx-auto max-w-6xl"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">Meal-plan guide</p><h2 className="mt-3 text-3xl font-bold text-slate-950">Choose the plan that suits you</h2><p className="mt-3 leading-7 text-slate-600">These are standard plan descriptions. The hotel’s exact meals, serving times and charges need confirmation.</p></div><div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{MEAL_PLAN_GUIDE.map((plan) => <article key={plan.code} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><p className="text-sm font-bold tracking-widest text-amber-700">{plan.code}</p><h3 className="mt-2 text-lg font-semibold text-slate-950">{plan.name}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{plan.detail}</p></article>)}</div><p className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-5 text-sm leading-6 text-amber-950">{DINING_NOTICE}</p></div></section>
      <section className="mx-auto max-w-6xl px-4 py-14 md:py-16"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-700">Food photography</p><h2 className="mt-3 text-3xl font-bold text-slate-950">A taste of dining inspiration</h2><p className="mt-2 text-sm text-slate-600">Stock photography for atmosphere only. It does not show confirmed hotel dishes.</p></div><Link href="/restaurant" className="font-semibold text-amber-800 underline">Ask about today’s menu</Link></div><div className="mt-7 grid gap-4 sm:grid-cols-3">{foodPhotos.map((photo) => <figure key={photo.src} className="relative aspect-[4/3] overflow-hidden rounded-2xl"><Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 hover:scale-105" /><figcaption className="absolute bottom-3 left-3 rounded-full bg-slate-950/75 px-3 py-1.5 text-xs text-white">Illustrative stock image</figcaption></figure>)}</div></section>
      <section className="bg-slate-950 px-4 py-12 text-white"><div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6"><div><p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-300">Questions about food?</p><h2 className="mt-2 text-2xl font-bold">Confirm menu and meal rates</h2><p className="mt-2 text-slate-300">Call the hotel before booking to check food service, menu availability and meal-plan pricing.</p></div><div className="flex flex-wrap gap-3"><a className="rounded-lg bg-amber-400 px-5 py-3 font-semibold text-slate-950" href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`}>Call {SITE_INFO.phone}</a><Link className="rounded-lg border border-white/40 px-5 py-3 font-semibold" href="/contact">Contact details</Link></div></div></section>
    </main>
  </>;
}
