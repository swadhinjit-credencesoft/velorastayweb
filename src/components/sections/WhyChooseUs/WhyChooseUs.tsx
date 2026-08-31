import Image from "next/image";
import Icon from "@/components/Icon";
import { TRUST_BADGES, SITE_ASSETS, SITE_INFO } from "@/data/site";
import styles from "./WhyChooseUs.module.scss";

export default function WhyChooseUs() {
  const stats = [
    { value: `${SITE_INFO.rating}`, label: "Guest Rating", icon: "lucide:star" },
    { value: "24/7", label: "Front Desk", icon: "lucide:headphones" },
    { value: "Free", label: "Wi-Fi", icon: "lucide:wifi" },
    { value: "Central", label: "Near Sai Baba Temple", icon: "lucide:map-pin" },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <Image
                src={SITE_ASSETS.aboutImage}
                alt={`${SITE_INFO.name} hotel entrance`}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.contentCol}>
            <span className={styles.eyebrow}>Why Choose Us</span>
            <h2 className={`${styles.heading} font-oswald`}>
              Hotel Yogiraj Difference
            </h2>
            <p className={styles.description}>
              From our location near the Sai Baba Temple to comfortable rooms and
              dependable 24-hour service, every detail is designed to make your
              Shirdi stay simple and comfortable. We combine modern conveniences
              with warm Indian hospitality to create a welcoming home away from
              home for every pilgrim and traveller.
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
