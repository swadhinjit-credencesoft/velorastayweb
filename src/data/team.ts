import type { TeamMember, Award } from "@/types";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-founder",
    name: "The DC Developer Team",
    role: "Owners",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "The group behind Bishnu Bhaban. Rather than build a larger hotel somewhere cheaper, they took a property at the West Gate of the Shri Jagannath Temple and set out to make a clean, well-run budget stay that pilgrims could rely on. Their focus has stayed on maintenance and honest pricing rather than expansion.",
    social: [
      { platform: "instagram", url: "" },
    ],
  },
  {
    id: "team-caretaker",
    name: "Preveen Dhabal",
    role: "Head Caretaker",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Preveen looks after the physical side of the property. With well over a decade of experience in hospitality, he oversees daily housekeeping schedules, room inspections before guest arrival, and the maintenance log. He knows which rooms get used hardest during festival season and schedules the deep cleaning accordingly.",
    social: [
      { platform: "linkedin", url: "" },
    ],
  },
  {
    id: "team-manager",
    name: "Avinash",
    role: "Guest Experience Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "Avinash handles the front desk and most of the guest contact. He manages the desk rota, luggage storage, and early check-out requests for guests with dawn departures, and arranges late check-ins for people who call ahead. He also reads the guest reviews and feeds what comes back into the maintenance schedule.",
    social: [
      { platform: "linkedin", url: "" },
      { platform: "instagram", url: "" },
    ],
  },
];

export const AWARDS: Award[] = [
  {
    id: "award-01",
    title: "500+ Guest Reviews on Google",
    organization: "Google",
    year: "2026",
    description:
      "The property has passed 500 guest reviews on Google, with an overall rating of 3.8. For a budget hotel at the temple gate, the volume of guest feedback is the marker that matters, and it is what keeps us honest about what still needs fixing.",
  },
];
