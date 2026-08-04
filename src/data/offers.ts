import type { Offer, SectionContent } from "@/types";

export const OFFERS_CONTENT: SectionContent = {
  eyebrow: "Special Offers",
  heading: "Exclusive Villa Deals",
  description:
    "Take advantage of our handpicked offers and enjoy exceptional value during your stay at Velora Stays. From weekend getaways to long-stay discounts, there is always a reason to book your next escape with us.",
};

export const OFFERS: Offer[] = [
  {
    id: "offer-weekend",
    slug: "weekend-getaway",
    name: "Weekend Getaway",
    tagline: "Escape the city with a refreshing villa stay",
    description:
      "Make your weekends memorable with our special Weekend Getaway package. Enjoy a luxurious villa at Velora Stays with a 15% discount on villa rates, complimentary BBQ setup, and late checkout so you can make the most of every moment. Whether you are planning a romantic escape or a family weekend, this offer gives you the perfect excuse to unwind by Pawna Lake.",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800",
    discount: "15% OFF",
    validFrom: "2026-01-01",
    validUntil: "2026-12-31",
    code: "WEEKEND15",
    terms: [
      "Valid for stays on Friday, Saturday, and Sunday nights only.",
      "Minimum 2-night stay required to avail this offer.",
      "Cannot be combined with any other promotional offer or discount.",
    ],
    features: [
      "15% discount on all villa categories",
      "Complimentary BBQ setup and charcoal",
      "Guaranteed late checkout until 1:00 PM",
    ],
    popular: true,
  },

  {
    id: "offer-early-bird",
    slug: "early-bird",
    name: "Early Bird Special",
    tagline: "Plan ahead and save big on your villa escape",
    description:
      "The early bird catches the best rates. Book your villa at Velora Stays at least 21 days in advance and enjoy a generous 20% discount on your total booking. This offer is perfect for travellers who like to plan ahead and want the peace of mind that comes with confirmed reservations at the best available price. Secure your preferred villa type and dates while enjoying significant savings.",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800",
    discount: "20% OFF",
    validFrom: "2026-01-01",
    validUntil: "2026-12-31",
    code: "EARLY20",
    terms: [
      "Booking must be made at least 21 days before the check-in date.",
      "Valid for all villa categories subject to availability.",
      "Full payment is required at the time of booking to lock in the discount.",
    ],
    features: [
      "20% discount on villa rates when booked 21+ days ahead",
      "Flexible rebooking up to 14 days before check-in",
      "Priority villa selection based on availability",
    ],
    popular: false,
  },

  {
    id: "offer-long-stay",
    slug: "long-stay",
    name: "Long Stay Discount",
    tagline: "Extended villa stays at unbeatable value",
    description:
      "Planning an extended escape to Pawna Lake? Our Long Stay Discount makes it easy to settle in and enjoy significant savings. Stay for 7 nights or more and receive a remarkable 25% discount on your total villa cost. This offer is ideal for remote workers, families on extended holidays, or anyone who wants to experience the beauty of Lonavala at a leisurely pace without worrying about the budget.",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800",
    discount: "25% OFF",
    validFrom: "2026-01-01",
    validUntil: "2026-12-31",
    code: "LONGSTAY25",
    terms: [
      "Minimum stay of 7 nights is required to qualify for this discount.",
      "Valid for all villa categories; please confirm at the time of booking.",
      "Discount applies to villa charges only and excludes taxes and additional services.",
    ],
    features: [
      "25% discount on stays of 7 nights or more",
      "Complimentary weekly housekeeping service",
      "Free grocery shopping assistance",
    ],
    popular: true,
  },

  {
    id: "offer-couple",
    slug: "couple-package",
    name: "Romantic Escape",
    tagline: "A romantic villa experience designed for two",
    description:
      "Celebrate love with our Romantic Escape package at Velora Stays. Enjoy a beautifully decorated villa with romantic touches, a complimentary candlelight dinner for two under the stars, and a late checkout to savour every moment together. This package is perfect for anniversaries, honeymoons, or simply a spontaneous romantic getaway. Let us set the mood while you focus on making memories with your special someone.",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800",
    discount: "Free Dinner",
    validFrom: "2026-01-01",
    validUntil: "2026-12-31",
    code: "ROMANCE2026",
    terms: [
      "Valid for couples with valid photo identification at check-in.",
      "Candlelight dinner is a set menu for two persons at the villa.",
      "Villa decoration is subject to prior request at least 24 hours before check-in.",
    ],
    features: [
      "Complimentary candlelight dinner for two",
      "Romantic villa decoration with flowers and candles",
      "Late checkout until 1:00 PM included",
    ],
    popular: false,
  },

  {
    id: "offer-corporate",
    slug: "corporate-deal",
    name: "Corporate Offsite",
    tagline: "Refresh your team in a stunning villa setting",
    description:
      "Make your corporate offsite more rewarding with our Corporate Offsite package. Teams booking directly with Velora Stays enjoy a flat 20% discount on villa rates, complimentary meeting setup, high-speed WiFi, and dedicated event coordination. Whether you are planning a team retreat, brainstorming session, or company celebration, our Corporate Offsite package ensures that your organisation gets exceptional value in an inspiring setting.",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800",
    discount: "20% OFF",
    validFrom: "2026-01-01",
    validUntil: "2026-12-31",
    code: "CORP20",
    terms: [
      "Valid for bookings made directly through our corporate sales team.",
      "Minimum 2-night stay or group booking of 2+ villas required.",
      "Corporate invoice and GST billing available for all eligible bookings.",
    ],
    features: [
      "20% discount on standard villa rates",
      "Complimentary meeting setup and high-speed WiFi",
      "Dedicated corporate support and event coordination",
    ],
    popular: false,
  },

  {
    id: "offer-family",
    slug: "family-package",
    name: "Family Reunion",
    tagline: "Bring the whole family together in luxury",
    description:
      "Create unforgettable family memories at Velora Stays. Our Family Reunion package offers special rates on 5 BHK and 7 grand villas, along with complimentary kids' activities, a family BBQ night, and dedicated caretaker support. Whether it is a multi-generational gathering or a weekend with the cousins, our spacious villas provide the perfect setting for quality family time surrounded by the beauty of Pawna Lake.",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800",
    discount: "18% OFF",
    validFrom: "2026-01-01",
    validUntil: "2026-12-31",
    code: "FAMILY18",
    terms: [
      "Valid for bookings of 5 villa and 7 grand villas only.",
      "Minimum 2-night stay required.",
      "Cannot be combined with other promotional offers.",
    ],
    features: [
      "18% discount on 5 BHK and 7 grand villas",
      "Complimentary kids' activity kit",
      "Free family BBQ setup with charcoal",
    ],
    popular: true,
  },

  {
    id: "offer-monsoon",
    slug: "monsoon-special",
    name: "Monsoon Magic",
    tagline: "Experience the magic of Sahyadris in the rain",
    description:
      "The monsoon season transforms Pawna Lake and the surrounding Sahyadri mountains into a lush green paradise. Our Monsoon Magic package offers a special 20% discount on all villas during the rainy season, along with complimentary hot water bottles, bonfire setup, and guided nature walks. Embrace the romance of the rains from the comfort of your private villa while watching the clouds dance over the mountains.",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800",
    discount: "20% OFF",
    validFrom: "2026-06-01",
    validUntil: "2026-09-30",
    code: "MONSOON20",
    terms: [
      "Valid for stays between June 1 and September 30, 2026.",
      "Discount applies to all villa categories without restriction.",
      "Cannot be combined with other promotional offers or loyalty rewards.",
    ],
    features: [
      "20% discount on all villa categories",
      "Complimentary bonfire setup each evening",
      "Free guided nature walk through the trails",
    ],
    popular: false,
  },

  {
    id: "offer-birthday",
    slug: "birthday-celebration",
    name: "Birthday Celebration",
    tagline: "Celebrate your special day in a stunning villa",
    description:
      "Make your birthday unforgettable at Velora Stays. Our Birthday Celebration package includes villa decoration with balloons and streamers, a custom birthday cake, a special dinner setup, and late checkout. Whether it is a milestone celebration or a surprise party for a loved one, our team will ensure every detail is taken care of so you can focus on celebrating with friends and family.",
    image: "https://images.unsplash.com/photo-1587061949409-02df41d5e562?w=800",
    discount: "Free Cake",
    validFrom: "2026-01-01",
    validUntil: "2026-12-31",
    code: "BIRTHDAY26",
    terms: [
      "Birthday confirmation required at the time of booking.",
      "Custom cake must be ordered at least 48 hours in advance.",
      "Decoration is set up before guest arrival and cannot be modified.",
    ],
    features: [
      "Complimentary custom birthday cake (1 kg)",
      "Villa decoration with balloons and streamers",
      "Special birthday dinner setup for the group",
    ],
    popular: false,
  },
];

export function getOfferBySlug(slug: string): Offer | undefined {
  return OFFERS.find((offer) => offer.slug === slug);
}
