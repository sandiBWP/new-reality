"use client";

import { useState, type FormEvent } from "react";

export function NewsletterSignup({ className }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "submitted">("idle");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setStatus("submitted");
    }
  }

  if (status === "submitted") {
    return (
      <p className={`text-center font-serif text-xl text-ink ${className ?? ""}`}>
        Thanks — we&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form
      className={`mx-auto flex max-w-[400px] gap-2 ${className ?? ""}`}
      onSubmit={handleSubmit}
    >
      <input
        type="email"
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="min-w-0 flex-1 rounded-sm border border-line bg-paper-warm px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-rust"
        required
      />
      <button
        type="submit"
        className="shrink-0 rounded-sm bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-rust"
      >
        Stay in the loop
      </button>
    </form>
  );
}
