"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import Modal from "@/components/ui/Modal/Modal";
import styles from "./GalleryGrid.module.scss";

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export default function GalleryGrid({ images, columns = 3 }: GalleryGridProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i === null ? i : (i + images.length - 1) % images.length));
  }, [images.length]);

  const next = useCallback(() => {
    setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));
  }, [images.length]);

  const activeImage = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div className={`${styles.grid} ${styles[`cols${columns}`]}`}>
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={styles.item}
            onClick={() => setActiveIndex(index)}
            aria-label={`View ${image.alt}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 50vw, 33vw"
              className={styles.image}
            />
            <div className={styles.overlay}>
              <Icon icon="lucide:expand" width={20} height={20} />
              {image.caption && <span className={styles.caption}>{image.caption}</span>}
            </div>
          </button>
        ))}
      </div>

      <Modal isOpen={activeIndex !== null} onClose={close}>
        {activeImage && (
          <div className={styles.lightbox}>
            <div className={styles.lightboxMedia}>
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                width={900}
                height={600}
                className={styles.lightboxImg}
              />
            </div>
            {activeImage.caption && (
              <p className={styles.lightboxCaption}>{activeImage.caption}</p>
            )}
            <div className={styles.lightboxNav}>
              <button type="button" className={styles.navBtn} onClick={prev} aria-label="Previous image">
                <Icon icon="lucide:chevron-left" width={24} height={24} />
              </button>
              <span className={styles.lightboxCount}>
                {(activeIndex ?? 0) + 1} / {images.length}
              </span>
              <button type="button" className={styles.navBtn} onClick={next} aria-label="Next image">
                <Icon icon="lucide:chevron-right" width={24} height={24} />
              </button>
            </div>
          </div>
        )}
      </Modal>
    </>
  );
}
