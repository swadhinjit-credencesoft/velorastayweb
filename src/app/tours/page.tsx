import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { TOUR_PACKAGES, TOURS_CONTENT } from "@/data/tours";

export const metadata: Metadata = {
  title: "Lonavala Tour Packages | Velora Stays",
  description:
    "Explore Lonavala with curated tour packages from Velora Stays. City tours, heritage walks, food trails, temple tours, photography tours, and more.",
  keywords: [
    "Lonavala tour packages",
    "Lonavala sightseeing",
    "city tour Lonavala",
    "heritage walk Lonavala",
    "food trail Lonavala",
  ],
  openGraph: {
    title: "Lonavala Tour Packages | Velora Stays",
    description: TOURS_CONTENT.description,
  },
};

export default function ToursPage() {
  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Tours", url: "/tours" },
        ])}
      />

      <section className="relative bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Tours", href: "/tours" }]} />
          <p className="text-amber-400 font-medium tracking-wide uppercase text-sm mt-4">
            {TOURS_CONTENT.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">{TOURS_CONTENT.heading}</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">{TOURS_CONTENT.description}</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOUR_PACKAGES.map((tour) => (
              <Link
                key={tour.id}
                href={`/tours/${tour.slug}`}
                className="group bg-white rounded-xl shadow hover:shadow-xl transition-shadow overflow-hidden"
              >
                <div className="relative h-52">
                  <Image
                    src={tour.image}
                    alt={tour.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {tour.duration}
                  </div>
                  {tour.originalPrice && (
                    <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                      Save {tour.currency}{tour.originalPrice - tour.price}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-amber-600 transition-colors">
                    {tour.name}
                  </h3>
                  <p className="text-amber-600 text-sm mt-1">{tour.tagline}</p>
                  <p className="mt-2 text-gray-600 text-sm line-clamp-2">{tour.description}</p>
                  <div className="flex items-center justify-between mt-4">
                    <div>
                      <span className="text-2xl font-bold text-gray-900">
                        {tour.currency}{tour.price}
                      </span>
                      {tour.originalPrice && (
                        <span className="ml-2 text-sm text-gray-400 line-through">
                          {tour.currency}{tour.originalPrice}
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">{tour.groupSize} guests</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
