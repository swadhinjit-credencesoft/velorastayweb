import type {
  SiteInfo,
  SocialLinks,
  HeroSlide,
  HeroStat,
  SocialLink,
  TrustBadge,
  NavLink,
} from "@/types";

export const SITE_INFO: SiteInfo = {
  name: "The Queen's Head – Paharganj",
  tagline: "Comfortable Stays in Paharganj",
  description:
    "Stay at The Queen's Head – Paharganj, New Delhi. Enjoy comfortable rooms, free Wi-Fi, air conditioning, an on-site restaurant, a 24-hour front desk and convenient access to Central Delhi attractions.",
  url: "https://shivharehotelsandtravel.com",
  phone: "+91 9899739777",
  whatsapp: "+91 9899739777",
  email: "shivharehotelsandtravel@gmail.com",
  address: {
    street: "2282–2285, Rajguru Marg",
    area: "Chuna Mandi, Paharganj",
    city: "New Delhi",
    state: "Delhi",
    pincode: "110055",
    country: "India",
    full:
      "2282–2285, Rajguru Marg, Chuna Mandi, Paharganj, New Delhi, Delhi 110055, India",
  },
  geo: {
    latitude: 28.6446,
    longitude: 77.2131,
  },
  checkIn: "12:00 PM",
  checkOut: "11:00 AM",
  rating: 5.0,
  reviewCount: 0,
};

export const SOCIAL_LINKS: SocialLinks = {
  facebook: "",
  instagram: "",
  twitter: "",
  youtube: "",
  tripadvisor: "",
  google: "https://maps.google.com/?q=The+Queens+Head+Paharganj+New+Delhi",
};

export const SITE_ASSETS = {
  heroImages: [
    "/homehero1.png",
    "/homehero2.png",
    "/homehero3.png",
  ] as const,
  logo: "",
  logoLight: "",
  favicon: "/favicon.ico",
  aboutImage: "/whychooseus.png",
  roomsPreviewImage: "/homehero2.png",
  diningImage: "/homehero3.png",
  eventsImage: "/homehero1.png",
  contactMapImage: "/homehero2.png",
  testimonialBackground: "/homehero1.png",
  notFoundImage: "/whychooseus.png",
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "hero-slide-1",
    image: "/homehero1.png",
    title: "Comfortable Stays in Paharganj",
    subtitle:
      "Welcome to The Queen's Head – Paharganj, a contemporary hotel in Chuna Mandi with air-conditioned rooms, free Wi-Fi and a 24-hour front desk.",
    cta: { label: "Check Availability", href: "/book-now" },
  },
  {
    id: "hero-slide-2",
    image: "/homehero2.png",
    title: "Your Convenient Base in Central Delhi",
    subtitle:
      "Close to New Delhi Railway Station, Connaught Place and major attractions — ideal for business, leisure and short city stays.",
    cta: { label: "Explore Rooms", href: "/rooms" },
  },
  {
    id: "hero-slide-3",
    image: "/homehero3.png",
    title: "Indian & Chinese Dining On-Site",
    subtitle:
      "Enjoy a selection of Indian and Chinese dishes at our on-site restaurant without leaving the property.",
    cta: { label: "View Amenities", href: "/amenities" },
  },
];

export const HERO_STATS: HeroStat[] = [
  {
    id: "stat-frontdesk",
    value: "24/7",
    label: "Front Desk Assistance",
    icon: "lucide:headphones",
  },
  {
    id: "stat-wifi",
    value: "Free",
    label: "High-Speed Wi-Fi",
    icon: "lucide:wifi",
  },
  {
    id: "stat-location",
    value: "Central",
    label: "Paharganj Location",
    icon: "lucide:map-pin",
  },
  {
    id: "stat-restaurant",
    value: "On-Site",
    label: "Indian & Chinese Restaurant",
    icon: "lucide:utensils",
  },
];

export const HERO_SOCIAL_LINKS: SocialLink[] = [
  {
    id: "social-google",
    icon: "lucide:map-pin",
    href: SOCIAL_LINKS.google,
    label: "Google Maps",
  },
];

export const TRUST_BADGES: TrustBadge[] = [
  {
    id: "badge-wifi",
    icon: "lucide:wifi",
    label: "Free Wi-Fi",
    value: "Complimentary",
  },
  {
    id: "badge-ac",
    icon: "lucide:snowflake",
    label: "Air Conditioning",
    value: "All Rooms",
  },
  {
    id: "badge-frontdesk",
    icon: "lucide:headphones",
    label: "24-Hour Front Desk",
    value: "Always Available",
  },
  {
    id: "badge-restaurant",
    icon: "lucide:utensils",
    label: "On-Site Restaurant",
    value: "Indian & Chinese",
  },
  {
    id: "badge-family",
    icon: "lucide:users",
    label: "Family Rooms",
    value: "Comfortable Stays",
  },
  {
    id: "badge-location",
    icon: "lucide:map-pin",
    label: "Prime Location",
    value: "Paharganj, New Delhi",
  },
];

const whatsappPhone = SITE_INFO.whatsapp.replace(/\s+/g, "").replace("+", "");
const whatsappMessage = [
  "Hello The Queen's Head – Paharganj,",
  "I would like to enquire about a booking.",
  "Name: ",
  "Check-in: ",
  "Check-out: ",
  "Rooms: ",
].join("\n");
export const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(whatsappMessage)}`;

export const GOOGLE_MAPS_URL = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0!2d${SITE_INFO.geo.longitude}!3d${SITE_INFO.geo.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s${encodeURIComponent(SITE_INFO.address.full)}!5e0!3m2!1sen!2sin!4v1700000000000`;

export const NAV_LINKS: NavLink[] = [
  { id: "nav-home", label: "Home", href: "/" },
  { id: "nav-rooms", label: "Rooms", href: "/rooms" },
  { id: "nav-amenities", label: "Amenities", href: "/amenities" },
  { id: "nav-dining", label: "Restaurant", href: "/restaurant" },
  { id: "nav-location", label: "Location", href: "/location" },
  { id: "nav-contact", label: "Contact Us", href: "/contact" },
];

export const BOOKING_URL = "/book-now";

export const NAV_CTA = {
  label: "Book Now",
  href: "/book-now",
  icon: "lucide:calendar-check",
};
