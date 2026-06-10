import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getMDXContent } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "False Binaries",
  description:
    "Many of today's biggest challenges persist because we accept false choices where better systems could create both.",
};

export default async function FalseBinariesPage() {
  const { content, error } = await getMDXContent("false-binaries", "media");

  return (
    <Section>
      <Container variant="narrow">
        <Breadcrumbs
          items={[
            { label: "Media", href: "/media" },
            { label: "False Binaries", href: "/media/false-binaries" },
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
