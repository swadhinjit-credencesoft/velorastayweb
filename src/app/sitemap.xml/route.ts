import { SITE_INFO } from "@/data/site";
import { getApiRooms } from "@/lib/api/thehotelmate";
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
  { path: "/jamindar-nest", priority: 0.9, changeFrequency: "weekly" },
  { path: "/rooms", priority: 0.9, changeFrequency: "weekly" },
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

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function entry(
  path: string,
  priority: number,
  changeFrequency: ChangeFrequency,
  lastModified?: Date
): string {
  const url = escapeXml(`${BASE_URL}${path}`);
  return [
    "  <url>",
    `    <loc>${url}</loc>`,
    `    <lastmod>${(lastModified ?? NOW).toISOString()}</lastmod>`,
    `    <changefreq>${changeFrequency}</changefreq>`,
    `    <priority>${priority.toFixed(1)}</priority>`,
    "  </url>",
  ].join("\n");
}

export const dynamic = "force-static";

export function generateStaticParams() {
  return [];
}

export async function GET() {
  const entries: string[] = staticPages.map((page) =>
    entry(page.path, page.priority, page.changeFrequency)
  );

  const rooms = await getApiRooms();

  rooms.forEach((villa) => {
    entries.push(entry(`/rooms/${villa.slug}`, 0.9, "weekly"));
  });

  FACILITIES.forEach((facility) => {
    entries.push(entry(`/facilities/${facility.slug}`, 0.7, "yearly"));
  });

  NEARBY_ATTRACTIONS.forEach((attraction) => {
    entries.push(entry(`/nearby/${attraction.slug}`, 0.7, "yearly"));
  });

  TOUR_PACKAGES.forEach((tour) => {
    entries.push(entry(`/tours/${tour.slug}`, 0.8, "monthly"));
  });

  BLOG_POSTS.forEach((post) => {
    entries.push(
      entry(`/blog/${post.slug}`, 0.7, "monthly", new Date(post.publishedAt))
    );
  });

  LEGAL_PAGES.forEach((page) => {
    entries.push(entry(`/legal/${page.slug}`, 0.3, "yearly"));
  });

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...entries,
    "</urlset>",
    "",
  ].join("\n");

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
