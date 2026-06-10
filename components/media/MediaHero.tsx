import Link from "next/link";

export function MediaHero() {
  return (
    <div className="border-b border-line bg-paper-warm">
      <div className="mx-auto max-w-[72rem] px-6 py-24 sm:px-8 lg:px-12">
        <p className="mb-6 text-[11px] uppercase tracking-[0.14em] text-rust">
          For everyone
        </p>
        <h1 className="mb-6 max-w-[700px] font-serif text-5xl leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl md:text-7xl">
          The New Reality
          <br />
          Media Platform
        </h1>
        <p className="mb-8 max-w-[560px] text-lg font-light leading-relaxed text-ink-soft">
          A podcast and media platform for people who feel like something is off
          but can&apos;t name it. We explore the assumptions that no longer hold —
          about work, housing, money, community, and what a good future actually
          looks like. Not telling you what to think. Helping you think.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/media/episodes"
            className="inline-flex items-center rounded-sm bg-ink px-8 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-rust"
          >
            Listen to episodes
          </Link>
          <Link
            href="/media/subscribe"
            className="inline-flex items-center rounded-sm border border-line px-8 py-3.5 text-sm font-medium text-ink-soft transition-colors hover:border-ink-mute hover:text-ink"
          >
            Subscribe
          </Link>
        </div>
      </div>
    </div>
  );
}
