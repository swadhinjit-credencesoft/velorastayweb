import Image from "next/image";
import Link from "next/link";
import { HOTEL_ROOMS } from "@/data/villas";
import { SITE_INFO } from "@/data/site";
import { STOCK_IMAGES } from "@/data/images";

export default function PropertyInfoPage({ title, description }: { title: string; description: string }) {
  return <main>
    <section className="relative min-h-[380px] overflow-hidden px-6 pb-16 pt-32 text-white">
      <Image src={STOCK_IMAGES.lobby} alt="Representative hotel lobby stock photo, not a photo of Y Hotels Signature" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-slate-950/70" />
      <div className="relative mx-auto max-w-5xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">Y Hotels Signature | Jharsuguda</p>
        <h1 className="mt-3 text-4xl font-bold">{title}</h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-200">{description}</p>
        <p className="mt-4 text-xs text-gray-300">Representative stock image; actual property photography is not yet available.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4"><Link href="/rooms" className="rounded bg-amber-500 px-6 py-3 font-semibold text-slate-950">View rooms</Link><Link href="/contact" className="rounded border border-white/70 px-6 py-3">Contact the hotel</Link></div>
      </div>
    </section>
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-center text-2xl font-bold text-slate-900">Room categories and starting rates</h2>
      <div className="mt-6 grid gap-5 md:grid-cols-3">
        {HOTEL_ROOMS.map((room) => <article key={room.id} className="rounded-xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">{room.tag}</p><h3 className="mt-1 text-xl font-bold">{room.name}</h3>
          <p className="mt-3 text-slate-600">From {room.currency}{room.price.toLocaleString("en-IN")} per night for single occupancy.</p>
          <p className="mt-1 text-sm text-slate-600">Up to {room.maxOccupancy} guests | {room.floor}</p>
          <details className="mt-3 text-sm text-slate-600"><summary className="cursor-pointer font-medium">Room numbers</summary><p className="mt-2">{room.roomNumbers?.join(", ")}</p></details>
          <Link className="mt-4 inline-block font-semibold text-amber-700 hover:underline" href={`/rooms/${room.slug}`}>Room details</Link>
        </article>)}
      </div>
      <div className="mt-8 grid gap-4 rounded-xl bg-slate-50 p-6 text-center sm:grid-cols-4">
        <p><span className="block text-sm text-slate-500">Check-in</span><strong>{SITE_INFO.checkIn}</strong></p>
        <p><span className="block text-sm text-slate-500">Check-out</span><strong>{SITE_INFO.checkOut}</strong></p>
        <p><span className="block text-sm text-slate-500">Double occupancy</span><strong>Add INR 500 to single rate</strong></p>
        <p><span className="block text-sm text-slate-500">Additional person</span><strong>INR {SITE_INFO.extraPersonCharge}</strong></p>
      </div>
      <p className="mt-4 text-center text-sm text-slate-500">EP, CP, MAP and AP meal plans are available. Confirm meal plan pricing, dates and availability directly with the hotel.</p>
      <div className="mt-10 rounded-xl border p-6 text-center">
        <h2 className="text-xl font-bold text-slate-900">Contact Y Hotels Signature</h2>
        <p className="mt-2 text-slate-600">{SITE_INFO.address.full}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm">
          <a className="font-semibold text-amber-700" href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`}>Official: {SITE_INFO.phone}</a>
          <a className="font-semibold text-amber-700" href={`tel:${SITE_INFO.listingPhone.replace(/\s+/g, "")}`}>Listing: {SITE_INFO.listingPhone}</a>
          <a className="font-semibold text-amber-700" href={`mailto:${SITE_INFO.email}`}>{SITE_INFO.email}</a>
        </div>
      </div>
    </section>
  </main>;
}
