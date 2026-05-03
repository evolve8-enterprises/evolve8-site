const CONTACTS = [
  { tag: "Press / Media", email: "press@evolve8enterprises.com", line: "Journalists, producers, podcasts, blogs, interviews, press kit, public statements." },
  { tag: "Donations / Sponsorships", email: "donate@evolve8enterprises.com", line: "Donors, foundations, corporate sponsors, fiscal sponsor questions, public education sponsorships." },
  { tag: "Founder / Partnerships", email: "founder@evolve8enterprises.com", line: "Strategic partnerships, investors, legal partners, schools, community orgs, celebrity / PR teams, venture conversations." },
  { tag: "General Inquiries", email: "hello@evolve8enterprises.com", line: "General questions, volunteer interest, program interest, community questions, website support." },
];

export function ContactBlock() {
  return (
    <section className="border-t border-line">
      <div className="container-x py-20">
        <p className="eyebrow mb-3">Contact Evolve8 Enterprises</p>
        <h2 className="h-display text-3xl md:text-5xl mb-12 max-w-4xl">Four inboxes. One mission.</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {CONTACTS.map((c) => (
            <a key={c.email} href={`mailto:${c.email}`} className="card">
              <span className="tag mb-4">{c.tag}</span>
              <p className="h-display text-xl text-accent mb-2 break-all">{c.email}</p>
              <p className="text-bone/70 text-sm leading-relaxed">{c.line}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
