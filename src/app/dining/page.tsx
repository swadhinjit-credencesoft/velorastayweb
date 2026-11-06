import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/sections/PageHero/PageHero";
import { DINING_CONTENT, DINING_NOTICE, MEAL_PLAN_GUIDE, WESTERN_ODISHA_FOOD_GUIDE } from "@/data/dining";
import { SITE_INFO } from "@/data/site";

export const metadata: Metadata = {
  title: "Dining and Local Food Guide | Y Hotels Signature",
  description: "Meal-plan information and a guide to traditional Western Odisha dishes for guests staying in Jharsuguda.",
  alternates: { canonical: "/dining" },
};

export default function DiningPage() {
  return <>
    <PageHero eyebrow="Dining information" heading={DINING_CONTENT.title} description={DINING_CONTENT.description} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Dining", href: "/dining" }]} bgImage={DINING_CONTENT.image} />
    <main className="mx-auto max-w-6xl px-4 py-12">
      <p className="mb-10 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">{DINING_NOTICE}</p>
      <section>
        <h2 className="text-2xl font-bold text-slate-900">Meal plans listed by the hotel</h2>
        <p className="mt-2 text-sm text-slate-600">These are common plan descriptions. Confirm the exact meal inclusions and applicable prices directly with the hotel.</p>
        <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {MEAL_PLAN_GUIDE.map((plan) => <article key={plan.code} className="rounded-xl border bg-white p-5 shadow-sm"><p className="text-sm font-bold text-amber-700">{plan.code}</p><h3 className="mt-1 font-semibold text-slate-900">{plan.name}</h3><p className="mt-2 text-sm text-slate-600">{plan.detail}</p></article>)}
        </div>
      </section>
      <section className="mt-12">
        <div className="grid items-center gap-8 md:grid-cols-[1fr_1.3fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl"><Image src={DINING_CONTENT.image} alt="Representative food stock photo; not a Y Hotels Signature dish" fill sizes="(max-width: 768px) 100vw, 40vw" className="object-cover" /><span className="absolute bottom-3 left-3 rounded bg-black/60 px-3 py-1 text-xs text-white">Representative stock image</span></div>
          <div><h2 className="text-2xl font-bold text-slate-900">Taste of Western Odisha</h2><p className="mt-2 text-slate-600">These regional dishes can help you explore the local food culture. Their availability at the hotel is not confirmed.</p></div>
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {WESTERN_ODISHA_FOOD_GUIDE.map((item) => <article key={item.name} className="rounded-xl border bg-white p-5"><p className="text-xs font-semibold uppercase tracking-wide text-amber-700">{item.category}</p><h3 className="mt-2 text-lg font-semibold text-slate-900">{item.name}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p></article>)}
        </div>
      </section>
      <section className="mt-12 rounded-xl bg-slate-950 p-7 text-center text-white">
        <h2 className="text-2xl font-bold">Ask about today's menu</h2><p className="mx-auto mt-2 max-w-2xl text-slate-300">Call or email the hotel to confirm food service, dish availability, dietary requirements and current prices.</p>
        <div className="mt-5 flex flex-wrap justify-center gap-3"><a className="rounded-lg bg-amber-400 px-5 py-3 font-semibold text-slate-950" href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`}>Call {SITE_INFO.phone}</a><Link className="rounded-lg border border-white/50 px-5 py-3" href="/contact">Contact details</Link></div>
      </section>
    </main>
  </>;
}
