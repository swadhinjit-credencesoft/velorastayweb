import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import { jamindarData } from "@/data/jamindar";
import styles from "./JamindarIntro.module.scss";

export default function JamindarIntro() {
  const { intro } = jamindarData;

  return (
    <section id="intro" className={styles.section} aria-label="About Jamindar Nest">
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Column: Image with architectural frame */}
          <div className={styles.imageColumn}>
            <div className={styles.imageWrapper}>
              <Image
                src={intro.image}
                alt="Jamindar Nest Entrance Portal"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={styles.image}
              />
              <div className={styles.imageBadge}>
                <Icon icon="lucide:sparkles" width={16} height={16} />
                <span>{intro.badge}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className={styles.textColumn}>
            <span className={styles.stepNumber}>{intro.number}</span>
            <h2 className={styles.heading}>{intro.heading}</h2>

            <blockquote className={styles.quote}>
              “{intro.quote}”
            </blockquote>

            <div className={styles.body}>
              <p>{intro.description}</p>
            </div>

            <div className={styles.highlights}>
              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>
                  <Icon icon="lucide:map-pin" width={20} height={20} />
                </span>
                <div>
                  <h4 className={styles.highlightTitle}>Chakra Tirtha Road</h4>
                  <p className={styles.highlightDesc}>
                    Serene coastal stretch, moments from Puri Beach
                  </p>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <span className={styles.highlightIcon}>
                  <Icon icon="lucide:heart-handshake" width={20} height={20} />
                </span>
                <div>
                  <h4 className={styles.highlightTitle}>Authentic Hospitality</h4>
                  <p className={styles.highlightDesc}>
                    Genuine Odia warmth with contemporary stay comforts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
