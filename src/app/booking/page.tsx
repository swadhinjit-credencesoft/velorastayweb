import type { Metadata } from "next";
import { SITE_INFO } from "@/data/site";

export const metadata: Metadata = { title: "Reservations | Y Hotels Signature", description: "Contact Y Hotels Signature in Jharsuguda to check room availability and rates." };

export default function BookingPage() {
  return <main className="mx-auto max-w-3xl px-6 py-32 text-center">
    <h1 className="text-4xl font-bold">Check availability</h1>
    <p className="mt-4 text-gray-600">Contact the hotel with your dates, guest count, room category and preferred meal plan. The team will confirm availability and the applicable rate.</p>
    <div className="mt-8 flex flex-wrap justify-center gap-4"><a className="rounded bg-slate-900 px-6 py-3 text-white" href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`}>Call {SITE_INFO.phone}</a><a className="rounded border px-6 py-3" href={`tel:${SITE_INFO.listingPhone.replace(/\s+/g, "")}`}>Call listing line</a><a className="rounded border px-6 py-3" href={`mailto:${SITE_INFO.email}`}>Email reservations</a></div>
  </main>;
}
