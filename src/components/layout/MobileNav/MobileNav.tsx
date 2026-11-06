"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon/Icon";
import { NAV_GROUPS, NAV_CTA } from "@/data/navigation";
import { SITE_ASSETS, SITE_INFO } from "@/data/site";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMobileNavOpen } from "@/store/slices/uiSlice";
import styles from "./MobileNav.module.scss";

export default function MobileNav() {
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((s) => s.ui.isMobileNavOpen);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const close = useCallback(() => { dispatch(setMobileNavOpen(false)); setExpandedGroup(null); }, [dispatch]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape" && isOpen) close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, close]);

  return <>
    <div className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`} onClick={close} aria-hidden="true" />
    <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`} aria-label="Mobile navigation">
      <div className={styles.header}>
        <Link href="/" className={styles.logo} onClick={close}><Image src={SITE_ASSETS.logo} alt={SITE_INFO.name} width={2412} height={1954} className={styles.logoImage}/></Link>
        <button type="button" className={styles.closeBtn} aria-label="Close navigation" onClick={close}><Icon icon="lucide:x" width={22} height={22}/></button>
      </div>
      <div className={styles.links}>{NAV_GROUPS.map((group) => <div key={group.id} className={styles.group}>
        <div className={styles.groupHeader}><Link href={group.href ?? "/"} className={styles.groupLink} onClick={close}>{group.label}</Link>
          <button type="button" className={`${styles.expandBtn} ${expandedGroup === group.id ? styles.expandBtnOpen : ""}`} aria-label={`Expand ${group.label}`} aria-expanded={expandedGroup === group.id} onClick={() => setExpandedGroup((current) => current === group.id ? null : group.id)}><Icon icon="lucide:chevron-down" width={18} height={18}/></button>
        </div>
        <div className={`${styles.accordion} ${expandedGroup === group.id ? styles.accordionOpen : ""}`} role="region"><ul className={styles.childList}>{group.children.map((child) => <li key={child.id}><Link href={child.href} className={styles.childLink} onClick={close}><Icon icon={child.icon ?? "lucide:link"} width={16} height={16}/><span>{child.label}</span></Link></li>)}</ul></div>
      </div>)}</div>
      <div className={styles.footer}><div className={styles.contactList}>
        <a href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`} className={styles.contactLink}><Icon icon="lucide:phone" width={16} height={16}/><span>{SITE_INFO.phone}</span></a>
        <a href={`tel:${SITE_INFO.listingPhone.replace(/\s+/g, "")}`} className={styles.contactLink}><Icon icon="lucide:phone-call" width={16} height={16}/><span>{SITE_INFO.listingPhone}</span></a>
        <a href={`mailto:${SITE_INFO.email}`} className={styles.contactLink}><Icon icon="lucide:mail" width={16} height={16}/><span>{SITE_INFO.email}</span></a>
      </div><Link href={NAV_CTA.href} className={styles.ctaButton} onClick={close}><Icon icon={NAV_CTA.icon} width={16} height={16}/>{NAV_CTA.label}</Link></div>
    </nav>
  </>;
}
