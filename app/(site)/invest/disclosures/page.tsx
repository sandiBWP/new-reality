import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { DisclosureNotice } from "@/components/invest/DisclosureNotice";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclosures",
  description: "Legal disclosures and important information about The New Reality Fund.",
};

export default function DisclosuresPage() {
  return (
    <Section>
      <Container variant="narrow">
        <Breadcrumbs items={[{ label: "Disclosures", href: "/invest/disclosures" }]} />
        <h1 className="mb-4 font-serif text-5xl tracking-[-0.02em] text-ink">
          Disclosures
        </h1>
        <p className="mb-8 max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
          Important legal information and disclosures regarding The New Reality Fund and this website.
        </p>
        <DisclosureNotice />
        <div className="mt-8 space-y-6 text-sm font-light leading-relaxed text-ink-soft">
          <h2 className="font-serif text-xl text-ink">Website Disclaimer</h2>
          <p>
            The information provided on this website is for informational and educational purposes only and does not constitute investment advice, a recommendation, or an offer to sell or solicitation of an offer to buy any security. The views expressed are subject to change without notice.
          </p>
          <h2 className="font-serif text-xl text-ink">Forward-Looking Statements</h2>
          <p>
            This website may contain forward-looking statements based on current expectations and assumptions about future events. Actual results could differ materially from those anticipated due to various factors, including but not limited to regulatory changes, economic conditions, and market dynamics.
          </p>
          <h2 className="font-serif text-xl text-ink">No Guarantee of Results</h2>
          <p>
            Past performance is not indicative of future results. Investments in private funds involve significant risks, including loss of principal. There is no guarantee that any investment strategy or fund structure will achieve its objectives or avoid substantial losses.
          </p>
          <h2 className="font-serif text-xl text-ink">Accredited Investors</h2>
          <p>
            Certain investment opportunities described on this site are available only to accredited investors as defined by Rule 501 of Regulation D under the Securities Act of 1933. Nothing on this site shall be construed as an offer to non-accredited investors.
          </p>
          <h2 className="font-serif text-xl text-ink">Regulatory Status</h2>
          <p>
            The New Reality Fund structures are in development. Any offering will be made only through definitive offering documents, which will contain important information about investment objectives, risks, fees, and expenses. Prospective investors should carefully review these documents and consult with their financial, legal, and tax advisors.
          </p>
        </div>
      </Container>
    </Section>
  );
}
