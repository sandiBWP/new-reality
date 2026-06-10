import { notFound } from "next/navigation";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { EpisodeMeta } from "@/components/media/EpisodeMeta";
import { EpisodePlayer } from "@/components/media/EpisodePlayer";
import { EpisodeShowNotes } from "@/components/media/EpisodeShowNotes";
import { EpisodeTranscript } from "@/components/media/EpisodeTranscript";
import { getEpisodeBySlug, getAllEpisodes } from "@/data/episodes";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return getAllEpisodes().map((ep) => ({ slug: ep.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);
  if (!episode) return { title: "Episode Not Found" };
  return {
    title: episode.title,
    description: episode.description,
  };
}

export default async function EpisodePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const episode = getEpisodeBySlug(slug);
  if (!episode) notFound();

  return (
    <Section>
      <Container variant="narrow">
        <Breadcrumbs
          items={[
            { label: "Episodes", href: "/media/episodes" },
            { label: episode.title, href: "" },
          ]}
        />
        <h1 className="mb-6 font-serif text-4xl leading-tight tracking-[-0.02em] text-ink sm:text-5xl">
          {episode.title}
        </h1>
        <div className="mb-8">
          <EpisodeMeta episode={episode} />
        </div>
        <div className="mb-10">
          <EpisodePlayer audioUrl={episode.audioUrl} title={episode.title} />
        </div>
        <div className="mb-10 border-t border-line pt-8">
          <p className="text-base font-light leading-relaxed text-ink-soft">
            {episode.description}
          </p>
        </div>
        <EpisodeShowNotes content={episode.showNotes} />
        <div className="mt-10">
          <EpisodeTranscript episode={episode} />
        </div>
      </Container>
    </Section>
  );
}
