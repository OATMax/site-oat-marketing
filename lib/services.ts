export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  category: "Acquisition" | "Creative" | "Strategy";
  /** one-line promise, used on index cards + detail hero */
  tagline: string;
  /** 1–2 sentence summary for the services index grid */
  summary: string;
  /** detail-page intro paragraph */
  intro: string;
  /** what the engagement actually involves */
  whatWeDo: string[];
  /** concrete deliverables the client receives */
  deliverables: string[];
  /** the outcome the work drives toward */
  outcome: string;
  faqs: Faq[];
  /** primary SEO target for the detail page */
  keyword: string;
};

export const SERVICES: Service[] = [
  {
    slug: "seo",
    name: "SEO",
    category: "Acquisition",
    tagline: "Compounding organic growth, built to last.",
    summary: "Technical, on-page, and content SEO that earns durable rankings — the traffic that keeps paying back long after the work is done.",
    intro:
      "Search is the channel that compounds. We build SEO programs that move the keywords that actually drive revenue, not vanity terms — grounded in real search data, competitor gap analysis, and a content engine that ships on a schedule.",
    whatWeDo: [
      "Technical audits that fix crawl, indexation, speed, and Core Web Vitals at the root",
      "Keyword and intent research mapped to the buying journey, not just volume",
      "On-page optimisation and internal-link architecture across your whole site",
      "A content roadmap that targets the gaps your competitors left open",
    ],
    deliverables: [
      "Prioritised technical fix list with developer-ready tickets",
      "Keyword map by funnel stage and target page",
      "Monthly content briefs and published articles",
      "Rank, traffic, and conversion reporting you can actually read",
    ],
    outcome: "More qualified organic traffic, month over month, from terms that convert.",
    faqs: [
      { q: "How long until we see results?", a: "SEO compounds. Most engagements show measurable movement within the first quarter, with the steepest gains landing in months four through nine as content and authority accumulate." },
      { q: "Do you guarantee a #1 ranking?", a: "No honest agency can. We commit to the inputs that move rankings — and we report on the outcomes transparently, including what is and isn't working." },
    ],
    keyword: "SEO agency",
  },
  {
    slug: "local-seo",
    name: "Local SEO",
    category: "Acquisition",
    tagline: "Own the map pack in every market you serve.",
    summary: "Google Business Profile, local landing pages, citations, and reviews that put you in front of nearby buyers ready to act.",
    intro:
      "When someone searches with local intent, the map pack is the storefront. We optimise your Google Business Profile, build location pages that scale across cities, and earn the reviews and citations that local ranking actually rewards.",
    whatWeDo: [
      "Google Business Profile optimisation and ongoing management",
      "Scalable per-city landing pages built for local intent",
      "Citation building and NAP consistency across the directories that matter",
      "Review generation systems that keep your rating climbing",
    ],
    deliverables: [
      "Fully optimised Business Profile with posting cadence",
      "Local landing-page templates that scale to new markets",
      "Citation audit and cleanup report",
      "Local rank tracking by city and keyword",
    ],
    outcome: "More calls, directions, and walk-ins from the people closest to you.",
    faqs: [
      { q: "We serve multiple cities — can you cover all of them?", a: "Yes. We build a scalable local page model so adding a new market is repeatable, not a rebuild every time." },
      { q: "Do reviews really matter that much?", a: "They're one of the strongest local ranking and conversion signals. We make earning them a system, not an afterthought." },
    ],
    keyword: "local SEO agency",
  },
  {
    slug: "paid-ads",
    name: "Paid Ads",
    category: "Acquisition",
    tagline: "Profitable demand you can turn up on command.",
    summary: "Google, Meta, and beyond — paid campaigns engineered around margin, not just clicks, with full visibility into where every dollar goes.",
    intro:
      "Paid media is the fastest way to test, learn, and scale demand — when it's run against profit. We build campaigns around your real unit economics, kill what doesn't work fast, and pour budget into what does.",
    whatWeDo: [
      "Account structure built for clean signal and efficient testing",
      "Creative and copy testing frameworks across search and social",
      "Conversion tracking and offline-revenue feedback loops",
      "Budget pacing and bid strategy tuned to target return",
    ],
    deliverables: [
      "Campaign build across your chosen platforms",
      "Creative testing roadmap with named hypotheses",
      "Transparent spend and ROAS dashboard",
      "Weekly optimisation log — every change, with the reasoning",
    ],
    outcome: "Predictable, profitable customer acquisition you can scale or dial back at will.",
    faqs: [
      { q: "Which platforms do you run?", a: "Google Search, Performance Max, Meta, and the channels that fit your audience. We recommend based on where your buyers actually are, not where we have a preference." },
      { q: "Who owns the ad accounts?", a: "You do, always. We work inside your accounts so the data and history stay yours if we ever part ways." },
    ],
    keyword: "paid ads agency",
  },
  {
    slug: "google-ad-grant",
    name: "Google Ad Grant",
    category: "Acquisition",
    tagline: "Up to $10k/month in free Google Ads, working hard.",
    summary: "We help non-profits secure, activate, and maximise the Google Ad Grant — turning free ad spend into real mission impact.",
    intro:
      "The Google Ad Grant gives eligible non-profits a monthly budget of free search advertising. Most organisations leave the majority of it on the table. We handle eligibility, setup, and the strict compliance rules — then run it like it's your own money.",
    whatWeDo: [
      "Eligibility check, application, and account activation",
      "Campaign structure that meets the Grant's compliance requirements",
      "Keyword and landing-page work to keep quality scores compliant",
      "Ongoing management so spend stays maximised, not capped",
    ],
    deliverables: [
      "Grant application and approval support",
      "Compliant campaign build aligned to your programs",
      "Monthly spend-utilisation and conversion reporting",
      "Compliance monitoring so the Grant is never at risk",
    ],
    outcome: "More awareness, donations, and volunteers — funded by Google, run by us.",
    faqs: [
      { q: "Is our organisation eligible?", a: "Most registered non-profits are, with a few category exceptions. We run the eligibility check as the first step, at no risk to you." },
      { q: "Why do so many non-profits underuse the Grant?", a: "The compliance rules are strict and the account caps spend if quality drops. Active, knowledgeable management is what keeps the full budget flowing." },
    ],
    keyword: "Google Ad Grant agency",
  },
  {
    slug: "social-media",
    name: "Social Media",
    category: "Creative",
    tagline: "A feed people actually want to follow.",
    summary: "Organic social strategy, content, and community management that builds an audience and turns it into a pipeline.",
    intro:
      "Social isn't a billboard — it's a relationship. We build a content engine and posting rhythm that grows a real audience, then convert that attention into leads, applications, or sales depending on what your business needs.",
    whatWeDo: [
      "Channel strategy matched to where your audience already spends time",
      "Content calendars, short-form video, and graphics produced on schedule",
      "Community management and response so engagement stays a two-way street",
      "Performance review that ties content themes to outcomes",
    ],
    deliverables: [
      "Monthly content calendar and produced assets",
      "Platform-native short-form video and static creative",
      "Community management within agreed response windows",
      "Growth and engagement reporting by content theme",
    ],
    outcome: "A growing, engaged audience that compounds into reach and demand.",
    faqs: [
      { q: "Which platforms should we be on?", a: "Only the ones where your audience is and where you can sustain quality. We'd rather you win on two channels than spread thin across six." },
      { q: "Do you produce the video and design too?", a: "Yes — strategy, production, and publishing are handled in-house, so the feed stays consistent." },
    ],
    keyword: "social media marketing agency",
  },
  {
    slug: "email",
    name: "Email Marketing",
    category: "Acquisition",
    tagline: "The channel you own, finally pulling its weight.",
    summary: "Lifecycle flows, broadcasts, and segmentation that turn your list into one of your most profitable channels.",
    intro:
      "Email is the one audience you actually own — no algorithm in between. We build the automated flows and the ongoing campaigns that nurture subscribers, recover lost revenue, and keep customers coming back.",
    whatWeDo: [
      "Lifecycle flow design: welcome, nurture, abandonment, win-back",
      "List segmentation so the right message reaches the right person",
      "Campaign calendar and copy that sounds like you, not a template",
      "Deliverability and list-health monitoring",
    ],
    deliverables: [
      "Core automated flows built and live",
      "Monthly broadcast calendar with written copy",
      "Segmentation and tagging strategy",
      "Open, click, and revenue-per-email reporting",
    ],
    outcome: "A list that reliably drives revenue without extra ad spend.",
    faqs: [
      { q: "Which email platform do you work with?", a: "We work across the major platforms — Klaviyo, Mailchimp, HubSpot, and others. We'll recommend or work within whatever fits your stack." },
      { q: "Will this annoy our subscribers?", a: "Done right, the opposite. Good segmentation means people get fewer, more relevant emails — which improves both engagement and deliverability." },
    ],
    keyword: "email marketing agency",
  },
  {
    slug: "websites",
    name: "Websites",
    category: "Creative",
    tagline: "Sites that load fast, rank well, and convert.",
    summary: "Modern, fast, SEO-ready websites — designed to perform, built to be edited, and engineered to convert visitors into customers.",
    intro:
      "Your website is the one asset every other channel points to. We design and build fast, accessible, search-ready sites on a modern stack — then wire them to convert, so the traffic you earn doesn't leak away.",
    whatWeDo: [
      "Conversion-focused design grounded in how your buyers actually decide",
      "Modern, fast front-end build with strong Core Web Vitals",
      "On-page SEO and structured data baked in from the first line",
      "A content model your team can edit without a developer",
    ],
    deliverables: [
      "Designed, responsive, accessible website",
      "Headless CMS so your team can publish independently",
      "SEO, schema, and analytics wired in at launch",
      "Handoff docs and a training session for your team",
    ],
    outcome: "A site that earns its keep — faster, higher-ranking, and built to convert.",
    faqs: [
      { q: "Can we edit the site ourselves after launch?", a: "Yes. We build on a headless CMS and hand over training, so day-to-day content edits never require us." },
      { q: "Will it be fast and accessible?", a: "Performance, accessibility, and SEO are non-negotiables in our build, not add-ons. We test against real Lighthouse and accessibility budgets before launch." },
    ],
    keyword: "website design agency",
  },
  {
    slug: "graphic-design",
    name: "Graphic Design",
    category: "Creative",
    tagline: "A brand that looks the part everywhere.",
    summary: "Brand identity, marketing collateral, and campaign creative that makes you look as credible as you are.",
    intro:
      "Design is how trust gets communicated before a word is read. We craft brand identities and the day-to-day creative — social, ads, decks, print — that keeps you looking consistent and credible across every touchpoint.",
    whatWeDo: [
      "Brand identity: logo, palette, type, and usage guidelines",
      "Marketing collateral for digital and print",
      "Campaign and ad creative that's built to test and iterate",
      "Templates that let your team stay on-brand without us",
    ],
    deliverables: [
      "Brand guidelines and core identity assets",
      "Ongoing creative for campaigns and channels",
      "Editable templates for recurring formats",
      "Source files — they're yours",
    ],
    outcome: "A cohesive brand that signals credibility wherever a customer meets you.",
    faqs: [
      { q: "Do we own the design files?", a: "Completely. You get the source files and full usage rights for everything we create." },
      { q: "Can you work within our existing brand?", a: "Yes — we can refresh and extend an existing identity, or build one from scratch. We'll recommend based on where your brand stands." },
    ],
    keyword: "graphic design agency",
  },
  {
    slug: "market-research",
    name: "Market Research",
    category: "Strategy",
    tagline: "Decisions backed by data, not hunches.",
    summary: "Audience, competitor, and market research that tells you where to play and how to win before you spend.",
    intro:
      "The most expensive marketing is the kind aimed at the wrong people. We do the research — audience, competitor, and market — that grounds your strategy in evidence, so budget goes where the opportunity actually is.",
    whatWeDo: [
      "Audience and customer research: who they are, what they want, where they look",
      "Competitor and SERP analysis to find the open lanes",
      "Market sizing and positioning to focus your bets",
      "Messaging testing so your value proposition lands",
    ],
    deliverables: [
      "Audience and persona report",
      "Competitor and positioning analysis",
      "Opportunity map with prioritised recommendations",
      "A clear, evidence-backed strategy brief",
    ],
    outcome: "A strategy you can defend — and a marketing budget aimed at the real opportunity.",
    faqs: [
      { q: "Is this a standalone service?", a: "It can be. Many clients start here to set direction, then move into execution. Others fold it into a broader engagement." },
      { q: "How is this different from a quick competitor glance?", a: "We pull real search, audience, and market data over time — historical and measurable — rather than relying on a one-off impression." },
    ],
    keyword: "market research agency",
  },
  {
    slug: "oat-workshops",
    name: "OAT Workshops",
    category: "Strategy",
    tagline: "Upskill your team to run marketing in-house.",
    summary: "Hands-on training and workshops that level up your internal team across SEO, ads, content, and analytics.",
    intro:
      "Sometimes the win-win is teaching, not doing. Our workshops bring your team up to speed on the disciplines that matter — so they can own the day-to-day with confidence, and bring us in for the heavy lifting when it counts.",
    whatWeDo: [
      "Tailored curriculum built around your team's gaps and goals",
      "Hands-on sessions across SEO, paid, content, and analytics",
      "Playbooks and checklists your team keeps and reuses",
      "Follow-up support so the learning actually sticks",
    ],
    deliverables: [
      "Custom workshop sessions, in-person or remote",
      "Take-home playbooks and templates",
      "Recorded sessions for future hires",
      "A follow-up Q&A and review",
    ],
    outcome: "An internal team that can run more of its own marketing, well.",
    faqs: [
      { q: "Who are the workshops for?", a: "In-house marketers, founders, and teams who want to build capability rather than fully outsource. We tailor the depth to the room." },
      { q: "Can workshops be customised to our business?", a: "Always — every curriculum is built around your team's actual gaps, tools, and goals." },
    ],
    keyword: "marketing workshops",
  },
];

export const SERVICE_CATEGORIES: Service["category"][] = ["Acquisition", "Creative", "Strategy"];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
