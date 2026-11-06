import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/sections/PageHero/PageHero";
import { EVENTS_CONTENT, EVENTS_IMAGE, GROUP_STAY_FACTS, REGIONAL_EVENTS } from "@/data/events";
import { SITE_INFO } from "@/data/site";

export const metadata: Metadata = {
  title: "Group Stays and Local Events | Y Hotels Signature",
  description: "Ask about group room bookings at Y Hotels Signature and explore annual Western Odisha celebrations.",
  alternates: { canonical: "/events" },
};

export default function EventsPage() {
  return <>
    <PageHero eyebrow={EVENTS_CONTENT.eyebrow} heading={EVENTS_CONTENT.heading} description={EVENTS_CONTENT.description} breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events", href: "/events" }]} bgImage={EVENTS_IMAGE} />
    <main className="mx-auto max-w-6xl px-4 py-12">
      <section><h2 className="text-2xl font-bold text-slate-900">Group-stay information</h2><div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{GROUP_STAY_FACTS.map((fact) => <article key={fact.label} className="rounded-xl border bg-white p-5"><p className="text-sm text-slate-500">{fact.label}</p><p className="mt-1 font-semibold text-slate-900">{fact.value}</p></article>)}</div>
        <p className="mt-5 rounded-lg bg-slate-50 p-5 text-sm text-slate-600">Room blocks can be discussed directly with the hotel. No conference hall, banquet venue, catering package or event pricing has been confirmed for this property.</p>
        <div className="mt-5 flex flex-wrap gap-3"><a className="rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white" href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`}>Ask about group rooms</a><Link href="/rooms" className="rounded-lg border px-5 py-3">View categories</Link></div>
      </section>
      <section className="mt-14"><h2 className="text-2xl font-bold text-slate-900">Annual celebrations in the region</h2><p className="mt-2 text-sm text-slate-600">These are regional events, not events hosted by the hotel. Dates and programmes change each year; check local announcements before travel.</p>
        <div className="mt-5 grid gap-5 md:grid-cols-3">{REGIONAL_EVENTS.map((event) => <article key={event.id} className="rounded-xl border bg-white p-6"><p className="text-xs font-semibold uppercase tracking-wide text-amber-700">{event.area}</p><h3 className="mt-2 text-lg font-bold text-slate-900">{event.name}</h3><p className="mt-2 text-sm leading-relaxed text-slate-600">{event.description}</p></article>)}</div>
      </section>
    </main>
  </>;
}
