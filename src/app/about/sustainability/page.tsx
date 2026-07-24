import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { SUSTAINABILITY } from "@/data/about";

export const metadata: Metadata = {
  title: "Sustainability | Velora Stays",
  description: "Learn about Velora Stays' sustainability commitment — energy conservation, water saving, waste management, and eco-friendly practices.",
};

export default function SustainabilityPage() {
  return (
    <>
      <JsonLd schema={generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about" }, { name: "Sustainability", url: "/about/sustainability" }])} />
      <section className="relative bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Sustainability", href: "/about/sustainability" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">{SUSTAINABILITY.title}</h1>
          <p className="mt-3 text-gray-300">Our commitment to responsible and sustainable hospitality.</p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {SUSTAINABILITY.description.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <div className="mt-10 text-center">
            <Link href="/about" className="text-amber-600 font-semibold hover:underline">← Back to About</Link>
          </div>
        </div>
      </section>
    </>
  );
}
