import type { Metadata } from "next";
import PropertyInfoPage from "@/components/sections/PropertyInfoPage";
export const metadata: Metadata = { title: "Hotel Contact | Y Hotels Signature", description: "Contact Y Hotels Signature in Jharsuguda for hotel enquiries." };
export default function TeamPage() { return <PropertyInfoPage title="Y Hotels Signature" description="Owner: Vishal Sharma. For all hotel and reservation enquiries, contact the team at connect@yhotels.in or +91 9124674120." />; }
