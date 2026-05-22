import type { Metadata } from "next";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Start a conversation with OAT Marketing. Tell us where you want to grow and we'll come back with a plan — free, and no obligation.",
  alternates: { canonical: "/contact" },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "OAT Marketing",
  url: "https://oatmarketing.com",
  email: "hello@oatmarketing.com",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Sales",
    email: "hello@oatmarketing.com",
    availableLanguage: "English",
  },
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactJsonLd) }} />

      <section className="relative overflow-hidden bg-[var(--neutral-50)] px-6 py-20 md:px-10 md:py-28">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 flex justify-center">
          <div className="h-[40vh] w-[90vw] max-w-3xl translate-y-[-30%] rounded-full opacity-[0.12]" style={{ background: "radial-gradient(ellipse at 50% 0%, #C8922A 0%, transparent 68%)" }}></div>
        </div>

        <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-2 md:gap-16">
          {/* Left: pitch + details */}
          <div>
            <p className="mb-5 font-mono text-[10px] uppercase tracking-[0.25em] text-[var(--accent)]">Get in touch</p>
            <h1 className="font-heading text-[2.5rem] font-bold leading-[0.95] tracking-tight text-[var(--primary)] md:text-5xl">
              Let&apos;s start a conversation.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed" style={{ color: "rgba(10,10,10,0.6)" }}>
              Tell us where you want to grow. We&apos;ll come back with a plan, not a pitch — and there&apos;s no
              obligation. You&apos;ll hear from a real person within one business day.
            </p>

            <div className="mt-10 space-y-6">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "rgba(10,10,10,0.4)" }}>Email</p>
                <a href="mailto:hello@oatmarketing.com" className="mt-1 inline-block font-heading text-lg font-semibold text-[var(--primary)] hover:text-[var(--accent)]">
                  hello@oatmarketing.com
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: "rgba(10,10,10,0.4)" }}>Where we are</p>
                <p className="mt-1 text-[15px]" style={{ color: "rgba(10,10,10,0.72)" }}>Fully remote, spanning time zones.</p>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white p-7 shadow-sm md:p-9">
            {/* Wire the submit endpoint (Formspree / Resend / server action) at integration time. */}
            <form action="https://formspree.io/f/your-form-id" method="POST" className="space-y-5">
              <div>
                <label htmlFor="name" className="mb-1.5 block font-heading text-sm font-semibold text-[var(--primary)]">Name</label>
                <input id="name" name="name" type="text" required autoComplete="name" className="w-full border border-black/[0.12] bg-[var(--neutral-50)] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]" />
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block font-heading text-sm font-semibold text-[var(--primary)]">Email</label>
                <input id="email" name="email" type="email" required autoComplete="email" className="w-full border border-black/[0.12] bg-[var(--neutral-50)] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]" />
              </div>
              <div>
                <label htmlFor="company" className="mb-1.5 block font-heading text-sm font-semibold text-[var(--primary)]">Company <span className="font-normal" style={{ color: "rgba(10,10,10,0.4)" }}>(optional)</span></label>
                <input id="company" name="company" type="text" autoComplete="organization" className="w-full border border-black/[0.12] bg-[var(--neutral-50)] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]" />
              </div>
              <div>
                <label htmlFor="service" className="mb-1.5 block font-heading text-sm font-semibold text-[var(--primary)]">What can we help with?</label>
                <select id="service" name="service" className="w-full border border-black/[0.12] bg-[var(--neutral-50)] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]">
                  <option value="">Not sure yet</option>
                  {SERVICES.map((s) => (
                    <option key={s.slug} value={s.name}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block font-heading text-sm font-semibold text-[var(--primary)]">Tell us about your goals</label>
                <textarea id="message" name="message" rows={4} required className="w-full border border-black/[0.12] bg-[var(--neutral-50)] px-4 py-3 text-sm outline-none focus:border-[var(--accent)]" />
              </div>
              <button type="submit" className="inline-flex w-full items-center justify-center gap-2.5 px-6 py-4 font-heading text-sm font-semibold text-white transition-opacity hover:opacity-90" style={{ backgroundColor: "var(--accent)" }}>
                Send it over
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
