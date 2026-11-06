import { SITE_INFO } from "@/data/site";
import { HOTEL_ROOMS } from "@/data/villas";
import { BLOG_POSTS } from "@/data/blog";
import { LEGAL_PAGES } from "@/data/legal";
import { FACILITIES } from "@/data/facilities";
import { NEARBY_ATTRACTIONS } from "@/data/nearby";

export const dynamic = "force-static";
export function GET() {
  const paths = [
    "", "/rooms", "/about", "/about/story", "/about/mission", "/about/vision", "/about/values",
    "/about/team", "/about/awards", "/about/careers", "/about/sustainability",
    "/facilities", "/amenities", "/dining", "/faq", "/contact", "/booking", "/blog", "/gallery", "/offers", "/events",
    "/nearby", "/tours", "/explore", "/explore/experiences", "/explore/nearby-attractions",
    "/explore/tour-packages", "/explore/virtual-tour", "/privacy", "/terms", "/refund", "/reviews",
  ];
  const urls = [
    ...paths.map((path) => `${SITE_INFO.url}${path}`),
    ...HOTEL_ROOMS.map((room) => `${SITE_INFO.url}/rooms/${room.slug}`),
    ...HOTEL_ROOMS.map((room) => `${SITE_INFO.url}/gallery/${room.slug}`),
    ...BLOG_POSTS.map((post) => `${SITE_INFO.url}/blog/${post.slug}`),
    ...FACILITIES.map((facility) => `${SITE_INFO.url}/facilities/${facility.slug}`),
    ...NEARBY_ATTRACTIONS.map((place) => `${SITE_INFO.url}/nearby/${place.slug}`),
    ...LEGAL_PAGES.filter((page) => !["privacy-policy", "terms-and-conditions", "refund-policy"].includes(page.slug)).map((page) => `${SITE_INFO.url}/legal/${page.slug}`),
  ];
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((url) => `  <url><loc>${url.replace(/&/g, "&amp;")}</loc></url>`).join("\n")}\n</urlset>`;
  return new Response(xml, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
}
