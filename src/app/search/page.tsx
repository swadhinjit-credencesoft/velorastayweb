import type { Metadata } from "next";
import SearchForm from "./SearchForm";

export const metadata: Metadata = {
  title: "Search | Y Hotels Signature",
  description: "Search rooms and hotel information at Y Hotels Signature in Jharsuguda.",
  robots: { index: false, follow: false },
  alternates: { canonical: "/search" },
  openGraph: {
    title: "Search | Y Hotels Signature",
    description: "Search Y Hotels Signature rooms and information.",
    url: "https://yhotels.in/search",
  },
};

export default function SearchPage() {
  return <SearchForm />;
}
