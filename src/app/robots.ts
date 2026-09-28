import type { MetadataRoute } from "next";
import { SITE_INFO } from "@/data/site";

export const dynamic = "force-static";

export function generateStaticParams() {
  return [{ __metadata_id__: "robots.txt" }];
}

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/", "/private/"],
    },
    sitemap: `${SITE_INFO.url}/sitemap.xml`,
    host: SITE_INFO.url,
  };
}
