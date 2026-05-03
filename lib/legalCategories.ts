export type LegalCategory = {
  slug: string;
  name: string;
  short: string;
  description: string;
  examples: string[];
};

export const LEGAL_CATEGORIES: LegalCategory[] = [
  {
    slug: "wage-theft",
    name: "Wage Theft & Hour Abuse",
    short: "Unpaid wages, off-the-clock work, tip skimming, misclassified contractor status.",
    description:
      "Document missing pay, unpaid overtime, stolen tips, working off-the-clock, and 1099 misclassification. We collect structured timelines, employer details, and pay stub patterns; reviewers triage and route documented patterns to enforcement partners.",
    examples: [
      "Off-the-clock prep, close-down, or training",
      "Tips redistributed to non-tipped staff",
      "Contractor status used to avoid overtime",
      "Final paycheck withheld after termination",
    ],
  },
  {
    slug: "denied-medical-claims",
    name: "Denied Medical Claims",
    short: "Insurance denials, surprise bills, unexplained out-of-network charges, retroactive denials.",
    description:
      "Document denied claims, surprise bills, balance billing, prior authorization games, and retroactive denials. Insurance opacity is a primary driver of medical bankruptcy in the U.S. We help families gather paperwork, request itemized statements, and escalate.",
    examples: [
      "Denied prior authorization for medication",
      "Out-of-network ER bill at an in-network hospital",
      "Itemized billing not provided after request",
      "Retroactive coverage cancellation",
    ],
  },
  {
    slug: "predatory-debt",
    name: "Predatory Debt",
    short: "Payday loans, installment traps, junk-fee credit cards, debt-collector abuse.",
    description:
      "Document predatory lending, junk fees, debt collector violations of the FDCPA, and abusive collection tactics. We collect contracts, statements, and call records to identify pattern violations.",
    examples: [
      "Payday or title loan with effective APR over 100%",
      "Debt collector calling outside legal hours",
      "Threatened arrest or legal action for civil debt",
      "Junk fees never disclosed at signup",
    ],
  },
  {
    slug: "eviction-housing",
    name: "Eviction & Housing Abuse",
    short: "Illegal eviction, deposit theft, habitability failures, retaliation.",
    description:
      "Document illegal evictions, withheld security deposits, retaliation for repair requests, and habitability violations. Texas tenant law has specific timelines and notice requirements; we help families build the paper trail.",
    examples: [
      "Self-help eviction (locks changed, utilities cut)",
      "Security deposit withheld without itemized list",
      "No response to written repair requests",
      "Eviction filed after a tenant complaint",
    ],
  },
  {
    slug: "identity-theft",
    name: "Identity Theft",
    short: "Stolen identity, fraudulent accounts, synthetic identity, child SSN misuse.",
    description:
      "Document stolen identity, synthetic identity fraud, fraudulent accounts opened in your name, and child SSN misuse. We help families file FTC reports, freeze credit, and build the documentation trail.",
    examples: [
      "Account opened with your SSN you did not authorize",
      "IRS rejected your tax return — already filed",
      "Child's credit report shows existing accounts",
      "Bank refuses to remove fraudulent charges",
    ],
  },
  {
    slug: "algorithmic-discrimination",
    name: "Algorithmic Discrimination",
    short: "Hiring algorithms, tenant scoring, credit scoring, insurance pricing bias.",
    description:
      "Document discriminatory outcomes from automated systems — hiring algorithms, tenant screening, credit decisioning, insurance pricing. Federal and state agencies are actively building enforcement; structured documentation is the foundation.",
    examples: [
      "Auto-rejected by hiring software with no human review",
      "Tenant screening flagged you for an unrelated record",
      "Credit denied with no specific reason given",
      "Insurance premium spike with no claim history",
    ],
  },
  {
    slug: "consumer-fraud",
    name: "Consumer Fraud & Scams",
    short: "Online marketplace fraud, fake services, deceptive billing, subscription traps.",
    description:
      "Document marketplace scams, deceptive billing, dark-pattern subscription traps, and false advertising. Pattern reporting helps regulators and platform safety teams act.",
    examples: [
      "Platform refused refund after receiving counterfeit item",
      "Auto-renewed subscription with hidden cancellation flow",
      "Service performed nothing like the listing",
      "Deceptive 'free trial' converted without consent",
    ],
  },
  {
    slug: "auto-insurance-abuse",
    name: "Auto & Insurance Abuse",
    short: "Totaled-vehicle valuation games, denied claims, lemon-law issues, dealer fraud.",
    description:
      "Document insurance valuation abuse on totaled vehicles, denied auto claims, dealer financing fraud, and lemon-law issues. Texas Lemon Law has specific timelines we help track.",
    examples: [
      "Totaled vehicle valued far below comparable sales",
      "Dealer added unwanted add-ons to financing",
      "Claim denied citing pre-existing damage with no proof",
      "Repeated repairs for the same defect under warranty",
    ],
  },
  {
    slug: "elder-financial-abuse",
    name: "Elder Financial Abuse",
    short: "Caregiver theft, scam targeting, exploitation by family or fiduciaries.",
    description:
      "Document financial abuse against older adults — caregiver theft, scams, fiduciary breaches, and undue influence. Many states require mandatory reporting; we help families understand timelines and route reports to APS.",
    examples: [
      "Caregiver added as joint account holder without consent",
      "Targeted by gift-card or imposter scam",
      "POA abused to transfer assets",
      "Reverse mortgage proceeds redirected",
    ],
  },
  {
    slug: "child-safety",
    name: "Child Safety & School Discipline",
    short: "School discipline disparities, IEP failures, bullying with no remedy, restraint abuse.",
    description:
      "Document school discipline disparities, denied IEP services, ignored bullying, and restraint or seclusion incidents. Structured documentation helps families and advocates pursue Section 504 and IDEA remedies.",
    examples: [
      "School failed to follow IEP",
      "Disciplinary action without documented cause",
      "Restraint or seclusion incident",
      "Bullying reports closed without action",
    ],
  },
  {
    slug: "workplace-harassment",
    name: "Workplace Harassment & Retaliation",
    short: "Harassment, retaliation after complaint, hostile work environment, unsafe conditions.",
    description:
      "Document harassment, retaliation after a complaint, hostile work environment, and OSHA-relevant unsafe conditions. EEOC and state agencies have strict timelines we help families meet.",
    examples: [
      "Demotion or schedule change after complaint",
      "Pattern of pretextual write-ups",
      "Unsafe equipment with documented prior reports",
      "Sex, race, age, or disability hostile environment",
    ],
  },
  {
    slug: "utility-internet-abuse",
    name: "Utility & Internet Abuse",
    short: "Hidden fees, shutoffs without notice, ISP throttling, billing errors.",
    description:
      "Document utility shutoffs without proper notice, ISP throttling, hidden fees, and billing errors. Texas PUC and FCC have specific complaint pathways.",
    examples: [
      "Shutoff during medical hardship without notice",
      "ISP throttling specific apps or services",
      "Hidden 'regulatory recovery' fees",
      "Estimated bills inflated above actual usage",
    ],
  },
];
