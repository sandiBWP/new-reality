export function StatBar({
  stats,
}: {
  stats: { value: string; label: string }[];
}) {
  return (
    <div className="grid gap-8 border-y border-line py-10 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <div key={stat.label} className="text-center">
          <p className="mb-2 font-serif text-[36px] leading-none text-ink">
            {stat.value}
          </p>
          <p className="text-[13px] font-light leading-relaxed text-ink-mute">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
