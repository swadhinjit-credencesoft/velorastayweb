import Link from "next/link";

export default function PropertyInfoPage({ title, description }: { title: string; description: string }) {
  return <main className="mx-auto max-w-4xl px-6 py-32 text-center">
    <p className="text-sm font-semibold uppercase tracking-widest text-amber-700">Y Hotels Signature · Jharsuguda</p>
    <h1 className="mt-3 text-4xl font-bold text-slate-900">{title}</h1>
    <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600">{description}</p>
    <div className="mt-8 flex justify-center gap-4"><Link href="/rooms" className="rounded bg-slate-900 px-6 py-3 text-white">View rooms</Link><Link href="/contact" className="rounded border px-6 py-3">Contact the hotel</Link></div>
  </main>;
}
