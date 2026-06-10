import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { FAQSection } from "@/components/invest/FAQSection";
import { faqs } from "@/data/faqs";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Frequently asked questions about The New Reality Fund, BDCs, regional investing, and how to get started.",
};

export default function FAQsPage() {
  return (
    <Section>
      <Container variant="narrow">
        <Breadcrumbs items={[{ label: "FAQs", href: "/invest/faqs" }]} />
        <h1 className="mb-4 font-serif text-5xl tracking-[-0.02em] text-ink">
          Frequently Asked Questions
        </h1>
        <p className="mb-10 max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
          Answers to common questions about The New Reality Fund structure, eligibility, and how regional investing works.
        </p>
        <div className="mb-12">
          <FAQSection faqs={faqs} />
        </div>
        <div className="border-t border-line pt-10 text-center">
          <p className="mb-4 text-base font-light text-ink-soft">
            Don&apos;t see your question?
          </p>
          <Link
            href="/contact"
            className="text-sm font-medium text-rust transition-colors hover:text-rust-deep"
          >
            Contact us →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
