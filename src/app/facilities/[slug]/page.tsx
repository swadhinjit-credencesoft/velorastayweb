import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import Icon from "@/components/Icon/Icon";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema } from "@/utils/schema";
import { FACILITIES, getFacilityBySlug } from "@/data/facilities";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return FACILITIES.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const facility = getFacilityBySlug(params.slug);
  if (!facility) return { title: "Facility Not Found" };
  return {
    title: `${facility.name} | Velora Stays Facilities`,
    description: facility.description,
    alternates: { canonical: `/facilities/${facility.slug}` },
    openGraph: {
      title: `${facility.name} | Velora Stays`,
      description: facility.description,
      url: `https://velorastays.in/facilities/${facility.slug}`,
    },
  };
}

export default function FacilityDetailPage({ params }: Props) {
  const facility = getFacilityBySlug(params.slug);
  if (!facility) notFound();

  const related = FACILITIES.filter(
    (f) => f.category === facility.category && f.slug !== facility.slug
  ).slice(0, 3);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Facilities", href: "/facilities" },
    { label: facility.name, href: `/facilities/${facility.slug}` },
  ];

  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Facilities", url: "/facilities" },
          { name: facility.name, url: `/facilities/${facility.slug}` },
        ])}
      />

      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src={facility.image || "/schemaimage.jpeg"}
          alt={facility.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-end">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 w-full">
            <Breadcrumb items={breadcrumbs} />
            <div className="flex items-center gap-3 mt-4">
              <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                <Icon icon={facility.icon} width={24} height={24} className="text-amber-400" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white">{facility.name}</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-lg text-gray-700 leading-relaxed mb-10">{facility.description}</p>

          <div className="bg-amber-50 rounded-xl p-8 mb-10">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {facility.features.map((feature) => (
                <div key={feature} className="flex items-center gap-2 text-gray-700">
                  <span className="text-green-500 font-bold">✓</span>
                  {feature}
                </div>
              ))}
            </div>
          </div>

          {related.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Facilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((f) => (
                  <Link
                    key={f.id}
                    href={`/facilities/${f.slug}`}
                    className="group bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300"
                  >
                    <div className="relative h-32 overflow-hidden">
                      <Image
                        src={f.image || "/schemaimage.jpeg"}
                        alt={f.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 640px) 100vw, 33vw"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 group-hover:text-amber-600 transition-colors">{f.name}</h3>
                      <p className="text-sm text-gray-600 mt-1 line-clamp-2">{f.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Have Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
