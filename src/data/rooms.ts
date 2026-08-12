import type {
  SectionContent,
  RoomAmenity,
  RoomType,
} from "@/types";

export const ROOMS_CONTENT: SectionContent = {
  eyebrow: "Rooms & Suites",
  heading: "Rooms at The Queen's Head",
  description:
    "Relax in comfortable, air-conditioned accommodation in the heart of Paharganj. Each room is designed to provide the essential comforts travellers need during a Delhi stay.",
};

export const ROOM_AMENITIES: RoomAmenity[] = [
  { id: "wifi", icon: "lucide:wifi", label: "Free Wi-Fi", category: "basic" },
  { id: "ac", icon: "lucide:snowflake", label: "Air Conditioning", category: "comfort" },
  { id: "tv", icon: "lucide:tv", label: "Flat-Screen TV", category: "entertainment" },
  { id: "workdesk", icon: "lucide:desk", label: "Work Desk", category: "basic" },
  { id: "bathroom", icon: "lucide:shower-head", label: "Private Bathroom", category: "bathroom" },
  { id: "towels", icon: "lucide:droplets", label: "Towels", category: "bathroom" },
  { id: "toiletries", icon: "lucide:sparkles", label: "Toiletries", category: "bathroom" },
  { id: "wardrobe", icon: "lucide:archive", label: "Wardrobe / Storage", category: "basic" },
  { id: "seating", icon: "lucide:armchair", label: "Seating Area", category: "comfort" },
  { id: "jacuzzi", icon: "lucide:bath", label: "Jacuzzi", category: "bathroom" },
  { id: "cityview", icon: "lucide:building-2", label: "City View", category: "comfort" },
  { id: "roomservice", icon: "lucide:bell", label: "Room Service", category: "comfort" },
];

export const ROOMS: RoomType[] = [
  {
    id: "room-deluxe-double",
    slug: "deluxe-double-room",
    name: "Deluxe Double Room",
    tagline: "Comfortable stay for couples and solo travellers",
    description:
      "Our Deluxe Double Rooms offer a comfortable air-conditioned stay with modern essentials for a relaxing night in Paharganj.",
    longDescription:
      "Experience a comfortable stay in New Delhi with our thoughtfully designed Deluxe Double Rooms. The room combines a comfortable sleeping area with modern conveniences including air conditioning, a flat-screen TV, a work desk and a private bathroom — everything you need to relax after exploring Delhi.",
    price: 2800,
    currency: "₹",
    priceUnit: "night",
    size: 200,
    sizeUnit: "sq. ft.",
    maxOccupancy: 3,
    bedType: "Double Bed",
    bedConfig: "1 Double Bed",
    bathroomType: "Private Bathroom",
    floor: "Multiple Floors",
    view: "Interior / Street View",
    images: [
      {
        id: "deluxe-1",
        src: "/deluxeroomimage/DeluxeDoubleRoom.jpg",
        alt: "Deluxe Double Room at The Queen's Head – Paharganj",
        caption: "Deluxe Double Room",
      },
      {
        id: "deluxe-2",
        src: "/deluxeroomimage/DeluxeDoubleRoom1.png",
        alt: "Deluxe Double Room interior",
        caption: "Room facilities",
      },
      {
        id: "deluxe-3",
        src: "/deluxeroomimage/DeluxeDoubleRoom2.png",
        alt: "Deluxe Double Room at The Queen's Head hotel in New Delhi",
        caption: "Comfortable bedding",
      },
      {
        id: "deluxe-4",
        src: "/deluxeroomimage/DeluxeDoubleRoom3.jpg",
        alt: "Deluxe Double Room bed and bedding",
        caption: "Bedding details",
      },
      {
        id: "deluxe-5",
        src: "/deluxeroomimage/DeluxeDoubleRoom4.png",
        alt: "Deluxe Double Room seating and desk area",
        caption: "Seating and work desk",
      },
      {
        id: "deluxe-6",
        src: "/deluxeroomimage/DeluxeDoubleRoom5.png",
        alt: "Deluxe Double Room bathroom",
        caption: "Private bathroom",
      },
      {
        id: "deluxe-7",
        src: "/deluxeroomimage/DeluxeDoubleRoom6.jpg",
        alt: "Deluxe Double Room amenities",
        caption: "Room amenities",
      },
    ],
    amenities: ["wifi", "ac", "tv", "workdesk", "bathroom", "towels", "toiletries", "wardrobe", "roomservice"],
    highlights: [
      "Air-conditioned comfort",
      "Free Wi-Fi",
      "Flat-screen TV",
      "Work desk",
      "Private bathroom",
      "Extra bed available (₹750)",
    ],
    features: [
      "EP (Room Only): ₹2,800 per night",
      "CP (Room + Breakfast): ₹3,500 per night",
      "Breakfast: ₹350 per person",
      "Extra bed: ₹750 per night",
      "Available in 7 rooms: 104, 203, 206, 303, 306, 403, 406",
    ],
    policies: [
      { id: "deluxe-checkin", title: "Check-in / Check-out", description: "Check-in from 12:00 PM. Check-out by 11:00 AM." },
      { id: "deluxe-cancel", title: "Cancellation", description: "Free cancellation if cancelled at least 24 hours prior to check-in." },
      { id: "deluxe-extra", title: "Extra Bed & Children", description: "Extra bed available at ₹750 per night. Children policy to be confirmed at the front desk." },
    ],
    faqs: [
      { id: "deluxe-faq-1", question: "How many guests can stay in the Deluxe Double Room?", answer: "The room comfortably accommodates 2 guests, with an extra bed available for a third guest." },
      { id: "deluxe-faq-2", question: "Does the Deluxe Double Room have air conditioning?", answer: "Yes, all Deluxe Double Rooms are air-conditioned." },
    ],
    nearby: [
      "New Delhi Railway Station — walking distance",
      "Ramakrishna Mission — approx. 0.9 km",
      "Gurudwara Bangla Sahib — approx. 2.2 km",
      "Connaught Place — approx. 2.5 km",
    ],
    popular: true,
    available: true,
  },
  {
    id: "room-premium-double",
    slug: "premium-double-room",
    name: "Premium Double Room",
    tagline: "More space and added comfort",
    description:
      "Our Premium Double Rooms provide extra space and comfort with the same convenient hotel services, ideal for longer Delhi stays.",
    longDescription:
      "Experience a comfortable stay in New Delhi with our thoughtfully designed Premium Double Rooms. Featuring a comfortable sleeping area, air conditioning, a flat-screen TV, a work desk and a private bathroom, these rooms offer added space for travellers who want a little more room to relax.",
    price: 3500,
    currency: "₹",
    priceUnit: "night",
    size: 250,
    sizeUnit: "sq. ft.",
    maxOccupancy: 3,
    bedType: "Double Bed",
    bedConfig: "1 Double Bed",
    bathroomType: "Private Bathroom",
    floor: "Multiple Floors",
    view: "Interior / Street View",
    images: [
      {
        id: "premium-1",
          src: "/PremiumDoubleRoom/PremiumDoubleRoom6.png",
        alt: "Premium Double Room at The Queen's Head – Paharganj",
        caption: "Premium Double Room",
      },
      {
        id: "premium-2",
        src: "/PremiumDoubleRoom/PremiumDoubleRoom1.png",
     
        alt: "Premium Double Room interior",
        caption: "Room facilities",
      },
      {
        id: "premium-3",
        src: "/PremiumDoubleRoom/PremiumDoubleRoom3.png",
        alt: "Premium Double Room at The Queen's Head hotel in New Delhi",
        caption: "Comfortable bedding",
      },
      {
        id: "premium-4",
        src: "/PremiumDoubleRoom/PremiumDoubleRoom4.png",
        alt: "Premium Double Room seating and desk area",
        caption: "Seating and work desk",
      },
      {
        id: "premium-5",
        src: "/PremiumDoubleRoom/PremiumDoubleRoom5.png",
        alt: "Premium Double Room bathroom",
        caption: "Private bathroom",
      },
      {
        id: "premium-6",
      src: "/PremiumDoubleRoom/PremiumDoubleRoom2.png",
        alt: "Premium Double Room amenities",
        caption: "Room amenities",
      },
      {
        id: "premium-7",
        src: "/PremiumDoubleRoom/PremiumDoubleRoom7.png",
        alt: "Premium Double Room bed and bedding",
        caption: "Bedding details",
      },
    ],
    amenities: ["wifi", "ac", "tv", "workdesk", "bathroom", "towels", "toiletries", "wardrobe", "seating", "roomservice"],
    highlights: [
      "Extra space for a relaxing stay",
      "Free Wi-Fi",
      "Air conditioning",
      "Flat-screen TV",
      "Work desk & seating area",
      "Private bathroom",
    ],
    features: [
      "EP (Room Only): ₹3,500 per night",
      "CP (Room + Breakfast): ₹4,200 per night",
      "Breakfast: ₹350 per person",
      "Extra bed: ₹750 per night",
      "Available in 8 rooms: 102, 103, 204, 205, 304, 305, 404, 405",
    ],
    policies: [
      { id: "premium-checkin", title: "Check-in / Check-out", description: "Check-in from 12:00 PM. Check-out by 11:00 AM." },
      { id: "premium-cancel", title: "Cancellation", description: "Free cancellation if cancelled at least 24 hours prior to check-in." },
      { id: "premium-extra", title: "Extra Bed & Children", description: "Extra bed available at ₹750 per night. Children policy to be confirmed at the front desk." },
    ],
    faqs: [
      { id: "premium-faq-1", question: "How many guests can stay in the Premium Double Room?", answer: "The room comfortably accommodates 2 guests, with an extra bed available for a third guest." },
      { id: "premium-faq-2", question: "Is Wi-Fi available in Premium Double Rooms?", answer: "Yes, complimentary Wi-Fi is available throughout the hotel." },
    ],
    nearby: [
      "New Delhi Railway Station — walking distance",
      "Ramakrishna Mission — approx. 0.9 km",
      "Gurudwara Bangla Sahib — approx. 2.2 km",
      "Connaught Place — approx. 2.5 km",
    ],
    popular: true,
    available: true,
  },
  {
    id: "room-premium-city-view",
    slug: "premium-double-room-with-city-view",
    name: "Premium Double Room with City View",
    tagline: "Enjoy views of the city from your room",
    description:
      "Wake up to views of Paharganj and Central Delhi from our Premium Double Rooms with City View, combining comfort with a scenic outlook.",
    longDescription:
      "Experience a comfortable stay in New Delhi with our thoughtfully designed Premium Double Rooms with City View. Enjoy a comfortable sleeping area, air conditioning, a flat-screen TV, a work desk and a private bathroom, all while taking in views of the city from your window.",
    price: 4200,
    currency: "₹",
    priceUnit: "night",
    size: 250,
    sizeUnit: "sq. ft.",
    maxOccupancy: 3,
    bedType: "Double Bed",
    bedConfig: "1 Double Bed",
    bathroomType: "Private Bathroom",
    floor: "2nd – 4th Floor",
    view: "City View",
    images: [
      {
        id: "city-1",
        src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView.png",
        alt: "Premium Double Room with City View at The Queen's Head – Paharganj",
        caption: "Premium Double Room with City View",
      },
      {
        id: "city-2",
        src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView1.png",
        alt: "City View room interior",
        caption: "Room facilities",
      },
      {
        id: "city-3",
        src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView2.png",
        alt: "City View room at The Queen's Head hotel in New Delhi",
        caption: "Comfortable bedding",
      },
      {
        id: "city-4",
        src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView3.png",
        alt: "City View room seating and desk area",
        caption: "Seating and work desk",
      },
      {
        id: "city-5",
        src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView4.png",
        alt: "City View room bathroom",
        caption: "Private bathroom",
      },
      {
        id: "city-6",
        src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView5.png",
        alt: "City View room amenities",
        caption: "Room amenities",
      },
      {
        id: "city-7",
        src: "/PremiumDoubleRoomwithCityView/PremiumDoubleRoomwithCityView6.png",
        alt: "City View room bed and bedding",
        caption: "Bedding details",
      },
    ],
    amenities: ["wifi", "ac", "tv", "workdesk", "bathroom", "towels", "toiletries", "wardrobe", "seating", "cityview", "roomservice"],
    highlights: [
      "City-facing windows",
      "Free Wi-Fi",
      "Air conditioning",
      "Flat-screen TV",
      "Work desk & seating area",
      "Private bathroom",
    ],
    features: [
      "EP (Room Only): ₹4,200 per night",
      "CP (Room + Breakfast): ₹4,800 per night",
      "Breakfast: ₹350 per person",
      "Extra bed: ₹750 per night",
      "Available in 6 rooms: 201, 202, 301, 302, 401, 402",
    ],
    policies: [
      { id: "city-checkin", title: "Check-in / Check-out", description: "Check-in from 12:00 PM. Check-out by 11:00 AM." },
      { id: "city-cancel", title: "Cancellation", description: "Free cancellation if cancelled at least 24 hours prior to check-in." },
      { id: "city-extra", title: "Extra Bed & Children", description: "Extra bed available at ₹750 per night. Children policy to be confirmed at the front desk." },
    ],
    faqs: [
      { id: "city-faq-1", question: "Do all City View rooms have a view?", answer: "Yes, these rooms are located on the upper floors and face the city." },
      { id: "city-faq-2", question: "How many guests can stay in the City View room?", answer: "The room comfortably accommodates 2 guests, with an extra bed available for a third guest." },
    ],
    nearby: [
      "New Delhi Railway Station — walking distance",
      "Ramakrishna Mission — approx. 0.9 km",
      "Gurudwara Bangla Sahib — approx. 2.2 km",
      "Connaught Place — approx. 2.5 km",
    ],
    popular: true,
    available: true,
  },
  {
    id: "room-triple-suite",
    slug: "triple-suite-with-jacuzzi",
    name: "Triple Suite with Jacuzzi",
    tagline: "Our signature suite for a relaxing stay",
    description:
      "Our signature Triple Suite features a private jacuzzi, generous space and premium comfort — ideal for families and those seeking a special stay.",
    longDescription:
      "Experience a comfortable stay in New Delhi with our signature Triple Suite with Jacuzzi. This spacious suite combines a comfortable sleeping area for up to three guests with a private jacuzzi, air conditioning, a flat-screen TV, a work desk and a private bathroom — perfect for families and guests looking for an extra touch of relaxation.",
    price: 5200,
    currency: "₹",
    priceUnit: "night",
    size: 400,
    sizeUnit: "sq. ft.",
    maxOccupancy: 4,
    bedType: "Double + Single Beds",
    bedConfig: "1 Double Bed + 1 Single Bed",
    bathroomType: "Private Bathroom with Jacuzzi",
    floor: "1st Floor",
    view: "Interior / Street View",
    images: [
      {
        id: "suite-1",
        src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi.png",
        alt: "Triple Suite with Jacuzzi at The Queen's Head – Paharganj",
        caption: "Triple Suite with Jacuzzi",
      },
      {
        id: "suite-2",
        src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi1.png",
        alt: "Triple Suite interior",
        caption: "Suite facilities",
      },
      {
        id: "suite-3",
        src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi2.png",
        alt: "Triple Suite at The Queen's Head hotel in New Delhi",
        caption: "Spacious suite",
      },
      {
        id: "suite-4",
        src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi3.png",
        alt: "Triple Suite seating and desk area",
        caption: "Seating and work desk",
      },
      {
        id: "suite-5",
        src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi4.png",
        alt: "Triple Suite private bathroom",
        caption: "Private bathroom",
      },
      {
        id: "suite-6",
        src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi5.png",
        alt: "Triple Suite jacuzzi",
        caption: "Private jacuzzi",
      },
      {
        id: "suite-7",
        src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi6.png",
        alt: "Triple Suite amenities",
        caption: "Suite amenities",
      },
      {
        id: "suite-8",
        src: "/TripleSuitewithJacuzzi/TripleSuitewithJacuzzi7.png",
        alt: "Triple Suite bed and bedding",
        caption: "Bedding details",
      },
    ],
    amenities: ["wifi", "ac", "tv", "workdesk", "bathroom", "towels", "toiletries", "wardrobe", "seating", "jacuzzi", "roomservice"],
    highlights: [
      "Private jacuzzi in the room",
      "Spacious layout for families",
      "Free Wi-Fi",
      "Air conditioning",
      "Flat-screen TV",
      "Work desk & seating area",
    ],
    features: [
      "EP (Room Only): ₹5,200 per night",
      "CP (Room + Breakfast): ₹6,200 per night",
      "Breakfast: ₹350 per person",
      "Extra bed: ₹750 per night",
      "Available in 1 room: 101",
    ],
    policies: [
      { id: "suite-checkin", title: "Check-in / Check-out", description: "Check-in from 12:00 PM. Check-out by 11:00 AM." },
      { id: "suite-cancel", title: "Cancellation", description: "Free cancellation if cancelled at least 24 hours prior to check-in." },
      { id: "suite-extra", title: "Extra Bed & Children", description: "Extra bed available at ₹750 per night. Children policy to be confirmed at the front desk." },
    ],
    faqs: [
      { id: "suite-faq-1", question: "Does the Triple Suite have a jacuzzi?", answer: "Yes, the Triple Suite features a private jacuzzi." },
      { id: "suite-faq-2", question: "How many guests can stay in the Triple Suite?", answer: "The suite comfortably accommodates up to 4 guests with the available bedding." },
    ],
    nearby: [
      "New Delhi Railway Station — walking distance",
      "Ramakrishna Mission — approx. 0.9 km",
      "Gurudwara Bangla Sahib — approx. 2.2 km",
      "Connaught Place — approx. 2.5 km",
    ],
    popular: true,
    available: true,
    tag: "Signature",
  },
];

export function getRoomBySlug(slug: string): RoomType | undefined {
  return ROOMS.find((room) => room.slug === slug);
}

export function getAllRooms(): RoomType[] {
  return ROOMS;
}

export function getPopularRooms(): RoomType[] {
  return ROOMS.filter((room) => room.popular);
}
