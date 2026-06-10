import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SubscribeOptions } from "@/components/media/SubscribeOptions";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Subscribe",
  description: "Subscribe to The New Reality podcast on your favorite platform.",
};

export default function SubscribePage() {
  return (
    <Section>
      <Container variant="narrow">
        <Breadcrumbs items={[{ label: "Subscribe", href: "/media/subscribe" }]} />
        <div className="text-center">
          <h1 className="mb-4 font-serif text-5xl tracking-[-0.02em] text-ink">
            Subscribe
          </h1>
          <p className="mx-auto mb-12 max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
            Listen on your favorite platform. New episodes every week.
          </p>
        </div>
        <SubscribeOptions />
      </Container>
    </Section>
  );
}
