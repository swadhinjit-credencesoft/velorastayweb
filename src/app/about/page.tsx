import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { SITE_INFO } from "@/data/site";
import { ABOUT_STORY, ABOUT_MISSION, ABOUT_VISION } from "@/data/about";
import { generateBreadcrumbSchema, generateOrganizationSchema } from "@/utils/schema";
import { STOCK_IMAGES } from "@/data/images";

export const metadata: Metadata = {
  title: "About Y Hotels Signature | Jharsuguda",
  description: "Learn about Y Hotels Signature, its room categories and location in Jharsuguda, Odisha.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return <>
    <JsonLd schema={generateOrganizationSchema()}/>
    <JsonLd schema={generateBreadcrumbSchema([{ name: "About", url: `${SITE_INFO.url}/about` }])}/>
    <section className="relative py-20 pt-32"><div className="absolute inset-0"><Image src={STOCK_IMAGES.lobby} alt="Representative hotel lobby stock photo, not Y Hotels Signature" fill className="object-cover" sizes="100vw"/><div className="absolute inset-0 bg-slate-950/65"/></div><div className="relative mx-auto max-w-7xl px-4 text-center"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: "About", href: "/about" }]}/><p className="mt-4 text-sm uppercase tracking-wide text-amber-300">About us</p><h1 className="mt-2 text-4xl font-bold text-white">{ABOUT_STORY.title}</h1><p className="mx-auto mt-4 max-w-2xl text-lg text-gray-200">A 34-room hotel in Jharsuguda, Odisha.</p><p className="mt-3 text-xs text-gray-300">Representative stock image; not a property photo.</p></div></section>
    <section className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-4 py-16 md:grid-cols-2"><div>{ABOUT_STORY.description.split("\n\n").map((paragraph, index) => <p key={index} className="mb-4 leading-relaxed text-gray-600">{paragraph}</p>)}<p className="text-gray-600">Owner: {SITE_INFO.ownerName}</p><p className="mt-2 text-gray-600">GSTIN: {SITE_INFO.gstNumber}</p></div><div><div className="relative aspect-[4/3] overflow-hidden rounded-xl"><Image src={ABOUT_STORY.image} alt="Representative hotel lobby stock image, not Y Hotels Signature" fill className="object-cover"/></div><p className="mt-2 text-xs text-gray-500">Representative stock photo; actual property image not provided.</p></div></section>
    <section className="bg-gray-50 py-16"><div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-2"><div><h2 className="mb-4 text-2xl font-bold">{ABOUT_MISSION.title}</h2><p className="text-gray-600">{ABOUT_MISSION.description}</p></div><div><h2 className="mb-4 text-2xl font-bold">{ABOUT_VISION.title}</h2><p className="text-gray-600">{ABOUT_VISION.description}</p></div></div></section>
    <section className="bg-amber-600 py-12 text-center text-white"><h2 className="text-3xl font-bold">Plan your stay</h2><p className="my-4">Contact our team to check availability and rates.</p><Link href="/contact" className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-amber-700">Contact the Hotel</Link></section>
  </>;
}
