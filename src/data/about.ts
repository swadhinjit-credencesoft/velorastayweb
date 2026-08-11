import type { AboutStory } from "@/types";

export interface AboutMission {
  title: string;
  description: string;
}

export interface AboutVision {
  title: string;
  description: string;
}

export const ABOUT_STORY: AboutStory = {
  title: "Welcome to The Queen's Head",
  description:
    "The Queen's Head – Paharganj offers comfortable accommodation in one of New Delhi's most convenient central neighbourhoods.\n\n" +
    "Located in Chuna Mandi, Paharganj, the hotel places guests close to major transportation links, shopping areas, restaurants and some of Delhi's most visited landmarks, including New Delhi Railway Station, Ramakrishna Mission, Gurudwara Bangla Sahib, Jantar Mantar and Connaught Place.\n\n" +
    "Our accommodation combines practical comfort with convenient hotel services, including air conditioning, free Wi-Fi, flat-screen televisions, workspaces, front-desk assistance and an on-site restaurant serving Indian and Chinese cuisine.\n\n" +
    "Whether you're travelling alone, with family or for business, The Queen's Head provides a welcoming place to stay while discovering Delhi.",
  image: "/whychooseus.jpeg",
};

export const ABOUT_MISSION: AboutMission = {
  title: "Our Mission",
  description:
    "At The Queen's Head – Paharganj, our mission is to provide every guest with a comfortable, convenient and welcoming stay in the heart of Paharganj.\n\n" +
    "We are dedicated to practical comfort, dependable hotel services and genuine hospitality — ensuring that business travellers, families and tourists alike feel at home while exploring New Delhi.",
};

export const ABOUT_VISION: AboutVision = {
  title: "Our Vision",
  description:
    "We aim to be a trusted and preferred hotel choice for travellers to Central Delhi, known for our central location, comfortable rooms and attentive 24-hour service.\n\n" +
    "By combining modern conveniences with a welcoming environment, we strive to make every guest's stay in Paharganj simple, comfortable and memorable.",
};
