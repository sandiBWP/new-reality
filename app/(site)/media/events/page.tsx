import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { EventList } from "@/components/media/EventCard";
import { events } from "@/data/events";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events & Workshops",
  description: "Upcoming and past events from The New Reality — live conversations, workshops, and webinars.",
};

export default function EventsPage() {
  const upcoming = events.filter((e) => e.isUpcoming);
  const past = events.filter((e) => !e.isUpcoming);

  return (
    <Section>
      <Container>
        <Breadcrumbs items={[{ label: "Events & Workshops", href: "/media/events" }]} />
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-serif text-5xl tracking-[-0.02em] text-ink">
              Events & Workshops
            </h1>
            <p className="mt-4 max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
              Live conversations, workshops, and webinars exploring what happens when the world changes faster than our assumptions.
            </p>
          </div>
          <Link
            href="/media/speaking"
            className="shrink-0 text-[13px] font-medium text-rust transition-colors hover:text-rust-deep"
          >
            Request speaking →
          </Link>
        </div>

        {upcoming.length > 0 && (
          <div className="mb-12">
            <h2 className="mb-6 font-serif text-2xl tracking-[-0.02em] text-ink">
              Upcoming
            </h2>
            <EventList events={upcoming} />
          </div>
        )}

        {past.length > 0 && (
          <div>
            <h2 className="mb-6 font-serif text-2xl tracking-[-0.02em] text-ink">
              Past Events
            </h2>
            <EventList events={past} />
          </div>
        )}
      </Container>
    </Section>
  );
}
