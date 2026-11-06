import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import { GALLERY_IMAGES } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Room Gallery | Y Hotels Signature",
  description: "Browse representative stock imagery for the room categories at Y Hotels Signature in Jharsuguda.",
  alternates: { canonical: "/gallery" },
};

export default function GalleryPage() {
  return (
    <>
      <section className="bg-slate-950 px-4 pb-14 pt-32 text-white">
        <div className="mx-auto max-w-7xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Gallery", href: "/gallery" }]} />
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-amber-300">Y Hotels Signature | Jharsuguda</p>
          <h1 className="mt-2 text-4xl font-bold">Room inspiration</h1>
          <p className="mt-3 max-w-2xl text-gray-300">Browse the three room categories and compare occupancy and starting rates.</p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-10">
        <p className="mb-8 rounded-lg border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
          These are representative Unsplash stock photos for design inspiration, not photographs of Y Hotels Signature. Contact the hotel for actual room photos and current availability.
        </p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((image) => (
            <figure key={image.id} className="overflow-hidden rounded-xl bg-white shadow-sm">
              <div className="relative aspect-[4/3]">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <figcaption className="p-4">
                <p className="font-semibold text-slate-900">{image.caption}</p>
                <p className="mt-1 text-sm text-slate-500">{image.category} | Stock photo</p>
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link href="/rooms" className="inline-flex rounded-lg bg-slate-900 px-6 py-3 font-semibold text-white">Compare room categories</Link>
        </div>
      </section>
    </>
  );
}
