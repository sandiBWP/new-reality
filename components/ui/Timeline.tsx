import { cn } from "@/lib/utils";

export function Timeline({
  items = [],
  className,
}: {
  items?: { era: string; title: string; body: string }[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-[1000px] gap-px border border-line bg-line md:grid-cols-3",
        className,
      )}
    >
      {items.map((item) => (
        <div
          key={item.era}
          className="bg-platform-card-bg p-10"
        >
          <p className="mb-4 text-[11px] uppercase tracking-[0.12em] text-rust">
            {item.era}
          </p>
          <h3 className="mb-4 font-serif text-2xl leading-tight text-ink">
            {item.title}
          </h3>
          <p className="text-sm font-light leading-relaxed text-ink-soft">
            {item.body}
          </p>
        </div>
      ))}
    </div>
  );
}
