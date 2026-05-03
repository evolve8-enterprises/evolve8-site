export type Question = {
  id: string;
  page: string;
  prompt: string;
  subtext?: string;
  type: "select" | "multi";
  options: { value: string; label: string; detail?: string }[];
  optional?: boolean;
};

export const QUESTIONS: Question[] = [
  // Page A — Household
  {
    id: "A2", page: "Household", type: "select",
    prompt: "How many people are in your household?",
    options: [
      { value: "1", label: "Just me" },
      { value: "2", label: "2 people" },
      { value: "3-4", label: "3 to 4 people" },
      { value: "5+", label: "5 or more people" },
    ],
  },
  {
    id: "A3", page: "Household", type: "select",
    prompt: "Are there children under 18 in your household?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "na", label: "Prefer not to say" },
    ],
  },
  {
    id: "A4", page: "Household", type: "select",
    prompt: "Are there adults 65 or older in your household?",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
      { value: "na", label: "Prefer not to say" },
    ],
  },

  // Page B — Income & Work
  {
    id: "B1", page: "Income & Work", type: "select",
    prompt: "What best describes your primary source of income?",
    options: [
      { value: "healthcare", label: "Healthcare / medicine" },
      { value: "education", label: "Education / teaching" },
      { value: "retail", label: "Retail / customer service" },
      { value: "food_service", label: "Food service / hospitality" },
      { value: "manual_trades", label: "Skilled trades (electrical, plumbing, HVAC, construction)" },
      { value: "knowledge_work", label: "Knowledge work / office / admin" },
      { value: "software", label: "Software / tech / engineering" },
      { value: "government", label: "Government / public sector" },
      { value: "transportation", label: "Transportation / logistics / delivery" },
      { value: "creative", label: "Creative / media / marketing" },
      { value: "agriculture", label: "Agriculture / food production" },
      { value: "other", label: "Other / self-employed / multiple sources" },
    ],
  },
  {
    id: "B2", page: "Income & Work", type: "select",
    prompt: "How at risk is your primary work from AI or automation over the next 5 years?",
    subtext: "Be honest — this only affects your score.",
    options: [
      { value: "1", label: "Very low — hard to automate, hands-on or relationship-intensive" },
      { value: "2", label: "Low — mostly protected but some tasks could be automated" },
      { value: "3", label: "Moderate — some of my work could be automated, some can't" },
      { value: "4", label: "High — most of my tasks could be done by AI in 5 years" },
      { value: "5", label: "Very high — I am already seeing AI do what I do" },
    ],
  },
  {
    id: "B3", page: "Income & Work", type: "select",
    prompt: "If you lost your main income today, how long could your household survive financially without borrowing?",
    options: [
      { value: "none", label: "Not at all — I'm already behind" },
      { value: "lt1", label: "Less than a month" },
      { value: "1-3", label: "1 to 3 months" },
      { value: "3-6", label: "3 to 6 months" },
      { value: "6-12", label: "6 to 12 months" },
      { value: "12+", label: "Over a year" },
    ],
  },
  {
    id: "B4", page: "Income & Work", type: "select",
    prompt: "Do you have a skill or service you could sell independently — without going through an employer or platform?",
    options: [
      { value: "none", label: "No — I have no secondary income capability right now" },
      { value: "sometimes", label: "Sometimes — I've done it but not reliably" },
      { value: "regularly", label: "Yes — I could make real income from it if I had to" },
    ],
  },
  {
    id: "B5", page: "Income & Work", type: "select",
    prompt: "Over the last two years, how have your wages or income compared to your actual cost of living?",
    options: [
      { value: "falling", label: "Falling behind — my bills go up faster than my income" },
      { value: "flat", label: "Flat — I'm treading water, not getting ahead" },
      { value: "slightly_ahead", label: "Slightly ahead — I'm making progress, but slowly" },
      { value: "clearly_ahead", label: "Clearly ahead — my income is comfortably outpacing costs" },
    ],
  },
  {
    id: "B6", page: "Income & Work", type: "select",
    prompt: "Have you taken any AI literacy, coding, or tech-readiness courses in the last 12 months?",
    subtext: "Includes free online courses, YouTube series, coding bootcamps, or workplace training.",
    options: [
      { value: "no", label: "No — I haven't started" },
      { value: "considering", label: "I'm considering it but haven't started" },
      { value: "started", label: "Yes — I've started something" },
      { value: "active", label: "Yes — I'm actively building AI-era skills" },
    ],
  },
  {
    id: "B7", page: "Income & Work", type: "select",
    prompt: "Which best describes what you need most from your work situation right now?",
    options: [
      { value: "stable", label: "Stability — I need my current income to stay intact" },
      { value: "ai_resistant", label: "Protection — I need skills that AI cannot replace" },
      { value: "independent", label: "Independence — I need income I own and control" },
      { value: "reskill", label: "Reskilling — I need to move into a new field entirely" },
      { value: "multiple", label: "All of the above — I am in full transition" },
    ],
  },

  // Page C — Food & Water
  {
    id: "C1", page: "Food & Water", type: "select",
    prompt: "If every grocery store within 25 miles closed today, how many days could your household eat?",
    subtext: "Count what you have at home right now — no projections.",
    options: [
      { value: "0-1", label: "0 to 1 day" },
      { value: "2-3", label: "2 to 3 days" },
      { value: "4-7", label: "4 to 7 days" },
      { value: "8-14", label: "1 to 2 weeks" },
      { value: "15+", label: "More than 2 weeks" },
    ],
  },
  {
    id: "C2", page: "Food & Water", type: "select",
    prompt: "Do you grow, raise, or preserve any of your own food?",
    options: [
      { value: "none", label: "No — I rely entirely on stores" },
      { value: "herbs", label: "Herbs or small plants only" },
      { value: "vegetables", label: "A real garden or container farm" },
      { value: "significant", label: "Significant — garden, animals, or preserved food production" },
    ],
  },
  {
    id: "C3", page: "Food & Water", type: "select",
    prompt: "Do you have backup water stored for your household if the tap became unsafe or unavailable?",
    subtext: "FEMA recommends 1 gallon per person per day for at least 14 days.",
    options: [
      { value: "no", label: "No" },
      { value: "partial", label: "Partial — some but not enough for 14 days" },
      { value: "yes", label: "Yes — 14+ days for everyone in my household" },
    ],
  },
  {
    id: "C4", page: "Food & Water", type: "select",
    prompt: "Do you know how to filter or purify water in an emergency?",
    options: [
      { value: "no", label: "No" },
      { value: "somewhat", label: "Somewhat — I know the concept but haven't practiced" },
      { value: "yes", label: "Yes — I know and have the tools to do it" },
    ],
  },
  {
    id: "C5", page: "Food & Water", type: "select",
    prompt: "Do you have access to a local farm, food co-op, community garden, or direct food source outside of grocery stores?",
    options: [
      { value: "no", label: "No — grocery stores are my only option" },
      { value: "aware", label: "I'm aware of options but haven't used them" },
      { value: "occasional", label: "Yes — I use local sources occasionally" },
      { value: "regular", label: "Yes — this is a regular part of how I source food" },
    ],
  },

  // Page D — Housing & Debt
  {
    id: "D1", page: "Housing & Debt", type: "select",
    prompt: "What is your current housing situation?",
    options: [
      { value: "renting", label: "Renting — I could be asked to leave or have rent raised" },
      { value: "mortgaged", label: "Mortgaged — I own it but still owe the bank" },
      { value: "owned", label: "Owned outright — no mortgage" },
      { value: "temporary", label: "Temporary, shared, or unstable housing" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "D2", page: "Housing & Debt", type: "select",
    prompt: "What percentage of your monthly take-home income goes to rent or mortgage?",
    options: [
      { value: "lt25", label: "Under 25%" },
      { value: "25-35", label: "25% to 35%" },
      { value: "35-45", label: "35% to 45% — above the recommended threshold" },
      { value: "45-55", label: "45% to 55% — significantly stretched" },
      { value: "55+", label: "Over 55% — housing is consuming most of my income" },
    ],
  },
  {
    id: "D3", page: "Housing & Debt", type: "select",
    prompt: "How much non-mortgage debt do you carry (credit cards, car loans, student loans, personal loans)?",
    subtext: "Express as a multiple of your monthly income.",
    options: [
      { value: "none", label: "None" },
      { value: "lt1", label: "Less than 1 month's income" },
      { value: "1-3", label: "1 to 3 months' income" },
      { value: "3-6", label: "3 to 6 months' income" },
      { value: "6+", label: "More than 6 months' income" },
    ],
  },
  {
    id: "D4", page: "Housing & Debt", type: "select",
    prompt: "Have you accumulated medical debt, or delayed necessary care because of cost, in the last 24 months?",
    options: [
      { value: "no", label: "No" },
      { value: "some", label: "Some — a smaller issue I am managing" },
      { value: "significant", label: "Significant — it's a real burden or I've avoided necessary care" },
    ],
  },
  {
    id: "D5", page: "Housing & Debt", type: "select",
    prompt: "Are you actively pursuing any path to land ownership, land access, or property acquisition?",
    options: [
      { value: "no", label: "No — I haven't thought about it seriously" },
      { value: "considering", label: "I've thought about it but haven't started" },
      { value: "exploring", label: "Yes — I'm actively researching or have applied" },
      { value: "acquired", label: "Yes — I have land or property already" },
    ],
  },

  // Page E — Health & Medical
  {
    id: "E1", page: "Health & Medical", type: "select",
    prompt: "What is your current health insurance situation?",
    options: [
      { value: "employer", label: "Employer-sponsored insurance" },
      { value: "marketplace", label: "ACA marketplace plan" },
      { value: "medicaid", label: "Medicaid or Medicare" },
      { value: "va", label: "VA coverage" },
      { value: "none", label: "No insurance — uninsured" },
      { value: "other", label: "Other" },
    ],
  },
  {
    id: "E2", page: "Health & Medical", type: "select",
    prompt: "In the last year, did you delay, skip, or ration medication or treatment because of cost?",
    options: [
      { value: "no", label: "No" },
      { value: "once", label: "Once or twice" },
      { value: "multiple", label: "Multiple times — this is an ongoing issue" },
    ],
  },
  {
    id: "E3", page: "Health & Medical", type: "select",
    prompt: "Has your insurance premium or deductible become unaffordable or unworkable in the last 24 months?",
    options: [
      { value: "no", label: "No" },
      { value: "somewhat", label: "Somewhat — it's straining but I'm managing" },
      { value: "yes", label: "Yes — I can barely afford it or have had to drop coverage" },
    ],
  },

  // Page F — Legal & Documentation
  {
    id: "L1", page: "Legal & Documentation", type: "select",
    prompt: "In the last two years, have you had a financial or insurance claim denied, experienced wage theft, or been subjected to predatory debt or other institutional harm?",
    subtext: "Includes denied insurance, surprise medical bills, eviction threats, identity theft, or employer violations.",
    options: [
      { value: "no", label: "No — nothing I would describe as institutional harm" },
      { value: "yes_undocumented", label: "Yes — but I have not documented it anywhere" },
      { value: "yes_partial", label: "Yes — and I've kept some records informally" },
      { value: "yes_documented", label: "Yes — and I've filed complaints or documented it formally" },
    ],
  },
  {
    id: "L2", page: "Legal & Documentation", type: "select",
    prompt: "Do you know how to access free or low-cost legal help if you needed it — for eviction, debt collection, insurance denial, or employment violations?",
    options: [
      { value: "no", label: "No — I don't know where to start" },
      { value: "vaguely", label: "Vaguely — I know it exists but haven't used it" },
      { value: "yes", label: "Yes — I know how to find and use legal aid" },
    ],
  },
  {
    id: "L3", page: "Legal & Documentation", type: "select",
    prompt: "Are your most important documents accessible and organized — ID, insurance policies, birth certificates, lease or mortgage, medical records?",
    options: [
      { value: "no", label: "No — they are scattered and hard to find" },
      { value: "somewhat", label: "Somewhat — I know where most of them are" },
      { value: "yes", label: "Yes — organized and easy to access" },
      { value: "digital", label: "Yes — organized digitally with secure backups" },
    ],
  },

  // Page G — Digital & Community
  {
    id: "F1", page: "Digital & Community", type: "select",
    prompt: "How dependent is your daily life — work, money, communication, news — on 1 or 2 major tech platforms?",
    subtext: "Think: Google, Apple, Meta, Amazon, or their services.",
    options: [
      { value: "low", label: "Low — I use them but have real alternatives for everything critical" },
      { value: "medium", label: "Medium — I depend on them but could pivot if needed" },
      { value: "high", label: "High — losing one would seriously disrupt my life or income" },
      { value: "total", label: "Total — my work and income depend almost entirely on these platforms" },
    ],
  },
  {
    id: "F2", page: "Digital & Community", type: "select",
    prompt: "If your main platform accounts were suspended or deleted tomorrow, do you have a way to find work, reach people, or get news?",
    options: [
      { value: "no", label: "No — I have no meaningful off-platform alternative" },
      { value: "somewhat", label: "Somewhat — I have some alternatives but they're weak" },
      { value: "yes", label: "Yes — I have real off-platform relationships and channels" },
    ],
  },
  {
    id: "F3", page: "Digital & Community", type: "select",
    prompt: "How many people within driving distance would shelter, feed, or work alongside your household in a genuine crisis?",
    options: [
      { value: "0", label: "Zero — I don't have that kind of relationship with anyone nearby" },
      { value: "1-2", label: "1 or 2 people" },
      { value: "3-5", label: "3 to 5 people" },
      { value: "6+", label: "6 or more — I have a real community network" },
    ],
  },
  {
    id: "F4", page: "Digital & Community", type: "multi",
    prompt: "Which of these do you have real, practical ability to do — well enough to teach or trade?",
    subtext: "Select all that genuinely apply.",
    options: [
      { value: "cook", label: "Cook real food from scratch" },
      { value: "repair", label: "Basic repair (home, appliances, vehicles)" },
      { value: "grow", label: "Grow food" },
      { value: "first_aid", label: "First aid and emergency response" },
      { value: "childcare", label: "Childcare" },
      { value: "sewing", label: "Sewing and textile repair" },
      { value: "construction", label: "Construction or carpentry" },
      { value: "mechanical", label: "Mechanical or electrical work" },
      { value: "software", label: "Software development or technical work" },
    ],
  },

  // Page H — Already Happening
  {
    id: "G1", page: "Already Happening", type: "multi",
    prompt: "Has any of the following already happened to your household in the last two years?",
    subtext: "Be honest — this is the most important page. What has already happened is direct evidence, not a forecast. Select all that apply.",
    options: [
      { value: "job_ai", label: "Lost a job, hours, or income due to AI, automation, or tech disruption" },
      { value: "insurance_deny", label: "Had a medical, home, or auto insurance claim denied or underpaid" },
      { value: "food_insecurity", label: "Could not afford groceries or went without food at some point" },
      { value: "housing_crisis", label: "Faced eviction, foreclosure, or had to leave housing you could no longer afford" },
      { value: "medical_debt", label: "Accumulated medical debt you cannot pay off" },
      { value: "delayed_care", label: "Skipped or delayed a doctor, dentist, or prescription due to cost" },
      { value: "wages_fell", label: "Saw your real purchasing power significantly decline — same paycheck, less buying power" },
      { value: "identity_theft", label: "Experienced identity theft, financial fraud, or a data breach that cost you money or time" },
      { value: "none", label: "None of the above" },
    ],
  },
];

export const PAGES = [
  "Household",
  "Income & Work",
  "Food & Water",
  "Housing & Debt",
  "Health & Medical",
  "Legal & Documentation",
  "Digital & Community",
  "Already Happening",
];
