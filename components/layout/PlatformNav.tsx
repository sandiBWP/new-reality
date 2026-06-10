"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/data/navigation";

export function PlatformNav({ items, label }: { items: NavItem[]; label: string }) {
  const pathname = usePathname();

  return (
    <nav className="border-b border-line bg-platform-bg">
      <div className="mx-auto flex max-w-[72rem] items-center gap-1 overflow-x-auto px-6 py-3 sm:px-8 lg:px-12">
        <span className="mr-4 shrink-0 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-mute">
          {label}
        </span>
        {items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`shrink-0 rounded-sm px-3 py-1.5 text-[13px] transition-colors whitespace-nowrap ${
                isActive
                  ? "bg-rust/10 font-medium text-rust"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
