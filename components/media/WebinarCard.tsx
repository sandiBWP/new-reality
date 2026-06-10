import Link from "next/link";
import { formatDate } from "@/lib/utils";
import type { Webinar } from "@/data/webinars";

export function WebinarCard({ webinar }: { webinar: Webinar }) {
  return (
    <div className="border border-line bg-white p-8 transition-colors hover:bg-rust-light">
      <div className="mb-3">
        {webinar.isRecorded ? (
          <span className="rounded-sm bg-ink/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] text-ink-mute">
            Recorded
          </span>
        ) : (
          <span className="rounded-sm bg-success/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.1em] text-success">
            Upcoming
          </span>
        )}
      </div>
      <h3 className="mb-3 font-serif text-xl leading-tight text-ink">
        {webinar.title}
      </h3>
      <p className="mb-4 text-sm font-light leading-relaxed text-ink-soft">
        {webinar.description}
      </p>
      <div className="mb-4 flex flex-wrap gap-3 text-xs text-ink-mute">
        <span>{formatDate(webinar.date)}</span>
        <span>·</span>
        <span>{webinar.time}</span>
      </div>
      {webinar.registrationUrl && !webinar.isRecorded && (
        <Link
          href={webinar.registrationUrl}
          className="text-[13px] font-medium text-rust transition-colors hover:text-rust-deep"
        >
          Register →
        </Link>
      )}
      {webinar.recordingUrl && webinar.isRecorded && (
        <Link
          href={webinar.recordingUrl}
          className="text-[13px] font-medium text-rust transition-colors hover:text-rust-deep"
        >
          Watch recording →
        </Link>
      )}
    </div>
  );
}

export function WebinarList({ webinars: items }: { webinars: Webinar[] }) {
  if (items.length === 0) {
    return (
      <p className="py-12 text-center text-base font-light text-ink-mute">
        No webinars at this time. Check back soon.
      </p>
    );
  }

  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((w) => (
        <WebinarCard key={w.slug} webinar={w} />
      ))}
    </div>
  );
}
