export interface Webinar {
  slug: string;
  title: string;
  date: string;
  time: string;
  description: string;
  registrationUrl?: string;
  isRecorded?: boolean;
  recordingUrl?: string;
}

export const webinars: Webinar[] = [
  {
    slug: "understanding-bdcs",
    title: "Understanding BDCs: The Tool Hidden in Plain Sight",
    date: "2026-07-22",
    time: "12:00 PM – 1:00 PM ET",
    description:
      "A detailed walkthrough of Business Development Companies — what they are, how they work, and why this 46-year-old structure may be exactly what regional investing needs.",
    registrationUrl: "#",
  },
  {
    slug: "the-401k-problem",
    title: "The 401(k) Problem: Why Your Retirement Is Disconnected",
    date: "2026-06-25",
    time: "1:00 PM – 2:00 PM ET",
    description:
      "How retirement accounts drifted from local economies, what it means for communities, and what investors can do about it.",
    isRecorded: true,
    recordingUrl: "#",
  },
  {
    slug: "local-capital-101",
    title: "Local Capital 101: Investing in the Places You Live",
    date: "2026-06-10",
    time: "11:00 AM – 12:00 PM ET",
    description:
      "An introduction to place-based investing — what it means, how it works, and why it matters now more than ever.",
    isRecorded: true,
    recordingUrl: "#",
  },
];
