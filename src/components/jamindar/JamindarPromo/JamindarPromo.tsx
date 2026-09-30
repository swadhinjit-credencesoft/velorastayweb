import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import { jamindarData } from "@/data/jamindar";
import styles from "./JamindarPromo.module.scss";

export default function JamindarPromo() {
  return (
    <section className={styles.section} aria-label="Introducing Jamindar Nest">
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src="/images/jamindar/homeherojamidar.avif"
                alt="Introducing Jamindar Nest by Bishnu Bhaban"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.image}
              />
              <div className={styles.badge}>
                <Icon icon="lucide:sparkles" width={14} height={14} />
                <span>New Experience</span>
              </div>
            </div>
          </div>

          <div className={styles.contentColumn}>
            <span className={styles.eyebrow}>INTRODUCING</span>
            <div className={styles.promoBrand}>
              <Image
                src={jamindarData.logo}
                alt={jamindarData.name}
                width={180}
                height={64}
                className={styles.promoLogo}
              />
            </div>
            <span className={styles.tagline}>A NEW CHAPTER OF HERITAGE</span>

            <p className={styles.description}>
              Bishnu Bhaban proudly unveils Jamindar Nest — an intimate, boutique heritage retreat on Chakra Tirtha Road, Puri. Designed for travelers seeking quiet comfort, warm Odia hospitality, and refined coastal living.
            </p>

            <div className={styles.features}>
              <div className={styles.featureItem}>
                <Icon icon="lucide:map-pin" width={18} height={18} />
                <span>Chakra Tirtha Road, Puri</span>
              </div>
              <div className={styles.featureItem}>
                <Icon icon="lucide:compass" width={18} height={18} />
                <span>Minutes from Puri Golden Beach</span>
              </div>
              <div className={styles.featureItem}>
                <Icon icon="lucide:bed-double" width={18} height={18} />
                <span>Signature Nest AC Suites</span>
              </div>
            </div>

            <div className={styles.actions}>
              <Link href="/jamindar-nest" className={styles.primaryLink}>
                <span>EXPLORE JAMINDAR NEST</span>
                <Icon icon="lucide:arrow-right" width={18} height={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
