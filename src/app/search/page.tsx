import type { Metadata } from "next";
import { getDynamicVillas } from "@/lib/api/thehotelmate";
import SearchForm from "./SearchForm";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Search | Velora Stays",
  description:
    "Search villas, facilities, and blog posts at Velora Stays near Pawna Lake, Lonavala.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/search" },
  openGraph: {
    title: "Search | Velora Stays",
    description: "Search villas, facilities, and blog posts at Velora Stays.",
    url: "https://velorastays.in/search",
  },
};

export default async function SearchPage() {
  const villas = await getDynamicVillas();
  return <SearchForm serverVillas={villas} />;
}
