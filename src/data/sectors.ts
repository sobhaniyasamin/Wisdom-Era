export interface Sector {
  title: string;
  description: string;
  tags: string[];
  icon: "shopping-bag" | "sprout";
}

export const sectors: Sector[] = [
  {
    title: "E-Commerce",
    description:
      "AI-driven social commerce, personalized shopping, visual search, smart chatbots, and dynamic pricing — reshaping how consumers discover and purchase products across emerging markets.",
    tags: ["Social Commerce", "Price Comparison", "Visual Search", "AI Personalization"],
    icon: "shopping-bag",
  },
  {
    title: "Agriculture",
    description:
      "Precision farming, AI crop monitoring, drone and satellite insights, market forecasting, and connecting farmers with expert botanists — modernizing agriculture from field to market.",
    tags: ["Precision Farming", "Crop Monitoring", "AgTech Marketplace", "Market Forecasting"],
    icon: "sprout",
  },
];
