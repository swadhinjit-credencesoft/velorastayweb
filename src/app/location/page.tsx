import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { NEARBY_ATTRACTIONS, NEARBY_CONTENT } from "@/data/nearby";
import { SITE_INFO, GOOGLE_MAPS_URL } from "@/data/site";

export const metadata: Metadata = {
  title: "Location & Nearby Attractions | Hotel Yogiraj, Shirdi",
  description:
    "Located at Pimpalwadi Rd, near Sai Baba Temple, Shirdi, Maharashtra. Explore nearby attractions: Sai Baba Temple, Dwarkamai, Chavadi, Shirdi Bus Station and more.",
  keywords: [
    "hotel in Shirdi",
    "hotel near Sai Baba Temple",
    "hotel near Shirdi bus stand",
    "hotel near Dwarkamai",
    "hotel near Sai Teerth",
  ],
  alternates: { canonical: "/location" },
  openGraph: {
    title: "Location & Nearby Attractions | Hotel Yogiraj, Shirdi",
    description: NEARBY_CONTENT.description,
  },
};

export default function LocationPage() {
  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "Location", url: `${SITE_INFO.url}/location` },
        ])}
      />

      <section className="relative -mt-[72px] md:-mt-[120px] pt-28 md:pt-36 pb-16 md:pb-20">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/yogirajhero1.png)" }}
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

          <div className="mt-8 bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <span className="inline-block bg-amber-500 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                Special Discount For Hotel Guests
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                Need Travel & Transport Assistance in Shirdi?
              </h3>
              <p className="text-gray-700 text-sm md:text-base mt-1 max-w-2xl">
                Book direct airport pickup/drop (SAG), Shirdi railway station transfers, or day trips to Shani Shingnapur, Trimbakeshwar & Nashik at exclusive discounted rates for our hotel guests.
              </p>
              <p className="text-gray-900 text-sm font-semibold mt-2">
                Travel Manager: <span className="text-amber-700">Mr. Sachin</span> • Phone: <span className="text-amber-700">+91 76767 73535</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <a
                href="tel:+917676773535"
                className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors shadow-sm"
              >
                Call Mr. Sachin
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=917676773535&text=Hello%20Mr.%20Sachin%2C%20I%20am%20staying%20at%20Hotel%20Yogiraj%20and%20enquiring%20about%20transport%20services%20with%20special%20discount."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-5 py-3 rounded-xl transition-colors shadow-sm"
              >
                WhatsApp Desk
              </a>
            </div>
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
                    <span>•</span>
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
                    View on Map →
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
