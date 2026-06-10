import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getMDXContent } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "BDC Explainer",
  description: "Business Development Companies — the 46-year-old structure hiding in plain sight.",
};

export default async function BDCPage() {
  const { content, error } = await getMDXContent("bdc", "invest");
  return (
    <Section>
      <Container variant="narrow">
        <Breadcrumbs items={[{ label: "BDC Explainer", href: "/invest/bdc" }]} />
        {error ? <div className="py-20 text-center"><p className="text-lg text-ink-mute">{error}</p></div> : <Prose>{content}</Prose>}
      </Container>
    </Section>
  );
}
