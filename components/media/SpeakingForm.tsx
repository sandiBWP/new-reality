"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/Button";

export function SpeakingForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="border border-line bg-white p-12 text-center">
        <p className="font-serif text-2xl text-ink">Thank you for your inquiry.</p>
        <p className="mt-3 text-base font-light text-ink-soft">
          We typically respond to speaking requests within 5 business days.
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
        <label className="text-[13px] font-medium text-ink">Organization</label>
        <input
          type="text"
          className="rounded-sm border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-mute focus:border-rust"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-ink">Event type *</label>
        <select
          required
          className="rounded-sm border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-rust"
        >
          <option value="">Select...</option>
          <option>Keynote</option>
          <option>Panel</option>
          <option>Workshop</option>
          <option>Webinar</option>
          <option>Podcast Interview</option>
          <option>Other</option>
        </select>
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[13px] font-medium text-ink">Tell us about the event *</label>
        <textarea
          required
          rows={4}
          className="rounded-sm border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors placeholder:text-ink-mute focus:border-rust"
          placeholder="Date, audience, topic focus, format..."
        />
      </div>
      <Button type="submit" size="md">Submit request</Button>
    </form>
  );
}
