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
  tagline: "A Comfortable stay at the West Gate of Shri Jagannath Temple",
  description:
    "Bishnu Bhaban offers a comfortable stay at the West Gate of the Shri Jagannath Temple in Puri, Odisha. Clean air-conditioned rooms with hot water, free WiFi, a front desk open 24 hours, daily housekeeping and CCTV security.",
  url: "https://bishnubhaban.com",
  phone: "+91 9078922710",
  whatsapp: "+91 9437093094",
  email: "Bishnubhabanpuri@gmail.com",
  address: {
    street: "West Gate of Shri Jagannath Temple",
    area: "Grand Road",
    city: "Puri",
    state: "Odisha",
    pincode: "752001",
    country: "India",
    full: "West Gate of Shri Jagannath Temple, Grand Road, Puri, Odisha 752001, India",
  },
  geo: {
    latitude: 19.8040441,
    longitude: 85.8162435,
  },
  checkIn: "08:00 AM",
  checkOut: "09:00 AM",
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
  favicon: "/bishnu-bhaban-logo1.png",
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
    title: "Stay Just 50 Metres from Shri Jagannath Temple",
    subtitle:
      "Comfortable rooms at the West Gate of Shri Jagannath Temple, Puri, within easy walking distance.",
    cta: { label: "Check Availability", href: "/contact" },
  },
  {
    id: "hero-slide-2",
    image: "/bishnyhomeimage/homehero22.webp",
    title: "Your Base for Puri Darshan",
    subtitle:
      "Hot water, free WiFi and a front desk open 24 hours, all within 50 to 280 metres of the temple complex.",
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
    value: " 24×7",
  },
  {
    id: "badge-cctv",
    icon: "lucide:shield-check",
    label: "CCTV Security",
    value: "Monitored",
  },
];

export const WHY_BHABAN_FEATURES: {
  id: string;
  icon: string;
  title: string;
  description: string;
}[] = [
  {
    id: "why-temple-distance",
    icon: "lucide:landmark",
    title: "50 Metres from Shri Jagannath Temple",
    description:
      "Walk to the West Gate of Shri Jagannath Temple in minutes.",
  },
  {
    id: "why-temple-view",
    icon: "lucide:eye",
    title: "Temple View Rooms",
    description: "Selected rooms offer views towards the temple.",
  },
  {
    id: "why-family-rooms",
    icon: "lucide:users",
    title: "Family-Friendly Rooms",
    description: "Double, four-bed and six-bed options.",
  },
  {
    id: "why-parking",
    icon: "lucide:car",
    title: "Parking Available",
    description:
      "Two-wheeler parking and vehicle parking assistance.",
  },
  {
    id: "why-guest-assistance",
    icon: "lucide:headphones",
    title: "24-Hour Guest Assistance",
    description: "Assistance whenever you need it.",
  },
  {
    id: "why-darshan",
    icon: "lucide:sparkles",
    title: "Temple Darshan Assistance",
    description: "We help guests plan their temple visit.",
  },
  {
    id: "why-lift-hot-water",
    icon: "lucide:move-vertical",
    title: "Lift & Hot Water",
    description: "Convenient facilities for families and senior guests.",
  },
];

const whatsappPhone = SITE_INFO.whatsapp.replace(/\s+/g, "").replace("+", "");
const whatsappMessage = [
  "*This is an Enquiry from :* The HotelMate Website",
  "Hotel Name: Bishnu Bhaban,",
  "Property Id: 3637,",
  "externalSite: WebSite,",
  "Address: West Gate of Shri Jagannath Temple, Grand Road, Puri, Odisha, India",
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

export const BOOKING_URL = "https://bookone.io/bishnu-bhaban?bookingEngine=true";

export const NAV_CTA = {
  label: "Check Availability",
  href: "https://bookone.io/bishnu-bhaban?bookingEngine=true",
  icon: "lucide:calendar-check",
};
