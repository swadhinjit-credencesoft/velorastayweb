"use client";

import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import {
  FOOTER_GROUPS,
  FOOTER_SOCIAL,
  FOOTER_CONTACT,
} from "@/data/navigation";
import { SITE_INFO } from "@/data/site";
import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.brand}>
              <Link href="/" className={styles.logo}>
                <span className={styles.logoText}>{SITE_INFO.name}</span>
              </Link>
              <p className={styles.tagline}>{SITE_INFO.tagline}</p>

              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <Icon icon="lucide:map-pin" width={16} height={16} />
                  <span>{FOOTER_CONTACT.address}</span>
                </div>
                <a
                  href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`}
                  className={styles.contactItem}
                >
                  <Icon icon="lucide:phone" width={16} height={16} />
                  <span>{FOOTER_CONTACT.phone}</span>
                </a>
                <a
                  href={`mailto:${FOOTER_CONTACT.email}`}
                  className={styles.contactItem}
                >
                  <Icon icon="lucide:mail" width={16} height={16} />
                  <span>{FOOTER_CONTACT.email}</span>
                </a>
                <div className={styles.contactItem}>
                  <Icon icon="lucide:clock" width={16} height={16} />
                  <span>{FOOTER_CONTACT.hours}</span>
                </div>
              </div>

              <div className={styles.social}>
                {FOOTER_SOCIAL.map((social) => (
                  <a
                    key={social.id}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={styles.socialLink}
                  >
                    <Icon icon={social.icon} width={18} height={18} />
                  </a>
                ))}
              </div>
            </div>

            {FOOTER_GROUPS.map((group) => (
              <div key={group.id} className={styles.column}>
                <h3 className={styles.columnTitle}>{group.title}</h3>
                <ul className={styles.columnLinks}>
                  {group.links.map((link) => (
                    <li key={link.id}>
                      <Link href={link.href} className={styles.footerLink}>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.container}>
          <div className={styles.bottomInner}>
            <p className={styles.credits}>
              Designed &amp; Developed by{" "}
              <a href="https://www.credencesoft.in/" target="_blank" rel="noopener noreferrer">
                CredenceSoft
              </a>
              , Powered by{" "}
              <a href="https://bookonepms.com/" target="_blank" rel="noopener noreferrer">
                BookOne
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
