import Image from "next/image";
import { jamindarData } from "@/data/jamindar";
import styles from "./JamindarOdisha.module.scss";

export default function JamindarOdisha() {
  const { odisha } = jamindarData;

  return (
    <section className={styles.section} aria-label="The Spirit of Odisha">
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.imageWrapper}>
            <Image
              src={odisha.image}
              alt="The Spirit of Odisha"
              fill
              sizes="(max-width: 1024px) 100vw, 1200px"
              className={styles.image}
            />
            <div className={styles.overlay} />
          </div>

          <div className={styles.content}>
            <span className={styles.eyebrow}>{odisha.eyebrow}</span>
            <h2 className={styles.heading}>{odisha.heading}</h2>
            <p className={styles.description}>{odisha.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
