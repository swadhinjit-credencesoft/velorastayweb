import type { AboutStory, Milestone } from "@/types";

export interface AboutMission {
  title: string;
  description: string;
}

export interface AboutVision {
  title: string;
  description: string;
}

export interface AboutValue {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Sustainability {
  title: string;
  description: string;
}

export const ABOUT_STORY: AboutStory = {
  title: "Our Story",
  image:
    "/bishnyhomeimage/homehero1.png",
  description:
    "Bishnu Bhaban sits at the West Gate of the Shri Jagannath Temple, and that single fact is the whole story. The people who run this hotel are not in the business of competing with five-star resorts a few kilometres down the beach. They are in the business of solving one problem properly: a lot of people come to Puri for early morning darshan, and they do not want to pay a premium or spend twenty minutes in an auto to reach the gate.\n\n" +
    "So the hotel is where it is because that is where it is useful. Roughly fifty metres from the West Gate, which means a guest leaving at 5:00 AM for the morning darshan is at the queue in a couple of minutes. The rooms are straightforward, air-conditioned, with an attached western-style bathroom and hot water at any hour, and they are cleaned every single day. There is a front desk staffed 24 hours, which covers temple timings at any hour and every arrival and departure time, and if you are arriving at an unusual hour calling ahead means we are ready for you. There is CCTV, because guests leave luggage and go out for the day, and they should not have to think about it.\n\n" +
    "We are honest about what this is. Bishnu Bhaban is a budget hotel, not a luxury property, and we do not describe it as one. The rooms are simple, the mattresses are ordinary, the walls could use a fresh coat of paint. What we do commit to is the three things that actually decide whether a Puri trip went well: the location is unbeatable, the room is clean, and the price is fair. Guests tell us that in their reviews, including the ones that point out the plumbing on a busy morning, which is exactly the kind of feedback we would rather have than hide.\n\n" +
    "Most of our guests arrive from Odisha and neighbouring states, often travelling with family, often in groups. We accept group bookings and bookings with only male guests, and we do not make anyone feel like a problem for asking. Roughly five hundred people have left a review, and the average sits around four stars. We would rather be a well-known four-star budget hotel at the temple gate than an unknown five-star one somewhere further away.",
};

export const ABOUT_MISSION: AboutMission = {
  title: "Our Mission",
  description:
    "Our mission is to be the most reliable budget stay at the West Gate of the Shri Jagannath Temple. Not the most lavish, not the most expensive, simply the one that does the basic things properly and charges an honest price for them.\n\n" +
    "That means a clean room, every time, without exception. Our housekeeping team works on a fixed daily schedule and each room is checked before a guest arrives, not after one leaves. It means hot water at four in the morning, because that is when people shower before a dawn darshan. It means a front desk that is open 24 hours, and someone there for you at four in the morning when the alarm goes off for a dawn darshan. It means being honest about the condition of the property when something needs repair, rather than hoping nobody mentions it.\n\n" +
    "It also means pricing that makes sense. Guests who come to Puri on a short temple trip are spending their money on prasad, travel, and family time, not on room upgrades. We keep our rates competitive with the rest of the budget category near the temple and we do not add charges at check-out that were not shown at booking. When guests leave feedback, including criticism, we read it and we act on what we can actually fix.",
};

export const ABOUT_VISION: AboutVision = {
  title: "Our Vision",
  description:
    "We want Bishnu Bhaban to be the name that comes to mind when someone in Odisha, or anywhere in India, is planning a trip to Puri and needs somewhere affordable and close to the temple. We want the word from guests to be that the room was clean and the staff were straightforward, not that they got a nice view.\n\n" +
    "Concretely, that means continuing the maintenance work our reviews keep pointing to. Rooms get repainted and fixtures get replaced on a planned schedule rather than reactively. The plumbing and hot water systems get the attention they need before peak season rather than during it. We want the four-star average to become a five-star average, and the only honest route to that is doing the unglamorous work.\n\n" +
    "In the longer term we are interested in property near other major pilgrimage destinations in Odisha, because the same logic applies everywhere: pilgrims need clean, affordable, well-located rooms more than they need elaborate ones. But we will not expand until the property we already have is properly maintained, because that is the standard we hold everything else to.",
};

export const ABOUT_VALUES: AboutValue[] = [
  {
    id: "value-hospitality",
    title: "Straightforward Hospitality",
    description:
      "We run a budget hotel, so we do not have a lot of room to impress anyone. What we do have is the opportunity to be useful: a clean towel when you ask, hot water at any hour, someone at the desk at four in the morning, and someone who will store your luggage for a day while you are at the beach. Every member of staff is empowered to sort out these small problems without waiting for a manager, because at our scale the small problems are the entire guest experience.",
    icon: "lucide:heart",
  },
  {
    id: "value-cleanliness",
    title: "Cleanliness, Every Day",
    description:
      "Cleanliness is the one thing a budget hotel cannot get wrong. Our housekeeping team works to a fixed daily schedule rather than on request, each room is serviced whether or not the previous guest checked out, and rooms are inspected before arrival rather than after. We use the same cleaning protocol in every room regardless of its price category, because a guest who books our cheapest room deserves the same standard as a guest who books our most expensive one.",
    icon: "lucide:sparkles",
  },
  {
    id: "value-guest-centric",
    title: "Honest With Guests",
    description:
      "Every decision starts with a simple question: will this help the guest? If a room needs repair, we tell the guest and we either fix it before they arrive or move them to one that is ready. If a hot water system is having a bad day during peak season, we say so rather than hoping they do not notice. We read every review, including the ones that mention the plumbing, and we report back to guests when we have fixed what they raised.",
    icon: "lucide:user-check",
  },
  {
    id: "value-location",
    title: "Location Is the Product",
    description:
      "We are fifty metres from the West Gate, and that is the reason most people book with us rather than a better hotel further down Grand Road. It means a 5:00 AM darshan takes two minutes to reach. It means you can walk to Vimala Temple in five minutes and to the market in two. We cannot compete on square footage or thread count, so we compete on the thing we actually have, and we would rather protect the value of that location than waste it on features guests would not use.",
    icon: "lucide:map-pin",
  },
  {
    id: "value-improvement",
    title: "Fix What We Hear About",
    description:
      "Our reviews average around four stars, and the recurring criticisms are consistent: rooms need refreshing, and hot water can be unreliable during busy periods. We take that as a work list rather than a complaint. Maintenance is scheduled in advance so that the same plumbing failure does not happen a second time in the same season, and we track the recurring themes in guest feedback so the fixes are prioritised by how often guests actually raise them.",
    icon: "lucide:trending-up",
  },
];

export const ABOUT_MILESTONES: Milestone[] = [
  {
    id: "milestone-opening",
    year: "Opening",
    title: "Established at the West Gate",
    description:
      "Bishnu Bhaban opened as a small budget property on Grand Road, at the West Gate of the Shri Jagannath Temple. The founding decision was location over scale: a smaller number of rooms, deliberately placed so that guests could reach the temple gate in minutes rather than by auto.",
  },
  {
    id: "milestone-front-desk",
    year: "Every day",
    title: "Front Desk Open 24 Hours",
    description:
      "The front desk runs 24 hours a day, 24×7, which covers temple timings at any hour of the night and every arrival and departure time. There is no arrival too late and no departure too early for someone to be there for you. Luggage storage is available for guests heading out to Puri Beach for the day.",
  },
  {
    id: "milestone-housekeeping",
    year: "Daily",
    title: "Daily Housekeeping Standard",
    description:
      "Housekeeping moved from an on-request model to a fixed daily schedule covering every room, with rooms inspected before guest arrival. This remains the single most common thing guests mention positively in their reviews, and the standard we hold ourselves to most firmly.",
  },
  {
    id: "milestone-reviews",
    year: "500+",
    title: "500 Guest Reviews",
    description:
      "The property has passed 500 guest reviews across Google, MakeMyTrip, Agoda, Goibibo, and Justdial, with an overall Google rating of 3.8. Guests most often praise the temple proximity and the cleanliness, and most often ask for room refurbishment and steadier hot water during peak season. Both are on the maintenance schedule.",
  },
];

export const SUSTAINABILITY: Sustainability = {
  title: "Our Sustainability Commitment",
  description:
    "We are a small budget hotel in a pilgrimage town, and we would rather be honest about the scale of what we do than claim more than is true. Sustainability at Bishnu Bhaban is not a marketing programme. It is a set of practical choices that reduce our running costs and our impact on the area around the temple.\n\n" +
    "Water is our most significant environmental concern, because we operate in Odisha where water availability varies sharply across the year. We have fitted low-flow showerheads and taps across all rooms, which reduces per-guest consumption substantially in a property where most guests take short showers and move on. Our linen and towel changes are made on a three-day cycle by default rather than daily, with fresh linen available on request at no charge. Our RO water treatment plant recovers and recirculates the reject stream instead of discarding it.\n\n" +
    "On energy, all lighting across the property is LED, and we use occupancy-based switching in corridors, stairwells, and other areas that are unoccupied for long stretches. Split air conditioning units in guest rooms are serviced on schedule, which is both the cheaper and the lower-emission option compared with replacing them prematurely. Solar hot water was considered but the capital cost and the maintenance burden for a property of our size did not justify it, and we would rather not claim a system we do not operate.\n\n" +
    "Waste handling follows the Odisha Pollution Control Board and Puri Municipality requirements for segregation at source. Wet waste from the kitchen is collected daily by the municipal contractor, and we store it in covered, sanitised bins to avoid the smell and flies that a poorly managed setup attracts near the temple. Dry waste is separated into recyclables and non-recyclables, and we avoid single-use plastic wherever a practical alternative exists, including in the packaged items we provide in rooms.\n\n" +
    "Water and waste management in a pilgrimage town are not purely environmental questions. Puri faces real pressure on its groundwater and its waste systems during festival season, when the population can multiply many times over in a few weeks. A property of our size contributes to that problem in proportion to its footprint, which is one of the reasons we have kept the room count modest rather than expanding into a larger building.",
};
