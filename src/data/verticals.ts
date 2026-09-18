export interface Vertical {
  number: string;
  title: string;
  description: string;
  services: string[];
}

export const verticals: Vertical[] = [
  {
    number: "01",
    title: "Gastronomy",
    description:
      "Brands, restaurants, bars and food businesses looking for new ways to connect with people.",
    services: ["Branding", "Marketing", "Creators", "Technology"],
  },
  {
    number: "02",
    title: "Hospitality",
    description:
      "Hotels and hospitality brands creating better digital and physical experiences for their guests.",
    services: ["Strategy", "Experience", "Technology", "AI"],
  },
  {
    number: "03",
    title: "Tourism",
    description:
      "Projects that turn places, destinations and experiences into reasons to discover something new.",
    services: ["Branding", "Content", "Marketing", "Experience"],
  },
  {
    number: "04",
    title: "Events",
    description:
      "From communication to technology, we create experiences that connect audiences and brands.",
    services: ["Creators", "Technology", "Experience", "Marketing"],
  },
  {
    number: "05",
    title: "Entertainment",
    description:
      "New ideas for venues, nightlife, culture and entertainment businesses.",
    services: ["Branding", "Marketing", "Creators", "Technology"],
  },
  {
    number: "06",
    title: "Retail",
    description:
      "Digital and creative strategies that help products and businesses become part of people's everyday lives.",
    services: ["Strategy", "Branding", "Technology", "Marketing"],
  },
  {
    number: "07",
    title: "Brands",
    description:
      "For brands from any industry looking for a different way to communicate, grow or build.",
    services: ["Strategy", "Creative", "Technology", "Experience"],
  },
];