import type { MetadataRoute } from "next";
import { SITE_INFO } from "@/data/site";
import { VILLAS } from "@/data/villas";
import { FACILITIES } from "@/data/facilities";
import { NEARBY_ATTRACTIONS } from "@/data/nearby";
import { TOUR_PACKAGES } from "@/data/tours";
import { BLOG_POSTS } from "@/data/blog";
import { LEGAL_PAGES } from "@/data/legal";

const BASE_URL = SITE_INFO.url;
const NOW = new Date();

type ChangeFrequency =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

const staticPages: {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
}[] = [
  { path: "", priority: 1.0, changeFrequency: "daily" },
  { path: "/villas", priority: 0.9, changeFrequency: "weekly" },
  { path: "/facilities", priority: 0.8, changeFrequency: "weekly" },
  { path: "/nearby", priority: 0.8, changeFrequency: "weekly" },
  { path: "/gallery", priority: 0.6, changeFrequency: "weekly" },
  { path: "/tours", priority: 0.8, changeFrequency: "weekly" },
  { path: "/blog", priority: 0.8, changeFrequency: "weekly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about/story", priority: 0.5, changeFrequency: "monthly" },
  { path: "/about/team", priority: 0.5, changeFrequency: "monthly" },
  { path: "/about/mission", priority: 0.4, changeFrequency: "yearly" },
  { path: "/about/vision", priority: 0.4, changeFrequency: "yearly" },
  { path: "/about/values", priority: 0.4, changeFrequency: "yearly" },
  { path: "/about/awards", priority: 0.4, changeFrequency: "yearly" },
  { path: "/about/careers", priority: 0.4, changeFrequency: "monthly" },
  { path: "/about/sustainability", priority: 0.4, changeFrequency: "yearly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },
  { path: "/reviews", priority: 0.6, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" },
  { path: "/explore", priority: 0.6, changeFrequency: "monthly" },
  { path: "/explore/experiences", priority: 0.5, changeFrequency: "monthly" },
  {
    path: "/explore/nearby-attractions",
    priority: 0.5,
    changeFrequency: "monthly",
  },
  { path: "/explore/tour-packages", priority: 0.5, changeFrequency: "monthly" },
  { path: "/explore/gallery", priority: 0.4, changeFrequency: "monthly" },
  { path: "/explore/virtual-tour", priority: 0.4, changeFrequency: "yearly" },
];

function entry(
  path: string,
  priority: number,
  changeFrequency: ChangeFrequency,
  lastModified?: Date
): MetadataRoute.Sitemap[number] {
  const url = `${BASE_URL}${path}`;
  return {
    url,
    lastModified: lastModified ?? NOW,
    changeFrequency,
    priority,
    alternates: { languages: { en: url } },
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPages.map((page) =>
    entry(page.path, page.priority, page.changeFrequency)
  );

  const villaEntries = VILLAS.map((villa) =>
    entry(`/villas/${villa.slug}`, 0.9, "weekly")
  );

  const facilityEntries = FACILITIES.map((facility) =>
    entry(`/facilities/${facility.slug}`, 0.7, "yearly")
  );

  const nearbyEntries = NEARBY_ATTRACTIONS.map((attraction) =>
    entry(`/nearby/${attraction.slug}`, 0.7, "yearly")
  );

  const tourEntries = TOUR_PACKAGES.map((tour) =>
    entry(`/tours/${tour.slug}`, 0.8, "monthly")
  );

  const blogEntries = BLOG_POSTS.map((post) =>
    entry(
      `/blog/${post.slug}`,
      0.7,
      "monthly",
      new Date(post.publishedAt)
    )
  );

  const legalEntries = LEGAL_PAGES.map((page) =>
    entry(`/legal/${page.slug}`, 0.3, "yearly")
  );

  return [
    ...staticEntries,
    ...villaEntries,
    ...facilityEntries,
    ...nearbyEntries,
    ...tourEntries,
    ...blogEntries,
    ...legalEntries,
  ];
}
