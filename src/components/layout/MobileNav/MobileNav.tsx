"use client";

import { useState, useCallback, useEffect, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Icon from "@/components/Icon/Icon";
import { NAV_GROUPS, NAV_CTA } from "@/data/navigation";
import { SITE_ASSETS, SITE_INFO } from "@/data/site";
import { useBhabanData } from "@/hooks/useBhabanData";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMobileNavOpen } from "@/store/slices/uiSlice";
import styles from "./MobileNav.module.scss";

export default function MobileNav() {
  const pathname = usePathname();
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector((s) => s.ui.isMobileNavOpen);
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);
  const { villas } = useBhabanData();

  const navGroups = useMemo(() => {
    if (!villas || villas.length === 0) return NAV_GROUPS;
    return NAV_GROUPS.map((group) => {
      if (group.id !== "nav-villas") return group;
      return {
        ...group,
        children: [
          {
            id: "nav-villas-all",
            label: "All Rooms",
            href: "/rooms",
            description: "Browse our complete room collection",
            icon: "lucide:layout-grid",
          },
          ...villas.map((v) => ({
            id: `nav-room-${v.slug}`,
            label: v.name,
            href: `/rooms/${v.slug}`,
            description: v.tagline || `${v.beds} Bed, ₹${v.price}`,
            icon: v.beds > 2 ? "lucide:users" : "lucide:bed",
          })),
        ],
      };
    });
  }, [villas]);

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

  // Suppress Bishnu Bhaban mobile nav on Jamindar Nest route
  if (pathname === "/jamindar-nest" || pathname?.startsWith("/jamindar-nest/")) {
    return null;
  }

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
          <Link href="/" className={styles.logo} onClick={close}>
            <Image
              src={SITE_ASSETS.logo}
              alt={SITE_INFO.name}
              width={664}
              height={453}
              className={styles.logoImage}
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

        <div className={styles.links}>
          {/* Jamindar Nest Heritage Feature Banner in Mobile Menu */}
          <div className={styles.jamindarBanner}>
            <Link
              href="/jamindar-nest"
              className={styles.jamindarCard}
              onClick={close}
            >
              <div className={styles.jamindarIcon}>
                <Icon icon="lucide:sparkles" width={16} height={16} />
              </div>
              <div className={styles.jamindarBody}>
                <span className={styles.jamindarEyebrow}>HERITAGE BOUTIQUE STAY</span>
                <span className={styles.jamindarTitle}>JAMINDAR NEST</span>
                <span className={styles.jamindarSubtitle}>Chakra Tirtha Road, Puri</span>
              </div>
              <Icon icon="lucide:arrow-right" width={14} height={14} className={styles.jamindarArrow} />
            </Link>
          </div>

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
              href={`tel:${SITE_INFO.phone.replace(/\s+/g, "")}`}
              className={styles.contactLink}
            >
              <Icon icon="lucide:phone" width={16} height={16} />
              <span>{SITE_INFO.phone}</span>
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
            href={NAV_CTA.href}
            className={styles.ctaButton}
            onClick={close}
          >
            <Icon icon={NAV_CTA.icon} width={16} height={16} />
            {NAV_CTA.label}
          </Link>
        </div>
      </nav>
    </>
  );
}
