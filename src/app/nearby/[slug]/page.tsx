import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { NEARBY_ATTRACTIONS, getAttractionBySlug } from "@/data/nearby";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return NEARBY_ATTRACTIONS.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const attraction = getAttractionBySlug(params.slug);
  if (!attraction) return { title: "Attraction Not Found" };
  return {
    title: `${attraction.name} | Nearby Attractions`,
    description: attraction.description,
    openGraph: {
      title: `${attraction.name} | Vellora Stays`,
      description: attraction.description,
      images: [{ url: attraction.image, width: 1200, height: 630, alt: attraction.name }],
    },
  };
}

export default function AttractionDetailPage({ params }: Props) {
  const attraction = getAttractionBySlug(params.slug);
  if (!attraction) notFound();

  const related = NEARBY_ATTRACTIONS.filter(
    (a) => a.category === attraction.category && a.slug !== attraction.slug
  ).slice(0, 3);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Nearby", href: "/nearby" },
    { label: attraction.name, href: `/nearby/${attraction.slug}` },
  ];

  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Nearby", url: "/nearby" },
          { name: attraction.name, url: `/nearby/${attraction.slug}` },
        ])}
      />

      <section className="relative h-[45vh] min-h-[350px]">
        <Image src={attraction.image} alt={attraction.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-7xl mx-auto">
            <Breadcrumb items={breadcrumbs} />
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">{attraction.name}</h1>
            <div className="flex items-center gap-4 mt-2 text-gray-300">
              <span>{attraction.distance}</span>
              <span>•</span>
              <span>{attraction.travelTime}</span>
              <span>•</span>
              <span className="bg-amber-500/80 text-white text-xs px-3 py-1 rounded-full">
                {attraction.category}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed">{attraction.description}</p>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Highlights</h3>
              <ul className="space-y-2">
                {attraction.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-gray-700 text-sm">
                    <span className="text-amber-500">★</span> {h}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-amber-50 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-3">Visitor Tips</h3>
              <p className="text-gray-700 text-sm">{attraction.tips}</p>
            </div>
          </div>

          {attraction.mapUrl && (
            <div className="mt-8 text-center">
              <a
                href={attraction.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-block"
              >
                View on Google Maps
              </a>
            </div>
          )}

          {related.length > 0 && (
            <div className="mt-14">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">More {attraction.category} Near Lonavala</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((a) => (
                  <Link
                    key={a.id}
                    href={`/nearby/${a.slug}`}
                    className="bg-gray-50 rounded-lg overflow-hidden hover:shadow transition-shadow"
                  >
                    <div className="relative h-36">
                      <Image src={a.image} alt={a.name} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-gray-900">{a.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">
                        {a.distance} • {a.travelTime}
                      </p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
