import Button from "@/components/ui/Button/Button";
import styles from "./CTA.module.scss";

interface CtaButton {
  label: string;
  href: string;
  variant: "primary" | "secondary" | "outline" | "ghost";
  icon?: string;
}

interface CTAProps {
  eyebrow?: string;
  heading: string;
  description?: string;
  buttons?: CtaButton[];
  backgroundImage?: string;
}

export default function CTA({
  eyebrow,
  heading,
  description,
  buttons = [],
  backgroundImage,
}: CTAProps) {
  return (
    <section
      className={`${styles.section} ${backgroundImage ? styles.withBg : ""}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      {backgroundImage && <div className={styles.bgOverlay} />}
      <div className={styles.container}>
        <div className={styles.content}>
          {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
          <h2 className={`${styles.heading} font-oswald`}>{heading}</h2>
          {description && <p className={styles.description}>{description}</p>}
          {buttons.length > 0 && (
            <div className={styles.actions}>
              {buttons.map((btn) => (
                <Button
                  key={btn.label}
                  variant={btn.variant}
                  size="lg"
                  href={btn.href}
                  icon={btn.icon}
                  iconPosition="right"
                >
                  {btn.label}
                </Button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
