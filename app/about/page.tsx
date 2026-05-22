import type { Metadata } from "next";
import Image from "next/image";
import { PageHero, CtaBanner } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Not your average agency. OAT Marketing brings 20+ years of experience, true partnership, and full transparency to every engagement.",
  alternates: { canonical: "/about" },
};

const PILLARS = [
  {
    title: "True partnership",
    body: "We don't do vendor relationships. We win when you win, so we treat your budget, your brand, and your goals like our own. One team, aligned on outcomes.",
  },
  {
    title: "Full transparency",
    body: "No hidden fees, no black-box reporting, no surprises. You own your accounts and your data, and you always know exactly what we're doing and why.",
  },
  {
    title: "Technical + creative",
    body: "The rare combination that actually moves the needle: the engineering rigour to build and measure, paired with the creative instinct to make people care.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title={
          <>
            Not your
            <br />
            average agency.
          </>
        }
        intro="Twenty-plus years turning marketing budgets into compounding growth, for start-ups finding their footing, enterprises scaling share, and causes that deserve to be heard."
      />

      {/* Editorial image band */}
      <div className="mx-auto -mt-4 max-w-6xl px-6 md:px-10">
        <div className="relative aspect-[21/9] w-full overflow-hidden">
          <Image src="/images/about.png" alt="Calm, light-filled minimal interior" fill sizes="(max-width: 768px) 100vw, 1152px" className="object-cover" />
        </div>
      </div>

      {/* Story */}
      <section className="bg-white px-6 py-16 md:px-10 md:py-28">
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-[1.85] md:text-lg" style={{ color: "rgba(10,10,10,0.72)" }}>
          <p>
            Most agencies sell you hours. We&apos;d rather sell you outcomes. That difference shapes everything, how we
            scope work, how we report, and which channels we recommend when a cheaper or slower path serves you better.
          </p>
          <p>
            Over two decades we&apos;ve run marketing across nearly every channel that matters: search, paid, social,
            email, content, and the websites that tie them together. That breadth means we recommend what fits your
            business, not whatever we happen to specialise in.
          </p>
          <p>
            We pair that experience with modern tooling that lets us compound work faster and deliver better, but the
            tooling is our advantage, not our product. What you buy is judgement, execution, and a partner who&apos;s
            genuinely invested in your numbers going up.
          </p>
        </div>
      </section>

      {/* Differentiators */}
      <section className="bg-[var(--neutral-50)] px-6 py-16 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center md:mb-16">
            <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">What sets us apart</p>
            <h2 className="font-heading text-[2rem] font-bold leading-tight tracking-tight text-[var(--primary)] md:text-5xl">
              Three things we won&apos;t compromise.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <div key={p.title} className="relative overflow-hidden bg-white p-8 md:p-9">
                <span
                  className="pointer-events-none absolute -right-2 top-0 select-none font-heading text-[7rem] font-bold leading-none"
                  style={{ color: "rgba(200,146,42,0.07)" }}
                  aria-hidden="true"
                >
                  {`0${i + 1}`}
                </span>
                <h3 className="relative z-10 mb-3 font-heading text-[1.5rem] font-bold leading-tight text-[var(--primary)]">
                  {p.title}
                </h3>
                <p className="relative z-10 text-sm leading-relaxed" style={{ color: "rgba(10,10,10,0.6)" }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner heading="Let's see if we're a fit." body="The first conversation is free and pressure-free. Tell us where you want to grow and we'll tell you, honestly, whether we can help." />
    </>
  );
}
