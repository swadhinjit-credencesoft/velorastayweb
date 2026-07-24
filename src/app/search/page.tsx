import type { Metadata } from "next";
import SearchForm from "./SearchForm";

export const metadata: Metadata = {
  title: "Search | Vellora Stays",
  description:
    "Search villas, facilities, and blog posts at Vellora Stays near Pawna Lake, Lonavala.",
  alternates: { canonical: "/search" },
  openGraph: {
    title: "Search | Vellora Stays",
    description: "Search villas, facilities, and blog posts at Vellora Stays.",
    url: "https://vellorastays.in/search",
  },
};

export default function SearchPage() {
  return <SearchForm />;
}
