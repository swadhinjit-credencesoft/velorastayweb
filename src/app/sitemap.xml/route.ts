import { SITE_INFO } from "@/data/site";
import { HOTEL_ROOMS } from "@/data/villas";
import { BLOG_POSTS } from "@/data/blog";
import { LEGAL_PAGES } from "@/data/legal";

export const dynamic = "force-static";
export function generateStaticParams() { return []; }

export function GET() {
  const paths = ["", "/rooms", "/about", "/facilities", "/faq", "/contact", "/booking", "/blog"];
  const urls = [
    ...paths.map((path) => `${SITE_INFO.url}${path}`),
    ...HOTEL_ROOMS.map((room) => `${SITE_INFO.url}/rooms/${room.slug}`),
    ...BLOG_POSTS.map((post) => `${SITE_INFO.url}/blog/${post.slug}`),
    ...LEGAL_PAGES.map((page) => `${SITE_INFO.url}/legal/${page.slug}`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url.replace(/&/g, "&amp;")}</loc></url>`).join("\n")}\n</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
