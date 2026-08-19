"use client";

import { useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon";
import Modal from "@/components/ui/Modal/Modal";
import { GALLERY_IMAGES } from "@/data/gallery";
import styles from "./Gallery.module.scss";

const VILLA_IMAGES = GALLERY_IMAGES.map((img) => ({
  id: img.id,
  src: img.src,
  alt: img.alt,
  caption: img.caption || img.alt,
}));

export default function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>Gallery</span>
          <h2 className={`${styles.heading} font-oswald`}>A Glimpse Inside</h2>
        </div>

        <div className={styles.grid}>
          {VILLA_IMAGES.map((image) => (
            <button
              key={image.id}
              className={styles.gridItem}
              onClick={() => setLightboxImage(image.src)}
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
      </div>

      <Modal isOpen={!!lightboxImage} onClose={() => setLightboxImage(null)}>
        {lightboxImage && (
          <div className={styles.lightboxImage}>
            <Image
              src={lightboxImage}
              alt=""
              width={900}
              height={600}
              className={styles.lightboxImg}
            />
          </div>
        )}
      </Modal>
    </section>
  );
}
