import Link from "next/link";
import Image from "next/image";

const SERVICES = [
  { href: "/services/seo", label: "SEO" },
  { href: "/services/local-seo", label: "Local SEO" },
  { href: "/services/paid-ads", label: "Paid Ads" },
  { href: "/services/google-ad-grant", label: "Google Ad Grant" },
  { href: "/services/social-media", label: "Social Media" },
  { href: "/services/email", label: "Email Marketing" },
  { href: "/services/websites", label: "Websites" },
  { href: "/services/graphic-design", label: "Graphic Design" },
  { href: "/services/market-research", label: "Market Research" },
  { href: "/services/oat-workshops", label: "OAT Workshops" },
];

const SEGMENTS = [
  { href: "/who-we-work-with/startups", label: "Start-ups" },
  { href: "/who-we-work-with/sme", label: "Small + Mid-Sized Enterprises" },
  { href: "/who-we-work-with/not-for-profit", label: "Not-For-Profits" },
];

const COMPANY = [
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <section style={{ backgroundColor: "var(--primary)" }}>
      <footer id="oat-footer">
        <div className="max-w-7xl mx-auto px-5 md:px-8 xl:px-12">
          {/* Brand + social + CTA */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-14 md:pt-24 pb-12 md:pb-16 border-b border-white/[0.08]">
            <div>
              <div className="mb-5 inline-flex rounded-lg bg-[var(--secondary)] px-4 py-3">
                <Image src="/brand/oat-logo.png" alt="OAT Marketing" width={120} height={46} className="h-9 w-auto" />
              </div>
              <p className="text-white/40 text-sm leading-[1.75]" style={{ maxWidth: "22rem" }}>Not your average agency. Twenty-plus years compounding growth, for start-ups, enterprises, and causes that deserve real partnership.</p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-5">
              <Link href="/contact" className="inline-flex items-center gap-2.5 text-white font-heading text-sm font-semibold px-5 py-3.5 hover:opacity-90 transition-opacity" style={{ backgroundColor: "var(--accent)" }}>
                Get a free consultation
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </Link>
              <div className="flex items-center gap-4">
                <a href="https://www.linkedin.com/company/oat-marketing" aria-label="LinkedIn" className="text-white/35 hover:text-white transition-colors">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="currentColor" aria-hidden="true"><path d="M3.3 15.5H1.2V6h2.1v9.5zM2.2 5C1.5 5 1 4.4 1 3.8S1.5 2.5 2.2 2.5s1.3.6 1.3 1.3S3 5 2.2 5zm13.3 10.5H13.4V11c0-1-.4-1.8-1.5-1.8-1.6 0-1.9 1.2-1.9 2.3v4H7.9V6H10v1.3c.4-.8 1.3-1.6 2.7-1.6 2 0 2.9 1.3 2.9 3.6v6.2z" /></svg>
                </a>
                <a href="https://www.instagram.com/oatmarketing" aria-label="Instagram" className="text-white/35 hover:text-white transition-colors">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><rect x="1.5" y="1.5" width="14" height="14" rx="4.5" /><circle cx="8.5" cy="8.5" r="3.2" /><circle cx="12.8" cy="4.3" r="0.65" fill="currentColor" stroke="none" /></svg>
                </a>
                <a href="https://x.com/oatmarketing" aria-label="X / Twitter" className="text-white/35 hover:text-white transition-colors">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M12.3 2h2.3L9.6 7.8l5.8 7.7H11L7.7 10.7 4 15.5H1.7l5.5-6.4L1.5 2H6l2.9 4 3.4-4zm-1 11.5h1.3L5.3 3.2H3.9l7.4 10.3z" /></svg>
                </a>
                <a href="https://www.facebook.com/oatmarketing" aria-label="Facebook" className="text-white/35 hover:text-white transition-colors">
                  <svg width="17" height="17" viewBox="0 0 17 17" fill="currentColor" aria-hidden="true"><path d="M15.5 1H1.5C1.2 1 1 1.2 1 1.5v14c0 .3.2.5.5.5H9v-6H7V8h2V6.8C9 4.9 10.1 4 11.8 4c.8 0 1.7.06 2 .09v2h-1.2c-1.1 0-1.3.44-1.3 1.1V8H14l-.3 2h-2V16h4.3c.3 0 .5-.2.5-.5v-14c0-.3-.2-.5-.5-.5z" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* Nav columns */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10 lg:gap-14 py-10 md:py-16">
            <div className="oat-fc border-b border-white/[0.06] md:border-b-0">
              <details>
                <summary className="flex items-center justify-between py-4 md:pb-6 md:pt-0 select-none cursor-pointer">
                  <span className="font-heading text-[10px] uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>Services</span>
                  <svg className="oat-chev w-4 h-4 text-white/30" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </summary>
                <ul className="pb-6 md:pb-0 space-y-[11px]">
                  {SERVICES.map((s) => (
                    <li key={s.href}><Link href={s.href} className="text-white/[0.52] hover:text-white text-sm transition-colors block">{s.label}</Link></li>
                  ))}
                </ul>
              </details>
            </div>

            <div className="oat-fc border-b border-white/[0.06] md:border-b-0">
              <details>
                <summary className="flex items-center justify-between py-4 md:pb-6 md:pt-0 select-none cursor-pointer">
                  <span className="font-heading text-[10px] uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>Who We Work With</span>
                  <svg className="oat-chev w-4 h-4 text-white/30" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </summary>
                <ul className="pb-6 md:pb-0 space-y-[11px]">
                  {SEGMENTS.map((s) => (
                    <li key={s.href}><Link href={s.href} className="text-white/[0.52] hover:text-white text-sm transition-colors block">{s.label}</Link></li>
                  ))}
                </ul>
              </details>
            </div>

            <div className="oat-fc border-b border-white/[0.06] md:border-b-0">
              <details>
                <summary className="flex items-center justify-between py-4 md:pb-6 md:pt-0 select-none cursor-pointer">
                  <span className="font-heading text-[10px] uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>Company</span>
                  <svg className="oat-chev w-4 h-4 text-white/30" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </summary>
                <ul className="pb-6 md:pb-0 space-y-[11px]">
                  {COMPANY.map((s) => (
                    <li key={s.href}><Link href={s.href} className="text-white/[0.52] hover:text-white text-sm transition-colors block">{s.label}</Link></li>
                  ))}
                </ul>
              </details>
            </div>

            <div className="oat-fc">
              <details>
                <summary className="flex items-center justify-between py-4 md:pb-6 md:pt-0 select-none cursor-pointer">
                  <span className="font-heading text-[10px] uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>Get In Touch</span>
                  <svg className="oat-chev w-4 h-4 text-white/30" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </summary>
                <div className="pb-6 md:pb-0 space-y-3.5">
                  <a href="mailto:hello@oatmarketing.com" className="text-white/[0.52] hover:text-white text-sm transition-colors block">hello@oatmarketing.com</a>
                  <p className="text-white/[0.28] text-xs leading-[1.75]">Fully remote, spanning time zones. You&apos;ll hear back within one business day.</p>
                  <Link href="/contact" className="font-heading font-semibold text-sm inline-flex items-center gap-1.5 hover:text-white transition-colors" style={{ color: "var(--accent)" }}>
                    Book a free strategy call
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true"><path d="M1.5 5.5h8M7 2l3.5 3.5L7 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </Link>
                </div>
              </details>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2.5 py-6 border-t border-white/[0.08]">
            <p className="text-white/[0.22] text-xs">© 2026 OAT Marketing Inc. All rights reserved.</p>
            <div className="flex items-center gap-5">
              <Link href="/privacy" className="text-white/[0.22] hover:text-white/60 text-xs transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="text-white/[0.22] hover:text-white/60 text-xs transition-colors">Terms of Use</Link>
              <a href="#main" className="text-white/[0.22] hover:text-white/60 text-xs transition-colors inline-flex items-center gap-1.5">
                Back to top
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M5 8.5V1.5M2 4.5L5 1.5l3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
}
