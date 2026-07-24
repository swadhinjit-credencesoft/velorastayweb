import styles from "./PriceDisplay.module.scss";

interface PriceDisplayProps {
  price: number;
  originalPrice?: number;
  currency?: string;
  unit?: string;
}

export default function PriceDisplay({
  price,
  originalPrice,
  currency = "₹",
  unit = "per night",
}: PriceDisplayProps) {
  const hasDiscount = !!originalPrice && originalPrice > price;

  return (
    <div className={styles.priceDisplay}>
      {hasDiscount && (
        <span className={styles.original}>
          {currency}{originalPrice}
        </span>
      )}
      <span className={styles.current}>
        {currency}{price}
      </span>
      <span className={styles.unit}>{unit}</span>
    </div>
  );
}
