import type { Metadata } from "next";
import { PageHero } from "@/components/ui";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "The terms that govern your use of the OAT Marketing website.",
  alternates: { canonical: "/terms" },
};

const SECTIONS = [
  {
    h: "Using this site",
    p: "By accessing oatmarketing.com you agree to these terms. The site is provided for general information about our services. We may update its content at any time without notice.",
  },
  {
    h: "Intellectual property",
    p: "The content, branding, and design on this site are owned by OAT Marketing or used with permission. You may not reproduce or redistribute them without our written consent.",
  },
  {
    h: "No warranty",
    p: "We work hard to keep the site accurate and available, but we provide it as is. We do not warrant that it will be uninterrupted or error free, and information here does not constitute professional advice for your specific situation.",
  },
  {
    h: "Engagements",
    p: "Nothing on this site is a binding offer. Any work we do together is governed by a separate written agreement that defines scope, deliverables, and terms.",
  },
  {
    h: "Limitation of liability",
    p: "To the extent permitted by law, OAT Marketing is not liable for any indirect or consequential loss arising from your use of this site.",
  },
];

export default function TermsPage() {
  return (
    <>
      <Breadcrumbs trail={[{ name: "Home", href: "/" }, { name: "Terms of Use", href: "/terms" }]} />
      <PageHero eyebrow="Legal" title={<>Terms of Use</>} intro="Last updated May 2026. Please read these terms before using the site." />
      <section className="bg-white px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-3xl space-y-10">
          {SECTIONS.map((s) => (
            <div key={s.h}>
              <h2 className="mb-3 font-heading text-xl font-bold tracking-tight text-[var(--primary)]">{s.h}</h2>
              <p className="text-[16px] leading-[1.8]" style={{ color: "rgba(10,10,10,0.72)" }}>{s.p}</p>
            </div>
          ))}
          <p className="border-t border-black/[0.08] pt-8 text-sm" style={{ color: "rgba(10,10,10,0.64)" }}>
            Questions? Email <a href="mailto:hello@oatmarketing.com" className="font-medium text-[var(--primary)] underline decoration-[var(--accent)] underline-offset-2">hello@oatmarketing.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}
