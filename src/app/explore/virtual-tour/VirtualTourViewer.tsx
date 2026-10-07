"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import Icon from "@/components/Icon/Icon";
import styles from "./VirtualTour.module.scss";

const TOUR_AREAS = [
  {
    id: "entrance",
    label: "Entrance",
    icon: "lucide:door-open",
    title: "Entrance & Front Desk",
    image: "/WhatsApp Image 2026-07-19 at 8.42.19 AM (1).jpeg",
    imageAlt: "Common seating area just inside the entrance at Bishnu Bhaban",
    description:
      "You come in through a gate on Grand Road, a short walk from the West Gate of the Shri Jagannath Temple. The front desk is staffed 24 hours, so if you are arriving very late or leaving before dawn, call ahead and someone will be waiting for you.",
    highlights: [
      "Front desk staffed 24 hours",
      "Luggage storage before check-in or after check-out",
      "CCTV covering entry and exit points",
      "A few minutes' walk to the temple gate",
    ],
  },
  {
    id: "guest-room",
    label: "Guest Room",
    icon: "lucide:bed-double",
    title: "Guest Room",
    image: "/WhatsApp Image 2026-07-19 at 8.44.10 AM.jpeg",
    imageAlt: "A guest room at Bishnu Bhaban",
    description:
      "The straightforward option, and the one most of our guests book. Air-conditioned, with an attached western-style bathroom, television, and free WiFi. Cleaned daily whether or not the previous guest checked out.",
    highlights: [
      "Air conditioning",
      "Attached western-style bathroom",
      "Television and free WiFi",
      "Daily housekeeping",
    ],
  },
  {
    id: "room-interior",
    label: "Room Interior",
    icon: "lucide:bed-double",
    title: "Room Interior",
    image: "/WhatsApp Image 2026-07-19 at 8.44.08 AM.jpeg",
    imageAlt: "Room interior at Bishnu Bhaban",
    description:
      "More space than the standard room, for guests who are spending several days in Puri and would like somewhere slightly less compact to work and unwind. Same cleaning standard, same facilities, more room to move around.",
    highlights: [
      "Larger layout than the standard room",
      "Air conditioning",
      "Attached western-style bathroom",
      "Television and free WiFi",
    ],
  },
  {
    id: "bedding",
    label: "Bedding",
    icon: "lucide:bed-double",
    title: "Bedding & Linen",
    image: "/WhatsApp Image 2026-07-19 at 8.42.20 AM.jpeg",
    imageAlt: "Bedding and linen in a guest room",
    description:
      "Fresh linen on every changeover, with extra towels available on request from the front desk. If you need a specific pillow or bedding arrangement, tell us when you book and we will set the room up before you arrive.",
    highlights: [
      "Fresh linen on every changeover",
      "Extra towels on request",
      "Pillow arrangements on request",
      "Daily housekeeping",
    ],
  },
  {
    id: "bathroom",
    label: "Bathroom",
    icon: "lucide:shower-head",
    title: "Attached Bathroom",
    image: "/WhatsApp Image 2026-07-19 at 8.42.21 AM.jpeg",
    imageAlt: "Attached bathroom at Bishnu Bhaban",
    description:
      "Every room has its own attached western-style bathroom, which is one of the reasons guests book here rather than staying on Grand Road itself. Housekeeping cleans the bathroom as part of the daily room service.",
    highlights: [
      "Attached to every room",
      "Western-style fittings",
      "Cleaned as part of daily service",
      "Hot water",
    ],
  },
  {
    id: "common",
    label: "Common Areas",
    icon: "lucide:sofa",
    title: "Common Areas",
    image: "/WhatsApp Image 2026-07-19 at 8.42.19 AM (1).jpeg",
    imageAlt: "Common seating area at Bishnu Bhaban",
    description:
      "Shared space at the front of the property, used mostly for waiting, luggage, and asking the front desk about temple timings. Grand Road closes to traffic in the evening, so it is worth asking us before booking a car for that window.",
    highlights: [
      "Seating near the front desk",
      "Help with darshan and travel timings",
      "Laundry available on request",
      "Local maps and contacts",
    ],
  },
];

export default function VirtualTourViewer() {
  const [activeArea, setActiveArea] = useState(TOUR_AREAS[0].id);
  const area = TOUR_AREAS.find((a) => a.id === activeArea) ?? TOUR_AREAS[0];

  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Breadcrumb
            items={[
              { label: "Explore", href: "/explore" },
              { label: "Property Walkthrough", href: "/explore/virtual-tour" },
            ]}
          />
          <p className={styles.eyebrow}>Explore</p>
          <h1 className={styles.title}>Property Walkthrough</h1>
          <p className={styles.subtitle}>
            Photographs of the property at Bishnu Bhaban, taken room by room,
            so you can see what you are booking before you arrive.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.tabs}>
          {TOUR_AREAS.map((t) => (
            <button
              key={t.id}
              type="button"
              className={`${styles.tab} ${activeArea === t.id ? styles.active : ""}`}
              onClick={() => setActiveArea(t.id)}
              aria-pressed={activeArea === t.id}
            >
              <Icon icon={t.icon} width={14} height={14} />
              {" "}{t.label}
            </button>
          ))}
        </div>

        <figure className={styles.viewer}>
          <Image
            src={area.image}
            alt={area.imageAlt}
            fill
            className={styles.viewerImage}
            sizes="(max-width: 768px) 100vw, 1200px"
          />
          <div className={styles.viewerOverlay} />
          <figcaption className={styles.viewerCaption}>
            <Icon icon="lucide:camera" width={16} height={16} />
            <span>{area.title}</span>
          </figcaption>
        </figure>

        <div className={styles.info}>
          <h2 className={styles.infoTitle}>{area.title}</h2>
          <p className={styles.infoDesc}>{area.description}</p>
          <ul className={styles.highlights}>
            {area.highlights.map((h, i) => (
              <li key={i} className={styles.highlightItem}>
                <span className={styles.highlightIcon}>
                  <Icon icon="lucide:check-circle-2" width={16} height={16} />
                </span>
                {h}
              </li>
            ))}
          </ul>
          <div className={styles.actions}>
            <Link href="/explore/gallery" className={styles.launchBtn}>
              <Icon icon="lucide:images" width={16} height={16} />
              See the full gallery
            </Link>
            <Link href="/rooms" className={styles.secondaryBtn}>
              <Icon icon="lucide:bed-double" width={16} height={16} />
              Browse all rooms
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
