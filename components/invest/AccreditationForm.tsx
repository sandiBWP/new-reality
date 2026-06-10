"use client";

import { useState, type FormEvent } from "react";

export function AccreditationForm({ onComplete }: { onComplete: () => void }) {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!checked) {
      setError("You must confirm your accredited investor status to proceed.");
      return;
    }
    setError("");
    onComplete();
  }

  return (
    <div className="border border-line bg-white p-10">
      <h2 className="mb-4 font-serif text-2xl text-ink">Accredited Investor Confirmation</h2>
      <p className="mb-6 text-sm font-light leading-relaxed text-ink-soft">
        Under SEC rules, certain private investment opportunities are limited to accredited investors.
        An accredited investor is someone who meets one or more of the following criteria:
      </p>
      <ul className="mb-6 space-y-2 text-sm font-light leading-relaxed text-ink-soft">
        <li>• Individual net worth (or joint net worth with spouse) exceeding $1,000,000 (excluding primary residence)</li>
        <li>• Individual income exceeding $200,000 (or $300,000 jointly with spouse) in each of the prior two years, with a reasonable expectation of the same for the current year</li>
        <li>• Holds in good standing certain professional certifications, designations, or credentials (e.g., Series 7, Series 65, Series 82)</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <label className="flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={checked}
            onChange={(e) => setChecked(e.target.checked)}
            className="mt-0.5 h-4 w-4 rounded-sm border-line text-rust accent-rust"
          />
          <span className="text-sm text-ink">
            I confirm that I am an accredited investor as defined by SEC Rule 501 of Regulation D.
          </span>
        </label>
        {error && <p className="mt-3 text-xs text-error">{error}</p>}
        <button
          type="submit"
          className="mt-6 inline-flex items-center rounded-sm bg-ink px-8 py-3 text-sm font-medium text-paper transition-colors hover:bg-rust"
        >
          Continue
        </button>
      </form>
    </div>
  );
}
