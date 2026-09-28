import type { TourPackage, SectionContent } from "@/types";

export const TOURS_CONTENT: SectionContent = {
  eyebrow: "Day Plans",
  heading: "How to Spend Your Days in Puri",
  description:
    "We are not a tour operator and we do not run guided excursions. What we can do is help you plan: these are day plans built around staying here, with realistic timings based on what the front desk has seen work for guests. Treat them as starting points, not fixed schedules — temple timings change seasonally, and the front desk will tell you what is happening on the day you arrive.",
};

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: "plan-temple",
    slug: "temple-and-grand-road",
    name: "Temple & Grand Road Day",
    tagline: "The reason most people are in Puri, done without the stress",
    description:
      "A plan for the Jagannath Temple itself and the surrounding Grand Road, built around how the temple actually works: early darshan, a rest in the middle of the day, and the evening when the street comes alive.",
    longDescription:
      "Most guests are staying here for the temple, so this is the plan we walk through with you at check-in. The important thing to understand about darshan at the Jagannath Temple is that it is not a single fixed event. There are several aartha timings across the day, from the pre-dawn slot through to the evening, and which one you can realistically attend depends on the season, the day of the week, and the festival calendar. The temple is at the West Gate of Grand Road, so from our rooms it is a short walk rather than a journey. For pre-dawn darshan, leave your room at around 3:00 to 3:30 AM; the gates open well before sunrise and the queue is far shorter than it will be at seven in the morning. Breakfast afterwards is the practical problem, which is why we can serve it early if you tell us the night before. Between darshan and the evening, Puri in the middle of the day is hot and there is not much that demands doing. This is a good time to rest, to visit the Jagannath Temple Museum on the temple grounds if it is open that day, or to swim before the afternoon heat. In the evening, Grand Road changes character completely. The road closes to traffic, the stalls come out, and the whole area fills with people. The evening aarti is the other darshan worth planning around, and the crowd around it is significant. Wear clothes you can walk in, carry something small in cash for the stalls, and be aware that footwear needs to come off well before you reach the temple gates — there are places to leave it, and it is easier to use them than to carry them.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    duration: "Full day",
    price: 0,
    currency: "₹",
    groupSize: "Any number of guests",
    includes: [
      "A realistic hour-by-hour plan rather than a fixed schedule",
      "Guidance on darshan timings and what changes by season",
      "Early breakfast arranged on request for pre-dawn darshan",
      "Advice on footwear, dress, and what to carry through the gates",
    ],
    itinerary: [
      {
        id: "tg-1",
        time: "3:00 AM",
        activity: "Leave for the temple",
        description:
          "For pre-dawn aartha darshan, leave your room around 3:00 to 3:30 AM. The walk to the West Gate takes a couple of minutes, but the queue forms well before the gates open, and it is much shorter at this hour than later in the morning.",
      },
      {
        id: "tg-2",
        time: "4:00 – 6:00 AM",
        activity: "Darshan",
        description:
          "The earliest aartha timings. Exact timings vary by season and by day of the week, so ask the front desk the previous evening what applies on the morning you are here. Photography inside the temple complex is restricted, so plan on seeing rather than recording.",
      },
      {
        id: "tg-3",
        time: "6:30 AM",
        activity: "Early breakfast back at the property",
        description:
          "Tell us the night before if you want breakfast this early and we will have it ready. It is a small thing, but it makes the difference between a good morning and a rushed one.",
      },
      {
        id: "tg-4",
        time: "9:00 AM – 4:00 PM",
        activity: "Rest, and the middle of the day",
        description:
          "Puri is hot between late morning and mid-afternoon and most visitors rest through it. This is a good window for the Jagannath Temple Museum on the temple grounds, shopping on Grand Road, or simply recovering before the evening.",
      },
      {
        id: "tg-5",
        time: "5:00 – 8:00 PM",
        activity: "Grand Road in the evening",
        description:
          "The road closes to traffic and fills with stalls and people. Watch the evening aarti if timings suit, browse the sweet shops, and expect the crowd density to be high right around the procession route.",
      },
    ],
    highlights: [
      "Pre-dawn darshan with the shortest queues",
      "Early breakfast arranged the night before",
      "Honest guidance on darshan timings for the day you are here",
      "Evening Grand Road when the street opens up",
    ],
    faqs: [
      {
        id: "tg-faq-1",
        question: "Can we book darshan through the hotel?",
        answer:
          "No. We are not a temple booking agent and cannot reserve slots on your behalf. Darshan and puja bookings must be made through the official Jagannath Temple Management Committee channels. We can explain how the system works so you know what to do when you arrive.",
      },
      {
        id: "tg-faq-2",
        question: "How far is the temple from the hotel?",
        answer:
          "We are at the West Gate of the Jagannath Temple on Grand Road, so it is a short walk rather than a drive. Grand Road itself closes to traffic in the evenings, which is convenient on foot and confusing if you are trying to reach us by car during that window.",
      },
      {
        id: "tg-faq-3",
        question: "Is there a dress code for the temple?",
        answer:
          "Yes. Traditional dress is expected, and items made of leather are generally not permitted inside. Decent clothing covering shoulders and knees works for everyone. If you are unsure about anything specific, ask at the gate or ask us before you go.",
      },
    ],
  },

  {
    id: "plan-konark",
    slug: "konark-day-trip",
    name: "Konark Day Trip",
    tagline: "The Sun Temple, and what to combine it with",
    description:
      "A day plan for Konark Sun Temple, roughly 60 to 65 km from Puri, with options to add Dhauli or Chilika if you have the time and the energy.",
    longDescription:
      "The Konark Sun Temple is the reason many travellers come to this part of Odisha, and it deserves a full day rather than a hurried stop. It sits about 60 to 65 km from Puri, which in practice means somewhere between an hour and a half and two and a half hours each way depending on traffic, and traffic on this road is not always predictable. If you want to make a day of it, leave early — by 6:00 to 6:30 AM — and you will arrive before the worst of the heat and before the midday crowd. The temple itself is a UNESCO World Heritage Site, and the part that surprises people is not just the architecture but the fact that the wheels at the base of the structure are carved to look like they are turning. Give yourself a couple of hours; there is more detail in the carvings the longer you stay. In the afternoon you have a choice. Dhauli, with the Ashokan edicts and the Peace Pagoda, is on the road and makes a natural addition to the return journey. Chilika Lake, the brackish water lagoon an hour or so further south, is larger and less convenient, and honestly is a stretch for a single day unless you leave very early and do not mind a long drive. The other option, and often the better one, is to come back and stay in Puri, eat properly, and let the day be one thing rather than three. If you are going to hire a car, arrange it in advance and confirm the total cost including waiting time and tolls before you set off. If you prefer to go on your own, buses and shared jeeps leave Puri for Konark regularly, but the timings are less flexible and the return schedule is fixed, which makes it a poor fit for a pre-dawn temple visit followed by a relaxed afternoon.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    duration: "Full day",
    price: 0,
    currency: "₹",
    groupSize: "Any number of guests",
    includes: [
      "A realistic assessment of travel times and what is achievable in a day",
      "Advice on transport options, including when to hire a car",
      "Combination suggestions for Dhauli and Chilika",
      "Breakfast arranged early so you can leave on time",
    ],
    itinerary: [
      {
        id: "ko-1",
        time: "6:00 AM",
        activity: "Leave Puri",
        description:
          "An early start matters more than anything else on this trip. Leave by 6:30 AM at the latest if you want to see the temple in relative quiet and avoid the worst heat of the day.",
      },
      {
        id: "ko-2",
        time: "8:00 – 9:00 AM",
        activity: "Arrive at Konark",
        description:
          "Allow for the possibility of a longer journey than the map suggests. The Archaeological Survey of India site opens early; confirm current timings before you go, as opening hours are adjusted seasonally.",
      },
      {
        id: "ko-3",
        time: "9:00 – 11:30 AM",
        activity: "Konark Sun Temple",
        description:
          "Two hours is a reasonable minimum. The main temple, the Natya Mandapa, and the surrounding complex are all part of one site, and the details are in the carvings rather than in a single viewpoint.",
      },
      {
        id: "ko-4",
        time: "12:30 PM",
        activity: "Lunch and a decision about the afternoon",
        description:
          "There are restaurants near the site. After lunch you have to commit: Dhauli on the way back, Chilika if you have a long day and a driver, or return directly to Puri and stop rushing.",
      },
      {
        id: "ko-5",
        time: "2:00 – 5:00 PM",
        activity: "Dhauli or direct return",
        description:
          "Dhauli sits on the return route and is a straightforward stop. If you pushed hard in the morning, returning to Puri and unwinding is a perfectly good afternoon plan.",
      },
    ],
    highlights: [
      "Konark Sun Temple with enough time to see the detail",
      "Dhauli as an easy addition on the return road",
      "Honest guidance on whether Chilika fits in a day",
      "Early breakfast so you can leave on schedule",
    ],
    faqs: [
      {
        id: "ko-faq-1",
        question: "Can you arrange a car and driver for Konark?",
        answer:
          "We can help you contact a driver, but the vehicle and the driver are not ours. We would encourage you to agree the total cost, including waiting time, tolls, and overtime, before you set off, and to confirm the return time in advance so nobody is left waiting.",
      },
      {
        id: "ko-faq-2",
        question: "How long should we allow at the temple?",
        answer:
          "Two hours is a reasonable minimum and three is better if you want to read the carvings properly. Photographs of the main temple from outside the complex are generally permitted; photography inside is restricted, so plan to see rather than record.",
      },
      {
        id: "ko-faq-3",
        question: "Is it worth doing Chilika in the same day?",
        answer:
          "It is possible, but it makes a long day and the lagoon deserves more time than that. If Chilika is important to you, consider staying a night nearer the lake and doing Konark on a separate day.",
      },
    ],
  },

  {
    id: "plan-beach",
    slug: "beach-and-bazaar",
    name: "Beach, Bazaar & Swamiji Day",
    tagline: "A day without the temple, for a change of pace",
    description:
      "A plan for the Puri beach, the Grand Road sweet shops, and the old part of the city, for guests who have already done the temple or simply want a slow day.",
    longDescription:
      "Not every day in Puri has to be a temple day. This plan is for the beach at one end of Grand Road, the market in the middle, and the older streets behind it — and it works well as a rest day between temple visits. Puri Beach runs a long way north from the main area, and the interesting thing about it is that it is not one beach but a series of them with different characters. The stretch closest to Grand Road is busy and commercial. Further north it becomes progressively more open and, depending on the season, you can walk a considerable distance with relatively few people around. The water here is rough and the currents are strong; the sea is not somewhere to be casual, and swimming here is genuinely risky. Come to walk, watch the sunset, or sit on the sand, and treat the water with respect. The Grand Road sweet shops are the other reason people linger. Puri has a long-standing tradition of sweet-making, and the shops along Grand Road sell everything from the light chena poda that is meant to be eaten within a day of making to packaged items you can carry home. Buy from the shops where the sweet is being made in front of you, and it is noticeably better. The back streets behind Grand Road are quieter and worth a walk, particularly in the early evening when the traffic has thinned and the shutters are half down. If you are in Puri for a longer stay, this is a good afternoon to simply wander rather than schedule.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    duration: "Half day",
    price: 0,
    currency: "₹",
    groupSize: "Any number of guests",
    includes: [
      "Guidance on which part of the beach suits what you want",
      "Advice on where the sweets are worth buying",
      "A gentle walk route through the older streets behind Grand Road",
      "No fixed schedule, so you can take as long as you like",
    ],
    itinerary: [
      {
        id: "bb-1",
        time: "4:00 PM",
        activity: "Walk to the beach",
        description:
          "The beach is a short walk along Grand Road. Late afternoon is the best time — the heat has dropped and the light is better for walking.",
      },
      {
        id: "bb-2",
        time: "5:00 – 6:30 PM",
        activity: "Beach time",
        description:
          "Walk, sit, or watch the fishing boats coming in. Note that currents are strong and swimming is not safe in this stretch of the coast.",
      },
      {
        id: "bb-3",
        time: "6:30 PM",
        activity: "Grand Road sweet shops",
        description:
          "The shops are best before the evening crowd builds. Look for the ones making chena poda on the premises, and buy it the same day.",
      },
      {
        id: "bb-4",
        time: "7:30 PM",
        activity: "Back streets behind Grand Road",
        description:
          "Quieter than the main road, and pleasant once the traffic thins. A good walk after dinner, and an easy way to end the day.",
      },
    ],
    highlights: [
      "The quieter northern stretch of Puri Beach",
      "Grand Road sweets, bought from the shop that made them",
      "A walk through the older streets behind Grand Road",
      "No schedule to keep to",
    ],
    faqs: [
      {
        id: "bb-faq-1",
        question: "Is it safe to swim at Puri Beach?",
        answer:
          "We would not recommend swimming. The currents along this stretch of the Odisha coast are strong and there have been drownings in the surf zone in tourist season. The beach is a good place to walk, sit, and watch the sunset, and that is what most guests do.",
      },
      {
        id: "bb-faq-2",
        question: "What sweets should we buy?",
        answer:
          "Chena poda is the classic Puri sweet and is at its best the day it is made. The shops along Grand Road also sell kharvasana, a fried sweet coated in sugar syrup, and a range of packaged Odia sweets. Buy from the shop where the sweet is being made rather than from a reseller.",
      },
      {
        id: "bb-faq-3",
        question: "Do you have beach access from the hotel?",
        answer:
          "No. We are on Grand Road at the West Gate, and the beach is a walk away through the main town. The walk is easy and flat, but it takes you through busy public areas rather than a direct route from the door.",
      },
    ],
  },
];

export function getTourBySlug(slug: string): TourPackage | undefined {
  return TOUR_PACKAGES.find((tour) => tour.slug === slug);
}

export function getAllTours(): TourPackage[] {
  return TOUR_PACKAGES;
}
