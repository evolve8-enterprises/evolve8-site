import Link from "next/link";
import Image from "next/image";
import { PageHeader, Section } from "@/components/PageHeader";

export const metadata = { title: "About — Evolve8 Enterprises" };

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="A campaign, a company, and a single founder in DFW."
        lede="Evolve8 Enterprises is a private public-interest company building infrastructure for the AI economy. The Silent Apocalypse Public Transparency Campaign is its flagship project, founded and led by Reya Porche in the Dallas-Fort Worth Metroplex."
        crumbs={[{ href: "/", label: "Home" }, { href: "/about", label: "About" }]}
      />

      <Section>
        <div className="grid md:grid-cols-[2fr_1fr] gap-10">
          <div className="space-y-6 text-bone/85 leading-relaxed h-serif text-lg">
            <p>Evolve8 Enterprises is the private company. <a href="https://www.vivinatefarms.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Vivinate Farms</a> is the public-interest, regenerative agriculture and food-sovereignty arm, fiscally sponsored by Far Away Projects (501(c)(3), EIN 82-1917723) and on the path to its own 501(c)(3) determination.</p>
            <p>Together, they run eight programs covering the systems in active collapse for most American families — legal, medical, food, money, work, land, skills, and a public blog that names what is happening, in plain language, without fear.</p>
            <p>This is not a foundation. This is not a government program. This is one founder, one campaign, and a Resilience Points ledger that any family in DFW can join — for free.</p>
          </div>
          <aside className="card flex flex-col gap-4">
            <div className="overflow-hidden border border-line">
              <Image
                src="/reya.jpg.png"
                alt="Reya Porche — Founder, Evolve8 Enterprises"
                width={400}
                height={500}
                className="w-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                style={{ maxHeight: "320px" }}
              />
            </div>
            <div>
              <p className="eyebrow mb-1">Founder</p>
              <h3 className="h-display text-bone text-xl mb-2">Reya Porche</h3>
              <p className="text-bone/75 text-sm leading-relaxed">
                Dallas-Fort Worth, TX. Builder, organizer, and founder of{" "}
                <a href="https://www.vivinatefarms.org" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Vivinate Farms</a>{" "}
                and Evolve8 Enterprises. Public contact: reyaporche@vivinatefarms.org · 469-844-7627.
              </p>
              <Link href="/press" className="mt-4 inline-block btn-secondary text-sm">Media kit →</Link>
            </div>
          </aside>
        </div>
      </Section>

      <Section>
        <p className="eyebrow mb-4">Brand voice</p>
        <ul className="space-y-2 text-bone/80 max-w-3xl">
          <li>· Plain language. We never use jargon when a sentence will do.</li>
          <li>· Direct, calm, and specific. We name names. We cite sources.</li>
          <li>· No utopian promises. No miracle cures. No collapse-prophecy theatre.</li>
          <li>· Transparency by default. Receipts public. Numbers public. Mistakes public.</li>
        </ul>
      </Section>
    </>
  );
}
