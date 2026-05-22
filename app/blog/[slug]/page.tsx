import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import { CtaBanner } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getPost, getPostSlugs, urlFor } from "@/lib/sanity.client";

export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle || post.title,
    description: post.excerpt,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.metaTitle || post.title,
      description: post.excerpt,
      publishedTime: post.publishedAt,
      images: post.heroImage ? [urlFor(post.heroImage).width(1200).height(630).url()] : undefined,
    },
  };
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  } catch {
    return "";
  }
}

const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => <p className="mb-5 text-[17px] leading-[1.8]" style={{ color: "rgba(10,10,10,0.78)" }}>{children}</p>,
    h2: ({ children }) => <h2 className="mb-4 mt-12 font-heading text-2xl font-bold tracking-tight text-[var(--primary)] md:text-3xl">{children}</h2>,
    h3: ({ children }) => <h3 className="mb-3 mt-9 font-heading text-xl font-bold tracking-tight text-[var(--primary)]">{children}</h3>,
    h4: ({ children }) => <h4 className="mb-2 mt-7 font-heading text-lg font-bold text-[var(--primary)]">{children}</h4>,
    blockquote: ({ children }) => <blockquote className="my-7 border-l-2 pl-5 text-lg italic" style={{ borderColor: "var(--accent)", color: "rgba(10,10,10,0.7)" }}>{children}</blockquote>,
  },
  list: {
    bullet: ({ children }) => <ul className="mb-6 ml-5 list-disc space-y-2 text-[17px] leading-[1.8]" style={{ color: "rgba(10,10,10,0.78)" }}>{children}</ul>,
    number: ({ children }) => <ol className="mb-6 ml-5 list-decimal space-y-2 text-[17px] leading-[1.8]" style={{ color: "rgba(10,10,10,0.78)" }}>{children}</ol>,
  },
  marks: {
    strong: ({ children }) => <strong className="font-semibold text-[var(--primary)]">{children}</strong>,
    link: ({ children, value }) => {
      const href = (value as { href?: string })?.href || "#";
      const external = /^https?:\/\//.test(href);
      return (
        <a href={href} className="font-medium underline decoration-[var(--accent)] underline-offset-2 hover:text-[var(--accent)]" {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      const v = value as { alt?: string; caption?: string };
      return (
        <figure className="my-8">
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-[var(--neutral-50)]">
            <Image src={urlFor(value).width(1200).url()} alt={v.alt || ""} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
          </div>
          {v.caption ? <figcaption className="mt-2 text-center text-sm" style={{ color: "rgba(10,10,10,0.5)" }}>{v.caption}</figcaption> : null}
        </figure>
      );
    },
  },
};

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  let faqLd: string | null = null;
  if (post.faqJsonLd) {
    try {
      JSON.parse(post.faqJsonLd); // validate
      faqLd = post.faqJsonLd;
    } catch {
      faqLd = null;
    }
  }

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: post.author || "OAT Marketing" },
    publisher: { "@type": "Organization", name: "OAT Marketing", url: "https://oatmarketing.com" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      {faqLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqLd }} /> : null}

      <Breadcrumbs trail={[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }]} />

      <article className="bg-white px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "rgba(10,10,10,0.4)" }}>
            <Link href="/blog" className="hover:text-[var(--accent)]">Blog</Link>
          </nav>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "var(--accent)" }}>{formatDate(post.publishedAt)}{post.author ? ` · ${post.author}` : ""}</p>
          <h1 className="mt-3 font-heading text-[2.25rem] font-bold leading-[1.05] tracking-tight text-[var(--primary)] md:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg leading-relaxed" style={{ color: "rgba(10,10,10,0.6)" }}>{post.excerpt}</p>

          {post.heroImage ? (
            <div className="relative mt-10 aspect-[16/9] w-full overflow-hidden bg-[var(--neutral-50)]">
              <Image src={urlFor(post.heroImage).width(1200).height(675).url()} alt={post.heroImage.alt || post.title} fill priority sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
            </div>
          ) : null}

          <div className="mt-10">
            <PortableText value={post.body as never} components={ptComponents} />
          </div>
        </div>
      </article>

      <CtaBanner heading="Found this useful?" body="We do this kind of thinking for clients every day. Let's talk about your growth." />
    </>
  );
}
