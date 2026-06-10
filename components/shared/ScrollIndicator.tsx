"use client";

import { useState, useEffect } from "react";

export function ScrollIndicator() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-200 h-[2px]">
      <div
        className="h-full bg-rust transition-all duration-100"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
