import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MinimumsTable } from "@/components/invest/MinimumsTable";
import { DisclosureNotice } from "@/components/invest/DisclosureNotice";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Access & Minimums",
  description: "Investment minimums, eligibility requirements, and access information for The New Reality Fund.",
};

export default function AccessPage() {
  return (
    <Section>
      <Container>
        <Breadcrumbs items={[{ label: "Access & Minimums", href: "/invest/access" }]} />
        <h1 className="mb-4 font-serif text-5xl tracking-[-0.02em] text-ink">
          Access & Minimums
        </h1>
        <p className="mb-8 max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
          Information about who can invest, minimum requirements, and how to access The New Reality Fund.
        </p>

        <div className="mb-12">
          <h2 className="mb-4 font-serif text-2xl text-ink">Eligibility</h2>
          <div className="space-y-4 text-sm font-light leading-relaxed text-ink-soft">
            <p>
              The New Reality Fund is currently available to accredited investors as defined by SEC Rule 501 of Regulation D. You may qualify as an accredited investor if you meet one or more of the following criteria:
            </p>
            <ul className="list-disc space-y-2 pl-5">
              <li>Net worth (or joint net worth with spouse) exceeding $1,000,000, excluding primary residence</li>
              <li>Individual income exceeding $200,000 (or $300,000 jointly with spouse) in each of the prior two years, with reasonable expectation of the same for the current year</li>
              <li>Holds in good standing certain professional certifications, designations, or credentials</li>
            </ul>
            <p>
              We are committed to expanding access over time as structures and regulations allow. The long-term vision is to make regional investing available to a much broader audience.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="mb-4 font-serif text-2xl text-ink">Investment Minimums</h2>
          <MinimumsTable />
        </div>

        <div className="mb-12">
          <h2 className="mb-4 font-serif text-2xl text-ink">Account Types</h2>
          <p className="mb-4 text-sm font-light leading-relaxed text-ink-soft">
            BDCs can be held in a variety of account types, making regional investment accessible through existing financial infrastructure:
          </p>
          <ul className="list-disc space-y-2 pl-5 text-sm font-light leading-relaxed text-ink-soft">
            <li>Individual and joint brokerage accounts</li>
            <li>Traditional and Roth IRAs</li>
            <li>SEP and SIMPLE IRAs</li>
            <li>Trust accounts</li>
            <li>Entity accounts (LLCs, corporations, etc.)</li>
          </ul>
        </div>

        <div className="mb-12">
          <Link
            href="/invest/get-started"
            className="inline-flex items-center rounded-sm bg-ink px-8 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-rust"
          >
            Get Started
          </Link>
        </div>

        <DisclosureNotice />
      </Container>
    </Section>
  );
}
