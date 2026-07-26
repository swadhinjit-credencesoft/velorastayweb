import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { ABOUT_VISION } from "@/data/about";

export const metadata: Metadata = {
  title: "Our Vision | Velora Stays",
  description: "Explore the vision driving Velora Stays — to become Lonavala's most trusted and beloved luxury villa brand.",
  alternates: { canonical: "/about/vision" },
  openGraph: {
    title: "Our Vision | Velora Stays",
    description: "Explore the vision driving Velora Stays — to become Lonavala's most trusted and beloved luxury villa brand.",
  },
};

export default function VisionPage() {
  return (
    <>
      <JsonLd schema={generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about" }, { name: "Vision", url: "/about/vision" }])} />
      <section className="relative bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Vision", href: "/about/vision" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">{ABOUT_VISION.title}</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-xl p-8 mb-10">
            <p className="text-xl text-gray-800 leading-relaxed">{ABOUT_VISION.description}</p>
          </div>
          <div className="text-center">
            <Link href="/about" className="text-amber-600 font-semibold hover:underline">← Back to About</Link>
          </div>
        </div>
      </section>
    </>
  );
}
