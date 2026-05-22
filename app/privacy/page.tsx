import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How OAT Marketing collects, uses, and protects your information.",
  alternates: { canonical: "/privacy" },
};

const SECTIONS = [
  {
    h: "What we collect",
    p: "When you contact us, request a quote, or subscribe, we collect the details you provide: your name, email, company, and anything you choose to share about your goals. When you browse the site, we collect standard analytics such as pages viewed and approximate location, through cookies and similar technologies.",
  },
  {
    h: "How we use it",
    p: "We use your information to respond to enquiries, deliver the services you ask for, improve the site, and, where you have opted in, send you relevant updates. We do not sell your personal information.",
  },
  {
    h: "Who we share it with",
    p: "We share data only with the service providers that help us operate, such as analytics, email, and hosting platforms, and only to the extent they need it to do their job. We may disclose information where required by law.",
  },
  {
    h: "Your choices",
    p: "You can ask us to access, correct, or delete the personal information we hold about you, and you can unsubscribe from marketing emails at any time. To make a request, email hello@oatmarketing.com.",
  },
  {
    h: "Cookies",
    p: "We use cookies to remember preferences and measure performance. You can control cookies through your browser settings, though some features may not work as well if you disable them.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title={<>Privacy Policy</>} intro="Last updated May 2026. This policy explains what we collect and how we use it." />
      <section className="bg-white px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.h}>
              <h2 className="mb-3 font-heading text-xl font-bold tracking-tight text-[var(--primary)]">{s.h}</h2>
              <p className="text-[16px] leading-[1.8]" style={{ color: "rgba(10,10,10,0.72)" }}>{s.p}</p>
            </div>
          ))}
          <p className="border-t border-black/[0.08] pt-8 text-sm" style={{ color: "rgba(10,10,10,0.5)" }}>
            Questions about this policy? Email <a href="mailto:hello@oatmarketing.com" className="font-medium text-[var(--primary)] underline decoration-[var(--accent)] underline-offset-2">hello@oatmarketing.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
