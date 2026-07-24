"use client";

import { useMemo } from "react";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import { VILLA_AMENITIES } from "@/data/villas";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import type { VillaType } from "@/types";
import styles from "./VillaComparison.module.scss";

interface VillaComparisonProps {
  villas: VillaType[];
}

interface ComparisonRow {
  label: string;
  icon: string;
  values: string[];
}

const HIGHLIGHT_KEYS = ["size", "occupancy"];

export default function VillaComparison({ villas }: VillaComparisonProps) {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.05 });

  const rows: ComparisonRow[] = useMemo(() => {
    if (villas.length === 0) return [];
    return [
      {
        label: "Price",
        icon: "lucide:indian-rupee",
        values: villas.map((r) => `${r.currency}${r.price} / ${r.priceUnit}`),
      },
      {
        label: "Size",
        icon: "lucide:maximize",
        values: villas.map((r) => `${r.size} ${r.sizeUnit}`),
      },
      {
        label: "Bedrooms",
        icon: "lucide:bed",
        values: villas.map((r) => `${r.bedrooms} BHK`),
      },
      {
        label: "Bathrooms",
        icon: "lucide:bath",
        values: villas.map((r) => `${r.bathrooms}`),
      },
      {
        label: "View",
        icon: "lucide:mountain",
        values: villas.map((r) => r.view || "Lake View"),
      },
      {
        label: "Key Amenities",
        icon: "lucide:sparkles",
        values: villas.map((r) =>
          r.amenities
            .slice(0, 5)
            .map((id) => VILLA_AMENITIES.find((a) => a.id === id)?.label ?? id)
            .join(", "),
        ),
      },
    ];
  }, [villas]);

  const getMinIndices = (rowIdx: number): number[] => {
    const row = rows[rowIdx];
    if (!row) return [];
    if (row.label === "Price") {
      const prices = villas.map((r) => r.price);
      const min = Math.min(...prices);
      return prices.reduce<number[]>((acc, p, i) => (p === min ? [...acc, i] : acc), []);
    }
    if (row.label === "Size") {
      const sizes = villas.map((r) => r.size ?? 0);
      const max = Math.max(...sizes);
      return sizes.reduce<number[]>((acc, s, i) => (s === max ? [...acc, i] : acc), []);
    }
    if (row.label === "Occupancy") {
      const occs = villas.map((r) => r.maxOccupancy);
      const max = Math.max(...occs);
      return occs.reduce<number[]>((acc, o, i) => (o === max ? [...acc, i] : acc), []);
    }
    return [];
  };

  return (
    <div ref={ref} className={`${styles.wrapper} ${isVisible ? styles.visible : ""}`}>
      <div className={styles.scrollContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th className={styles.labelCol}></th>
              {villas.map((villa) => (
                <th key={villa.id} className={styles.roomCol}>
                  <div className={styles.roomHeader}>
                    {villa.tag && (
                      <span className={styles.roomTag}>{villa.tag}</span>
                    )}
                    <h4 className={styles.roomName}>{villa.name}</h4>
                    {villa.originalPrice && villa.originalPrice > villa.price && (
                      <span className={styles.discountBadge}>
                        {Math.round(
                          ((villa.originalPrice - villa.price) / villa.originalPrice) * 100,
                        )}
                        % OFF
                      </span>
                    )}
                    <Link href={`/villas/${villa.slug}`} className={styles.bookBtn}>
                      Book
                    </Link>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => {
              const highlights = getMinIndices(ri);
              return (
                <tr
                  key={row.label}
                  className={styles.row}
                  style={{ transitionDelay: `${ri * 50}ms` }}
                >
                  <td className={styles.labelCell}>
                    <Icon icon={row.icon} width={16} height={16} />
                    <span>{row.label}</span>
                  </td>
                  {row.values.map((val, ci) => (
                    <td
                      key={ci}
                      className={`${styles.valueCell} ${
                        highlights.includes(ci) ? styles.highlighted : ""
                      }`}
                    >
                      {val}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
