import type { EventType, SectionContent } from "@/types";

export const EVENTS_CONTENT: SectionContent = {
  eyebrow: "Groups & Celebrations",
  heading: "Travelling Together, Staying Together",
  description:
    "Bishnu Bhaban is a small, practical hotel, which makes it a good fit for families and groups travelling together. We can book several rooms under one name, arrange an early meal before an early train, and tell you plainly what the property can and cannot do. For anything beyond a group booking — decorators, caterers, pandits — we are happy to point you to people in the area.",
};

export const EVENT_TYPES: EventType[] = [
  {
    id: "evt-family",
    slug: "family-gatherings",
    name: "Family Gatherings",
    tagline: "Several generations, one booking, no coordination stress",
    description:
      "Book multiple rooms under a single reservation, with one check-in and one check-out for everyone.",
    longDescription:
      "Most of our group bookings are families — parents, children, and grandparents travelling together for the temple, the beach, or a festival in between. The practical difficulty with a group is rarely the money; it is coordinating who holds the reservation, who pays, and who gets which room. We remove that problem by booking all your rooms under one name with a single contact, one check-in, and one invoice where you want it. Our multi-bed rooms are useful for families who would rather not split across properties, and if you are travelling with anyone who needs extra floor space or has mobility requirements, tell us before you book so we can allocate the right room rather than you finding out on arrival. During festival season, tell us early. Rooms in Puri fill up quickly from June to July and again over the winter months, and the West Gate area is busier than it is at other times of year.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    gallery: [
      { id: "fam-img-1", src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800", alt: "Family group staying at Bishnu Bhaban" },
      { id: "fam-img-2", src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800", alt: "Group of rooms booked together at Bishnu Bhaban" },
    ],
    capacity: 30,
    hallSize: "Multi-room group booking",
    priceRange: "Quoted per room",
    packages: [
      {
        id: "fam-group-standard",
        name: "Group Booking",
        description: "Several rooms booked together under one reservation and one contact.",
        price: "On Request",
        includes: [
          "Multiple rooms under a single reservation",
          "One check-in and one check-out for the group",
          "Room allocation arranged in advance by age and mobility needs",
          "Single consolidated invoice available on request",
        ],
        popular: true,
      },
      {
        id: "fam-group-early",
        name: "Group Booking + Early Meal",
        description: "The same group booking, with an early breakfast arranged for temple timings.",
        price: "On Request",
        includes: [
          "Everything in the Group Booking",
          "Early breakfast served at the time you need to leave",
          "Advance planning of temple and travel timings with the front desk",
          "Luggage storage before check-in or after check-out",
        ],
        popular: false,
      },
    ],
    features: ["Group Booking", "Single Check-in", "Multi-Bed Rooms", "Early Meals", "Flexible Room Allocation"],
    faqs: [
      {
        id: "fam-faq-1",
        question: "How many rooms can you book under one reservation?",
        answer: "There is no fixed upper limit, but availability is the constraint, particularly during festival season. Tell us your group size and dates and we will confirm what is genuinely available rather than taking a booking we cannot honour.",
      },
      {
        id: "fam-faq-2",
        question: "Can you accommodate dietary requirements?",
        answer: "Our kitchen can prepare vegetarian and Jain food on request with advance notice. For anything more specific, please discuss it before you book so we can be honest about what we can do.",
      },
      {
        id: "fam-faq-3",
        question: "Is there parking for a group arriving together?",
        answer: "Parking is available, but note that we are on Grand Road at the West Gate, where space is limited and traffic varies through the day. If your group is arriving together, tell us in advance so we can advise you on the practical time to come in.",
      },
    ],
  },
  {
    id: "evt-pilgrim",
    slug: "pilgrim-groups",
    name: "Pilgrim & Yatra Groups",
    tagline: "Practical arrangements for groups on a temple circuit",
    description:
      "Accommodation for groups travelling the Odisha temple circuit, with help planning timings and logistics.",
    longDescription:
      "A significant part of our group bookings comes from families and small groups travelling the Odisha temple circuit — Puri, Konark, Dhauli, and Chilika along the way, often on tight schedules with fixed train or bus times. In that context, what matters is not decoration but reliability: a room that is ready when you arrive, luggage somewhere safe between checkout and your train, and breakfast at an unreasonable hour if the schedule demands it. We do all three. Tell us your group size, your travel dates, and the times you need to be on the move, and we will be direct about what is possible. We are a modest property with a limited number of rooms, so we would rather confirm early and honestly than overcommit and disappoint you on arrival.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    gallery: [
      { id: "pil-img-1", src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800", alt: "Pilgrim group arriving at Bishnu Bhaban" },
      { id: "pil-img-2", src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800", alt: "Rooms arranged for a yatra group" },
    ],
    capacity: 25,
    hallSize: "Multi-room group booking",
    priceRange: "Quoted per room",
    packages: [
      {
        id: "pil-basic",
        name: "Group Stay",
        description: "Rooms booked together with luggage storage between checkout and departure.",
        price: "On Request",
        includes: [
          "Multiple rooms under a single reservation",
          "Luggage storage after checkout and before departure",
          "Advance notice of darshan and gate timings",
          "Early breakfast arranged to your travel schedule",
        ],
        popular: true,
      },
      {
        id: "pil-circuit",
        name: "Circuit Planning Help",
        description: "Group stay plus practical guidance on the wider Odisha circuit.",
        price: "On Request",
        includes: [
          "Everything in the Group Stay",
          "Honest guidance on travel times to Konark, Dhauli, and Chilika",
          "Advice on temple timings, entry requirements, and what to carry",
          "Help coordinating early checkouts where the schedule is tight",
        ],
        popular: false,
      },
    ],
    features: ["Group Booking", "Luggage Storage", "Early Breakfast", "Front Desk 7 AM–11 PM", "Temple Timings"],
    faqs: [
      {
        id: "pil-faq-1",
        question: "How early should we book for festival travel?",
        answer: "For major events such as Rath Yatra, we would recommend weeks rather than days. Puri fills up well before the festival begins, and the West Gate area is at its busiest during the procession itself. Contact us as early as you can and we will tell you honestly what is available.",
      },
      {
        id: "pil-faq-2",
        question: "Can we store luggage after checking out?",
        answer: "Yes. Luggage storage is available after checkout and before your departure. We will label it and keep it behind the front desk. Please note that we do not accept responsibility for valuables left in stored luggage, so travel with them.",
      },
      {
        id: "pil-faq-3",
        question: "Do you help with darshan arrangements?",
        answer: "We are not a temple booking agent and we cannot reserve darshan slots on your behalf. We can tell you how the system generally works, when gates open, and what you will need to carry, but the booking itself must be done by you through the official channels.",
      },
    ],
  },
  {
    id: "evt-corporate",
    slug: "work-from-puri",
    name: "Working from Puri",
    tagline: "A few days of work in a different city",
    description:
      "For guests who need to work part of the day and see Puri part of the day. Ask us about the WiFi before you commit.",
    longDescription:
      "We are not a conference venue and we would not want to pretend otherwise. What we can offer is a quiet room with reliable WiFi in a city where a short break is genuinely restorative, which sometimes is what a team needs. If you are planning to work from Puri for a few days, contact us before booking and we will tell you exactly what the WiFi speeds and the power situation actually are, so you can decide whether it works for you. We will also tell you if the answer is no. For anything that requires a proper meeting room, AV setup, or printing facilities, we are happy to point you to venues in Puri that are set up for it rather than have you discover the gap on day one.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    gallery: [
      { id: "corp-img-1", src: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800", alt: "Working from a room at Bishnu Bhaban" },
    ],
    capacity: 10,
    hallSize: "Rooms only, no meeting space",
    priceRange: "Quoted per room",
    packages: [
      {
        id: "corp-stay",
        name: "Work-From Stay",
        description: "A quiet room for a few days, with the WiFi details shared up front.",
        price: "On Request",
        includes: [
          "Room booked for a working stay",
          "WiFi speed and power details shared before you commit",
          "Luggage storage on day of departure if needed",
          "Flexible check-out where availability allows",
        ],
        popular: false,
      },
    ],
    features: ["WiFi", "Quiet Rooms", "Luggage Storage", "Flexible Checkout"],
    faqs: [
      {
        id: "corp-faq-1",
        question: "Is the WiFi reliable enough for video calls?",
        answer: "Please ask us. We would rather give you the actual speeds and the honest answer about peak-hour congestion in the area than claim everything works perfectly.",
      },
      {
        id: "corp-faq-2",
        question: "Do you have a meeting room?",
        answer: "No. We are a small property with rooms only and no dedicated meeting space. If you need one, we can point you to venues in Puri that are set up for meetings properly.",
      },
      {
        id: "corp-faq-3",
        question: "Can we get invoices for GST?",
        answer: "Yes, GST invoices can be raised for booking payments. Share your billing details at the time of booking so the paperwork is correct from the start.",
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
