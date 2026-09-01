import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { RESTAURANT_CONTENT, RESTAURANT_HIGHLIGHTS, RESTAURANT_DETAILS } from "@/data/restaurant";
import { WHATSAPP_LINK } from "@/data/site";

export const metadata: Metadata = {
  title: "Restaurant | Dining at Hotel Yogiraj, Shirdi",
  description:
    "Dining at Hotel Yogiraj, Shirdi. Enjoy pure vegetarian meals at our in-house restaurant, with complimentary breakfast for guests and 24-hour room service.",
  alternates: { canonical: "/restaurant" },
  openGraph: {
    title: "Restaurant | Hotel Yogiraj, Shirdi",
    description: RESTAURANT_CONTENT.description,
  },
};

export default function RestaurantPage() {
  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Restaurant", url: "/restaurant" },
        ])}
      />

      <section className="relative py-20 pt-32">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/yogirajimg/AKS08641.avif)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/70 to-[#16213e]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Restaurant", href: "/restaurant" }]} />
          <p className="text-amber-400 font-medium tracking-wide uppercase text-sm mt-4">
            {RESTAURANT_CONTENT.eyebrow}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2">{RESTAURANT_CONTENT.heading}</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">{RESTAURANT_CONTENT.description}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="rounded-xl overflow-hidden shadow">
              <div
                className="h-72 bg-cover bg-center"
                style={{ backgroundImage: "url(/yogirajimg/3.avif)" }}
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">A Convenient Dining Option</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our in-house vegetarian restaurant offers a convenient dining option for
              hotel guests and pilgrims visiting Shirdi and the Sai Baba Temple.
            </p>
            <ul className="space-y-3 mb-6">
              {RESTAURANT_HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-center gap-3 text-gray-700">
                  <span className="w-5 h-5 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-bold">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="space-y-2 bg-gray-50 rounded-xl p-5">
              {RESTAURANT_DETAILS.map((detail) => (
                <div key={detail.label} className="flex justify-between gap-4 text-sm">
                  <span className="text-gray-500">{detail.label}</span>
                  <strong className="text-gray-900 text-right">{detail.value}</strong>
                </div>
              ))}
            </div>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
