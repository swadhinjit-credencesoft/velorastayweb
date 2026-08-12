import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { NEARBY_ATTRACTIONS, NEARBY_CONTENT } from "@/data/nearby";
import { SITE_INFO, GOOGLE_MAPS_URL } from "@/data/site";

export const metadata: Metadata = {
  title: "Location & Nearby Attractions | The Queen's Head â€“ Paharganj",
  description:
    "Located at 2282â€“2285, Rajguru Marg, Chuna Mandi, Paharganj, New Delhi. Explore nearby attractions: Ramakrishna Mission, Gurudwara Bangla Sahib, Jantar Mantar, Connaught Place and more.",
  keywords: [
    "hotel in Paharganj New Delhi",
    "hotel near New Delhi Railway Station",
    "hotel near Ramakrishna Mission",
    "hotel near Gurudwara Bangla Sahib",
  ],
  alternates: { canonical: "/location" },
  openGraph: {
    title: "Location & Nearby Attractions | The Queen's Head â€“ Paharganj",
    description: NEARBY_CONTENT.description,
  },
};

export default function LocationPage() {
  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Location", url: "/location" },
        ])}
      />

      <section className="relative py-20 pt-32">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/homehero2.png)" }}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Location", href: "/location" }]} />
          <p className="text-amber-400 font-medium tracking-wide uppercase text-sm mt-4">
            {NEARBY_CONTENT.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">{NEARBY_CONTENT.heading}</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">{NEARBY_CONTENT.description}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Around</h2>
          <p className="text-gray-600 mb-6">{SITE_INFO.address.full}</p>
          <div className="rounded-xl overflow-hidden shadow border border-gray-100">
            <iframe
              src={GOOGLE_MAPS_URL}
              className="w-full h-[420px]"
              title={`${SITE_INFO.name} location map`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Nearby Attractions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEARBY_ATTRACTIONS.map((attraction) => (
              <div
                key={attraction.id}
                className="group bg-white rounded-xl shadow hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div
                  className="relative h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${attraction.image})` }}
                />
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {attraction.name}
                  </h3>
                  <div className="flex items-center gap-3 mt-1 text-xs text-gray-500">
                    <span>{attraction.distance}</span>
                    <span>â€¢</span>
                    <span>{attraction.travelTime}</span>
                  </div>
                  <p className="mt-2 text-gray-600 text-sm line-clamp-2">
                    {attraction.description}
                  </p>
                  <a
                    href={attraction.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm font-semibold text-amber-600 hover:text-amber-700"
                  >
                    View on Map â†’
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
