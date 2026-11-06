import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import Badge from "@/components/ui/Badge/Badge";
import { NEARBY_CONTENT, NEARBY_ATTRACTIONS } from "@/data/nearby";
import styles from "./NearbyAttractions.module.scss";

const DISPLAY_ATTRACTIONS = NEARBY_ATTRACTIONS.slice(0, 10);

export default function NearbyAttractions() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{NEARBY_CONTENT.eyebrow}</span>
          <h2 className={`${styles.heading} font-oswald`}>{NEARBY_CONTENT.heading}</h2>
          <p className={styles.description}>{NEARBY_CONTENT.description}</p>
        </div>

        {DISPLAY_ATTRACTIONS.length > 0 ? <div className={styles.scrollRow}>
          {DISPLAY_ATTRACTIONS.map((attraction) => (
            <div
              key={attraction.id}
              className={styles.card}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={attraction.image}
                  alt="Representative landscape stock photo; not a photograph of this destination"
                  fill
                  sizes="280px"
                  className={styles.image}
                />
                <span className={styles.distanceBadge}>Stock image</span>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <Link href={`/nearby/${attraction.slug}`} className={styles.cardName}>{attraction.name}</Link>
                  <Badge variant="neutral" size="sm">{attraction.category}</Badge>
                </div>
                <p className={styles.cardTravel}>{attraction.description}</p>
              </div>
            </div>
          ))}
        </div> : <p className={styles.description}>We do not have verified nearby attraction details to publish. Contact the hotel team for current local directions and transport information.</p>}

        {DISPLAY_ATTRACTIONS.length > 0 && <div className={styles.viewAll}>
          <a href="/explore" className={styles.viewAllLink}>View All Attractions <Icon icon="lucide:arrow-right" width={16} height={16} /></a>
        </div>}
      </div>
    </section>
  );
}
