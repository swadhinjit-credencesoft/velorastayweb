"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/Icon";
import Modal from "@/components/ui/Modal/Modal";
import { GALLERY_IMAGES } from "@/data/gallery";
import type { GalleryImage } from "@/types";
import styles from "./Gallery.module.scss";

const TABS = [
  { id: "all", label: "All Photos" },
  { id: "exterior", label: "Exterior" },
  { id: "lobby", label: "Lobby & Reception" },
  { id: "rooms", label: "Rooms & Suites" },
  { id: "dining", label: "Dining" },
];

interface GalleryProps {
  images?: GalleryImage[];
  viewAllHref?: string;
  eyebrow?: string;
  heading?: string;
  hotelName?: string;
}

export default function Gallery({
  images = GALLERY_IMAGES,
  viewAllHref = "/gallery",
  eyebrow = "Gallery",
  heading = "A Glimpse Inside",
  hotelName = "Hotel Yogiraj",
}: GalleryProps = {}) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [lightboxImage, setLightboxImage] = useState<{ src: string; caption: string } | null>(null);

  const filteredImages = useMemo(() => {
    if (activeCategory === "all") {
      return images;
    }
    return images.filter((img) => img.category === activeCategory);
  }, [activeCategory, images]);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{eyebrow}</span>
          <h2 className={`${styles.heading} font-oswald`}>{heading}</h2>
        </div>

        <div className={styles.tabs} role="tablist">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === tab.id}
              className={`${styles.tab} ${activeCategory === tab.id ? styles.activeTab : ""}`}
              onClick={() => setActiveCategory(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {filteredImages.map((image) => (
            <button
              key={image.id}
              type="button"
              className={styles.gridItem}
              onClick={() =>
                setLightboxImage({
                  src: image.src,
                  caption: image.caption || image.alt,
                })
              }
              aria-label={`View ${image.alt}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                className={styles.gridImage}
              />
              <div className={styles.gridOverlay}>
                <Icon icon="lucide:expand" width={24} height={24} />
                {image.caption && (
                  <span className={styles.caption}>{image.caption}</span>
                )}
              </div>
            </button>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <Link
            href={viewAllHref}
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-amber-600 hover:text-amber-700 hover:underline"
          >
            Explore Complete {hotelName} Gallery ({images.length} Photos) &rarr;
          </Link>
        </div>
      </div>

      <Modal isOpen={!!lightboxImage} onClose={() => setLightboxImage(null)}>
        {lightboxImage && (
          <div className={styles.lightboxImage}>
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.caption}
              width={900}
              height={600}
              style={{ objectFit: "contain", maxHeight: "80vh", width: "auto", height: "auto" }}
            />
            <p className={styles.lightboxCaption}>{lightboxImage.caption}</p>
          </div>
        )}
      </Modal>
    </section>
  );
}
