import { cn } from "@/lib/utils";

export function Stat({
  value,
  label,
  className,
}: {
  value: string;
  label: string;
  className?: string;
}) {
  return (
    <div className={cn("text-center", className)}>
      <p className="mb-2 font-serif text-[44px] leading-none text-rust">
        {value}
      </p>
      <p className="text-[13px] font-light leading-relaxed text-ink-soft">
        {label}
      </p>
    </div>
  );
}

export function StatGrid({
  stats = [],
  columns = 3,
  className,
}: {
  stats?: { value: string; label: string }[];
  columns?: 2 | 3 | 4;
  className?: string;
}) {
  const cols = { 2: "sm:grid-cols-2", 3: "sm:grid-cols-3", 4: "sm:grid-cols-4" };

  return (
    <div className={cn("grid gap-10", cols[columns], className)}>
      {stats.map((stat) => (
        <Stat key={stat.label} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}
