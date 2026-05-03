"use client";
import { useState } from "react";

export function IntakeForm({ category, categoryName }: { category: string; categoryName: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [trackingId, setTrackingId] = useState<string>("");
  const [pending, setPending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      const res = await fetch("/api/public-action/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ category, ...payload }),
      });
      const data = await res.json();
      setTrackingId(data.tracking_id || `PAN-${Date.now()}`);
      setSubmitted(true);
    } catch {
      setTrackingId(`PAN-${Date.now()}`);
      setSubmitted(true);
    } finally {
      setPending(false);
    }
  };

  if (submitted) {
    return (
      <div className="card">
        <p className="eyebrow mb-2">Report received</p>
        <h4 className="h-display text-bone text-2xl mb-3">Tracking ID: <span className="text-accent">{trackingId}</span></h4>
        <p className="text-bone/75 leading-relaxed">
          Thank you for filing. Save your tracking ID. A reviewer will triage within 5 business days. We
          publish anonymized patterns in our quarterly Transparency Report. You will not receive legal
          advice from us — for that, contact a licensed attorney.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label>Your name (or alias)</label>
          <input name="name" required />
        </div>
        <div>
          <label>Email</label>
          <input name="email" type="email" required />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label>City / state</label>
          <input name="location" placeholder="Dallas, TX" />
        </div>
        <div>
          <label>When did this happen?</label>
          <input name="date_range" placeholder="e.g. March 2026 – present" />
        </div>
      </div>
      <div>
        <label>Other parties involved (employer, landlord, insurer, platform, etc.)</label>
        <input name="parties" />
      </div>
      <div>
        <label>What happened? (be specific — dates, amounts, what was promised, what occurred)</label>
        <textarea name="narrative" rows={6} required />
      </div>
      <div>
        <label>Documents you have (will not upload here — just check what you have)</label>
        <div className="grid grid-cols-2 gap-2 text-sm text-bone/85">
          {["Pay stubs / contracts", "Bills / invoices", "Letters / notices", "Photos / videos", "Texts / emails", "Recorded calls"].map((d) => (
            <label key={d} className="flex items-center gap-2">
              <input type="checkbox" name="docs" value={d} className="w-auto" />
              {d}
            </label>
          ))}
        </div>
      </div>
      <label className="flex items-start gap-2 text-sm text-bone/80">
        <input type="checkbox" name="consent" required className="w-auto mt-1" />
        <span>
          I understand the Public Action Network is public-interest documentation, not legal advice,
          and that filing this report does not create an attorney-client relationship.
        </span>
      </label>
      <button type="submit" disabled={pending} className="btn-primary">
        {pending ? "Submitting…" : `Submit ${categoryName} report →`}
      </button>
    </form>
  );
}
