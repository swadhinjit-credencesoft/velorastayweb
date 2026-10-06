import type { Metadata } from "next";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { SITE_INFO } from "@/data/site";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "@/data/gallery";
import GalleryGrid from "@/components/sections/Gallery/GalleryGrid";
import styles from "./Gallery.module.scss";

export const metadata: Metadata = {
  title: "Photo Gallery | Bishnu Bhaban",
  description:
    "Photographs of Bishnu Bhaban in Puri: the entrance and front desk at the West Gate of the Shri Jagannath Temple, the guest rooms, and the common areas.",
  alternates: { canonical: "/explore/gallery" },
  openGraph: {
    title: "Photo Gallery | Bishnu Bhaban",
    description: "A look at the property before you book.",
    url: `${SITE_INFO.url}/explore/gallery`,
  },
};

export default function GalleryPage() {
  return (
    <div>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: SITE_INFO.url },
          { name: "Explore", url: `${SITE_INFO.url}/explore` },
          { name: "Gallery", url: `${SITE_INFO.url}/explore/gallery` },
        ])}
      />

      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <Breadcrumb
            items={[
              { label: "Explore", href: "/explore" },
              { label: "Gallery", href: "/explore/gallery" },
            ]}
          />
          <p className={styles.eyebrow}>Explore</p>
          <h1 className={styles.title}>Gallery</h1>
          <p className={styles.subtitle}>
            A look around the property before you book. If you want to see a specific
            room, ask the front desk and we will show you.
          </p>
        </div>
      </section>

      <div className={styles.filters}>
        <span className={`${styles.filterBtn} ${styles.active}`}>All</span>
        {GALLERY_CATEGORIES.map((cat) => (
          <span key={cat.id} className={styles.filterBtn}>
            {cat.name}
          </span>
        ))}
      </div>

      <div className={styles.gridWrap}>
        <GalleryGrid
          columns={4}
          images={GALLERY_IMAGES.map((img) => ({
            id: img.id,
            src: img.src,
            alt: img.alt,
            caption: img.caption,
          }))}
        />
      </div>

      <p className={styles.count}>
        Showing {GALLERY_IMAGES.length} of {GALLERY_IMAGES.length} photos
      </p>
    </div>
  );
}
