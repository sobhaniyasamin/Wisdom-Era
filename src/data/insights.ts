export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  date: string; // ISO, e.g. "2026-06-20"
  author: string;
  tag: string;
  /** Article body in Markdown. */
  content: string;
}

// Example posts — edit freely or replace with real articles.
// Each post is plain Markdown; headings, lists, links, and emphasis all work.
export const posts: Post[] = [
  {
    slug: "why-we-co-build",
    title: "Why we co-build instead of just investing",
    excerpt:
      "Capital is a commodity. The real leverage in early-stage company building is judgment, execution, and the willingness to be in the room when it's hard.",
    date: "2026-06-20",
    author: "Vahid Shirazi",
    tag: "Thesis",
    content: `Most early-stage investors optimize for ownership. We optimize for outcomes.

## The gap capital can't close

A wire transfer doesn't ship a product, hire a first engineer, or rewrite a go-to-market motion that isn't working. In the earliest stages, the difference between companies that compound and companies that stall is rarely the size of the round. It's the quality of the decisions made every week.

That's where we focus.

## What co-building looks like

- **Product and technology:** we get into the details of what to build and what to cut.
- **Talent:** we help recruit the first critical hires, often from our own network.
- **Go-to-market:** we pressure-test pricing, positioning, and the first ten customers.
- **Operating infrastructure:** shared tools and lessons across the group so no founder solves a solved problem twice.

## Compounding across the group

Every company we back makes the next one stronger. A lesson learned in one portfolio company becomes a playbook for another. Over time, that shared experience becomes a durable advantage that no single team could build alone.

We're not passive. We're co-founders who happen to write the first check.`,
  },
  {
    slug: "applied-ai-emerging-markets",
    title: "Where applied AI actually pays off in emerging markets",
    excerpt:
      "The most valuable AI in emerging markets isn't the flashiest. It's the systems that quietly improve margins, conversion, and yield at scale.",
    date: "2026-05-12",
    author: "Wisdom Era",
    tag: "Sectors",
    content: `AI headlines chase frontier models. We chase frontier *margins*.

## Two sectors, one pattern

In both e-commerce and agriculture, the winning applications of AI share a shape: they take a messy, high-volume, real-world process and make it measurably more efficient.

### E-commerce

- Personalization that lifts seller conversion.
- Visual search that turns inspiration into purchase.
- Real-time pricing, inventory, and demand forecasting.

### Agriculture

- Predictive planning that anticipates risk and increases yield.
- Monitoring that detects crop stress, disease, and soil issues early.

## Why emerging markets

These markets have large, underserved populations and processes that are still being digitized. That means AI doesn't just optimize an existing system, it can leapfrog one. The economic impact per unit of technology is higher precisely because the baseline is lower.

That's the opportunity we build into.`,
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function readingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string): string {
  const d = new Date(iso + "T00:00:00Z");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}
