"use client";

import Button from "@/components/ui/Button/Button";
import RoomCard from "@/components/ui/Card/Card";
import PriceDisplay from "@/components/ui/PriceDisplay/PriceDisplay";
import Icon from "@/components/Icon/Icon";
import { VILLAS_CONTENT, getPopularVillas } from "@/data/villas";
import { useVeloraData } from "@/hooks/useVeloraData";
import styles from "./FeaturedVillas.module.scss";

export default function FeaturedVillas() {
  const { villas, error } = useVeloraData();
  const popularVillas = !error && villas.length > 0 ? villas : getPopularVillas();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{VILLAS_CONTENT.eyebrow}</span>
          <h2 className={`${styles.heading} font-oswald`}>{VILLAS_CONTENT.heading}</h2>
          <p className={styles.description}>{VILLAS_CONTENT.description}</p>
        </div>

        <div className={styles.grid}>
          {popularVillas.map((villa) => (
            <div key={villa.id} className={styles.cardItem}>
              <RoomCard
                image={villa.images[0]?.src}
                badge={villa.tag}
              >
                <div className={styles.roomInfo}>
                  <h3 className={styles.roomName}>{villa.name}</h3>
                  <p className={styles.roomTagline}>{villa.tagline}</p>
                  <div className={styles.roomMeta}>
                    {villa.size && villa.sizeUnit && (
                      <span className={styles.metaItem}>
                        <Icon icon="lucide:maximize-2" width={14} height={14} />
                        {villa.size} {villa.sizeUnit}
                      </span>
                    )}
                    <span className={styles.metaItem}>
                      <Icon icon="lucide:users" width={14} height={14} />
                      Up to {villa.maxOccupancy}
                    </span>
                    <span className={styles.metaItem}>
                      <Icon icon="lucide:bed" width={14} height={14} />
                      {villa.bedrooms} BHK
                    </span>
                  </div>
                  <div className={styles.roomFooter}>
                    <PriceDisplay
                      price={villa.price}
                      originalPrice={villa.originalPrice}
                      currency={villa.currency}
                      unit={villa.priceUnit}
                    />
                    <Button variant="outline" size="sm" href={`/villas/${villa.slug}`}>
                      View Details
                    </Button>
                  </div>
                </div>
              </RoomCard>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <Button variant="secondary" size="lg" href="/villas" icon="lucide:arrow-right" iconPosition="right">
            View All Villas
          </Button>
        </div>
      </div>
    </section>
  );
}
