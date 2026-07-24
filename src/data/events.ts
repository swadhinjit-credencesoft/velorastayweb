import type { EventType, SectionContent } from "@/types";

export const EVENTS_CONTENT: SectionContent = {
  eyebrow: "Events & Celebrations",
  heading: "Make Every Occasion Special",
  description:
    "Host your most memorable events at Vellora Stays. From intimate gatherings to grand celebrations, our luxury villas and dedicated planning team ensure every occasion is executed flawlessly in a stunning Pawna Lake setting.",
};

export const EVENT_TYPES: EventType[] = [
  {
    id: "evt-birthday",
    slug: "birthday-parties",
    name: "Birthday Parties",
    tagline: "Celebrate another year of joy in a stunning villa",
    description:
      "Throw an unforgettable birthday bash in our luxurious villas with stunning Pawna Lake views, private pool, and dedicated event coordination.",
    longDescription:
      "Make your birthday celebration one to remember at Vellora Stays. Whether it is a milestone birthday for a loved one or a fun-filled kids' party, our villas can be transformed to match any theme or style. From stunning balloon décor and custom cakes to a lively BBQ under the stars, we take care of the details so you can enjoy every moment. Choose from our curated packages or let us create a bespoke celebration tailored to your vision. With a private pool, spacious garden, and breathtaking lake views, your birthday party will be the talk of the town.",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070",
    gallery: [
      { id: "bday-img-1", src: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070", alt: "Birthday party decoration at Vellora Stays villa" },
      { id: "bday-img-2", src: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070", alt: "Birthday celebration with cake and friends" },
      { id: "bday-img-3", src: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070", alt: "Kids birthday party by the pool" },
    ],
    capacity: 30,
    hallSize: "Private Villa",
    priceRange: "₹15,000 - ₹50,000",
    packages: [
      {
        id: "bday-basic",
        name: "Basic",
        description: "A simple yet joyful birthday setup for small gatherings.",
        price: "₹15,000",
        includes: [
          "Basic balloon & streamer décor",
          "Custom birthday cake (1 kg)",
          "BBQ setup with charcoal",
          "Photography for 2 hours",
          "Snack platter & soft drinks",
        ],
        popular: false,
      },
      {
        id: "bday-premium",
        name: "Premium",
        description: "A vibrant celebration package with full catering and entertainment.",
        price: "₹30,000",
        includes: [
          "Theme-based decoration",
          "Custom birthday cake (2 kg)",
          "Private chef for dinner",
          "Photography & videography",
          "Bonfire setup with music",
        ],
        popular: true,
      },
      {
        id: "bday-royal",
        name: "Royal",
        description: "The grandest birthday experience with luxury décor and live entertainment.",
        price: "₹50,000",
        includes: [
          "Luxury themed décor with backdrops",
          "Designer cake (3 kg)",
          "Private chef + live entertainment",
          "Full-day photography & videography",
          "Premium dinner for 30 guests",
        ],
        popular: false,
      },
    ],
    features: ["Decoration", "Cake", "BBQ", "Photography", "Private Pool"],
    faqs: [
      {
        id: "bday-faq-1",
        question: "Can we choose our own theme?",
        answer: "Absolutely! Share your vision with our team and we will create a custom theme to match your vision and the beautiful Pawna Lake setting.",
      },
      {
        id: "bday-faq-2",
        question: "Is there a pool party option?",
        answer: "Yes! Our private pools are perfect for pool birthday parties. We can arrange pool floats, music, and a poolside BBQ setup.",
      },
      {
        id: "bday-faq-3",
        question: "Can we bring our own cake?",
        answer: "Yes, outside cakes are welcome. We can also store the cake until it is time for the cut. We recommend ordering from our partner bakeries for the best results.",
      },
    ],
  },
  {
    id: "evt-anniversary",
    slug: "anniversary-celebrations",
    name: "Anniversary Celebrations",
    tagline: "Honor your love story in a stunning lakeside villa",
    description:
      "Celebrate your milestones with romantic setups, candlelight dinners under the stars, and personalised touches for your special day at Pawna Lake.",
    longDescription:
      "Every anniversary marks a beautiful chapter in your love story, and it deserves to be celebrated with warmth and elegance. Vellora Stays offers intimate villa settings adorned with romantic décor, candlelight dinner arrangements, and thoughtful touches that make your celebration truly personal. Whether it is your first anniversary or your silver jubilee, our team curates every detail — from fresh floral arrangements to personalised playlists — to create an evening filled with love, laughter, and cherished memories by the lake.",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070",
    gallery: [
      { id: "ann-img-1", src: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070", alt: "Anniversary romantic dinner setup at villa" },
      { id: "ann-img-2", src: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070", alt: "Flower decoration for anniversary celebration" },
    ],
    capacity: 20,
    hallSize: "Private Villa",
    priceRange: "₹20,000 - ₹60,000",
    packages: [
      {
        id: "ann-silver",
        name: "Silver",
        description: "A warm and intimate celebration for couples and close family.",
        price: "₹20,000",
        includes: [
          "Romantic table setup with candles",
          "Bouquet of fresh flowers",
          "Customised anniversary cake",
          "Photography for 2 hours",
          "Special dinner menu for 20 guests",
        ],
        popular: false,
      },
      {
        id: "ann-gold",
        name: "Gold",
        description: "An elegant celebration with premium décor and a candlelight dinner experience.",
        price: "₹40,000",
        includes: [
          "Full villa romantic décor",
          "Candlelight dinner under the stars",
          "Floral arrangements & centrepieces",
          "Photography & videography",
          "Premium dinner buffet for 30 guests",
        ],
        popular: true,
      },
      {
        id: "ann-platinum",
        name: "Platinum",
        description: "A luxurious anniversary celebration with bespoke décor and live entertainment.",
        price: "₹60,000",
        includes: [
          "Luxury themed décor with fairy lights",
          "Exclusive candlelight dinner for couple",
          "Premium floral & balloon décor",
          "Full-day photography & videography",
          "Grand dinner for 40 guests",
        ],
        popular: false,
      },
    ],
    features: ["Romantic Setup", "Candle Light Dinner", "Flowers", "Lake Views"],
    faqs: [
      {
        id: "ann-faq-1",
        question: "Can you arrange a surprise celebration?",
        answer: "Of course! Our team specialises in surprise setups at the villa. Just share the details and we will handle everything discreetly while you focus on your special someone.",
      },
      {
        id: "ann-faq-2",
        question: "Do you offer couple-specific dining experiences?",
        answer: "Yes, our Gold and Platinum packages include exclusive private dining setups for couples with stunning views of Pawna Lake.",
      },
    ],
  },
  {
    id: "evt-corporate",
    slug: "corporate-events",
    name: "Corporate Offsites",
    tagline: "Inspire your team in a stunning natural setting",
    description:
      "Host impactful corporate offsites in our luxury villas with modern connectivity, stunning views, and dedicated event coordination.",
    longDescription:
      "Beyond conferences, Vellora Stays is your partner for inspiring corporate offsites. Whether you are planning a team retreat, brainstorming session, or company celebration, our villas adapt to your requirements with ease. Equipped with high-speed WiFi, meeting setups, and breathtaking natural surroundings, our venues leave a lasting impression on your team. Our event coordinators work closely with your team to ensure flawless execution from concept to completion, while the serene Pawna Lake setting provides the perfect backdrop for creativity and collaboration.",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070",
    gallery: [
      { id: "corp-img-1", src: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070", alt: "Corporate offsite setup in villa" },
      { id: "corp-img-2", src: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070", alt: "Team meeting at Vellora Stays" },
      { id: "corp-img-3", src: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070", alt: "Team building activity by the pool" },
    ],
    capacity: 50,
    hallSize: "Private Villa",
    priceRange: "₹25,000 - ₹1,00,000",
    packages: [
      {
        id: "corp-basic",
        name: "Basic",
        description: "A straightforward corporate offsite package for smaller teams.",
        price: "₹25,000",
        includes: [
          "Villa for 2 days",
          "Basic meeting setup",
          "High-speed WiFi access",
          "Tea/coffee service",
          "BBQ dinner setup",
        ],
        popular: false,
      },
      {
        id: "corp-standard",
        name: "Standard",
        description: "A comprehensive package for mid-size corporate offsites.",
        price: "₹60,000",
        includes: [
          "Villa for 2 days",
          "Full meeting setup with projector",
          "High-speed WiFi access",
          "All meals included",
          "Team building activities",
        ],
        popular: true,
      },
      {
        id: "corp-premium",
        name: "Premium",
        description: "The flagship corporate offsite package for large teams.",
        price: "₹1,00,000",
        includes: [
          "Multiple villas for 2 days",
          "Full AV setup & backup",
          "High-speed WiFi access",
          "Premium catering for all meals",
          "End-to-end event management",
        ],
        popular: false,
      },
    ],
    features: ["Meeting Setup", "WiFi", "Team Activities", "BBQ", "Lake Views"],
    faqs: [
      {
        id: "corp-faq-1",
        question: "Can you handle large-scale team events?",
        answer: "Yes, our Premium package includes full setup for large teams with multiple villas, team building activities, and end-to-end event management.",
      },
      {
        id: "corp-faq-2",
        question: "Is transport arranged for attendees?",
        answer: "Yes, we can arrange pickup and drop services from Mumbai and Pune at an additional cost.",
      },
      {
        id: "corp-faq-3",
        question: "Can we work remotely from the villa?",
        answer: "Absolutely! Our villas have high-speed WiFi, power backup, and comfortable workspaces, making them ideal for workations.",
      },
    ],
  },
  {
    id: "evt-family",
    slug: "family-gatherings",
    name: "Family Gatherings",
    tagline: "Bring the whole family together in a stunning setting",
    description:
      "From reunions to festive celebrations, enjoy our spacious villas for every kind of family gathering with private pool and BBQ.",
    longDescription:
      "Life is full of moments worth celebrating with the people who matter most. Vellora Stays offers warm, welcoming villas for all kinds of family gatherings — be it a family reunion, festive party, or a casual get-together with relatives. Our customisable menus, spacious villas, and attentive service ensure that every gathering feels special. With private pools, gardens, and BBQ areas, you can create the perfect atmosphere for connection and celebration in the beautiful setting of Pawna Lake.",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070",
    gallery: [
      { id: "fam-img-1", src: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070", alt: "Family gathering at Vellora Stays villa" },
      { id: "fam-img-2", src: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070", alt: "Family celebration by the pool" },
      { id: "fam-img-3", src: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?q=80&w=2070", alt: "Family dinner under the stars" },
    ],
    capacity: 40,
    hallSize: "Private Villa",
    priceRange: "₹20,000 - ₹80,000",
    packages: [
      {
        id: "fam-intimate",
        name: "Intimate",
        description: "A cosy gathering package for close-knit families.",
        price: "₹20,000",
        includes: [
          "Villa for 2 days",
          "Basic decoration setup",
          "BBQ dinner setup",
          "Pool access",
          "Photography for 1 hour",
        ],
        popular: false,
      },
      {
        id: "fam-grand",
        name: "Grand",
        description: "A vibrant celebration package with premium catering and entertainment.",
        price: "₹50,000",
        includes: [
          "Villa for 2 days",
          "Themed decoration",
          "Full dinner for 30 guests",
          "BBQ + bonfire setup",
          "Photography & videography",
        ],
        popular: true,
      },
      {
        id: "fam-lavish",
        name: "Lavish",
        description: "The most luxurious family gathering experience with end-to-end planning.",
        price: "₹80,000",
        includes: [
          "Multiple villas for 3 days",
          "Premium customised décor",
          "Gourmet dinner for 40 guests",
          "Live cooking station",
          "Full-day photography & videography",
        ],
        popular: false,
      },
    ],
    features: ["Private Pool", "BBQ", "Bonfire", "Photography", "Lake Views"],
    faqs: [
      {
        id: "fam-faq-1",
        question: "Can the menu be customised for dietary needs?",
        answer: "Absolutely. Our kitchen team can accommodate vegetarian, vegan, gluten-free, and other dietary requirements.",
      },
      {
        id: "fam-faq-2",
        question: "Is parking available for large gatherings?",
        answer: "Yes, we have ample parking space at each villa that can accommodate multiple vehicles for family gatherings.",
      },
      {
        id: "fam-faq-3",
        question: "Can we book multiple villas?",
        answer: "Yes! We have 5 villas on the property and can accommodate large family gatherings across multiple villas.",
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
