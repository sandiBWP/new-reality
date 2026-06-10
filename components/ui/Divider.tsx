export function Divider({ label }: { label?: string }) {
  if (!label) {
    return <hr className="border-t border-line" />;
  }

  return (
    <div className="flex items-center gap-4">
      <hr className="flex-1 border-t border-line" />
      <span className="text-[11px] uppercase tracking-[0.12em] text-ink-mute">
        {label}
      </span>
      <hr className="flex-1 border-t border-line" />
    </div>
  );
}
