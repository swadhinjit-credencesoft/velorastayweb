"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import { jamindarData } from "@/data/jamindar";
import styles from "./JamindarRooms.module.scss";

export default function JamindarRooms() {
  const { rooms } = jamindarData;
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!rooms || rooms.length === 0) return null;
  const room = rooms[0];

  return (
    <section id="rooms" className={styles.section} aria-label="Jamindar Stay Accommodations">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>ACCOMMODATIONS</span>
          <h2 className={styles.heading}>STAY YOUR WAY</h2>
          <p className={styles.subtitle}>
            Intimate sanctuary spaces crafted for unhurried comfort and peaceful nights.
          </p>
        </div>

        <div className={styles.roomCard}>
          <div className={styles.mediaColumn}>
            <div className={styles.mainImageWrapper}>
              <Image
                src={room.images[activeImageIdx] || room.image}
                alt={room.name}
                fill
                sizes="(max-width: 1024px) 100vw, 55vw"
                className={styles.mainImage}
              />
              <div className={styles.priceBadge}>
                <span className={styles.currency}>{room.currency}</span>
                <span className={styles.priceNum}>{room.price.toLocaleString("en-IN")}</span>
                <span className={styles.unit}>/{room.priceUnit}</span>
              </div>
            </div>

            {room.images.length > 1 && (
              <div className={styles.thumbnails}>
                {room.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`${styles.thumbBtn} ${activeImageIdx === idx ? styles.activeThumb : ""}`}
                    onClick={() => setActiveImageIdx(idx)}
                    aria-label={`View photo ${idx + 1}`}
                  >
                    <Image
                      src={img}
                      alt={`${room.name} thumbnail ${idx + 1}`}
                      fill
                      sizes="100px"
                      className={styles.thumbImage}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className={styles.detailsColumn}>
            <div className={styles.titleArea}>
              <span className={styles.roomBadge}>Heritage Haven</span>
              <h3 className={styles.roomName}>{room.name}</h3>
              <p className={styles.tagline}>{room.tagline}</p>
            </div>

            <p className={styles.description}>{room.description}</p>

            <div className={styles.specsGrid}>
              <div className={styles.specItem}>
                <Icon icon="lucide:users" width={18} height={18} />
                <span>Up to {room.maxOccupancy} Guests</span>
              </div>
              <div className={styles.specItem}>
                <Icon icon="lucide:bed" width={18} height={18} />
                <span>{room.bed}</span>
              </div>
              <div className={styles.specItem}>
                <Icon icon="lucide:maximize-2" width={18} height={18} />
                <span>{room.size}</span>
              </div>
              <div className={styles.specItem}>
                <Icon icon="lucide:shield-check" width={18} height={18} />
                <span>Private Attached Bath</span>
              </div>
            </div>

            <div className={styles.amenitiesArea}>
              <h4 className={styles.amenitiesTitle}>Included Amenities</h4>
              <ul className={styles.amenitiesList}>
                {room.amenities.map((amenity, idx) => (
                  <li key={idx} className={styles.amenityItem}>
                    <Icon icon="lucide:check" width={16} height={16} className={styles.checkIcon} />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={styles.ctaRow}>
              <a
                href={room.cta.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.bookButton}
              >
                <Icon icon="lucide:calendar-check" width={18} height={18} />
                <span>{room.cta.label}</span>
              </a>
              <span className={styles.directGuarantee}>
                <Icon icon="lucide:sparkles" width={14} height={14} />
                Direct reservation via BookOne engine
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
