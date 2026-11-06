import type { AboutStory, Milestone } from "@/types";
export interface AboutMission { title: string; description: string; }
export interface AboutVision { title: string; description: string; }
export interface AboutValue { id: string; title: string; description: string; icon: string; }
export interface Sustainability { title: string; description: string; }

export const ABOUT_STORY: AboutStory = {
  title: "About Y Hotels Signature",
  image: "/y-hotels-room.svg",
  description: "Y Hotels Signature is located at Mangalam Tower, Sarbahal Road, Marwari Para, Jharsuguda, Odisha 768201. The hotel lists 34 rooms across Deluxe, Super Deluxe and Executive categories.\n\nGuests can ask the hotel team about room availability, the EP, CP, MAP and AP meal plans, and rates for their dates. Check-in is at 1:00 PM and check-out is at 11:00 AM.",
};
export const ABOUT_MISSION: AboutMission = { title: "Our Approach", description: "We aim to make room choices and rates clear. Our team can help guests compare the three room categories, check occupancy and confirm meal plan pricing before arrival." };
export const ABOUT_VISION: AboutVision = { title: "Our Focus", description: "Y Hotels Signature welcomes guests to Jharsuguda with a choice of room categories and direct contact with the hotel team for current availability and stay details." };
export const ABOUT_VALUES: AboutValue[] = [
  { id: "clear-information", title: "Clear Information", description: "We publish room categories, occupancy, check-in and check-out times, and listed room rates.", icon: "lucide:info" },
  { id: "direct-contact", title: "Direct Contact", description: "Guests can contact the hotel team to confirm rates, meal plans and availability.", icon: "lucide:phone" },
  { id: "local-address", title: "Local Address", description: "Find Y Hotels Signature at Mangalam Tower, Sarbahal Road, Jharsuguda.", icon: "lucide:map-pin" },
];
export const ABOUT_MILESTONES: Milestone[] = [];
export const SUSTAINABILITY: Sustainability = { title: "Property Information", description: "For current details about hotel services, accessibility and environmental practices, please contact Y Hotels Signature directly." };
