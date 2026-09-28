import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import Icon from "@/components/Icon/Icon";
import { SITE_INFO } from "@/data/site";
import styles from "./Explore.module.scss";

export const metadata: Metadata = {
  title: "Explore Puri | Bishnu Bhaban",
  description:
    "Explore Puri from Bishnu Bhaban — things to do, nearby attractions, day plans, photo gallery, and a walkthrough of the property at the West Gate of the Jagannath Temple.",
  alternates: { canonical: "/explore" },
  openGraph: {
    title: "Explore Puri | Bishnu Bhaban",
    description:
      "Things to do, places to go, and a walkthrough of the property, from a hotel at the temple gate.",
    url: `${SITE_INFO.url}/explore`,
  },
};

const EXPLORE_CARDS = [
  {
    id: "exp-card-experiences",
    title: "Things to Do",
    description:
      "Darshan timings, Grand Road in the evening, the beach, Konark, Odia food, and the handloom market, written up honestly.",
    href: "/explore/experiences",
    icon: "lucide:sparkles",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
  },
  {
    id: "exp-card-nearby",
    title: "Nearby Attractions",
    description:
      "What is within walking distance of the West Gate, and what is worth the journey further afield if you have the time.",
    href: "/explore/nearby-attractions",
    icon: "lucide:map-pin",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
  },
  {
    id: "exp-card-tours",
    title: "Day Plans",
    description:
      "Sample itineraries for the temple day, a Konark trip, and a slow beach and bazaar day. Planning guides, not tours.",
    href: "/explore/tour-packages",
    icon: "lucide:route",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
  },
  {
    id: "exp-card-gallery",
    title: "Gallery",
    description:
      "Photographs of the property, the rooms, and the surroundings of the West Gate area.",
    href: "/explore/gallery",
    icon: "lucide:camera",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
  },
  {
    id: "exp-card-virtual-tour",
    title: "Walkthrough",
    description:
      "A look at the entrance, each room category, the dining area, and the multi-bed rooms before you book.",
    href: "/explore/virtual-tour",
    icon: "lucide:glasses",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
  },
];

export default function ExplorePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Breadcrumb items={[{ label: "Explore", href: "/explore" }]} />
          <p className={styles.eyebrow}>Explore</p>
          <h1 className={styles.title}>Explore Puri</h1>
          <p className={styles.subtitle}>
            You are fifty metres from the West Gate of the Jagannath Temple, so
            exploring Puri is mostly a question of how far you want to walk and
            when you want to go. Start here.
          </p>
        </div>
      </section>

      <div className={styles.grid}>
        {EXPLORE_CARDS.map((card) => (
          <Link key={card.id} href={card.href} className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={card.image} alt={card.title} width={400} height={250} />
              <div className={styles.cardIcon}>
                <Icon icon={card.icon} width={22} height={22} />
              </div>
            </div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{card.title}</h2>
              <p className={styles.cardDesc}>{card.description}</p>
              <span className={styles.cardArrow}>
                Learn More
                <Icon icon="lucide:arrow-right" width={14} height={14} />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
