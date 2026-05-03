import Link from "next/link";

export function SupportTriple() {
  return (
    <section className="border-t border-line bg-[#070707]">
      <div className="container-x py-20">
        <p className="eyebrow mb-3">Three ways to support the campaign</p>
        <div className="grid md:grid-cols-3 gap-4">
          <Link href="/donate" className="card">
            <span className="tag mb-6">Donate</span>
            <h3 className="h-display text-2xl mb-2">Donate to Vivinate Farms</h3>
            <p className="text-bone/70 text-sm mb-6 leading-relaxed">Routed through our fiscal sponsor Far Away Projects, a 501(c)(3) public charity. Tax-deductible to the extent allowed by law.</p>
            <span className="text-accent text-sm">Give now →</span>
          </Link>
          <Link href="/sponsor" className="card">
            <span className="tag mb-6">Sponsor</span>
            <h3 className="h-display text-2xl mb-2">Sponsor the Campaign</h3>
            <p className="text-bone/70 text-sm mb-6 leading-relaxed">Public-education sponsorships, sponsor-funded bounties, employer partnerships, and regional tiers. Recognition and reporting included.</p>
            <span className="text-accent text-sm">See tiers →</span>
          </Link>
          <Link href="/money/macro8/tao" className="card">
            <span className="tag mb-6">Donate TAO</span>
            <h3 className="h-display text-2xl mb-2">Fund Open Financial Intelligence</h3>
            <p className="text-bone/70 text-sm mb-6 leading-relaxed">TAO donations to Macro8 fund open-source financial research and modeling. Public transparency ledger. Donations are not investments.</p>
            <span className="text-accent text-sm">Donate TAO →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
