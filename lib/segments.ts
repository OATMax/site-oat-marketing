export type Segment = {
  slug: string;
  number: string;
  name: string;
  audience: string;
  tagline: string;
  intro: string;
  challenges: string[];
  approach: { title: string; body: string }[];
  recommendedServices: string[]; // service slugs
  keyword: string;
};

export const SEGMENTS: Segment[] = [
  {
    slug: "startups",
    number: "01",
    name: "Start-ups",
    audience: "For founders",
    tagline: "Get found before the runway runs out.",
    intro:
      "Early-stage marketing is a race against burn. You need traction you can show investors and customers, fast — without torching the budget on channels that won't pay back. We build lean, measurable growth engines that prove what works before you scale it.",
    challenges: [
      "Limited budget that has to prove ROI quickly",
      "No established brand or organic footprint yet",
      "Pressure to show traction for the next raise",
      "A small team wearing too many hats",
    ],
    approach: [
      { title: "Start with evidence", body: "We research the market and audience first, so the first dollar goes to the highest-probability channel — not a guess." },
      { title: "Move fast, measure everything", body: "Tight test-and-learn loops on paid and content surface what works in weeks, not quarters." },
      { title: "Build the compounding base", body: "While paid drives early traction, we lay the SEO and content foundation that keeps paying back as you grow." },
    ],
    recommendedServices: ["paid-ads", "seo", "websites", "market-research"],
    keyword: "marketing agency for startups",
  },
  {
    slug: "sme",
    number: "02",
    name: "Small + Mid-Sized Enterprises",
    audience: "For established operators",
    tagline: "Turn steady into scaling.",
    intro:
      "You've got a working business and real revenue — now you need marketing that scales it without the chaos. We bring senior strategy and a full execution stack so you can grow share, enter new markets, and stop leaving demand on the table.",
    challenges: [
      "Plateauing growth from channels that used to work",
      "Marketing spread thin across too many half-run channels",
      "Hard to tell which activity is actually driving revenue",
      "Competitors getting louder in your space",
    ],
    approach: [
      { title: "Consolidate and focus", body: "We audit what you're running, cut what's leaking, and double down on the channels with proven return." },
      { title: "Full-funnel coverage", body: "SEO, paid, email, and social working together — so awareness, consideration, and conversion all get fed." },
      { title: "Report on revenue, not vanity", body: "Every channel ties back to pipeline and revenue, so you always know what's earning its budget." },
    ],
    recommendedServices: ["seo", "paid-ads", "email", "local-seo"],
    keyword: "SME marketing agency",
  },
  {
    slug: "not-for-profit",
    number: "03",
    name: "Not-For-Profits",
    audience: "For mission-driven teams",
    tagline: "More impact from every dollar and hour.",
    intro:
      "Mission-driven organisations do more with less by necessity. We help you stretch every dollar — starting with the Google Ad Grant's free ad spend — and build the awareness, donations, and volunteer pipeline your cause deserves.",
    challenges: [
      "Tight budgets that demand efficiency over scale",
      "Competing for attention against better-funded voices",
      "Underused tools like the Google Ad Grant",
      "Small teams without in-house marketing depth",
    ],
    approach: [
      { title: "Unlock free spend first", body: "We secure and fully activate the Google Ad Grant — up to $10k/month of free Google Ads pointed at your mission." },
      { title: "Tell the story well", body: "Brand, content, and social that move people to give, volunteer, and share." },
      { title: "Build capability that lasts", body: "Through OAT Workshops we upskill your team, so impact keeps growing after the engagement." },
    ],
    recommendedServices: ["google-ad-grant", "social-media", "graphic-design", "oat-workshops"],
    keyword: "nonprofit marketing agency",
  },
];

export function getSegment(slug: string): Segment | undefined {
  return SEGMENTS.find((s) => s.slug === slug);
}
