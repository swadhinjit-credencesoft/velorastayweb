import Image from "next/image";
import { jamindarData } from "@/data/jamindar";
import styles from "./JamindarExperience.module.scss";

export default function JamindarExperience() {
  const { experiences } = jamindarData;

  return (
    <section id="experiences" className={styles.section} aria-label="Experiences at Jamindar Nest">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>CURATED ENGAGEMENT</span>
          <h2 className={styles.heading}>DISCOVER THE EXPERIENCE</h2>
          <p className={styles.subtitle}>
            Moments steeped in the spiritual, coastal, and culinary textures of Puri.
          </p>
        </div>

        <div className={styles.experienceList}>
          {experiences.map((exp, idx) => (
            <div
              key={exp.id}
              className={`${styles.item} ${idx % 2 === 1 ? styles.reverse : ""}`}
            >
              <div className={styles.imageBox}>
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className={styles.image}
                />
              </div>

              <div className={styles.textBox}>
                <span className={styles.category}>{exp.title}</span>
                <h3 className={styles.title}>{exp.subtitle}</h3>
                <p className={styles.desc}>{exp.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
