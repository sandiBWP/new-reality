import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-paper px-6 text-center">
      <p className="mb-2 font-sans text-[11px] uppercase tracking-[0.14em] text-ink-mute">
        404
      </p>
      <h1 className="mb-6 font-serif text-5xl leading-tight tracking-tight text-ink sm:text-6xl">
        Page not found
      </h1>
      <p className="mb-10 max-w-md text-lg font-light leading-relaxed text-ink-soft">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
        Here are some places to go instead.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/"
          className="inline-flex items-center rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-rust"
        >
          Home
        </Link>
        <Link
          href="/media"
          className="inline-flex items-center rounded-sm border border-line px-6 py-3 text-sm font-medium text-ink-soft transition-colors hover:border-ink-mute hover:text-ink"
        >
          Media Platform
        </Link>
        <Link
          href="/invest"
          className="inline-flex items-center rounded-sm border border-line px-6 py-3 text-sm font-medium text-ink-soft transition-colors hover:border-ink-mute hover:text-ink"
        >
          Investor Platform
        </Link>
      </div>
    </div>
  );
}
