"use client";

import Icon from "@/components/Icon/Icon";
import { CONTACT_INFO } from "@/data/contact";
import { SITE_INFO, GOOGLE_MAPS_URL } from "@/data/site";
import styles from "./ContactForm.module.scss";

export default function ContactForm() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <span className={styles.eyebrow}>Contact</span>
          <h2 className={styles.heading}>Get in touch with the hotel</h2>
          <p className={styles.description}>Call or email Y Hotels Signature for room availability, meal plan options and current rates.</p>
        </div>
        <div className={styles.infoGrid}>
          {CONTACT_INFO.map((info) => <div key={info.label} className={styles.infoCard}>
            <span className={styles.infoIcon}><Icon icon={info.icon} width={22} height={22}/></span>
            <div className={styles.infoBody}><span className={styles.infoLabel}>{info.label}</span>
              {info.href && info.href !== "#" ? <a href={info.href} className={styles.infoHref} target={info.href.startsWith("http") ? "_blank" : undefined} rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}>{info.value}</a> : <span className={styles.infoValue}>{info.value}</span>}
            </div>
          </div>)}
        </div>
        <div className={styles.sectionAlt}>
          <div className={styles.sectionHeader}><span className={styles.eyebrow}>Find Us</span><h2 className={styles.heading}>Y Hotels Signature, Jharsuguda</h2><p className={styles.description}>{SITE_INFO.address.full}</p></div>
          <div className={styles.mapCard}><iframe src={GOOGLE_MAPS_URL} className={styles.map} title="Y Hotels Signature location map" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade" /></div>
        </div>
      </div>
    </section>
  );
}
