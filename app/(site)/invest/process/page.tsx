import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getMDXContent } from "@/lib/mdx";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Investment Process",
  description: "From awareness to participation — how the investment process works.",
};

export default async function ProcessPage() {
  const { content, error } = await getMDXContent("process", "invest");
  return (
    <Section>
      <Container variant="narrow">
        <Breadcrumbs items={[{ label: "Process", href: "/invest/process" }]} />
        {error ? <div className="py-20 text-center"><p className="text-lg text-ink-mute">{error}</p></div> : <Prose>{content}</Prose>}
        <div className="mt-12 border-t border-line pt-10 text-center">
          <Link
            href="/invest/get-started"
            className="inline-flex items-center rounded-sm bg-ink px-8 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-rust"
          >
            Start the process →
          </Link>
        </div>
      </Container>
    </Section>
  );
}
