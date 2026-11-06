import type { Metadata } from "next";
import PropertyInfoPage from "@/components/sections/PropertyInfoPage";
export const metadata: Metadata = { title: "Room Rates | Y Hotels Signature", description: "Published base room rates and meal plan information for Y Hotels Signature." };
export default function OffersPage() { return <PropertyInfoPage title="Rates and meal plans" description="Single occupancy starts at ₹3,500 for Deluxe. Each higher room category adds ₹500 and double occupancy adds ₹500. EP, CP, MAP and AP meal plans are available; contact the hotel to confirm plan pricing and dates." />; }
