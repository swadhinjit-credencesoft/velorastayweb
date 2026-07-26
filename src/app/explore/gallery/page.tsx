import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { SITE_INFO } from "@/data/site";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "@/data/gallery";
import styles from "./Gallery.module.scss";

export const metadata: Metadata = {
  title: "Photo Gallery | Velora Stays Lonavala",
  description:
    "Browse stunning photos of Velora Stays — our elegant villas, fine dining, event spaces, and the vibrant city of Lonavala. A visual journey through our villa and destination.",
  alternates: { canonical: "/explore/gallery" },
  openGraph: {
    title: "Photo Gallery | Velora Stays Lonavala",
    description: "Explore our villa and Lonavala through stunning photographs.",
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
            A visual journey through Velora Stays and the enchanting city of
            Lonavala. Browse our curated collection of photographs.
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

      <div className={styles.grid}>
        {GALLERY_IMAGES.map((image) => (
          <div key={image.id} className={styles.item}>
            <Image src={image.src} alt={image.alt} width={400} height={300} />
            {image.caption && (
              <div className={styles.overlay}>
                <span className={styles.overlayText}>{image.caption}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      <p className={styles.count}>
        Showing {GALLERY_IMAGES.length} of {GALLERY_IMAGES.length} photos
      </p>
    </div>
  );
}
