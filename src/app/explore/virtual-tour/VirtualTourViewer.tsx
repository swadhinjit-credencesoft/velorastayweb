"use client";

import { useState } from "react";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import Icon from "@/components/Icon/Icon";
import styles from "./VirtualTour.module.scss";

const TOUR_AREAS = [
  {
    id: "entrance",
    label: "Entrance",
    icon: "lucide:door-open",
    title: "Entrance & Front Desk",
    description:
      "You come in through a gate on Grand Road, a short walk from the West Gate of the Jagannath Temple. The front desk is staffed from 7:00 AM to 11:00 PM, so if you are arriving very late or leaving before dawn, call ahead and we will arrange it.",
    highlights: [
      "Front desk 7:00 AM to 11:00 PM",
      "Luggage storage before check-in or after check-out",
      "CCTV covering entry and exit points",
      "A few minutes' walk to the temple gate",
    ],
  },
  {
    id: "standard-room",
    label: "Standard Room",
    icon: "lucide:bed-double",
    title: "Standard Room",
    description:
      "The straightforward option, and the one most of our guests book. Air-conditioned, with an attached western-style bathroom, hot water at any hour, television, and free WiFi. Cleaned daily whether or not the previous guest checked out.",
    highlights: [
      "Air conditioning",
      "Attached western-style bathroom",
      "24-hour hot water",
      "Television and free WiFi",
    ],
  },
  {
    id: "deluxe-room",
    label: "Deluxe Room",
    icon: "lucide:bed-double",
    title: "Deluxe Room",
    description:
      "More space than the Standard Room, for guests who are spending several days in Puri and would like somewhere slightly less compact to work and unwind. Same cleaning standard, same facilities, more room to move around.",
    highlights: [
      "Larger layout than the Standard Room",
      "Air conditioning",
      "Attached western-style bathroom",
      "Television and free WiFi",
    ],
  },
  {
    id: "dining",
    label: "Dining",
    icon: "lucide:utensils",
    title: "Dining",
    description:
      "Our in-house kitchen prepares Odia home cooking alongside North Indian options. Meals are ordered separately and can be added to your booking. If you are leaving before four in the morning for darshan, tell us the night before and we will have breakfast ready early.",
    highlights: [
      "Odia and North Indian home cooking",
      "Vegetarian and Jain food on advance request",
      "Meal plans available with your booking",
      "Early breakfast arranged on request",
    ],
  },
  {
    id: "multi-bed-room",
    label: "Multi-Bed Room",
    icon: "lucide:users",
    title: "Multi-Bed Room",
    description:
      "The practical choice for families and groups who would rather stay together than split across properties. Tell us how many people you are and who needs what kind of bed, and we will allocate the right room before you arrive.",
    highlights: [
      "Multiple beds in one room",
      "Suitable for families and groups",
      "Room allocation based on your requirements",
      "Air conditioning and attached bathroom",
    ],
  },
  {
    id: "common",
    label: "Common Areas",
    icon: "lucide:sofa",
    title: "Common Areas",
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
              { label: "Virtual Tour", href: "/explore/virtual-tour" },
            ]}
          />
          <p className={styles.eyebrow}>Explore</p>
          <h1 className={styles.title}>Virtual Tour</h1>
          <p className={styles.subtitle}>
            Take an immersive 360° virtual tour of Bishnu Bhaban from anywhere
            in the world. Explore our spaces before you arrive.
          </p>
        </div>
      </section>

      <section className={styles.section}>
        <div className={styles.tabs}>
          {TOUR_AREAS.map((t) => (
            <button
              key={t.id}
              className={`${styles.tab} ${activeArea === t.id ? styles.active : ""}`}
              onClick={() => setActiveArea(t.id)}
            >
              <Icon icon={t.icon} width={14} height={14} />
              {" "}{t.label}
            </button>
          ))}
        </div>

        <div className={styles.viewer}>
          <div className={`${styles.viewerCorner} ${styles.tl}`} />
          <div className={`${styles.viewerCorner} ${styles.tr}`} />
          <div className={`${styles.viewerCorner} ${styles.bl}`} />
          <div className={`${styles.viewerCorner} ${styles.br}`} />
          <div className={styles.viewerOverlay} />

          <div className={styles.viewerIcon}>
            <Icon icon="lucide:glasses" width={36} height={36} />
          </div>
          <h3 className={styles.viewerTitle}>360° View</h3>
          <p className={styles.viewerSub}>
            {area.title} — Drag to look around
          </p>
        </div>

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
            <button className={styles.launchBtn}>
              <Icon icon="lucide:maximize" width={16} height={16} />
              Launch Fullscreen
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
