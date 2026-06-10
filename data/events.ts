import type { Event } from "@/types/event";

export const events: Event[] = [
  {
    slug: "new-reality-live-chicago",
    title: "The New Reality Live: Chicago",
    date: "2026-08-15",
    time: "6:00 PM – 8:30 PM",
    location: "Chicago, IL",
    type: "live",
    description:
      "A live conversation exploring what happens when the world changes faster than our assumptions. Featuring local business owners, investors, and community leaders discussing regional capital formation in the Midwest.",
    registrationUrl: "#",
    isUpcoming: true,
  },
  {
    slug: "understanding-bdcs-webinar",
    title: "Understanding BDCs: The Tool Hidden in Plain Sight",
    date: "2026-07-22",
    time: "12:00 PM – 1:00 PM ET",
    location: "Virtual",
    type: "webinar",
    description:
      "A detailed walkthrough of Business Development Companies — what they are, how they work, and why this 46-year-old structure may be exactly what regional investing needs.",
    registrationUrl: "#",
    isUpcoming: true,
  },
  {
    slug: "false-binaries-workshop",
    title: "False Binaries Workshop",
    date: "2026-07-10",
    time: "2:00 PM – 4:00 PM ET",
    location: "Virtual",
    type: "workshop",
    description:
      "An interactive session that helps you identify the false binaries shaping your decisions — from career choices to investment strategies. Walk away with a framework for seeing beyond trade-offs.",
    registrationUrl: "#",
    isUpcoming: true,
  },
  {
    slug: "sxsw-2026-panel",
    title: "SXSW 2026: Regional Capital in a Fragmented World",
    date: "2026-03-12",
    location: "Austin, TX",
    type: "speaking",
    description:
      "Lisa joined a panel of economic development leaders to discuss why regional capital formation is becoming essential infrastructure — and why it's been missing for 40 years.",
    isUpcoming: false,
  },
];

export function getUpcomingEvents(): Event[] {
  return events.filter((e) => e.isUpcoming);
}

export function getPastEvents(): Event[] {
  return events.filter((e) => !e.isUpcoming);
}
