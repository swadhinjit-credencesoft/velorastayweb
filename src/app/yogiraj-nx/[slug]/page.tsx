import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocalSeoPageView from "@/components/seo/LocalSeoPageView/LocalSeoPageView";
import { LOCAL_SEO_PAGES } from "@/data/nx/seoPages";
import { SITE_INFO as NX_SITE } from "@/data/nx/site";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return LOCAL_SEO_PAGES.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = LOCAL_SEO_PAGES.find((p) => p.slug === params.slug);
  if (!page) return { title: "Page Not Found" };

  return {
    title: page.metaTitle,
    description: page.metaDescription,
    alternates: { canonical: `/yogiraj-nx/${page.slug}` },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://yogirajhotel.com/yogiraj-nx/${page.slug}`,
      images: [
        {
          url: page.image,
          width: 1200,
          height: 630,
          alt: page.h1,
        },
      ],
    },
  };
}

export default function NxLocalSeoPage({ params }: PageProps) {
  const page = LOCAL_SEO_PAGES.find((p) => p.slug === params.slug);
  if (!page) notFound();

  const whatsappUrl = `https://api.whatsapp.com/send?phone=919903033535&text=${encodeURIComponent(
    `Hello Hotel Yogiraj NX, Shirdi,\nI would like to enquire about ${page.h1}.`
  )}`;

  return (
    <LocalSeoPageView
      page={page}
      siteName={NX_SITE.name}
      sitePhone={NX_SITE.phone}
      whatsappLink={whatsappUrl}
      baseHref="/yogiraj-nx"
      roomsHref="/yogiraj-nx/rooms"
    />
  );
}
