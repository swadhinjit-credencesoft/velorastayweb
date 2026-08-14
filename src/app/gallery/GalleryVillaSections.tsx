"use client";

import Image from "next/image";
import { useVeloraData } from "@/hooks/useVeloraData";
import { VILLAS } from "@/data/villas";
import GalleryGrid from "@/components/sections/Gallery/GalleryGrid";
import type { VillaType } from "@/types";

function uniqueImages(villa: VillaType): VillaType["images"] {
  const seen = new Set<string>();
  return (villa.images ?? []).filter((img) => {
    if (seen.has(img.src)) return false;
    seen.add(img.src);
    return true;
  });
}

export default function GalleryVillaSections() {
  const { villas, error } = useVeloraData();
  const items = !error && villas.length > 0 ? villas : VILLAS;

  const sorted = [...items].sort((a, b) => b.bedrooms - a.bedrooms);

  return (
    <>
      {sorted.map((villa) => {
        const images = uniqueImages(villa);
        if (images.length === 0) return null;
        return (
          <section key={villa.id} className="py-12 bg-white border-b last:border-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{villa.name}</h2>
              <GalleryGrid
                images={images.map((img) => ({
                  id: img.id,
                  src: img.src,
                  alt: img.alt || villa.name,
                  caption: img.caption || img.alt || villa.name,
                }))}
              />
            </div>
          </section>
        );
      })}
    </>
  );
}
