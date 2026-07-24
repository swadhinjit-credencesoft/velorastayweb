import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import styles from "./PageHero.module.scss";

interface PageHeroProps {
  eyebrow: string;
  heading: string;
  description?: string;
  breadcrumbs: { label: string; href: string }[];
  bgImage?: string;
}

export default function PageHero({
  eyebrow,
  heading,
  description,
  breadcrumbs,
  bgImage,
}: PageHeroProps) {
  return (
    <section
      className={styles.hero}
      style={bgImage ? { backgroundImage: `url(${bgImage})` } : undefined}
    >
      <div className={styles.overlay} />
      <div className={styles.content}>
        <Breadcrumb items={breadcrumbs} />
        <span className={styles.eyebrow}>{eyebrow}</span>
        <h1 className={`${styles.heading} font-oswald`}>{heading}</h1>
        {description && (
          <p className={styles.description}>{description}</p>
        )}
      </div>
    </section>
  );
}
