import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import Icon from "@/components/Icon/Icon";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import Dining from "@/components/sections/Dining/Dining";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { FACILITIES, FACILITIES_CONTENT } from "@/data/facilities";

export const metadata: Metadata = {
  title: "Facilities & Amenities | Bishnu Bhaban",
  description:
    "The facilities at Bishnu Bhaban, a budget hotel at the West Gate of the Jagannath Temple in Puri: air conditioning, 24-hour hot water, attached bathroom, free WiFi, daily housekeeping, and a front desk open from 7 AM to 11 PM.",
  keywords: [
    "hotel near Jagannath Temple",
    "budget hotel Puri amenities",
    "Puri hotel air conditioning",
    "hotel with 24 hour hot water Puri",
    "Puri hotel free WiFi",
  ],
  alternates: { canonical: "/facilities" },
  openGraph: {
    title: "Facilities & Amenities | Bishnu Bhaban",
    description: FACILITIES_CONTENT.description,
    url: "https://bishnubhaban.com/facilities",
  },
};

const categoryLabels: Record<string, string> = {
  location: "Location",
  outdoor: "Outdoor & Pool",
  entertainment: "Entertainment",
  kitchen: "Dining & Kitchen",
  comfort: "Comfort",
  service: "Service",
  bathroom: "Bathroom",
  basic: "Basic Amenities",
  safety: "Safety & Security",
  services: "Services",
  transport: "Transport",
  family: "Family",
};

export default function FacilitiesPage() {
  const grouped = FACILITIES.reduce<Record<string, typeof FACILITIES>>((acc, facility) => {
    if (!acc[facility.category]) acc[facility.category] = [];
    acc[facility.category].push(facility);
    return acc;
  }, {});

  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Facilities", url: "/facilities" },
        ])}
      />

      <section className="relative py-20 pt-32">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image src="https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=1600" alt="" fill className="object-cover" sizes="100vw" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/60 to-[#16213e]/50" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Facilities", href: "/facilities" }]} />
          <p className="text-amber-400 font-medium tracking-wide uppercase text-sm mt-4">
            {FACILITIES_CONTENT.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">{FACILITIES_CONTENT.heading}</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">{FACILITIES_CONTENT.description}</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
          {Object.entries(grouped).map(([category, items]) => (
            <div key={category}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                {categoryLabels[category] || category}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {items.map((facility) => (
                  <Link
                    key={facility.id}
                    href={`/facilities/${facility.slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={
                          facility.image ||
                          "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=800"
                        }
                        alt={facility.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-sm font-medium">View Details →</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon icon={facility.icon} width={20} height={20} className="text-amber-500" />
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                          {facility.name}
                        </h3>
                      </div>
                      <p className="text-gray-600 text-sm line-clamp-2 mb-3">{facility.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {facility.features.map((f) => (
                          <span key={f} className="text-xs bg-amber-50 text-amber-700 px-2 py-1 rounded-full">
                            {f}
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

      <Dining />
    </>
  );
}
