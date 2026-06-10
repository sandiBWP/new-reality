export interface Segment {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  format: string;
  examples: string[];
  href: string;
}

export const segments: Segment[] = [
  {
    slug: "assumption-testing",
    title: "Assumption Testing",
    subtitle: "10–15 minutes",
    description:
      "Exploring false binaries, challenging inherited beliefs, and examining where old models no longer fit reality. Each segment takes one assumption we inherited and asks: is this still true?",
    format: "Solo commentary with research and real-world examples",
    examples: [
      "Is Practicality overrated? Practical according to whom?",
      "The American Dream isn't 'normal' — the post-WWII period was a historical outlier",
      "Where did the Grownups Go? What happens when no one is coming to save us?",
      "What happens when Nobody knows what's going on?",
    ],
    href: "/media/episodes",
  },
  {
    slug: "dear-lisa",
    title: "Dear Lisa",
    subtitle: "10–15 minutes",
    description:
      "Dear Abby gives answers. Dear Lisa asks better questions. Audience-submitted life questions about career, family, money, and relationships — looking beneath behavior to motivations and assumptions.",
    format: "Audience-submitted letters with deep-dive responses",
    examples: [
      "We bought our dream house in 2021. Between insurance, taxes, and maintenance it's becoming difficult. Are we failing if we downsize?",
      "Real question beneath the surface: Status, Success, Attachment, Keeping up Appearances",
    ],
    href: "/media/dear-lisa",
  },
  {
    slug: "talking-to-boomers",
    title: "Talking to Boomers",
    subtitle: "10–15 minutes",
    description:
      "Every generation inherits assumptions about how the world works. Boomers inherited assumptions that were rational for their world — but are they still true? Each episode asks a Boomer what they think about the old recommendations.",
    format: "Intergenerational conversations",
    examples: [
      "Work hard and you'll get ahead",
      "Buy a house as soon as possible",
      "Stay with one employer",
      "Trust institutions",
      "America will generally become more prosperous over time",
    ],
    href: "/media/talking-to-boomers",
  },
];
