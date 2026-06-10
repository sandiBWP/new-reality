import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { MediaHero } from "@/components/media/MediaHero";
import { EpisodeHero } from "@/components/media/EpisodeHero";
import { EpisodeList } from "@/components/media/EpisodeList";
import { SegmentCard } from "@/components/media/SegmentCard";
import { EventList } from "@/components/media/EventCard";
import { WebinarList } from "@/components/media/WebinarCard";
import { SubscribeOptions } from "@/components/media/SubscribeOptions";
import { NewsletterSignup } from "@/components/shared/NewsletterSignup";
import { getAllEpisodes, getLatestEpisode } from "@/data/episodes";
import { getUpcomingEvents } from "@/data/events";
import { webinars } from "@/data/webinars";
import { segments } from "@/data/segments";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Media Platform",
  description:
    "The New Reality Media Platform — a podcast and media platform for people who feel like something is off but can't name it.",
};

export default function MediaPage() {
  const allEpisodes = getAllEpisodes();
  const latest = getLatestEpisode();
  const upcomingEvents = getUpcomingEvents();
  const upcomingWebinars = webinars.filter((w) => !w.isRecorded);

  return (
    <>
      {/* ===== 1. HERO ===== */}
      <MediaHero />

      {/* ===== 2. LATEST EPISODE ===== */}
      <EpisodeHero episode={latest} />

      {/* ===== 3. THE PODCAST — SEGMENTS ===== */}
      <Section>
        <Container>
          <div className="mb-16 text-center">
            <p className="mb-4 text-[11px] uppercase tracking-[0.14em] text-rust">
              The Podcast
            </p>
            <h2 className="mx-auto max-w-[600px] font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.02em] text-ink">
              Three segments. One question.
            </h2>
            <p className="mx-auto mt-4 max-w-[480px] text-base font-light leading-relaxed text-ink-soft">
              Every episode brings three lenses to the same core question: what
              assumptions are we still carrying that no longer serve us?
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {segments.map((seg) => (
              <SegmentCard key={seg.slug} segment={seg} />
            ))}
          </div>
        </Container>
      </Section>

      <hr className="border-t border-line" />

      {/* ===== 4. ALL EPISODES ===== */}
      <Section id="episodes" background="paper-warm">
        <Container>
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.14em] text-ink-mute">
                Episodes
              </p>
              <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.02em] text-ink">
                Every conversation
              </h2>
              <p className="mt-3 max-w-[480px] text-base font-light leading-relaxed text-ink-soft">
                Conversations about assumptions, agency, and adaptation. 30-45
                minute episodes exploring what happens when the world changes
                faster than our assumptions.
              </p>
            </div>
            <Link
              href="/media/subscribe"
              className="shrink-0 text-[13px] font-medium text-rust transition-colors hover:text-rust-deep"
            >
              Subscribe →
            </Link>
          </div>
          {allEpisodes.length > 0 ? (
            <EpisodeList episodes={allEpisodes} />
          ) : (
            <p className="py-20 text-center text-base font-light text-ink-mute">
              Episodes coming soon.
            </p>
          )}
        </Container>
      </Section>

      {/* ===== 5. EVENTS & WEBINARS ===== */}
      <Section id="events">
        <Container>
          <div className="mb-16">
            <p className="mb-3 text-[11px] uppercase tracking-[0.14em] text-rust">
              Events &amp; Webinars
            </p>
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <h2 className="font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.02em] text-ink">
                  Live conversations
                </h2>
                <p className="mt-3 max-w-[480px] text-base font-light leading-relaxed text-ink-soft">
                  Workshops, webinars, and live events exploring what happens when
                  the world changes faster than our assumptions.
                </p>
              </div>
              <div className="flex gap-4">
                <Link
                  href="/media/events"
                  className="text-[13px] font-medium text-rust transition-colors hover:text-rust-deep"
                >
                  All events →
                </Link>
                <Link
                  href="/media/speaking"
                  className="text-[13px] font-medium text-rust transition-colors hover:text-rust-deep"
                >
                  Request speaking →
                </Link>
              </div>
            </div>
          </div>

          {upcomingEvents.length > 0 && (
            <div className="mb-16">
              <h3 className="mb-6 font-serif text-xl tracking-[-0.02em] text-ink">
                Upcoming events
              </h3>
              <EventList events={upcomingEvents} />
            </div>
          )}

          {upcomingWebinars.length > 0 && (
            <div>
              <h3 className="mb-6 font-serif text-xl tracking-[-0.02em] text-ink">
                Upcoming webinars
              </h3>
              <WebinarList webinars={upcomingWebinars} />
            </div>
          )}
        </Container>
      </Section>

      {/* ===== 6. EXPLORE DEEPER ===== */}
      <Section background="paper-warm">
        <Container>
          <p className="mb-3 text-center text-[11px] uppercase tracking-[0.14em] text-ink-mute">
            Explore deeper
          </p>
          <h2 className="mb-12 text-center font-serif text-[clamp(28px,3vw,40px)] leading-[1.1] tracking-[-0.02em] text-ink">
            The ideas behind the podcast
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {/* History */}
            <Link
              href="/media/history"
              className="group block border border-line bg-white p-10 transition-colors hover:bg-rust-light"
            >
              <p className="mb-1 text-[11px] uppercase tracking-[0.12em] text-rust">
                Long read
              </p>
              <h3 className="mb-3 font-serif text-xl leading-tight text-ink transition-colors group-hover:text-rust">
                The History
              </h3>
              <p className="text-sm font-light leading-relaxed text-ink-soft">
                How we got here: three decades of rational decisions that made
                sense at the time — and left us where we are now.
              </p>
              <span className="mt-4 inline-block text-[13px] font-medium text-rust">
                Read →
              </span>
            </Link>

            {/* False Binaries */}
            <Link
              href="/media/false-binaries"
              className="group block border border-line bg-white p-10 transition-colors hover:bg-rust-light"
            >
              <p className="mb-1 text-[11px] uppercase tracking-[0.12em] text-rust">
                Framework
              </p>
              <h3 className="mb-3 font-serif text-xl leading-tight text-ink transition-colors group-hover:text-rust">
                False Binaries
              </h3>
              <p className="text-sm font-light leading-relaxed text-ink-soft">
                Many of today&apos;s biggest challenges persist because we accept
                false choices where better systems could create both.
              </p>
              <span className="mt-4 inline-block text-[13px] font-medium text-rust">
                Read →
              </span>
            </Link>

            {/* Transcripts */}
            <Link
              href="/media/transcripts"
              className="group block border border-line bg-white p-10 transition-colors hover:bg-rust-light"
            >
              <p className="mb-1 text-[11px] uppercase tracking-[0.12em] text-rust">
                Reference
              </p>
              <h3 className="mb-3 font-serif text-xl leading-tight text-ink transition-colors group-hover:text-rust">
                Transcripts
              </h3>
              <p className="text-sm font-light leading-relaxed text-ink-soft">
                Full transcripts of every episode. Searchable, shareable, and
                available for anyone who prefers reading to listening.
              </p>
              <span className="mt-4 inline-block text-[13px] font-medium text-rust">
                Browse →
              </span>
            </Link>
          </div>
        </Container>
      </Section>

      {/* ===== 7. SUBSCRIBE ===== */}
      <Section id="subscribe">
        <Container variant="narrow" className="text-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.14em] text-rust">
            Never miss an episode
          </p>
          <h2 className="mb-4 font-serif text-[clamp(32px,4vw,48px)] leading-[1.1] tracking-[-0.02em] text-ink">
            Subscribe
          </h2>
          <p className="mx-auto mb-12 max-w-[480px] text-base font-light leading-relaxed text-ink-soft">
            Listen on your favorite platform. New episodes every week.
          </p>
          <SubscribeOptions />
        </Container>
      </Section>

      {/* ===== 8. NEWSLETTER ===== */}
      <Section background="ink">
        <Container variant="narrow" className="text-center">
          <p className="mb-2 text-[11px] uppercase tracking-[0.14em] text-ink-light">
            Stay connected
          </p>
          <h2 className="mb-4 font-serif text-[clamp(28px,4vw,40px)] leading-[1.1] tracking-[-0.02em] text-paper">
            The newsletter
          </h2>
          <p className="mx-auto mb-8 max-w-[420px] text-base font-light leading-relaxed text-ink-light">
            No noise. Just the ideas worth your time — episode releases, essays,
            and event invitations.
          </p>
          <NewsletterSignup />
        </Container>
      </Section>
    </>
  );
}
