import type { BreadcrumbItem } from "@/types";
import { SITE_INFO } from "@/data/site";

export function generateMetaTitle(title: string): string {
  if (title.includes(SITE_INFO.name)) return title;
  return `${title} | ${SITE_INFO.name}`;
}

export function generateMetaDescription(description: string, maxLength = 160): string {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3).trimEnd() + "...";
}

export function generateCanonicalUrl(path: string): string {
  return `${SITE_INFO.url}${path}`;
}

export function generateOgImageUrl(title: string): string {
  return `/api/og?title=${encodeURIComponent(title)}`;
}

export function generateBreadcrumbs(
  items: { label: string; href: string }[]
): BreadcrumbItem[] {
  return [{ label: "Home", href: "/" }, ...items];
}

export function formatPrice(amount: number, currency = "₹"): string {
  return `${currency}${amount.toLocaleString("en-IN")}`;
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function formatDateShort(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getStarRating(rating: number): string {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  return "★".repeat(fullStars) + (halfStar ? "½" : "") + "☆".repeat(emptyStars);
}
