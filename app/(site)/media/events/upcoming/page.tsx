import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { EventList } from "@/components/media/EventCard";
import { getUpcomingEvents } from "@/data/events";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upcoming Events",
  description: "Upcoming live events, workshops, and webinars from The New Reality.",
};

export default function UpcomingEventsPage() {
  const upcoming = getUpcomingEvents();

  return (
    <Section>
      <Container>
        <Breadcrumbs
          items={[
            { label: "Events", href: "/media/events" },
            { label: "Upcoming", href: "/media/events/upcoming" },
          ]}
        />
        <h1 className="mb-4 font-serif text-5xl tracking-[-0.02em] text-ink">
          Upcoming Events
        </h1>
        <p className="mb-12 max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
          Join us for live conversations, workshops, and webinars.
        </p>
        <EventList events={upcoming} />
      </Container>
    </Section>
  );
}
