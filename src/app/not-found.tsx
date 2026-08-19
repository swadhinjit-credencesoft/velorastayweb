import Button from "@/components/ui/Button/Button";
import Icon from "@/components/Icon";
import { SITE_ASSETS } from "@/data/site";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <section
      className={styles.section}
      style={{ backgroundImage: `url(${SITE_ASSETS.notFoundImage})` }}
    >
      <div className={styles.overlay} />
      <div className={styles.container}>
        <span className={styles.badge}>
          <Icon icon="lucide:compass" width={15} height={15} />
          Error
        </span>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <span className={styles.accentLine} aria-hidden="true" />
        <h1 className={styles.heading}>Page Not Found</h1>
        <p className={styles.description}>
          The page you are looking for does not exist or has been moved. Let us
          guide you back to your stay at The Queen&apos;s Head – Paharganj.
        </p>
        <div className={styles.actions}>
          <Button
            variant="accent"
            size="lg"
            href="/"
            icon="lucide:arrow-left"
            iconPosition="left"
          >
            Back to Home
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="/rooms"
            icon="lucide:bed-double"
            iconPosition="left"
            className={styles.outlineOnDark}
          >
            Explore Rooms
          </Button>
        </div>
      </div>
    </section>
  );
}
