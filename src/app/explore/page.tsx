import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import Icon from "@/components/Icon/Icon";
import { SITE_INFO } from "@/data/site";
import styles from "./Explore.module.scss";

export const metadata: Metadata = {
  title: "Explore Lonavala | Things to Do Near Velora Stays",
  description:
    "Discover the best of Lonavala from Velora Stays. Explore curated experiences, nearby attractions, tour packages, photo gallery, and virtual tours of Pawna Lake and Lonavala.",
  alternates: { canonical: "/explore" },
  openGraph: {
    title: "Explore Lonavala | Velora Stays",
    description: "Curated experiences, attractions, tours, and more — everything you need to explore Lonavala.",
    url: `${SITE_INFO.url}/explore`,
  },
};

const EXPLORE_CARDS = [
  {
    id: "exp-card-experiences",
    title: "Curated Experiences",
    description: "Immerse yourself in Lonavala with handpicked heritage walks, food tours, art explorations, and river cruises curated by local experts.",
    href: "/explore/experiences",
    icon: "lucide:sparkles",
    image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=800&q=80",
  },
  {
    id: "exp-card-nearby",
    title: "Nearby Attractions",
    description: "From iconic Lion's Point to bustling Lonavala Market, explore the landmarks, temples, parks, and hidden gems near our villa.",
    href: "/explore/nearby-attractions",
    icon: "lucide:map-pin",
    image: "https://images.unsplash.com/photo-1590766940554-634f0e1593d4?w=800&q=80",
  },
  {
    id: "exp-card-tours",
    title: "Tour Packages",
    description: "Join our expertly guided fort treks, temple visits, photography walks, and lakeside adventures tailored for every traveller.",
    href: "/explore/tour-packages",
    icon: "lucide:route",
    image: "https://images.unsplash.com/photo-1569974507005-6dc61f97fb3c?w=800&q=80",
  },
  {
    id: "exp-card-gallery",
    title: "Gallery",
    description: "Browse stunning photos of our villas, dining spaces, events, and the vibrant city of Lonavala in our curated image gallery.",
    href: "/explore/gallery",
    icon: "lucide:camera",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=800&q=80",
  },
  {
    id: "exp-card-virtual-tour",
    title: "Virtual Tour",
    description: "Take a 360° virtual tour of our villa from the comfort of your home. Explore our villas, restaurant, and rooftop before you arrive.",
    href: "/explore/virtual-tour",
    icon: "lucide:glasses",
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
  },
];

export default function ExplorePage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Breadcrumb items={[{ label: "Explore", href: "/explore" }]} />
          <p className={styles.eyebrow}>Explore</p>
          <h1 className={styles.title}>Explore Lonavala</h1>
          <p className={styles.subtitle}>
            From ancient hill forts to serene lakeside trails, discover the
            very best of Pawna Lake and Lonavala with our curated guides, tours, and
            experiences.
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
