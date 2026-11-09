import Image from "next/image";
import Icon from "@/components/Icon";
import { TRUST_BADGES, SITE_ASSETS, SITE_INFO } from "@/data/site";
import type { TrustBadge } from "@/types";
import styles from "./WhyChooseUs.module.scss";

interface WhyChooseUsProps {
  image?: string;
  heading?: string;
  description?: string;
  siteName?: string;
  stats?: Array<{ value: string; label: string; icon: string }>;
  badges?: TrustBadge[];
}

export default function WhyChooseUs({
  image = SITE_ASSETS.aboutImage,
  heading = "Hotel Yogiraj Difference",
  description = "From our location only 300 meters from the Sai Baba Temple to comfortable rooms and dependable 24-hour service, every detail is designed to make your Shirdi stay simple and comfortable. We combine modern conveniences with warm Indian hospitality to create a welcoming home away from home for every pilgrim and traveller.",
  siteName = SITE_INFO.name,
  stats,
  badges = TRUST_BADGES,
}: WhyChooseUsProps = {}) {
  const defaultStats = [
    { value: `${SITE_INFO.rating}`, label: "Guest Rating", icon: "lucide:star" },
    { value: "24/7", label: "Front Desk", icon: "lucide:headphones" },
    { value: "Free", label: "Wi-Fi", icon: "lucide:wifi" },
    { value: "300m", label: "To Sai Baba Temple", icon: "lucide:map-pin" },
  ];

  const activeStats = stats || defaultStats;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.layout}>
          <div className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <Image
                src={image}
                alt={`${siteName} hotel entrance`}
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className={styles.image}
              />
            </div>
          </div>

          <div className={styles.contentCol}>
            <span className={styles.eyebrow}>Why Choose Us</span>
            <h2 className={`${styles.heading} font-oswald`}>
              {heading}
            </h2>
            <p className={styles.description}>
              {description}
            </p>

            <div className={styles.statsGrid}>
              {activeStats.map((stat) => (
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
          {badges.map((badge) => (
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
