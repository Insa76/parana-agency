export interface Project {
  number: string;
  name: string;
  category: string;
  description: string;
  tags: string[];
  accent: string;
}

export const projects: Project[] = [
  {
    number: "01",
    name: "Paraná Drink & Food",
    category: "Platform / Gastronomy",
    description:
      "A regional platform for discovering places, recommendations, experiences and everything happening around food and drink.",
    tags: ["Discovery", "Content", "Community", "Experiences"],
    accent: "drink-food",
  },
  {
    number: "02",
    name: "ORBIT",
    category: "Technology / Hospitality",
    description:
      "Digital experiences for restaurants and bars, connecting customers, staff, technology and data in one ecosystem.",
    tags: ["AI", "Restaurant Tech", "Experience", "Data"],
    accent: "orbit",
  },
  {
    number: "03",
    name: "Future Projects",
    category: "Paraná Agency",
    description:
      "New ideas, products and experiences are already taking shape.",
    tags: ["Ideas", "Technology", "Brands", "Experiences"],
    accent: "future",
  },
];