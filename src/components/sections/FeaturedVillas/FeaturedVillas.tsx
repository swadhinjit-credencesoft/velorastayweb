"use client";

import Button from "@/components/ui/Button/Button";
import RoomCard from "@/components/ui/Card/Card";
import PriceDisplay from "@/components/ui/PriceDisplay/PriceDisplay";
import Icon from "@/components/Icon/Icon";
import { VILLAS_CONTENT } from "@/data/villas";
import { SITE_INFO } from "@/data/site";
import { useHotelData } from "@/hooks/useHotelData";
import styles from "./FeaturedVillas.module.scss";

export default function FeaturedVillas() {
  const { rooms } = useHotelData();
  const popularVillas = rooms;

  return (
    <section className={styles.section} id="featured-rooms">
      {/* Ambient Lighting Accents */}
      <div className={styles.ambientGlow} />

      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.eyebrowWrapper}>
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrow}>{VILLAS_CONTENT.eyebrow}</span>
            <span className={styles.eyebrowLine} />
          </div>
          <h2 className={`${styles.heading} font-oswald`}>{VILLAS_CONTENT.heading}</h2>
          <p className={styles.description}>{VILLAS_CONTENT.description}</p>
        </div>

        <div className={styles.grid}>
          {popularVillas.map((villa, idx) => {
            const waText = encodeURIComponent(
              `Hello Y Hotels Signature, I would like to inquire about booking the ${villa.name} (Jharsuguda).`
            );
            return (
              <div key={villa.id} className={styles.cardItem} style={{ animationDelay: `${idx * 150}ms` }}>
                <RoomCard
                  image={typeof villa.images?.[0] === "string" ? villa.images[0] : villa.images?.[0]?.src}
                  badge={villa.tag}
                >
                  <div className={styles.roomInfo}>
                    <div className={styles.roomTitleRow}>
                      <h3 className={styles.roomName}>{villa.name}</h3>
                      {villa.floor && (
                        <span className={styles.floorBadge}>
                          <Icon icon="lucide:layers" width={12} height={12} />
                          {villa.floor.split(" ")[0]} Fl.
                        </span>
                      )}
                    </div>
                    <p className={styles.roomTagline}>{villa.tagline}</p>

                    <div className={styles.roomMeta}>
                      <span className={styles.metaItem}>
                        <Icon icon="lucide:users" width={14} height={14} />
                        Up to {villa.maxOccupancy} Guests
                      </span>
                      <span className={styles.metaItem}>
                        <Icon icon="lucide:utensils" width={14} height={14} />
                        EP · CP · MAP · AP
                      </span>
                    </div>

                    <div className={styles.roomFooter}>
                      <div className={styles.priceContainer}>
                        <PriceDisplay
                          price={villa.price}
                          originalPrice={villa.originalPrice}
                          currency={villa.currency}
                        />
                        <span className={styles.priceSubtext}>per night / room</span>
                      </div>

                      <div className={styles.cardActions}>
                        <a
                          href={`https://wa.me/91${SITE_INFO.phone.replace(/[^0-9]/g, "").slice(-10)}?text=${waText}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.waIconBtn}
                          aria-label={`Inquire about ${villa.name} on WhatsApp`}
                          title="Instant WhatsApp Inquiry"
                        >
                          <Icon icon="lucide:message-circle" width={17} height={17} />
                        </a>
                        <Button variant="outline" size="sm" href={`/rooms/${villa.slug}`}>
                          Details
                        </Button>
                      </div>
                    </div>
                  </div>
                </RoomCard>
              </div>
            );
          })}
        </div>

        <div className={styles.cta}>
          <div className={styles.ctaCard}>
            <div className={styles.ctaText}>
              <h4 className={styles.ctaTitle}>Need multiple rooms or group arrangements?</h4>
              <p className={styles.ctaDesc}>
                Contact our reception directly for special corporate rates, group bookings, and tailored meal packages.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Button
                variant="primary"
                size="md"
                href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`}
                icon="lucide:phone"
                iconPosition="left"
              >
                Call {SITE_INFO.phone}
              </Button>
              <Button variant="ghost" size="md" href="/rooms">
                Explore All Rooms
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
