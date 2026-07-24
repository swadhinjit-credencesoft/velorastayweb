import type { Metadata } from "next";
import type { BlogPost } from "@/types";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/layout/Breadcrumb/Breadcrumb";
import JsonLd from "@/components/seo/JsonLd/JsonLd";
import { generateBreadcrumbSchema, generateBlogSchema } from "@/utils/schema";
import { BLOG_POSTS, getBlogPostBySlug, getRelatedPosts } from "@/data/blog";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPostBySlug(params.slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [{ url: post.image, width: 1200, height: 630, alt: post.title }],
    },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post, 3);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: post.title, href: `/blog/${post.slug}` },
  ];

  return (
    <>
      <JsonLd
        schema={generateBreadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
          { name: post.title, url: `/blog/${post.slug}` },
        ])}
      />
      <JsonLd
        schema={generateBlogSchema({
          title: post.title,
          description: post.excerpt,
          image: post.image,
          url: `/blog/${post.slug}`,
          author: post.author.name,
          datePublished: post.publishedAt,
        })}
      />

      <section className="relative h-[45vh] min-h-[350px]">
        <Image src={post.image} alt={post.title} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16">
          <div className="max-w-4xl mx-auto">
            <Breadcrumb items={breadcrumbs} />
            <span className="text-amber-300 text-sm font-medium mt-4 block">{post.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">{post.title}</h1>
            <div className="flex items-center gap-4 mt-3 text-gray-300 text-sm">
              <span>{post.author.name}</span>
              <span>•</span>
              <time>{new Date(post.publishedAt).toLocaleDateString("en-IN", { year: "numeric", month: "long", day: "numeric" })}</time>
              <span>•</span>
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {post.content.split("\n\n").map((paragraph: string, idx: number) => (
              <p key={idx} className="text-gray-700 leading-relaxed mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-10">
            {post.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                #{tag}
              </span>
            ))}
          </div>

          {related.length > 0 && (
            <div className="mt-14 border-t pt-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {related.map((r: BlogPost) => (
                  <Link
                    key={r.id}
                    href={`/blog/${r.slug}`}
                    className="bg-gray-50 rounded-lg overflow-hidden hover:shadow transition-shadow"
                  >
                    <div className="relative h-36">
                      <Image src={r.image} alt={r.title} fill className="object-cover" />
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-amber-600 font-medium">{r.category}</span>
                      <h3 className="font-semibold text-gray-900 mt-1 line-clamp-2">{r.title}</h3>
                      <p className="text-xs text-gray-500 mt-1">{r.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  );
}
