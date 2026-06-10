"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/data/navigation";

function Dropdown({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const isActive = pathname.startsWith(item.href);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1 text-[13px] font-normal tracking-[0.02em] transition-colors ${
          isActive ? "text-ink" : "text-ink-soft hover:text-ink"
        }`}
        aria-expanded={open}
      >
        {item.label}
        <svg
          className={`h-3 w-3 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="absolute left-0 top-full mt-2 min-w-[220px] rounded-sm border border-line bg-white py-2 shadow-lg">
          {item.children?.map((child) => (
            <div key={child.href}>
              <Link
                href={child.href}
                className={`block px-5 py-2.5 text-[13px] transition-colors hover:bg-rust-muted ${
                  pathname === child.href ? "text-rust" : "text-ink-soft"
                }`}
                onClick={() => setOpen(false)}
              >
                {child.label}
                {child.isCTA && (
                  <span className="ml-2 text-[11px] uppercase tracking-[0.1em] text-rust">Apply</span>
                )}
              </Link>
              {child.children?.map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className={`block pl-10 pr-5 py-2 text-[13px] transition-colors hover:bg-rust-muted ${
                    pathname === sub.href ? "text-rust" : "text-ink-mute"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function HeaderNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
    <ul className="hidden items-center gap-8 lg:flex">
      {items.map((item) => {
        if (item.children) {
          return (
            <li key={item.href}>
              <Dropdown item={item} />
            </li>
          );
        }
        return (
          <li key={item.href}>
            {item.isCTA ? (
              <Link
                href={item.href}
                className="inline-flex rounded-sm bg-ink px-5 py-2 text-[13px] font-medium text-paper transition-colors hover:bg-rust"
              >
                {item.label}
              </Link>
            ) : (
              <Link
                href={item.href}
                className={`text-[13px] font-normal tracking-[0.02em] transition-colors ${
                  pathname === item.href ? "text-ink" : "text-ink-soft hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            )}
          </li>
        );
      })}
    </ul>
  );
}
