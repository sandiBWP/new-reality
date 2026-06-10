import Link from "next/link";
import type { Episode } from "@/types/episode";

export function EpisodeTranscript({ episode }: { episode: Episode }) {
  if (!episode.transcriptSlug) {
    return (
      <div className="border-t border-line pt-8">
        <h3 className="mb-4 font-serif text-xl text-ink">Transcript</h3>
        <p className="text-sm font-light leading-relaxed text-ink-mute">
          A transcript for this episode is not yet available.{" "}
          <Link href="/media/transcripts" className="font-medium text-rust hover:text-rust-deep">
            Browse available transcripts →
          </Link>
        </p>
      </div>
    );
  }

  return (
    <div className="border-t border-line pt-8">
      <h3 className="mb-4 font-serif text-xl text-ink">Transcript</h3>
      <Link
        href={`/media/transcripts`}
        className="text-sm font-medium text-rust transition-colors hover:text-rust-deep"
      >
        Read the full transcript →
      </Link>
    </div>
  );
}
