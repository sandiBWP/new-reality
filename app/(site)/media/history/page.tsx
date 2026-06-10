import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getMDXContent } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "The History",
  description:
    "How we got here: three decades of rational decisions that made sense at the time — and left us where we are now.",
};

export default async function HistoryPage() {
  const { content, frontmatter, error } = await getMDXContent("history", "media");

  return (
    <Section>
      <Container variant="narrow">
        <Breadcrumbs
          items={[
            { label: "Media", href: "/media" },
            { label: "The History", href: "/media/history" },
          ]}
        />
        {error ? (
          <div className="py-20 text-center">
            <p className="text-lg text-ink-mute">{error}</p>
          </div>
        ) : (
          <Prose>{content}</Prose>
        )}
      </Container>
    </Section>
  );
}
