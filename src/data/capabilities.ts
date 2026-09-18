export interface Capability {
  number: string;
  title: string;
  description: string;
  keywords: string[];
}

export const capabilities: Capability[] = [
  {
    number: "01",
    title: "Brand",
    description:
      "Identities, positioning and visual systems built to make brands recognizable and relevant.",
    keywords: ["Strategy", "Identity", "Design"],
  },
  {
    number: "02",
    title: "Marketing",
    description:
      "Campaigns, content and digital strategies designed to turn attention into opportunities.",
    keywords: ["Strategy", "Content", "Performance"],
  },
  {
    number: "03",
    title: "Creators",
    description:
      "We connect brands with creators and communities that already have people's attention.",
    keywords: ["Influencers", "Content", "Community"],
  },
  {
    number: "04",
    title: "Technology",
    description:
      "Websites, platforms and digital products that turn ideas into real experiences.",
    keywords: ["Web", "Platforms", "Products"],
  },
  {
    number: "05",
    title: "AI",
    description:
      "Artificial intelligence and automation applied to the way businesses operate and grow.",
    keywords: ["AI", "Automation", "Data"],
  },
  {
    number: "06",
    title: "Experience",
    description:
      "Physical and digital experiences designed to create stronger connections between brands and people.",
    keywords: ["Events", "Hospitality", "Activation"],
  },
];