import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getMDXContent } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "The 401(k) Story",
  description: "How $46 trillion in retirement savings lost its connection to community.",
};

export default async function StoryPage() {
  const { content, error } = await getMDXContent("401k-story", "invest");
  return (
    <Section>
      <Container variant="narrow">
        <Breadcrumbs items={[{ label: "401(k) Story", href: "/invest/401k-story" }]} />
        {error ? <div className="py-20 text-center"><p className="text-lg text-ink-mute">{error}</p></div> : <Prose>{content}</Prose>}
      </Container>
    </Section>
  );
}
