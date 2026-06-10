export interface Region {
  id: string;
  name: string;
  description: string;
  status: "active" | "planned";
  focus: string[];
}

export const regions: Region[] = [
  {
    id: "ca",
    name: "California",
    description:
      "The first regional deployment. California's diverse economy encompasses technology, agriculture, manufacturing, and services. The CA BDC focuses on productive assets and private businesses serving regional needs — housing, healthcare, food systems, energy, and industrial services.",
    status: "planned",
    focus: ["Housing", "Healthcare", "Food Systems", "Industrial Services", "Energy"],
  },
  {
    id: "wnc",
    name: "Western North Carolina",
    description:
      "Second planned regional deployment. WNC represents a different regional profile — smaller communities, tourism-driven economy, significant small business density, and growing interest in local economic resilience.",
    status: "planned",
    focus: ["Small Business", "Housing", "Infrastructure", "Community Facilities"],
  },
];
