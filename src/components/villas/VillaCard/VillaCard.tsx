import Link from "next/link";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import Badge from "@/components/ui/Badge/Badge";
import type { VillaType } from "@/types";
import { VILLA_AMENITIES } from "@/data/villas";
import styles from "./VillaCard.module.scss";

interface VillaCardProps {
  villa: VillaType;
}

const VISIBLE_AMENITIES = 4;

export default function VillaCard({ villa }: VillaCardProps) {
  const displayAmenities = villa.amenities.slice(0, VISIBLE_AMENITIES);
  const hasDiscount = !!villa.originalPrice && villa.originalPrice > villa.price;
  const discountPercent = hasDiscount
    ? Math.round(((villa.originalPrice! - villa.price) / villa.originalPrice!) * 100)
    : 0;

  return (
    <Link href={`/villas/${villa.slug}`} className={styles.card}>
      <div className={styles.imageWrap}>
        <Image
          src={villa.images[0]?.src ?? ""}
          alt={villa.images[0]?.alt ?? villa.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={styles.image}
        />
        {villa.tag && (
          <div className={styles.badgeOverlay}>
            <Badge variant="accent">{villa.tag}</Badge>
          </div>
        )}
        {hasDiscount && (
          <div className={styles.discountBadge}>
            <Badge variant="success">-{discountPercent}%</Badge>
          </div>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.name}>{villa.name}</h3>
          <p className={styles.tagline}>{villa.tagline}</p>
        </div>

        <div className={styles.meta}>
          <span className={styles.metaItem}>
            <Icon icon="lucide:users" width={14} height={14} />
            {villa.maxOccupancy} {villa.maxOccupancy === 1 ? "Guest" : "Guests"}
          </span>
          <span className={styles.metaItem}>
            <Icon icon="lucide:maximize" width={14} height={14} />
            {villa.size} {villa.sizeUnit}
          </span>
          <span className={styles.metaItem}>
            <Icon icon="lucide:bed" width={14} height={14} />
            {villa.bedrooms} BHK
          </span>
        </div>

        <div className={styles.amenities}>
          {displayAmenities.map((amenityId) => {
            const amenity = VILLA_AMENITIES.find((a) => a.id === amenityId);
            if (!amenity) return null;
            return (
              <span key={amenity.id} className={styles.amenityIcon} title={amenity.label}>
                <Icon icon={amenity.icon} width={16} height={16} />
              </span>
            );
          })}
          {villa.amenities.length > VISIBLE_AMENITIES && (
            <span className={styles.amenityMore}>
              +{villa.amenities.length - VISIBLE_AMENITIES}
            </span>
          )}
        </div>

        <div className={styles.footer}>
          <div className={styles.priceBlock}>
            {hasDiscount && (
              <span className={styles.originalPrice}>
                {villa.currency}{villa.originalPrice}
              </span>
            )}
            <span className={styles.price}>
              {villa.currency}{villa.price}
            </span>
            <span className={styles.priceUnit}>{villa.priceUnit}</span>
          </div>
          <span className={styles.viewBtn}>
            View Details
            <Icon icon="lucide:arrow-right" width={14} height={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
