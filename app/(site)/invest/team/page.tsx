import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { TeamGrid } from "@/components/invest/TeamMember";
import { team } from "@/data/team";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description: "Meet the team behind The New Reality — Lisa Heathfield and the people building the platform.",
};

export default function TeamPage() {
  return (
    <Section>
      <Container>
        <Breadcrumbs items={[{ label: "Team", href: "/invest/team" }]} />
        <h1 className="mb-4 font-serif text-5xl tracking-[-0.02em] text-ink">
          Our Team
        </h1>
        <p className="mb-12 max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
          The New Reality was founded to build the infrastructure connecting capital to place. Our team combines investment management, financial planning, media, and content expertise.
        </p>
        <TeamGrid members={team} />
      </Container>
    </Section>
  );
}
