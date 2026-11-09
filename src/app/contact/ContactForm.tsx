"use client";

import Icon from "@/components/Icon";
import { CONTACT_INFO, CONTACT_DEPARTMENT } from "@/data/contact";
import { SITE_INFO, GOOGLE_MAPS_URL } from "@/data/site";
import styles from "./ContactForm.module.scss";

const DEPARTMENT_ICONS: Record<string, string> = {
  "dept-general": "lucide:help-circle",
  "dept-reservations": "lucide:calendar-check",
  "dept-travel": "lucide:car",
  "dept-frontdesk": "lucide:headphones",
  "dept-restaurant": "lucide:utensils",
  "dept-events": "lucide:party-popper",
  "dept-feedback": "lucide:message-square",
};

export default function ContactForm() {
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
              Reach the right team directly — for rooms, dining, or travel & transport bookings with exclusive guest discounts.
            </p>
          </div>

          <div className={styles.departmentList}>
            {CONTACT_DEPARTMENT.map((dept) => {
              const cleanPhone = dept.phone.replace(/[^0-9]/g, "");
              const waText = dept.contactPerson
                ? `Hello ${dept.contactPerson}, I am staying at Hotel Yogiraj and enquiring about transport services with special discount.`
                : `Hello ${dept.name}, I am enquiring about services at Hotel Yogiraj.`;

              return (
                <div key={dept.id} className={styles.departmentCard}>
                  <span className={styles.departmentIcon}>
                    <Icon
                      icon={DEPARTMENT_ICONS[dept.id] ?? "lucide:user"}
                      width={18}
                      height={18}
                    />
                  </span>
                  <div className={styles.departmentBody}>
                    <div className={styles.departmentHeaderRow}>
                      <span className={styles.departmentName}>{dept.name}</span>
                      {dept.specialOffer && (
                        <span className={styles.departmentBadge}>
                          {dept.specialOffer}
                        </span>
                      )}
                    </div>
                    {dept.contactPerson && (
                      <span className={styles.departmentPerson}>
                        Contact: <strong>{dept.contactPerson}</strong>
                      </span>
                    )}
                    <span className={styles.departmentDesc}>
                      {dept.description}
                    </span>
                    <div className={styles.departmentActions}>
                      <a
                        href={`tel:${dept.phone.replace(/\s+/g, "")}`}
                        className={styles.departmentPhone}
                      >
                        <Icon icon="lucide:phone" width={14} height={14} />
                        {dept.phone}
                      </a>
                      <a
                        href={`https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(
                          waText
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.departmentWhatsApp}
                      >
                        <Icon icon="lucide:message-circle" width={14} height={14} />
                        WhatsApp
                      </a>
                      <a
                        href={`mailto:${dept.email}`}
                        className={styles.departmentEmail}
                      >
                        <Icon icon="lucide:mail" width={14} height={14} />
                        {dept.email}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <span className={styles.eyebrow}>Find Us</span>
            <h2 className={styles.heading}>Our Location</h2>
            <p className={styles.description}>
              {SITE_INFO.address.full} — a central location close to the Sai Baba
              Temple and Shirdi Bus Station.
            </p>
          </div>

          <div className={styles.mapCard}>
            <iframe
              src={GOOGLE_MAPS_URL}
              className={styles.map}
              title={`${SITE_INFO.name} location map`}
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
