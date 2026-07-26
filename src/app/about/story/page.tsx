import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { ABOUT_STORY, ABOUT_MILESTONES } from "@/data/about";

export const metadata: Metadata = {
  title: "Our Story | Velora Stays",
  description: "Learn the story behind Velora Stays, from our founding in 2020 to becoming one of Lonavala's top-rated luxury villas.",
  alternates: { canonical: "/about/story" },
  openGraph: {
    title: "Our Story | Velora Stays",
    description: "Learn the story behind Velora Stays, from our founding in 2020 to becoming one of Lonavala's top-rated luxury villas.",
  },
};

export default function StoryPage() {
  return (
    <>
      <JsonLd schema={generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about" }, { name: "Our Story", url: "/about/story" }])} />
      <section className="relative bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }, { label: "Our Story", href: "/about/story" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">{ABOUT_STORY.title}</h1>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-80 rounded-xl overflow-hidden mb-10">
            <Image src={ABOUT_STORY.image} alt="Velora Stays" fill className="object-cover" />
          </div>
          <div className="prose prose-lg max-w-none">
            {ABOUT_STORY.description.split("\n\n").map((p, i) => <p key={i}>{p}</p>)}
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mt-14 mb-8">Our Journey</h2>
          <div className="space-y-8">
            {ABOUT_MILESTONES.map((m) => (
              <div key={m.id} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-14 h-14 bg-amber-500 text-white rounded-full flex items-center justify-center font-bold text-sm">{m.year}</div>
                  <div className="w-0.5 flex-1 bg-amber-200 mt-2" />
                </div>
                <div className="pb-6">
                  <h3 className="text-lg font-bold text-gray-900">{m.title}</h3>
                  <p className="text-gray-600 mt-1">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/about" className="text-amber-600 font-semibold hover:underline">← Back to About</Link>
          </div>
        </div>
      </section>
    </>
  );
}
