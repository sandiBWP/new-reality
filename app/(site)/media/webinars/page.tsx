import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { WebinarList } from "@/components/media/WebinarCard";
import { webinars } from "@/data/webinars";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webinars",
  description: "Recorded and upcoming webinars from The New Reality.",
};

export default function WebinarsPage() {
  const upcoming = webinars.filter((w) => !w.isRecorded);
  const recorded = webinars.filter((w) => w.isRecorded);

  return (
    <Section>
      <Container>
        <Breadcrumbs items={[{ label: "Webinars", href: "/media/webinars" }]} />
        <h1 className="mb-4 font-serif text-5xl tracking-[-0.02em] text-ink">
          Webinars
        </h1>
        <p className="mb-12 max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
          Deep dives into specific topics — from BDCs and local capital to the 401(k) story and false binaries.
        </p>

        {upcoming.length > 0 && (
          <div className="mb-12">
            <h2 className="mb-6 font-serif text-2xl tracking-[-0.02em] text-ink">
              Upcoming
            </h2>
            <WebinarList webinars={upcoming} />
          </div>
        )}
        {recorded.length > 0 && (
          <div>
            <h2 className="mb-6 font-serif text-2xl tracking-[-0.02em] text-ink">
              Recorded
            </h2>
            <WebinarList webinars={recorded} />
          </div>
        )}
      </Container>
    </Section>
  );
}
