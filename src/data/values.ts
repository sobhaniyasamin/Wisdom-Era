export type ValueIcon =
  | "handshake"
  | "trending-up"
  | "cpu"
  | "wrench"
  | "compass"
  | "eye";

export interface Value {
  icon: ValueIcon;
  title: string;
  description: string;
}

// Placeholder principles — edit freely.
export const values: Value[] = [
  {
    icon: "handshake",
    title: "Founder-First",
    description:
      "We back people before products. The right team turns an early idea into a durable company.",
  },
  {
    icon: "trending-up",
    title: "Long-Term Thinking",
    description:
      "We invest where value compounds over years, not quarters. Patience is part of the strategy.",
  },
  {
    icon: "cpu",
    title: "AI-Native",
    description:
      "Every company we build puts applied AI at its core, where it drives real economic impact.",
  },
  {
    icon: "wrench",
    title: "Hands-On",
    description:
      "We co-build, deeply involved across product, technology, talent, and strategy from day one.",
  },
  {
    icon: "compass",
    title: "Conviction",
    description:
      "We pursue frontier ideas others consider too early, and move faster than the market.",
  },
  {
    icon: "eye",
    title: "Transparency",
    description:
      "Honest, direct partnership with our founders: clear expectations and shared accountability.",
  },
];
