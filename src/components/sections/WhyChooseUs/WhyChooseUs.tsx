import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import { SITE_ASSETS, PROPERTY_FEATURES, SITE_INFO } from "@/data/site";
import styles from "./WhyChooseUs.module.scss";

export default function WhyChooseUs() {
  return (
    <section className={styles.section} id="about-property">
      {/* Subtle ambient lighting */}
      <div className={styles.ambientBlob} />

      <div className={styles.container}>
        <div className={styles.layout}>
          {/* Visual Column with Cinematic Image and Floating Badges */}
          <div className={styles.imageCol}>
            <div className={styles.imageWrap}>
              <Image
                src={SITE_ASSETS.aboutImage}
                alt="Representative hotel lobby stock photo, not Y Hotels Signature"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className={styles.image}
              />
              <div className={styles.imageOverlay} />

              {/* Floating Badge Top */}
              <div className={styles.floatingBadgeTop}>
                <Icon icon="lucide:map-pin" width={16} height={16} className={styles.badgeIcon} />
                <span>Mangalam Tower, Sarbahal Road</span>
              </div>

              {/* Floating Badge Bottom */}
              <div className={styles.floatingBadgeBottom}>
                <div className={styles.shieldIconWrap}>
                  <Icon icon="lucide:shield-check" width={20} height={20} />
                </div>
                <div>
                  <div className={styles.badgeBold}>Verified Hospitality</div>
                  <div className={styles.badgeLight}>Vishal Sharma · GST Registered</div>
                </div>
              </div>
            </div>
            <p className={styles.disclaimerText}>
              Representative stock photo; not a photo of the hotel.
            </p>
          </div>

          {/* Content Column */}
          <div className={styles.contentCol}>
            <div className={styles.eyebrowWrapper}>
              <span className={styles.eyebrowLine} />
              <span className={styles.eyebrow}>Why Y Hotels Signature</span>
            </div>
            <h2 className={`${styles.heading} font-oswald`}>
              A considered stay in Jharsuguda
            </h2>
            <p className={styles.description}>
              Conveniently located at Mangalam Tower on Sarbahal Road, Y Hotels Signature brings together
              well-appointed Deluxe, Super Deluxe, and Executive rooms. Whether visiting for industrial work,
              rail transit, or regional business, enjoy personalized care and flexible meal plan options.
            </p>

            {/* Elevated Stats Grid */}
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statIcon}>
                  <Icon icon="lucide:bed-double" width={22} height={22} />
                </div>
                <div>
                  <span className={styles.statValue}>34</span>
                  <span className={styles.statLabel}>Guest Rooms</span>
                </div>
              </div>

              <div className={styles.statItem}>
                <div className={styles.statIcon}>
                  <Icon icon="lucide:layout-grid" width={22} height={22} />
                </div>
                <div>
                  <span className={styles.statValue}>3</span>
                  <span className={styles.statLabel}>Categories</span>
                </div>
              </div>

              <div className={styles.statItem}>
                <div className={styles.statIcon}>
                  <Icon icon="lucide:utensils" width={22} height={22} />
                </div>
                <div>
                  <span className={styles.statValue}>4</span>
                  <span className={styles.statLabel}>Meal Plans</span>
                </div>
              </div>
            </div>

            {/* Direct Quick Action Buttons */}
            <div className={styles.actionsRow}>
              <Link href="/about" className={styles.learnMoreLink}>
                <span>Discover Hotel Story</span>
                <Icon icon="lucide:arrow-right" width={16} height={16} />
              </Link>
              <a
                href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`}
                className={styles.callBadge}
              >
                <Icon icon="lucide:phone" width={15} height={15} />
                <span>Call {SITE_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className={styles.featuresGrid}>
          {PROPERTY_FEATURES.map((feature, idx) => (
            <div
              key={feature.id}
              className={styles.featureCard}
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className={styles.featureIcon}>
                <Icon icon={feature.icon} width={24} height={24} />
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureText}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
