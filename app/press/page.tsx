import Link from "next/link";
import Image from "next/image";
import { PageHeader, Section, CardLink } from "@/components/PageHeader";

export const metadata = { title: "Press & Media — Evolve8 Enterprises" };

const FACTS = [
  { k: "Founder", v: "Reya Porche, Dallas-Fort Worth, TX" },
  { k: "Programs", v: "Eight, covering legal, medical, food, money, work, land, skills, and a public blog" },
  { k: "Vivinate Farms", v: "vivinatefarms.org", href: "https://www.vivinatefarms.org" },
  { k: "Fiscal sponsor", v: "Far Away Projects (501(c)(3), EIN 82-1917723)" },
  { k: "Campaign launch", v: "May 2026" },
  { k: "Competition deadline", v: "Perplexity Billion Dollar Build · Submission June 2, 2026" },
  { k: "Press contact", v: "press@evolve8enterprises.com · 469-844-7627" },
];

export default function PressPage() {
  return (
    <>
      <PageHeader
        eyebrow="Press & Media"
        title="A press kit for the Silent Apocalypse Public Transparency Campaign."
        lede="For journalists, podcasters, and producers covering housing, AI displacement, food security, and the cost-of-living era. Background, key facts, founder bio, and downloadable assets."
        crumbs={[{ href: "/", label: "Home" }, { href: "/press", label: "Press" }]}
      />

      {/* Founder photo + bio */}
      <Section>
        <p className="eyebrow mb-6">Founder</p>
        <div className="grid md:grid-cols-[280px_1fr] gap-10 items-start">
          <div className="overflow-hidden border border-line">
            <Image
              src="/reya.jpg.png"
              alt="Reya Porche — Founder, Evolve8 Enterprises"
              width={560}
              height={700}
              className="w-full object-cover object-top"
            />
          </div>
          <div>
            <h2 className="h-display text-bone text-3xl md:text-4xl mb-2">Reya Porche</h2>
            <p className="text-bone/55 font-mono text-xs uppercase tracking-widest mb-5">Founder · Evolve8 Enterprises & Vivinate Farms · Dallas-Fort Worth, TX</p>
            <div className="space-y-4 text-bone/80 leading-relaxed max-w-2xl">
              <p>Reya Porche is the founder of Evolve8 Enterprises and <a href="https://www.vivinatefarms.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Vivinate Farms</a>, a private public-interest company and its fiscally sponsored nonprofit arm. Based in Dallas-Fort Worth, Texas, she launched the Silent Apocalypse Public Transparency Campaign to name and document the systemic collapse of food, housing, healthcare, jobs, and money that most American families are experiencing without a framework to understand it.</p>
              <p>Evolve8 Enterprises runs eight programs covering legal access, medical support, food production, financial education, workforce development, land competition, skills training, and public documentation — all integrated around a single mission: help families measure the harm, document it, and build something durable before conditions worsen.</p>
              <p><a href="https://www.vivinatefarms.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Vivinate Farms</a>, the regenerative agriculture and food-sovereignty arm, is fiscally sponsored by Far Away Projects (501(c)(3), EIN 82-1917723) and is pursuing its own 501(c)(3) determination. Full program details and family applications: <a href="https://www.vivinatefarms.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-mono">vivinatefarms.org</a></p>
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="mailto:press@evolve8enterprises.com" className="btn-primary text-sm">Email press@ →</a>
              <Link href="/contact" className="btn-secondary text-sm">Contact form</Link>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid md:grid-cols-[1fr_2fr] gap-10">
          <div>
            <p className="eyebrow mb-4">Press contact</p>
            <p className="text-bone/85 leading-relaxed">
              <a href="mailto:press@evolve8enterprises.com" className="hover:text-accent">press@evolve8enterprises.com</a><br/>
              469-844-7627<br/>
              Dallas-Fort Worth, TX<br/>
              <span className="text-bone/55 text-sm">Reply within 24 hours, M-F.</span>
            </p>
            <p className="eyebrow mt-8 mb-4">For embargoed briefings</p>
            <p className="text-bone/75 text-sm">Email press@ with outlet, run date, and angle. We'll send the full briefing under embargo.</p>
          </div>
          <div>
            <p className="eyebrow mb-4">Key facts</p>
            <dl className="space-y-3">
              {FACTS.map((f) => (
                <div key={f.k} className="grid grid-cols-[160px_1fr] gap-4 border-b border-line pb-3 text-sm">
                  <dt className="text-bone/55 font-mono uppercase tracking-widest text-xs">{f.k}</dt>
                  <dd className="text-bone/90">
                    {f.href ? (
                      <a href={f.href} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline font-mono">
                        {f.v} ↗
                      </a>
                    ) : f.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section>
        <p className="eyebrow mb-4">Story angles</p>
        <div className="grid md:grid-cols-3 gap-4">
          <CardLink href="/silent-apocalypse" title="The Silent Apocalypse">
            How a single founder is naming and documenting the systemic collapse of food, housing, healthcare, and money in DFW.
          </CardLink>
          <CardLink href="/simulator" title="The Simulator">
            A 5-minute, 24-question household exposure simulator that produces a public Index Score. Educational, not predictive.
          </CardLink>
          <CardLink href="/legal" title="Public Action Network">
            Twelve harm categories. Documentation as resistance. How structured reporting becomes pattern, then policy.
          </CardLink>
          <CardLink href="/land" title="Land Competition">
            A merit-based two-track residency pathway. Why the program is explicitly not a lottery — and why that matters in Texas.
          </CardLink>
          <CardLink href="/money" title="Macro8 & TAO">
            Open-source financial education plus on-chain donations on Bittensor. Receipts are public.
          </CardLink>
          <CardLink href="/food" title="Vivinate Farms">
            Family Module 1: kale, tomatoes, peppers, herbs. A 14-day household food buffer for every family that wants one.
          </CardLink>
        </div>
      </Section>

      <Section bordered={false}>
        <div className="flex flex-wrap gap-3">
          <a href="mailto:press@evolve8enterprises.com" className="btn-primary">Email press@</a>
          <Link href="/contact" className="btn-secondary">Contact form</Link>
        </div>
      </Section>
    </>
  );
}
