import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { Episode } from "@/types/episode";

export function EpisodeHero({ episode }: { episode: Episode }) {
  return (
    <div className="border-b border-line bg-paper-warm">
      <div className="mx-auto max-w-[72rem] px-6 py-20 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <p className="mb-4 text-[11px] uppercase tracking-[0.14em] text-rust">
              Latest Episode
            </p>
            <h2 className="mb-4 font-serif text-4xl leading-[1.1] tracking-[-0.02em] text-ink md:text-5xl">
              {episode.title}
            </h2>
            <p className="mb-6 max-w-md text-base font-light leading-relaxed text-ink-soft">
              {episode.description}
            </p>
            <div className="mb-6 flex flex-wrap items-center gap-3 text-sm text-ink-mute">
              <span>{formatDate(episode.date)}</span>
              <span>·</span>
              <span>{episode.duration}</span>
              {episode.guest && (
                <>
                  <span>·</span>
                  <span>with {episode.guest}</span>
                </>
              )}
            </div>
            <Link
              href={`/media/episodes/${episode.slug}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-rust transition-colors hover:text-rust-deep"
            >
              Listen now →
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex h-48 w-48 items-center justify-center rounded-full bg-rust/10">
              <svg className="h-16 w-16 text-rust" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
