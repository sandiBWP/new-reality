import Link from "next/link";

export function InvestorHero() {
  return (
    <div className="border-b border-line bg-paper">
      <div className="mx-auto max-w-[72rem] px-6 py-24 sm:px-8 lg:px-12">
        <p className="mb-6 text-[11px] uppercase tracking-[0.14em] text-ink-mute">
          For accredited investors
        </p>
        <h1 className="mb-6 max-w-[700px] font-serif text-5xl leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl md:text-7xl">
          Investing for
          <br />
          the New Reality
        </h1>
        <p className="mb-8 max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
          A professionally managed investment platform built to put capital back in
          the places people actually live. Regional funds. National infrastructure.
          Real participation in the outcomes that matter to you — not just markets
          you&apos;ll never see.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/invest/get-started"
            className="inline-flex items-center rounded-sm bg-ink px-8 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-rust"
          >
            Get Started
          </Link>
          <Link
            href="/invest/case"
            className="inline-flex items-center rounded-sm border border-line px-8 py-3.5 text-sm font-medium text-ink-soft transition-colors hover:border-ink-mute hover:text-ink"
          >
            Read the case →
          </Link>
        </div>
      </div>
    </div>
  );
}
