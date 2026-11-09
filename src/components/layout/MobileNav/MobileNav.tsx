"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon";
import { NAV_GROUPS, NAV_CTA } from "@/data/navigation";
import { NX_NAV_GROUPS, NAV_CTA as NX_NAV_CTA } from "@/data/nx/navigation";
import { SITE_INFO } from "@/data/site";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMobileNavOpen } from "@/store/slices/uiSlice";
import styles from "./MobileNav.module.scss";

export default function MobileNav() {
  const pathname = usePathname();
  const isNx = pathname?.startsWith("/yogiraj-nx") || pathname?.startsWith("/hotel-yogiraj-nx");
  const navGroups = isNx ? NX_NAV_GROUPS : NAV_GROUPS;
  const navCta = isNx ? NX_NAV_CTA : NAV_CTA;
  const currentPhone = isNx ? "+91 99030 33535" : SITE_INFO.phone;
  const currentPhoneRaw = isNx ? "+919903033535" : SITE_INFO.phone.replace(/\s+/g, "");
  const currentName = isNx ? "Hotel Yogiraj NX" : SITE_INFO.name;
  const homeHref = isNx ? "/yogiraj-nx" : "/";

  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((s) => s.ui.isMobileNavOpen);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  const close = useCallback(() => {
    dispatch(setMobileNavOpen(false));
    setExpandedGroup(null);
  }, [dispatch]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) close();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  const toggleGroup = (groupId: string) => {
    setExpandedGroup((prev) => (prev === groupId ? null : groupId));
  };

  return (
    <>
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
        onClick={close}
        aria-hidden="true"
      />
      <nav
        className={`${styles.nav} ${isOpen ? styles.navOpen : ""}`}
        aria-label="Mobile navigation"
      >
        <div className={styles.header}>
          <Link href={homeHref} className={styles.logo} onClick={close}>
            <Image
              src="/yogirajlogo.png"
              alt={currentName}
              width={2000}
              height={3548}
              className={styles.logoImg}
            />
          </Link>
          <button
            type="button"
            className={styles.closeBtn}
            aria-label="Close navigation"
            onClick={close}
          >
            <Icon icon="lucide:x" width={22} height={22} />
          </button>
        </div>

        <div className={styles.propertySwitcher}>
          <Link
            href={isNx ? "/" : "/yogiraj-nx"}
            className={styles.propertySwitcherLink}
            onClick={close}
          >
            <Icon
              icon="lucide:arrow-left-right"
              width={16}
              height={16}
              className={styles.propertySwitcherIcon}
            />
            <span className={styles.propertySwitcherText}>
              {isNx ? "Switch to Hotel Yogiraj" : "Switch to Hotel Yogiraj NX"}
            </span>
            <span className={styles.propertySwitcherBadge}>
              {isNx ? "Main" : "NX"}
            </span>
          </Link>
        </div>

        <div className={styles.links}>
          {navGroups.map((group) => (
            <div key={group.id} className={styles.group}>
              <div className={styles.groupHeader}>
                <Link
                  href={group.href ?? "#"}
                  className={styles.groupLink}
                  onClick={close}
                >
                  {group.label}
                </Link>
                {group.children.length > 0 && (
                  <button
                    type="button"
                    className={`${styles.expandBtn} ${expandedGroup === group.id ? styles.expandBtnOpen : ""}`}
                    aria-label={`Expand ${group.label}`}
                    aria-expanded={expandedGroup === group.id}
                    onClick={() => toggleGroup(group.id)}
                  >
                    <Icon icon="lucide:chevron-down" width={18} height={18} />
                  </button>
                )}
              </div>
              <div
                className={`${styles.accordion} ${expandedGroup === group.id ? styles.accordionOpen : ""}`}
                role="region"
              >
                <ul className={styles.childList}>
                  {group.children.map((child) => (
                    <li key={child.id}>
                      <Link
                        href={child.href}
                        className={styles.childLink}
                        onClick={close}
                      >
                        <Icon
                          icon={child.icon ?? "lucide:link"}
                          width={16}
                          height={16}
                        />
                        <span>{child.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <div className={styles.contactList}>
            <a
              href={`tel:${currentPhoneRaw}`}
              className={styles.contactLink}
            >
              <Icon icon="lucide:phone" width={16} height={16} />
              <span>{currentPhone}</span>
            </a>
            <a
              href={`mailto:${SITE_INFO.email}`}
              className={styles.contactLink}
            >
              <Icon icon="lucide:mail" width={16} height={16} />
              <span>{SITE_INFO.email}</span>
            </a>
          </div>
          <Link
            href={navCta.href ?? "#"}
            className={styles.ctaButton}
            onClick={close}
          >
            <Icon icon={navCta.icon ?? "lucide:calendar-check"} width={16} height={16} />
            {navCta.label}
          </Link>
        </div>
      </nav>
    </>
  );
}
