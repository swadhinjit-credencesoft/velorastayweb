import type { Facility, SectionContent } from "@/types";

export const FACILITIES_CONTENT: SectionContent = {
  eyebrow: "Amenities",
  heading: "The Basics, Done Properly",
  description:
    "Bishnu Bhaban is a comfortable stay at the West Gate of the Shri Jagannath Temple, so we do not oversell the amenities list. What we do have is the set of things that actually decide whether a Puri stay works: air conditioning, hot water at any hour, an attached bathroom, daily housekeeping, a front desk open 7 AM to 11 PM, WiFi, and CCTV on a property where most guests leave their bags for the day.",
};

export const FACILITIES: Facility[] = [
  {
    id: "facility-temple",
    slug: "temple-gate-location",
    name: "50 m from the West Gate",
    description:
      "The single amenity we cannot compete on, because we own it. Bishnu Bhaban stands at the West Gate of the Shri Jagannath Temple, roughly 50 to 280 metres from the complex depending on the entry point. A guest leaving at 5:00 AM for the morning darshan is at the queue in a couple of minutes rather than in an auto.",
    icon: "lucide:landmark",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200",
    images: [
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200",
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=1200",
    ],
    features: ["50 m walk", "Darshan before the queue", "Market 2 min away"],
    category: "location",
  },
  {
    id: "facility-ac",
    slug: "air-conditioning",
    name: "Air Conditioning",
    description:
      "Every room is air-conditioned, which is not a luxury in coastal Odisha. Puri is humid for most of the year, and a great deal of a guest's day is spent walking around the temple complex. Coming back to a properly cooled room at midday makes the rest of the trip more bearable.",
    icon: "lucide:wind",
    image: "https://images.unsplash.com/photo-1766788466565-768128d89ce4?w=800&q=80",
    features: ["In every room", "Split units", "Serviced on schedule"],
    category: "basic",
  },
  {
    id: "facility-hot-water",
    slug: "hot-water",
    name: "24-Hour Hot Water",
    description:
      "Hot water is available at all hours, which matters more here than in most places. A lot of guests return from the temple at four or five in the morning and want a shower before they sleep. Geysers are installed in every bathroom and maintained on a planned schedule rather than reactively.",
    icon: "lucide:droplets",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&q=80",
    features: ["24/7 supply", "Geyser in every bathroom", "Planned maintenance"],
    category: "bathroom",
  },
  {
    id: "facility-bathroom",
    slug: "attached-bathroom",
    name: "Attached Western-Style Bathroom",
    description:
      "Every room has an attached bathroom with a shower, hot water, and Western-style fittings. This is the standard across all three room categories, including the Standard Room, because we do not think the cheapest room in the house should have a worse bathroom than the most expensive one.",
    icon: "lucide:shower-head",
    image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=800&q=80",
    features: ["Attached to every room", "Shower with hot water", "Western fittings"],
    category: "bathroom",
  },
  {
    id: "facility-housekeeping",
    slug: "daily-housekeeping",
    name: "Daily Housekeeping",
    description:
      "Rooms are serviced on a fixed daily schedule, not on request, and each one is inspected before a guest arrives rather than after one leaves. Fresh linen, cleaned bathrooms, and dust-free surfaces every day. It is the thing guests mention most often in their reviews, so it is the thing we hold most firmly.",
    icon: "lucide:sparkles",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=80",
    features: ["Fixed daily schedule", "Pre-arrival inspection", "Fresh linen"],
    category: "service",
  },
  {
    id: "facility-front-desk",
    slug: "front-desk",
    name: "Front Desk (7 AM – 11 PM)",
    description:
      "The desk is staffed from 7:00 AM to 11:00 PM, which covers temple timings and almost all arrival and departure times. If you are arriving after 11 PM or leaving very early, call ahead on +91 9078922710 so we can arrange check-in outside those hours. The desk also handles luggage storage, which most guests use while they are at the beach or on a day trip to Konark.",
    icon: "lucide:concierge-bell",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80",
    features: ["Staffed 7 AM to 11 PM", "Luggage storage", "Late check-in by arrangement"],
    category: "service",
  },
  {
    id: "facility-wifi",
    slug: "free-wifi",
    name: "Free WiFi",
    description:
      "Complimentary WiFi is available in all rooms and common areas. It is perfectly adequate for browsing, messaging, and video calls, which in practice is what guests use it for. If you have trouble connecting, the front desk can reset access for your room.",
    icon: "lucide:wifi",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    features: ["Free of charge", "All rooms", "Common areas"],
    category: "basic",
  },
  {
    id: "facility-cctv",
    slug: "cctv-security",
    name: "CCTV Security",
    description:
      "CCTV covers all entry and exit points, corridors, and common areas, and the feeds are monitored through the night. Rooms and private areas are not under surveillance. It matters because most guests hand over their luggage and go out for the day, and should not have to think about it.",
    icon: "lucide:shield-check",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    features: ["Entry and exit points", "Monitored feeds", "Private areas excluded"],
    category: "service",
  },
  {
    id: "facility-tv",
    slug: "television",
    name: "Television",
    description:
      "Rooms have a television with cable channels, which is genuinely useful in Puri: the temple aarti timings, the weather, and the fishing boats at Chandrabhaga are all things guests check before heading out in the morning.",
    icon: "lucide:tv",
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
    features: ["Cable channels", "In every room", "Aarti timings"],
    category: "entertainment",
  },
  {
    id: "facility-parking",
    slug: "parking",
    name: "Parking",
    description:
      "Parking facilities are available at the property. Space is limited, and Grand Road itself becomes heavily congested during festival season, so if you are driving we recommend telling us in advance so we can direct you to the right entrance.",
    icon: "lucide:car",
    image: "https://images.unsplash.com/photo-1506521781263-d8422e82f27a?w=800&q=80",
    features: ["On-site parking", "Tell us if driving", "Congestion advice in season"],
    category: "outdoor",
  },
  {
    id: "facility-power-backup",
    slug: "power-backup",
    name: "Power Backup",
    description:
      "Power backup covers essential lighting and outlets. The coastal supply is generally stable, but festival season puts a much heavier load on the grid in Puri, and we would rather guests were not affected by that than explain it away.",
    icon: "lucide:battery-charging",
    image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&q=80",
    features: ["Lighting and outlets", "Peak season backup", "No unexpected outages"],
    category: "basic",
  },
  {
    id: "facility-laundry",
    slug: "laundry-service",
    name: "Laundry Service",
    description:
      "Laundry can be arranged through the front desk, which matters for guests staying a week or more rather than two nights. Same-day turnaround is possible if the request goes in before the morning.",
    icon: "lucide:shirt",
    image: "https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&q=80",
    features: ["On request", "Same-day possible", "Via the front desk"],
    category: "service",
  },
  {
    id: "facility-luggage",
    slug: "luggage-storage",
    name: "Luggage Storage",
    description:
      "Store your luggage with us after check-out and before you leave. This is one of the most used services here: guests check out, spend the day at Puri Beach or on a trip to Konark, and collect their bags in the evening before a late train.",
    icon: "lucide:luggage",
    image: "https://images.unsplash.com/photo-1553531384-cc64ac80f931?w=800&q=80",
    features: ["Before and after stay", "Day trips", "Secure storage"],
    category: "service",
  },
  {
    id: "facility-seawater",
    slug: "near-beach",
    name: "Close to Puri Beach",
    description:
      "Puri Beach is about 1.5 kilometres away, a short auto ride or roughly a twenty minute walk. Chandrabhaga Beach, the quieter northern end, is around 3 kilometres. We cannot arrange swimming here, but the desk will happily call you an auto at whatever hour you want to leave.",
    icon: "lucide:waves",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200",
    features: ["1.5 km to Puri Beach", "3 km to Chandrabhaga", "Autos on request"],
    category: "location",
  },
];

export function getFacilityBySlug(slug: string): Facility | undefined {
  return FACILITIES.find((facility) => facility.slug === slug);
}

export function getFacilitiesByCategory(category: string): Facility[] {
  return FACILITIES.filter((facility) => facility.category === category);
}
