import type { Metadata } from "next";
import SearchForm from "./SearchForm";

export const metadata: Metadata = {
  title: "Search | Velora Stays",
  description:
    "Search villas, facilities, and blog posts at Velora Stays near Pawna Lake, Lonavala.",
  alternates: { canonical: "/search" },
  openGraph: {
    title: "Search | Velora Stays",
    description: "Search villas, facilities, and blog posts at Velora Stays.",
    url: "https://velorastays.in/search",
  },
};

export default function SearchPage() {
  return <SearchForm />;
}
