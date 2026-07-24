import Icon from "@/components/Icon/Icon";
import Badge from "@/components/ui/Badge/Badge";
import Button from "@/components/ui/Button/Button";
import styles from "./VillaPricing.module.scss";

interface VillaPricingProps {
  price: number;
  originalPrice?: number;
  currency: string;
  priceUnit: string;
  villaSlug: string;
}

export default function VillaPricing({
  price,
  originalPrice,
  currency,
  priceUnit,
  villaSlug,
}: VillaPricingProps) {
  const hasDiscount = !!originalPrice && originalPrice > price;
  const discountPercent = hasDiscount
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;

  return (
    <div className={styles.pricing}>
      <div className={styles.priceRow}>
        {hasDiscount && (
          <div className={styles.originalPriceBlock}>
            <span className={styles.originalLabel}>Was</span>
            <span className={styles.originalPrice}>
              {currency}{originalPrice}
            </span>
          </div>
        )}
        <div className={styles.currentPriceBlock}>
          <span className={styles.currentPrice}>
            {currency}{price}
          </span>
          <span className={styles.priceUnit}>{priceUnit}</span>
        </div>
        {hasDiscount && (
          <Badge variant="success">
            Save {discountPercent}%
          </Badge>
        )}
      </div>

      <div className={styles.notes}>
        <span className={styles.taxNote}>
          <Icon icon="lucide:receipt" width={14} height={14} />
          Inclusive of all taxes
        </span>
        <span className={styles.guaranteeNote}>
          <Icon icon="lucide:shield-check" width={14} height={14} />
          Best Price Guarantee
        </span>
      </div>

      <Button
        variant="accent"
        size="lg"
        href={`/villas/${villaSlug}`}
        icon="lucide:calendar-check"
        iconPosition="left"
        className={styles.bookButton}
      >
        Book Now
      </Button>
    </div>
  );
}
