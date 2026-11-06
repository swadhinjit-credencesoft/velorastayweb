import type { SectionContent } from "@/types";
import { STOCK_IMAGES } from "@/data/images";

export const EVENTS_CONTENT: SectionContent = {
  eyebrow: "Groups and Western Odisha",
  heading: "Plan a group stay or explore local celebrations",
  description: "Y Hotels Signature lists 34 guest rooms. Contact the hotel to discuss room blocks. This property has not supplied event-hall or banquet-service details.",
};

export const GROUP_STAY_FACTS = [
  { label: "Total listed rooms", value: "34" },
  { label: "Room categories", value: "Deluxe, Super Deluxe, Executive" },
  { label: "Check-in", value: "1:00 PM" },
  { label: "Check-out", value: "11:00 AM" },
];

export const REGIONAL_EVENTS = [
  { id: "nuakhai", name: "Nuakhai", area: "Western Odisha", description: "A harvest festival centred on the new crop, shared family meals and community traditions." },
  { id: "sital-sasthi", name: "Sital Sasthi", area: "Sambalpur", description: "A major local celebration featuring the ceremonial wedding of Shiva and Parvati and public processions." },
  { id: "raja-parba", name: "Raja Parba", area: "Odisha", description: "A multi-day festival celebrating womanhood and the seasonal cycle." },
];

export const EVENTS_IMAGE = STOCK_IMAGES.landscape;
