import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { LEGAL_PAGES, getLegalPage } from "@/data/legal";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return LEGAL_PAGES.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const page = getLegalPage(params.slug);
  if (!page) return { title: "Page Not Found" };
  return { title: `${page.title} | Velora Stays`, description: `Read our ${page.title.toLowerCase()} for Velora Stays villa in Lonavala.` };
}

export default function LegalPage({ params }: Props) {
  const page = getLegalPage(params.slug);
  if (!page) notFound();

  return (
    <>
      <JsonLd schema={generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: page.title, url: `/legal/${page.slug}` }])} />

      <section className="relative bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: page.title, href: `/legal/${page.slug}` }]} />
          <h1 className="text-4xl font-bold text-white mt-4">{page.title}</h1>
          <p className="mt-2 text-gray-300">Last Updated: {page.lastUpdated}</p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600" dangerouslySetInnerHTML={{ __html: page.content }} />
        </div>
      </section>
    </>
  );
}
