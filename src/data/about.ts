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
  title: "Welcome to Hotel Yogiraj",
  description:
    "Hotel Yogiraj is a warm and welcoming hotel in Shirdi, Maharashtra, located just a short walk from the sacred Sai Baba Temple. Our convenient central location makes us a trusted base for pilgrims, families and leisure travellers.\n\n" +
    "Our hotel blends modern conveniences with traditional hospitality, offering clean and comfortable AC and Non-AC rooms, free Wi-Fi, an in-house vegetarian restaurant, car parking, a geyser for hot water and a 24-hour front desk.\n\n" +
    "Conveniently located near Shirdi Bus Station and easily reachable from Shirdi Airport and the railway station, Hotel Yogiraj is an ideal choice for your Shirdi stay.\n\n" +
    "Whether you are visiting for darshan at the Sai Baba Temple, a family trip or a short city break, Hotel Yogiraj provides a comfortable, serene place to rest and rejuvenate.",
  image: "/yogirajimg/AKS08614.avif",
};

export const ABOUT_MISSION: AboutMission = {
  title: "Our Mission",
  description:
    "At Hotel Yogiraj, our mission is to provide every guest with a clean, comfortable and welcoming stay just moments from the Sai Baba Temple in Shirdi.\n\n" +
    "We are dedicated to heartfelt hospitality, dependable service and helpful staff — ensuring pilgrims, families and travellers feel at home during their Shirdi visit.",
};

export const ABOUT_VISION: AboutVision = {
  title: "Our Vision",
  description:
    "We aim to be a trusted and preferred hotel choice for travellers to Shirdi, known for our unbeatable location near the Sai Baba Temple, comfortable rooms and attentive 24-hour service.\n\n" +
    "By combining modern conveniences with genuine traditional hospitality, we strive to make every guest's stay in Shirdi simple, comfortable and memorable.",
};
