import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import Icon from "@/components/Icon/Icon";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { SITE_INFO } from "@/data/site";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { NEARBY_ATTRACTIONS, NEARBY_CONTENT, getAllCategories } from "@/data/nearby";
import styles from "./Nearby.module.scss";

export const metadata: Metadata = {
  title: "Explore Nearby Attractions | Velora Stays",
  description:
    "Discover the best attractions near Velora Stays in Pawna Lake, Lonavala — Lion's Point, Bhushi Dam, temples, markets, and more.",
  alternates: { canonical: "/explore/nearby-attractions" },
  openGraph: {
    title: "Nearby Attractions | Velora Stays Lonavala",
    description: "Discover landmarks, temples, markets, and parks near our villa in Pawna Lake.",
    url: `${SITE_INFO.url}/explore/nearby-attractions`,
  },
};

export default function NearbyAttractionsPage() {
  const categories = getAllCategories();

  return (
    <div>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "Explore", url: `${SITE_INFO.url}/explore` },
          { name: "Nearby Attractions", url: `${SITE_INFO.url}/explore/nearby-attractions` },
        ])}
      />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Breadcrumb
            items={[
              { label: "Explore", href: "/explore" },
              { label: "Nearby Attractions", href: "/explore/nearby-attractions" },
            ]}
          />
          <p className={styles.eyebrow}>{NEARBY_CONTENT.eyebrow}</p>
          <h1 className={styles.title}>{NEARBY_CONTENT.heading}</h1>
          <p className={styles.subtitle}>{NEARBY_CONTENT.description}</p>
        </div>
      </section>

      <div className={styles.filters}>
        <span className={`${styles.filterBtn} ${styles.active}`}>All</span>
        {categories.map((cat) => (
          <span key={cat} className={styles.filterBtn}>
            {cat}
          </span>
        ))}
      </div>

      <div className={styles.grid}>
        {NEARBY_ATTRACTIONS.map((attraction) => (
          <a
            key={attraction.id}
            href={attraction.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <div className={styles.cardImage}>
              <Image src={attraction.image} alt={attraction.name} width={400} height={250} />
              <span className={styles.cardBadge}>{attraction.category}</span>
            </div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{attraction.name}</h2>
              <p className={styles.cardDesc}>{attraction.description}</p>
              <div className={styles.cardMeta}>
                <span className={styles.metaItem}>
                  <Icon icon="lucide:map-pin" width={14} height={14} />
                  {attraction.distance}
                </span>
                <span className={styles.metaItem}>
                  <Icon icon="lucide:clock" width={14} height={14} />
                  {attraction.travelTime}
                </span>
              </div>
              {attraction.highlights && (
                <div className={styles.highlights}>
                  {attraction.highlights.map((h) => (
                    <span key={h} className={styles.highlight}>
                      {h}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
