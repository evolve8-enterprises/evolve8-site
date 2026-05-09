import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="border-t border-line mt-24">
      <div className="disclaimer-band">
        <div className="container-x py-6">
          <p className="mb-2"><span className="text-bone font-medium">Disclaimers.</span> Evolve8 Enterprises is a private company. Vivinate Farms is a fiscally sponsored project of Far Away Projects (501(c)(3), EIN 82-1917723) and is on the path to its own 501(c)(3) determination. Neither Evolve8 Enterprises nor Vivinate Farms is a government agency.</p>
          <p className="mb-2">The Silent Apocalypse Simulator and Index are educational simulations. They do not forecast a U.S. dollar collapse date or any other specific economic event. The Public Action Network is public-interest documentation and education; it is not legal advice and does not guarantee eligibility, payouts, or settlements. Macro8 is open-source financial research and education; it is not investment advice and does not promise profits or returns. The Land, Property, and Campus Competition is a merit-based two-track residency pathway; it is not a lottery, drawing, sweepstakes, or guaranteed transfer of property.</p>
          <p className="mb-2">Evolve8 Enterprises is not a law firm. The Legal Help Platform and Public Action Network do not provide legal advice and do not create an attorney-client relationship. Class action eligibility and legal outcomes are not guaranteed. Users should consult licensed attorneys for legal matters.</p>
          <p>Resilience Points are non-cash internal participation credits and are not currency, securities, or wages.</p>
        </div>
      </div>

      {/* Land Competition CTA Band */}
      <div className="bg-accent/10 border-b border-accent/30">
        <div className="container-x py-8">
          <p className="eyebrow mb-3" style={{ color: "#E11D2E" }}>Land Access Competition</p>
          <h3 className="h-display text-bone text-xl md:text-2xl mb-4">Two Tracks to Land Access — Apply Now</h3>
          <div className="flex flex-wrap gap-3">
            <Link href="/land#apply" className="btn-primary text-sm">Apply — Live + Work →</Link>
            <Link href="/land#apply" className="btn-primary text-sm">Apply — Just Live →</Link>
            <Link href="/land" className="btn-secondary text-sm">Read Prize Rules</Link>
            <Link href="/sponsor" className="btn-secondary text-sm">Sponsor a Family</Link>
          </div>
        </div>
      </div>

      <div className="container-x py-12 grid md:grid-cols-4 gap-10 text-sm">
        <div>
          <Link href="/" className="flex items-center gap-3 mb-4">
            <Image src="/logo.jpg" alt="Evolve8 Enterprises logo" width={26} height={26} className="rounded-sm" />
            <span className="h-display text-bone">Evolve8 Enterprises</span>
          </Link>
          <p className="text-bone/70 leading-relaxed">Public-interest infrastructure for the AI economy. Built in the Dallas-Fort Worth Metroplex.</p>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Programs</h4>
          <ul className="space-y-2 text-bone/80">
            <li><Link href="/silent-apocalypse" className="hover:text-accent">Silent Apocalypse</Link></li>
            <li><Link href="/legal" className="hover:text-accent">Public Action & Class Actions</Link></li>
            <li><Link href="/legal/help-platform" className="hover:text-accent">Legal Help Platform</Link></li>
            <li>
              <Link href="/food" className="hover:text-accent">Vivinate Farms</Link>
              <a href="https://www.vivinatefarms.org" target="_blank" rel="noopener noreferrer"
                className="ml-2 text-accent/60 hover:text-accent text-[10px] font-mono transition-colors">↗ vivinatefarms.org</a>
            </li>
            <li><Link href="/medical" className="hover:text-accent">Medical + Way Stations</Link></li>
            <li><Link href="/money" className="hover:text-accent">Macro8</Link></li>
            <li><Link href="/work" className="hover:text-accent">Work8</Link></li>
            <li><Link href="/skills" className="hover:text-accent">Skills Academy</Link></li>
            <li><Link href="/land" className="hover:text-accent">Land Competition</Link></li>
            <li><Link href="/education-library" className="hover:text-accent">Education Library</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Contact</h4>
          <ul className="space-y-2 text-bone/80">
            <li><a href="mailto:press@evolve8enterprises.com" className="hover:text-accent">press@evolve8enterprises.com</a><br/><span className="text-bone/50 text-[12px]">Media, journalists, podcasts</span></li>
            <li><a href="mailto:donate@evolve8enterprises.com" className="hover:text-accent">donate@evolve8enterprises.com</a><br/><span className="text-bone/50 text-[12px]">Donors and sponsors</span></li>
            <li><a href="mailto:founder@evolve8enterprises.com" className="hover:text-accent">founder@evolve8enterprises.com</a><br/><span className="text-bone/50 text-[12px]">Partners and investors</span></li>
            <li><a href="mailto:jobs@evolve8enterprises.com" className="hover:text-accent">jobs@evolve8enterprises.com</a><br/><span className="text-bone/50 text-[12px]">Jobs &amp; employment</span></li>
            <li><a href="mailto:hello@evolve8enterprises.com" className="hover:text-accent">hello@evolve8enterprises.com</a><br/><span className="text-bone/50 text-[12px]">Everything else</span></li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-4">Org</h4>
          <ul className="space-y-2 text-bone/80">
            <li><Link href="/about" className="hover:text-accent">About</Link></li>
            <li><Link href="/press" className="hover:text-accent">Press / Media</Link></li>
            <li><Link href="/sponsor" className="hover:text-accent">Sponsor</Link></li>
            <li><Link href="/donate" className="hover:text-accent">Donate</Link></li>
            <li><Link href="/investors" className="hover:text-accent">Investors</Link></li>
            <li><Link href="/transparency" className="hover:text-accent">Transparency</Link></li>
            <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
          </ul>
          <h4 className="eyebrow mt-6 mb-3">Legal</h4>
          <ul className="space-y-2 text-bone/80">
            <li><Link href="/privacy" className="hover:text-accent">Privacy</Link></li>
            <li><Link href="/terms" className="hover:text-accent">Terms</Link></li>
            <li><Link href="/legal/disclaimer" className="hover:text-accent">Legal Review Center</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-line">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-bone/50">
          <p>© {new Date().getFullYear()} Evolve8 Enterprises. Dallas-Fort Worth, TX. All rights reserved.</p>
          <p>Mailing: 7777 Glen America Dr, Apt 133, Dallas, TX 75225 (mail-routed)</p>
        </div>
      </div>
    </footer>
  );
}
