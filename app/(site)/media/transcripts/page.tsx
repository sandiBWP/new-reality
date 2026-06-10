import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Transcripts",
  description: "Read transcripts from The New Reality podcast episodes.",
};

export default function TranscriptsPage() {
  return (
    <Section>
      <Container variant="narrow">
        <Breadcrumbs items={[{ label: "Transcripts", href: "/media/transcripts" }]} />
        <h1 className="mb-4 font-serif text-5xl tracking-[-0.02em] text-ink">
          Transcripts
        </h1>
        <p className="mb-12 max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
          Full transcripts of podcast episodes, available for reading and reference. New transcripts are added regularly.
        </p>
        <div className="border border-line bg-white p-12 text-center">
          <p className="text-base font-light text-ink-mute">
            Transcripts are being prepared. Check back soon, or{" "}
            <a href="/media/subscribe" className="font-medium text-rust hover:text-rust-deep">
              subscribe
            </a>{" "}
            to be notified when new content is available.
          </p>
        </div>
      </Container>
    </Section>
  );
}
