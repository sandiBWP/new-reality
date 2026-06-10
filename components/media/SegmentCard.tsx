import Link from "next/link";
import type { Segment } from "@/data/segments";

export function SegmentCard({ segment }: { segment: Segment }) {
  return (
    <div className="border border-line bg-white p-8 transition-colors hover:bg-rust-light">
      <p className="mb-3 text-[11px] uppercase tracking-[0.12em] text-rust">
        {segment.subtitle}
      </p>
      <h3 className="mb-3 font-serif text-xl leading-tight text-ink">
        {segment.title}
      </h3>
      <p className="mb-4 text-sm font-light leading-relaxed text-ink-soft">
        {segment.description}
      </p>
      <p className="mb-2 text-[11px] uppercase tracking-[0.1em] text-ink-mute">
        Format
      </p>
      <p className="mb-4 text-xs font-light leading-relaxed text-ink-mute">
        {segment.format}
      </p>
      {segment.examples.length > 0 && (
        <div className="mb-5 space-y-1">
          <p className="text-[11px] uppercase tracking-[0.1em] text-ink-mute">
            Examples
          </p>
          <ul className="space-y-0.5">
            {segment.examples.slice(0, 2).map((ex) => (
              <li key={ex} className="text-xs italic text-ink-soft">
                &ldquo;{ex}&rdquo;
              </li>
            ))}
          </ul>
        </div>
      )}
      <Link
        href={segment.href}
        className="text-[13px] font-medium text-rust transition-colors hover:text-rust-deep"
      >
        Explore →
      </Link>
    </div>
  );
}
