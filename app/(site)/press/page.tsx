import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { PressGrid } from "@/components/shared/PressMention";
import { pressMentions } from "@/data/press";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press",
  description: "Press mentions, features, and partnerships involving The New Reality.",
};

export default function PressPage() {
  return (
    <>
      <Section>
        <Container>
          <Breadcrumbs items={[{ label: "Press", href: "/press" }]} />
          <h1 className="mb-4 font-serif text-5xl tracking-[-0.02em] text-ink">
            Press & Partnerships
          </h1>
          <p className="mb-12 max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
            Media coverage, features, and conversations about The New Reality, regional capital formation, and the changing investment landscape.
          </p>
          <PressGrid mentions={pressMentions} />
        </Container>
      </Section>

      {/* Media Inquiries */}
      <Section background="paper-warm">
        <Container variant="narrow" className="text-center">
          <h2 className="mb-3 font-serif text-2xl tracking-[-0.02em] text-ink">
            Media Inquiries
          </h2>
          <p className="mb-6 text-base font-light leading-relaxed text-ink-soft">
            For press inquiries, speaking engagements, or partnership opportunities, reach out through our contact page.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-sm bg-ink px-8 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-rust"
          >
            Contact us
          </Link>
        </Container>
      </Section>
    </>
  );
}
