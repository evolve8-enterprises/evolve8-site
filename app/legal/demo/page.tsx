"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { LEGAL_CATEGORIES } from "@/lib/legalCategories";

/* ─────────────────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────────────────── */

const CLASS_ACTION_CATEGORIES = [
  { slug: "medical-debt",             name: "Medical Debt",                      short: "Billing errors, surprise bills, denied claims, inflated medical charges." },
  { slug: "food-health-harm",         name: "Food & Health Harm",                short: "Deceptive labeling, contamination, unsafe ingredients, false health claims." },
  { slug: "data-attention",           name: "Data & Attention Extraction",       short: "Unauthorized data collection, targeted manipulation, privacy violations." },
  { slug: "ai-algorithmic-harm",      name: "AI & Algorithmic Harm",             short: "Algorithmic discrimination in hiring, lending, housing, and criminal justice." },
  { slug: "labor-wage",               name: "Labor & Wage Extraction",           short: "Wage theft, hour manipulation, misclassification, tip theft, tip pooling abuse." },
  { slug: "student-debt-education",   name: "Student Debt & Education Failure",  short: "Predatory schools, false job placement stats, discharge denials, servicing errors." },
  { slug: "housing-land-access",      name: "Housing & Land Access",             short: "Discriminatory lending, illegal evictions, deed theft, zoning abuse." },
  { slug: "environmental-infra",      name: "Environmental & Infrastructure Harm", short: "Water contamination, toxic exposure, utility neglect, infrastructure failure." },
  { slug: "insurance-harm",           name: "Insurance Harm",                    short: "Bad faith denials, predatory policies, claim suppression, premium manipulation." },
  { slug: "consumer-deception",       name: "Consumer Deception",                short: "False advertising, hidden fees, deceptive subscriptions, bait and switch." },
  { slug: "corporate-misconduct",     name: "Corporate Misconduct",              short: "Fraud, market manipulation, securities violations, public harm concealment." },
];

const EVIDENCE_CHECKLISTS: Record<string, { group: string; items: string[] }[]> = {
  "wage-theft": [
    { group: "Pay Records",       items: ["Pay stubs — last 3–6 months", "Direct deposit confirmations", "W-2 or 1099 tax forms", "Tip distribution logs or reports"] },
    { group: "Work Records",      items: ["Clock-in / clock-out records or timesheets", "Work schedules (printed or screenshot)", "Employment contract or offer letter", "Employee handbook"] },
    { group: "Communications",    items: ["Emails or texts about pay or hours", "Any written complaints you filed with HR", "HR or management correspondence", "Records of verbal conversations (notes with dates)"] },
  ],
  "denied-medical-claims": [
    { group: "Insurance Docs",    items: ["Explanation of Benefits (EOB) for every denied claim", "Summary of Benefits and Coverage (SBC)", "Denial letters — note the reason codes", "Prior authorization requests and responses"] },
    { group: "Medical Records",   items: ["Itemized bills for all services rendered", "Attending physician orders and notes", "Prescription records", "Hospital discharge summaries"] },
    { group: "Communications",    items: ["All written correspondence with your insurer", "Appeal letters sent and responses received", "Call log — dates, rep names, what was said", "Employer HR records if employer-sponsored plan"] },
  ],
  "predatory-debt": [
    { group: "Loan Documents",    items: ["Original loan contract or credit agreement", "All addenda, modifications, or rollovers", "Fee disclosure documents", "All billing statements and payment history"] },
    { group: "Collector Records", items: ["Debt collection letters received", "Call log with collector — dates, times, content", "Any threats or illegal statements (record if legal in your state)", "Cease communication letters sent"] },
    { group: "Credit Records",    items: ["Credit reports showing the debt (all three bureaus)", "Dispute letters filed with bureaus", "Bureau responses to disputes"] },
  ],
  "eviction-housing": [
    { group: "Lease Docs",        items: ["Complete lease agreement (all pages)", "Rent payment receipts or bank records", "Move-in checklist and condition report", "Security deposit receipt and amount"] },
    { group: "Condition Records", items: ["Photos and videos of unit — dated", "All written repair requests (dates sent)", "Landlord responses (or lack thereof)", "Any inspection reports or code violations"] },
    { group: "Eviction Records",  items: ["Eviction notice (every copy received)", "Court filings and hearing notices", "All communications about the eviction", "Timeline noting retaliation if applicable"] },
  ],
  "algorithmic-discrimination": [
    { group: "Decision Records",  items: ["Rejection or denial notification — screenshot or letter", "Reason codes or explanations provided", "Date, context, and platform of the decision", "Company's stated criteria or policies"] },
    { group: "Your Application",  items: ["Your original application or submission", "Qualifications documentation (resume, transcripts, etc.)", "Comparison data if available — similar applicants accepted", "Platform or company policies on automated decisions"] },
    { group: "Pattern Evidence",  items: ["Any prior decisions by the same system", "Others who experienced the same outcome", "News coverage or regulatory actions against same system"] },
  ],
  "consumer-fraud": [
    { group: "Purchase Records",  items: ["Order confirmation and receipts", "Screenshots of product or service listing at time of purchase", "Promotional or advertising materials you saw", "Payment records — bank or card statements"] },
    { group: "Communications",    items: ["All correspondence with the company", "Customer service chat logs or emails", "Refund requests sent and responses received", "Platform dispute records if applicable"] },
    { group: "Harm Evidence",     items: ["Photos comparing product received vs. advertised", "Documentation showing service was not rendered", "Expert or comparison evidence if available"] },
  ],
};

const DEFAULT_CHECKLIST = [
  { group: "Core Documentation",  items: ["Written timeline of what happened — dates, amounts, parties", "Names and contact info of companies and individuals involved", "Dollar amounts lost or at stake", "Any reference or account numbers"] },
  { group: "Supporting Evidence", items: ["Contracts, agreements, or terms of service", "Bills, statements, or financial records", "Correspondence — emails, letters, texts", "Photos, screenshots, or recordings if applicable"] },
  { group: "Identity & Filing",   items: ["Account numbers or reference IDs", "Any prior complaints filed elsewhere (FTC, CFPB, state AG)", "Government-issued ID if identity-related claim", "Dates of any statutes of limitations that may apply"] },
];

const DEMO_COMPANIES = [
  { id: "CA-2025-001", sector: "Health Insurance Industry",             harm: "Retroactive denial of covered services after care rendered",         status: "active",    category: "Medical Debt",              claimants: "40,000+ est.", notes: "Services approved at time of care; 'not medically necessary' denial issued 60–90 days post-service with no documented clinical review." },
  { id: "CA-2025-002", sector: "Student Loan Servicing Industry",       harm: "Wrongful rejection of income-driven repayment applications",          status: "active",    category: "Student Debt",              claimants: "120,000+ est.", notes: "Servicers applying incorrect eligibility criteria, losing paperwork, and misrouting IDR applications resulting in denial letters." },
  { id: "CA-2025-003", sector: "National Telecom Providers",            harm: "Undisclosed 'regulatory recovery' fee billing",                       status: "active",    category: "Consumer Deception",        claimants: "Millions affected", notes: "Fees added post-sale, labeled as regulatory pass-throughs while being discretionary revenue charges." },
  { id: "CA-2025-004", sector: "Payday & Installment Lending Industry", harm: "Effective APR exceeding state usury limits via fee stacking",          status: "active",    category: "Predatory Debt",            claimants: "Varies by state", notes: "Loan structures appearing within legal limits while fee engineering creates effective rates above 200% annually." },
  { id: "PE-2025-001", sector: "Algorithmic Hiring Platforms",          harm: "Discriminatory automated rejection without human review",              status: "pending",   category: "AI & Algorithmic Harm",     claimants: "Under investigation", notes: "Automated systems rejecting candidates from protected classes at statistically significant higher rates." },
  { id: "PE-2025-002", sector: "Social Media & Attention Platforms",    harm: "Unauthorized behavioral data extraction and third-party sale",         status: "pending",   category: "Data & Attention",          claimants: "Class TBD", notes: "Data collected beyond disclosed purpose, resold without meaningful consent, used in targeted manipulation." },
  { id: "PE-2025-003", sector: "National Restaurant & Retail Chains",   harm: "Systematic tip pool violations and off-clock work requirements",       status: "pending",   category: "Labor & Wage Extraction",   claimants: "Under review", notes: "Tip redistribution to non-tipped management; required off-clock prep and cleanup; manager misclassification." },
  { id: "PT-2025-001", sector: "Property Management & Rental Platforms","harm": "Coordinated algorithmic rent pricing and deposit manipulation",      status: "potential", category: "Housing & Land Access",     claimants: "Evaluating", notes: "Emerging pattern of inter-platform pricing coordination; deposit withholding inconsistent with state law." },
  { id: "PT-2025-002", sector: "For-Profit Higher Education",           harm: "False job placement statistics in enrollment materials",               status: "potential", category: "Student Debt & Education",  claimants: "Evaluating", notes: "Inflated employment statistics, accreditation misrepresentation, and loan default rate concealment at enrollment." },
] as const;

type CompanyStatus = "active" | "pending" | "potential";

const DEMO_CAMPAIGNS = [
  { id: 1, name: "National Wage Theft Documentation Network",  category: "Labor & Wage Extraction",          slug: "wage-theft",             enrolled: 3847, status: "open", goal: "10,000 reports", description: "Documenting wage theft patterns across restaurant, retail, and hospitality industries to build a national dataset for enforcement routing." },
  { id: 2, name: "Insurance Denial Pattern Mapping",           category: "Medical Debt / Insurance Harm",    slug: "denied-medical-claims",  enrolled: 5214, status: "open", goal: "25,000 reports", description: "Mapping retroactive and prior-authorization denial patterns across major insurers. Anonymized reports routed to state insurance commissioners." },
  { id: 3, name: "Algorithmic Hiring Discrimination Tracker",  category: "AI & Algorithmic Harm",            slug: "algorithmic-discrimination", enrolled: 1293, status: "open", goal: "5,000 reports", description: "Collecting structured reports of automated hiring rejections to identify statistical discrimination by industry and platform." },
  { id: 4, name: "Predatory Lending Network",                  category: "Consumer Deception / Debt",        slug: "predatory-debt",         enrolled: 2105, status: "open", goal: "8,000 reports", description: "Documenting payday, title, and installment loan structures that exceed state usury limits through fee engineering." },
];

/* ─────────────────────────────────────────────────────────────────────────────
   TYPES / NAV
───────────────────────────────────────────────────────────────────────────── */

type View = "hub" | "search" | "companies" | "evidence" | "education" | "campaigns";

const VIEWS: { id: View; label: string }[] = [
  { id: "hub",       label: "Overview" },
  { id: "search",    label: "Search by Harm" },
  { id: "companies", label: "Companies" },
  { id: "evidence",  label: "Evidence Vault" },
  { id: "education", label: "Legal Education" },
  { id: "campaigns", label: "Campaigns" },
];

/* ─────────────────────────────────────────────────────────────────────────────
   HUB VIEW
───────────────────────────────────────────────────────────────────────────── */

function HubView({ onNav }: { onNav: (v: View) => void }) {
  const features: { view: View; title: string; desc: string; cta: string }[] = [
    { view: "search",    title: "Search by Harm Category",         desc: "Browse eleven class action categories and twelve active reporting pathways. Find what applies to your situation.",           cta: "Search →" },
    { view: "companies", title: "Company & Industry Lookup",       desc: "See which sectors have open class actions, pending investigations, or emerging potential claims — with status and context.", cta: "Browse →" },
    { view: "evidence",  title: "Evidence Vault & Checklist",      desc: "Pick your harm category and receive a specific checklist of documents to gather. Upload and organize your evidence.",        cta: "Open →" },
    { view: "education", title: "Legal Education & Partner Prep",  desc: "Learn how to talk to a lawyer, what to bring to your first meeting, and how class actions actually work.",                  cta: "Learn →" },
    { view: "campaigns", title: "Open Campaigns & Enrollment",     desc: "Join active public action campaigns, track how many others are participating, or request help launching a new one.",         cta: "View →" },
  ];
  return (
    <div>
      <p className="eyebrow mb-4">Public Action Network · Demo</p>
      <h1 className="h-display text-bone text-3xl md:text-5xl mb-5 max-w-4xl leading-tight">
        Document the harm.<br /><span className="text-accent">Make the system visible.</span>
      </h1>
      <p className="text-bone/75 max-w-2xl leading-relaxed mb-3">
        The Public Action Network is a public-interest education and documentation platform for
        eleven harm categories affecting American families. This demo shows you everything the
        live platform will do — search, document, evidence-organize, and campaign.
      </p>
      <p className="text-bone/50 text-sm max-w-2xl mb-10">
        This is a fully functional demo. No legal advice is given. Filing a report does not
        create an attorney-client relationship. For urgent legal matters, contact a licensed attorney.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((f) => (
          <button
            key={f.view}
            onClick={() => onNav(f.view)}
            className="card text-left group hover:border-accent transition-colors"
          >
            <h3 className="h-display text-bone text-lg mb-2 group-hover:text-accent transition-colors">{f.title}</h3>
            <p className="text-bone/65 text-sm leading-relaxed mb-4">{f.desc}</p>
            <span className="text-accent text-xs font-mono">{f.cta}</span>
          </button>
        ))}
        <div className="card border-l-2 border-accent">
          <h3 className="h-display text-bone text-lg mb-2">How It Works Today</h3>
          <ol className="space-y-2 text-bone/70 text-sm">
            {["Pick the harm category that fits.", "File a structured report — timeline, evidence, parties.", "Reviewer triages and assigns a tracking number.", "Anonymized patterns publish in quarterly Transparency Report.", "Strong patterns routed to enforcement and legal partners."].map((s, i) => (
              <li key={i} className="flex gap-2"><span className="text-accent font-mono shrink-0">0{i + 1}</span>{s}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SEARCH VIEW
───────────────────────────────────────────────────────────────────────────── */

function SearchView() {
  const [tab, setTab] = useState<"class-action" | "reporting">("class-action");
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div>
      <p className="eyebrow mb-4">Search by Harm Category</p>
      <h2 className="h-display text-bone text-2xl md:text-3xl mb-3">Find what applies to your situation.</h2>
      <p className="text-bone/65 text-sm mb-8 max-w-2xl">Two sets of categories: class action education (what may be developing nationally) and active reporting pathways (file a report today and receive a tracking number).</p>

      {/* Tab toggle */}
      <div className="flex gap-2 mb-8 flex-wrap">
        {([["class-action", "Eleven Class Action Categories"], ["reporting", "Twelve Active Reporting Pathways"]] as const).map(([id, label]) => (
          <button
            key={id}
            onClick={() => { setTab(id); setExpanded(null); }}
            className={`px-4 py-2 text-sm font-mono border transition-colors ${tab === id ? "bg-accent border-accent text-white" : "border-line text-bone/70 hover:border-bone/40"}`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === "class-action" && (
        <div className="space-y-2">
          {CLASS_ACTION_CATEGORIES.map((c) => (
            <div key={c.slug} className={`border transition-colors ${expanded === c.slug ? "border-accent" : "border-line hover:border-bone/30"}`}>
              <button
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                onClick={() => setExpanded(expanded === c.slug ? null : c.slug)}
              >
                <div>
                  <span className="h-display text-bone text-base">{c.name}</span>
                  <span className="text-bone/50 text-sm ml-4 hidden sm:inline">{c.short}</span>
                </div>
                <span className="text-accent font-mono text-sm shrink-0">{expanded === c.slug ? "▲" : "▼"}</span>
              </button>
              {expanded === c.slug && (
                <div className="px-5 pb-5 border-t border-line/50">
                  <p className="text-bone/70 text-sm leading-relaxed mt-4 mb-4">{c.short}</p>
                  <div className="flex flex-wrap gap-3 mt-3">
                    <button className="text-xs font-mono text-accent border border-accent/40 px-3 py-1.5 hover:bg-accent/10 transition-colors">
                      View matching companies →
                    </button>
                    <Link href={`/legal/demo#campaigns`} className="text-xs font-mono text-bone/50 border border-line px-3 py-1.5 hover:border-bone/40 transition-colors">
                      View open campaigns →
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {tab === "reporting" && (
        <div className="space-y-2">
          {LEGAL_CATEGORIES.map((c) => (
            <div key={c.slug} className={`border transition-colors ${expanded === c.slug ? "border-accent" : "border-line hover:border-bone/30"}`}>
              <button
                className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                onClick={() => setExpanded(expanded === c.slug ? null : c.slug)}
              >
                <div>
                  <span className="h-display text-bone text-base">{c.name}</span>
                  <span className="text-bone/50 text-sm ml-4 hidden sm:inline">{c.short}</span>
                </div>
                <span className="text-accent font-mono text-sm shrink-0">{expanded === c.slug ? "▲" : "▼"}</span>
              </button>
              {expanded === c.slug && (
                <div className="px-5 pb-5 border-t border-line/50">
                  <p className="text-bone/70 text-sm leading-relaxed mt-4 mb-3">{c.description}</p>
                  <div className="mb-4">
                    <p className="text-bone/40 text-xs font-mono uppercase tracking-widest mb-2">Examples</p>
                    <ul className="space-y-1 text-bone/60 text-sm">
                      {c.examples.map((e) => <li key={e} className="flex gap-2"><span className="text-accent">·</span>{e}</li>)}
                    </ul>
                  </div>
                  <Link href={`/legal/categories/${c.slug}`} className="btn-primary text-xs inline-flex">
                    File a Report — Get Tracking Number →
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   COMPANIES VIEW
───────────────────────────────────────────────────────────────────────────── */

function CompaniesView() {
  const [filter, setFilter] = useState<"all" | CompanyStatus>("all");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = filter === "all" ? DEMO_COMPANIES : DEMO_COMPANIES.filter((c) => c.status === filter);

  const statusStyle = (s: CompanyStatus) =>
    s === "active"  ? "bg-accent/15 text-accent border border-accent/30" :
    s === "pending" ? "bg-yellow-900/20 text-yellow-400 border border-yellow-700/30" :
                      "bg-bone/5 text-bone/50 border border-line";

  const statusLabel = (s: CompanyStatus) =>
    s === "active" ? "Active Class Action" : s === "pending" ? "Pending / Under Review" : "Potential Claim";

  return (
    <div>
      <p className="eyebrow mb-4">Company & Industry Lookup</p>
      <h2 className="h-display text-bone text-2xl md:text-3xl mb-3">Open, pending, and potential class actions.</h2>
      <div className="flex items-center gap-3 mb-2 flex-wrap">
        <p className="text-bone/65 text-sm">All entries are illustrative demo data.</p>
        <span className="tag">Demo — Not Legal Advice</span>
      </div>
      <p className="text-bone/50 text-xs mb-8">The live platform will maintain a continuously updated database. This demo shows the interface and structure.</p>

      {/* Filter */}
      <div className="flex gap-2 mb-6 flex-wrap">
        {(["all", "active", "pending", "potential"] as const).map((f) => (
          <button
            key={f}
            onClick={() => { setFilter(f); setExpanded(null); }}
            className={`px-3 py-1.5 text-xs font-mono border transition-colors capitalize ${filter === f ? "bg-accent border-accent text-white" : "border-line text-bone/60 hover:border-bone/40"}`}
          >
            {f === "all" ? `All (${DEMO_COMPANIES.length})` : `${f === "active" ? "Active" : f === "pending" ? "Pending" : "Potential"} (${DEMO_COMPANIES.filter(c => c.status === f).length})`}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        {filtered.map((co) => (
          <div key={co.id} className={`border transition-colors ${expanded === co.id ? "border-accent" : "border-line hover:border-bone/30"}`}>
            <button
              className="w-full text-left px-5 py-4 flex items-start justify-between gap-4"
              onClick={() => setExpanded(expanded === co.id ? null : co.id)}
            >
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-1">
                  <span className="h-display text-bone text-base">{co.sector}</span>
                  <span className={`text-[10px] font-mono px-2 py-0.5 ${statusStyle(co.status as CompanyStatus)}`}>{statusLabel(co.status as CompanyStatus)}</span>
                </div>
                <p className="text-bone/55 text-sm">{co.harm}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-bone/30 text-xs font-mono hidden sm:block">{co.id}</span>
                <span className="text-accent font-mono text-sm">{expanded === co.id ? "▲" : "▼"}</span>
              </div>
            </button>
            {expanded === co.id && (
              <div className="px-5 pb-5 border-t border-line/50">
                <div className="grid sm:grid-cols-3 gap-4 mt-4 mb-4 text-sm">
                  <div><p className="text-bone/40 text-xs font-mono uppercase tracking-widest mb-1">Category</p><p className="text-bone/80">{co.category}</p></div>
                  <div><p className="text-bone/40 text-xs font-mono uppercase tracking-widest mb-1">Est. Claimants</p><p className="text-bone/80">{co.claimants}</p></div>
                  <div><p className="text-bone/40 text-xs font-mono uppercase tracking-widest mb-1">Record ID</p><p className="text-bone/80 font-mono">{co.id}</p></div>
                </div>
                <p className="text-bone/65 text-sm leading-relaxed">{co.notes}</p>
                <p className="text-bone/35 text-xs mt-3">Demo data — illustrative only. Not a statement of fact or legal opinion about any specific company or proceeding.</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   EVIDENCE VAULT VIEW
───────────────────────────────────────────────────────────────────────────── */

function EvidenceView() {
  const [selectedCat, setSelectedCat] = useState("");
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);
  const [checkedItems, setCheckedItems] = useState<Set<string>>(new Set());
  const fileRef = useRef<HTMLInputElement>(null);

  const allCategories = [
    ...LEGAL_CATEGORIES.map((c) => ({ slug: c.slug, name: c.name })),
    ...CLASS_ACTION_CATEGORIES.filter((c) => !LEGAL_CATEGORIES.find((l) => l.slug === c.slug)).map((c) => ({ slug: c.slug, name: c.name })),
  ];

  const checklist = selectedCat
    ? (EVIDENCE_CHECKLISTS[selectedCat] ?? DEFAULT_CHECKLIST)
    : null;

  const totalItems = checklist?.reduce((n, g) => n + g.items.length, 0) ?? 0;
  const pct = totalItems > 0 ? Math.round((checkedItems.size / totalItems) * 100) : 0;

  const toggleItem = (item: string) =>
    setCheckedItems((prev) => { const s = new Set(prev); s.has(item) ? s.delete(item) : s.add(item); return s; });

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const names = Array.from(e.target.files ?? []).map((f) => f.name);
    setUploadedFiles((prev) => [...prev, ...names]);
    e.target.value = "";
  };

  return (
    <div>
      <p className="eyebrow mb-4">Evidence Vault</p>
      <h2 className="h-display text-bone text-2xl md:text-3xl mb-3">Know exactly what to gather.</h2>
      <p className="text-bone/65 text-sm mb-8 max-w-2xl">Select your harm category to receive a tailored evidence checklist. Check off what you have — then upload your documents to build your attorney-ready package.</p>

      {/* Category selector */}
      <div className="mb-8 max-w-md">
        <label className="block mb-2">Select your harm category</label>
        <select value={selectedCat} onChange={(e) => { setSelectedCat(e.target.value); setCheckedItems(new Set()); }}>
          <option value="">— Choose a category —</option>
          <optgroup label="Active Reporting Pathways">
            {LEGAL_CATEGORIES.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </optgroup>
          <optgroup label="Class Action Categories">
            {CLASS_ACTION_CATEGORIES.filter((c) => !LEGAL_CATEGORIES.find((l) => l.slug === c.slug)).map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}
          </optgroup>
        </select>
      </div>

      {checklist && (
        <div className="grid md:grid-cols-2 gap-8">
          {/* Checklist */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="eyebrow">Your Evidence Checklist</p>
              <span className="text-accent font-mono text-sm">{checkedItems.size}/{totalItems} collected</span>
            </div>
            {/* Progress bar */}
            <div className="h-1.5 bg-[#151515] border border-line mb-6">
              <div className="h-full bg-accent transition-all duration-300" style={{ width: `${pct}%` }} />
            </div>
            <div className="space-y-5">
              {checklist.map((group) => (
                <div key={group.group}>
                  <p className="text-bone/40 text-xs font-mono uppercase tracking-widest mb-2">{group.group}</p>
                  <div className="space-y-2">
                    {group.items.map((item) => (
                      <label key={item} className="flex items-start gap-3 cursor-pointer group">
                        <span
                          onClick={() => toggleItem(item)}
                          className={`shrink-0 mt-0.5 w-4 h-4 border flex items-center justify-center transition-colors ${checkedItems.has(item) ? "bg-accent border-accent text-white text-[10px]" : "border-line group-hover:border-accent"}`}
                        >
                          {checkedItems.has(item) && "✓"}
                        </span>
                        <span className={`text-sm leading-snug transition-colors ${checkedItems.has(item) ? "text-bone/40 line-through" : "text-bone/75"}`}>{item}</span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Upload */}
          <div>
            <p className="eyebrow mb-4">Upload Documents</p>
            <div
              className="border-2 border-dashed border-line hover:border-accent transition-colors p-8 text-center cursor-pointer mb-4"
              onClick={() => fileRef.current?.click()}
            >
              <p className="text-bone/50 text-sm mb-1">Click to select files</p>
              <p className="text-bone/30 text-xs">PDF, JPG, PNG, DOCX accepted · Demo only</p>
              <input ref={fileRef} type="file" multiple className="hidden" onChange={handleFiles} accept=".pdf,.jpg,.jpeg,.png,.docx,.doc" />
            </div>

            {uploadedFiles.length > 0 && (
              <div className="space-y-2 mb-4">
                <p className="text-bone/40 text-xs font-mono uppercase tracking-widest mb-2">Staged Documents</p>
                {uploadedFiles.map((f, i) => (
                  <div key={i} className="flex items-center gap-3 px-3 py-2 border border-line bg-[#0d0d0d]">
                    <span className="text-accent font-mono text-xs">✓</span>
                    <span className="text-bone/70 text-sm flex-1 truncate">{f}</span>
                    <button onClick={() => setUploadedFiles((p) => p.filter((_, j) => j !== i))} className="text-bone/25 hover:text-accent text-xs font-mono transition-colors">✕</button>
                  </div>
                ))}
              </div>
            )}

            <div className="card bg-accent/5 border-accent/20 mt-4">
              <p className="text-accent font-mono text-xs uppercase tracking-widest mb-2">Demo Mode</p>
              <p className="text-bone/60 text-xs leading-relaxed">In the live platform, uploaded documents are encrypted, stored securely, and organized into an attorney-ready package. Secure storage and handoff are planned features.</p>
            </div>

            {selectedCat && LEGAL_CATEGORIES.find(c => c.slug === selectedCat) && (
              <Link href={`/legal/categories/${selectedCat}`} className="btn-primary text-xs inline-flex mt-5">
                File a Report for This Category →
              </Link>
            )}
          </div>
        </div>
      )}

      {!checklist && (
        <div className="card border-dashed border-line/50 text-center py-12">
          <p className="text-bone/40 text-sm">Select a harm category above to see your evidence checklist.</p>
        </div>
      )}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   EDUCATION VIEW
───────────────────────────────────────────────────────────────────────────── */

function EducationView() {
  const [expanded, setExpanded] = useState<number | null>(null);

  const modules = [
    {
      title: "How to Talk to a Legal Partner",
      content: [
        "Prepare a one-page written summary before you call or meet — who did what, when, and what you lost. Attorneys bill by time; arriving organized means they can help you faster.",
        "Bring every document you have, organized by date. Even if you think something is irrelevant, bring it. Attorneys decide what matters.",
        "Write down your questions before the meeting. Prioritize them — the most urgent first. You may not get to all of them.",
        "Ask for a clear explanation of next steps and timelines at the end of every meeting. Get it in writing or email.",
        "If you are working with a public defender or legal aid attorney, understand their caseload is high. Communicate in writing so there is a record. Follow up if you don't hear back.",
      ],
    },
    {
      title: "What to Bring to Your First Attorney Meeting",
      content: [
        "Government-issued ID.",
        "All documents related to the harm — bills, contracts, denial letters, pay stubs, texts, emails.",
        "A written timeline: dates → events → who was involved → dollar amounts.",
        "Names, addresses, and contact information of all parties involved.",
        "Any prior complaints you filed (FTC, CFPB, EEOC, state AG, BBB).",
        "Questions written out — what do you want to know? What do you need to decide?",
        "Realistic expectations: a first meeting is an evaluation, not a commitment.",
      ],
    },
    {
      title: "Understanding Class Actions vs. Individual Claims",
      content: [
        "A class action groups many people harmed in the same way by the same defendant into a single case. It is efficient for widespread but individually small harms.",
        "Individual settlements from class actions are often small. The value is in forcing systemic change and covering legal costs that would be prohibitive for one person.",
        "You can opt out of a class action and pursue an individual claim if your harm is substantially larger than others. Consult an attorney before opting out.",
        "Class action attorneys typically work on contingency — no fee unless there is a recovery. This makes them selective about what cases they take.",
        "Public documentation through platforms like this one helps build the pattern evidence attorneys need to determine if a class action is viable.",
      ],
    },
    {
      title: "How to Read a Denial Letter",
      content: [
        "Find the reason code. Insurance and financial denials include a code that maps to a specific reason. Look it up — it tells you exactly what basis they used.",
        "Look for the appeal deadline. Most denials have a hard deadline for appeals (often 30–180 days). Missing it can extinguish your rights.",
        "Check if the denial cites a specific policy provision. Request a copy of that exact provision in writing.",
        "If the denial is insurance-related: request an internal appeal first, then escalate to your state insurance commissioner.",
        "Keep every denial letter. They are primary evidence in any subsequent claim or legal action.",
      ],
    },
    {
      title: "Statutes of Limitations — Why Deadlines Matter",
      content: [
        "Every legal claim has a deadline — a statute of limitations — after which the claim cannot be brought. These vary by state, claim type, and defendant.",
        "Common timelines: consumer fraud 2–4 years; wage claims 2–3 years; housing discrimination 1–2 years; medical billing varies. These are starting points — verify with an attorney.",
        "The clock typically starts when the harm occurred or when you reasonably discovered it. Document when you first learned of the harm.",
        "Filing a complaint with a government agency (EEOC, CFPB, FTC) may toll (pause) the statute of limitations for some claims.",
        "If you are approaching a deadline, consult an attorney immediately. Do not wait for more documents or clarity.",
      ],
    },
    {
      title: "Participating in Public Action Education",
      content: [
        "Your documented report — anonymized — contributes to a regional and national dataset on harm patterns.",
        "When enough reports cluster around a single actor or practice, patterns are routed to enforcement agencies and legal partners.",
        "You do not have to pursue individual legal action to make your report matter. Pattern documentation is itself public interest work.",
        "Quarterly Transparency Reports publish aggregate data on report volumes, categories, and routing outcomes.",
        "Staying engaged — checking back on your tracking number, responding to follow-up questions — strengthens the pattern documentation.",
      ],
    },
  ];

  return (
    <div>
      <p className="eyebrow mb-4">Legal Education</p>
      <h2 className="h-display text-bone text-2xl md:text-3xl mb-3">Know your rights. Prepare to act.</h2>
      <p className="text-bone/65 text-sm mb-8 max-w-2xl">Plain-language education modules covering how to work with legal partners, understand your options, and build the strongest possible documentation before you ever speak to an attorney.</p>

      <div className="space-y-2">
        {modules.map((m, i) => (
          <div key={i} className={`border transition-colors ${expanded === i ? "border-accent" : "border-line hover:border-bone/30"}`}>
            <button
              className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
              onClick={() => setExpanded(expanded === i ? null : i)}
            >
              <span className="h-display text-bone text-base">{m.title}</span>
              <span className="text-accent font-mono text-sm shrink-0">{expanded === i ? "▲" : "▼"}</span>
            </button>
            {expanded === i && (
              <div className="px-5 pb-5 border-t border-line/50">
                <ul className="mt-4 space-y-3">
                  {m.content.map((item, j) => (
                    <li key={j} className="flex gap-3 text-bone/75 text-sm leading-relaxed">
                      <span className="text-accent font-mono shrink-0 mt-0.5">·</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-10 grid sm:grid-cols-2 gap-4">
        <div className="card border-l-2 border-accent">
          <p className="eyebrow mb-3">External Resources</p>
          <ul className="space-y-2 text-sm text-bone/70">
            {[
              ["Consumer Financial Protection Bureau", "consumerfinance.gov"],
              ["Federal Trade Commission Complaints", "reportfraud.ftc.gov"],
              ["EEOC — Workplace Discrimination", "eeoc.gov"],
              ["HUD — Housing Discrimination", "hud.gov/fairhousing"],
              ["State AG Offices — Consumer Protection", "naag.org"],
            ].map(([name, url]) => (
              <li key={url} className="flex gap-2 items-baseline">
                <span className="text-accent shrink-0">·</span>
                <span>{name} <span className="text-bone/35 font-mono text-xs">— {url}</span></span>
              </li>
            ))}
          </ul>
        </div>
        <div className="card">
          <p className="eyebrow mb-3">Disclaimer</p>
          <p className="text-bone/60 text-sm leading-relaxed mb-3">Everything in this education section is general public-interest information. It is not legal advice, does not create an attorney-client relationship, and does not guarantee any outcome.</p>
          <p className="text-bone/40 text-xs">For urgent matters or approaching deadlines, contact a licensed attorney immediately. For life-threatening emergencies, call 911.</p>
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   CAMPAIGNS VIEW
───────────────────────────────────────────────────────────────────────────── */

function CampaignsView() {
  const [enrollingId, setEnrollingId] = useState<number | null>(null);
  const [enrolledIds, setEnrolledIds] = useState<Set<number>>(new Set());
  const [form, setForm] = useState({ name: "", email: "", note: "" });

  const [showNewForm, setShowNewForm] = useState(false);
  const [newReq, setNewReq] = useState({ name: "", email: "", category: "", description: "" });
  const [newSubmitted, setNewSubmitted] = useState(false);

  const handleEnroll = (id: number) => {
    if (!form.name.trim() || !form.email.trim()) return;
    setEnrolledIds((prev) => new Set([...prev, id]));
    setEnrollingId(null);
    setForm({ name: "", email: "", note: "" });
  };

  const handleNewRequest = () => {
    if (!newReq.name.trim() || !newReq.email.trim() || !newReq.description.trim()) return;
    setNewSubmitted(true);
  };

  return (
    <div>
      <p className="eyebrow mb-4">Open Campaigns</p>
      <h2 className="h-display text-bone text-2xl md:text-3xl mb-3">Join the people already documenting.</h2>
      <p className="text-bone/65 text-sm mb-8 max-w-2xl">Enroll in an active campaign to add your documentation to the pattern record. The more reports in a campaign, the stronger the case for enforcement and legal routing.</p>

      <div className="space-y-4 mb-12">
        {DEMO_CAMPAIGNS.map((c) => (
          <div key={c.id} className="card">
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="h-display text-bone text-lg">{c.name}</h3>
                  <span className="text-[10px] font-mono px-2 py-0.5 bg-accent/15 text-accent border border-accent/30">Open</span>
                </div>
                <p className="text-accent font-mono text-xs mb-2">{c.category}</p>
                <p className="text-bone/65 text-sm leading-relaxed mb-3">{c.description}</p>
                <div className="flex flex-wrap gap-6 text-xs text-bone/40 font-mono">
                  <span>{c.enrolled.toLocaleString()} enrolled</span>
                  <span>Goal: {c.goal}</span>
                </div>
                {/* Enrollment progress */}
                <div className="mt-3 h-1 bg-[#151515] border border-line w-full max-w-xs">
                  <div className="h-full bg-accent" style={{ width: `${Math.min(100, Math.round((c.enrolled / parseInt(c.goal.replace(/\D/g, ""))) * 100))}%` }} />
                </div>
              </div>
              <div className="shrink-0">
                {enrolledIds.has(c.id) ? (
                  <span className="text-accent font-mono text-sm flex items-center gap-2">✓ Enrolled</span>
                ) : enrollingId === c.id ? (
                  <div className="w-64 space-y-3">
                    <input placeholder="Your name" value={form.name} onChange={(e) => setForm(p => ({ ...p, name: e.target.value }))} className="text-sm" />
                    <input type="email" placeholder="Email" value={form.email} onChange={(e) => setForm(p => ({ ...p, email: e.target.value }))} className="text-sm" />
                    <textarea placeholder="Brief note (optional)" rows={2} value={form.note} onChange={(e) => setForm(p => ({ ...p, note: e.target.value }))} className="text-sm" />
                    <div className="flex gap-2">
                      <button onClick={() => setEnrollingId(null)} className="btn-secondary text-xs flex-1 justify-center">Cancel</button>
                      <button onClick={() => handleEnroll(c.id)} disabled={!form.name.trim() || !form.email.trim()} className="btn-primary text-xs flex-1 justify-center disabled:opacity-40">Enroll →</button>
                    </div>
                  </div>
                ) : (
                  <button onClick={() => setEnrollingId(c.id)} className="btn-primary text-xs">
                    Enroll in Campaign →
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Request new campaign */}
      <div className="border-t border-line pt-10">
        <p className="eyebrow mb-4">Request a New Campaign</p>
        <h3 className="h-display text-bone text-2xl mb-3">Don&apos;t see your situation covered?</h3>
        <p className="text-bone/65 text-sm mb-6 max-w-2xl">If you have experienced or witnessed a pattern of harm not covered by an existing campaign, request help documenting it. Reviewers evaluate whether a pattern meets the threshold for a new campaign.</p>

        {newSubmitted ? (
          <div className="card border-accent/30 bg-accent/5">
            <p className="eyebrow mb-2">Request Received</p>
            <p className="text-bone/75 leading-relaxed text-sm">Your campaign request has been submitted. A reviewer will evaluate the pattern and reach out within 7–10 business days. If the pattern meets threshold, we will open a campaign and notify you.</p>
          </div>
        ) : (
          <div className="max-w-xl space-y-4">
            {!showNewForm ? (
              <button onClick={() => setShowNewForm(true)} className="btn-secondary">
                Request Help Starting a Campaign →
              </button>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div><label>Your name</label><input value={newReq.name} onChange={(e) => setNewReq(p => ({ ...p, name: e.target.value }))} placeholder="Name or alias" /></div>
                  <div><label>Email</label><input type="email" value={newReq.email} onChange={(e) => setNewReq(p => ({ ...p, email: e.target.value }))} placeholder="you@example.com" /></div>
                </div>
                <div>
                  <label>Harm category (closest match)</label>
                  <select value={newReq.category} onChange={(e) => setNewReq(p => ({ ...p, category: e.target.value }))}>
                    <option value="">— Select —</option>
                    {CLASS_ACTION_CATEGORIES.map((c) => <option key={c.slug} value={c.name}>{c.name}</option>)}
                    <option value="other">Other / Not listed</option>
                  </select>
                </div>
                <div>
                  <label>Describe the pattern — who did what, to how many people, and what the harm was</label>
                  <textarea rows={5} value={newReq.description} onChange={(e) => setNewReq(p => ({ ...p, description: e.target.value }))} placeholder="Be specific. Include company names if known, approximate dates, and the nature of the harm." />
                </div>
                <div className="flex gap-3">
                  <button onClick={() => setShowNewForm(false)} className="btn-secondary text-sm">Cancel</button>
                  <button
                    disabled={!newReq.name.trim() || !newReq.email.trim() || !newReq.description.trim()}
                    onClick={handleNewRequest}
                    className="btn-primary text-sm disabled:opacity-40 disabled:cursor-not-allowed"
                  >
                    Submit Request →
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────────────────────────── */

export default function LegalDemoPage() {
  const [view, setView] = useState<View>("hub");

  return (
    <>
      {/* Demo banner */}
      <div className="bg-accent/10 border-b border-accent/30">
        <div className="container-x py-2.5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="tag" style={{ borderColor: "#E11D2E", color: "#E11D2E" }}>Interactive Demo</span>
            <p className="text-bone/70 text-xs">Public Action Network · Not legal advice · For demonstration purposes</p>
          </div>
          <Link href="/legal" className="text-bone/50 hover:text-accent text-xs font-mono transition-colors">
            ← Back to Public Action
          </Link>
        </div>
      </div>

      {/* Sticky tab nav */}
      <nav className="sticky top-14 z-40 bg-[#080808] border-b border-line">
        <div className="container-x">
          <div className="flex overflow-x-auto scrollbar-hide">
            {VIEWS.map((v) => (
              <button
                key={v.id}
                onClick={() => setView(v.id)}
                className={`px-4 py-3.5 text-xs font-mono uppercase tracking-widest whitespace-nowrap border-b-2 transition-colors ${
                  view === v.id
                    ? "border-accent text-accent"
                    : "border-transparent text-bone/50 hover:text-bone/80"
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container-x py-14 md:py-18">
        {view === "hub"       && <HubView onNav={setView} />}
        {view === "search"    && <SearchView />}
        {view === "companies" && <CompaniesView />}
        {view === "evidence"  && <EvidenceView />}
        {view === "education" && <EducationView />}
        {view === "campaigns" && <CampaignsView />}
      </div>

      {/* Bottom disclaimer */}
      <div className="border-t border-line">
        <div className="container-x py-6">
          <p className="text-bone/30 text-xs max-w-4xl leading-relaxed">
            Evolve8 Enterprises is not a law firm. The Public Action Network is public-interest documentation and education — not legal advice. Filing a report does not create an attorney-client relationship. Class action eligibility, legal outcomes, and settlements are not guaranteed. All company and campaign data shown in this demo is illustrative. For urgent legal matters or approaching deadlines, contact a licensed attorney immediately.
            {" "}<Link href="/legal/disclaimer" className="text-accent/60 hover:text-accent underline">Full disclaimer →</Link>
          </p>
        </div>
      </div>
    </>
  );
}
