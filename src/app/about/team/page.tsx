import type { Metadata } from "next";
import Link from "next/link";
import { SITE_INFO } from "@/data/site";

export const metadata: Metadata = {
  title: "Hotel Contact | Y Hotels Signature",
  description: "Contact Y Hotels Signature in Jharsuguda for hotel and reservation enquiries.",
  alternates: { canonical: "/about/team" },
};

export default function TeamPage() {
  return <main className="mx-auto max-w-4xl px-6 py-32">
    <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">Y Hotels Signature</p>
    <h1 className="mt-3 text-4xl font-bold text-slate-950">Contact the hotel team</h1>
    <p className="mt-4 leading-relaxed text-slate-600">Owner: {SITE_INFO.ownerName}. Contact the hotel to ask about room availability, rates, meal plans and your reservation.</p>
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      <a className="rounded-xl border p-5" href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`}><span className="block text-sm text-slate-500">Official phone</span><strong className="mt-1 block">{SITE_INFO.phone}</strong></a>
      <a className="rounded-xl border p-5" href={`tel:${SITE_INFO.listingPhone.replace(/\s+/g, "")}`}><span className="block text-sm text-slate-500">Listing phone</span><strong className="mt-1 block">{SITE_INFO.listingPhone}</strong></a>
      <a className="rounded-xl border p-5 sm:col-span-2" href={`mailto:${SITE_INFO.email}`}><span className="block text-sm text-slate-500">Email</span><strong className="mt-1 block">{SITE_INFO.email}</strong></a>
    </div>
    <p className="mt-6 text-sm text-slate-600">{SITE_INFO.address.full}</p>
    <Link className="mt-6 inline-block font-semibold text-amber-800 underline" href="/contact">See map and contact details</Link>
  </main>;
}
