import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CtaBanner } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { SEGMENTS, getSegment } from "@/lib/segments";
import { getService } from "@/lib/services";

export function generateStaticParams() {
  return SEGMENTS.map((s) => ({ segment: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ segment: string }> }): Promise<Metadata> {
  const { segment } = await params;
  const seg = getSegment(segment);
  if (!seg) return {};
  return {
    title: `Marketing for ${seg.name}`,
    description: `${seg.tagline} ${seg.intro.slice(0, 110)}`,
    alternates: { canonical: `/who-we-work-with/${seg.slug}` },
  };
}

export default async function SegmentPage({ params }: { params: Promise<{ segment: string }> }) {
  const { segment } = await params;
  const seg = getSegment(segment);
  if (!seg) notFound();

  const services = seg.recommendedServices.map(getService).filter(Boolean);

  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", href: "/" }, { name: seg.name, href: `/who-we-work-with/${seg.slug}` }]} />
      {/* Hero */}
      <section className="relative overflow-hidden bg-[var(--neutral-50)] px-6 py-20 md:px-10 md:py-32">
        <Image src={`/images/seg-${seg.slug}.png`} alt="" fill priority sizes="100vw" aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 object-cover opacity-90" style={{ objectPosition: "center right" }} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0" style={{ background: "linear-gradient(90deg, rgba(250,250,248,0.92) 0%, rgba(250,250,248,0.7) 55%, rgba(250,250,248,0.5) 100%)" }}></div>
        <div className="relative z-10 mx-auto max-w-3xl">
          <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: "var(--accent)" }}>
            {seg.number} · {seg.audience}
          </p>
          <h1 className="font-heading text-[2.5rem] font-bold leading-[0.95] tracking-tight text-[var(--primary)] md:text-6xl">{seg.name}</h1>
          <p className="mt-5 font-heading text-lg font-semibold md:text-xl" style={{ color: "var(--accent)" }}>{seg.tagline}</p>
          <p className="mt-6 max-w-2xl text-base leading-relaxed md:text-lg" style={{ color: "rgba(10,10,10,0.6)" }}>{seg.intro}</p>
        </div>
      </section>

      {/* Challenges */}
      <section className="bg-white px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">What we hear most</p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {seg.challenges.map((c) => (
              <div key={c} className="flex gap-3.5 border border-black/[0.07] bg-[var(--neutral-50)] p-6">
                <span className="font-heading text-base font-bold" style={{ color: "var(--accent)" }} aria-hidden="true">·</span>
                <span className="text-[15px] leading-relaxed" style={{ color: "rgba(10,10,10,0.72)" }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="bg-[var(--neutral-50)] px-6 py-16 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 font-heading text-[2rem] font-bold leading-tight tracking-tight text-[var(--primary)] md:text-5xl">How we approach it</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {seg.approach.map((a, i) => (
              <div key={a.title} className="bg-white p-8">
                <span className="font-mono text-[11px] tracking-[0.2em]" style={{ color: "var(--accent)" }}>{`0${i + 1}`}</span>
                <h3 className="mt-3 font-heading text-xl font-bold leading-tight text-[var(--primary)]">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "rgba(10,10,10,0.6)" }}>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended services */}
      <section className="bg-white px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">Where we usually start</p>
          <div className="flex flex-wrap gap-3">
            {services.map((s) => (
              <Link key={s!.slug} href={`/services/${s!.slug}`} className="svc-tile inline-flex items-center gap-2 border border-black/[0.1] px-5 py-3 font-heading text-sm font-semibold text-[var(--primary)] no-underline">
                {s!.name}
                <svg className="svc-arrow h-3.5 w-3.5 text-[var(--accent)]" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner heading={`Let's talk about your ${seg.name === "Not-For-Profits" ? "mission" : "growth"}.`} />
    </>
  );
}
