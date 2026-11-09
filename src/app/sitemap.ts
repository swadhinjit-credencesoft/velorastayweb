import type { MetadataRoute } from "next";
import { SITE_INFO } from "@/data/site";
import { GALLERY_CATEGORIES } from "@/data/gallery";
import { LOCAL_SEO_PAGES } from "@/data/seoPages";
import { LEGAL_PAGES } from "@/data/legal";
import { checkAvailability, checkNxAvailability } from "@/lib/api";
import { apiRoomToRoomType } from "@/lib/rooms";

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
  // Hotel Yogiraj (Main)
  { path: "", priority: 1.0, changeFrequency: "daily" },
  { path: "/rooms", priority: 0.9, changeFrequency: "weekly" },
  { path: "/amenities", priority: 0.8, changeFrequency: "monthly" },
  { path: "/restaurant", priority: 0.7, changeFrequency: "monthly" },
  { path: "/location", priority: 0.8, changeFrequency: "monthly" },
  { path: "/gallery", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/reviews", priority: 0.6, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.5, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.6, changeFrequency: "monthly" },

  // Hotel Yogiraj NX (Building 2)
  { path: "/yogiraj-nx", priority: 1.0, changeFrequency: "daily" },
  { path: "/yogiraj-nx/rooms", priority: 0.9, changeFrequency: "weekly" },
  { path: "/yogiraj-nx/amenities", priority: 0.8, changeFrequency: "monthly" },
  { path: "/yogiraj-nx/restaurant", priority: 0.7, changeFrequency: "monthly" },
  { path: "/yogiraj-nx/location", priority: 0.8, changeFrequency: "monthly" },
  { path: "/yogiraj-nx/gallery", priority: 0.6, changeFrequency: "monthly" },
  { path: "/yogiraj-nx/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/yogiraj-nx/reviews", priority: 0.6, changeFrequency: "weekly" },
  { path: "/yogiraj-nx/faq", priority: 0.5, changeFrequency: "monthly" },
  { path: "/yogiraj-nx/contact", priority: 0.6, changeFrequency: "monthly" },
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

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticEntries = staticPages.map((page) =>
    entry(page.path, page.priority, page.changeFrequency)
  );

  const property = await checkAvailability();
  const nxProperty = await checkNxAvailability();

  const mainRoomEntries = (property?.roomList ?? []).map((room) => {
    const mapped = apiRoomToRoomType(room);
    return entry(`/rooms/${mapped.slug}`, 0.9, "weekly");
  });

  const nxRoomEntries = (nxProperty?.roomList ?? []).map((room) => {
    const mapped = apiRoomToRoomType(room);
    return entry(`/yogiraj-nx/rooms/${mapped.slug}`, 0.9, "weekly");
  });

  const roomEntries = [...mainRoomEntries, ...nxRoomEntries];

  const galleryEntries = GALLERY_CATEGORIES.map((cat) =>
    entry(`/gallery/${cat.slug}`, 0.5, "monthly")
  );

  const localSeoEntries = LOCAL_SEO_PAGES.flatMap((page) => [
    entry(`/${page.slug}`, 0.7, "monthly"),
    entry(`/yogiraj-nx/${page.slug}`, 0.7, "monthly"),
  ]);

  const legalEntries = LEGAL_PAGES.map((page) =>
    entry(`/legal/${page.slug}`, 0.3, "yearly")
  );

  return [
    ...staticEntries,
    ...roomEntries,
    ...galleryEntries,
    ...localSeoEntries,
    ...legalEntries,
  ];
}
