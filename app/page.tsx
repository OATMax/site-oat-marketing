export const metadata = {
  title: "OAT Marketing — Not Your Average Agency",
  description:
    "Full-service digital marketing for start-ups, SMEs, and non-profits — SEO, paid ads, social, email, websites, and more. Built on partnership and 20+ years of results.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
{/* hero (hero-A) */}
<section id="hero" className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-[var(--neutral-50)] px-5 py-16 md:py-28">

  {/* Amber radial bloom — top center */}
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 flex justify-center">
    <div className="h-[55vh] w-[90vw] max-w-3xl translate-y-[-40%] rounded-full opacity-[0.13]" style={{ background: 'radial-gradient(ellipse at 50% 0%, #C8922A 0%, transparent 68%)' }}></div>
  </div>

  {/* Grain noise overlay */}
  <svg aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 h-full w-full opacity-[0.038]" xmlns="http://www.w3.org/2000/svg">
    <filter id="hero-noise">
      <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
      <feColorMatrix type="saturate" values="0" />
    </filter>
    <rect width="100%" height="100%" filter="url(#hero-noise)" />
  </svg>

  {/* Abstract crosshair / targeting mark — editorial right-float */}
  <svg aria-hidden="true" className="pointer-events-none absolute right-[-8%] top-[12%] z-0 h-[220px] w-[220px] opacity-[0.05] md:h-[440px] md:w-[440px] md:right-[1%] md:top-[8%] md:opacity-[0.07]" viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="220" cy="220" r="210" stroke="#0A0A0A" strokeWidth="0.75" />
    <circle cx="220" cy="220" r="135" stroke="#0A0A0A" strokeWidth="0.5" strokeDasharray="3 9" />
    <line x1="220" y1="0" x2="220" y2="440" stroke="#0A0A0A" strokeWidth="0.5" />
    <line x1="0" y1="220" x2="440" y2="220" stroke="#0A0A0A" strokeWidth="0.5" />
    <circle cx="220" cy="220" r="5" fill="#C8922A" opacity="0.9" />
    <circle cx="220" cy="220" r="2" fill="#C8922A" />
  </svg>

  {/* Mirror mark — editorial left-float, smaller */}
  <svg aria-hidden="true" className="pointer-events-none absolute left-[-10%] bottom-[14%] z-0 h-[140px] w-[140px] opacity-[0.04] md:h-[260px] md:w-[260px] md:left-[0%] md:opacity-[0.05]" viewBox="0 0 260 260" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="130" cy="130" r="124" stroke="#0A0A0A" strokeWidth="0.75" />
    <circle cx="130" cy="130" r="80" stroke="#C8922A" strokeWidth="0.5" strokeDasharray="2 6" />
  </svg>

  {/* ─── CONTENT ─── */}
  <div className="relative z-10 mx-auto w-full max-w-4xl text-center">

    {/* Eyebrow */}
    <p className="mb-9 flex items-center justify-center gap-3 text-[0.68rem] font-semibold uppercase tracking-[0.25em] text-[var(--accent)] md:mb-11 md:text-xs">
      <svg width="22" height="1" viewBox="0 0 22 1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <line x1="0" y1="0.5" x2="22" y2="0.5" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      Not Your Average Agency
      <svg width="22" height="1" viewBox="0 0 22 1" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <line x1="0" y1="0.5" x2="22" y2="0.5" stroke="#C8922A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    </p>

    {/* H1 */}
    <h1 className="font-heading mb-7 text-[clamp(2.6rem,7.5vw,6.75rem)] font-bold leading-[0.91] tracking-[-0.03em] text-[var(--primary)] md:mb-9">
      Twenty years of<br />
      marketing that<br />
      <span className="relative inline-block">
        compounds.
        {/* Wavy amber underline */}
        <svg aria-hidden="true" className="absolute -bottom-[0.12em] left-0 w-full" height="12" viewBox="0 0 420 12" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 8 C52 2, 105 11, 160 7 C215 3, 268 10, 320 6.5 C355 4, 390 9, 418 6" stroke="#C8922A" strokeWidth="2.75" strokeLinecap="round" fill="none" />
        </svg>
      </span>
    </h1>

    {/* Subhead */}
    <p className="mx-auto mb-11 max-w-[500px] text-[0.95rem] leading-[1.7] text-[var(--primary)] opacity-50 md:mb-13 md:max-w-[540px] md:text-[1.05rem]">
      True partnerships — not vendor contracts. Full transparency, no hidden fees, and strategy built to build on itself. For start-ups, businesses, and nonprofits.
    </p>

    {/* Primary CTA — single, high-conviction */}
    <a href="/contact" className="group inline-flex items-center gap-2.5 rounded-full bg-[var(--primary)] px-7 py-3.5 text-sm font-medium tracking-wide text-[var(--neutral-50)] shadow-md shadow-black/10 transition-all duration-200 hover:bg-[#1a1a1a] hover:shadow-lg hover:shadow-black/15 md:px-8 md:py-4 md:text-[0.95rem]">
      Start a conversation
      <svg aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-0.5" width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 7.5h11M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>

  </div>

  {/* Scroll cue — desktop only */}
  <div aria-hidden="true" className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
    <span className="text-[9px] font-semibold uppercase tracking-[0.22em] text-[var(--primary)] opacity-25">Scroll</span>
    <svg width="1" height="28" viewBox="0 0 1 28" xmlns="http://www.w3.org/2000/svg">
      <line x1="0.5" y1="0" x2="0.5" y2="28" stroke="#0A0A0A" strokeWidth="1" strokeOpacity="0.18" />
    </svg>
    {/* Animated dot */}
    <span className="h-1 w-1 animate-bounce rounded-full bg-[var(--primary)] opacity-20"></span>
  </div>

</section>

{/* segments (segments) */}
<section id="segments" className="relative bg-[var(--neutral-50)] py-16 md:py-28 overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 md:px-10">

    {/* Section header: left-anchored heading + right body copy */}
    <div className="mb-12 md:mb-20 flex flex-col md:flex-row md:items-end md:justify-between gap-5 md:gap-16">
      <div>
        <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-[var(--accent)] mb-4 md:mb-6">
          Who we work with
        </p>
        <h2 className="font-heading font-bold text-[var(--primary)] leading-[0.92] tracking-tight text-[2.5rem] md:text-5xl lg:text-[4rem]">
          Three playbooks.<br />One agency.
        </h2>
      </div>
      <p className="max-w-[28ch] text-sm leading-relaxed md:text-right md:pb-1 md:flex-shrink-0" style={{ color: 'rgba(10,10,10,0.5)' }}>
        Twenty years across start-ups, established operators,
        and mission-driven organisations. Pick the brief that fits.
      </p>
    </div>

    {/* Cards: horizontal snap-scroll on mobile → 3-col grid on desktop */}
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6 md:grid md:grid-cols-3 md:gap-5 md:mx-0 md:px-0 md:overflow-visible">

      {/* ── Card 1: Start-ups (dark) ── */}
      <a href="/who-we-work-with/startups" className="flex-shrink-0 snap-start w-[85vw] max-w-sm md:w-auto md:max-w-none
                flex flex-col no-underline
                bg-[var(--primary)]
                p-6 md:p-9
                min-h-[300px] md:min-h-[420px]
                group relative overflow-hidden
                transition-transform duration-500 ease-out hover:-translate-y-2">

        {/* Ghost numeral */}
        <span className="absolute -right-3 top-0 font-heading text-[9rem] leading-none font-bold select-none pointer-events-none" style={{ color: 'rgba(255,255,255,0.04)' }} aria-hidden="true">01</span>

        {/* Icon — upward trajectory mark (mb-auto anchors content to bottom) */}
        <div className="relative z-10 mb-auto">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M19 32V11" stroke="#C8922A" strokeWidth="1.25" strokeLinecap="round" opacity="0.3" />
            <path d="M10 20L19 9L28 20" stroke="#C8922A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="19" cy="9" r="2.75" fill="#C8922A" opacity="0.9" />
            <line x1="10" y1="30" x2="28" y2="30" stroke="white" strokeWidth="0.875" strokeLinecap="round" opacity="0.09" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-2.5">
          <p className="font-mono text-[9px] tracking-[0.22em] uppercase" style={{ color: 'rgba(255,255,255,0.25)' }}>
            01 — For founders
          </p>
          <h3 className="font-heading text-[1.625rem] md:text-[1.875rem] font-bold text-[var(--secondary)] leading-tight">
            Start-ups
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
            Get found before the runway runs out.
          </p>
        </div>

        {/* CTA */}
        <div className="relative z-10 flex items-center justify-between mt-7 pt-5" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <span className="text-[11px] tracking-[0.15em] uppercase text-[var(--accent)]">For founders</span>
          <svg className="w-4 h-4 text-[var(--accent)] group-hover:translate-x-1.5 transition-transform duration-300" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </a>

      {/* ── Card 2: SMEs (white, top-bordered) ── */}
      <a href="/who-we-work-with/smes" className="flex-shrink-0 snap-start w-[85vw] max-w-sm md:w-auto md:max-w-none
                flex flex-col no-underline
                bg-white
                p-6 md:p-9
                min-h-[300px] md:min-h-[420px]
                group relative overflow-hidden
                transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)]" style={{ border: '1px solid rgba(10,10,10,0.08)' }}>

        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-[2.5px] bg-[var(--primary)]" aria-hidden="true"></div>

        {/* Ghost numeral */}
        <span className="absolute -right-3 top-0 font-heading text-[9rem] leading-none font-bold select-none pointer-events-none" style={{ color: 'rgba(10,10,10,0.04)' }} aria-hidden="true">02</span>

        {/* Icon — 4-quad grid, bottom-right quad highlighted */}
        <div className="relative z-10 mb-auto">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <rect x="5" y="5" width="12" height="12" rx="2" stroke="#0A0A0A" strokeWidth="1.25" opacity="0.18" />
            <rect x="5" y="21" width="12" height="12" rx="2" stroke="#0A0A0A" strokeWidth="1.25" opacity="0.18" />
            <rect x="21" y="5" width="12" height="12" rx="2" stroke="#0A0A0A" strokeWidth="1.25" opacity="0.18" />
            <rect x="21" y="21" width="12" height="12" rx="2" fill="#C8922A" fillOpacity="0.12" stroke="#C8922A" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-2.5">
          <p className="font-mono text-[9px] tracking-[0.22em] uppercase" style={{ color: 'rgba(10,10,10,0.25)' }}>
            02 — For operators
          </p>
          <h3 className="font-heading text-[1.625rem] md:text-[1.875rem] font-bold text-[var(--primary)] leading-tight">
            SMEs
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(10,10,10,0.55)' }}>
            Compound what works. Cut what doesn't.
          </p>
        </div>

        {/* CTA */}
        <div className="relative z-10 flex items-center justify-between mt-7 pt-5" style={{ borderTop: '1px solid rgba(10,10,10,0.1)' }}>
          <span className="text-[11px] tracking-[0.15em] uppercase text-[var(--primary)]">For operators</span>
          <svg className="w-4 h-4 text-[var(--primary)] group-hover:translate-x-1.5 transition-transform duration-300" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </a>

      {/* ── Card 3: Not-For-Profits (warm) ── */}
      <a href="/who-we-work-with/not-for-profits" className="flex-shrink-0 snap-start w-[85vw] max-w-sm md:w-auto md:max-w-none
                flex flex-col no-underline
                bg-[var(--secondary)]
                p-6 md:p-9
                min-h-[300px] md:min-h-[420px]
                group relative overflow-hidden
                transition-transform duration-500 ease-out hover:-translate-y-2">

        {/* Ghost numeral */}
        <span className="absolute -right-3 top-0 font-heading text-[9rem] leading-none font-bold select-none pointer-events-none" style={{ color: 'rgba(10,10,10,0.05)' }} aria-hidden="true">03</span>

        {/* Icon — radial/hub pattern (community reach) */}
        <div className="relative z-10 mb-auto">
          <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <circle cx="19" cy="19" r="13" stroke="#0A0A0A" strokeWidth="1.25" opacity="0.14" />
            <circle cx="19" cy="19" r="4.5" fill="#C8922A" opacity="0.82" />
            {/* Satellite nodes */}
            <circle cx="19" cy="4.5" r="2" fill="#0A0A0A" opacity="0.18" />
            <circle cx="6" cy="27" r="2" fill="#0A0A0A" opacity="0.18" />
            <circle cx="32" cy="27" r="2" fill="#0A0A0A" opacity="0.18" />
            {/* Spokes from core to nodes */}
            <path d="M19 6.5V14" stroke="#0A0A0A" strokeWidth="0.875" strokeLinecap="round" opacity="0.14" />
            <path d="M7.5 25.5L12.75 22" stroke="#0A0A0A" strokeWidth="0.875" strokeLinecap="round" opacity="0.14" />
            <path d="M30.5 25.5L25.25 22" stroke="#0A0A0A" strokeWidth="0.875" strokeLinecap="round" opacity="0.14" />
          </svg>
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col gap-2.5">
          <p className="font-mono text-[9px] tracking-[0.22em] uppercase" style={{ color: 'rgba(10,10,10,0.25)' }}>
            03 — For missions
          </p>
          <h3 className="font-heading text-[1.625rem] md:text-[1.875rem] font-bold text-[var(--primary)] leading-tight">
            Not-For-Profits
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'rgba(10,10,10,0.55)' }}>
            Reach more people. Spend less doing it.
          </p>
        </div>

        {/* CTA */}
        <div className="relative z-10 flex items-center justify-between mt-7 pt-5" style={{ borderTop: '1px solid rgba(10,10,10,0.12)' }}>
          <span className="text-[11px] tracking-[0.15em] uppercase text-[var(--primary)]">For nonprofits</span>
          <svg className="w-4 h-4 text-[var(--primary)] group-hover:translate-x-1.5 transition-transform duration-300" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </a>

    </div>{/* /cards */}

    {/* Mobile scroll indicator dots */}
    <div className="flex justify-center items-center gap-2 mt-5 md:hidden" aria-hidden="true">
      <div className="h-[3px] w-6 rounded-full bg-[var(--primary)]"></div>
      <div className="h-[3px] w-2 rounded-full" style={{ background: 'rgba(10,10,10,0.2)' }}></div>
      <div className="h-[3px] w-2 rounded-full" style={{ background: 'rgba(10,10,10,0.2)' }}></div>
    </div>

  </div>
</section>

{/* services_catalog (services_catalog) */}
<section id="services" className="relative overflow-hidden py-16 md:py-24 lg:py-32" style={{ background: 'var(--secondary)' }}>
  

  <div className="max-w-[1340px] mx-auto px-6 md:px-10 lg:px-16">

    {/* ─── Header ─── */}
    <header className="mb-12 md:mb-20 lg:mb-28">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 md:gap-8">
        <div>
          <span className="block text-[9px] tracking-[0.42em] uppercase mb-4 md:mb-5" style={{ color: 'var(--accent)', fontFamily: '\'Geist Mono\',monospace', letterSpacing: '.42em' }}>Our Services · 10 disciplines, 4 categories</span>
          <h2 className="font-heading text-4xl md:text-6xl lg:text-[5rem] font-bold tracking-tight leading-[0.95]" style={{ color: 'var(--primary)' }}>
            Full-service.<br />No filler.
          </h2>
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col items-start sm:items-end lg:items-end gap-4 md:gap-6">
          <p className="text-sm md:text-[15px] leading-relaxed max-w-[270px] lg:text-right" style={{ color: 'var(--primary)', opacity: '0.55' }}>
            One team accountable for every outcome. No subcontracting your strategy to a junior three steps removed.
          </p>
          <a href="/services/" className="shrink-0 inline-flex items-center gap-2 text-[13px] font-semibold whitespace-nowrap group" style={{ color: 'var(--primary)' }}>
            <span>View all services</span>
            <svg className="svc-arrow" width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true" style={{ opacity: '0.4' }}>
              <path d="M1.5 11.5L11.5 1.5M11.5 1.5H3.5M11.5 1.5V9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
      <div className="mt-8 md:mt-10 h-px" style={{ background: 'linear-gradient(to right,rgba(10,10,10,0.14) 0%,rgba(10,10,10,0.04) 100%)' }}></div>
    </header>

    {/* ─── 4 Categories. <details> = mobile accordion. Desktop overrides via CSS. ─── */}
    <div className="space-y-4 md:space-y-16 lg:space-y-24">

      {/* Category 01 · Search & Paid */}
      <details className="svc-cat group">
        <summary className="grid grid-cols-1 lg:grid-cols-[196px_1fr] gap-3 lg:gap-12 py-4 md:py-0 border-b md:border-b-0 border-black/10">
          <div className="flex flex-row lg:flex-col items-baseline lg:items-start gap-3 lg:gap-2 lg:pt-1.5">
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <span className="text-[10px] tracking-[0.48em] uppercase shrink-0" style={{ fontFamily: '\'Geist Mono\',monospace', color: 'var(--accent)' }}>01</span>
              <span className="text-xs md:text-[11px] font-semibold tracking-[0.18em] md:tracking-[0.22em] uppercase flex-1" style={{ color: 'var(--primary)', opacity: '0.5' }}>Search & Paid</span>
              {/* Mobile chevron — hidden md+ via CSS */}
              <svg className="cat-chev w-5 h-5 md:hidden shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ color: 'var(--primary)', opacity: '0.45' }}>
                <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="hidden lg:block text-[13px] leading-snug" style={{ color: 'var(--primary)', opacity: '0.4' }}>Get found by ready-to-buy customers</p>
          </div>
          <div className="hidden md:block"></div>
        </summary>
        <div className="grid grid-cols-1 lg:grid-cols-[196px_1fr] gap-3 lg:gap-12 pt-3 md:pt-6">
          <div className="hidden lg:block"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: '1px', background: 'rgba(10,10,10,0.09)' }}>
              <a href="/services/seo/" className="svc-tile flex flex-col justify-between p-5 md:p-7" style={{ background: 'var(--neutral-50)', minHeight: '170px' }}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg md:text-xl font-semibold leading-tight" style={{ color: 'var(--primary)' }}>SEO</h3>
                  <svg className="svc-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ color: 'var(--primary)', opacity: '0.4' }}>
                    <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[13px] md:text-sm leading-relaxed mt-3 md:mt-4" style={{ color: 'var(--primary)', opacity: '0.62' }}>Long-term organic rankings — content + technical + on-page.</p>
              </a>
              <a href="/services/local-seo/" className="svc-tile flex flex-col justify-between p-5 md:p-7" style={{ background: 'var(--neutral-50)', minHeight: '170px' }}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg md:text-xl font-semibold leading-tight" style={{ color: 'var(--primary)' }}>Local SEO</h3>
                  <svg className="svc-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ color: 'var(--primary)', opacity: '0.4' }}>
                    <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[13px] md:text-sm leading-relaxed mt-3 md:mt-4" style={{ color: 'var(--primary)', opacity: '0.62' }}>Maps + neighborhood-level discovery for brick-and-mortar.</p>
              </a>
              <a href="/services/paid-ads/" className="svc-tile flex flex-col justify-between p-5 md:p-7" style={{ background: 'var(--neutral-50)', minHeight: '170px' }}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg md:text-xl font-semibold leading-tight" style={{ color: 'var(--primary)' }}>Paid Ads</h3>
                  <svg className="svc-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ color: 'var(--primary)', opacity: '0.4' }}>
                    <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[13px] md:text-sm leading-relaxed mt-3 md:mt-4" style={{ color: 'var(--primary)', opacity: '0.62' }}>Google + Meta + LinkedIn — managed for ROAS, not impressions.</p>
              </a>
              <a href="/services/google-ad-grant/" className="svc-tile flex flex-col justify-between p-5 md:p-7" style={{ background: 'var(--neutral-50)', minHeight: '170px' }}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg md:text-xl font-semibold leading-tight" style={{ color: 'var(--primary)' }}>Google Ad Grant</h3>
                  <svg className="svc-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ color: 'var(--primary)', opacity: '0.4' }}>
                    <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[13px] md:text-sm leading-relaxed mt-3 md:mt-4" style={{ color: 'var(--primary)', opacity: '0.62' }}>$10K/mo ad credit for qualified non-profits — managed end-to-end.</p>
              </a>
          </div>
        </div>
      </details>
      {/* Category 02 · Outreach */}
      <details className="svc-cat group">
        <summary className="grid grid-cols-1 lg:grid-cols-[196px_1fr] gap-3 lg:gap-12 py-4 md:py-0 border-b md:border-b-0 border-black/10">
          <div className="flex flex-row lg:flex-col items-baseline lg:items-start gap-3 lg:gap-2 lg:pt-1.5">
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <span className="text-[10px] tracking-[0.48em] uppercase shrink-0" style={{ fontFamily: '\'Geist Mono\',monospace', color: 'var(--accent)' }}>02</span>
              <span className="text-xs md:text-[11px] font-semibold tracking-[0.18em] md:tracking-[0.22em] uppercase flex-1" style={{ color: 'var(--primary)', opacity: '0.5' }}>Outreach</span>
              {/* Mobile chevron — hidden md+ via CSS */}
              <svg className="cat-chev w-5 h-5 md:hidden shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ color: 'var(--primary)', opacity: '0.45' }}>
                <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="hidden lg:block text-[13px] leading-snug" style={{ color: 'var(--primary)', opacity: '0.4' }}>Reach + nurture your audience where they already are</p>
          </div>
          <div className="hidden md:block"></div>
        </summary>
        <div className="grid grid-cols-1 lg:grid-cols-[196px_1fr] gap-3 lg:gap-12 pt-3 md:pt-6">
          <div className="hidden lg:block"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '1px', background: 'rgba(10,10,10,0.09)' }}>
              <a href="/services/social-media/" className="svc-tile flex flex-col justify-between p-5 md:p-7" style={{ background: 'var(--neutral-50)', minHeight: '170px' }}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg md:text-xl font-semibold leading-tight" style={{ color: 'var(--primary)' }}>Social Media</h3>
                  <svg className="svc-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ color: 'var(--primary)', opacity: '0.4' }}>
                    <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[13px] md:text-sm leading-relaxed mt-3 md:mt-4" style={{ color: 'var(--primary)', opacity: '0.62' }}>Strategy + content + community for the platforms that move your numbers.</p>
              </a>
              <a href="/services/email/" className="svc-tile flex flex-col justify-between p-5 md:p-7" style={{ background: 'var(--neutral-50)', minHeight: '170px' }}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg md:text-xl font-semibold leading-tight" style={{ color: 'var(--primary)' }}>Email Marketing</h3>
                  <svg className="svc-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ color: 'var(--primary)', opacity: '0.4' }}>
                    <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[13px] md:text-sm leading-relaxed mt-3 md:mt-4" style={{ color: 'var(--primary)', opacity: '0.62' }}>Lifecycle + broadcast — flows that compound while you sleep.</p>
              </a>
          </div>
        </div>
      </details>
      {/* Category 03 · Brand */}
      <details className="svc-cat group">
        <summary className="grid grid-cols-1 lg:grid-cols-[196px_1fr] gap-3 lg:gap-12 py-4 md:py-0 border-b md:border-b-0 border-black/10">
          <div className="flex flex-row lg:flex-col items-baseline lg:items-start gap-3 lg:gap-2 lg:pt-1.5">
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <span className="text-[10px] tracking-[0.48em] uppercase shrink-0" style={{ fontFamily: '\'Geist Mono\',monospace', color: 'var(--accent)' }}>03</span>
              <span className="text-xs md:text-[11px] font-semibold tracking-[0.18em] md:tracking-[0.22em] uppercase flex-1" style={{ color: 'var(--primary)', opacity: '0.5' }}>Brand</span>
              {/* Mobile chevron — hidden md+ via CSS */}
              <svg className="cat-chev w-5 h-5 md:hidden shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ color: 'var(--primary)', opacity: '0.45' }}>
                <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="hidden lg:block text-[13px] leading-snug" style={{ color: 'var(--primary)', opacity: '0.4' }}>The on-screen surface customers actually see</p>
          </div>
          <div className="hidden md:block"></div>
        </summary>
        <div className="grid grid-cols-1 lg:grid-cols-[196px_1fr] gap-3 lg:gap-12 pt-3 md:pt-6">
          <div className="hidden lg:block"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '1px', background: 'rgba(10,10,10,0.09)' }}>
              <a href="/services/websites/" className="svc-tile flex flex-col justify-between p-5 md:p-7" style={{ background: 'var(--neutral-50)', minHeight: '170px' }}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg md:text-xl font-semibold leading-tight" style={{ color: 'var(--primary)' }}>Websites</h3>
                  <svg className="svc-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ color: 'var(--primary)', opacity: '0.4' }}>
                    <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[13px] md:text-sm leading-relaxed mt-3 md:mt-4" style={{ color: 'var(--primary)', opacity: '0.62' }}>Conversion-built sites + landing pages on a modern stack.</p>
              </a>
              <a href="/services/graphic-design/" className="svc-tile flex flex-col justify-between p-5 md:p-7" style={{ background: 'var(--neutral-50)', minHeight: '170px' }}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg md:text-xl font-semibold leading-tight" style={{ color: 'var(--primary)' }}>Graphic Design</h3>
                  <svg className="svc-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ color: 'var(--primary)', opacity: '0.4' }}>
                    <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[13px] md:text-sm leading-relaxed mt-3 md:mt-4" style={{ color: 'var(--primary)', opacity: '0.62' }}>Identity systems, print, social creative, ad design.</p>
              </a>
          </div>
        </div>
      </details>
      {/* Category 04 · Insight & Training */}
      <details className="svc-cat group">
        <summary className="grid grid-cols-1 lg:grid-cols-[196px_1fr] gap-3 lg:gap-12 py-4 md:py-0 border-b md:border-b-0 border-black/10">
          <div className="flex flex-row lg:flex-col items-baseline lg:items-start gap-3 lg:gap-2 lg:pt-1.5">
            <div className="flex items-center gap-3 w-full lg:w-auto">
              <span className="text-[10px] tracking-[0.48em] uppercase shrink-0" style={{ fontFamily: '\'Geist Mono\',monospace', color: 'var(--accent)' }}>04</span>
              <span className="text-xs md:text-[11px] font-semibold tracking-[0.18em] md:tracking-[0.22em] uppercase flex-1" style={{ color: 'var(--primary)', opacity: '0.5' }}>Insight & Training</span>
              {/* Mobile chevron — hidden md+ via CSS */}
              <svg className="cat-chev w-5 h-5 md:hidden shrink-0" viewBox="0 0 20 20" fill="none" aria-hidden="true" style={{ color: 'var(--primary)', opacity: '0.45' }}>
                <path d="M5 8L10 13L15 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p className="hidden lg:block text-[13px] leading-snug" style={{ color: 'var(--primary)', opacity: '0.4' }}>Get smarter about your market + your team</p>
          </div>
          <div className="hidden md:block"></div>
        </summary>
        <div className="grid grid-cols-1 lg:grid-cols-[196px_1fr] gap-3 lg:gap-12 pt-3 md:pt-6">
          <div className="hidden lg:block"></div>
          <div className="grid grid-cols-1 sm:grid-cols-2" style={{ gap: '1px', background: 'rgba(10,10,10,0.09)' }}>
              <a href="/services/market-research/" className="svc-tile flex flex-col justify-between p-5 md:p-7" style={{ background: 'var(--neutral-50)', minHeight: '170px' }}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg md:text-xl font-semibold leading-tight" style={{ color: 'var(--primary)' }}>Market Research</h3>
                  <svg className="svc-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ color: 'var(--primary)', opacity: '0.4' }}>
                    <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[13px] md:text-sm leading-relaxed mt-3 md:mt-4" style={{ color: 'var(--primary)', opacity: '0.62' }}>Audience + competitive + opportunity studies that inform every decision.</p>
              </a>
              <a href="/services/workshops/" className="svc-tile flex flex-col justify-between p-5 md:p-7" style={{ background: 'var(--neutral-50)', minHeight: '170px' }}>
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-heading text-lg md:text-xl font-semibold leading-tight" style={{ color: 'var(--primary)' }}>OAT Workshops</h3>
                  <svg className="svc-arrow" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" style={{ color: 'var(--primary)', opacity: '0.4' }}>
                    <path d="M2 12L12 2M12 2H4M12 2V10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p className="text-[13px] md:text-sm leading-relaxed mt-3 md:mt-4" style={{ color: 'var(--primary)', opacity: '0.62' }}>Hands-on team training — SEO, paid, analytics, AI tooling.</p>
              </a>
          </div>
        </div>
      </details>
    </div>
  </div>
</section>

{/* value_prop (value-A) */}
<section style={{ backgroundColor: 'var(--secondary)' }} className="py-16 md:py-28 lg:py-36">
  <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

    {/* Overline */}
    <div className="flex items-center gap-4 mb-12 md:mb-16">
      <span className="block h-px w-8" style={{ backgroundColor: 'var(--accent)' }}></span>
      <p className="text-xs font-semibold uppercase" style={{ color: 'var(--accent)', letterSpacing: '0.22em' }}>The OAT Difference</p>
    </div>

    {/* Asymmetric two-column grid */}
    <div className="grid grid-cols-1 md:grid-cols-[5fr_7fr] gap-10 md:gap-16 lg:gap-24 md:items-start">

      {/* LEFT — sticky editorial headline */}
      <div className="md:sticky md:top-28 md:self-start">
        <h2 className="font-heading font-bold leading-[1.04] tracking-tight" style={{ color: 'var(--primary)', fontSize: 'clamp(2.5rem, 4vw, 3.75rem)' }}>
          Twenty<br />years.<br />Still not<br />average.
        </h2>
        <div className="mt-7 w-10 h-0.5" style={{ backgroundColor: 'var(--accent)' }}></div>
        <p className="mt-5 text-sm md:text-base leading-relaxed" style={{ color: 'var(--primary)', opacity: '0.55', maxWidth: '22ch' }}>
          Built on what actually works — tested across industries, budgets, and every kind of impossible deadline.
        </p>
      </div>

      {/* RIGHT — value props */}

      {/* MOBILE: 2×2 compact grid */}
      <div className="grid grid-cols-2 gap-x-5 gap-y-8 md:hidden">

        <div>
          <div className="w-8 h-8 mb-4">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="12" cy="16" r="9" stroke="var(--accent)" strokeWidth="1.5" />
              <circle cx="20" cy="16" r="9" stroke="var(--primary)" strokeWidth="1.5" fill="var(--secondary)" />
            </svg>
          </div>
          <h3 className="font-heading font-bold text-sm leading-snug mb-2" style={{ color: 'var(--primary)' }}>True Partnerships</h3>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--primary)', opacity: '0.55' }}>Accountable to your outcomes, not just your retainer.</p>
        </div>

        <div>
          <div className="w-8 h-8 mb-4">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect x="4" y="4" width="24" height="24" stroke="var(--primary)" strokeWidth="1.5" />
              <line x1="4" y1="28" x2="28" y2="4" stroke="var(--accent)" strokeWidth="1.5" />
            </svg>
          </div>
          <h3 className="font-heading font-bold text-sm leading-snug mb-2" style={{ color: 'var(--primary)' }}>Full Transparency</h3>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--primary)', opacity: '0.55' }}>No hidden fees. No surprise markups. Ever.</p>
        </div>

        <div>
          <div className="w-8 h-8 mb-4">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <path d="M3 16 C7 7, 12 7, 16 16 S24 25, 29 16" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              <line x1="3" y1="26" x2="29" y2="26" stroke="var(--primary)" strokeWidth="1" opacity="0.18" />
              <line x1="3" y1="6" x2="29" y2="6" stroke="var(--primary)" strokeWidth="1" opacity="0.18" />
            </svg>
          </div>
          <h3 className="font-heading font-bold text-sm leading-snug mb-2" style={{ color: 'var(--primary)' }}>Technical + Creative</h3>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--primary)', opacity: '0.55' }}>No gap between strategy and execution.</p>
        </div>

        <div>
          <div className="w-8 h-8 mb-4">
            <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <rect x="3" y="24" width="5" height="5" fill="var(--primary)" fillOpacity="0.13" />
              <rect x="10" y="19" width="5" height="10" fill="var(--primary)" fillOpacity="0.24" />
              <rect x="17" y="12" width="5" height="17" fill="var(--primary)" fillOpacity="0.4" />
              <rect x="24" y="4" width="5" height="25" fill="var(--accent)" />
            </svg>
          </div>
          <h3 className="font-heading font-bold text-sm leading-snug mb-2" style={{ color: 'var(--primary)' }}>Work That Compounds</h3>
          <p className="text-xs leading-relaxed" style={{ color: 'var(--primary)', opacity: '0.55' }}>Twenty years of pattern recognition, working for you.</p>
        </div>

      </div>

      {/* DESKTOP: Editorial numbered list with separators */}
      <div className="hidden md:block">

        {/* Item 01 */}
        <div className="group py-9 border-t relative" style={{ borderColor: 'rgba(10,10,10,0.1)' }}>
          <div className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'var(--accent)' }}></div>
          <div className="flex gap-7 items-start pl-0 group-hover:pl-5 transition-all duration-300">
            <div className="w-9 h-9 flex-shrink-0 mt-0.5">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="13" cy="18" r="11" stroke="var(--accent)" strokeWidth="1.5" />
                <circle cx="23" cy="18" r="11" stroke="var(--primary)" strokeWidth="1.5" fill="var(--secondary)" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-heading font-bold text-xl" style={{ color: 'var(--primary)' }}>True Partnerships</h3>
                <span className="text-xs font-mono" style={{ color: 'var(--primary)', opacity: '0.22', letterSpacing: '0.1em' }}>01</span>
              </div>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--primary)', opacity: '0.55' }}>
                Your growth targets become ours. We're accountable to the same outcomes you are — not just the invoice cadence.
              </p>
            </div>
          </div>
        </div>

        {/* Item 02 */}
        <div className="group py-9 border-t relative" style={{ borderColor: 'rgba(10,10,10,0.1)' }}>
          <div className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'var(--accent)' }}></div>
          <div className="flex gap-7 items-start group-hover:pl-5 transition-all duration-300">
            <div className="w-9 h-9 flex-shrink-0 mt-0.5">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect x="5" y="5" width="26" height="26" stroke="var(--primary)" strokeWidth="1.5" />
                <line x1="5" y1="31" x2="31" y2="5" stroke="var(--accent)" strokeWidth="1.5" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-heading font-bold text-xl" style={{ color: 'var(--primary)' }}>Full Transparency</h3>
                <span className="text-xs font-mono" style={{ color: 'var(--primary)', opacity: '0.22', letterSpacing: '0.1em' }}>02</span>
              </div>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--primary)', opacity: '0.55' }}>
                No hidden fees, no surprise markups, no agency theatre. You see the same numbers we see — always.
              </p>
            </div>
          </div>
        </div>

        {/* Item 03 */}
        <div className="group py-9 border-t relative" style={{ borderColor: 'rgba(10,10,10,0.1)' }}>
          <div className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'var(--accent)' }}></div>
          <div className="flex gap-7 items-start group-hover:pl-5 transition-all duration-300">
            <div className="w-9 h-9 flex-shrink-0 mt-0.5">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <path d="M4 18 C8 8, 13 8, 18 18 S27 28, 32 18" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                <line x1="4" y1="29" x2="32" y2="29" stroke="var(--primary)" strokeWidth="1" opacity="0.14" />
                <line x1="4" y1="7" x2="32" y2="7" stroke="var(--primary)" strokeWidth="1" opacity="0.14" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-heading font-bold text-xl" style={{ color: 'var(--primary)' }}>Technical + Creative</h3>
                <span className="text-xs font-mono" style={{ color: 'var(--primary)', opacity: '0.22', letterSpacing: '0.1em' }}>03</span>
              </div>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--primary)', opacity: '0.55' }}>
                Deep SEO architecture, real attribution, performance creative — no gap between left-brain strategy and right-brain execution.
              </p>
            </div>
          </div>
        </div>

        {/* Item 04 */}
        <div className="group py-9 border-t border-b relative" style={{ borderColor: 'rgba(10,10,10,0.1)' }}>
          <div className="absolute left-0 top-0 bottom-0 w-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundColor: 'var(--accent)' }}></div>
          <div className="flex gap-7 items-start group-hover:pl-5 transition-all duration-300">
            <div className="w-9 h-9 flex-shrink-0 mt-0.5">
              <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <rect x="4" y="27" width="6" height="5" fill="var(--primary)" fillOpacity="0.12" />
                <rect x="12" y="21" width="6" height="11" fill="var(--primary)" fillOpacity="0.22" />
                <rect x="20" y="13" width="6" height="19" fill="var(--primary)" fillOpacity="0.38" />
                <rect x="28" y="4" width="6" height="28" fill="var(--accent)" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-heading font-bold text-xl" style={{ color: 'var(--primary)' }}>Work That Compounds</h3>
                <span className="text-xs font-mono" style={{ color: 'var(--primary)', opacity: '0.22', letterSpacing: '0.1em' }}>04</span>
              </div>
              <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--primary)', opacity: '0.55' }}>
                Twenty years of institutional knowledge, cross-industry pattern recognition, and judgment that only comes from actually doing the work.
              </p>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>
</section>

{/* social_proof (proof-A) */}
<section className="py-12 md:py-20 bg-[var(--secondary)] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 md:px-12">
    <p className="text-xs tracking-[0.2em] uppercase text-[var(--neutral-900)] opacity-40 mb-8 md:mb-12 font-medium">Trusted by brands that take growth seriously</p>
  </div>

  {/* Mobile: snap-scroll logo bar */}
  <div className="flex gap-10 overflow-x-auto snap-x snap-mandatory pb-2 -mx-0 px-6 md:hidden scrollbar-none" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
    <div className="flex-shrink-0 snap-start flex items-center">
      <span className="font-heading font-bold text-lg tracking-tight text-[var(--neutral-900)] opacity-25 whitespace-nowrap">HALAL INFLUENCER</span>
    </div>
    <div className="flex-shrink-0 snap-start flex items-center">
      <span className="font-heading font-bold text-lg tracking-tight text-[var(--neutral-900)] opacity-25 whitespace-nowrap">DTF DALLAS</span>
    </div>
    <div className="flex-shrink-0 snap-start flex items-center">
      <span className="font-heading font-bold text-lg tracking-tight text-[var(--neutral-900)] opacity-25 whitespace-nowrap">DTF JERSEY</span>
    </div>
    <div className="flex-shrink-0 snap-start flex items-center">
      <span className="font-heading font-bold text-lg tracking-tight text-[var(--neutral-900)] opacity-25 whitespace-nowrap">DTF PRINTER USA</span>
    </div>
    <div className="flex-shrink-0 snap-start flex items-center pr-6">
      <span className="font-heading font-bold text-lg tracking-tight text-[var(--neutral-900)] opacity-25 whitespace-nowrap">OUTLASH WEAR</span>
    </div>
  </div>

  {/* Desktop: flex row, no-wrap, evenly spaced */}
  <div className="hidden md:flex items-center justify-between gap-8 max-w-7xl mx-auto px-12">
    <span className="font-heading font-bold text-xl tracking-tight text-[var(--neutral-900)] opacity-[0.22] hover:opacity-50 transition-opacity duration-300 whitespace-nowrap cursor-default">HALAL INFLUENCER</span>
    <span className="font-heading font-bold text-xl tracking-tight text-[var(--neutral-900)] opacity-[0.22] hover:opacity-50 transition-opacity duration-300 whitespace-nowrap cursor-default">DTF DALLAS</span>
    {/* separator mark */}
    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" className="opacity-20 flex-shrink-0">
      <rect x="0" y="0" width="6" height="6" rx="1" fill="var(--accent)" transform="rotate(45 3 3)" />
    </svg>
    <span className="font-heading font-bold text-xl tracking-tight text-[var(--neutral-900)] opacity-[0.22] hover:opacity-50 transition-opacity duration-300 whitespace-nowrap cursor-default">DTF JERSEY</span>
    <span className="font-heading font-bold text-xl tracking-tight text-[var(--neutral-900)] opacity-[0.22] hover:opacity-50 transition-opacity duration-300 whitespace-nowrap cursor-default">DTF PRINTER USA</span>
    {/* separator mark */}
    <svg width="6" height="6" viewBox="0 0 6 6" fill="none" className="opacity-20 flex-shrink-0">
      <rect x="0" y="0" width="6" height="6" rx="1" fill="var(--accent)" transform="rotate(45 3 3)" />
    </svg>
    <span className="font-heading font-bold text-xl tracking-tight text-[var(--neutral-900)] opacity-[0.22] hover:opacity-50 transition-opacity duration-300 whitespace-nowrap cursor-default">OUTLASH WEAR</span>
  </div>

  {/* Rule + stat strip */}
  <div className="max-w-7xl mx-auto px-6 md:px-12 mt-10 md:mt-14">
    <div className="border-t border-[var(--neutral-900)] border-opacity-10 pt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0">
      <div className="flex items-center gap-3">
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="flex-shrink-0">
          <circle cx="10" cy="10" r="9" stroke="var(--accent)" strokeWidth="1.5" />
          <path d="M6 10l2.5 2.5L14 7" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span className="text-sm text-[var(--neutral-900)] opacity-50">Every client. Full transparency. No hidden fees.</span>
      </div>
      <div className="flex items-center gap-8 md:gap-12">
        <div>
          <span className="font-heading font-bold text-2xl md:text-3xl text-[var(--neutral-900)]">20<span className="text-[var(--accent)]">+</span></span>
          <p className="text-xs text-[var(--neutral-900)] opacity-40 mt-0.5 tracking-wide uppercase">Years active</p>
        </div>
        <div className="w-px h-8 bg-[var(--neutral-900)] opacity-10"></div>
        <div>
          <span className="font-heading font-bold text-2xl md:text-3xl text-[var(--neutral-900)]">3<span className="text-[var(--accent)]">×</span></span>
          <p className="text-xs text-[var(--neutral-900)] opacity-40 mt-0.5 tracking-wide uppercase">Audience segments</p>
        </div>
        <div className="w-px h-8 bg-[var(--neutral-900)] opacity-10"></div>
        <div>
          <span className="font-heading font-bold text-2xl md:text-3xl text-[var(--neutral-900)]">10<span className="text-[var(--accent)]">+</span></span>
          <p className="text-xs text-[var(--neutral-900)] opacity-40 mt-0.5 tracking-wide uppercase">Services</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* blog_preview (blog_preview) */}
<section style={{ backgroundColor: 'var(--neutral-50)' }} className="py-16 md:py-28 overflow-x-hidden">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    {/* Section header */}
    <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10 md:mb-16">
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[0.65rem] tracking-[0.25em] uppercase" style={{ color: 'var(--accent)' }}>From the desk</span>
          <span className="block h-px w-10 flex-shrink-0" style={{ backgroundColor: 'var(--accent)', opacity: '0.4' }}></span>
        </div>
        <h2 className="font-heading font-bold text-[2.1rem] md:text-5xl lg:text-[3.15rem] leading-[1.06]" style={{ color: 'var(--primary)' }}>
          Marketing that<br className="hidden sm:block" /> thinks out loud.
        </h2>
      </div>
      <a href="/blog" className="inline-flex items-center gap-2 self-start sm:self-auto font-medium text-sm pb-0.5 border-b transition-all duration-200 hover:gap-3 group text-[#0A0A0A] hover:text-[#C8922A] border-[#0A0A0A] hover:border-[#C8922A]">
        See all writing
        <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>

    {/* Cards — mobile: horizontal snap-scroll; desktop: asymmetric 3+2 grid */}
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 -mx-4 px-4
                md:grid md:grid-cols-5 md:gap-x-6 md:gap-y-5 md:mx-0 md:px-0 md:overflow-visible md:pb-0 md:items-start">

      {/* ① Featured post — spans 2 rows on desktop */}
      <article className="flex-shrink-0 snap-start w-[85vw] max-w-sm
                      md:w-auto md:max-w-none md:col-span-3 md:row-span-2 md:h-full
                      flex flex-col group cursor-pointer">

        {/* Thumbnail: dark, editorial, concentric rings motif */}
        <div className="relative aspect-[4/3] md:aspect-auto md:flex-1 md:min-h-[280px] rounded-xl overflow-hidden mb-5">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 640 460" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <rect width="640" height="460" fill="#0A0A0A" />
            {/* Concentric arc rings from top-right, amber tones */}
            <circle cx="610" cy="-50" r="390" fill="none" stroke="#C8922A" strokeWidth="0.8" opacity="0.18" />
            <circle cx="610" cy="-50" r="285" fill="none" stroke="#C8922A" strokeWidth="0.8" opacity="0.22" />
            <circle cx="610" cy="-50" r="180" fill="none" stroke="#C8922A" strokeWidth="1" opacity="0.28" />
            <circle cx="610" cy="-50" r="90" fill="none" stroke="#C8922A" strokeWidth="1.5" opacity="0.35" />
            <circle cx="610" cy="-50" r="30" fill="#C8922A" opacity="0.22" />
            {/* Faint horizon rule */}
            <line x1="0" y1="390" x2="640" y2="390" stroke="#F5F0E8" strokeWidth="0.5" opacity="0.07" />
            {/* Ghost watermark */}
            <text x="36" y="445" fontSize="120" fill="#FFFFFF" opacity="0.022" fontWeight="900" letterSpacing="-6" fontFamily="Arial, sans-serif">SME</text>
            {/* Dot accent top-left */}
            <circle cx="38" cy="38" r="2.5" fill="#C8922A" opacity="0.65" />
            <circle cx="51" cy="38" r="2.5" fill="#C8922A" opacity="0.38" />
            <circle cx="64" cy="38" r="2.5" fill="#C8922A" opacity="0.18" />
            {/* Bottom-left subtle crosshair tick */}
            <line x1="38" y1="410" x2="38" y2="430" stroke="#F5F0E8" strokeWidth="0.8" opacity="0.2" />
            <line x1="28" y1="420" x2="48" y2="420" stroke="#F5F0E8" strokeWidth="0.8" opacity="0.2" />
          </svg>
          <span className="absolute top-4 left-4 font-mono text-[0.58rem] tracking-[0.22em] uppercase px-3 py-1.5 rounded-sm" style={{ backgroundColor: 'var(--accent)', color: '#fff' }}>Strategy</span>
        </div>

        {/* Body */}
        <div className="flex-shrink-0 space-y-3 pr-2">
          <div className="flex items-center gap-3">
            <time className="font-mono text-xs tracking-wide" style={{ color: 'var(--primary)', opacity: '0.38' }}>May 14, 2026</time>
            <span className="font-mono text-xs" style={{ color: 'var(--primary)', opacity: '0.18' }}>·</span>
            <span className="font-mono text-xs tracking-wide" style={{ color: 'var(--primary)', opacity: '0.38' }}>7 min read</span>
          </div>
          <h3 className="font-heading font-bold text-[1.3rem] md:text-[1.55rem] lg:text-[1.7rem] leading-snug transition-colors duration-200 text-[#0A0A0A] hover:text-[#C8922A]">
            Why Most SME Campaigns Fail Before They Even Launch
          </h3>
          <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--primary)', opacity: '0.52' }}>
            The gap isn't budget — it's the absence of a single agreed-upon customer. We traced 40 campaigns back to exactly where the trouble started.
          </p>
        </div>
      </article>

      {/* ② Local SEO — top-right cell */}
      <article className="flex-shrink-0 snap-start w-[85vw] max-w-sm
                      md:w-auto md:max-w-none md:col-span-2 md:col-start-4 md:row-start-1
                      flex flex-col gap-3 group cursor-pointer">

        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="225" fill="#F5F0E8" />
            <defs>
              <linearGradient id="bpg-seo" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#C8922A" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#0A0A0A" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            <rect width="400" height="225" fill="url(#bpg-seo)" />
            {/* Diagonal rule marks */}
            <line x1="305" y1="-15" x2="440" y2="215" stroke="#C8922A" strokeWidth="1.2" opacity="0.28" />
            <line x1="332" y1="-15" x2="458" y2="200" stroke="#C8922A" strokeWidth="0.6" opacity="0.13" />
            <line x1="358" y1="-15" x2="475" y2="188" stroke="#C8922A" strokeWidth="0.4" opacity="0.07" />
            {/* Circle outline, right side */}
            <circle cx="342" cy="98" r="54" fill="none" stroke="#0A0A0A" strokeWidth="0.8" opacity="0.11" />
            <circle cx="342" cy="98" r="32" fill="#0A0A0A" opacity="0.05" />
            {/* Small corner mark */}
            <rect x="22" y="18" width="14" height="14" rx="2" fill="none" stroke="#C8922A" strokeWidth="1" opacity="0.3" />
          </svg>
          <span className="absolute top-3 left-3 font-mono text-[0.58rem] tracking-[0.22em] uppercase px-2.5 py-1 rounded-sm" style={{ backgroundColor: 'var(--primary)', color: 'var(--secondary)' }}>Local SEO</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <time className="font-mono text-xs tracking-wide" style={{ color: 'var(--primary)', opacity: '0.38' }}>May 08, 2026</time>
            <span className="font-mono text-xs" style={{ color: 'var(--primary)', opacity: '0.18' }}>·</span>
            <span className="font-mono text-xs tracking-wide" style={{ color: 'var(--primary)', opacity: '0.38' }}>5 min</span>
          </div>
          <h3 className="font-heading font-bold text-[1.05rem] md:text-[1.1rem] leading-snug transition-colors duration-200 text-[#0A0A0A] hover:text-[#C8922A]">
            The Compound Effect of Local SEO: How Consistent Signals Win the Long Game
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--primary)', opacity: '0.5' }}>
            Ranking locally isn't a sprint. We break down the signal-stacking approach we use for multi-location clients.
          </p>
        </div>
      </article>

      {/* ③ Non-Profit Ad Grants — bottom-right cell */}
      <article className="flex-shrink-0 snap-start w-[85vw] max-w-sm
                      md:w-auto md:max-w-none md:col-span-2 md:col-start-4 md:row-start-2
                      flex flex-col gap-3 group cursor-pointer">

        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 225" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="225" fill="#111111" />
            <defs>
              <radialGradient id="bpg-nfp" cx="78%" cy="5%" r="65%">
                <stop offset="0%" stopColor="#C8922A" stopOpacity="0.38" />
                <stop offset="100%" stopColor="#111111" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="400" height="225" fill="url(#bpg-nfp)" />
            {/* Rotated diamond shapes */}
            <rect x="255" y="45" width="88" height="88" rx="2" transform="rotate(45 299 89)" fill="none" stroke="#C8922A" strokeWidth="1" opacity="0.4" />
            <rect x="270" y="57" width="60" height="60" rx="1" transform="rotate(45 300 87)" fill="#C8922A" opacity="0.1" />
            <rect x="283" y="68" width="36" height="36" transform="rotate(45 301 86)" fill="#C8922A" opacity="0.06" />
            {/* Bottom-left dot matrix */}
            <circle cx="30" cy="186" r="2" fill="#F5F0E8" opacity="0.28" />
            <circle cx="42" cy="186" r="2" fill="#F5F0E8" opacity="0.18" />
            <circle cx="54" cy="186" r="2" fill="#F5F0E8" opacity="0.1" />
            <circle cx="30" cy="198" r="2" fill="#F5F0E8" opacity="0.14" />
            <circle cx="42" cy="198" r="2" fill="#F5F0E8" opacity="0.09" />
            {/* Horizontal rule fragment */}
            <line x1="30" y1="172" x2="100" y2="172" stroke="#F5F0E8" strokeWidth="0.6" opacity="0.12" />
          </svg>
          <span className="absolute top-3 left-3 font-mono text-[0.58rem] tracking-[0.22em] uppercase px-2.5 py-1 rounded-sm" style={{ backgroundColor: 'var(--accent)', color: '#fff' }}>Non-Profits</span>
        </div>

        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <time className="font-mono text-xs tracking-wide" style={{ color: 'var(--primary)', opacity: '0.38' }}>Apr 29, 2026</time>
            <span className="font-mono text-xs" style={{ color: 'var(--primary)', opacity: '0.18' }}>·</span>
            <span className="font-mono text-xs tracking-wide" style={{ color: 'var(--primary)', opacity: '0.38' }}>6 min</span>
          </div>
          <h3 className="font-heading font-bold text-[1.05rem] md:text-[1.1rem] leading-snug transition-colors duration-200 text-[#0A0A0A] hover:text-[#C8922A]">
            Google Ad Grants: The $10K/Month Tool Most Non-Profits Aren't Using Correctly
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--primary)', opacity: '0.5' }}>
            Compliance quirks and keyword gaps are leaving missions underfunded. Here's what proper grant management actually looks like.
          </p>
        </div>
      </article>

    </div>
  </div>
</section>

{/* cta_banner (cta-A) */}
<section className="relative overflow-hidden py-16 md:py-28 lg:py-36" style={{ backgroundColor: 'var(--primary)' }}>

  {/* Ambient warm radial */}
  <div aria-hidden="true" className="pointer-events-none absolute -top-40 -right-40 w-[520px] h-[520px]" style={{ background: 'radial-gradient(circle, rgba(200,146,42,0.08) 0%, transparent 65%)' }}></div>

  {/* Faint watermark numeral */}
  <div aria-hidden="true" className="pointer-events-none select-none absolute right-0 bottom-0 font-heading font-bold leading-none hidden xl:block translate-x-[12%] translate-y-[18%]" style={{ fontSize: 'clamp(160px, 22vw, 320px)', color: 'rgba(245,240,232,0.022)', letterSpacing: '-0.04em' }}>20+</div>

  <div className="relative max-w-7xl mx-auto px-6 md:px-12">

    {/* Top rule: amber fade */}
    <div className="h-px mb-14 md:mb-20" style={{ background: 'linear-gradient(90deg, var(--accent) 0%, rgba(200,146,42,0.18) 45%, transparent 100%)' }}></div>

    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-20">

      {/* LEFT: editorial copy */}
      <div className="flex-1 min-w-0">

        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-8">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
            <path d="M6 0L12 6L6 12L0 6Z" fill="var(--accent)" />
          </svg>
          <span className="text-xs tracking-[0.24em] uppercase font-medium" style={{ color: 'var(--accent)' }}>Not your average agency</span>
        </div>

        {/* Headline */}
        <h2 className="font-heading font-bold text-white tracking-tight leading-[0.9] mb-7" style={{ fontSize: 'clamp(2.6rem, 6.5vw, 5.75rem)' }}>
          Stop settling.<br />
          <span style={{ color: 'var(--accent)' }}>Start compounding.</span>
        </h2>

        {/* Body */}
        <p className="text-base md:text-lg leading-relaxed max-w-[440px]" style={{ color: 'rgba(250,250,248,0.48)' }}>
          Twenty years of strategy, creative, and technical depth — paired with full transparency on every move. We treat your budget like our own, report back without hiding anything, and stick around until the work is actually done.
        </p>

        {/* Subtle proof line */}
        <p className="mt-6 text-sm font-medium" style={{ color: 'rgba(250,250,248,0.28)' }}>
          Serving start-ups, SMEs &amp; non-profits across North America
        </p>

      </div>

      {/* RIGHT: CTA block */}
      <div className="flex flex-col items-start lg:items-end gap-4 lg:shrink-0">

        {/* Decorative label above button (desktop only) */}
        <p className="text-xs tracking-[0.18em] uppercase hidden lg:block" style={{ color: 'rgba(250,250,248,0.25)' }}>
          One call. No strings.
        </p>

        {/* Primary CTA */}
        <a href="/contact/" className="group inline-flex items-center gap-3 px-8 py-4 text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-[0.98]" style={{ backgroundColor: 'var(--accent)', color: 'var(--primary)', borderRadius: '3px', letterSpacing: '0.015em' }}>
          Book a free strategy call
          <svg className="w-4 h-4 transition-transform duration-150 group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* No-commitment micro */}
        <p className="text-xs" style={{ color: 'rgba(250,250,248,0.25)' }}>No pitch decks. No commitment required.</p>

        {/* Inline trust marks */}
        <div className="flex items-center gap-4 mt-1 lg:justify-end">
          {/* checkmark + text × 2 */}
          <span className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(250,250,248,0.35)' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="5.5" stroke="rgba(200,146,42,0.45)" />
              <path d="M3.5 6l2 2 3-3" stroke="var(--accent)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            No hidden fees
          </span>
          <span className="flex items-center gap-1.5 text-xs" style={{ color: 'rgba(250,250,248,0.35)' }}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
              <circle cx="6" cy="6" r="5.5" stroke="rgba(200,146,42,0.45)" />
              <path d="M3.5 6l2 2 3-3" stroke="var(--accent)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Full transparency
          </span>
        </div>

      </div>
    </div>

    {/* Bottom rule */}
    <div className="h-px mt-14 md:mt-20" style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(245,240,232,0.07) 50%, transparent 100%)' }}></div>

  </div>
</section>

{/* footer (footer-C) */}
<section style={{ backgroundColor: 'var(--primary)' }}>

<footer id="oat-footer">
  <div className="max-w-7xl mx-auto px-5 md:px-8 xl:px-12">

    {/* Brand + social + CTA */}
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 pt-14 md:pt-24 pb-12 md:pb-16 border-b border-white/[0.08]">
      <div>
        <svg width="30" height="40" viewBox="0 0 30 40" fill="none" className="mb-5" aria-hidden="true">
          <ellipse cx="15" cy="20" rx="10.5" ry="18" stroke="#C8922A" strokeWidth="1.2" />
          <line x1="15" y1="2" x2="15" y2="38" stroke="#C8922A" strokeWidth="1.2" />
          <path d="M5.5 12 Q10 14.5 15 12 Q20 9.5 24.5 12" stroke="#C8922A" strokeWidth="0.85" opacity="0.55" />
          <path d="M5 17.5 Q10 20 15 17.5 Q20 15 25 17.5" stroke="#C8922A" strokeWidth="0.85" opacity="0.55" />
          <path d="M5 23 Q10 25.5 15 23 Q20 20.5 25 23" stroke="#C8922A" strokeWidth="0.85" opacity="0.55" />
          <path d="M5.5 28.5 Q10 31 15 28.5 Q20 26 24.5 28.5" stroke="#C8922A" strokeWidth="0.85" opacity="0.55" />
        </svg>
        <div className="font-heading font-bold text-white text-2xl md:text-[26px] tracking-tight mb-2.5">OAT Marketing</div>
        <p className="text-white/40 text-sm leading-[1.75]" style={{ maxWidth: '22rem' }}>Not your average agency. Twenty-plus years compounding growth — for start-ups, enterprises, and causes that deserve real partnership.</p>
      </div>
      <div className="flex flex-col items-start md:items-end gap-5">
        <a href="/contact" className="inline-flex items-center gap-2.5 text-white font-heading text-sm font-semibold px-5 py-3.5 hover:opacity-90 transition-opacity" style={{ backgroundColor: 'var(--accent)' }}>
          Get a free consultation
          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true"><path d="M2 6.5h9M8 3l3.5 3.5L8 10" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="LinkedIn" className="text-white/35 hover:text-white transition-colors">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="currentColor" aria-hidden="true"><path d="M3.3 15.5H1.2V6h2.1v9.5zM2.2 5C1.5 5 1 4.4 1 3.8S1.5 2.5 2.2 2.5s1.3.6 1.3 1.3S3 5 2.2 5zm13.3 10.5H13.4V11c0-1-.4-1.8-1.5-1.8-1.6 0-1.9 1.2-1.9 2.3v4H7.9V6H10v1.3c.4-.8 1.3-1.6 2.7-1.6 2 0 2.9 1.3 2.9 3.6v6.2z" /></svg>
          </a>
          <a href="#" aria-label="Instagram" className="text-white/35 hover:text-white transition-colors">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true"><rect x="1.5" y="1.5" width="14" height="14" rx="4.5" /><circle cx="8.5" cy="8.5" r="3.2" /><circle cx="12.8" cy="4.3" r="0.65" fill="currentColor" stroke="none" /></svg>
          </a>
          <a href="#" aria-label="X / Twitter" className="text-white/35 hover:text-white transition-colors">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M12.3 2h2.3L9.6 7.8l5.8 7.7H11L7.7 10.7 4 15.5H1.7l5.5-6.4L1.5 2H6l2.9 4 3.4-4zm-1 11.5h1.3L5.3 3.2H3.9l7.4 10.3z" /></svg>
          </a>
          <a href="#" aria-label="Facebook" className="text-white/35 hover:text-white transition-colors">
            <svg width="17" height="17" viewBox="0 0 17 17" fill="currentColor" aria-hidden="true"><path d="M15.5 1H1.5C1.2 1 1 1.2 1 1.5v14c0 .3.2.5.5.5H9v-6H7V8h2V6.8C9 4.9 10.1 4 11.8 4c.8 0 1.7.06 2 .09v2h-1.2c-1.1 0-1.3.44-1.3 1.1V8H14l-.3 2h-2V16h4.3c.3 0 .5-.2.5-.5v-14c0-.3-.2-.5-.5-.5z" /></svg>
          </a>
        </div>
      </div>
    </div>

    {/* Nav columns */}
    <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10 lg:gap-14 py-10 md:py-16">

      {/* Services */}
      <div className="oat-fc border-b border-white/[0.06] md:border-b-0">
        <details>
          <summary className="flex items-center justify-between py-4 md:pb-6 md:pt-0 select-none cursor-pointer">
            <span className="font-heading text-[10px] uppercase tracking-[0.18em]" style={{ color: 'var(--accent)' }}>Services</span>
            <svg className="oat-chev w-4 h-4 text-white/30" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </summary>
          <ul className="pb-6 md:pb-0 space-y-[11px]">
            <li><a href="/services/seo" className="text-white/[0.52] hover:text-white text-sm transition-colors block">SEO</a></li>
            <li><a href="/services/local-seo" className="text-white/[0.52] hover:text-white text-sm transition-colors block">Local SEO</a></li>
            <li><a href="/services/paid-ads" className="text-white/[0.52] hover:text-white text-sm transition-colors block">Paid Ads</a></li>
            <li><a href="/services/google-ad-grant" className="text-white/[0.52] hover:text-white text-sm transition-colors block">Google Ad Grant</a></li>
            <li><a href="/services/social-media" className="text-white/[0.52] hover:text-white text-sm transition-colors block">Social Media</a></li>
            <li><a href="/services/email" className="text-white/[0.52] hover:text-white text-sm transition-colors block">Email Marketing</a></li>
            <li><a href="/services/websites" className="text-white/[0.52] hover:text-white text-sm transition-colors block">Websites</a></li>
            <li><a href="/services/graphic-design" className="text-white/[0.52] hover:text-white text-sm transition-colors block">Graphic Design</a></li>
            <li><a href="/services/market-research" className="text-white/[0.52] hover:text-white text-sm transition-colors block">Market Research</a></li>
            <li><a href="/services/oat-workshops" className="text-white/[0.52] hover:text-white text-sm transition-colors block">OAT Workshops</a></li>
          </ul>
        </details>
      </div>

      {/* Who We Work With */}
      <div className="oat-fc border-b border-white/[0.06] md:border-b-0">
        <details>
          <summary className="flex items-center justify-between py-4 md:pb-6 md:pt-0 select-none cursor-pointer">
            <span className="font-heading text-[10px] uppercase tracking-[0.18em]" style={{ color: 'var(--accent)' }}>Who We Work With</span>
            <svg className="oat-chev w-4 h-4 text-white/30" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </summary>
          <ul className="pb-6 md:pb-0 space-y-[11px]">
            <li><a href="/who-we-work-with/startups" className="text-white/[0.52] hover:text-white text-sm transition-colors block">Start-ups</a></li>
            <li><a href="/who-we-work-with/sme" className="text-white/[0.52] hover:text-white text-sm transition-colors block">Small + Mid-Sized Enterprises</a></li>
            <li><a href="/who-we-work-with/not-for-profit" className="text-white/[0.52] hover:text-white text-sm transition-colors block">Not-For-Profits</a></li>
          </ul>
        </details>
      </div>

      {/* Company */}
      <div className="oat-fc border-b border-white/[0.06] md:border-b-0">
        <details>
          <summary className="flex items-center justify-between py-4 md:pb-6 md:pt-0 select-none cursor-pointer">
            <span className="font-heading text-[10px] uppercase tracking-[0.18em]" style={{ color: 'var(--accent)' }}>Company</span>
            <svg className="oat-chev w-4 h-4 text-white/30" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </summary>
          <ul className="pb-6 md:pb-0 space-y-[11px]">
            <li><a href="/about" className="text-white/[0.52] hover:text-white text-sm transition-colors block">About Us</a></li>
            <li><a href="/blog" className="text-white/[0.52] hover:text-white text-sm transition-colors block">Blog</a></li>
            <li><a href="/careers" className="text-white/[0.52] hover:text-white text-sm transition-colors block">Careers</a></li>
            <li><a href="/contact" className="text-white/[0.52] hover:text-white text-sm transition-colors block">Contact</a></li>
          </ul>
        </details>
      </div>

      {/* Get In Touch */}
      <div className="oat-fc">
        <details>
          <summary className="flex items-center justify-between py-4 md:pb-6 md:pt-0 select-none cursor-pointer">
            <span className="font-heading text-[10px] uppercase tracking-[0.18em]" style={{ color: 'var(--accent)' }}>Get In Touch</span>
            <svg className="oat-chev w-4 h-4 text-white/30" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
          </summary>
          <div className="pb-6 md:pb-0 space-y-3.5">
            <a href="mailto:hello@oatmarketing.com" className="text-white/[0.52] hover:text-white text-sm transition-colors block">hello@oatmarketing.com</a>
            <p className="text-white/[0.28] text-xs leading-[1.75]">Fully remote, spanning time zones. You'll hear back within one business day.</p>
            <a href="/contact" className="font-heading font-semibold text-sm inline-flex items-center gap-1.5 hover:text-white transition-colors" style={{ color: 'var(--accent)' }}>
              Book a free strategy call
              <svg width="11" height="11" viewBox="0 0 11 11" fill="none" aria-hidden="true"><path d="M1.5 5.5h8M7 2l3.5 3.5L7 9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </details>
      </div>

    </div>

    {/* Bottom bar */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2.5 py-6 border-t border-white/[0.08]">
      <p className="text-white/[0.22] text-xs">© 2026 OAT Marketing Inc. All rights reserved.</p>
      <div className="flex items-center gap-5">
        <a href="/privacy" className="text-white/[0.22] hover:text-white/60 text-xs transition-colors">Privacy Policy</a>
        <a href="/terms" className="text-white/[0.22] hover:text-white/60 text-xs transition-colors">Terms of Use</a>
        <a href="#top" className="text-white/[0.22] hover:text-white/60 text-xs transition-colors inline-flex items-center gap-1.5">
          Back to top
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M5 8.5V1.5M2 4.5L5 1.5l3 3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </div>
    </div>

  </div>
</footer>
</section>
    </>
  );
}
