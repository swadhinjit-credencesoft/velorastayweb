"use client";

import { useMemo } from "react";
import Icon from "@/components/Icon/Icon";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import type { VillaAmenity } from "@/types";
import styles from "./VillaAmenities.module.scss";

interface VillaAmenitiesProps {
  amenities: string[];
  allAmenities: VillaAmenity[];
}

type Category = VillaAmenity["category"];

const CATEGORY_LABELS: Record<Category, string> = {
  basic: "Basic Amenities",
  bathroom: "Bathroom",
  entertainment: "Entertainment",
  kitchen: "Kitchen & Dining",
  comfort: "Comfort",
  service: "Service",
  outdoor: "Outdoor",
};

const CATEGORY_ORDER: Category[] = [
  "outdoor",
  "basic",
  "entertainment",
  "kitchen",
  "comfort",
  "bathroom",
  "service",
];

export default function VillaAmenities({ amenities, allAmenities }: VillaAmenitiesProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  const grouped = useMemo(() => {
    const matched = allAmenities.filter((a) => amenities.includes(a.id));
    const groups: Record<Category, VillaAmenity[]> = {
      basic: [],
      bathroom: [],
      entertainment: [],
      kitchen: [],
      comfort: [],
      service: [],
      outdoor: [],
    };
    matched.forEach((a) => groups[a.category].push(a));
    return CATEGORY_ORDER.filter((c) => groups[c].length > 0).map((c) => ({
      category: c,
      label: CATEGORY_LABELS[c],
      items: groups[c],
    }));
  }, [amenities, allAmenities]);

  return (
    <div
      ref={ref}
      className={`${styles.wrapper} ${isVisible ? styles.visible : ""}`}
    >
      {grouped.map((group, gi) => (
        <div
          key={group.category}
          className={styles.group}
          style={{ transitionDelay: `${gi * 80}ms` }}
        >
          <h4 className={styles.categoryTitle}>{group.label}</h4>
          <div className={styles.grid}>
            {group.items.map((amenity) => (
              <div key={amenity.id} className={styles.item}>
                <span className={styles.iconWrap}>
                  <Icon icon={amenity.icon} width={20} height={20} />
                </span>
                <span className={styles.label}>{amenity.label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
