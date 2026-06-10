"use client";

import { useState, type FormEvent } from "react";
import { AccreditationForm } from "./AccreditationForm";

export function InvestorForm() {
  const [step, setStep] = useState<"accreditation" | "details" | "submitted">("accreditation");

  function handleAccreditationComplete() {
    setStep("details");
  }

  function handleDetailsSubmit(e: FormEvent) {
    e.preventDefault();
    setStep("submitted");
  }

  if (step === "submitted") {
    return (
      <div className="border border-line bg-white p-12 text-center">
        <p className="mb-3 font-serif text-3xl text-ink">Thank you for your interest.</p>
        <p className="mx-auto max-w-md text-base font-light leading-relaxed text-ink-soft">
          A member of our team will reach out to schedule a conversation. You can expect to hear from us within 3-5 business days.
        </p>
      </div>
    );
  }

  if (step === "accreditation") {
    return <AccreditationForm onComplete={handleAccreditationComplete} />;
  }

  return (
    <div className="border border-line bg-white p-10">
      <h2 className="mb-6 font-serif text-2xl text-ink">Tell us about yourself</h2>
      <form className="space-y-5" onSubmit={handleDetailsSubmit}>
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-ink">First Name *</label>
            <input
              type="text"
              required
              className="rounded-sm border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-rust"
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-[13px] font-medium text-ink">Last Name *</label>
            <input
              type="text"
              required
              className="rounded-sm border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-rust"
            />
          </div>
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-ink">Email *</label>
          <input
            type="email"
            required
            className="rounded-sm border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-rust"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <label className="text-[13px] font-medium text-ink">
            What interests you most about The New Reality Fund?
          </label>
          <textarea
            rows={3}
            className="rounded-sm border border-line bg-white px-4 py-3 text-sm text-ink outline-none transition-colors focus:border-rust"
            placeholder="Optional — helps us prepare for our conversation"
          />
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="inline-flex items-center rounded-sm bg-ink px-8 py-3 text-sm font-medium text-paper transition-colors hover:bg-rust"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => setStep("accreditation")}
            className="rounded-sm border border-line px-6 py-3 text-sm font-medium text-ink-soft transition-colors hover:border-ink-mute hover:text-ink"
          >
            Back
          </button>
        </div>
      </form>
    </div>
  );
}
