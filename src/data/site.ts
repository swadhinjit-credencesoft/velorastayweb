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
  name: "Bishnu Bhaban",
  tagline: "Budget Hotel Near Jagannath Temple, Puri",
  description:
    "Bishnu Bhaban is a budget-friendly hotel at the West Gate of the Shree Jagannath Temple in Puri, Odisha. Clean air-conditioned rooms with hot water, free WiFi, a front desk open 7 AM to 11 PM, daily housekeeping and CCTV security.",
  url: "https://bishnubhaban.com",
  phone: "+91 9078922710",
  whatsapp: "+91 9861229896",
  email: "reservation@thehotelmate.co",
  address: {
    street: "West Gate of Jagannath Temple",
    area: "Grand Road",
    city: "Puri",
    state: "Odisha",
    pincode: "752001",
    country: "India",
    full: "West Gate of Jagannath Temple, Grand Road, Puri, Odisha 752001, India",
  },
  geo: {
    latitude: 19.8040441,
    longitude: 85.8162435,
  },
  checkIn: "2:00 PM",
  checkOut: "11:00 AM",
  rating: 3.8,
  reviewCount: 534,
};

export const SOCIAL_LINKS: SocialLinks = {
  facebook: "https://www.facebook.com/bishnubhaban",
  instagram: "https://www.instagram.com/bishnubhaban",
  twitter: "",
  youtube: "",
  tripadvisor: "",
  google:
    "https://maps.google.com/?q=Bishnu+Bhaban+West+Gate+of+Jagannath+Temple+Puri",
};

export const SITE_ASSETS = {
  logo: "/bishnu-bhaban-logo1.png",
  logoLight: "/bishnu-bhaban-logo1.png",
  favicon: "/favicon.ico",
  aboutImage:
    "/bishnyhomeimage/homehero1.png",
  roomsPreviewImage:
    "/bishnyhomeimage/homehero1.png",
  eventsImage:
    "/bishnyhomeimage/homehero22.webp",
  contactMapImage:
    "/bishnyhomeimage/fascilitypuridarsan.png",
  testimonialBackground:
    "/bishnyhomeimage/homehero3.png",
  notFoundImage:
    "/bishnyhomeimage/homehero1.png",
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "hero-slide-1",
    image: "/bishnyhomeimage/homehero1.png",
    title: "Stay Steps from Jagannath Temple",
    subtitle:
      "Clean, air-conditioned budget rooms at the West Gate of the Shree Jagannath Temple in Puri, within easy walking distance.",
    cta: { label: "Check Availability", href: "/contact" },
  },
  {
    id: "hero-slide-2",
    image: "/bishnyhomeimage/homehero22.webp",
    title: "Your Base for Puri Darshan",
    subtitle:
      "Hot water, free WiFi and a front desk open 7 AM to 11 PM, all within 50 to 280 metres of the temple complex.",
    cta: { label: "Explore Rooms", href: "/rooms" },
  },
  {
    id: "hero-slide-3",
    image: "/bishnyhomeimage/homehero3.png",
    title: "Puri Beach, Temples & Sunrise",
    subtitle:
      "From early morning darshan to evening walks on the beach, everything you need for a Puri trip is close at hand.",
    cta: { label: "View Amenities", href: "/facilities" },
  },
];

export const HERO_STATS: HeroStat[] = [
  {
    id: "stat-reviews",
    value: "500+",
    label: "Guest Reviews",
    icon: "lucide:message-square",
  },
  {
    id: "stat-rating",
    value: "3.8",
    label: "Google Rating",
    icon: "lucide:star",
  },
  {
    id: "stat-temple",
    value: "50m",
    label: "From Temple Gate",
    icon: "lucide:landmark",
  },
  {
    id: "stat-support",
    value: "24/7",
    label: "Front Desk",
    icon: "lucide:headphones",
  },
];

export const HERO_SOCIAL_LINKS: SocialLink[] = [
  {
    id: "social-instagram",
    icon: "lucide:instagram",
    href: SOCIAL_LINKS.instagram,
    label: "Instagram",
  },
  {
    id: "social-facebook",
    icon: "lucide:facebook",
    href: SOCIAL_LINKS.facebook,
    label: "Facebook",
  },
  {
    id: "social-google",
    icon: "lucide:map-pin",
    href: SOCIAL_LINKS.google,
    label: "Google",
  },
];

export const TRUST_BADGES: TrustBadge[] = [
  {
    id: "badge-temple",
    icon: "lucide:landmark",
    label: "Temple Proximity",
    value: "50m from Gate",
  },
  {
    id: "badge-beach",
    icon: "lucide:waves",
    label: "Close to Beach",
    value: "Walking Distance",
  },
  {
    id: "badge-wifi",
    icon: "lucide:wifi",
    label: "Free WiFi",
    value: "In-room",
  },
  {
    id: "badge-parking",
    icon: "lucide:car",
    label: "Secure Parking",
    value: "On Request",
  },
  {
    id: "badge-support",
    icon: "lucide:headphones",
    label: "Front Desk",
    value: "7 AM – 11 PM",
  },
  {
    id: "badge-cctv",
    icon: "lucide:shield-check",
    label: "CCTV Security",
    value: "Monitored",
  },
];

const whatsappPhone = SITE_INFO.whatsapp.replace(/\s+/g, "").replace("+", "");
const whatsappMessage = [
  "*This is an Enquiry from :* The HotelMate Website",
  "Hotel Name: Bishnu Bhaban,",
  "Property Id: 3637,",
  "externalSite: WebSite,",
  "Address: West Gate of Jagannath Temple, Grand Road, Puri, Odisha, India",
].join("\n");
export const WHATSAPP_LINK = `https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodeURIComponent(whatsappMessage)}`;

export const GOOGLE_MAPS_URL = `https://maps.google.com/maps?q=${SITE_INFO.geo.latitude},${SITE_INFO.geo.longitude}&z=17&hl=en&output=embed`;

export const NAV_LINKS: NavLink[] = [
  { id: "nav-home", label: "Home", href: "/" },
  { id: "nav-villas", label: "Our Rooms", href: "/rooms" },
  { id: "nav-amenities", label: "Amenities", href: "/facilities" },
  { id: "nav-puri", label: "Puri Experience", href: "/nearby" },
  { id: "nav-gallery", label: "Gallery", href: "/gallery" },
  { id: "nav-contact", label: "Contact Us", href: "/contact" },
];

export const BOOKING_URL = "https://bookone.io/Bishnu-Bhavan?bookingEngine=true";

export const NAV_CTA = {
  label: "Check Availability",
  href: "https://bookone.io/Bishnu-Bhavan?bookingEngine=true",
  icon: "lucide:calendar-check",
};
