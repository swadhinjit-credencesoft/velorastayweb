"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Icon from "@/components/Icon/Icon";
import { jamindarData, type JamindarGalleryItem } from "@/data/jamindar";
import styles from "./JamindarGallery.module.scss";

export default function JamindarGallery() {
  const { gallery } = jamindarData;
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => {
    setSelectedIdx(idx);
  };

  const closeLightbox = useCallback(() => {
    setSelectedIdx(null);
  }, []);

  const nextImage = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => ((prev ?? 0) + 1) % gallery.length);
  }, [selectedIdx, gallery.length]);

  const prevImage = useCallback(() => {
    if (selectedIdx === null) return;
    setSelectedIdx((prev) => ((prev ?? 0) - 1 + gallery.length) % gallery.length);
  }, [selectedIdx, gallery.length]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };

    if (selectedIdx !== null) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIdx, closeLightbox, nextImage, prevImage]);

  return (
    <section id="gallery" className={styles.section} aria-label="Jamindar Nest Gallery">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>EDITORIAL VISIONS</span>
          <h2 className={styles.heading}>THE GALLERY</h2>
          <p className={styles.subtitle}>
            A tapestry of natural textures, tranquil rooms, and architectural warmth.
          </p>
        </div>

        <div className={styles.asymmetricGrid}>
          {gallery.map((item, idx) => {
            const spanClass = item.span ? styles[item.span] : "";
            return (
              <div
                key={idx}
                className={`${styles.gridItem} ${spanClass}`}
                onClick={() => openLightbox(idx)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(idx);
                  }
                }}
                aria-label={`View photo: ${item.alt}`}
              >
                <div className={styles.imageContainer}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className={styles.image}
                  />
                  <div className={styles.hoverOverlay}>
                    <span className={styles.viewBadge}>
                      <Icon icon="lucide:maximize-2" width={14} height={14} />
                      <span>VIEW</span>
                    </span>
                    <span className={styles.itemCaption}>{item.caption}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedIdx !== null && (
        <div
          className={styles.lightboxOverlay}
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image Lightbox"
        >
          <div
            className={styles.lightboxModal}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeBtn}
              onClick={closeLightbox}
              aria-label="Close image preview"
            >
              <Icon icon="lucide:x" width={24} height={24} />
            </button>

            <button
              type="button"
              className={`${styles.navBtn} ${styles.prevBtn}`}
              onClick={prevImage}
              aria-label="Previous image"
            >
              <Icon icon="lucide:chevron-left" width={28} height={28} />
            </button>

            <button
              type="button"
              className={`${styles.navBtn} ${styles.nextBtn}`}
              onClick={nextImage}
              aria-label="Next image"
            >
              <Icon icon="lucide:chevron-right" width={28} height={28} />
            </button>

            <div className={styles.lightboxImageWrapper}>
              <Image
                src={gallery[selectedIdx].src}
                alt={gallery[selectedIdx].alt}
                fill
                sizes="90vw"
                className={styles.lightboxImage}
                priority
              />
            </div>

            <div className={styles.lightboxCaption}>
              <span>{gallery[selectedIdx].caption}</span>
              <span className={styles.lightboxCounter}>
                {selectedIdx + 1} / {gallery.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
