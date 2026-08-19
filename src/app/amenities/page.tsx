import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import Icon from "@/components/Icon";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { FACILITIES, FACILITIES_CONTENT } from "@/data/facilities";

export const metadata: Metadata = {
  title: "Hotel Amenities | The Queen's Head – Paharganj",
  description:
    "Hotel amenities at The Queen's Head – Paharganj: free Wi-Fi, air conditioning, 24-hour front desk, on-site restaurant, family rooms, laundry and more in Paharganj, New Delhi.",
  keywords: [
    "hotel amenities Paharganj",
    "hotel facilities New Delhi",
    "free WiFi hotel Paharganj",
    "24 hour front desk hotel Delhi",
  ],
  alternates: { canonical: "/amenities" },
  openGraph: {
    title: "Hotel Amenities | The Queen's Head – Paharganj",
    description: FACILITIES_CONTENT.description,
    url: "https://shivharehotelsandtravel.com/amenities",
  },
};

export default function AmenitiesPage() {
  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Amenities", url: "/amenities" },
        ])}
      />

      <section className="relative py-20 pt-32">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/homehero1.png)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/70 to-[#16213e]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Amenities", href: "/amenities" }]} />
          <p className="text-amber-400 font-medium tracking-wide uppercase text-sm mt-4">
            {FACILITIES_CONTENT.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">{FACILITIES_CONTENT.heading}</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">{FACILITIES_CONTENT.description}</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES.map((facility) => (
              <div
                key={facility.id}
                className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300"
              >
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-lg bg-amber-50 flex items-center justify-center shrink-0">
                      <Icon icon={facility.icon} width={22} height={22} className="text-amber-500" />
                    </div>
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                      {facility.name}
                    </h2>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{facility.description}</p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {facility.features.map((f) => (
                      <span key={f} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
