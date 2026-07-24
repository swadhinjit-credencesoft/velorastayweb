import type { Metadata } from "next";
import VirtualTourViewer from "./VirtualTourViewer";

export const metadata: Metadata = {
  title: "Virtual Tour | Vellora Stays",
  description:
    "Take an immersive 360° virtual tour of Vellora Stays luxury villas near Pawna Lake, Lonavala. Explore our spaces before you arrive.",
  alternates: { canonical: "/explore/virtual-tour" },
  openGraph: {
    title: "Virtual Tour | Vellora Stays",
    description: "Take a 360° virtual tour of Vellora Stays luxury villas.",
    url: "https://vellorastays.in/explore/virtual-tour",
  },
};

export default function VirtualTourPage() {
  return <VirtualTourViewer />;
}
