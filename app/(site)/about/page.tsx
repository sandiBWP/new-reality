import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { TeamGrid } from "@/components/invest/TeamMember";
import { team } from "@/data/team";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Lisa Heathfield and the mission behind The New Reality.",
};

export default function AboutPage() {
  return (
    <>
      <Section>
        <Container variant="narrow">
          <Breadcrumbs items={[{ label: "About", href: "/about" }]} />
          <h1 className="mb-4 font-serif text-5xl tracking-[-0.02em] text-ink">
            About The New Reality
          </h1>
          <p className="mb-8 max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
            A sensemaking and agency platform for a changing world. Its purpose is
            to help people understand what has changed, what assumptions no longer
            hold, and what actions — practical or &ldquo;impractical&rdquo; — are
            available in a world that no longer makes sense.
          </p>

          <div className="space-y-6 text-base font-light leading-relaxed text-ink-soft">
            <p>
              The New Reality began with a simple observation: Many of the problems
              people talk about as separate issues may be connected. They are often
              discussed independently — housing, retirement anxiety, economic
              stagnation, community decline — yet all are influenced by where
              capital flows and who gets to participate in that process.
            </p>
            <p>
              At the same time, the investment system was largely built for a world
              becoming more centralized, integrated, and homogeneous. The world we
              are entering appears increasingly regional. Different places are
              experiencing very different realities. Yet most investment products
              remain disconnected from the places people actually live.
            </p>
            <p>
              It is a platform for people who feel like something is off but
              can&apos;t name it. We explore the assumptions that no longer hold —
              about work, housing, money, community, and what a good future
              actually looks like. Not telling you what to think. Helping you think.
            </p>
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section background="paper-warm">
        <Container>
          <h2 className="mb-8 font-serif text-3xl tracking-[-0.02em] text-ink">
            Who We Are
          </h2>
          <TeamGrid members={team} />
        </Container>
      </Section>

      {/* Mission CTA */}
      <Section>
        <Container variant="narrow" className="text-center">
          <h2 className="mb-4 font-serif text-3xl tracking-[-0.02em] text-ink">
            Two platforms. One mission.
          </h2>
          <p className="mx-auto mb-8 max-w-[480px] text-base font-light leading-relaxed text-ink-soft">
            The media platform builds awareness. The fund builds participation.
            Together, they connect people to the outcomes that matter to them.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/media"
              className="inline-flex items-center rounded-sm bg-ink px-8 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-rust"
            >
              Explore Media
            </Link>
            <Link
              href="/invest"
              className="inline-flex items-center rounded-sm border border-line px-8 py-3.5 text-sm font-medium text-ink-soft transition-colors hover:border-ink-mute hover:text-ink"
            >
              Explore Investing
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
