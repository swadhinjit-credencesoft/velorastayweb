import type { BlogPost, SectionContent } from "@/types";

export const BLOG_CONTENT: SectionContent = {
  eyebrow: "Puri Notes",
  heading: "Practical Guides for Puri",
  description:
    "Written by the front desk, mostly. The things guests ask us about most: how the temple actually works, what to bring, when Puri is unbearably hot, which beach stretch is quieter, and how to plan a day around a fixed train. Practical information rather than travel inspiration.",
};

export const BLOG_CATEGORIES: string[] = [
  "Temple & Darshan",
  "Travel Tips",
  "Food & Dining",
  "Puri & Odisha",
  "Practical",
];

const AUTHOR = {
  name: "Bishnu Bhaban Front Desk",
  image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=200&q=80",
  bio: "The team at the West Gate in Puri. We answer the same questions all day, so we have written them down.",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "blog-1",
    slug: "jagannath-temple-darshan-guide",
    title: "How Darshan at the Shri Jagannath Temple Actually Works",
    excerpt:
      "There is no single darshan slot. There are several aartha timings across the day, and which ones you can attend depends on the season and the festival calendar. Here is the honest version.",
    content:
      "The single most common misunderstanding about darshan at the Shri Jagannath Temple is that there is one fixed time to go. There is not. There are several aartha timings spread across the day, from the pre-dawn slot in the early hours through to the evening, and they shift through the year. This is the first thing to understand before you plan anything else, because it determines the shape of your day.\n\nThe earliest aartha timings are the most striking. Being awake at three in the morning to walk a few hundred metres from your room to the West Gate is an experience entirely different from arriving at seven. The queue is far shorter, the approach is quieter, and the temple itself feels different in the dark. The cost of this is simply that you have to accept the early night. For guests who want this, the practical sequence we suggest is: leave your room at around 3:00 to 3:30 AM, be back by about 5:00 to 5:30 AM, and have breakfast ready when you return. Tell us the night before if you want breakfast that early and we will arrange it, because turning up at 6 AM to a kitchen that is not expecting anyone is a poor way to start the day.\n\nLater darshan timings are considerably more crowded. The morning slot after sunrise draws the most footfall, and on weekends and during festivals it can be dense enough that the experience takes considerably longer than the posted timings would suggest. If you have a fixed schedule — a train to catch, an appointment, a child who needs a rest — plan for the queue, not for the posted time.\n\nThere is also the matter of booking, and this is where most first-time visitors get it wrong. Darshan and puja slots are allocated through the official Shri Jagannath Temple Management Committee channels, not through hotels and not through agents. We cannot reserve a slot on your behalf, and any person on the street offering to do it is not doing you a favour. Book through the official channels, or manage without a booked slot, which is entirely possible and is what many locals do.\n\nWhat to expect on the way in: you will remove your footwear some distance before the gates, so it is worth carrying it rather than planning to walk barefoot the whole way. Items made of leather are generally not permitted inside the complex. Photography inside the temple is restricted, so if the purpose of your visit is to record it, manage your expectations early. Dress modestly, and note that there is a lot of walking and standing, including on steps.\n\nThe evening Grand Road is worth planning for separately, and it has nothing to do with darshan. In the evening the road closes to traffic, the stalls come out, and the whole area fills with people. The evening aarti draws a substantial crowd, and the density around the procession route can be considerable. If you want to experience the evening at a human pace, walk the back streets behind Grand Road, which are quieter and more pleasant once the traffic thins.\n\nAsk the front desk the evening before what applies for the day you are here. Timings change with the season and with the festival calendar, and a plan built on last year's timings is a plan that will not work.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    category: "Temple & Darshan",
    tags: ["Shri Jagannath Temple", "darshan", "Puri", "aarti", "temple timings"],
    author: AUTHOR,
    publishedAt: "2026-01-12",
    readTime: "6 min read",
    featured: true,
    metaTitle: "Shri Jagannath Temple Darshan Guide | Bishnu Bhaban, Puri",
    metaDescription:
      "How darshan at the Shri Jagannath Temple works: aartha timings, pre-dawn visits, official booking, dress code, footwear, and what to expect on Grand Road.",
    keywords: [
      "Shri Jagannath Temple darshan timings",
      "Puri darshan guide",
      "early morning darshan Puri",
      "Shri Jagannath Temple aarti time",
    ],
  },

  {
    id: "blog-2",
    slug: "puri-months-when-to-visit",
    title: "When to Come to Puri: The Honest Version by Season",
    excerpt:
      "Puri is genuinely pleasant for a few months a year, difficult for a few, and extremely difficult between April and June. Knowing which is which is most of the planning.",
    content:
      "Most people arrive in Puri with a vague sense of when to come, and the vague sense is often wrong. The city has genuinely distinct seasons and the difference between them is large enough that a trip planned for the wrong month can be miserable.\n\nThe pleasant window runs from around October to February. This is the season most people have in mind when they think of Puri: warm days, cool evenings, and a sea that is pleasant to sit beside in the morning. If you have any flexibility in your dates, this is the period to aim for. It is also, unsurprisingly, the busiest and most expensive period, and it includes the tail end of the summer as well as the New Year period when the beach becomes the busiest part of Puri.\n\nMarch and April are hot but not yet punishing, and they are quieter. The trade-off is a strong sun and a sea that is rough enough to be unpleasant. Many guests use this window to focus on the temple and the old city rather than the beach, which is a reasonable way to spend a hotter month in Puri.\n\nMay and June are the difficult months. Temperature is only part of it. The combination of high heat, humidity coming off the Bay of Bengal, and the reflection off stone and sand makes it genuinely difficult to spend hours outdoors, particularly in the afternoons. The sea is at its roughest. If your dates are fixed to this period, plan more of your time indoors, plan your temple visits for the early morning and the evening, and expect to spend a good deal of the day in your room.\n\nThe monsoon runs from roughly June to September and divides opinion sharply. The humidity stays high, and the sea is often unsafe and muddy, which is the strongest argument against this period. The counter-argument is real: Odisha gets a large share of its annual rainfall in a compressed period, the landscape greens up dramatically, prices drop, and the city empties out. Odisha also genuinely needs that rain, and there are waterlogged days when Grand Road becomes difficult to navigate. If you come in the monsoon, come expecting rain rather than hoping for a gap in it.\n\nThen there is the festival calendar, which overrides all of the above. Rath Yatra in June and July is the single largest draw on the city, and the Jagannath temple, Grand Road, and the beach all operate under their own arrangements during the period. If you are travelling for Rath Yatra specifically, plan the accommodation months in advance and accept that you will be in dense crowds. Puri's own calendar is not the only consideration: a large number of visitors extend their trip to Konark and Chilika at the same time, and those places will be full too.\n\nTwo practical notes. First, book early for the good window. Puri is not a destination where you can reliably find a room on arrival in November or during Rath Yatra. Second, if you tell us your dates before you book, we will tell you honestly what the season will feel like rather than after you have already committed.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    category: "Puri & Odisha",
    tags: ["best time to visit Puri", "Puri weather", "Puri seasons", "Odisha travel"],
    author: AUTHOR,
    publishedAt: "2026-02-03",
    readTime: "6 min read",
    featured: true,
    metaTitle: "When to Visit Puri: A Season-by-Season Guide | Bishnu Bhaban",
    metaDescription:
      "An honest month-by-month guide to visiting Puri: the pleasant October to February window, the difficult May and June, the monsoon, and festival season.",
    keywords: [
      "best time to visit Puri",
      "Puri weather by month",
      "Puri in June",
      "Puri monsoon",
      "when to visit Odisha",
    ],
  },

  {
    id: "blog-3",
    slug: "planning-a-day-around-a-fixed-train",
    title: "How to Plan a Puri Day Around a Fixed Train Time",
    excerpt:
      "Most of the difficulty in Puri is not the sights. It is that the beach, the market, and the temple do not all work at the same hours, and your train does not care.",
    content:
      "The most common source of stress for guests staying with us is not the temple, the beach, or the heat. It is a departure time. Whether it is a train from Puri Junction, a bus, or a flight from Bhubaneswar, the last few hours of a Puri trip are where plans that looked fine on paper fall apart.\n\nThe underlying reason is a mismatch that catches almost everyone out. Puri's parts operate on different clocks. The temple's aartha timings start in the pre-dawn hours and are spread across the day. The sweet shops on Grand Road make their best products in the morning, and the chena poda is genuinely a same-day item. The beach is uncomfortable in the afternoon and pleasant in the morning and the evening. The market shuts for the afternoon heat. Add a departure time of, say, 2:00 PM, and it becomes clear that a full day of sightseeing followed by packing is not realistic.\n\nThe advice is to plan backwards from the departure. Two variables matter more than anything else: how far you need to travel to reach your departure point, and how reliable that transfer tends to be. Puri Junction is a short distance from Grand Road. The airport at Bhubaneswar is around sixty kilometres away, and that journey should not be treated as an hour. Allow considerably more, and treat any tight connection to a flight as a risk rather than a plan.\n\nOnce you have a realistic departure window, work backwards. Pack in the morning rather than the night before, because the temptation to leave packing until the end is what turns a comfortable margin into a scramble. If your departure is in the early afternoon, the morning is best spent on the temple or the sweet shops and the beach can be left to a previous evening, when it is at its best anyway. If you have most of a day, the sequence that works most often is temple in the early morning, rest through the hot middle hours, beach in the late afternoon, and Grand Road in the evening — and then sacrifice the evening Grand Road walk if the departure is early.\n\nLuggage is worth thinking about before the day itself. We can store it after you check out, which is genuinely useful if your departure is late in the day and you would rather not sit in a hotel lobby. Please note that we do not take responsibility for valuables in stored luggage. If you are collecting cash or anything you cannot replace, keep it with you.\n\nThe single most useful thing you can do is tell the front desk your departure time when you arrive. We can tell you what the traffic on Grand Road tends to look like at that hour, which gate you should use for a car, and whether the timing you are planning is realistic. We would rather flag a tight connection while there is still time to change it than watch someone discover it at 1:30 PM.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    category: "Practical",
    tags: ["Puri itinerary", "Puri Junction", "Puri Airport", "luggage storage", "planning"],
    author: AUTHOR,
    publishedAt: "2026-02-20",
    readTime: "5 min read",
    featured: false,
    metaTitle: "Planning a Day in Puri Around a Fixed Departure Time | Bishnu Bhaban",
    metaDescription:
      "How to sequence the temple, the beach, and Grand Road around a fixed train or flight time in Puri, plus practical advice on transfers and luggage storage.",
    keywords: [
      "Puri itinerary one day",
      "Puri to Bhubaneswar airport time",
      "Puri Junction departure",
      "luggage storage Puri",
    ],
  },

  {
    id: "blog-4",
    slug: "puri-beast-wheres-safe-to-swim",
    title: "Puri Beach: Where It Is Fine and Where It Is Not",
    excerpt:
      "The currents along this stretch of the Odisha coast are strong and drownings happen in the surf zone every season. The beach is a good place; the water is not one to be casual about.",
    content:
      "We would rather be blunt about this than diplomatic. Puri Beach is a genuinely good place to spend an afternoon — it is long, it is wide, it has sand rather than rock, and at the right time of day it is one of the more pleasant beaches in Odisha. The problem is the water.\n\nThe Bay of Bengal coastline at Puri has strong, unpredictable currents, and the surf zone is where the danger sits. There have been drownings in this part of the coast in tourist season, including in relatively calm-looking conditions. The risk is not confined to swimmers with obvious problems; the people who get into trouble are frequently ordinary people who misjudge how far out the current reaches and how quickly the bottom drops away. Rip currents pull outwards rather than inwards, which is the detail that catches people: swimmers who fight a rip and swim against it exhaust themselves within a couple of minutes, and then the sea is winning.\n\nOur advice is straightforward. Come to Puri Beach to walk, to sit, to watch the sunset, and to let your children run along the sand near the waterline. Do not go in. If you want to swim, there are safer options in the wider area and we can point you towards them, but they are not on the main tourist beach.\n\nThere is one further season-specific caution. During the monsoon the sea at Puri is often muddy, discoloured by runoff, and considerably more dangerous than it looks. If you arrive in a month when the water is not the clean blue that the photographs suggest, that is not a cosmetic difference. Take the hint.\n\nOn which stretch to choose: the beach immediately north of Grand Road is the busiest and the most commercial, with vendors, vehicle access, and crowds. Walk further north and it opens up markedly, with long stretches of sand and far fewer people. The walk is easy and flat. Go in the morning or the last two hours before sunset, carry water, and do not assume you can find shade easily on the more open stretches.\n\nWe know this is the least fun thing in this post, and we know the photographs of Puri Beach do not suggest otherwise. But we have watched enough people learn this the difficult way, and a straightforward warning is more useful to you than a pleasant paragraph.",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800",
    category: "Practical",
    tags: ["Puri beach", "swimming safety", "rip currents", "Odisha coast", "safety"],
    author: AUTHOR,
    publishedAt: "2026-03-08",
    readTime: "4 min read",
    featured: false,
    metaTitle: "Is It Safe to Swim at Puri Beach? | Bishnu Bhaban",
    metaDescription:
      "An honest safety guide to Puri Beach: strong currents, rip currents, the surf zone, monsoon conditions, and which stretch of sand is quietest.",
    keywords: [
      "is swimming safe at Puri beach",
      "Puri beach rip currents",
      "Puri beach safety",
      "drowning Puri",
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS;
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  const sameCategory = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && p.category === post.category,
  );
  const sharedTag = BLOG_POSTS.filter(
    (p) =>
      p.slug !== post.slug &&
      p.category !== post.category &&
      p.tags.some((tag) => post.tags.includes(tag)),
  );
  const rest = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug && !sameCategory.includes(p) && !sharedTag.includes(p),
  );
  return [...sameCategory, ...sharedTag, ...rest].slice(0, limit);
}
