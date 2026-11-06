import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { FAQ_CATEGORIES } from "@/data/faq";
import { SITE_INFO } from "@/data/site";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/utils/schema";
export const metadata: Metadata = { title: "FAQs | Y Hotels Signature", description: "Room categories, occupancy, rates, meal plans and check-in information for Y Hotels Signature." };
export default function FAQPage() {
  const items = FAQ_CATEGORIES.flatMap((category) => category.items);
  return <>
    <JsonLd schema={generateBreadcrumbSchema([{ name: "Home", url: SITE_INFO.url }, { name: "FAQs", url: `${SITE_INFO.url}/faq` }])}/>
    <JsonLd schema={generateFAQSchema(items)}/>
    <main className="mx-auto max-w-4xl px-6 py-32"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "FAQs", href: "/faq" }]}/><h1 className="mt-6 text-4xl font-bold">Frequently asked questions</h1><p className="mt-4 text-gray-600">Information about staying at Y Hotels Signature in Jharsuguda.</p>
      <div className="mt-10 space-y-8">{FAQ_CATEGORIES.map((category) => <section key={category.id}><h2 className="mb-4 text-2xl font-semibold">{category.name}</h2><div className="space-y-5">{category.items.map((item) => <article key={item.id}><h3 className="font-semibold">{item.question}</h3><p className="mt-2 text-gray-600">{item.answer}</p></article>)}</div></section>)}</div>
      <p className="mt-8 text-sm text-gray-500">For availability and final rates, contact the hotel at {SITE_INFO.phone} or {SITE_INFO.email}.</p>
    </main>
  </>;
}
