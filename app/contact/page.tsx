"use client";
import { useState } from "react";
import { PageHeader, Section } from "@/components/PageHeader";

const ROUTES = [
  { v: "press", l: "press@evolve8enterprises.com — Media, journalists, podcasts" },
  { v: "donate", l: "donate@evolve8enterprises.com — Donors and sponsors" },
  { v: "founder", l: "founder@evolve8enterprises.com — Partners and investors" },
  { v: "hello", l: "hello@evolve8enterprises.com — Everything else" },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPending(true);
    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind: "contact", ...payload }),
      });
    } catch {}
    setPending(false);
    setSubmitted(true);
  };

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Send us a message."
        accent="a message."
        lede="Fill out the form below and your message goes directly to the founder. Four routes — press, donors, partners, or general. Replies within 24 hours, Monday–Friday."
        crumbs={[{ href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/contact", label: "Contact" }]}
      />

      <Section>
        <div className="grid md:grid-cols-[2fr_1fr] gap-10">
          <div className="max-w-2xl">
            {submitted ? (
              <div className="card">
                <p className="eyebrow mb-2">Sent</p>
                <h3 className="h-display text-bone text-2xl mb-2">Thank you.</h3>
                <p className="text-bone/75">A reply will come from the address you selected within 24 hours, Monday–Friday.</p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label>Your name</label>
                    <input name="name" required />
                  </div>
                  <div>
                    <label>Email</label>
                    <input name="email" type="email" required />
                  </div>
                </div>
                <div>
                  <label>Route to</label>
                  <select name="route" defaultValue="hello">
                    {ROUTES.map((r) => <option key={r.v} value={r.v}>{r.l}</option>)}
                  </select>
                </div>
                <div>
                  <label>Subject</label>
                  <input name="subject" required />
                </div>
                <div>
                  <label>Message</label>
                  <textarea name="message" rows={6} required />
                </div>
                <button type="submit" disabled={pending} className="btn-primary">
                  {pending ? "Sending…" : "Send →"}
                </button>
              </form>
            )}
          </div>
          <aside>
            <p className="eyebrow mb-3">Direct addresses</p>
            <ul className="space-y-3 text-sm">
              {ROUTES.map((r) => {
                const [email, ...rest] = r.l.split(" — ");
                return (
                  <li key={r.v}>
                    <a href={`mailto:${email}`} className="text-bone/90 hover:text-accent">{email}</a>
                    <p className="text-bone/55 text-xs">{rest.join(" — ")}</p>
                  </li>
                );
              })}
            </ul>
            <p className="eyebrow mt-8 mb-3">Phone</p>
            <p className="text-bone/85 text-sm">469-844-7627</p>
            <p className="eyebrow mt-8 mb-3">Mailing</p>
            <p className="text-bone/85 text-sm leading-relaxed">7777 Glen America Dr<br/>Apt 133<br/>Dallas, TX 75225</p>
          </aside>
        </div>
      </Section>
    </>
  );
}
