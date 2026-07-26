import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { GALLERY_IMAGES, GALLERY_CATEGORIES } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Photo Gallery | Velora Stays",
  description: "Explore photos of villas, dining, events, facilities, and nearby attractions at Velora Stays Lonavala.",
  alternates: { canonical: "/gallery" },
  openGraph: { title: "Photo Gallery | Velora Stays", description: "Take a visual tour of Velora Stays through our photo gallery." },
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd schema={generateBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Gallery", url: "/gallery" }])} />

      <section className="relative py-20 pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/heroimg2.jpeg"
            alt="Velora Stays gallery"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 to-[#16213e]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Gallery", href: "/gallery" }]} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">Photo Gallery</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">Take a visual tour of Velora Stays and discover what makes us special.</p>
        </div>
      </section>

      {GALLERY_CATEGORIES.map((cat) => {
        const images = GALLERY_IMAGES.filter((img) => img.category === cat.slug);
        if (images.length === 0) return null;
        return (
          <section key={cat.id} className="py-12 bg-white border-b last:border-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{cat.name}</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((img) => (
                  <div key={img.id} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                    <Image src={img.src} alt={img.alt} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-3">
                      <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">{img.caption}</span>
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
