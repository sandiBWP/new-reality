export function EpisodeShowNotes({ content }: { content?: string }) {
  if (!content) {
    return (
      <div className="border-t border-line pt-8">
        <h3 className="mb-4 font-serif text-xl text-ink">Show Notes</h3>
        <p className="text-sm font-light leading-relaxed text-ink-mute">
          Show notes for this episode are coming soon.
        </p>
      </div>
    );
  }

  return (
    <div className="border-t border-line pt-8">
      <h3 className="mb-4 font-serif text-xl text-ink">Show Notes</h3>
      <div className="prose text-sm">
        <p className="whitespace-pre-line text-ink-soft">{content}</p>
      </div>
    </div>
  );
}
