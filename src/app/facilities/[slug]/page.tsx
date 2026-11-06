import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import { FACILITIES, getFacilityBySlug } from "@/data/facilities";
import { SITE_INFO } from "@/data/site";

type Props = { params: { slug: string } };
export const dynamicParams = false;
export function generateStaticParams() { return FACILITIES.map((facility) => ({ slug: facility.slug })); }
export function generateMetadata({ params }: Props): Metadata {
  const facility = getFacilityBySlug(params.slug);
  return facility ? { title: `${facility.name} | Y Hotels Signature`, description: facility.description, alternates: { canonical: `/facilities/${facility.slug}` } } : { title: `Not found | ${SITE_INFO.name}` };
}

export default function FacilityDetailPage({ params }: Props) {
  const facility = getFacilityBySlug(params.slug);
  if (!facility) notFound();
  return <main className="mx-auto max-w-4xl px-4 py-32">
    <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Facilities", href: "/facilities" }, { label: facility.name, href: `/facilities/${facility.slug}` }]} />
    <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-amber-700">Y Hotels Signature | Jharsuguda</p>
    <h1 className="mt-2 text-4xl font-bold text-slate-900">{facility.name}</h1>
    <p className="mt-4 text-lg leading-relaxed text-slate-600">{facility.description}</p>
    <ul className="mt-8 grid gap-3 sm:grid-cols-2">{facility.features.map((feature) => <li key={feature} className="rounded-lg bg-slate-50 p-4 text-slate-700">{feature}</li>)}</ul>
    <p className="mt-8 text-sm text-slate-500">Confirm current availability and any additional details with the hotel.</p>
    <div className="mt-6 flex flex-wrap gap-3"><a className="rounded-lg bg-slate-950 px-5 py-3 font-semibold text-white" href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`}>Call {SITE_INFO.phone}</a><Link className="rounded-lg border px-5 py-3" href="/facilities">All facilities</Link></div>
  </main>;
}
