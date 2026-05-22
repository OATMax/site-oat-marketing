import Link from "next/link";

/** Inner-page hero band, smaller sibling of the homepage hero, same design language. */
export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: React.ReactNode;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[var(--neutral-50)] px-6 py-20 md:px-10 md:py-32">
      {/* Amber radial bloom */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 flex justify-center">
        <div
          className="h-[40vh] w-[90vw] max-w-3xl translate-y-[-30%] rounded-full opacity-[0.12]"
          style={{ background: "radial-gradient(ellipse at 50% 0%, #C8922A 0%, transparent 68%)" }}
        ></div>
      </div>
      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">{eyebrow}</p>
        <h1 className="font-heading text-[2.5rem] font-bold leading-[0.95] tracking-tight text-[var(--primary)] md:text-6xl">
          {title}
        </h1>
        {intro ? (
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: "rgba(10,10,10,0.55)" }}>
            {intro}
          </p>
        ) : null}
      </div>
    </section>
  );
}

/** Reusable conversion band, mirrors the homepage cta-A beat. */
export function CtaBanner({
  heading = "Let's build something that compounds.",
  body = "Tell us where you want to grow. We'll come back with a plan, not a pitch, and no obligation.",
  cta = "Get a free consultation",
}: {
  heading?: string;
  body?: string;
  cta?: string;
}) {
  return (
    <section style={{ backgroundColor: "var(--primary)" }} className="px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="font-heading text-[2rem] font-bold leading-tight tracking-tight text-[var(--secondary)] md:text-5xl">
          {heading}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed md:text-base" style={{ color: "rgba(255,255,255,0.55)" }}>
          {body}
        </p>
        <Link
          href="/contact"
          className="mt-9 inline-flex items-center gap-2.5 px-6 py-4 font-heading text-sm font-semibold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "var(--accent)" }}
        >
          {cta}
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
            <path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </section>
  );
}

/** Left-anchored section header used across inner pages. */
export function SectionHeader({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow: string;
  title: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`mb-12 md:mb-16 ${className}`}>
      <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent)] md:mb-6">{eyebrow}</p>
      <h2 className="font-heading text-[2rem] font-bold leading-[0.95] tracking-tight text-[var(--primary)] md:text-5xl">
        {title}
      </h2>
    </div>
  );
}
