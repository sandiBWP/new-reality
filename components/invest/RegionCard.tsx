import type { Region } from "@/data/regions";

export function RegionCard({ region }: { region: Region }) {
  return (
    <div className="border border-line bg-white p-10">
      <div className="mb-4 flex items-center gap-3">
        <h3 className="font-serif text-xl text-ink">{region.name}</h3>
        <span
          className={`rounded-sm px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] ${
            region.status === "active"
              ? "bg-success/10 text-success"
              : "bg-rust/10 text-rust"
          }`}
        >
          {region.status === "active" ? "Active" : "Planned"}
        </span>
      </div>
      <p className="mb-4 text-sm font-light leading-relaxed text-ink-soft">
        {region.description}
      </p>
      <div>
        <p className="mb-2 text-[11px] uppercase tracking-[0.1em] text-ink-mute">
          Focus Areas
        </p>
        <div className="flex flex-wrap gap-1.5">
          {region.focus.map((f) => (
            <span
              key={f}
              className="rounded-sm bg-ink/5 px-2 py-0.5 text-[11px] text-ink-soft"
            >
              {f}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
