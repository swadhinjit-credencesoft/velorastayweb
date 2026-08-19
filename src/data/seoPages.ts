export interface LocalSeoPage {
  slug: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  intro: string[];
  pointsLabel: string;
  points: string[];
  highlights?: string[];
  image: string;
}

export const LOCAL_SEO_PAGES: LocalSeoPage[] = [
  {
    slug: "hotel-near-new-delhi-railway-station",
    h1: "Hotel Near New Delhi Railway Station",
    metaTitle: "Hotel Near New Delhi Railway Station | The Queen's Head Paharganj",
    metaDescription:
      "Looking for a comfortable hotel near New Delhi Railway Station? The Queen's Head – Paharganj offers air-conditioned rooms, free Wi-Fi, a 24-hour front desk and an on-site restaurant.",
    eyebrow: "Convenient Paharganj Location",
    intro: [
      "Looking for a comfortable hotel in Paharganj with convenient access to New Delhi's major transportation network?",
      "The Queen's Head – Paharganj is located in Chuna Mandi, Paharganj, making it a practical accommodation option for travellers visiting New Delhi for business, leisure, shopping and sightseeing.",
      "Guests can enjoy air-conditioned rooms, free Wi-Fi, 24-hour front-desk assistance and on-site dining.",
    ],
    pointsLabel: "Ideal for",
    points: [
      "Train travellers",
      "Short stays",
      "Business travellers",
      "Families",
      "Tourists",
      "Weekend visitors",
      "International travellers",
    ],
    image: "/nearby/new-delhi-railway-station.jpg",
  },
  {
    slug: "hotel-near-ramakrishna-mission",
    h1: "Hotel Near Ramakrishna Mission, New Delhi",
    metaTitle: "Hotel Near Ramakrishna Mission Delhi | The Queen's Head Paharganj",
    metaDescription:
      "Stay close to Ramakrishna Mission in New Delhi. The Queen's Head – Paharganj is approximately 0.9 km away, with comfortable rooms, Wi-Fi and a 24-hour front desk.",
    eyebrow: "Approx. 0.9 km from Ramakrishna Mission",
    intro: [
      "Ramakrishna Mission is one of the nearby landmarks listed for the property.",
      "The Queen's Head – Paharganj offers a comfortable base just a short distance from Ramakrishna Mission, with air-conditioned rooms, free Wi-Fi and a 24-hour front desk.",
      "Visit the landmark, explore Central Delhi, then return to a comfortable, welcoming room.",
    ],
    pointsLabel: "Nearby landmarks",
    points: [
      "Ramakrishna Mission — approx. 0.9 km",
      "Gurudwara Bangla Sahib — approx. 2.2 km",
      "Jantar Mantar — approx. 2.3 km",
      "Connaught Place — approx. 2.5 km",
    ],
    image: "/nearby/ramakrishna-mission.jpg",
  },
  {
    slug: "hotel-near-gurudwara-bangla-sahib",
    h1: "Hotel Near Gurudwara Bangla Sahib",
    metaTitle: "Hotel Near Gurudwara Bangla Sahib Delhi | The Queen's Head Paharganj",
    metaDescription:
      "Gurudwara Bangla Sahib is approximately 2.2 km from The Queen's Head – Paharganj. Book a comfortable room with free Wi-Fi and 24-hour front desk assistance.",
    eyebrow: "Approx. 2.2 km from Gurudwara Bangla Sahib",
    intro: [
      "Gurudwara Bangla Sahib is one of Delhi's prominent landmarks and a popular destination for visitors.",
      "The Queen's Head – Paharganj provides comfortable accommodation approximately 2.2 km away, with air-conditioned rooms, free Wi-Fi and an on-site restaurant.",
      "Whether you are visiting the Gurudwara for prayer or sightseeing, our hotel offers a convenient and comfortable place to stay.",
    ],
    pointsLabel: "Nearby landmarks",
    points: [
      "Gurudwara Bangla Sahib — approx. 2.2 km",
      "Ramakrishna Mission — approx. 0.9 km",
      "Jantar Mantar — approx. 2.3 km",
      "Connaught Place — approx. 2.5 km",
    ],
    image: "/nearby/gurudwara-bangla-sahib.jpg",
  },
  {
    slug: "hotel-near-jantar-mantar",
    h1: "Hotel Near Jantar Mantar, New Delhi",
    metaTitle: "Hotel Near Jantar Mantar Delhi | The Queen's Head Paharganj",
    metaDescription:
      "Stay near Jantar Mantar and Connaught Place in Central Delhi. The Queen's Head – Paharganj offers comfortable rooms with Wi-Fi, air conditioning and 24-hour assistance.",
    eyebrow: "Central Delhi Location",
    intro: [
      "Jantar Mantar is a major historical and astronomical landmark in Central Delhi.",
      "The Queen's Head – Paharganj offers a convenient base in Paharganj for travellers wanting to explore Central Delhi, including Jantar Mantar, Connaught Place, Gurudwara Bangla Sahib and other attractions.",
      "Enjoy comfortable rooms, free Wi-Fi and 24-hour front-desk assistance during your stay.",
    ],
    pointsLabel: "Nearby landmarks",
    points: [
      "Jantar Mantar — approx. 2.3 km",
      "Connaught Place — approx. 2.5 km",
      "Gurudwara Bangla Sahib — approx. 2.2 km",
      "Ramakrishna Mission — approx. 0.9 km",
    ],
    image: "/nearby/jantar-mantar.jpg",
  },
  {
    slug: "hotel-near-connaught-place",
    h1: "Hotel Near Connaught Place, New Delhi",
    metaTitle: "Hotel Near Connaught Place Delhi | The Queen's Head Paharganj",
    metaDescription:
      "Stay near Connaught Place in Central Delhi. The Queen's Head – Paharganj provides a convenient base with comfortable rooms, free Wi-Fi and an on-site restaurant.",
    eyebrow: "Central Delhi Base",
    intro: [
      "The Queen's Head – Paharganj provides a convenient Paharganj base for travellers wanting to explore Central Delhi.",
      "From the hotel, guests can explore major destinations such as Connaught Place, Jantar Mantar, Gurudwara Bangla Sahib and other attractions across Central Delhi.",
      "Stay comfortable with air-conditioned rooms, free Wi-Fi, a work desk and 24-hour front-desk assistance.",
    ],
    pointsLabel: "Nearby landmarks",
    points: [
      "Connaught Place — approx. 2.5 km",
      "Jantar Mantar — approx. 2.3 km",
      "Gurudwara Bangla Sahib — approx. 2.2 km",
      "New Delhi Railway Station — walking distance",
    ],
    image: "/nearby/connaught-place.jpg",
  },
  {
    slug: "business-hotel-paharganj",
    h1: "Business Hotel in Paharganj, Delhi",
    metaTitle: "Business Hotel in Paharganj Delhi | The Queen's Head",
    metaDescription:
      "A practical hotel for business travellers in Paharganj, New Delhi. Wi-Fi, work desks, air conditioning, a 24-hour front desk and a central location at The Queen's Head.",
    eyebrow: "For Business Travellers",
    intro: [
      "The Queen's Head – Paharganj provides practical accommodation for professionals travelling to New Delhi.",
      "With a central Paharganj location, a 24-hour front desk, free Wi-Fi and rooms with work desks, the hotel is well suited for short and extended business stays.",
      "The on-site restaurant serving Indian and Chinese cuisine makes it easy to dine without leaving the property.",
    ],
    pointsLabel: "Business-friendly facilities",
    points: [
      "Free Wi-Fi",
      "Air conditioning",
      "Work desk",
      "Flat-screen TV",
      "24-hour front desk",
      "Restaurant",
      "Concierge",
      "Central Delhi location",
    ],
    image: "/whychooseus.png",
  },
  {
    slug: "family-hotel-paharganj",
    h1: "Family Hotel in Paharganj, Delhi",
    metaTitle: "Family Hotel in Paharganj Delhi | The Queen's Head",
    metaDescription:
      "Planning a family trip to Delhi? The Queen's Head – Paharganj offers family-friendly rooms, Wi-Fi, air conditioning, private bathrooms and a central location.",
    eyebrow: "Family-Friendly Stay",
    intro: [
      "Planning a family trip to Delhi?",
      "The Queen's Head – Paharganj offers family-friendly accommodation with air-conditioned rooms, free Wi-Fi, television, private bathrooms and convenient hotel services.",
      "Current listings identify family rooms at the property, and extra beds are available to make family stays more comfortable.",
    ],
    pointsLabel: "Suitable for",
    points: [
      "Family holidays",
      "Delhi sightseeing",
      "Short city stays",
      "Multi-day trips",
      "Family visits",
      "Weekend trips",
    ],
    image: "/homehero1.png",
  },
  {
    slug: "hotel-near-delhi-airport",
    h1: "Hotel for Delhi Airport Travellers",
    metaTitle: "Hotel Near Delhi Airport | The Queen's Head Paharganj",
    metaDescription:
      "Delhi International Airport is approximately 15 km from The Queen's Head – Paharganj. A convenient Paharganj base for travellers arriving in or departing from Delhi.",
    eyebrow: "Convenient for Airport Travellers",
    intro: [
      "Delhi International Airport (IGI) is approximately 15 km from the property according to the information provided.",
      "The Queen's Head – Paharganj offers a convenient Paharganj location for travellers arriving in or departing from Delhi, with comfortable rooms, free Wi-Fi and a 24-hour front desk.",
      "Please contact the front desk for airport transfer and taxi information, and verify current journey times as Delhi traffic can significantly change travel duration.",
    ],
    pointsLabel: "Good to know",
    points: [
      "Delhi International Airport — approx. 15 km",
      "Airport transfer & taxi assistance available",
      "24-hour front desk for early departures",
      "Comfortable rooms for rest before or after your flight",
    ],
    image: "/nearby/delhi-airport.jpg",
  },
];

export function getLocalSeoPage(slug: string): LocalSeoPage | undefined {
  return LOCAL_SEO_PAGES.find((page) => page.slug === slug);
}
