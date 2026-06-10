export interface PressMention {
  outlet: string;
  title: string;
  date: string;
  url?: string;
  excerpt: string;
}

export const pressMentions: PressMention[] = [
  {
    outlet: "Forbes",
    title: "Why Local Capital Is the Next Frontier in Investment",
    date: "2026-04-15",
    excerpt:
      "Lisa Heathfield makes the case that the largest untapped opportunity in finance isn't a new asset class — it's a new distribution model for capital that connects investors to the places they live.",
  },
  {
    outlet: "Financial Planning Magazine",
    title: "Beyond the 401(k): Rethinking Retirement's Role in Communities",
    date: "2026-03-08",
    excerpt:
      "A growing movement of financial advisors is questioning whether the disconnection between retirement savings and community outcomes is serving either.",
  },
  {
    outlet: "The Atlantic",
    title: "The Anxiety of the Successful American",
    date: "2026-02-20",
    excerpt:
      "A growing number of financially successful Americans report feeling that something is fundamentally wrong — that the systems they relied on are no longer working as promised.",
  },
  {
    outlet: "Bloomberg",
    title: "BDCs: The 46-Year-Old Investment Vehicle Nobody Talks About",
    date: "2026-01-14",
    excerpt:
      "Business Development Companies were created by Congress in 1980 to democratize private investing. Four decades later, they may finally have their moment.",
  },
];
