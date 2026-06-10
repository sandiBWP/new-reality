import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getMDXContent } from "@/lib/mdx";

export const metadata: Metadata = {
  title: "Talking to Boomers",
  description:
    "Every generation inherits assumptions about how the world works. Are they still true?",
};

export default async function TalkingToBoomersPage() {
  const { content, error } = await getMDXContent("talking-to-boomers", "media");

  return (
    <Section>
      <Container variant="narrow">
        <Breadcrumbs
          items={[
            { label: "Media", href: "/media" },
            { label: "Talking to Boomers", href: "/media/talking-to-boomers" },
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
