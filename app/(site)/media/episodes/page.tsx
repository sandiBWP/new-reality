import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { EpisodeList } from "@/components/media/EpisodeList";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getAllEpisodes } from "@/data/episodes";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Episodes",
  description:
    "Browse all episodes of The New Reality podcast — conversations about assumptions, agency, and adaptation.",
};

export default function EpisodesPage() {
  const allEpisodes = getAllEpisodes();

  return (
    <Section>
      <Container>
        <Breadcrumbs items={[{ label: "Episodes", href: "/media/episodes" }]} />
        <h1 className="mb-4 font-serif text-5xl tracking-[-0.02em] text-ink">
          All Episodes
        </h1>
        <p className="mb-12 max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
          Conversations about assumptions, agency, and adaptation. 30-45 minute episodes exploring what happens when the world changes faster than our assumptions.
        </p>
        {allEpisodes.length > 0 ? (
          <EpisodeList episodes={allEpisodes} />
        ) : (
          <p className="py-20 text-center text-base font-light text-ink-mute">
            Episodes coming soon.
          </p>
        )}
      </Container>
    </Section>
  );
}
