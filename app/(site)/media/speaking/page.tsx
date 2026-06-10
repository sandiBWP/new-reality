import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SpeakingForm } from "@/components/media/SpeakingForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speaking Requests",
  description: "Request Lisa Heathfield for keynotes, panels, workshops, and webinars.",
};

export default function SpeakingPage() {
  return (
    <Section>
      <Container variant="narrow">
        <Breadcrumbs items={[{ label: "Speaking Requests", href: "/media/speaking" }]} />
        <div className="mb-10">
          <h1 className="mb-4 font-serif text-5xl tracking-[-0.02em] text-ink">
            Speaking Requests
          </h1>
          <p className="max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
            Lisa is available for keynotes, panels, workshops, and webinars. Topics include sense-making in a changing world, the case for local capital, false binaries, and building agency.
          </p>
        </div>
        <SpeakingForm />
      </Container>
    </Section>
  );
}
