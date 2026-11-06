import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import { SITE_ASSETS, PROPERTY_FEATURES } from "@/data/site";
import styles from "./WhyChooseUs.module.scss";

export default function WhyChooseUs() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <Image src={SITE_ASSETS.aboutImage} alt="Y Hotels Signature in Jharsuguda" fill sizes="(max-width: 768px) 100vw, 45vw" className={styles.image} />
            </div>
          </div>
          <div className={styles.contentCol}>
            <span className={styles.eyebrow}>Y Hotels Signature</span>
            <h2 className={`${styles.heading} font-oswald`}>A considered stay in Jharsuguda</h2>
            <p className={styles.description}>Choose from three room categories and four meal plan options. Our team can confirm availability, occupancy and the applicable rate for your stay.</p>
            <div className={styles.statsGrid}>
              <div className={styles.statItem}><Icon icon="lucide:bed-double" width={20} height={20}/><span className={styles.statValue}>34</span><span className={styles.statLabel}>Rooms</span></div>
              <div className={styles.statItem}><Icon icon="lucide:layout-grid" width={20} height={20}/><span className={styles.statValue}>3</span><span className={styles.statLabel}>Categories</span></div>
              <div className={styles.statItem}><Icon icon="lucide:utensils" width={20} height={20}/><span className={styles.statValue}>4</span><span className={styles.statLabel}>Meal plans</span></div>
            </div>
          </div>
        </div>
        <div className={styles.featuresGrid}>
          {PROPERTY_FEATURES.map((feature) => <div key={feature.id} className={styles.featureCard}><div className={styles.featureIcon}><Icon icon={feature.icon} width={24} height={24}/></div><h3 className={styles.featureTitle}>{feature.title}</h3><p className={styles.featureText}>{feature.description}</p></div>)}
        </div>
        <div className={styles.badgesGrid}/>
      </div>
    </section>
  );
}
