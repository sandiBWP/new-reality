import Link from "next/link";

export function FundCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block border border-line bg-white p-10 transition-colors hover:bg-rust-light"
    >
      <h3 className="mb-3 font-serif text-xl leading-tight text-ink transition-colors group-hover:text-rust">
        {title}
      </h3>
      <p className="text-sm font-light leading-relaxed text-ink-soft">
        {description}
      </p>
    </Link>
  );
}
