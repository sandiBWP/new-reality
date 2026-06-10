"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HeaderNav } from "./HeaderNav";
import { MobileNavToggle } from "./MobileNavToggle";
import { MobileNav } from "./MobileNav";
import { mainNav } from "@/data/navigation";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 10);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-100 flex items-center justify-between px-6 py-5 transition-all sm:px-8 lg:px-12 ${
          scrolled
            ? "border-b border-line bg-paper/95 backdrop-blur-[8px]"
            : "bg-transparent"
        }`}
      >
        <Link
          href="/"
          className="font-serif text-[18px] tracking-[-0.01em] text-ink"
        >
          The New Reality
        </Link>
        <HeaderNav items={mainNav} />
        <MobileNavToggle
          open={mobileOpen}
          onClick={() => setMobileOpen(!mobileOpen)}
        />
      </header>
      <MobileNav
        open={mobileOpen}
        items={mainNav}
        onClose={() => setMobileOpen(false)}
      />
      {/* Spacer so content doesn't hide behind fixed header */}
      <div className="h-[73px]" />
    </>
  );
}
