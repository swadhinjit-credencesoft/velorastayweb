// ─── Navigation ───────────────────────────────────────────
export interface NavLink {
  id: string;
  label: string;
  href: string;
  icon?: string;
}

export interface NavChildLink {
  id: string;
  label: string;
  href: string;
  description?: string;
  icon?: string;
}

export interface NavGroup {
  id: string;
  label: string;
  href?: string;
  children: NavChildLink[];
}

export interface SocialLink {
  id: string;
  icon: string;
  href: string;
  label: string;
}

export interface FooterLink {
  id: string;
  label: string;
  href: string;
}

export interface FooterGroup {
  id: string;
  title: string;
  links: FooterLink[];
}

// ─── Site / Contact ──────────────────────────────────────
export interface SiteInfo {
  name: string;
  tagline: string;
  description: string;
  url: string;
  phone: string;
  whatsapp: string;
  email: string;
  address: Address;
  geo: GeoCoordinates;
  checkIn: string;
  checkOut: string;
  rating: number;
  reviewCount: number;
}

export interface Address {
  street: string;
  area: string;
  city: string;
  state: string;
  pincode: string;
  country: string;
  full: string;
}

export interface GeoCoordinates {
  latitude: number;
  longitude: number;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  twitter: string;
  youtube: string;
  tripadvisor: string;
  google: string;
}

// ─── Hero ─────────────────────────────────────────────────
export interface HeroSlide {
  id: string;
  image: string;
  title: string;
  subtitle: string;
  cta: { label: string; href: string };
}

export interface HeroStat {
  id: string;
  value: string;
  label: string;
  icon: string;
}

// ─── Rooms ────────────────────────────────────────────────
export interface RoomAmenity {
  id: string;
  icon: string;
  label: string;
  category: "basic" | "bathroom" | "entertainment" | "food" | "comfort" | "accessibility";
}

export interface RoomType {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  currency: string;
  priceUnit: string;
  size: number;
  sizeUnit: string;
  maxOccupancy: number;
  bedType: string;
  bedConfig: string;
  bathroomType: string;
  floor: string;
  view: string;
  images: RoomImage[];
  amenities: string[];
  highlights: string[];
  features: string[];
  policies: RoomPolicy[];
  faqs: FaqItem[];
  nearby: string[];
  popular: boolean;
  available: boolean;
  tag?: string;
}

export interface RoomImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface RoomPolicy {
  id: string;
  title: string;
  description: string;
}

// ─── Villas ────────────────────────────────────────────────
export interface VillaAmenity {
  id: string;
  icon: string;
  label: string;
  category: "outdoor" | "basic" | "entertainment" | "kitchen" | "service" | "bathroom" | "comfort";
}

export interface VillaType {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  originalPrice?: number;
  currency: string;
  priceUnit: string;
  bedrooms: number;
  bathrooms: number;
  maxOccupancy: number;
  bedConfig?: string;
  view?: string;
  size?: number;
  sizeUnit?: string;
  images: RoomImage[];
  amenities: string[];
  highlights: string[];
  features: string[];
  policies: RoomPolicy[];
  faqs: FaqItem[];
  nearby: string[];
  popular: boolean;
  available: boolean;
  tag?: string;
}

// ─── Dining ───────────────────────────────────────────────
export interface DiningVenue {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  cuisine: string;
  timing: string;
  days: string;
  capacity: number;
  priceRange: string;
  image: string;
  gallery: RoomImage[];
  menu: MenuItem[];
  specialties: string[];
  features: string[];
  faqs: FaqItem[];
}

export interface MenuItem {
  id: string;
  category: string;
  items: MenuFoodItem[];
}

export interface MenuFoodItem {
  id: string;
  name: string;
  description: string;
  price: string;
  veg: boolean;
  popular?: boolean;
}

// ─── Events ───────────────────────────────────────────────
export interface EventType {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  gallery: RoomImage[];
  capacity: number;
  hallSize: string;
  priceRange: string;
  packages: EventPackage[];
  features: string[];
  faqs: FaqItem[];
}

export interface EventPackage {
  id: string;
  name: string;
  description: string;
  price: string;
  includes: string[];
  popular?: boolean;
}

// ─── Facilities ───────────────────────────────────────────
export interface Facility {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  image?: string;
  features: string[];
  timing?: string;
  category: "outdoor" | "entertainment" | "kitchen" | "service" | "bathroom" | "comfort" | "transport" | "services" | "safety" | "family" | "basic";
}

// ─── Experiences ──────────────────────────────────────────
export interface Experience {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  duration: string;
  price: string;
  groupSize: string;
  includes: string[];
  highlights: string[];
  faqs: FaqItem[];
}

// ─── Nearby Attractions ───────────────────────────────────
export interface NearbyAttraction {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  distance: string;
  travelTime: string;
  category: string;
  highlights: string[];
  tips?: string;
  mapUrl: string;
}

// ─── Tour Packages ────────────────────────────────────────
export interface TourPackage {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  duration: string;
  price: number;
  originalPrice?: number;
  currency: string;
  groupSize: string;
  includes: string[];
  itinerary: TourItinerary[];
  highlights: string[];
  faqs: FaqItem[];
}

export interface TourItinerary {
  id: string;
  time: string;
  activity: string;
  description: string;
}

// ─── Offers ───────────────────────────────────────────────
export interface Offer {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  discount: string;
  validFrom: string;
  validUntil: string;
  code: string;
  terms: string[];
  features: string[];
  popular?: boolean;
}

// ─── Gallery ──────────────────────────────────────────────
export interface GalleryCategory {
  id: string;
  slug: string;
  name: string;
  count: number;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  caption?: string;
}

// ─── Blog ─────────────────────────────────────────────────
export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  category: string;
  tags: string[];
  author: BlogAuthor;
  publishedAt: string;
  readTime: string;
  featured?: boolean;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}

export interface BlogAuthor {
  name: string;
  image: string;
  bio: string;
}

// ─── Reviews ──────────────────────────────────────────────
export interface Review {
  id: string;
  author: string;
  avatar?: string;
  platform: "google" | "booking" | "agoda" | "tripadvisor" | "airbnb" | "makemytrip" | "goibibo" | "justdial" | "website";
  rating: number;
  date: string;
  text: string;
  title?: string;
  verified?: boolean;
}

export interface ReviewPlatform {
  id: string;
  name: string;
  icon: string;
  rating: number;
  reviewCount: number;
  url: string;
}

// ─── FAQ ──────────────────────────────────────────────────
export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FaqCategory {
  id: string;
  name: string;
  icon: string;
  items: FaqItem[];
}

// ─── Contact ──────────────────────────────────────────────
export interface ContactInfo {
  label: string;
  icon: string;
  value: string;
  href: string;
  primary?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  social?: { platform: string; url: string }[];
}

// ─── About ────────────────────────────────────────────────
export interface AboutStory {
  title: string;
  description: string;
  image: string;
}

export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface Award {
  id: string;
  title: string;
  organization: string;
  year: string;
  image?: string;
  description: string;
}

// ─── Booking ──────────────────────────────────────────────
export interface BookingDates {
  checkIn: string | null;
  checkOut: string | null;
}

export interface BookingGuests {
  adults: number;
  children: number;
  rooms: number;
}

export interface BookingState {
  dates: BookingDates;
  guests: BookingGuests;
  selectedRoomId: string | null;
  promoCode: string;
  step: "search" | "select" | "details" | "payment" | "confirmation";
}

// ─── UI State ─────────────────────────────────────────────
export interface FilterState {
  priceRange: [number, number];
  amenities: string[];
  bedType: string;
  occupancy: number;
  sortBy: "price-low" | "price-high" | "rating" | "popular";
}

// ─── SEO / Schema ─────────────────────────────────────────
export interface SeoMetadata {
  title: string;
  description: string;
  keywords: string[];
  canonical: string;
  ogImage: string;
  ogType: string;
  twitterCard: string;
}

// ─── Utility ──────────────────────────────────────────────
export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface SectionContent {
  eyebrow: string;
  heading: string;
  description: string;
}

export interface CtaButton {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "outline" | "ghost";
  icon?: string;
}

// ─── Award/Badge ──────────────────────────────────────────
export interface TrustBadge {
  id: string;
  icon: string;
  label: string;
  value?: string;
}
