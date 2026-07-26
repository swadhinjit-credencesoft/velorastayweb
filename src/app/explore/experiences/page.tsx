import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import Icon from "@/components/Icon/Icon";
import { SITE_INFO } from "@/data/site";
import { generateBreadcrumbSchema } from "@/utils/schema";
import styles from "./Experiences.module.scss";

export const metadata: Metadata = {
  title: "Curated Experiences in Lonavala | Velora Stays",
  description:
    "Discover Lonavala with curated experiences — heritage walks, food tours, sunset cruises, cooking classes, and more. Book at Velora Stays.",
  alternates: { canonical: "/explore/experiences" },
  openGraph: {
    title: "Curated Experiences in Lonavala | Velora Stays",
    description: "Handpicked local experiences to make your Lonavala visit unforgettable.",
    url: `${SITE_INFO.url}/explore/experiences`,
  },
};

const EXPERIENCES = [
  {
    id: "exp-heritage-walk",
    title: "Heritage Fort Trek",
    description: "Trek through the historic trails of Lohagad and Tikona forts, discovering ancient gateways, carved stone pathways, and panoramic views of the Pawna Lake and Sahyadri mountains.",
    duration: "4 Hours",
    price: "₹800",
    icon: "lucide:landmark",
    image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?w=800&q=80",
  },
  {
    id: "exp-street-food",
    title: "Local Food Trail",
    description: "Taste your way through Lonavala's legendary street food scene — from iconic chikki and fudge at Maganlal to vada pav, misal pav, and pav bhaji at popular local eateries.",
    duration: "3 Hours",
    price: "₹600",
    icon: "lucide:utensils",
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880049?w=800&q=80",
  },
  {
    id: "exp-art-district",
    title: "Local Crafts & Art Walk",
    description: "Explore Lonavala's local artisan workshops, pottery studios, and craft markets. Discover handmade chikki boxes, traditional Maharashtrian art, and unique souvenirs from skilled local craftspeople.",
    duration: "5 Hours",
    price: "₹900",
    icon: "lucide:palette",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
  },
  {
    id: "exp-sunset-cruise",
    title: "Sunset Lake Cruise",
    description: "Glide along the calm waters of Pawna Lake as the sun sets behind the Sahyadri mountains and ancient hill forts. A magical golden-hour experience surrounded by nature.",
    duration: "2 Hours",
    price: "₹1,200",
    icon: "lucide:sailboat",
    image: "https://images.unsplash.com/photo-1569383746724-6f1b882b8f46?w=800&q=80",
  },
  {
    id: "exp-cooking-class",
    title: "Maharashtrian Cooking Class",
    description: "Learn to prepare authentic Maharashtrian dishes from a local chef. Master the art of misal pav, vada pav, bhakarwadi, puran poli, and traditional thali in a hands-on session.",
    duration: "3 Hours",
    price: "₹1,500",
    icon: "lucide:chef-hat",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80",
  },
  {
    id: "exp-shopping-tour",
    title: "Shopping Tour",
    description: "Navigate the bustling lanes of Lonavala Market, browse local chikki and fudge shops, and find authentic handicrafts and souvenirs at popular stores with an expert local guide.",
    duration: "Half Day",
    price: "₹500",
    icon: "lucide:shopping-bag",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
  },
];

export default function ExperiencesPage() {
  return (
    <div>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "Explore", url: `${SITE_INFO.url}/explore` },
          { name: "Experiences", url: `${SITE_INFO.url}/explore/experiences` },
        ])}
      />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Breadcrumb
            items={[
              { label: "Explore", href: "/explore" },
              { label: "Experiences", href: "/explore/experiences" },
            ]}
          />
          <p className={styles.eyebrow}>Explore</p>
          <h1 className={styles.title}>Curated Experiences</h1>
          <p className={styles.subtitle}>
            Immerse yourself in the soul of Lonavala with our handpicked local
            experiences, each crafted to give you an authentic and unforgettable
            taste of Pawna Lake and Lonavala.
          </p>
        </div>
      </section>

      <div className={styles.grid}>
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={exp.image} alt={exp.title} width={400} height={250} />
              <div className={styles.cardIcon}>
                <Icon icon={exp.icon} width={20} height={20} />
              </div>
            </div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{exp.title}</h2>
              <p className={styles.cardDesc}>{exp.description}</p>
              <div className={styles.cardMeta}>
                <span className={styles.metaItem}>
                  <Icon icon="lucide:clock" width={14} height={14} />
                  {exp.duration}
                </span>
                <span className={styles.metaItem}>
                  <Icon icon="lucide:indian-rupee" width={14} height={14} />
                  {exp.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
