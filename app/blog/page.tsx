import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { PageHero, CtaBanner } from "@/components/ui";
import { getPublishedPosts, urlFor } from "@/lib/sanity.client";

export const metadata: Metadata = {
  title: "Blog",
  description: "Practical marketing insight from the OAT Marketing team, SEO, paid, content, and growth strategy worth your time.",
  alternates: { canonical: "/blog" },
};

export const revalidate = 300;

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  } catch {
    return "";
  }
}

export default async function BlogIndexPage() {
  const posts = await getPublishedPosts();

  return (
    <>
      <PageHero
        eyebrow="Blog"
        title={<>Marketing worth reading.</>}
        intro="No fluff, no listicles for the algorithm. Just the strategy and tactics we'd want to read ourselves."
      />

      <section className="bg-white px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          {posts.length === 0 ? (
            <div className="mx-auto max-w-xl border border-dashed border-black/[0.15] bg-[var(--neutral-50)] p-12 text-center">
              <p className="font-heading text-xl font-bold text-[var(--primary)]">New writing is on the way.</p>
              <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "rgba(10,10,10,0.6)" }}>
                We&apos;re putting the finishing touches on our first articles. In the meantime, the fastest way to get
                our thinking is a direct conversation.
              </p>
              <Link href="/contact" className="mt-6 inline-flex items-center gap-2 font-heading text-sm font-semibold" style={{ color: "var(--accent)" }}>
                Get in touch
                <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col no-underline">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-[var(--neutral-50)]">
                    {post.heroImage ? (
                      <Image
                        src={urlFor(post.heroImage).width(800).height(500).url()}
                        alt={post.heroImage.alt || post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div aria-hidden="true" className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 30% 20%, rgba(200,146,42,0.18) 0%, transparent 70%)" }} />
                    )}
                  </div>
                  <p className="mt-5 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "rgba(10,10,10,0.4)" }}>{formatDate(post.publishedAt)}</p>
                  <h2 className="mt-2 font-heading text-xl font-bold leading-snug text-[var(--primary)] group-hover:text-[var(--accent)]">{post.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed" style={{ color: "rgba(10,10,10,0.6)" }}>{post.excerpt}</p>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      <CtaBanner heading="Want this kind of thinking on your business?" />
    </>
  );
}
