import { Link } from "@/components/ui/Link";
import { formatDate } from "@/lib/utils";
import type { PressMention as PressMentionType } from "@/data/press";

export function PressMention({ mention }: { mention: PressMentionType }) {
  return (
    <div className="border border-line bg-white p-8 transition-colors hover:bg-rust-light">
      <p className="mb-2 text-[11px] uppercase tracking-[0.12em] text-ink-mute">
        {mention.outlet}
      </p>
      <h3 className="mb-2 font-serif text-lg leading-tight text-ink">
        {mention.title}
      </h3>
      <p className="mb-3 text-sm font-light leading-relaxed text-ink-soft">
        {mention.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-ink-mute">{formatDate(mention.date)}</span>
        {mention.url && (
          <Link
            href={mention.url}
            className="text-[13px] font-medium text-rust transition-colors hover:text-rust-deep"
            external
          >
            Read →
          </Link>
        )}
      </div>
    </div>
  );
}

export function PressGrid({ mentions }: { mentions: PressMentionType[] }) {
  return (
    <div className="grid gap-8 sm:grid-cols-2">
      {mentions.map((m) => (
        <PressMention key={m.title} mention={m} />
      ))}
    </div>
  );
}
