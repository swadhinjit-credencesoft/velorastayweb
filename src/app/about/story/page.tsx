import type { Metadata } from "next";
import PropertyInfoPage from "@/components/sections/PropertyInfoPage";
export const metadata: Metadata = { title: "About Y Hotels Signature", description: "Y Hotels Signature is a 34-room hotel in Jharsuguda, Odisha." };
export default function StoryPage() { return <PropertyInfoPage title="About Y Hotels Signature" description="Y Hotels Signature is located at Mangalam Tower, Sarbahal Road, Marwari Para, Jharsuguda, Odisha 768201. The hotel lists 34 rooms across three categories." />; }
