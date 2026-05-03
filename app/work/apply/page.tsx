"use client";
import { useState } from "react";
import Link from "next/link";

const TRACKS = [
  { value: "a", label: "Track A — AI-Resistant Work", desc: "Care, trades, agriculture, food production" },
  { value: "b", label: "Track B — Independent & Off-Platform Income", desc: "Services, repair, teaching, local trade" },
  { value: "c", label: "Track C — AI-Adjacent Reskilling", desc: "Prompting, AI ops, data labeling, automation" },
  { value: "campus", label: "Campus Employment", desc: "Work on an Evolve8 campus" },
  { value: "unsure", label: "Not sure — help me figure it out", desc: "We will route you to the right track" },
];

const QUESTIONS = [
  {
    id: "situation",
    prompt: "What best describes your current work situation?",
    options: [
      "Employed full-time, looking for a change",
      "Employed part-time, need more income",
      "Unemployed, actively looking",
      "Unemployed, not currently looking",
      "Self-employed or freelance",
      "Student or in training",
      "Retired or semi-retired",
    ],
  },
  {
    id: "urgency",
    prompt: "How urgently do you need income?",
    options: [
      "Immediately — I need income within 30 days",
      "Soon — within 1-3 months",
      "Planning ahead — 3-6 months",
      "Exploring options — no immediate pressure",
    ],
  },
  {
    id: "ai_impact",
    prompt: "Has AI or automation affected your work or industry yet?",
    options: [
      "Yes — I have already lost work to AI or automation",
      "Yes — my industry is clearly at risk and I see it happening",
      "Somewhat — I see it coming but not yet directly affected",
      "Not yet — my work does not seem at risk",
      "Not sure",
    ],
  },
  {
    id: "barriers",
    prompt: "What is the biggest barrier preventing you from finding better work? (Pick one)",
    options: [
      "I do not have the right skills for available jobs",
      "I cannot afford training or time away from income",
      "Jobs in my area pay too little or do not match my needs",
      "I have been passed over despite qualifications",
      "I do not know where to look or who to trust",
      "Childcare, transportation, or other logistics",
      "Health or disability constraints",
      "Other",
    ],
  },
  {
    id: "skills",
    prompt: "Which of these do you have real experience in? (Select all that apply)",
    multi: true,
    options: [
      "Healthcare or caregiving",
      "Trades (electrical, plumbing, HVAC, carpentry)",
      "Agriculture or food production",
      "Teaching or tutoring",
      "Repair (appliances, vehicles, electronics)",
      "Cooking or food service",
      "Software or tech",
      "Administrative or operations",
      "Logistics or transportation",
      "Construction or labor",
      "Creative or design",
      "Finance or accounting",
    ],
  },
  {
    id: "location_type",
    prompt: "Where are you located?",
    options: [
      "Urban / large city",
      "Suburban",
      "Small town or rural",
      "No fixed location / willing to relocate",
    ],
  },
  {
    id: "income_goal",
    prompt: "What income range are you targeting monthly?",
    options: [
      "Under $1,000/month (supplement)",
      "$1,000 - $2,500/month",
      "$2,500 - $4,000/month",
      "$4,000 - $6,000/month",
      "Over $6,000/month",
      "Not sure yet",
    ],
  },
];

export default function WorkApplyPage() {
  const [step, setStep] = useState(0); // 0 = track, 1-7 = questions, 8 = contact, 9 = submitted
  const [track, setTrack] = useState("");
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [contact, setContact] = useState({ name: "", email: "", zip: "", notes: "" });

  const setAns = (id: string, val: string) => setAnswers((a) => ({ ...a, [id]: val }));

  const toggleMulti = (id: string, val: string) => {
    const cur = (answers[id] as string[]) || [];
    setAnswers((a) => ({
      ...a,
      [id]: cur.includes(val) ? cur.filter((v) => v !== val) : [...cur, val],
    }));
  };

  const currentQ = step >= 1 && step <= QUESTIONS.length ? QUESTIONS[step - 1] : null;

  // Track selection
  if (step === 0) {
    return (
      <div className="container-x py-16 md:py-24">
        <p className="eyebrow mb-4">Work8 · Intake</p>
        <h1 className="h-display text-bone text-4xl md:text-5xl mb-4 max-w-3xl">
          Which track fits you?
        </h1>
        <p className="text-bone/70 max-w-2xl mb-10 leading-relaxed">
          Pick the track that most closely matches what you are looking for. If you are not sure, select the last option. This is the beginning of your intake — it takes about 4 minutes.
        </p>
        <div className="grid md:grid-cols-2 gap-4 max-w-3xl mb-10">
          {TRACKS.map((t) => (
            <button
              key={t.value}
              onClick={() => setTrack(t.value)}
              className={`text-left p-5 border transition-colors ${track === t.value ? "border-accent text-bone" : "border-line text-bone/80 hover:border-bone/40"}`}
            >
              <div className="font-mono text-sm text-accent mb-1">{t.label}</div>
              <div className="text-bone/60 text-sm">{t.desc}</div>
            </button>
          ))}
        </div>
        <div className="flex gap-3">
          <Link href="/work" className="btn-secondary">Back</Link>
          <button
            onClick={() => setStep(1)}
            disabled={!track}
            className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Continue →
          </button>
        </div>
      </div>
    );
  }

  // Questions
  if (currentQ) {
    const progress = Math.round((step / (QUESTIONS.length + 2)) * 100);
    const isMulti = currentQ.multi;
    const curAnswer = answers[currentQ.id];
    const hasAnswer = isMulti
      ? Array.isArray(curAnswer) && curAnswer.length > 0
      : !!curAnswer;

    return (
      <div className="container-x py-16 md:py-24">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-1 bg-[#151515] border border-line">
              <div className="h-full bg-accent transition-all" style={{ width: `${progress}%` }} />
            </div>
            <span className="text-bone/40 text-xs font-mono whitespace-nowrap">{step} / {QUESTIONS.length + 1}</span>
          </div>

          <p className="eyebrow mb-4">Question {step}</p>
          <h2 className="h-display text-bone text-2xl md:text-3xl mb-6">{currentQ.prompt}</h2>
          {isMulti && <p className="text-bone/50 text-sm mb-4">Select all that apply</p>}

          <div className="grid gap-2 mb-8">
            {currentQ.options.map((o) => {
              const active = isMulti
                ? (Array.isArray(curAnswer) && curAnswer.includes(o))
                : curAnswer === o;
              return (
                <button
                  key={o}
                  onClick={() => isMulti ? toggleMulti(currentQ.id, o) : setAns(currentQ.id, o)}
                  className={`text-left px-4 py-3 border transition-colors ${active ? "border-accent text-bone" : "border-line text-bone/80 hover:border-bone/40"}`}
                >
                  {isMulti && (
                    <span className="mr-3 text-accent font-mono">{active ? "■" : "□"}</span>
                  )}
                  {o}
                </button>
              );
            })}
          </div>

          <div className="flex justify-between">
            <button onClick={() => setStep(step - 1)} className="btn-secondary">Back</button>
            <button
              onClick={() => setStep(step + 1)}
              disabled={!hasAnswer && !currentQ.multi}
              className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {step === QUESTIONS.length ? "Almost done →" : "Continue →"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Contact / submit
  if (step === QUESTIONS.length + 1) {
    return (
      <div className="container-x py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow mb-4">Last step</p>
          <h2 className="h-display text-bone text-3xl md:text-4xl mb-4">
            How do we reach you?
          </h2>
          <p className="text-bone/70 mb-8 leading-relaxed">
            Your information is used to match you to opportunities and notify you when something opens in your area. We do not sell or share your data. All fields except name and email are optional.
          </p>
          <div className="space-y-4 mb-8">
            <div>
              <label className="block text-bone/60 text-sm mb-1">Name</label>
              <input
                type="text"
                value={contact.name}
                onChange={(e) => setContact((c) => ({ ...c, name: e.target.value }))}
                placeholder="First name is fine"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-bone/60 text-sm mb-1">Email</label>
              <input
                type="email"
                value={contact.email}
                onChange={(e) => setContact((c) => ({ ...c, email: e.target.value }))}
                placeholder="you@example.com"
                className="w-full"
              />
            </div>
            <div>
              <label className="block text-bone/60 text-sm mb-1">ZIP code (optional)</label>
              <input
                type="text"
                value={contact.zip}
                onChange={(e) => setContact((c) => ({ ...c, zip: e.target.value }))}
                placeholder="e.g. 75225"
                className="w-full max-w-xs"
              />
            </div>
            <div>
              <label className="block text-bone/60 text-sm mb-1">Anything else we should know? (optional)</label>
              <textarea
                value={contact.notes}
                onChange={(e) => setContact((c) => ({ ...c, notes: e.target.value }))}
                placeholder="Specific needs, circumstances, or what you're looking for that doesn't fit the questions above."
                rows={3}
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-between">
            <button onClick={() => setStep(step - 1)} className="btn-secondary">Back</button>
            <button
              onClick={() => setStep(step + 1)}
              disabled={!contact.name || !contact.email}
              className="btn-primary disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Submit →
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Submitted
  return (
    <div className="container-x py-16 md:py-24">
      <div className="max-w-2xl">
        <p className="eyebrow mb-4">Received</p>
        <h1 className="h-display text-bone text-4xl md:text-5xl mb-6">
          You are in.
        </h1>
        <p className="text-bone/80 leading-relaxed mb-4">
          Your intake has been submitted. We will review it and match you to opportunities in your area. If we have an active match for your track and location, you will hear from us within 5-7 business days. If not, we will add you to the regional queue and notify you as new partners come online.
        </p>
        <p className="text-bone/60 text-sm mb-10">
          Meanwhile, the fastest way to accelerate your placement is to run the Silent Apocalypse Simulator — it generates a full picture of your household's exposure and connects you to all eight Evolve8 programs that may be relevant to your situation.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link href="/simulator" className="btn-primary">Run the Simulator →</Link>
          <Link href="/skills" className="btn-secondary">Skills Academy</Link>
          <Link href="/work" className="btn-secondary">Back to Work8</Link>
        </div>
      </div>
    </div>
  );
}
