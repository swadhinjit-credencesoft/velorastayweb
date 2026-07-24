import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { ABOUT_VALUES } from "@/data/about";

export const metadata: Metadata = {
  title: "Our Values | Velora Stays",
  description: "The core values that guide every aspect of hospitality at Velora Stays — cleanliness, guest-centricity, and continuous improvement.",
};

export default function ValuesPage() {
  return (
    <>
      <JsonLd schema={generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about" }, { name: "Values", url: "/about/values" }])} />
      <section className="relative bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Values", href: "/about/values" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">Our Values</h1>
          <p className="mt-3 text-gray-300">The principles that define who we are.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {ABOUT_VALUES.map((v) => (
            <div key={v.id} className="bg-gray-50 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900">{v.title}</h2>
              <p className="mt-3 text-gray-600 leading-relaxed">{v.description}</p>
            </div>
          ))}
          <div className="text-center">
            <Link href="/about" className="text-amber-600 font-semibold hover:underline">← Back to About</Link>
          </div>
        </div>
      </section>
    </>
  );
}
