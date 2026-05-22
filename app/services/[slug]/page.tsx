import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/ui";
import { SERVICES, getService } from "@/lib/services";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) return {};
  return {
    title: `${svc.name}, ${svc.tagline}`,
    description: svc.summary,
    alternates: { canonical: `/services/${svc.slug}` },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const svc = getService(slug);
  if (!svc) notFound();

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: svc.name,
    serviceType: svc.name,
    description: svc.summary,
    provider: { "@type": "Organization", name: "OAT Marketing", url: "https://oatmarketing.com" },
    areaServed: "US",
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: svc.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--neutral-50)] px-6 py-20 md:px-10 md:py-32">
        <Image src={`/images/svc-${svc.slug}.png`} alt="" fill priority sizes="100vw" aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 object-cover opacity-50" style={{ objectPosition: "center right" }} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0" style={{ background: "linear-gradient(90deg, rgba(250,250,248,0.92) 0%, rgba(250,250,248,0.7) 55%, rgba(250,250,248,0.5) 100%)" }}></div>
        <div className="relative z-10 mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "rgba(10,10,10,0.4)" }}>
            <Link href="/services" className="hover:text-[var(--accent)]">Services</Link>
            <span className="mx-2">/</span>
            <span style={{ color: "var(--accent)" }}>{svc.category}</span>
          </nav>
          <h1 className="font-heading text-[2.5rem] font-bold leading-[0.95] tracking-tight text-[var(--primary)] md:text-6xl">{svc.name}</h1>
          <p className="mt-4 font-heading text-lg font-semibold md:text-xl" style={{ color: "var(--accent)" }}>{svc.tagline}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "rgba(10,10,10,0.6)" }}>{svc.intro}</p>
        </div>
      </section>

      {/* What we do + deliverables */}
      <section className="bg-white px-6 py-16 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">What the engagement looks like</p>
            <ul className="space-y-5">
              {svc.whatWeDo.map((item) => (
                <li key={item} className="flex gap-3.5">
                  <svg className="mt-1 h-4 w-4 flex-shrink-0 text-[var(--accent)]" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8.5l3.5 3.5L13 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span className="text-[15px] leading-relaxed" style={{ color: "rgba(10,10,10,0.72)" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[var(--neutral-50)] p-8 md:p-10">
            <p className="mb-6 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">What you receive</p>
            <ul className="space-y-4">
              {svc.deliverables.map((item) => (
                <li key={item} className="border-b border-black/[0.06] pb-4 text-[15px] leading-relaxed last:border-0 last:pb-0" style={{ color: "rgba(10,10,10,0.72)" }}>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 border-t border-black/[0.08] pt-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "rgba(10,10,10,0.4)" }}>The outcome</p>
              <p className="mt-2 font-heading text-base font-semibold leading-snug text-[var(--primary)]">{svc.outcome}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[var(--neutral-50)] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-8 font-heading text-2xl font-bold tracking-tight text-[var(--primary)] md:text-3xl">Common questions</h2>
          <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
            {svc.faqs.map((f) => (
              <details key={f.q} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between font-heading text-base font-semibold text-[var(--primary)]">
                  {f.q}
                  <svg className="h-4 w-4 flex-shrink-0 text-[var(--accent)] transition-transform group-open:rotate-180" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </summary>
                <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "rgba(10,10,10,0.65)" }}>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner heading={`Ready to talk ${svc.name.toLowerCase()}?`} />
    </>
  );
}
