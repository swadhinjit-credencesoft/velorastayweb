import type { TeamMember, Award } from "@/types";

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "team-founder",
    name: "The Explorer Stays Team",
    role: "Founders",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    bio: "Founded by a group of passionate travellers and hospitality enthusiasts, The Explorer Stays created Vellora Stays with a vision to provide luxury private villa experiences near Pawna Lake. With a deep love for the Sahyadri mountains and a commitment to exceptional hospitality, the team has built Vellora Stays into one of the most trusted villa properties in Lonavala.",
    social: [
      { platform: "instagram", url: "https://instagram.com/theexplorerstays" },
    ],
  },
  {
    id: "team-caretaker",
    name: "Ravi Patil",
    role: "Head Caretaker",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    bio: "Ravi leads the caretaker team at Vellora Stays with meticulous attention to detail. With over 15 years of experience in hospitality and a deep knowledge of the Lonavala region, he ensures that every guest receives personalised care and has an unforgettable experience. From arranging local activities to coordinating special events, Ravi goes above and beyond for every guest.",
    social: [
      { platform: "linkedin", url: "https://linkedin.com/in/ravipatil" },
    ],
  },
  {
    id: "team-manager",
    name: "Priya Deshmukh",
    role: "Guest Experience Manager",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face",
    bio: "Priya oversees the guest experience at Vellora Stays with a passion for creating memorable stays. With a background in hospitality management and a genuine love for the villa hospitality industry, she ensures that every detail is taken care of, from the moment a guest inquires about a booking to the farewell at checkout. Her focus on personalised service has been instrumental in maintaining the property's 5.0-star rating.",
    social: [
      { platform: "linkedin", url: "https://linkedin.com/in/priyadeshmukh" },
      { platform: "instagram", url: "https://instagram.com/priyadeshmukh" },
    ],
  },
  {
    id: "team-chef",
    name: "Suresh Kolkar",
    role: "Kitchen Manager",
    image: "https://images.unsplash.com/photo-1577219491135-ce3967c4d049?w=400&h=400&fit=crop&crop=face",
    bio: "Chef Suresh brings the authentic flavours of Maharashtra to the Vellora Stays dining experience. Trained in traditional Maharashtrian cuisine and having worked at several premium properties, he combines local recipes with contemporary techniques. His BBQ setups and home-cooked meals are among the most talked-about features among our guests.",
    social: [
      { platform: "instagram", url: "https://instagram.com/chefsuresh" },
    ],
  },
  {
    id: "team-activities",
    name: "Amit Jadhav",
    role: "Activities Coordinator",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    bio: "Amit coordinates all the adventure activities and experiences at Vellora Stays, from fort treks and kayaking to sunset boat rides. With a deep knowledge of the Pawna Lake region and a passion for adventure, he curates unique experiences that showcase the best of the Sahyadri mountains. His energy and enthusiasm are infectious, making every activity a memorable experience.",
    social: [
      { platform: "instagram", url: "https://instagram.com/amitjadhav" },
    ],
  },
];

export const AWARDS: Award[] = [
  {
    id: "award-01",
    title: "Top Rated Villa Stay",
    organization: "Google",
    year: "2025",
    description:
      "Recognised as one of the top-rated villa stays near Pawna Lake with a perfect 5.0-star rating from 47+ verified Google reviews. The award honours properties that deliver exceptional experiences and consistently earn glowing reviews from guests.",
  },
  {
    id: "award-02",
    title: "Guest Favourite",
    organization: "Airbnb",
    year: "2025",
    description:
      "Awarded by Airbnb for consistently high guest review scores and outstanding hospitality. Vellora Stays achieved a 4.95 rating based on verified guest reviews, placing it among the top-rated villa properties in the Lonavala region.",
  },
  {
    id: "award-03",
    title: "Best Luxury Villa Experience",
    organization: "MakeMyTrip",
    year: "2026",
    description:
      "Honoured by MakeMyTrip for providing the best luxury villa experience near Pawna Lake. This award recognises the property's commitment to privacy, luxury, and creating experiences that guests are eager to share with others.",
  },
  {
    id: "award-04",
    title: "Excellence in Hospitality",
    organization: "Goibibo",
    year: "2025",
    description:
      "Goibibo Excellence Award for outstanding hospitality and service standards. This accolade is given to properties that consistently earn great reviews from travellers and maintain the highest standards of guest care across all touchpoints.",
  },
  {
    id: "award-05",
    title: "Best Weekend Getaway",
    organization: "Lonavala Tourism",
    year: "2026",
    description:
      "Awarded for being the best weekend getaway destination near Pawna Lake. The award evaluates properties on villa quality, amenities, service, location, and overall guest experience, and Vellora Stays came out on top.",
  },
];
