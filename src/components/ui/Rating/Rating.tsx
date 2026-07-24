import Icon from "@/components/Icon/Icon";
import styles from "./Rating.module.scss";

interface RatingProps {
  rating: number;
  maxRating?: number;
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Rating({
  rating,
  maxRating = 5,
  showValue = false,
  size = "md",
}: RatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;
  const emptyStars = maxRating - fullStars - (hasHalf ? 1 : 0);

  const iconSize = size === "sm" ? 14 : size === "lg" ? 22 : 18;

  return (
    <div className={`${styles.rating} ${styles[size]}`}>
      <div className={styles.stars}>
        {Array.from({ length: fullStars }).map((_, i) => (
          <span key={`full-${i}`} className={styles.starFilled}>
            <Icon icon="lucide:star" width={iconSize} height={iconSize} />
          </span>
        ))}
        {hasHalf && (
          <span className={styles.starHalf}>
            <Icon icon="lucide:star-half" width={iconSize} height={iconSize} />
          </span>
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <span key={`empty-${i}`} className={styles.starEmpty}>
            <Icon icon="lucide:star" width={iconSize} height={iconSize} />
          </span>
        ))}
      </div>
      {showValue && <span className={styles.value}>{rating.toFixed(1)}</span>}
    </div>
  );
}
