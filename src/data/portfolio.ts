export interface PortfolioCompany {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  fullDescription: string;
  logoSrc: string;
  website: string;
  tags: string[];
  sector: "E-Commerce" | "Agriculture" | "AI";
  highlights: { label: string; value: string }[];
  features: string[];
}

export const portfolioCompanies: PortfolioCompany[] = [
  {
    slug: "torob",
    name: "Torob",
    tagline: "Iran's Leading Price Comparison Platform",
    description:
      "Torob transforms the way Iranians shop online by making price comparison effortless and transparent. Users enter a product name and Torob instantly aggregates prices from thousands of verified retailers. Its smart ranking system considers price, store reputation, and delivery reliability. For merchants, Torob provides a powerful CPC-based channel to reach high-intent buyers.",
    fullDescription:
      "Torob is the largest and most trusted price comparison engine in Iran, processing millions of product searches every month. The platform aggregates real-time pricing data from thousands of online retailers, giving consumers unprecedented transparency in their purchasing decisions.\n\nThe platform's AI-powered ranking algorithm doesn't just sort by price — it factors in store reputation scores, delivery reliability metrics, return policies, and historical pricing trends to surface the best overall deals. This multi-factor approach has earned Torob the trust of millions of Iranian consumers.\n\nFor merchants, Torob operates on a cost-per-click (CPC) advertising model, providing a highly efficient channel to reach high-intent buyers who are actively comparing prices and ready to purchase. This creates a win-win ecosystem where consumers find better deals and merchants acquire customers at scale.",
    logoSrc: "/torob.svg",
    website: "https://torob.com/",
    tags: ["Price Comparison", "CPC Model", "E-Commerce", "Iran Market Leader"],
    sector: "E-Commerce",
    highlights: [
      { label: "Market Position", value: "#1 in Iran" },
      { label: "Revenue Model", value: "CPC-Based" },
      { label: "Coverage", value: "1000s of Retailers" },
      { label: "Sector", value: "E-Commerce" },
    ],
    features: [
      "Real-time price aggregation across thousands of retailers",
      "AI-powered smart ranking considering price, reputation, and reliability",
      "CPC-based advertising model for merchants",
      "Product tracking and price alert notifications",
      "Store reputation and reliability scoring system",
      "Mobile-first responsive design for on-the-go comparisons",
    ],
  },
  {
    slug: "modai",
    name: "ModAI",
    tagline: "Visual & Social Commerce Platform",
    description:
      "ModAI is building a more structured platform for social commerce, combining the engagement of social shopping with the reliability and benefits of e-commerce. Using AI-powered visual search, users can snap a photo of any product and instantly find where to buy it — bridging the gap between inspiration and purchase.",
    fullDescription:
      "ModAI represents the next evolution in social commerce — a platform that bridges the gap between social media inspiration and actual purchasing. Traditional social commerce is fragmented and unreliable; ModAI brings structure, trust, and AI-powered discovery to the experience.\n\nAt the core of ModAI is its visual search technology. Users can photograph any product they encounter — whether on the street, in a magazine, or on social media — and ModAI's AI engine instantly identifies the item and surfaces matching products available for purchase. This creates a frictionless path from \"I want that\" to \"I bought it.\"\n\nThe platform combines the engagement mechanics of social shopping (following tastemakers, curated collections, trending items) with the reliability infrastructure of e-commerce (verified sellers, secure payments, delivery tracking). This hybrid approach serves both consumers looking for authentic product discovery and merchants seeking new sales channels.",
    logoSrc: "/Modai.svg",
    website: "https://modai.fashion/",
    tags: ["Visual Search", "Social Commerce", "AI-Powered"],
    sector: "E-Commerce",
    highlights: [
      { label: "Core Tech", value: "Visual AI" },
      { label: "Model", value: "Social Commerce" },
      { label: "Key Feature", value: "Photo Search" },
      { label: "Sector", value: "E-Commerce" },
    ],
    features: [
      "AI-powered visual search — snap a photo, find where to buy",
      "Structured social commerce with verified sellers",
      "Curated collections and trending product discovery",
      "Secure checkout with delivery tracking",
      "Tastemaker and influencer integration",
      "Cross-platform product matching engine",
    ],
  },
  {
    slug: "baghboon",
    name: "Baghboon",
    tagline: "Agricultural Merchant Platform",
    description:
      "Baghboon is closing the gap between technology and hands-on agricultural expertise. The platform connects farmers with a network of botanists who respond directly to questions and visit farms when needed — bringing expert support into the field and digitizing the agricultural supply chain.",
    fullDescription:
      "Baghboon is transforming agriculture by creating a direct bridge between farmers and agricultural experts. In many emerging markets, farmers lack access to timely expert advice, leading to crop losses, inefficient practices, and missed opportunities. Baghboon solves this through a marketplace that connects growers with verified botanists and agronomists.\n\nThe platform enables farmers to submit questions about crop health, pest management, soil conditions, and planting strategies. Expert botanists respond with personalized guidance, and when hands-on assessment is needed, they can schedule farm visits through the platform. This on-demand expert network brings university-level agricultural knowledge directly to the field.\n\nBeyond consultation, Baghboon is building the digital infrastructure for the agricultural supply chain — from seed sourcing and input procurement to harvest planning and market access. By digitizing these traditionally offline processes, Baghboon helps farmers optimize their operations and improve yields.",
    logoSrc: "/baghboon.svg",
    website: "https://baghboon.com/",
    tags: ["AgTech", "Expert Network", "Marketplace", "Agriculture"],
    sector: "Agriculture",
    highlights: [
      { label: "Focus", value: "Agriculture" },
      { label: "Model", value: "Expert Marketplace" },
      { label: "Key Feature", value: "Farm Visits" },
      { label: "Sector", value: "AgTech" },
    ],
    features: [
      "On-demand access to verified botanists and agronomists",
      "In-person farm visit scheduling and management",
      "Crop health assessment and pest management guidance",
      "Agricultural supply chain digitization",
      "Seed sourcing and input procurement tools",
      "Harvest planning and market access insights",
    ],
  },
  {
    slug: "mori",
    name: "Mori",
    tagline: "AI Sales Agent",
    description:
      "Mori is an AI-powered sales agent that automates and personalizes the entire customer engagement pipeline. Using advanced conversational AI, Mori handles outreach, qualification, and follow-up — enabling businesses to scale their sales operations with intelligent, always-on AI representatives.",
    fullDescription:
      "Mori is redefining sales automation with AI agents that don't just send messages — they understand context, personalize conversations, and qualify leads with human-like nuance. Traditional sales automation tools blast generic sequences; Mori creates genuine, personalized engagement at scale.\n\nThe platform's conversational AI handles the entire top-of-funnel pipeline: initial outreach, lead qualification, objection handling, meeting scheduling, and persistent follow-up. Each interaction is contextually aware, drawing on prospect data, company information, and conversation history to create relevant, compelling dialogues.\n\nFor businesses, Mori represents an always-on sales team that never sleeps, never forgets to follow up, and continuously improves its approach based on what works. The result is dramatically higher response rates, more qualified pipeline, and sales teams freed to focus on closing rather than prospecting.",
    logoSrc: "/Mori.svg",
    website: "https://ai.mori.style",
    tags: ["AI Agent", "Sales Automation", "Conversational AI"],
    sector: "AI",
    highlights: [
      { label: "Core Tech", value: "Conversational AI" },
      { label: "Function", value: "Sales Automation" },
      { label: "Key Feature", value: "Always-On Agent" },
      { label: "Sector", value: "AI / SaaS" },
    ],
    features: [
      "AI-powered outreach with personalized messaging",
      "Automated lead qualification and scoring",
      "Intelligent objection handling and follow-up",
      "Meeting scheduling and calendar integration",
      "Conversation analytics and performance insights",
      "Multi-channel engagement (email, chat, social)",
    ],
  },
];
