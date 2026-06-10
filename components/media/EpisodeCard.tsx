import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { Episode } from "@/types/episode";

export function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <Link
      href={`/media/episodes/${episode.slug}`}
      className="group block border border-line bg-white p-8 transition-colors hover:bg-rust-light"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="text-[11px] uppercase tracking-[0.12em] text-rust">
          Episode {episode.episodeNumber}
        </span>
        <span className="text-xs text-ink-mute">{episode.duration}</span>
      </div>
      <h3 className="mb-3 font-serif text-xl leading-tight text-ink transition-colors group-hover:text-rust">
        {episode.title}
      </h3>
      <p className="mb-4 text-sm font-light leading-relaxed text-ink-soft line-clamp-3">
        {episode.description}
      </p>
      <div className="flex flex-wrap items-center gap-2 text-xs text-ink-mute">
        <span>{formatDate(episode.date)}</span>
        {episode.guest && (
          <>
            <span>·</span>
            <span>{episode.guest}</span>
          </>
        )}
      </div>
      {episode.tags.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-1.5">
          {episode.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm bg-rust-muted px-2 py-0.5 text-[10px] uppercase tracking-[0.08em] text-rust"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
