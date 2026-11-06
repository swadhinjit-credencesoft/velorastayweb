import type { EventType, SectionContent } from "@/types";
export const EVENTS_CONTENT: SectionContent = { eyebrow: "Groups and events", heading: "Ask us about group stays", description: "Contact the hotel directly to discuss room blocks and group requirements." };
export const EVENT_TYPES: EventType[] = [];
export function getEventBySlug(slug: string): EventType | undefined { return EVENT_TYPES.find((event) => event.slug === slug); }
export function getAllEvents(): EventType[] { return EVENT_TYPES; }
