import Image from "next/image";
import Badge from "@/components/ui/Badge/Badge";
import styles from "./Card.module.scss";

interface CardProps {
  image?: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({
  image,
  badge,
  children,
  className,
  hoverable = true,
}: CardProps) {
  const classes = [styles.card, hoverable ? styles.hoverable : "", className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {image && (
        <div className={styles.imageWrap}>
          <Image
            src={image}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
          {badge && (
            <div className={styles.badgeOverlay}>
              <Badge variant="accent">{badge}</Badge>
            </div>
          )}
        </div>
      )}
      <div className={styles.content}>{children}</div>
    </div>
  );
}
