"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type AccordionContextType = {
  openItems: Set<string>;
  toggle: (id: string) => void;
  allowMultiple: boolean;
};

const AccordionContext = createContext<AccordionContextType | null>(null);

function useAccordionContext() {
  const ctx = useContext(AccordionContext);
  if (!ctx) throw new Error("Accordion components must be used within AccordionGroup");
  return ctx;
}

export function AccordionGroup({
  allowMultiple = false,
  children,
  className,
}: {
  allowMultiple?: boolean;
  children?: ReactNode;
  className?: string;
}) {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setOpenItems((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!allowMultiple) next.clear();
        next.add(id);
      }
      return next;
    });
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggle, allowMultiple }}>
      <div className={`divide-y divide-line border-t border-line ${className ?? ""}`}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children?: ReactNode;
}) {
  const { openItems, toggle } = useAccordionContext();
  const isOpen = openItems.has(id);

  return (
    <div>
      <button
        onClick={() => toggle(id)}
        className="flex w-full items-center justify-between py-5 text-left text-base font-medium text-ink transition-colors hover:text-rust"
        aria-expanded={isOpen}
      >
        <span className="pr-4">{title}</span>
        <svg
          className={`h-4 w-4 shrink-0 text-ink-mute transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isOpen ? "max-h-[800px] pb-5" : "max-h-0"
        }`}
      >
        <div className="text-[15px] font-light leading-relaxed text-ink-soft">
          {children}
        </div>
      </div>
    </div>
  );
}
