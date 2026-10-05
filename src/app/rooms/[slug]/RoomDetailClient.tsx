"use client";

import Image from "next/image";
import { useVillaBySlug } from "@/hooks/useBhabanData";
import { VILLA_AMENITIES } from "@/data/villas";
import { SITE_INFO } from "@/data/site";
import { BOOKING_ENGINE_URL } from "@/lib/api/thehotelmate";
import type { VillaAmenity, VillaType } from "@/types";
import styles from "./room-detail.module.scss";

interface RoomDetailClientProps {
  slug: string;
  fallbackRoom: VillaType;
}

function getAmenityById(id: string): VillaAmenity | undefined {
  return VILLA_AMENITIES.find((a) => a.id === id);
}

export default function RoomDetailClient({ slug, fallbackRoom }: RoomDetailClientProps) {
  const { villa: liveRoom, error } = useVillaBySlug(slug);
  const room = !error && liveRoom ? liveRoom : fallbackRoom;

  const amenities = room.amenities.map(getAmenityById).filter(Boolean) as VillaAmenity[];

  return (
    <section className={styles.page}>
      <div>
        {room.images.length > 0 && (
          <div className={styles.gallery}>
            <Image
              src={room.images[0].src}
              alt={room.images[0].alt}
              width={1200}
              height={600}
              className={styles.galleryMain}
              priority
            />
            {room.images.length > 1 && (
              <div className={styles.galleryGrid}>
                {room.images.slice(1).map((img) => (
                  <Image
                    key={img.id}
                    src={img.src}
                    alt={img.alt}
                    width={600}
                    height={400}
                    className={styles.galleryGridImg}
                  />
                ))}
              </div>
            )}
          </div>
        )}

        <div className={styles.contentGrid}>
          <div className={styles.main}>
            <div>{room.tag && <span className={styles.tag}>{room.tag}</span>}</div>
            <h1 className={styles.title}>{room.name}</h1>
            <p className={styles.tagline}>{room.tagline}</p>

            <div className={styles.quickStats}>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Beds</span>
                <strong>{room.beds}</strong>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Bathrooms</span>
                <strong>{room.bathrooms}</strong>
              </div>
              <div className={styles.stat}>
                <span className={styles.statLabel}>Guests</span>
                <strong>Up to {room.maxOccupancy}</strong>
              </div>
            </div>

            <h2 className={styles.sectionTitle}>About This Room</h2>
            <p className={styles.bodyText}>{room.longDescription || room.description}</p>

            {room.highlights && room.highlights.length > 0 && (
              <>
                <h3 className={styles.sectionTitleSm}>Highlights</h3>
                <ul className={styles.highlightsList}>
                  {room.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </>
            )}

            <h2 className={styles.sectionTitle}>Amenities</h2>
            <div className={styles.amenitiesGrid}>
              {amenities.map((amenity) => (
                <div key={amenity.id} className={styles.amenityItem}>
                  <span>{amenity.label}</span>
                </div>
              ))}
            </div>

            {room.policies && room.policies.length > 0 && (
              <>
                <h2 className={styles.sectionTitle}>Policies</h2>
                {room.policies.map((policy) => (
                  <div key={policy.id} className={styles.policyItem}>
                    <h4 className={styles.policyTitle}>{policy.title}</h4>
                    <p className={styles.policyText}>{policy.description}</p>
                  </div>
                ))}
              </>
            )}

            {room.nearby && room.nearby.length > 0 && (
              <>
                <h2 className={styles.sectionTitle}>Nearby</h2>
                <ul className={styles.nearbyList}>
                  {room.nearby.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </>
            )}
          </div>

          <div className={styles.sidebar}>
            <div className={styles.bookingCard}>
              <div className={styles.priceRow}>
                <span className={styles.price}>
                  {room.currency}{room.price.toLocaleString("en-IN")}
                </span>
                {room.originalPrice && (
                  <span className={styles.originalPrice}>
                    {room.currency}{room.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
              </div>
              <p className={styles.priceUnit}>per {room.priceUnit}</p>
              <a href={BOOKING_ENGINE_URL} className={styles.bookBtn}>Book Now</a>
              <a href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`} className={styles.callBtn}>Call to Book</a>
              <div className={styles.bookingDetails}>
                <div className={styles.bookingDetailRow}>
                  <span>Check-in</span>
                  <strong>{SITE_INFO.checkIn}</strong>
                </div>
                <div className={styles.bookingDetailRow}>
                  <span>Check-out</span>
                  <strong>{SITE_INFO.checkOut}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
