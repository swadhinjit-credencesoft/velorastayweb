import type {
  SiteInfo,
  SocialLinks,
  HeroSlide,
  HeroStat,
  SocialLink,
  TrustBadge,
  NavLink,
} from "@/types";
import { BOOKING_ENGINE_URL } from "@/config";

export const SITE_INFO: SiteInfo = {
  name: "Hotel Yogiraj",
  tagline: "A Comfortable Stay Close to Sai Baba Temple",
  description:
    "Stay at Hotel Yogiraj, Shirdi — a budget-friendly hotel just moments from the Sai Baba Temple. Enjoy comfortable AC & non-AC rooms, free Wi-Fi, an in-house restaurant, car parking and 24-hour front-desk assistance for pilgrims, families and travellers.",
  url: "https://yogirajhotel.com",
  phone: "+91 95955 33535",
  whatsapp: "+91 95955 33535",
  email: "info@yogirajhotel.com",
  address: {
    street: "Pimpalwadi Rd, near Sai Baba Temple, near Sai Sh corner",
    area: "Shiv Nagar",
    city: "Shirdi",
    state: "Maharashtra",
    pincode: "423109",
    country: "India",
    full:
      "Pimpalwadi Rd, near Sai Baba Temple, near Sai Sh corner, Shiv Nagar, Shirdi, Maharashtra 423109, India",
  },
  geo: {
    latitude: 19.76695517,
    longitude: 74.48043686,
  },
  checkIn: "12:00 PM",
  checkOut: "11:00 AM",
  rating: 4.4,
  reviewCount: 2298,
};

export const SOCIAL_LINKS: SocialLinks = {
  facebook: "",
  instagram: "",
  twitter: "",
  youtube: "",
  tripadvisor: "",
  google: "https://maps.google.com/?q=Hotel+Yogiraj+Shirdi+Maharashtra",
};

export const SITE_ASSETS = {
  heroImages: [
    "/yogirajimg/AKS08567.avif",
    "/yogirajimg/AKS08604.avif",
    "/yogirajimg/AKS08582.avif",
  ] as const,
  logo: "/yogirajlogo.webp",
  logoLight: "",
  favicon: "/favicon.ico",
  aboutImage: "/yogirajimg/01.avif",
  roomsPreviewImage: "/yogirajimg/AKS08605.avif",
  diningImage: "/yogirajimg/AKS08641.avif",
  eventsImage: "/yogirajimg/AKS08587.avif",
  contactMapImage: "/yogirajimg/4.avif",
  testimonialBackground: "/yogirajimg/AKS08625.avif",
  notFoundImage: "/yogirajimg/AKS08545.avif",
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "hero-slide-1",
    image: "/yogirajimg/01.avif",
    title: "Stay Minutes from Sai Baba Temple",
    subtitle:
      "Welcome to Hotel Yogiraj, Shirdi — a comfortable, budget-friendly hotel right near the Sai Baba Temple with AC & non-AC rooms, free Wi-Fi and warm hospitality.",
    cta: { label: "Check Availability", href: `${BOOKING_ENGINE_URL}?bookingEngine=true` },
  },
  {
    id: "hero-slide-2",
    image: "/yogirajimg/4.avif",
    title: "Comfortable Rooms for Every Traveller",
    subtitle:
      "From double bed rooms to family-friendly four-bed rooms, choose the perfect stay for your Shirdi pilgrimage or family trip.",
    cta: { label: "Explore Rooms", href: "/rooms" },
  },
  { 
    id: "hero-slide-3",
    image: "/yogirajimg/3.avif",
    title: "In-House Restaurant & Parking",
    subtitle:
      "Enjoy delicious vegetarian meals at our in-house restaurant, plus convenient car parking, free Wi-Fi and a 24-hour front desk.",
    cta: { label: "View Amenities", href: "/amenities" },
  },
];

export const HERO_STATS: HeroStat[] = [
  {
    id: "stat-temple",
    value: "2 min",
    label: "Walk to Sai Baba Temple",
    icon: "lucide:map-pin",
  },
  {
    id: "stat-wifi",
    value: "Free",
    label: "High-Speed Wi-Fi",
    icon: "lucide:wifi",
  },
  {
    id: "stat-rooms",
    value: "7",
    label: "Room Categories",
    icon: "lucide:bed-double",
  },
  {
    id: "stat-restaurant",
    value: "In-House",
    label: "Vegetarian Restaurant",
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
    id: "badge-temple",
    icon: "lucide:map-pin",
    label: "Close to Sai Baba Temple",
    value: "Walkable",
  },
  {
    id: "badge-wifi",
    icon: "lucide:wifi",
    label: "Free Wi-Fi",
    value: "Complimentary",
  },
  {
    id: "badge-parking",
    icon: "lucide:car",
    label: "Car Parking",
    value: "Available",
  },
  {
    id: "badge-restaurant",
    icon: "lucide:utensils",
    label: "In-House Restaurant",
    value: "Vegetarian",
  },
  {
    id: "badge-family",
    icon: "lucide:users",
    label: "Family Rooms",
    value: "Comfortable Stays",
  },
  {
    id: "badge-ac",
    icon: "lucide:snowflake",
    label: "AC & Non-AC Rooms",
    value: "All Options",
  },
];

const whatsappPhone = SITE_INFO.whatsapp.replace(/\s+/g, "").replace("+", "");
const whatsappMessage = [
  "Hello Hotel Yogiraj, Shirdi,",
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

export const BOOKING_URL = `${BOOKING_ENGINE_URL}?bookingEngine=true`;

export const NAV_CTA = {
  label: "Book Now",
  href: `${BOOKING_ENGINE_URL}?bookingEngine=true`,
  icon: "lucide:calendar-check",
};
