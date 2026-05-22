import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, CtaBanner } from "@/components/ui";
import { SERVICES, SERVICE_CATEGORIES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Full-service digital marketing: SEO, Local SEO, Paid Ads, Google Ad Grant, Social, Email, Websites, Graphic Design, Market Research, and OAT Workshops.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title={<>Everything you need, under one roof.</>}
        intro="Ten disciplines, one team, one strategy. Use what you need today and grow into the rest — without juggling a dozen vendors."
      />

      <section className="bg-white px-6 py-16 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl space-y-16 md:space-y-24">
          {SERVICE_CATEGORIES.map((category) => {
            const items = SERVICES.filter((s) => s.category === category);
            return (
              <div key={category}>
                <div className="mb-8 flex items-baseline gap-4 border-b border-black/[0.07] pb-4">
                  <h2 className="font-heading text-xl font-bold tracking-tight text-[var(--primary)]">{category}</h2>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[var(--accent)]">
                    {items.length} services
                  </span>
                </div>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {items.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="svc-tile group relative flex flex-col border border-black/[0.07] bg-[var(--neutral-50)] p-7 no-underline transition-transform duration-300 hover:-translate-y-1"
                    >
                      <h3 className="font-heading text-[1.375rem] font-bold leading-tight text-[var(--primary)]">{s.name}</h3>
                      <p className="mt-1 text-[13px] font-medium" style={{ color: "var(--accent)" }}>{s.tagline}</p>
                      <p className="mt-4 flex-1 text-sm leading-relaxed" style={{ color: "rgba(10,10,10,0.6)" }}>{s.summary}</p>
                      <span className="mt-6 inline-flex items-center gap-1.5 font-heading text-[13px] font-semibold text-[var(--primary)]">
                        Explore
                        <svg className="svc-arrow h-3.5 w-3.5 text-[var(--accent)]" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CtaBanner heading="Not sure where to start?" body="Tell us your goals and we'll recommend the mix that fits — including the services you don't need yet." cta="Get a recommendation" />
    </>
  );
}
