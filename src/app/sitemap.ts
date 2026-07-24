import type { MetadataRoute } from "next";
import { VILLAS } from "@/data/villas";
import { BLOG_POSTS } from "@/data/blog";
import { LEGAL_PAGES } from "@/data/legal";

const BASE_URL = "https://velorastays.in";

const staticPages = [
  "",
  "/villas",
  "/facilities",
  "/nearby",
  "/gallery",
  "/about",
  "/about/story",
  "/about/team",
  "/about/mission",
  "/about/vision",
  "/about/values",
  "/about/awards",
  "/about/careers",
  "/about/sustainability",
  "/contact",
  "/search",
  "/reviews",
  "/faq",
  "/offers",
  "/events",
  "/blog",
  "/tours",
  "/explore",
  "/explore/experiences",
  "/explore/nearby-attractions",
  "/explore/tour-packages",
  "/explore/gallery",
  "/explore/virtual-tour",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1.0 : 0.8,
  }));

  const villaEntries: MetadataRoute.Sitemap = VILLAS.map((villa) => ({
    url: `${BASE_URL}/villas/${villa.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const blogEntries: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const legalEntries: MetadataRoute.Sitemap = LEGAL_PAGES.map((page) => ({
    url: `${BASE_URL}/legal/${page.slug}`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...staticEntries, ...villaEntries, ...blogEntries, ...legalEntries];
}
