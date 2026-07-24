import Image from "next/image";
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

        <div className={styles.scrollRow}>
          {DISPLAY_ATTRACTIONS.map((attraction) => (
            <div
              key={attraction.id}
              className={styles.card}
            >
              <div className={styles.imageWrap}>
                <Image
                  src={attraction.image}
                  alt={attraction.name}
                  fill
                  sizes="280px"
                  className={styles.image}
                />
                <div className={styles.distanceBadge}>
                  <Icon icon="lucide:navigation" width={12} height={12} />
                  {attraction.distance}
                </div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTop}>
                  <h3 className={styles.cardName}>{attraction.name}</h3>
                  <Badge variant="neutral" size="sm">{attraction.category}</Badge>
                </div>
                <p className={styles.cardTravel}>
                  <Icon icon="lucide:clock" width={12} height={12} />
                  {attraction.travelTime}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.viewAll}>
          <a href="/explore" className={styles.viewAllLink}>
            View All Attractions
            <Icon icon="lucide:arrow-right" width={16} height={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
