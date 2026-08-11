import type { Metadata } from "next";
import { getLocalSeoPage } from "@/data/seoPages";
import LocalSeoPageView from "@/components/seo/LocalSeoPageView/LocalSeoPageView";

const page = getLocalSeoPage("family-hotel-paharganj")!;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
  alternates: { canonical: `/${page.slug}` },
  openGraph: {
    title: page.metaTitle,
    description: page.metaDescription,
  },
};

export default function SeoLandingPage() {
  return <LocalSeoPageView page={page} />;
}
