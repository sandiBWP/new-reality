import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/shared/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with The New Reality — speaking inquiries, press, partnerships, and general questions.",
};

export default function ContactPage() {
  return (
    <Section>
      <Container variant="narrow">
        <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />
        <div className="mb-10">
          <h1 className="mb-4 font-serif text-5xl tracking-[-0.02em] text-ink">
            Contact
          </h1>
          <p className="max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
            For speaking inquiries, press, partnerships, or general questions. We typically respond within 2-3 business days.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3">
            <ContactForm />
          </div>
          <div className="space-y-8 md:col-span-2">
            <div>
              <h2 className="mb-3 font-serif text-xl text-ink">Speaking</h2>
              <p className="text-sm font-light leading-relaxed text-ink-soft">
                For speaking requests, please use our dedicated{" "}
                <a href="/media/speaking" className="font-medium text-rust hover:text-rust-deep">
                  speaking request form
                </a>
                .
              </p>
            </div>
            <div>
              <h2 className="mb-3 font-serif text-xl text-ink">Media</h2>
              <p className="text-sm font-light leading-relaxed text-ink-soft">
                For press inquiries, partnership opportunities, or to request an interview, email us directly.
              </p>
            </div>
            <div>
              <h2 className="mb-3 font-serif text-xl text-ink">Invest</h2>
              <p className="text-sm font-light leading-relaxed text-ink-soft">
                Accredited investors interested in the fund should use the{" "}
                <a href="/invest/get-started" className="font-medium text-rust hover:text-rust-deep">
                  Get Started
                </a>{" "}
                process.
              </p>
            </div>
            <div>
              <h2 className="mb-3 font-serif text-xl text-ink">Dear Lisa</h2>
              <p className="text-sm font-light leading-relaxed text-ink-soft">
                Submit questions for the Dear Lisa segment to dearlisa@thenewreality.com.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
