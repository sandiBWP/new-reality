import type { Episode } from "@/types/episode";

export const episodes: Episode[] = [
  {
    slug: "welcome-to-the-new-reality",
    title: "Welcome to The New Reality",
    date: "2026-06-01",
    duration: "52:18",
    guest: "Lisa Heathfield",
    guestTitle: "Founder, The New Reality",
    tags: ["introduction", "sense-making"],
    description:
      "Why we built this platform, what questions we're exploring, and why the gap between your money and your life matters more than you think.",
    showNotes:
      "In this premiere episode, Lisa lays out the thesis behind The New Reality: the world changed, our systems didn't, and the gap between them is what most people are actually feeling. Not a political argument. A structural one.",
    audioUrl: "#",
    episodeNumber: 1,
  },
  {
    slug: "false-binaries-practical-vs-adaptable",
    title: "Is Practicality Overrated?",
    date: "2026-06-08",
    duration: "38:45",
    tags: ["false-binaries", "agency", "assumptions"],
    description:
      "Practical according to whom? In which reality is the practical choice the best one? The opposite of practical may not be reckless, but adaptable.",
    showNotes:
      "We explore one of the most pervasive false binaries: practical vs. idealistic. What if the 'practical' advice we grew up with was optimized for a world that no longer exists?",
    audioUrl: "#",
    episodeNumber: 2,
  },
  {
    slug: "talking-to-boomers-work-hard",
    title: "Talking to Boomers: 'Work Hard and You'll Get Ahead'",
    date: "2026-06-15",
    duration: "45:12",
    guest: "Robert Chen",
    guestTitle: "Former Manufacturing Executive",
    tags: ["talking-to-boomers", "work", "careers"],
    description:
      "A conversation with a Boomer about one of the most durable assumptions: that hard work alone leads to success. Does it still hold up?",
    showNotes:
      "Robert spent 40 years in manufacturing and watched the industry transform. We discuss what 'work hard' meant in 1975, what it means now, and whether the advice still serves anyone.",
    audioUrl: "#",
    episodeNumber: 3,
  },
  {
    slug: "dear-lisa-dream-house",
    title: "Dear Lisa: We Bought Our Dream House in 2021",
    date: "2026-06-22",
    duration: "32:10",
    tags: ["dear-lisa", "housing", "money", "status"],
    description:
      "Between insurance, taxes, and maintenance it's becoming difficult. We can still afford it, but it feels like the house owns us. Are we failing if we downsize?",
    showNotes:
      "Surface question: Real Estate, Equity, Ownership. Real question: Status, Success, Attachment, Keeping up Appearances. A letter from a listener that gets at something universal.",
    audioUrl: "#",
    episodeNumber: 4,
  },
  {
    slug: "where-did-the-grownups-go",
    title: "Where Did the Grownups Go?",
    date: "2026-07-01",
    duration: "41:30",
    tags: ["institutions", "trust", "agency"],
    description:
      "People expect solutions to come from a Government that is polarized, bureaucratic, and slow to change. What happens when no one is coming to save us?",
    showNotes:
      "A deep dive into the 'waiting for someone else' phenomenon. If institutions can't be relied upon to solve local problems, what structures can?",
    audioUrl: "#",
    episodeNumber: 5,
  },
];

export function getAllEpisodes(): Episode[] {
  return episodes.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getEpisodeBySlug(slug: string): Episode | undefined {
  return episodes.find((ep) => ep.slug === slug);
}

export function getLatestEpisode(): Episode {
  return getAllEpisodes()[0];
}
