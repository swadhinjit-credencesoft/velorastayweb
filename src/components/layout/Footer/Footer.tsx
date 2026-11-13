"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";
import {
  FOOTER_GROUPS,
  FOOTER_SOCIAL,
  FOOTER_CONTACT,
} from "@/data/navigation";
import { FOOTER_GROUPS as NX_FOOTER_GROUPS } from "@/data/nx/navigation";
import { SITE_INFO } from "@/data/site";
import { SITE_INFO as NX_SITE } from "@/data/nx/site";
import styles from "./Footer.module.scss";

export default function Footer() {
  const pathname = usePathname();
  const isNx = pathname?.startsWith("/yogiraj-nx") || pathname?.startsWith("/hotel-yogiraj-nx");

  const currentSite = isNx ? NX_SITE : SITE_INFO;
  const groups = isNx ? NX_FOOTER_GROUPS : FOOTER_GROUPS;
  const logoHref = isNx ? "/yogiraj-nx" : "/";
  const phoneFormatted = isNx ? "+91 99030 33535" : FOOTER_CONTACT.phone;
  const phoneRaw = isNx ? "+919903033535" : SITE_INFO.phone.replace(/\s+/g, "");

  const socialLinks = isNx
    ? [
        {
          id: "soc-fb",
          label: "Facebook",
          href: "https://www.facebook.com/61571729401203",
          icon: "lucide:facebook",
        },
        {
          id: "soc-ig",
          label: "Instagram",
          href: "https://www.instagram.com/hotelyogirajnx/",
          icon: "lucide:instagram",
        },
        {
          id: "soc-gm",
          label: "Google Maps",
          href: "https://maps.google.com/?q=Hotel+Yogiraj+NX+Shirdi+Maharashtra",
          icon: "lucide:map-pin",
        },
      ]
    : FOOTER_SOCIAL;

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.top}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.brand}>
              <Link href={logoHref} className={styles.logo}>
                <Image
                  src="/yogirajlogo.png"
                  alt={currentSite.name}
                  width={2000}
                  height={3548}
                  className={styles.logoImg}
                />
              </Link>
              <p className={styles.tagline}>{currentSite.tagline}</p>

              <div className={styles.contactInfo}>
                <div className={styles.contactItem}>
                  <Icon icon="lucide:map-pin" width={16} height={16} />
                  <span>{currentSite.address.full}</span>
                </div>
                <a
                  href={`tel:${phoneRaw}`}
                  className={styles.contactItem}
                >
                  <Icon icon="lucide:phone" width={16} height={16} />
                  <span>{phoneFormatted}</span>
                </a>
                <a
                  href="tel:+917676773535"
                  className={styles.contactItem}
                  title="Travel & Transport (Mr. Sachin) - Special Discount"
                >
                  <Icon icon="lucide:car" width={16} height={16} />
                  <span>Travel Desk: +91 76767 73535 (Mr. Sachin)</span>
                </a>
                <a
                  href={`mailto:${currentSite.email}`}
                  className={styles.contactItem}
                >
                  <Icon icon="lucide:mail" width={16} height={16} />
                  <span>{currentSite.email}</span>
                </a>
                <div className={styles.contactItem}>
                  <Icon icon="lucide:clock" width={16} height={16} />
                  <span>Front Desk: Open 24 hours</span>
                </div>
              </div>

              <div className={styles.social}>
                {socialLinks.map((social) => (
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

            {groups.map((group) => (
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
            <p className={styles.copyright}>
              &copy; {new Date().getFullYear()} {currentSite.name}. All Rights Reserved.
            </p>
            <p className={styles.credits}>
              Designed and Developed By{" "}
              <a href="https://credencesoft.in/" target="_blank" rel="noopener noreferrer">
                CredenceSoft
              </a>
              , Powered By{" "}
              <a href="https://bookonepms.com/" target="_blank" rel="noopener noreferrer">
                BookOne
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
