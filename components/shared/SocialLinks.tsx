import Link from "next/link";

export function SocialLinks({ className }: { className?: string }) {
  const links = [
    { label: "Twitter", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Spotify", href: "#" },
    { label: "Apple Podcasts", href: "#" },
  ];

  return (
    <div className={`flex flex-wrap gap-4 ${className ?? ""}`}>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-xs text-ink-mute transition-colors hover:text-ink"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
