import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { InvestorForm } from "@/components/invest/InvestorForm";
import { DisclosureNotice } from "@/components/invest/DisclosureNotice";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get Started",
  description:
    "Express interest in The New Reality Fund. Start with accreditation, then tell us about yourself.",
};

export default function GetStartedPage() {
  return (
    <Section>
      <Container variant="narrow">
        <Breadcrumbs items={[{ label: "Get Started", href: "/invest/get-started" }]} />
        <div className="mb-10">
          <h1 className="mb-4 font-serif text-5xl tracking-[-0.02em] text-ink">
            Get Started
          </h1>
          <p className="max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
            The first step is confirming your accredited investor status. From there, we&apos;ll learn about your interests and schedule a conversation.
          </p>
        </div>
        <InvestorForm />
        <div className="mt-10">
          <DisclosureNotice />
        </div>
      </Container>
    </Section>
  );
}
