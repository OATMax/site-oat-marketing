import type { Metadata } from "next";
import { PageHero, CtaBanner } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Work with OAT Marketing. We're a remote-first team that values judgement, transparency, and craft. See how we work and get in touch.",
  alternates: { canonical: "/careers" },
};

const VALUES = [
  { title: "Outcomes over hours", body: "We're measured by what we move for clients, not time logged. That trust runs both ways." },
  { title: "Transparency by default", body: "Clear reasoning, open reporting, no politics. The same honesty we give clients, we give each other." },
  { title: "Leverage your craft", body: "Modern tooling does the repetitive work so you spend your time on judgement, strategy, and the things only a human does well." },
  { title: "Remote, async-first", body: "Work from wherever you do your best thinking. We coordinate across time zones and respect deep-work time." },
];

export default function CareersPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", href: "/" }, { name: "Careers", href: "/careers" }]} />
      <PageHero
        eyebrow="Careers"
        title={<>Do the best work of your career.</>}
        intro="We're a small, senior, remote-first team. We hire for judgement and curiosity, give people real ownership, and let modern tooling handle the busywork."
      />

      {/* Values */}
      <section className="bg-white px-6 py-16 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {VALUES.map((v, i) => (
              <div key={v.title} className="relative overflow-hidden border border-black/[0.07] bg-[var(--neutral-50)] p-8">
                <span className="pointer-events-none absolute -right-2 top-0 select-none font-heading text-[7rem] font-bold leading-none" style={{ color: "rgba(200,146,42,0.07)" }} aria-hidden="true">{`0${i + 1}`}</span>
                <h3 className="relative z-10 mb-3 font-heading text-xl font-bold leading-tight text-[var(--primary)]">{v.title}</h3>
                <p className="relative z-10 text-sm leading-relaxed" style={{ color: "rgba(10,10,10,0.6)" }}>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="bg-[var(--neutral-50)] px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.25em] text-[var(--accent)]">Open roles</p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-[var(--primary)] md:text-3xl">No open roles right now, but we&apos;re always listening.</h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed" style={{ color: "rgba(10,10,10,0.6)" }}>
            We hire ahead of need when we meet the right person. If you&apos;re a marketer, strategist, designer, or
            developer who works the way we do, send us your story and what you&apos;d want to own.
          </p>
          <a href="mailto:careers@oatmarketing.com" className="mt-8 inline-flex items-center gap-2.5 border border-black/[0.15] px-6 py-3.5 font-heading text-sm font-semibold text-[var(--primary)] transition-colors hover:border-[var(--accent)]">
            careers@oatmarketing.com
          </a>
        </div>
      </section>

      <CtaBanner heading="Rather work with us than for us?" body="If you're a client looking to grow, that conversation starts here." cta="Get a free consultation" />
    </>
  );
}
