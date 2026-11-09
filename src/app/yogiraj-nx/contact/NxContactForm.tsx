"use client";

import Icon from "@/components/Icon";
import { CONTACT_INFO, CONTACT_DEPARTMENT } from "@/data/nx/contact";
import { SITE_INFO as NX_SITE } from "@/data/nx/site";
import styles from "@/app/contact/ContactForm.module.scss";

const DEPARTMENT_ICONS: Record<string, string> = {
  "dept-general": "lucide:help-circle",
  "dept-reservations": "lucide:calendar-check",
  "dept-events": "lucide:party-popper",
  "dept-feedback": "lucide:message-square",
};

export default function NxContactForm() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Reach Us Directly</span>
            <h2 className={styles.heading}>Ways To Get In Touch</h2>
            <p className={styles.description}>
              Call, WhatsApp, or email us — our front desk is available 24/7 to help
              plan your stay in Shirdi, near the Sai Baba Temple.
            </p>
          </div>

          <div className={styles.infoGrid}>
            {CONTACT_INFO.map((info) => (
              <div key={info.label} className={styles.infoCard}>
                <span className={styles.infoIcon}>
                  <Icon icon={info.icon} width={22} height={22} />
                </span>
                <div className={styles.infoBody}>
                  <span className={styles.infoLabel}>{info.label}</span>
                  {info.href && info.href !== "#" ? (
                    <a
                      href={info.href}
                      className={styles.infoHref}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {info.value}
                    </a>
                  ) : (
                    <span className={styles.infoValue}>{info.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Departments</span>
            <h2 className={styles.heading}>Who Can Help You</h2>
            <p className={styles.description}>
              Reach the right team directly — every department responds within
              a few hours.
            </p>
          </div>

          <div className={styles.departmentList}>
            {CONTACT_DEPARTMENT.map((dept) => (
              <div key={dept.id} className={styles.departmentCard}>
                <span className={styles.departmentIcon}>
                  <Icon
                    icon={DEPARTMENT_ICONS[dept.id] ?? "lucide:user"}
                    width={18}
                    height={18}
                  />
                </span>
                <div className={styles.departmentBody}>
                  <span className={styles.departmentName}>{dept.name}</span>
                  <span className={styles.departmentDesc}>
                    {dept.description}
                  </span>
                  <a
                    href={`mailto:${dept.email}`}
                    className={styles.departmentEmail}
                  >
                    <Icon icon="lucide:mail" width={14} height={14} />
                    {dept.email}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Find Us</span>
            <h2 className={styles.heading}>Our Location</h2>
            <p className={styles.description}>
              {NX_SITE.address.full} — a central location close to the Sai Baba
              Temple and Shirdi Bus Station.
            </p>
          </div>

          <div className={styles.mapCard}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.0!2d74.48043686!3d19.76695517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPimpalwadi%20Rd%2C%20near%20Sai%20Baba%20Temple%2C%20near%20Sai%20Sh%20corner%2C%20Shiv%20Nagar%2C%20Shirdi%2C%20Maharashtra%20423109%2C%20India!5e0!3m2!1sen!2sin!4v1700000000000"
              className={styles.map}
              title="Hotel Yogiraj NX Shirdi location map"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
