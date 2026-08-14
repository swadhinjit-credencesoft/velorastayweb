import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { VILLAS, getVillaBySlug } from "@/data/villas";
import GalleryGrid from "@/components/sections/Gallery/GalleryGrid";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return VILLAS.map((villa) => ({ slug: villa.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const villa = getVillaBySlug(params.slug);
  if (!villa) return { title: "Gallery Not Found" };
  return {
    title: `${villa.name} Gallery | Velora Stays`,
    description: `Photo gallery of ${villa.name} at Velora Stays. ${villa.tagline}.`,
    alternates: { canonical: `/gallery/${villa.slug}` },
    openGraph: {
      title: `${villa.name} Gallery | Velora Stays`,
      description: villa.tagline,
      url: `https://velorastays.in/gallery/${villa.slug}`,
      images: [{ url: villa.images[0]?.src || "/heroimg2.jpeg", alt: villa.name }],
    },
  };
}

export default function VillaGalleryPage({ params }: Props) {
  const villa = getVillaBySlug(params.slug);
  if (!villa) notFound();

  const otherVillas = VILLAS.filter((v) => v.slug !== villa.slug);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: villa.name, href: `/gallery/${villa.slug}` },
  ];

  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
          { name: villa.name, url: `/gallery/${villa.slug}` },
        ])}
      />

      <section className="relative py-20 pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src={villa.images[0]?.src || "/heroimg2.jpeg"}
            alt={villa.name}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 to-[#16213e]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={breadcrumbs} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">{villa.name}</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">{villa.tagline}</p>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <h2 className="text-2xl font-bold text-gray-900">{villa.name} Photos</h2>
            <Link
              href={`/villas/${villa.slug}`}
              className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-2.5 rounded-lg font-semibold transition-colors"
            >
              View Villa Details
            </Link>
          </div>

          {villa.images.length > 0 ? (
            <GalleryGrid
              images={villa.images.map((img) => ({
                id: img.id,
                src: img.src,
                alt: img.alt,
                caption: img.caption || img.alt,
              }))}
            />
          ) : (
            <p className="text-gray-600">No photos available for this villa yet.</p>
          )}
        </div>
      </section>

      {otherVillas.length > 0 && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Villa Galleries</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {otherVillas.map((v) => (
                <Link
                  key={v.id}
                  href={`/gallery/${v.slug}`}
                  className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="relative h-40 overflow-hidden">
                    <Image
                      src={v.images[0]?.src || "/heroimg2.jpeg"}
                      alt={v.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                      {v.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-2">{v.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
