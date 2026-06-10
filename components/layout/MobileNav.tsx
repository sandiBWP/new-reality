"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavItem } from "@/data/navigation";

function MobileNavSection({ item, onClick }: { item: NavItem; onClick: () => void }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={`block border-b border-line px-6 py-4 text-[15px] transition-colors hover:text-ink ${
          pathname === item.href ? "text-rust" : "text-ink-soft"
        }`}
        onClick={onClick}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className={`flex w-full items-center justify-between border-b border-line px-6 py-4 text-[15px] transition-colors hover:text-ink ${
          pathname.startsWith(item.href) ? "text-rust" : "text-ink-soft"
        }`}
      >
        {item.label}
        <svg
          className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="bg-paper-warm">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={`block border-b border-line/50 px-10 py-3 text-[14px] transition-colors hover:text-ink ${
                pathname === child.href ? "text-rust" : "text-ink-mute"
              }`}
              onClick={onClick}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function MobileNav({
  open,
  items,
  onClose,
}: {
  open: boolean;
  items: NavItem[];
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ink/40 transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div
        className={`fixed bottom-0 right-0 top-0 z-50 w-[300px] bg-paper shadow-xl transition-transform lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-6 py-5">
          <Link
            href="/"
            className="font-serif text-[18px] tracking-[-0.01em] text-ink"
            onClick={onClose}
          >
            The New Reality
          </Link>
          <button
            onClick={onClose}
            className="flex h-8 w-8 items-center justify-center text-ink-mute"
            aria-label="Close menu"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="overflow-y-auto" style={{ maxHeight: "calc(100vh - 73px)" }}>
          {items.map((item) => (
            <MobileNavSection key={item.href} item={item} onClick={onClose} />
          ))}
          {/* Extra CTA at bottom */}
          <div className="px-6 py-6">
            <Link
              href="/invest/get-started"
              className="block w-full rounded-sm bg-ink px-6 py-3 text-center text-sm font-medium text-paper transition-colors hover:bg-rust"
              onClick={onClose}
            >
              Get Started
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
