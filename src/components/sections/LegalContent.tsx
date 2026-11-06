import { notFound } from "next/navigation";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { getLegalPage } from "@/data/legal";
import { SITE_INFO } from "@/data/site";

export default function LegalContent({ slug, path }: { slug: string; path: string }) {
  const page = getLegalPage(slug);
  if (!page) notFound();
  return <>
    <JsonLd schema={generateBreadcrumbSchema([{ name: "Home", url: SITE_INFO.url }, { name: page.title, url: `${SITE_INFO.url}${path}` }]} />
    <main className="mx-auto max-w-4xl px-6 py-32">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: page.title, href: path }]} />
      <h1 className="mt-6 text-4xl font-bold">{page.title}</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: {page.lastUpdated}</p>
      <article className="prose prose-lg mt-8 max-w-none" dangerouslySetInnerHTML={{ __html: page.content }} />
    </main>
  </>;
}
