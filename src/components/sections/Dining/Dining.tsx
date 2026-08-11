import Icon from "@/components/Icon/Icon";
import Button from "@/components/ui/Button/Button";
import { DINING_CONTENT, MEAL_PACKAGES, MENU_SECTIONS } from "@/data/dining";
import styles from "./Dining.module.scss";

export default function Dining() {
  return (
    <section className={styles.section} id="dining">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{DINING_CONTENT.eyebrow}</span>
          <h2 className={`${styles.heading} font-oswald`}>{DINING_CONTENT.heading}</h2>
          <p className={styles.description}>{DINING_CONTENT.description}</p>
        </div>

        <div className={styles.packages}>
          {MEAL_PACKAGES.filter((pkg) => pkg.premium).map((pkg) => (
            <section key={pkg.id} className={styles.premiumBanner}>
              <span className={styles.premiumBadge}>
                <Icon icon="lucide:crown" width={14} height={14} />
                Premium
              </span>
              <div className={styles.premiumBannerInner}>
                <div className={styles.premiumInfo}>
                  <h3 className={styles.premiumName}>{pkg.name}</h3>
                  <p className={styles.premiumPrice}>{pkg.price}</p>
                  <p className={styles.premiumDesc}>{pkg.description}</p>
                </div>
                <ul className={styles.premiumIncludes}>
                  {pkg.includes.map((inc) => (
                    <li key={inc}>
                      <Icon icon="lucide:check" width={16} height={16} />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ))}

          <div className={styles.packagesGrid}>
            {MEAL_PACKAGES.filter((pkg) => !pkg.premium).map((pkg) => (
              <div key={pkg.id} className={`${styles.packageCard} ${pkg.popular ? styles.packageCardPopular : ""}`}>
                {pkg.popular && <span className={styles.popularTag}>Most Popular</span>}
                <h3 className={styles.packageName}>{pkg.name}</h3>
                <p className={styles.packagePrice}>{pkg.price}</p>
                <p className={styles.packageDesc}>{pkg.description}</p>
                <ul className={styles.packageIncludes}>
                  {pkg.includes.map((inc) => (
                    <li key={inc}>
                      <Icon icon="lucide:check" width={14} height={14} />
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.menu}>
          <h3 className={styles.menuHeading}>A Taste of Our Menu</h3>
          <div className={styles.menuGrid}>
            {MENU_SECTIONS.slice(0, 4).map((section) => (
              <div key={section.id} className={styles.menuCard}>
                <div className={styles.menuCardHeader}>
                  <Icon icon={section.icon} width={18} height={18} />
                  <h4>{section.title}</h4>
                </div>
                <ul className={styles.menuItems}>
                  {section.items.slice(0, 3).map((item) => (
                    <li key={item.name} className={styles.menuItem}>
                      <span className={styles.menuItemName}>{item.name}</span>
                      <span className={styles.menuItemDots} />
                      <span className={styles.menuItemPrice}>{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.cta}>
          <Button
            href="/downloads/food-menu.pdf"
            download
            variant="accent"
            size="lg"
            icon="lucide:file-down"
            iconPosition="left"
          >
            Download Menu
          </Button>
          <Button
            href="/downloads/full-meal-package.pdf"
            download
            variant="secondary"
            size="lg"
            icon="lucide:file-down"
            iconPosition="left"
          >
            Download Meal Package
          </Button>
          <Button
            href="/food-menu"
            variant="outline"
            size="lg"
            icon="lucide:book-open"
            iconPosition="left"
          >
            View Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
}
