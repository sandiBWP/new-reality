export interface TeamMember {
  name: string;
  title: string;
  bio: string;
  image?: string;
}

export const team: TeamMember[] = [
  {
    name: "Lisa J. Heathfield, CFP®",
    title: "Founder",
    bio: "Lisa is a CERTIFIED FINANCIAL PLANNER™ with deep experience in investment management and financial planning. She founded The New Reality after recognizing that many of the problems people talk about as separate issues — housing, retirement, economic anxiety — are connected by where capital flows and who gets to participate. Her work focuses on building the infrastructure that connects ordinary investors to regional economic outcomes.",
  },
  {
    name: "Jennifer —",
    title: "Media & Content Director",
    bio: "Jennifer leads content strategy and media production for The New Reality platform. With a background in journalism and digital publishing, she ensures that complex ideas about economics, investment, and regional development are accessible to everyone — not just finance professionals.",
  },
];
