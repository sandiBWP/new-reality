import Link from "next/link";

type Crumb = { label: string; href: string };

export function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-8">
      <ol className="flex flex-wrap items-center gap-1 text-xs text-ink-mute">
        <li>
          <Link href="/" className="transition-colors hover:text-ink">
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li key={item.href} className="flex items-center gap-1">
            <span className="select-none">/</span>
            {item.href ? (
              <Link href={item.href} className="transition-colors hover:text-ink">
                {item.label}
              </Link>
            ) : (
              <span className="text-ink">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
