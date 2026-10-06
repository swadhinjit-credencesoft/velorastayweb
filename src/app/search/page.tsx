import type { Metadata } from "next";
import SearchForm from "./SearchForm";

export const metadata: Metadata = {
  title: "Search | Bishnu Bhaban",
  description:
    "Search rooms, facilities, and blog posts at Bishnu Bhaban, a comfortable stay at the West Gate of the Shri Jagannath Temple in Puri.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/search" },
  openGraph: {
    title: "Search | Bishnu Bhaban",
    description: "Search rooms, facilities, and blog posts at Bishnu Bhaban.",
    url: "https://bishnubhaban.com/search",
  },
};

export default function SearchPage() {
  return <SearchForm />;
}
