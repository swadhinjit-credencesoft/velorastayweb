import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { GALLERY_CATEGORIES, GALLERY_IMAGES } from "@/data/gallery";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return GALLERY_CATEGORIES.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const category = GALLERY_CATEGORIES.find((c) => c.slug === params.slug);
  if (!category) return { title: "Gallery Not Found" };
  return {
    title: `${category.name} Gallery | The Queen's Head – Paharganj`,
    description: `Photo gallery of ${category.name} at The Queen's Head – Paharganj, New Delhi.`,
    alternates: { canonical: `/gallery/${category.slug}` },
    openGraph: {
      title: `${category.name} Gallery | The Queen's Head – Paharganj`,
      description: `Photo gallery of ${category.name} at The Queen's Head – Paharganj.`,
      url: `https://shivharehotelsandtravel.com/gallery/${category.slug}`,
      images: [{ url: "/heroimg2.jpeg", alt: category.name }],
    },
  };
}

export default function GalleryCategoryPage({ params }: Props) {
  const category = GALLERY_CATEGORIES.find((c) => c.slug === params.slug);
  if (!category) notFound();

  const images = GALLERY_IMAGES.filter((img) => img.category === category.slug);
  const otherCategories = GALLERY_CATEGORIES.filter((c) => c.slug !== category.slug);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Gallery", href: "/gallery" },
    { label: category.name, href: `/gallery/${category.slug}` },
  ];

  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Gallery", url: "/gallery" },
          { name: category.name, url: `/gallery/${category.slug}` },
        ])}
      />

      <section className="relative py-20 pt-32">
        <div className="absolute inset-0 z-0">
          <Image
            src="/heroimg2.jpeg"
            alt={category.name}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a2e]/90 to-[#16213e]/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Breadcrumb items={breadcrumbs} />
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4">{category.name}</h1>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg">
            Photos of the {category.name.toLowerCase()} at The Queen&apos;s Head – Paharganj.
          </p>
        </div>
      </section>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((img) => (
              <div key={img.id} className="relative aspect-[4/3] rounded-xl overflow-hidden group">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-end p-3">
                  <span className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    {img.caption || img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {otherCategories.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Browse Other Galleries</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {otherCategories.map((c) => (
                <Link
                  key={c.id}
                  href={`/gallery/${c.slug}`}
                  className="group bg-white rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                >
                  <div className="p-5">
                    <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">
                      {c.name}
                    </h3>
                    <p className="text-sm text-gray-600 mt-1">{c.count} photos</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
