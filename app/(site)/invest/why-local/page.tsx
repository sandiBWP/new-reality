import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getMDXContent } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Why Local",
  description: "While capital became global, life remained regional. Why place matters more than ever.",
};

export default async function WhyLocalPage() {
  const { content, error } = await getMDXContent("why-local", "invest");
  return (
    <Section>
      <Container variant="narrow">
        <Breadcrumbs items={[{ label: "Why Local", href: "/invest/why-local" }]} />
        {error ? <div className="py-20 text-center"><p className="text-lg text-ink-mute">{error}</p></div> : <Prose>{content}</Prose>}
      </Container>
    </Section>
  );
}
