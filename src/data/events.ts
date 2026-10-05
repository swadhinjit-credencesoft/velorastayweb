import type { EventType, SectionContent } from "@/types";

export const EVENTS_CONTENT: SectionContent = {
  eyebrow: "Events & Celebrations",
  heading: "Spacious Banquet & Event Venue in Puri",
  description:
    "Host religious ceremonies, Upanayana (thread ceremonies), wedding party stays, yatra groups, and sacred celebrations at Bishnu Bhaban. Convenient banquet hall arrangements and multi-room group stays located right at the West Gate of Shri Jagannath Temple, Puri.",
};

export const EVENT_TYPES: EventType[] = [
  {
    id: "evt-banquet",
    slug: "banquet-hall-events",
    name: "Banquet Hall & Celebrations",
    tagline: "Spacious venue for family functions, rituals & celebrations in Puri",
    description:
      "Host sacred ceremonies, Upanayana, family functions, birthday gatherings, and post-darshan feasts with attached room bookings.",
    longDescription:
      "Bishnu Bhaban offers a spacious banquet hall and gathering venue combined with comfortable multi-room accommodation just steps away from the Shri Jagannath Temple West Gate. Whether you are hosting a thread ceremony, religious puja, wedding party stay, or family feast, our property provides seamless group coordination, flexible seating arrangements, and dedicated front desk support from 7 AM to 11 PM.",
    image: "/bishnyhomeimage/homehero1.png",
    gallery: [
      { id: "bnq-img-1", src: "/bishnyhomeimage/homehero1.png", alt: "Banquet & Gathering Space at Bishnu Bhaban" },
      { id: "bnq-img-2", src: "/bishnyhomeimage/homehero22.webp", alt: "Group celebrations at Bishnu Bhaban" },
    ],
    capacity: 100,
    hallSize: "Banquet & Function Hall",
    priceRange: "Custom Packages Available",
    packages: [
      {
        id: "bnq-pkg-standard",
        name: "Standard Hall Package",
        description: "Spacious hall arrangement with multi-room booking for families.",
        price: "On Request",
        includes: [
          "Spacious event & gathering area (up to 100 guests)",
          "Multiple room allocation under one booking",
          "Dedicated assistance from front desk (7 AM–11 PM)",
          "Luggage storage and group coordination",
        ],
        popular: true,
      },
      {
        id: "bnq-pkg-full",
        name: "Full Venue & Multi-Room Package",
        description: "Exclusive event space plus multi-room block booking for extended families.",
        price: "On Request",
        includes: [
          "Dedicated hall area for morning & evening functions",
          "Block booking of AC & Non-AC guest rooms",
          "Early luggage drop-off & flexible checkout coordination",
          "Continuous hot water & WiFi across booked rooms",
        ],
        popular: false,
      },
    ],
    features: [
      "Capacity up to 100 Guests",
      "Steps to West Gate",
      "Multi-Room Bookings",
      "Front Desk 7 AM–11 PM",
      "Luggage Storage",
    ],
    faqs: [
      {
        id: "bnq-faq-1",
        question: "How many guests can the banquet hall accommodate?",
        answer: "Our event and gathering space comfortably accommodates up to 100 guests depending on the seating layout and ritual requirements.",
      },
      {
        id: "bnq-faq-2",
        question: "Can we book guest rooms and the event space together?",
        answer: "Yes, we specialize in combined room stays and event space packages so your entire family or group stays comfortably together under one reservation.",
      },
      {
        id: "bnq-faq-3",
        question: "What are the cancellation and booking adjustment terms?",
        answer: "Cancellation charges apply as per our policy. Where permitted, eligible cancelled amounts can be adjusted against a future stay within one year, subject to room availability.",
      },
    ],
  },
  {
    id: "evt-upanayana",
    slug: "sacred-ceremonies-upanayana",
    name: "Sacred Ceremonies & Upanayana",
    tagline: "Ideal sacred space for thread ceremonies, havans & ritual feasts",
    description:
      "Perform traditional Vedic rituals, Bratopanayana, and puja ceremonies steps away from the sanctum of Shri Jagannath Temple.",
    longDescription:
      "Performing sacred rites in Puri is deeply auspicious. Bishnu Bhaban's proximity to the West Gate of Jagannath Temple makes it the premier choice for families organizing Upanayana (Sacred Thread Ceremonies), Annaprashan, Sudhi Kriya, or special devotional havans. We provide dedicated space for pandits and family rituals, along with comfortable rooms for outstation guests and elders.",
    image: "/bishnyhomeimage/fascilitypuridarsan.png",
    gallery: [
      { id: "upa-img-1", src: "/bishnyhomeimage/fascilitypuridarsan.png", alt: "Sacred ceremonies near Jagannath Temple" },
      { id: "upa-img-2", src: "/bishnyhomeimage/homehero1.png", alt: "Ritual space at Bishnu Bhaban" },
    ],
    capacity: 75,
    hallSize: "Puja & Ritual Gathering Space",
    priceRange: "Custom Ritual Packages",
    packages: [
      {
        id: "upa-pkg-thread",
        name: "Upanayana Ceremony Package",
        description: "Hall arrangement with morning havan space and guest accommodations.",
        price: "On Request",
        includes: [
          "Allocated ritual space for havan and Vedic ceremonies",
          "Assistance with local priest / pandit guidance & temple timings",
          "Multi-bed AC rooms for outstation relatives",
          "Dedicated 24-hr hot water for early morning ritual baths",
        ],
        popular: true,
      },
      {
        id: "upa-pkg-puja",
        name: "Puja & Mahaprasad Feast Package",
        description: "Spacious seating for post-darshan family Mahaprasad gathering.",
        price: "On Request",
        includes: [
          "Hall setup for traditional sitting / dining arrangements",
          "Coordination for Anandabazar Mahaprasad intake",
          "Flexible check-in where available",
          "Luggage care during temple darshan visits",
        ],
        popular: false,
      },
    ],
    features: [
      "Traditional Ritual Space",
      "Near Temple West Gate",
      "24-Hour Hot Water",
      "Family Multi-Bed Rooms",
      "Dedicated Assistance",
    ],
    faqs: [
      {
        id: "upa-faq-1",
        question: "Is open space available for havan or sacred fire rites?",
        answer: "Yes, we allocate suitable well-ventilated areas for conducting havans and traditional rituals.",
      },
      {
        id: "upa-faq-2",
        question: "Can you assist with Anandabazar Mahaprasad arrangements?",
        answer: "Our front desk can guide your family on procuring and arranging Mahaprasad from the temple to enjoy together in our gathering space.",
      },
    ],
  },
  {
    id: "evt-marriage",
    slug: "marriage-group-stays",
    name: "Wedding & Marriage Group Stays",
    tagline: "Comfortable multi-room accommodations for baraat & wedding guests",
    description:
      "Host your wedding guests and baraat party in one central location with unified booking and group coordination.",
    longDescription:
      "Planning a destination wedding or temple marriage in Puri requires reliable group logistics. Bishnu Bhaban accommodates marriage parties and baraat groups with ease. Book multiple air-conditioned and non-AC rooms under a single contact, ensuring your entire wedding party stays together close to Grand Road and the temple.",
    image: "/bishnyhomeimage/homehero22.webp",
    gallery: [
      { id: "mar-img-1", src: "/bishnyhomeimage/homehero22.webp", alt: "Marriage Group Stay in Puri" },
      { id: "mar-img-2", src: "/bishnyhomeimage/homehero1.png", alt: "Bishnu Bhaban Rooms for Wedding Guests" },
    ],
    capacity: 100,
    hallSize: "Multi-Room Block & Common Gathering Area",
    priceRange: "Special Group Tariff",
    packages: [
      {
        id: "mar-pkg-block",
        name: "Wedding Group Block",
        description: "Entire floor or multiple room cluster under single billing.",
        price: "On Request",
        includes: [
          "Single point of contact & consolidated GST invoicing",
          "Room allocation based on age & elder mobility needs",
          "Luggage holding before check-in and post-checkout",
          "24/7 power backup and hot water",
        ],
        popular: true,
      },
      {
        id: "mar-pkg-extended",
        name: "Extended Marriage Party Stay",
        description: "Multi-day group stay for pre-wedding rituals and temple visits.",
        price: "On Request",
        includes: [
          "Dedicated coordination for arrival of multiple vehicle groups",
          "Priority housekeeping and linen service",
          "Temple entry and timing assistance for outstation relatives",
          "Flexible check-out where room schedule allows",
        ],
        popular: false,
      },
    ],
    features: [
      "Single Billing & Check-in",
      "Multi-Bed Family Rooms",
      "Power Backup & WiFi",
      "Grand Road Location",
      "Luggage Security",
    ],
    faqs: [
      {
        id: "mar-faq-1",
        question: "How many rooms can be blocked for wedding guests?",
        answer: "We offer multi-room block bookings subject to advance reservation. Contact us early during peak wedding and festival seasons to reserve adequate rooms.",
      },
      {
        id: "mar-faq-2",
        question: "Can we get GST invoices for marriage group bookings?",
        answer: "Yes, official GST invoices are provided upon request with your company or personal GSTIN.",
      },
    ],
  },
  {
    id: "evt-pilgrim",
    slug: "pilgrim-groups",
    name: "Pilgrim & Yatra Groups",
    tagline: "Practical logistics & early-morning coordination for temple yatras",
    description:
      "Accommodation for pilgrim groups and yatra organizers travelling the Odisha temple circuit with pre-dawn start support.",
    longDescription:
      "Organizing a pilgrim group on the Odisha temple circuit requires precision and dependable support: rooms ready upon arrival, secure luggage storage while you visit the sanctum or beach, and a front desk open from 7 AM to 11 PM to facilitate early morning darshan. Bishnu Bhaban is located right at the West Gate, saving your group precious walking time.",
    image: "/bishnyhomeimage/homehero1.png",
    gallery: [
      { id: "pil-img-1", src: "/bishnyhomeimage/homehero1.png", alt: "Pilgrim group arriving at Bishnu Bhaban" },
      { id: "pil-img-2", src: "/bishnyhomeimage/fascilitypuridarsan.png", alt: "Rooms arranged for a yatra group" },
    ],
    capacity: 60,
    hallSize: "Group Stay & Gathering Arrangement",
    priceRange: "Pilgrim Group Rates",
    packages: [
      {
        id: "pil-basic",
        name: "Yatra Group Stay",
        description: "Rooms booked together with safe luggage holding between checkout and train departure.",
        price: "On Request",
        includes: [
          "Multiple rooms under a single reservation",
          "Luggage storage after checkout until bus/train departure",
          "Advance notice of darshan, mangala alati & gate timings",
          "Assistance for early morning group departures",
        ],
        popular: true,
      },
      {
        id: "pil-circuit",
        name: "Odisha Circuit Group Package",
        description: "Stay plus logistical advice for Konark Sun Temple, Dhauli, and Chilika Lake.",
        price: "On Request",
        includes: [
          "All features of the Yatra Group Stay",
          "Practical travel route advice for Konark, Lingaraj & Chilika",
          "Guidance on temple dress codes, offerings & entry rules",
          "Flexible check-out coordination for tight travel itineraries",
        ],
        popular: false,
      },
    ],
    features: [
      "Direct West Gate Access",
      "Luggage Holding",
      "Darshan Guidance",
      "Early Morning Support",
      "24-Hour Hot Water",
    ],
    faqs: [
      {
        id: "pil-faq-1",
        question: "How early should yatra organizers book for Rath Yatra or winter season?",
        answer: "For Rath Yatra, Panchuka, and winter pilgrimage season, we strongly recommend booking several weeks in advance as Grand Road hotels fill rapidly.",
      },
      {
        id: "pil-faq-2",
        question: "Can we safely store our group luggage after checkout?",
        answer: "Yes, complimentary luggage storage is available behind our front desk after checkout while your group completes darshan or shopping.",
      },
      {
        id: "pil-faq-3",
        question: "Are pets or smoking allowed during group stays?",
        answer: "No. Pets are not allowed anywhere on hotel premises, and smoking is strictly prohibited inside all rooms and indoor areas.",
      },
    ],
  },
];

export function getEventBySlug(slug: string): EventType | undefined {
  return EVENT_TYPES.find((event) => event.slug === slug);
}

export function getAllEvents(): EventType[] {
  return EVENT_TYPES;
}
