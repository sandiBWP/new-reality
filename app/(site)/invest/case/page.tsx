import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getMDXContent } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "The Case for Local Capital",
  description: "Why the investment system is disconnected from place — and why that creates both a risk and an opportunity.",
};

export default async function CasePage() {
  const { content, error } = await getMDXContent("case", "invest");
  return (
    <Section>
      <Container variant="narrow">
        <Breadcrumbs items={[{ label: "The Case", href: "/invest/case" }]} />
        {error ? <div className="py-20 text-center"><p className="text-lg text-ink-mute">{error}</p></div> : <Prose>{content}</Prose>}
      </Container>
    </Section>
  );
}
