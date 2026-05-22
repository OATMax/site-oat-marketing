import Link from "next/link";

const SITE_URL = "https://oatmarketing.com";

export type Crumb = { name: string; href: string };

/**
 * Renders a visible breadcrumb trail AND the matching BreadcrumbList JSON-LD.
 * `trail` should start with Home and end with the current page.
 */
export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: `${SITE_URL}${c.href}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className="border-b border-black/[0.05] bg-[var(--neutral-50)]">
        <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-2 gap-y-1 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.15em] md:px-10" style={{ color: "rgba(10,10,10,0.45)" }}>
          {trail.map((c, i) => {
            const last = i === trail.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-2">
                {last ? (
                  <span aria-current="page" style={{ color: "var(--accent)" }}>{c.name}</span>
                ) : (
                  <>
                    <Link href={c.href} className="transition-colors hover:text-[var(--primary)]">{c.name}</Link>
                    <span aria-hidden="true" style={{ color: "rgba(10,10,10,0.25)" }}>/</span>
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
