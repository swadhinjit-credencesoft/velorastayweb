import Button from "@/components/ui/Button/Button";
import Icon from "@/components/Icon/Icon";
import { SITE_INFO } from "@/data/site";
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
  const waUrl = `https://wa.me/91${SITE_INFO.phone.replace(/[^0-9]/g, "").slice(-10)}?text=${encodeURIComponent(
    "Hello Y Hotels Signature, I would like to check room availability and rates."
  )}`;

  return (
    <section
      className={`${styles.section} ${backgroundImage ? styles.withBg : styles.defaultDark}`}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : undefined}
    >
      <div className={styles.bgOverlay} />
      <div className={styles.glowBlob} />

      <div className={styles.container}>
        <div className={styles.content}>
          {eyebrow && (
            <div className={styles.eyebrowWrapper}>
              <span className={styles.sparkle}>✦</span>
              <span className={styles.eyebrow}>{eyebrow}</span>
              <span className={styles.sparkle}>✦</span>
            </div>
          )}

          <h2 className={`${styles.heading} font-oswald`}>{heading}</h2>
          {description && <p className={styles.description}>{description}</p>}

          <div className={styles.actions}>
            {buttons.map((btn) => (
              <Button
                key={btn.label}
                variant={btn.variant}
                size="lg"
                href={btn.href}
                icon={btn.icon}
                iconPosition="right"
                className={btn.variant === "primary" ? styles.primaryBtn : styles.outlineBtn}
              >
                {btn.label}
              </Button>
            ))}

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.whatsappBtn}
              aria-label="Inquire via WhatsApp"
            >
              <Icon icon="lucide:message-circle" width={18} height={18} />
              <span>WhatsApp Inquire</span>
            </a>
          </div>

          <div className={styles.hotelContactMeta}>
            <span className={styles.metaItem}>
              <Icon icon="lucide:phone" width={14} height={14} />
              Direct: {SITE_INFO.phone}
            </span>
            <span className={styles.metaDivider}>·</span>
            <span className={styles.metaItem}>
              <Icon icon="lucide:clock" width={14} height={14} />
              Check-in {SITE_INFO.checkIn} / Check-out {SITE_INFO.checkOut}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
