import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import Icon from "@/components/Icon/Icon";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { FACILITIES, FACILITIES_CONTENT } from "@/data/facilities";

export const metadata: Metadata = {
  title: "Facilities & Amenities | Velora Stays",
  description:
    "Explore world-class facilities at Velora Stays: private pool, BBQ, high-speed WiFi, fully equipped kitchen, power backup, and more amenities near Pawna Lake, Lonavala.",
  keywords: [
    "villa amenities Lonavala",
    "villa facilities Pawna Lake",
    "free WiFi villa Lonavala",
    "private pool villa Lonavala",
  ],
  alternates: { canonical: "/facilities" },
  openGraph: {
    title: "Facilities & Amenities | Velora Stays",
    description: FACILITIES_CONTENT.description,
    url: "https://velorastays.in/facilities",
  },
};

const categoryLabels: Record<string, string> = {
  outdoor: "Outdoor & Pool",
  entertainment: "Entertainment",
  kitchen: "Kitchen & Dining",
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
        <div className="absolute inset-0 z-0">
          <Image
            src="/fascilitise.jpeg"
            alt="Velora Stays facilities"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 to-[#16213e]/80" />
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
                        src={facility.image || "/schemaimage.jpeg"}
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
    </>
  );
}
