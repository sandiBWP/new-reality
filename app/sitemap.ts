import type { MetadataRoute } from "next";
import { getAllEpisodes } from "@/data/episodes";

const BASE_URL = "https://thenewreality.com";

const staticRoutes = [
  { url: "/", priority: 1.0 },
  { url: "/media", priority: 0.9 },
  { url: "/media/episodes", priority: 0.9 },
  { url: "/media/transcripts", priority: 0.6 },
  { url: "/media/subscribe", priority: 0.7 },
  { url: "/media/events", priority: 0.7 },
  { url: "/media/events/upcoming", priority: 0.6 },
  { url: "/media/speaking", priority: 0.6 },
  { url: "/media/webinars", priority: 0.6 },
  { url: "/media/history", priority: 0.7 },
  { url: "/media/false-binaries", priority: 0.7 },
  { url: "/media/dear-lisa", priority: 0.7 },
  { url: "/media/talking-to-boomers", priority: 0.7 },
  { url: "/invest", priority: 0.9 },
  { url: "/invest/case", priority: 0.8 },
  { url: "/invest/fund", priority: 0.8 },
  { url: "/invest/how-it-works", priority: 0.8 },
  { url: "/invest/why-local", priority: 0.7 },
  { url: "/invest/401k-story", priority: 0.7 },
  { url: "/invest/false-binaries", priority: 0.7 },
  { url: "/invest/bdc", priority: 0.7 },
  { url: "/invest/regions", priority: 0.7 },
  { url: "/invest/team", priority: 0.6 },
  { url: "/invest/disclosures", priority: 0.3 },
  { url: "/invest/process", priority: 0.6 },
  { url: "/invest/access", priority: 0.7 },
  { url: "/invest/faqs", priority: 0.7 },
  { url: "/invest/get-started", priority: 0.8 },
  { url: "/about", priority: 0.7 },
  { url: "/newsletter", priority: 0.6 },
  { url: "/press", priority: 0.5 },
  { url: "/contact", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const episodes = getAllEpisodes();

  const episodeRoutes = episodes.map((ep) => ({
    url: `${BASE_URL}/media/episodes/${ep.slug}`,
    lastModified: new Date(ep.date),
    changeFrequency: "never" as const,
    priority: 0.6,
  }));

  const staticRouteEntries = staticRoutes.map((route) => ({
    url: `${BASE_URL}${route.url}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route.priority,
  }));

  return [...staticRouteEntries, ...episodeRoutes];
}
