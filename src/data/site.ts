import type { SiteInfo, SocialLinks, HeroSlide, HeroStat, SocialLink, TrustBadge, NavLink } from "@/types";
import { STOCK_IMAGES } from "@/data/images";

export const SITE_INFO: SiteInfo = {
  name: "Y Hotels Signature",
  ownerName: "Vishal Sharma",
  gstNumber: "21AACFY5722D1ZL",
  tagline: "A signature stay in Jharsuguda",
  description: "Y Hotels Signature offers Deluxe, Super Deluxe and Executive rooms at Mangalam Tower, Sarbahal Road, Jharsuguda, Odisha.",
  url: "https://yhotels.in",
  phone: "+91 9124674120",
  listingPhone: "+91 8455007740",
  email: "connect@yhotels.in",
  address: {
    street: "Mangalam Tower, Sarbahal Road",
    area: "Marwari Para",
    city: "Jharsuguda",
    state: "Odisha",
    pincode: "768201",
    country: "India",
    full: "Y Hotels Signature, Mangalam Tower, Sarbahal Road, Marwari Para, Jharsuguda, Odisha 768201, India",
  },
  checkIn: "01:00 PM",
  checkOut: "11:00 AM",
  extraPersonCharge: 700,
  rating: 0,
  reviewCount: 0,
};

export const SOCIAL_LINKS: SocialLinks = {
  facebook: "", instagram: "", twitter: "", youtube: "", tripadvisor: "",
  google: "https://maps.app.goo.gl/DEUPd3JSVoRDQDLv6",
};

export const SITE_ASSETS = {
  logo: "/yhotel.png",
  logoLight: "/yhotel.png",
  favicon: "/yhotel.png",
  aboutImage: STOCK_IMAGES.lobby,
  roomsPreviewImage: STOCK_IMAGES.deluxe,
  eventsImage: STOCK_IMAGES.executive,
  contactMapImage: STOCK_IMAGES.lobby,
  testimonialBackground: STOCK_IMAGES.superDeluxe,
  notFoundImage: STOCK_IMAGES.deluxe,
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "hero-rooms",
    image: STOCK_IMAGES.heroRoom,
    title: "A signature stay in Jharsuguda",
    subtitle: "Choose from 34 Deluxe, Super Deluxe and Executive rooms at Mangalam Tower.",
    cta: { label: "Explore Rooms", href: "/rooms" },
  },
  {
    id: "hero-comfort",
    image: STOCK_IMAGES.heroLobby,
    title: "Room for every kind of stay",
    subtitle: "Three room categories, with meal plan options available. Contact the hotel for availability.",
    cta: { label: "Call the Hotel", href: "tel:+919124674120" },
  },
];

export const HERO_STATS: HeroStat[] = [
  { id: "rooms", value: "34", label: "Guest Rooms", icon: "lucide:bed-double" },
  { id: "categories", value: "3", label: "Room Categories", icon: "lucide:layout-grid" },
  { id: "checkin", value: "1 PM", label: "Check-in", icon: "lucide:clock" },
  { id: "checkout", value: "11 AM", label: "Check-out", icon: "lucide:calendar-check" },
];

export const HERO_SOCIAL_LINKS: SocialLink[] = [];
export const TRUST_BADGES: TrustBadge[] = [
  { id: "room-count", icon: "lucide:bed-double", label: "34 rooms", value: "Three categories" },
  { id: "meal-plans", icon: "lucide:utensils", label: "Meal plans", value: "EP · CP · MAP · AP" },
  { id: "checkin", icon: "lucide:clock", label: "Check-in", value: "1:00 PM" },
  { id: "checkout", icon: "lucide:calendar-check", label: "Check-out", value: "11:00 AM" },
];
export const PROPERTY_FEATURES = [
  { id: "room-choice", icon: "lucide:layout-grid", title: "Three room categories", description: "Choose Deluxe, Super Deluxe or Executive accommodation." },
  { id: "meal-plans", icon: "lucide:utensils", title: "Meal plan options", description: "EP, CP, MAP and AP plans are available. Contact the hotel to confirm rates." },
  { id: "location", icon: "lucide:map-pin", title: "Jharsuguda location", description: "Find us at Mangalam Tower, Sarbahal Road, Marwari Para." },
  { id: "occupancy", icon: "lucide:users", title: "Room for your group", description: "Maximum occupancy ranges from three to five guests by room category." },
];

export const GOOGLE_MAPS_URL = "https://www.google.com/maps?q=Y+Hotels+Signature,+Mangalam+Tower,+Sarbahal+Road,+Jharsuguda,+Odisha&output=embed";
export const NAV_LINKS: NavLink[] = [
  { id: "home", label: "Home", href: "/" },
  { id: "rooms", label: "Rooms", href: "/rooms" },
  { id: "facilities", label: "Facilities", href: "/facilities" },
  { id: "about", label: "About", href: "/about" },
  { id: "contact", label: "Contact", href: "/contact" },
];
export const BOOKING_URL = "tel:+919124674120";
