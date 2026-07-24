import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { NEARBY_ATTRACTIONS, NEARBY_CONTENT, getAllCategories } from "@/data/nearby";

export const metadata: Metadata = {
  title: "Nearby Attractions in Lonavala | Vellora Stays",
  description:
    "Explore Lonavala's top attractions near Vellora Stays: Lion's Point, Bhushi Dam, Lonavala, temples, museums, shopping malls, and more.",
  keywords: [
    "Lonavala attractions",
    "things to do in Lonavala",
    "places to visit near Pawna Lake",
    "Lonavala sightseeing",
    "tourist spots Lonavala",
  ],
  openGraph: {
    title: "Nearby Attractions | Vellora Stays",
    description: NEARBY_CONTENT.description,
  },
};

export default function NearbyPage() {
  const categories = getAllCategories();
  const grouped = categories.reduce<Record<string, typeof NEARBY_ATTRACTIONS>>((acc, cat) => {
    acc[cat] = NEARBY_ATTRACTIONS.filter((a) => a.category === cat);
    return acc;
  }, {});

  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Nearby", url: "/nearby" },
        ])}
      />

      <section className="relative py-20 pt-32 overflow-hidden">
        <Image
          src="/Pawnalake.jpg"
          alt="Nearby Attractions"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Nearby", href: "/nearby" }]} />
          <p className="text-amber-400 font-medium tracking-wide uppercase text-sm mt-4">
            {NEARBY_CONTENT.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">{NEARBY_CONTENT.heading}</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">{NEARBY_CONTENT.description}</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {Object.entries(grouped).map(([category, attractions]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {attractions.map((attraction) => (
                  <Link
                    key={attraction.id}
                    href={`/nearby/${attraction.slug}`}
                    className="group bg-white rounded-xl shadow hover:shadow-xl transition-shadow overflow-hidden"
                  >
                    <div className="relative h-48">
                      <Image
                        src={attraction.image}
                        alt={attraction.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                        {attraction.name}
                      </h3>
                      <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                        <span>{attraction.distance}</span>
                        <span>•</span>
                        <span>{attraction.travelTime}</span>
                      </div>
                      <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                        {attraction.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {attraction.highlights.slice(0, 2).map((h) => (
                          <span key={h} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
