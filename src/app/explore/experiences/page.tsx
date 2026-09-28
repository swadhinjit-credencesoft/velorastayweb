import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import Icon from "@/components/Icon/Icon";
import { SITE_INFO } from "@/data/site";
import { generateBreadcrumbSchema } from "@/utils/schema";
import styles from "./Experiences.module.scss";

export const metadata: Metadata = {
  title: "Things to Do in Puri | Bishnu Bhaban",
  description:
    "What to do in Puri from a hotel at the West Gate of the Jagannath Temple: darshan timings, Grand Road in the evening, the beach, Konark day trip, Odia food, and market shopping.",
  alternates: { canonical: "/explore/experiences" },
  openGraph: {
    title: "Things to Do in Puri | Bishnu Bhaban",
    description:
      "Practical, honest guidance on what to do in Puri, written by the front desk at the temple gate.",
    url: `${SITE_INFO.url}/explore/experiences`,
  },
};

const EXPERIENCES = [
  {
    id: "exp-darshan",
    title: "Jagannath Temple Darshan",
    description:
      "Several aartha timings run from the pre-dawn hours through to the evening, and which ones you can attend depends on the season. Leave at 3:00 to 3:30 AM for the shortest queue, or go later and accept the crowds. Book slots through the official Jagannath Temple Management Committee — not through hotels.",
    duration: "Pre-dawn or evening",
    price: "Free",
    icon: "lucide:landmark",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
  },
  {
    id: "exp-grand-road",
    title: "Grand Road in the Evening",
    description:
      "The road closes to traffic in the evening, the stalls come out, and the whole area fills with people. This is when Puri is at its most alive, and it is a short walk from the hotel. The evening aarti draws a large crowd.",
    duration: "5:00 PM – 9:00 PM",
    price: "Free",
    icon: "lucide:shopping-bag",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
  },
  {
    id: "exp-konark",
    title: "Konark Sun Temple",
    description:
      "About 60 to 65 km from Puri, and worth a full day. The main temple, the Natya Mandapa, and the surrounding complex are one site, and the carved wheels at the base are the part that surprises people. Leave by 6:30 AM to beat the heat and the midday crowd.",
    duration: "Full day trip",
    price: "Transport and entry",
    icon: "lucide:sailboat",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
  },
  {
    id: "exp-beach",
    title: "Puri Beach",
    description:
      "Long, wide, and best avoided between late morning and mid-afternoon. The stretch north of Grand Road opens up and gets noticeably quieter. Walk and sit, but do not swim — the currents along this stretch of coast are strong and drownings happen in the surf zone every season.",
    duration: "Morning or sunset",
    price: "Free",
    icon: "lucide:waves",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
  },
  {
    id: "exp-odia-food",
    title: "Odia Food",
    description:
      "Dalma, mahaprasad, and chena poda are the three worth seeking out, and the last one is at its best the day it is made. Our own kitchen does Odia home cooking alongside North Indian food, and we are happy to point you to the places locals eat at.",
    duration: "Anytime",
    price: "Varies",
    icon: "lucide:utensils",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
  },
  {
    id: "exp-market",
    title: "Handloom & Market",
    description:
      "Odisha handloom is genuinely worth buying rather than as a gift-shop purchase. The shops on Grand Road and the surrounding lanes sell real sambalpuri work. Go before the evening crowd, and if a price feels wrong, walk away — bargaining is expected but should stay reasonable.",
    duration: "1 – 2 hours",
    price: "Free",
    icon: "lucide:palette",
    image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80",
  },
];

export default function ExperiencesPage() {
  return (
    <div>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "Explore", url: `${SITE_INFO.url}/explore` },
          { name: "Things to Do", url: `${SITE_INFO.url}/explore/experiences` },
        ])}
      />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Breadcrumb
            items={[
              { label: "Explore", href: "/explore" },
              { label: "Things to Do", href: "/explore/experiences" },
            ]}
          />
          <p className={styles.eyebrow}>Explore</p>
          <h1 className={styles.title}>Things to Do in Puri</h1>
          <p className={styles.subtitle}>
            We do not run guided tours. What we do is answer the same questions guests
            ask us every day: what to see, when to go, and what to avoid. These are the
            answers we give at the front desk, in writing.
          </p>
        </div>
      </section>

      <div className={styles.grid}>
        {EXPERIENCES.map((exp) => (
          <div key={exp.id} className={styles.card}>
            <div className={styles.cardImage}>
              <Image src={exp.image} alt={exp.title} width={400} height={250} />
              <div className={styles.cardIcon}>
                <Icon icon={exp.icon} width={20} height={20} />
              </div>
            </div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{exp.title}</h2>
              <p className={styles.cardDesc}>{exp.description}</p>
              <div className={styles.cardMeta}>
                <span className={styles.metaItem}>
                  <Icon icon="lucide:clock" width={14} height={14} />
                  {exp.duration}
                </span>
                <span className={styles.metaItem}>
                  <Icon icon="lucide:tag" width={14} height={14} />
                  {exp.price}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
