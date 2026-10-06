import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import {
  TRUST_BADGES,
  SITE_ASSETS,
  SITE_INFO,
  WHY_BHABAN_FEATURES,
} from "@/data/site";
import styles from "./WhyChooseUs.module.scss";

export default function WhyChooseUs() {
  const stats = [
    { value: `${SITE_INFO.rating}`, label: "Guest Rating", icon: "lucide:star" },
    { value: `${SITE_INFO.reviewCount}+`, label: "Verified Reviews", icon: "lucide:message-square" },
    { value: "1000+", label: "Happy Guests", icon: "lucide:users" },
    { value: "24/7", label: "Support", icon: "lucide:headphones" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <Image
                src={SITE_ASSETS.aboutImage}
                alt="Bishnu Bhaban villa entrance"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.contentCol}>
            <span className={styles.eyebrow}>Why Bishnu Bhaban?</span>
            <h2 className={`${styles.heading} font-oswald`}>
              Why Bishnu Bhaban?
            </h2>
            <p className={styles.description}>
              We offer a comfortable stay just fifty metres from the West Gate of Shri
              Jagannath Temple, and we do not pretend to be more than that. What we
              commit to is the set of things that decide whether a Puri trip went well: a
              clean room every time, hot water at any hour, a front desk open from 7 AM
              to 11 PM, and a price that does not need justifying.
            </p>

            <div className={styles.statsGrid}>
              {stats.map((stat) => (
                <div key={stat.label} className={styles.statItem}>
                  <Icon icon={stat.icon} width={20} height={20} />
                  <span className={styles.statValue}>{stat.value}</span>
                  <span className={styles.statLabel}>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.featuresGrid}>
          {WHY_BHABAN_FEATURES.map((feature) => (
            <div key={feature.id} className={styles.featureCard}>
              <div className={styles.featureIcon}>
                <Icon icon={feature.icon} width={24} height={24} />
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureText}>{feature.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.badgesGrid}>
          {TRUST_BADGES.map((badge) => (
            <div
              key={badge.id}
              className={styles.badgeCard}
            >
              <div className={styles.badgeIcon}>
                <Icon icon={badge.icon} width={24} height={24} />
              </div>
              <div>
                <h3 className={styles.badgeLabel}>{badge.label}</h3>
                {badge.value && (
                  <p className={styles.badgeValue}>{badge.value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
