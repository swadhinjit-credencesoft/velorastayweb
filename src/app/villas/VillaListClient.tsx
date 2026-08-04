"use client";

import Link from "next/link";
import Image from "next/image";
import { useVeloraData } from "@/hooks/useVeloraData";
import type { VillaType } from "@/types";
import styles from "./villas.module.scss";

interface VillaListClientProps {
  fallbackVillas: VillaType[];
}

export default function VillaListClient({ fallbackVillas }: VillaListClientProps) {
  const { villas, error } = useVeloraData();
  const items = !error && villas.length > 0 ? villas : fallbackVillas;

  return (
    <section className={styles.gridSection}>
      <div className={styles.grid}>
        {items.map((villa) => (
          <Link
            key={villa.id}
            href={`/villas/${villa.slug}`}
            className={styles.card}
          >
            <div className={styles.imageWrap}>
              <Image
                src={villa.images[0]?.src}
                alt={villa.images[0]?.alt}
                width={400}
                height={250}
                className={styles.image}
              />
              {villa.tag && <span className={styles.tag}>{villa.tag}</span>}
            </div>
            <div className={styles.cardBody}>
              <h2 className={styles.name}>{villa.name}</h2>
              <p className={styles.tagline}>{villa.tagline}</p>
              <div className={styles.meta}>
                <span>{villa.bedrooms} BHK</span>
                <span>Max {villa.maxOccupancy} guests</span>
              </div>
              <div className={styles.priceRow}>
                <span className={styles.price}>
                  {villa.currency}{villa.price.toLocaleString("en-IN")}
                </span>
                {villa.originalPrice && (
                  <span className={styles.originalPrice}>
                    {villa.currency}{villa.originalPrice.toLocaleString("en-IN")}
                  </span>
                )}
                <span className={styles.unit}>/ {villa.priceUnit}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
