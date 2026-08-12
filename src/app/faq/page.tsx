import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/schema";
import { FAQ_CATEGORIES } from "@/data/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | The Queen's Head – Paharganj",
  description: "Find answers to common questions about booking, rooms, dining, facilities, payment, and policies at The Queen's Head – Paharganj, New Delhi.",
  alternates: { canonical: "/faq" },
  openGraph: { title: "FAQ | The Queen's Head – Paharganj", description: "Get answers to all your questions about staying at The Queen's Head – Paharganj." },
};

export default function FAQPage() {
  const allItems = FAQ_CATEGORIES.flatMap((c) => c.items.map((item) => ({ ...item, category: c.name })));

  return (
    <>
      <JsonLd schema={generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "FAQ", url: "/faq" }])} />
      <JsonLd schema={generateFAQSchema(allItems)} />

      <section className="relative py-20 pt-32">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url(/homehero2.png)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 to-[#16213e]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQ", href: "/faq" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">Frequently Asked Questions</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">Find quick answers to common questions about staying with us.</p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {FAQ_CATEGORIES.map((cat) => (
            <div key={cat.id}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{cat.name}</h2>
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <details key={item.id} className="bg-white rounded-xl shadow-sm group">
                    <summary className="px-6 py-4 cursor-pointer font-semibold text-gray-900 flex items-center justify-between hover:text-amber-600 transition-colors">
                      {item.question}
                      <span className="text-gray-400 group-open:rotate-180 transition-transform">▼</span>
                    </summary>
                    <div className="px-6 pb-4 text-gray-600">{item.answer}</div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
