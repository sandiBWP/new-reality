import { formatDate } from "@/lib/utils";
import type { Episode } from "@/types/episode";

export function EpisodeMeta({ episode }: { episode: Episode }) {
  return (
    <div className="flex flex-wrap items-center gap-3 text-sm text-ink-mute">
      <span className="text-[11px] uppercase tracking-[0.12em] text-rust">
        Episode {episode.episodeNumber}
      </span>
      <span>{formatDate(episode.date)}</span>
      <span>·</span>
      <span>{episode.duration}</span>
      {episode.guest && (
        <>
          <span>·</span>
          <span>
            with <strong className="font-medium text-ink">{episode.guest}</strong>
            {episode.guestTitle && (
              <span className="ml-1">— {episode.guestTitle}</span>
            )}
          </span>
        </>
      )}
    </div>
  );
}
