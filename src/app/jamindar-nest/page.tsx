import type { Metadata } from "next";
import Link from "next/link";
import { SITE_INFO } from "@/data/site";

export const metadata: Metadata = {
  title: "Y Hotels Signature | Jharsuguda",
  description: "Y Hotels Signature room information and contact details in Jharsuguda, Odisha.",
  alternates: { canonical: "/" },
};

export default function LegacyPropertyPage() {
  return <main className="mx-auto max-w-4xl px-6 py-32 text-center">
    <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-amber-700">Y Hotels Signature</p>
    <h1 className="text-4xl font-bold">Now welcoming guests in Jharsuguda</h1>
    <p className="mx-auto mt-5 max-w-2xl text-gray-600">This website now features Y Hotels Signature at {SITE_INFO.address.full}.</p>
    <div className="mt-8 flex justify-center gap-4"><Link href="/rooms" className="rounded bg-slate-900 px-6 py-3 text-white">View Rooms</Link><a href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`} className="rounded border px-6 py-3">Call the Hotel</a></div>
  </main>;
}
