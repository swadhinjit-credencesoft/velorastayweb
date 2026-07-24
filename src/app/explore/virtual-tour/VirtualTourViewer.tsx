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
    title: "Welcome Pavilion",
    description:
      "Step through the villa gates into a welcoming space where the beauty of the Sahyadri mountains and the tranquility of Pawna Lake set the tone for your stay. Traditional Maharashtrian hospitality meets modern comfort.",
    highlights: [
      "Personalised welcome by caretaker",
      "Complimentary welcome refreshments",
      "Open-air seating with mountain views",
      "Traditional Maharashtrian decor",
      "Luggage assistance and parking",
    ],
  },
  {
    id: "deluxe-villa",
    label: "Luxury Villa",
    icon: "lucide:bed-double",
    title: "Luxury Villa",
    description:
      "Experience our beautifully appointed Luxury Villa featuring plush bedding, modern amenities, and thoughtful design. Every detail is curated for your comfort, from the premium linens to the ambient lighting.",
    highlights: [
      "King-size premium mattress",
      "Rain shower bathroom",
      "Smart TV with streaming",
      "High-speed WiFi",
      "Private balcony with lake view",
    ],
  },
  {
    id: "dining",
    label: "Dining Area",
    icon: "lucide:utensils",
    title: "Private Kitchen & BBQ",
    description:
      "Our fully equipped kitchen and BBQ area offers a culinary experience through local and international cuisines. Cook with the freshest local ingredients or enjoy our curated meal packages in an inviting, elegant setting.",
    highlights: [
      "Fully equipped modern kitchen",
      "BBQ grill and outdoor dining",
      "Private dining on the lawn",
      "Curated meal packages available",
      "Bonfire dinner experience",
    ],
  },
  {
    id: "rooftop",
    label: "Rooftop",
    icon: "lucide:sun",
    title: "Rooftop Terrace",
    description:
      "Escape to our rooftop terrace for panoramic views of the Sahyadri mountains and Pawna Lake. Perfect for evening stargazing, sunset photography, or simply unwinding under the stars after a day of exploration.",
    highlights: [
      "Panoramic mountain and lake views",
      "Sunset views over Pawna Lake",
      "Open-air lounge seating",
      "Perfect for photography",
      "Evening ambiance lighting",
    ],
  },
  {
    id: "garden",
    label: "Garden",
    icon: "lucide:trees",
    title: "Garden Courtyard",
    description:
      "Our serene garden courtyard offers a peaceful retreat surrounded by nature. Lush greenery, a gentle water feature, and comfortable seating create a tranquil oasis for relaxation.",
    highlights: [
      "Lush tropical landscaping",
      "Water feature and seating",
      "Morning yoga space",
      "Perfect for reading",
      "Evening ambient lighting",
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
            Take an immersive 360° virtual tour of Vellora Stays from anywhere
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
