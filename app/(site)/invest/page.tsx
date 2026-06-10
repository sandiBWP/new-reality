import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { InvestorHero } from "@/components/invest/InvestorHero";
import { StatBar } from "@/components/invest/StatBar";
import { FundCard } from "@/components/invest/FundCard";
import { DisclosureNotice } from "@/components/invest/DisclosureNotice";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Invest",
  description:
    "Investing for the New Reality — a professionally managed investment platform for accredited investors focused on regional capital formation.",
};

const investTopics = [
  {
    title: "The Case for Local Capital",
    description:
      "Why the investment system is disconnected from place — and why that creates both a risk and an opportunity.",
    href: "/invest/case",
  },
  {
    title: "How It Works",
    description:
      "Centralized management, decentralized deployment. The infrastructure that makes regional investing scalable.",
    href: "/invest/how-it-works",
  },
  {
    title: "The 401(k) Story",
    description:
      "How $46 trillion in retirement savings lost its connection to community — and how to reconnect it.",
    href: "/invest/401k-story",
  },
  {
    title: "BDC Explainer",
    description:
      "The 46-year-old structure Congress created to connect retail investors with private business. Why it matters now.",
    href: "/invest/bdc",
  },
  {
    title: "Regional Funds",
    description:
      "Starting with California and expanding nationwide. Each fund invests in the productive assets of its region.",
    href: "/invest/regions",
  },
  {
    title: "FAQs",
    description:
      "Common questions about the fund, the structure, accreditation, minimums, and how to get started.",
    href: "/invest/faqs",
  },
];

export default function InvestPage() {
  return (
    <>
      <InvestorHero />

      {/* Results Bar */}
      <Section>
        <Container>
          <StatBar
            stats={[
              { value: "$46T", label: "In American retirement accounts" },
              { value: "46 yrs", label: "Since Congress created BDCs" },
              { value: "0.5%", label: "Redirected = $230B in regional capital" },
              { value: "2+", label: "Regions planned for deployment" },
            ]}
          />
        </Container>
      </Section>

      {/* Topics */}
      <Section>
        <Container>
          <h2 className="mb-10 font-serif text-3xl tracking-[-0.02em] text-ink">
            Explore the fund
          </h2>
          <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
            {investTopics.map((topic) => (
              <FundCard key={topic.href} {...topic} />
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="ink">
        <Container variant="narrow" className="text-center">
          <h2 className="mb-4 font-serif text-4xl leading-[1.1] tracking-[-0.02em] text-paper">
            Ready to learn more?
          </h2>
          <p className="mx-auto mb-8 max-w-[480px] text-base font-light leading-relaxed text-ink-light">
            Accredited investors interested in The New Reality Fund can start the conversation here.
          </p>
          <Link
            href="/invest/get-started"
            className="inline-flex items-center rounded-sm bg-paper px-8 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-rust hover:text-paper"
          >
            Get Started
          </Link>
        </Container>
      </Section>

      {/* Disclosure */}
      <Section>
        <Container variant="narrow">
          <DisclosureNotice />
        </Container>
      </Section>
    </>
  );
}
