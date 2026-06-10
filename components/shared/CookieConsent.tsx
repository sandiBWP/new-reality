"use client";

import { useState, useEffect } from "react";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem("cookie-consent");
    if (!dismissed) {
      setVisible(true);
    }
  }, []);

  function dismiss() {
    localStorage.setItem("cookie-consent", "true");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-line bg-paper p-4 shadow-lg">
      <div className="mx-auto flex max-w-[72rem] flex-wrap items-center justify-between gap-4 px-4">
        <p className="text-sm text-ink-soft">
          This site uses cookies for analytics and functionality.{" "}
          <a href="#" className="font-medium text-rust hover:text-rust-deep">
            Learn more
          </a>
        </p>
        <button
          onClick={dismiss}
          className="rounded-sm bg-ink px-5 py-2 text-sm font-medium text-paper transition-colors hover:bg-rust"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
