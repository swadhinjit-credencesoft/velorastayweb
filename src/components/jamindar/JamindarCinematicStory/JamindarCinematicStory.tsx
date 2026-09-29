import Image from "next/image";
import { jamindarData } from "@/data/jamindar";
import styles from "./JamindarCinematicStory.module.scss";

export default function JamindarCinematicStory() {
  const { cinematicStory } = jamindarData;

  return (
    <section className={styles.section} aria-label="Jamindar Story Scenes">
      <div className={styles.header}>
        <span className={styles.eyebrow}>VISUAL CHRONICLE</span>
        <h2 className={styles.heading}>MOMENTS SHAPED BY TIME</h2>
      </div>

      <div className={styles.storyGrid}>
        {cinematicStory.map((scene, idx) => (
          <div key={idx} className={styles.sceneCard}>
            <div className={styles.imageContainer}>
              <Image
                src={scene.image}
                alt={scene.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
              />
              <div className={styles.overlay} />
              <div className={styles.sceneContent}>
                <span className={styles.sceneIndex}>SCENE 0{idx + 1}</span>
                <h3 className={styles.sceneTitle}>{scene.title}</h3>
                <p className={styles.sceneSubtitle}>{scene.subtitle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
