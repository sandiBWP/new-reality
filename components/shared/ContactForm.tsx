"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-line bg-white p-12 text-center">
        <p className="font-serif text-2xl text-ink">Thank you for reaching out.</p>
        <p className="mt-3 text-base font-light text-ink-soft">
          We typically respond within 2-3 business days.
        </p>
      </div>
    );
  }

  return (
    <form className="space-y-6 border border-line bg-white p-8" onSubmit={handleSubmit}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-ink">Name *</label>
          <input
            type="text"
            required
            className="rounded-sm border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-mute focus:border-rust"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-ink">Email *</label>
          <input
            type="email"
            required
            className="rounded-sm border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-mute focus:border-rust"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-ink">Subject</label>
        <input
          type="text"
          className="rounded-sm border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-mute focus:border-rust"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-ink">Message *</label>
        <textarea
          required
          rows={5}
          className="rounded-sm border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-mute focus:border-rust"
        />
      </div>
      <Button type="submit" size="md">Send message</Button>
    </form>
  );
}
