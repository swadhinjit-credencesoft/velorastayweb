import type { Offer, SectionContent } from "@/types";

export const OFFERS_CONTENT: SectionContent = {
  eyebrow: "Special Offers",
  heading: "Deals for Puri Trips",
  description:
    "A few ways to get more out of your stay. Availability changes through the year, especially around festival season, so please call us before relying on any offer.",
};

export const OFFERS: Offer[] = [
  {
    id: "offer-early-darshan",
    slug: "early-darshan",
    name: "Early Darshan Stay",
    tagline: "Sleep close to the temple gate, be there for the first darshan",
    description:
      "The earliest aartha darshan begins is in the pre-dawn hours, and the West Gate gets busy from around 5:00 AM onwards. Staying with us means you are a short walk from the gate instead of across town. Book a room and let us know your darshan time when you arrive, and the front desk will help you plan timings and arrange an early breakfast if you leave before four in the morning.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    discount: "Best Rate",
    validFrom: "2026-01-01",
    validUntil: "2026-12-31",
    code: "DARSHAN",
    terms: [
      "Subject to room availability on the night of your stay.",
      "Please inform us of your intended darshan time at least one day in advance so we can plan breakfast timings.",
      "Cannot be combined with any other promotional offer.",
    ],
    features: [
      "Rooms a short walk from the West Gate of the Jagannath Temple",
      "Early breakfast arranged on request for pre-dawn darshan",
      "Front desk open 7 AM to 11 PM for timings and directions",
    ],
    popular: true,
  },

  {
    id: "offer-long-stay",
    slug: "long-stay",
    name: "Long Stay Rate",
    tagline: "Staying a while? Ask us about longer-term rates",
    description:
      "If you are in Puri for a few weeks rather than a few days, ask us about a long-stay rate. We have regular guests who stay with us while family and friends are in town, and we would rather work out a fair rate for a month-long stay than have you book repeated short stays at the standard rate. Contact us directly and we will quote based on the length of stay and the room category you need.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    discount: "On Request",
    validFrom: "2026-01-01",
    validUntil: "2026-12-31",
    code: "LONGSTAY",
    terms: [
      "Available for stays of 14 nights or more, subject to availability.",
      "Rates are quoted individually and confirmed at the time of booking.",
      "Payment terms for long stays are agreed in advance in writing.",
    ],
    features: [
      "Discounted rate for stays of 14 nights or more",
      "Monthly laundry arrangements available",
      "Flexible check-in and check-out timings where possible",
    ],
    popular: false,
  },

  {
    id: "offer-group",
    slug: "group-booking",
    name: "Group & Pilgrim Booking",
    tagline: "Coming with family or a group? Talk to us first",
    description:
      "Groups often need more than a standard rate: extra beds, a single checkout, help with temple timings, or an early meal before an early bus. Tell us how many people you are travelling with and when you plan to visit the temple, and we will work out what is possible. Multi-bed rooms are available for families who would rather not split across properties.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    discount: "Group Rate",
    validFrom: "2026-01-01",
    validUntil: "2026-12-31",
    code: "GROUP",
    terms: [
      "Applies to bookings of five rooms or more, or any group booking arranged directly.",
      "Rates and room allocation are confirmed individually.",
      "Advance notice is required during festival season.",
    ],
    features: [
      "Group rates for five or more rooms",
      "Multi-bed rooms available for families",
      "Single check-in and check-out for the whole group where possible",
    ],
    popular: false,
  },

  {
    id: "offer-festival",
    slug: "festival-season",
    name: "Festival Season Booking",
    tagline: "Plan ahead for Rath Yatra and Puri season",
    description:
      "From around June through July, and again through the winter months, Puri fills up and rooms go quickly. During major festivals such as Rath Yatra, availability is limited and separate terms apply. We would rather tell you that plainly than have you discover it at the last minute. Get in touch as early as you can and we will tell you honestly what is available and at what price.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    discount: "Book Early",
    validFrom: "2026-01-01",
    validUntil: "2026-12-31",
    code: "FESTIVAL",
    terms: [
      "Festival dates and pricing vary each year and are confirmed at the time of booking.",
      "Advance booking is strongly recommended from June to July and during major religious events.",
      "Cancellation terms during festival season are stricter; please check before booking.",
    ],
    features: [
      "Honest availability guidance before you commit to a date",
      "Festival dates and pricing shared in writing before payment",
      "Direct contact with the property, not a call centre",
    ],
    popular: true,
  },

  {
    id: "offer-birthday",
    slug: "birthday-celebration",
    name: "Celebrations",
    tagline: "Birthdays and family occasions while you are in Puri",
    description:
      "Many of our guests are in Puri for a family occasion, and often the room is a base for several days of sightseeing rather than the celebration itself. If you need a cake, a simple room setup, or help with timings, tell us in advance and we will tell you honestly what we can arrange and at what cost. Anything beyond that, we are happy to point you to the right people in the area.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    discount: "On Request",
    validFrom: "2026-01-01",
    validUntil: "2026-12-31",
    code: "CELEBRATION",
    terms: [
      "Cake and decoration requests must be made at least 48 hours in advance.",
      "Third-party suppliers may be arranged on your behalf; charges are payable directly to them.",
      "Room setup is subject to availability and house rules.",
    ],
    features: [
      "Cake and simple room decoration arranged on request",
      "Help with timings and local contacts for event planning",
      "Late check-out where availability allows",
    ],
    popular: false,
  },
];

export function getOfferBySlug(slug: string): Offer | undefined {
  return OFFERS.find((offer) => offer.slug === slug);
}
