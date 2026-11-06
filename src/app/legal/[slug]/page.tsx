import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { LEGAL_PAGES, getLegalPage } from "@/data/legal";
import { SITE_INFO } from "@/data/site";
type Props = { params: { slug: string } };
export function generateStaticParams() { return LEGAL_PAGES.map((page) => ({ slug: page.slug })); }
export function generateMetadata({ params }: Props): Metadata {
  const page = getLegalPage(params.slug);
  if (!page) return { title: `Page Not Found | ${SITE_INFO.name}` };
  return { title: `${page.title} | ${SITE_INFO.name}`, description: `${page.title} for Y Hotels Signature in Jharsuguda.`, alternates: { canonical: `/legal/${page.slug}` } };
}
export default function LegalPage({ params }: Props) {
  const page = getLegalPage(params.slug);
  if (!page) notFound();
  return <>
    <JsonLd schema={generateBreadcrumbSchema([{ name: "Home", url: SITE_INFO.url }, { name: page.title, url: `${SITE_INFO.url}/legal/${page.slug}` }])}/>
    <main className="mx-auto max-w-4xl px-6 py-32"><Breadcrumb items={[{ label: "Home", href: "/" }, { label: page.title, href: `/legal/${page.slug}` }]}/><h1 className="mt-6 text-4xl font-bold">{page.title}</h1><p className="mt-2 text-sm text-gray-500">Last updated: {page.lastUpdated}</p><article className="prose prose-lg mt-8 max-w-none" dangerouslySetInnerHTML={{ __html: page.content }}/></main>
  </>;
}
