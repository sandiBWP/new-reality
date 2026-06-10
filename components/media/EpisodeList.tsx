import { EpisodeCard } from "./EpisodeCard";
import type { Episode } from "@/types/episode";

export function EpisodeList({ episodes }: { episodes: Episode[] }) {
  return (
    <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
      {episodes.map((episode) => (
        <EpisodeCard key={episode.slug} episode={episode} />
      ))}
    </div>
  );
}
