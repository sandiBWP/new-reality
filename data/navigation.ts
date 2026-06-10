export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  isCTA?: boolean;
  isExternal?: boolean;
}

export const mainNav: NavItem[] = [
  {
    label: "Media",
    href: "/media",
    children: [
      { label: "Episodes", href: "/media/episodes" },
      { label: "Transcripts", href: "/media/transcripts" },
      {
        label: "Events & Workshops",
        href: "/media/events",
        children: [{ label: "Upcoming Events", href: "/media/events/upcoming" }],
      },
      { label: "Webinars", href: "/media/webinars" },
      { label: "The History", href: "/media/history" },
      { label: "False Binaries", href: "/media/false-binaries" },
      { label: "Dear Lisa", href: "/media/dear-lisa" },
      { label: "Talking to Boomers", href: "/media/talking-to-boomers" },
      { label: "Subscribe", href: "/media/subscribe" },
      { label: "Speaking Requests", href: "/media/speaking" },
    ],
  },
  {
    label: "Invest",
    href: "/invest",
    children: [
      { label: "The Case for Local Capital", href: "/invest/case" },
      { label: "The Fund", href: "/invest/fund" },
      { label: "How It Works", href: "/invest/how-it-works" },
      { label: "Why Local", href: "/invest/why-local" },
      { label: "The 401k Story", href: "/invest/401k-story" },
      { label: "False Binaries", href: "/invest/false-binaries" },
      { label: "BDC Explainer", href: "/invest/bdc" },
      { label: "Regions", href: "/invest/regions" },
      { label: "Team", href: "/invest/team" },
      { label: "FAQs", href: "/invest/faqs" },
      { label: "Access & Minimums", href: "/invest/access" },
      { label: "Get Started", href: "/invest/get-started", isCTA: true },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Press", href: "/press" },
  { label: "Contact", href: "/contact" },
];

export const mediaSubNav: NavItem[] = [
  { label: "Episodes", href: "/media/episodes" },
  { label: "Transcripts", href: "/media/transcripts" },
  { label: "Events", href: "/media/events" },
  { label: "Webinars", href: "/media/webinars" },
  { label: "History", href: "/media/history" },
  { label: "Subscribe", href: "/media/subscribe" },
];

export const investSubNav: NavItem[] = [
  { label: "The Case", href: "/invest/case" },
  { label: "The Fund", href: "/invest/fund" },
  { label: "How It Works", href: "/invest/how-it-works" },
  { label: "Why Local", href: "/invest/why-local" },
  { label: "BDC", href: "/invest/bdc" },
  { label: "Team", href: "/invest/team" },
  { label: "FAQs", href: "/invest/faqs" },
  { label: "Get Started", href: "/invest/get-started", isCTA: true },
];
