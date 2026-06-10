import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { NewsletterSignup } from "@/components/shared/NewsletterSignup";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Sign up for The New Reality newsletter — no noise, just the ideas worth your time.",
};

const pastIssues = [
  {
    title: "Why the map is wrong — and what to do about it",
    date: "2026-06-01",
    excerpt:
      "Most advice people grew up with was rational for the world it was written for. That world no longer exists. So what do we do?",
  },
  {
    title: "False binaries: Practical vs. Adaptable",
    date: "2026-05-15",
    excerpt:
      "What if the 'practical' choice isn't practical anymore? A framework for thinking beyond inherited trade-offs.",
  },
  {
    title: "The 401(k) disconnect",
    date: "2026-05-01",
    excerpt:
      "How $46 trillion in retirement savings became completely disconnected from the communities that generate it.",
  },
  {
    title: "Introducing The New Reality",
    date: "2026-04-15",
    excerpt:
      "Welcome to a new platform for sense-making in a changing world. Here's what we're doing and why.",
  },
];

export default function NewsletterPage() {
  return (
    <>
      <Section>
        <Container variant="narrow" className="text-center">
          <Breadcrumbs items={[{ label: "Newsletter", href: "/newsletter" }]} />
          <h1 className="mb-4 font-serif text-5xl tracking-[-0.02em] text-ink">
            Newsletter
          </h1>
          <p className="mx-auto mb-12 max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
            No noise. Just the ideas worth your time. Subscribe to get our latest
            essays, episode releases, and event invitations.
          </p>
          <NewsletterSignup />
          <p className="mt-3 text-xs text-ink-mute">
            Sent every other week. Unsubscribe anytime.
          </p>
        </Container>
      </Section>

      {/* Archive */}
      <Section background="paper-warm">
        <Container variant="narrow">
          <h2 className="mb-8 font-serif text-3xl tracking-[-0.02em] text-ink">
            Recent Issues
          </h2>
          <div className="space-y-6">
            {pastIssues.map((issue) => (
              <div
                key={issue.title}
                className="border border-line bg-white p-6 transition-colors hover:bg-rust-light"
              >
                <p className="mb-1 text-xs text-ink-mute">{issue.date}</p>
                <h3 className="mb-2 font-serif text-lg text-ink">
                  {issue.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-ink-soft">
                  {issue.excerpt}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
