"use client";

import Image from "next/image";
import { useVeloraData } from "@/hooks/useVeloraData";
import { VILLAS } from "@/data/villas";
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((img) => (
                  <div
                    key={img.id}
                    className="relative aspect-[4/3] rounded-xl overflow-hidden group"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt || villa.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-3">
                      <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        {img.caption || img.alt || villa.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
