import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { SITE_INFO } from "@/data/site";
import { ALA_CARTE_BBQ, ALA_CARTE_PRICES, DINING_CONTENT, MEAL_PACKAGES, MENU_SECTIONS } from "@/data/dining";
import MenuPrintButton from "./MenuPrintButton";
import styles from "./food-menu.module.scss";

export const metadata: Metadata = {
  title: "Food Menu & Packages | Velora Stays",
  description:
    "Browse the Velora Stays food menu and meal packages — fresh vegetarian and non-vegetarian dishes, BBQ grills, and premium chef packages. Download or print the premium menu.",
  alternates: { canonical: "/food-menu" },
  openGraph: {
    title: "Food Menu & Packages | Velora Stays",
    description: "Fresh home-style meals, BBQ, and premium chef packages at Velora Stays, Pawna Lake.",
    url: `${SITE_INFO.url}/food-menu`,
  },
};

export default function FoodMenuPage() {
  return (
    <main className={styles.page}>
      <JsonLd schema={generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Food Menu", url: "/food-menu" }])} />

      <section className={styles.cover}>
        <div className={styles.coverImage}>
          <Image
            src="/images/diningarea.avif"
            alt="Velora Stays dining"
            fill
            className={styles.coverImg}
            sizes="100vw"
            priority
          />
          <div className={styles.coverOverlay} />
        </div>
        <div className={styles.coverInner}>
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Food Menu", href: "/food-menu" }]} />
          <p className={styles.coverEyebrow}>Velora Stays</p>
          <h1 className={styles.coverTitle}>Food Menu &amp; Packages</h1>
          <p className={styles.coverTagline}>{DINING_CONTENT.tagline}</p>
          <p className={styles.coverSub}>{DINING_CONTENT.description}</p>
          <MenuPrintButton />
        </div>
      </section>

      <section className={styles.packages}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Meal Packages</h2>

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
                {pkg.popular && <span className={styles.popularTag}>Popular</span>}
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

          <h3 className={styles.priceTableTitle}>À La Carte — Prices per Person</h3>
          <div className={styles.priceTableWrap}>
            <table className={styles.priceTable}>
              <thead>
                <tr>
                  <th scope="col">Meal</th>
                  <th scope="col">Adult (Above 12 years)</th>
                  <th scope="col">Child (Above 6 years)</th>
                  <th scope="col">Kids (Below 6 years)</th>
                </tr>
              </thead>
              <tbody>
                {ALA_CARTE_PRICES.map((row) => (
                  <tr key={row.meal}>
                    <td>{row.meal}</td>
                    <td>{row.adult}</td>
                    <td>{row.child}</td>
                    <td>{row.kids}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className={styles.bbqNote}>{ALA_CARTE_BBQ}</p>
          </div>
        </div>
      </section>

      <section className={styles.menu}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>The Menu</h2>
          {MENU_SECTIONS.map((section) => (
            <div key={section.id} className={styles.menuSection}>
              <div className={styles.menuSectionHeader}>
                <Icon icon={section.icon} width={20} height={20} />
                <h3>{section.title}</h3>
                {section.select && <span className={styles.menuSelect}>{section.select}</span>}
              </div>
              {section.note && <p className={styles.menuNote}>{section.note}</p>}
              <ul className={styles.menuList}>
                {section.items.map((item) => (
                  <li key={item.name} className={styles.menuRow}>
                    <span className={styles.menuRowLeft}>
                      <span className={styles.menuName}>{item.name}</span>
                      {item.description && (
                        <span className={styles.menuDesc}>{item.description}</span>
                      )}
                    </span>
                    {item.price && (
                      <>
                        <span className={styles.menuDots} />
                        <span className={styles.menuPrice}>{item.price}</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <p className={styles.note}>{DINING_CONTENT.referenceNote}</p>

          <p className={styles.feedback}>{DINING_CONTENT.feedback}</p>

          <div className={styles.downloads}>
            <h3 className={styles.downloadsTitle}>Download Menu</h3>
            <div className={styles.downloadButtons}>
              <a href="/downloads/full-meal-package.pdf" download className={styles.downloadBtn}>
                <Icon icon="lucide:file-down" width={18} height={18} />
                Meal Package
              </a>
              <a href="/downloads/food-menu.pdf" download className={styles.downloadBtn}>
                <Icon icon="lucide:file-down" width={18} height={18} />
                Food Menu
              </a>
            </div>
          </div>

          <div className={styles.actions}>
            <Link href="https://bookone.io/Velora-Stays?bookingEngine=true" target="_blank" rel="noopener noreferrer" className={styles.bookBtn}>
              Book a Stay
            </Link>
            <Link href="/" className={styles.homeBtn}>
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
