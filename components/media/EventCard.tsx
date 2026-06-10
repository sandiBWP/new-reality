import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { Event } from "@/types/event";

export function EventCard({ event: evt }: { event: Event }) {
  return (
    <div className="border border-line bg-white p-8 transition-colors hover:bg-rust-light">
      <div className="mb-3 flex items-center gap-3">
        <span className="rounded-sm bg-rust/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] text-rust">
          {evt.type}
        </span>
        {evt.isUpcoming && (
          <span className="rounded-sm bg-success/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] text-success">
            Upcoming
          </span>
        )}
      </div>
      <h3 className="mb-3 font-serif text-xl leading-tight text-ink">
        {evt.title}
      </h3>
      <p className="mb-4 text-sm font-light leading-relaxed text-ink-soft">
        {evt.description}
      </p>
      <div className="mb-4 space-y-1 text-xs text-ink-mute">
        <p>{formatDate(evt.date)}{evt.time ? ` · ${evt.time}` : ""}</p>
        <p>{evt.location}</p>
      </div>
      {evt.registrationUrl && (
        <Link
          href={evt.registrationUrl}
          className="text-[13px] font-medium text-rust transition-colors hover:text-rust-deep"
        >
          Register →
        </Link>
      )}
    </div>
  );
}

export function EventList({ events: evts }: { events: Event[] }) {
  if (evts.length === 0) {
    return (
      <p className="py-12 text-center text-base font-light text-ink-mute">
        No events at this time. Check back soon.
      </p>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {evts.map((evt) => (
        <EventCard key={evt.slug} event={evt} />
      ))}
    </div>
  );
}
