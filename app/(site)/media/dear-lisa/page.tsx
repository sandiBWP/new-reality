import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getMDXContent } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Dear Lisa",
  description:
    "Dear Abby gives answers. Dear Lisa asks better questions. Audience-submitted life questions about career, family, money, and relationships.",
};

export default async function DearLisaPage() {
  const { content, error } = await getMDXContent("dear-lisa", "media");

  return (
    <Section>
      <Container variant="narrow">
        <Breadcrumbs
          items={[
            { label: "Media", href: "/media" },
            { label: "Dear Lisa", href: "/media/dear-lisa" },
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
