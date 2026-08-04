"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import { VILLAS } from "@/data/villas";
import { useVeloraData } from "@/hooks/useVeloraData";
import { FACILITIES } from "@/data/facilities";
import { BLOG_POSTS } from "@/data/blog";

export default function SearchForm() {
  const [query, setQuery] = useState("");
  const { villas, error } = useVeloraData();
  const searchVillas = !error && villas.length > 0 ? villas : VILLAS;

  const q = query.toLowerCase();
  const villaResults = searchVillas.filter((r) => r.name.toLowerCase().includes(q) || r.description.toLowerCase().includes(q));
  const facilityResults = FACILITIES.filter((f) => f.name.toLowerCase().includes(q) || f.description.toLowerCase().includes(q));
  const blogResults = BLOG_POSTS.filter((p) => p.title.toLowerCase().includes(q) || p.excerpt.toLowerCase().includes(q));
  const total = villaResults.length + facilityResults.length + blogResults.length;

  return (
    <>
      <section className="relative bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-20 pt-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Search", href: "/search" }]} />
          <h1 className="text-4xl font-bold text-white mt-4 text-center">Search</h1>
          <div className="mt-6">
            <input type="text" placeholder="Search villas, facilities, articles..." value={query} onChange={(e) => setQuery(e.target.value)} className="w-full px-6 py-4 rounded-xl text-lg outline-none focus:ring-2 focus:ring-amber-500" autoFocus />
          </div>
        </div>
      </section>

      <section className="py-12 bg-gray-50 min-h-[50vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {query.length === 0 ? (
            <p className="text-center text-gray-500 mt-12">Start typing to search...</p>
          ) : total === 0 ? (
            <p className="text-center text-gray-500 mt-12">No results found for &quot;{query}&quot;</p>
          ) : (
            <div className="space-y-10">
              {villaResults.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Villas ({villaResults.length})</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {villaResults.map((r) => (
                      <Link key={r.id} href={`/villas/${r.slug}`} className="bg-white rounded-lg p-4 shadow-sm hover:shadow transition-shadow flex gap-4">
                        <div className="relative w-20 h-20 rounded overflow-hidden flex-shrink-0">
                           <Image src={r.images?.[0]?.src || "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=800"} alt={r.name} fill className="object-cover" sizes="80px" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{r.name}</h3>
                          <p className="text-sm text-gray-500 line-clamp-1">{r.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {facilityResults.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Facilities ({facilityResults.length})</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {facilityResults.map((f) => (
                      <Link key={f.id} href={`/facilities/${f.slug}`} className="bg-white rounded-lg p-4 shadow-sm hover:shadow transition-shadow">
                        <h3 className="font-semibold text-gray-900">{f.name}</h3>
                        <p className="text-sm text-gray-500 line-clamp-1">{f.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              {blogResults.length > 0 && (
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Blog Posts ({blogResults.length})</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {blogResults.map((p) => (
                      <Link key={p.id} href={`/blog/${p.slug}`} className="bg-white rounded-lg p-4 shadow-sm hover:shadow transition-shadow">
                        <span className="text-xs text-amber-600">{p.category}</span>
                        <h3 className="font-semibold text-gray-900 mt-1">{p.title}</h3>
                        <p className="text-sm text-gray-500 line-clamp-1 mt-1">{p.excerpt}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
