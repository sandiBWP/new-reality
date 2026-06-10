import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getMDXContent } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "The Fund",
  description: "The New Reality Fund — a scalable investment platform connecting capital to regional outcomes.",
};

export default async function FundPage() {
  const { content, error } = await getMDXContent("fund", "invest");
  return (
    <Section>
      <Container variant="narrow">
        <Breadcrumbs items={[{ label: "The Fund", href: "/invest/fund" }]} />
        {error ? <div className="py-20 text-center"><p className="text-lg text-ink-mute">{error}</p></div> : <Prose>{content}</Prose>}
      </Container>
    </Section>
  );
}
