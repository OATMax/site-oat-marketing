import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "o3lm8k1d";
export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || "production";
export const apiVersion = "2024-01-01";

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

const builder = imageUrlBuilder(sanityClient);
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export type BlogCard = {
  title: string;
  slug: string;
  excerpt: string;
  publishedAt: string;
  author?: string;
  heroImage?: SanityImageSource & { alt?: string };
};

export type BlogPost = BlogCard & {
  body: unknown[];
  faqJsonLd?: string;
  metaTitle?: string;
  tags?: string[];
};

/** Resilient fetch — returns a fallback instead of throwing so the build/render never breaks on a Sanity hiccup. */
async function safeFetch<T>(query: string, params: Record<string, unknown>, fallback: T): Promise<T> {
  try {
    return await sanityClient.fetch<T>(query, params, { next: { revalidate: 300 } });
  } catch {
    return fallback;
  }
}

export function getPublishedPosts() {
  return safeFetch<BlogCard[]>(
    `*[_type == "blogPost" && status == "published"] | order(publishedAt desc){
      title, "slug": slug.current, excerpt, publishedAt, author, heroImage
    }`,
    {},
    []
  );
}

export function getPostSlugs() {
  return safeFetch<string[]>(
    `*[_type == "blogPost" && status == "published" && defined(slug.current)].slug.current`,
    {},
    []
  );
}

export function getPost(slug: string) {
  return safeFetch<BlogPost | null>(
    `*[_type == "blogPost" && status == "published" && slug.current == $slug][0]{
      title, "slug": slug.current, excerpt, publishedAt, author, heroImage,
      body, faqJsonLd, metaTitle, tags
    }`,
    { slug },
    null
  );
}
