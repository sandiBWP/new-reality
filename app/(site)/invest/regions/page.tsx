import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { Prose } from "@/components/ui/Prose";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { getMDXContent } from "@/lib/mdx";
import { RegionCard } from "@/components/invest/RegionCard";
import { regions } from "@/data/regions";

export const metadata: Metadata = {
  title: "Regions",
  description: "National platform, regional deployment. Starting with California and expanding nationwide.",
};

export default async function RegionsPage() {
  return (
    <Section>
      <Container>
        <Breadcrumbs items={[{ label: "Regions", href: "/invest/regions" }]} />
        <h1 className="mb-4 font-serif text-5xl tracking-[-0.02em] text-ink">
          Regional Funds
        </h1>
        <p className="mb-12 max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
          National platform, regional deployment. Each fund invests in businesses and assets specific to its region's needs.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          {regions.map((region) => (
            <RegionCard key={region.id} region={region} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
