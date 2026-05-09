"use client";

import { useState } from "react";
import Link from "next/link";

/* ─────────────────────────────────────────
   Session data – May 2026
───────────────────────────────────────── */
const SESSIONS = [
  { day: 14, date: "Thursday, May 14, 2026", time: "1:00 PM CST", short: "May 14 · 1:00 PM CST" },
  { day: 16, date: "Saturday, May 16, 2026", time: "3:30 PM CST", short: "May 16 · 3:30 PM CST" },
  { day: 20, date: "Wednesday, May 20, 2026", time: "10:00 AM CST", short: "May 20 · 10:00 AM CST" },
  { day: 24, date: "Sunday, May 24, 2026", time: "12:00 PM CST", short: "May 24 · 12:00 PM CST" },
] as const;

type Session = typeof SESSIONS[number];

/* ─────────────────────────────────────────
   May 2026 calendar config
   May 1 = Friday → startOffset = 5 (Sun=0)
───────────────────────────────────────── */
const CAL_START_OFFSET = 5;
const CAL_TOTAL_DAYS = 31;
const AVAILABLE_DAYS: Set<number> = new Set(SESSIONS.map((s) => s.day));

function getSessionForDay(day: number): Session | undefined {
  return SESSIONS.find((s) => s.day === day);
}

/* ─────────────────────────────────────────
   Calendar Modal
───────────────────────────────────────── */
function CalendarModal({ onClose }: { onClose: () => void }) {
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [step, setStep] = useState<"calendar" | "form" | "success">("calendar");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const selectedSession = selectedDay ? getSessionForDay(selectedDay) : undefined;

  const cells: (number | null)[] = [
    ...Array(CAL_START_OFFSET).fill(null),
    ...Array.from({ length: CAL_TOTAL_DAYS }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  const handleSubmit = async () => {
    if (!name.trim() || !email.trim() || !selectedSession) return;
    setSubmitting(true);
    setError("");
    try {
      const res = await fetch("/api/job-fair-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, session: selectedSession }),
      });
      const data = await res.json();
      if (data.ok) {
        setStep("success");
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/85" onClick={onClose} aria-hidden="true" />

      <div className="relative bg-[#0a0a0a] border border-[#272727] w-full max-w-[440px] shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#1a1a1a]">
          <p className="font-mono text-[11px] tracking-widest uppercase text-accent">
            {step === "success" ? "Spot Reserved" : "Reserve Your Spot"}
          </p>
          <button
            onClick={onClose}
            className="text-bone/40 hover:text-bone transition-colors font-mono text-lg leading-none"
            aria-label="Close"
          >
            ×
          </button>
        </div>

        <div className="p-6">
          {/* ── STEP: Calendar ── */}
          {step === "calendar" && (
            <>
              <p className="text-bone text-lg font-display font-bold mb-1">
                Select a Session — May 2026
              </p>
              <p className="text-bone/50 text-xs mb-5">Only available dates are selectable.</p>

              <div className="grid grid-cols-7 mb-1">
                {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                  <div key={d} className="text-center text-[10px] font-mono uppercase tracking-widest text-bone/30 pb-1">
                    {d}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-y-1">
                {cells.map((day, idx) => {
                  if (day === null) return <div key={`blank-${idx}`} />;
                  const available = AVAILABLE_DAYS.has(day);
                  const selected = selectedDay === day;
                  return (
                    <button
                      key={day}
                      disabled={!available}
                      onClick={() => setSelectedDay(day)}
                      className={[
                        "h-9 w-full text-sm font-mono transition-colors",
                        available && !selected ? "text-accent border border-accent/40 hover:bg-accent/10" : "",
                        selected ? "bg-accent text-white border border-accent" : "",
                        !available ? "text-bone/20 cursor-default" : "",
                      ].filter(Boolean).join(" ")}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              {selectedSession && (
                <div className="mt-4 p-3 border border-accent/30 bg-accent/5">
                  <p className="text-accent font-mono text-xs uppercase tracking-widest mb-1">Selected Session</p>
                  <p className="text-bone text-sm font-semibold">{selectedSession.date}</p>
                  <p className="text-bone/70 text-sm">{selectedSession.time}</p>
                </div>
              )}

              <button
                disabled={!selectedDay}
                onClick={() => setStep("form")}
                className="mt-5 btn-primary w-full justify-center disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Continue →
              </button>
            </>
          )}

          {/* ── STEP: Registration Form ── */}
          {step === "form" && (
            <>
              <p className="text-bone text-lg font-display font-bold mb-1">Your Information</p>
              {selectedSession && (
                <p className="text-bone/50 text-xs mb-5">
                  {selectedSession.date} · {selectedSession.time}
                </p>
              )}

              <div className="space-y-4 mb-5">
                <div>
                  <label htmlFor="fair-name">Full Name</label>
                  <input
                    id="fair-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    autoFocus
                  />
                </div>
                <div>
                  <label htmlFor="fair-email">Email Address</label>
                  <input
                    id="fair-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              {error && <p className="text-accent text-sm mb-4">{error}</p>}

              <div className="flex gap-3">
                <button onClick={() => setStep("calendar")} className="btn-secondary flex-1 justify-center">
                  Back
                </button>
                <button
                  disabled={!name.trim() || !email.trim() || submitting}
                  onClick={handleSubmit}
                  className="btn-primary flex-1 justify-center disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  {submitting ? "Sending…" : "Reserve Spot →"}
                </button>
              </div>

              <p className="text-bone/30 text-xs mt-4 text-center">
                Your information is kept confidential and used only to confirm your reservation.
              </p>
            </>
          )}

          {/* ── STEP: Success ── */}
          {step === "success" && (
            <div className="text-center py-4">
              <div className="text-accent font-mono text-3xl mb-4">✓</div>
              <h3 className="h-display text-bone text-2xl mb-3">You&apos;re registered.</h3>
              {selectedSession && (
                <p className="text-bone/70 text-sm mb-2">
                  <span className="font-semibold text-bone">{selectedSession.date}</span>
                  <br />
                  {selectedSession.time}
                </p>
              )}
              <p className="text-bone/50 text-xs mt-4 mb-6">
                We have your spot. Check your email for details closer to the event. Bring
                your questions — our team will be live.
              </p>
              <button onClick={onClose} className="btn-secondary text-sm">Close</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   Main Page
───────────────────────────────────────── */
export default function VirtualJobFairPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      {modalOpen && <CalendarModal onClose={() => setModalOpen(false)} />}

      {/* ── HERO ── */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="absolute inset-0 gridline opacity-40 pointer-events-none" />
        <div className="container-x relative pt-16 pb-14 md:pt-24 md:pb-20">
          <div className="flex flex-wrap items-center gap-2 mb-8">
            <span className="tag">Evolve8 Enterprises</span>
            <span className="tag">Virtual Job Fair</span>
            <span className="tag">May 2026</span>
          </div>

          <h1 className="h-display text-bone text-[36px] sm:text-[54px] md:text-[72px] lg:text-[84px] leading-[1.0] max-w-5xl mb-6">
            Virtual Job Fair.<br />
            <span className="text-accent">May 2026.</span>
          </h1>

          <p className="max-w-2xl text-bone/80 text-lg md:text-xl leading-relaxed mb-4">
            Evolve8 Enterprises is building an enterprise — and we are hiring the people who
            will build it with us. STEM, blockchain, administration, maintenance, and beyond.
            Compensation ranges into the hundreds of thousands. Benefits include free housing,
            free food, and a structured path to your own land.
          </p>
          <p className="max-w-2xl text-bone/70 text-base leading-relaxed mb-10">
            Hiring is contingent on funding. Reserve your spot at a virtual session, watch our
            funding progress, and be ready to move when we do.
          </p>

          <div className="flex flex-wrap gap-3 items-center">
            <button onClick={() => setModalOpen(true)} className="btn-primary text-base px-8 py-4">
              Reserve Your Spot →
            </button>
            <a href="#land" className="btn-secondary">
              Land Access — Live + Work
            </a>
            <a href="#sessions" className="btn-secondary">
              View Session Dates
            </a>
          </div>
        </div>
      </section>

      {/* ── SESSION DATES ── */}
      <section id="sessions" className="border-b border-line">
        <div className="container-x py-16 md:py-20">
          <p className="eyebrow mb-4">Session dates</p>
          <h2 className="h-display text-bone text-3xl md:text-4xl mb-10 max-w-3xl">
            Four live sessions. Pick the one that works for you.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {SESSIONS.map((s) => (
              <button
                key={s.day}
                onClick={() => setModalOpen(true)}
                className="card text-left group hover:border-accent transition-colors"
              >
                <p className="eyebrow mb-3">Session</p>
                <p className="h-display text-bone text-xl mb-2 group-hover:text-accent transition-colors">
                  {s.date}
                </p>
                <p className="text-bone/60 text-sm font-mono">{s.time}</p>
                <p className="text-accent text-xs font-mono mt-4">Reserve this date →</p>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── LAND ACCESS — LIVE + WORK ── */}
      <section id="land" className="border-b border-line bg-[#050505]">
        <div className="container-x py-16 md:py-24">
          <p className="eyebrow mb-4">The centerpiece benefit</p>
          <h2 className="h-display text-bone text-4xl md:text-5xl lg:text-6xl mb-6 max-w-5xl leading-[1.0]">
            Land Access —{" "}
            <span className="text-accent">Live + Work Track.</span>
          </h2>
          <p className="text-bone/80 text-lg md:text-xl leading-relaxed max-w-3xl mb-12">
            This is the one. Every Evolve8 campus employee enters the Live + Work track
            automatically. You work here, you live here, and through the Resilience Points
            you earn, you build a documented, merit-based path to real, deeded land.
            Not a lottery. Not a promise. A structured track — built on what you actually do.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="card border-l-2 border-accent">
              <p className="eyebrow mb-3">01 · Live on Campus</p>
              <h3 className="h-display text-bone text-xl mb-3">Free Housing. No Rent.</h3>
              <p className="text-bone/70 text-sm leading-relaxed">
                From day one of employment, you live on campus at no cost. Housing and
                utilities are part of your compensation package — not a perk, not a loan.
                You live where you work, in a community that is actively building something.
              </p>
            </div>

            <div className="card border-l-2 border-accent">
              <p className="eyebrow mb-3">02 · Work and Earn</p>
              <h3 className="h-display text-bone text-xl mb-3">Wages + Resilience Points</h3>
              <p className="text-bone/70 text-sm leading-relaxed">
                Your role pays a competitive salary — from living wages for support roles
                to six-figure and above compensation for STEM, blockchain, and senior
                positions. Every hour also earns Resilience Points that build your Land
                Competition eligibility score.
              </p>
            </div>

            <div className="card border-l-2 border-accent">
              <p className="eyebrow mb-3">03 · Path to Land</p>
              <h3 className="h-display text-bone text-xl mb-3">Real, Deeded Land</h3>
              <p className="text-bone/70 text-sm leading-relaxed">
                Resilience Points earned through employment contribute directly to your
                Land Competition score. Live + Work track participants receive priority
                placement. The land is real. The path is documented. The criteria are
                transparent and merit-based.
              </p>
            </div>
          </div>

          <div className="card border border-accent/20 bg-accent/5 p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <p className="eyebrow mb-3">Live + Work vs. Just Live</p>
                <h3 className="h-display text-bone text-2xl mb-4">Two tracks. One is for employees.</h3>
                <p className="text-bone/75 leading-relaxed text-sm mb-4">
                  The Land Competition has two tracks. <strong className="text-bone">Just Live</strong> is
                  for community members who want land access without campus employment.{" "}
                  <strong className="text-bone">Live + Work</strong> is the employment track — it
                  carries higher Resilience Point accrual, faster eligibility progression,
                  and first-priority placement in land allocation rounds.
                </p>
                <p className="text-bone/50 text-xs">
                  Campus employment is the fastest path through the Land Competition. Period.
                </p>
              </div>
              <div className="space-y-3">
                {[
                  "Higher Resilience Point accrual than Just Live",
                  "Priority placement in land allocation rounds",
                  "Free housing from first day of employment",
                  "Free food through Vivinate Farms",
                  "Salary plus points — both accrue simultaneously",
                  "Full participation in community governance",
                ].map((item) => (
                  <div key={item} className="flex gap-3 text-sm text-bone/75">
                    <span className="text-accent font-mono shrink-0 mt-0.5">→</span>
                    <span>{item}</span>
                  </div>
                ))}
                <Link href="/land" className="inline-flex text-accent text-xs font-mono hover:underline mt-3">
                  Full Land Competition details →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHO WE'RE LOOKING FOR + FUNDING TIMELINE ── */}
      <section className="border-b border-line">
        <div className="container-x py-16 md:py-20">
          <p className="eyebrow mb-4">Roles &amp; hiring timeline</p>
          <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
            Bring your field. We&apos;re building across every discipline.
          </h2>
          <p className="text-bone/75 max-w-3xl leading-relaxed mb-12">
            Evolve8 is not hiring for one type of person. We are building infrastructure —
            physical, digital, financial, and institutional — and that requires people from
            every discipline. If you are exceptional at what you do and you believe in what
            we are building, there is a place for you here.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="space-y-4">
              {[
                {
                  area: "STEM",
                  desc: "Engineers, scientists, data specialists, technologists, environmental and agricultural scientists, biomedical, and more. Senior and principal-level compensation.",
                },
                {
                  area: "Blockchain & Decentralized Finance",
                  desc: "Protocol developers, smart contract engineers, tokenomics architects, and DeFi strategists. We are building on-chain infrastructure — bring your expertise.",
                },
                {
                  area: "Administration & Operations",
                  desc: "Program managers, operations directors, intake coordinators, logistics leads, and executive support. The infrastructure that keeps the enterprise moving.",
                },
                {
                  area: "Maintenance & Skilled Trades",
                  desc: "Electricians, plumbers, HVAC, carpenters, and general facility maintenance. Campus build-out and operations require skilled hands at every level.",
                },
              ].map((item) => (
                <div key={item.area} className="flex gap-4">
                  <span className="text-accent font-mono text-sm shrink-0 mt-0.5 w-4">·</span>
                  <div>
                    <p className="h-display text-bone text-base mb-1">{item.area}</p>
                    <p className="text-bone/60 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
              <p className="text-bone/40 text-xs pl-7 pt-2">
                And more — your field, your expertise. If it serves the mission, we want to talk.
              </p>
            </div>

            <div className="space-y-5">
              {/* Pay range */}
              <div className="card border-l-2 border-accent">
                <p className="eyebrow mb-3">Compensation Range</p>
                <h3 className="h-display text-bone text-2xl mb-2">
                  Living wages to six figures and beyond
                </h3>
                <p className="text-bone/70 text-sm leading-relaxed">
                  Support and maintenance roles start at competitive living wages. Mid-level
                  operations and technical roles range into the five and six figures. Senior
                  STEM, blockchain, and executive positions carry compensation that can reach
                  well into the hundreds of thousands — commensurate with experience and the
                  scope of what we are building.
                </p>
              </div>

              {/* Funding progress counter */}
              <div className="card">
                <p className="eyebrow mb-3">Hiring is Contingent on Funding</p>
                <h3 className="h-display text-bone text-xl mb-4">
                  Funding Progress
                </h3>
                <div className="mb-3">
                  <div className="flex justify-between text-xs font-mono text-bone/50 mb-2">
                    <span>Raised toward hiring target</span>
                    <span className="text-bone">$0 raised</span>
                  </div>
                  <div className="h-2 bg-[#151515] border border-line w-full">
                    <div className="h-full bg-accent transition-all duration-700" style={{ width: "0%" }} />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-bone/30 mt-1">
                    <span>$0</span>
                    <span>Goal: $2,500,000</span>
                  </div>
                </div>
                <p className="text-bone/50 text-xs leading-relaxed">
                  This counter updates live as donations and grants are received. Every
                  contribution moves us closer to opening these roles. Check back to track
                  progress — and when the goal is met, hiring begins.
                </p>
                <div className="mt-4 pt-4 border-t border-line flex flex-wrap gap-3">
                  <Link href="/donate" className="btn-primary text-xs">
                    Contribute to Funding →
                  </Link>
                  <Link href="/sponsor" className="btn-secondary text-xs">
                    Sponsor a Role
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPENSATION & BENEFITS ── */}
      <section className="border-b border-line bg-[#050505]">
        <div className="container-x py-16 md:py-20">
          <p className="eyebrow mb-4">The full package</p>
          <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
            A compensation package built for the world we are creating.
          </h2>
          <p className="text-bone/75 max-w-3xl leading-relaxed mb-12">
            Beyond your salary, every campus employee receives a benefits structure that
            addresses the exact pressures the Silent Apocalypse has created — housing,
            food, and a real path forward.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card border-l-2 border-accent">
              <p className="eyebrow mb-3">Free Housing</p>
              <h3 className="h-display text-bone text-xl mb-3">Campus Living — No Rent</h3>
              <p className="text-bone/70 text-sm leading-relaxed">
                On-campus housing included from day one. Rent is $0. Utilities are covered.
                You live where you work, in a community actively building something real.
                Not temporary shelter — stable housing as part of your employment arrangement.
              </p>
            </div>

            <div className="card border-l-2 border-accent">
              <p className="eyebrow mb-3">Free Food — Vivinate Farms</p>
              <h3 className="h-display text-bone text-xl mb-3">14-Day Food Buffer</h3>
              <p className="text-bone/70 text-sm leading-relaxed mb-3">
                Full access to the Vivinate Farms food program — a rolling 14-day household
                food buffer grown and maintained on campus. Fresh produce, preserved staples,
                and cooperative bulk-buy access. You eat from what the campus grows.
              </p>
              <p className="text-bone/40 text-xs">
                Vivinate Farms · Far Away Projects 501(c)(3) · EIN 82-1917723
              </p>
            </div>

            <div className="card border-l-2 border-accent">
              <p className="eyebrow mb-3">Resilience Points</p>
              <h3 className="h-display text-bone text-xl mb-3">Points That Open Doors</h3>
              <p className="text-bone/70 text-sm leading-relaxed">
                Every hour worked earns Resilience Points — internal credits that build your
                Land Competition eligibility score, unlock Skills Academy access, and establish
                your standing in the Evolve8 community. Live + Work track employees accrue
                faster than any other participation path.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FULL PARTICIPATION REQUIREMENT ── */}
      <section className="border-b border-line">
        <div className="container-x py-16 md:py-20">
          <p className="eyebrow mb-4">Important — please read</p>
          <h2 className="h-display text-bone text-3xl md:text-4xl mb-6 max-w-4xl">
            Full platform participation is{" "}
            <span className="text-accent">required</span> for your application to be considered.
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-5 text-bone/80 leading-relaxed">
              <p>
                Evolve8 is not just an employer — it is a living platform. Our programs work
                because the community shows up, engages, and participates. That means the
                people who work here do too.
              </p>
              <p>
                Applications from individuals who are not actively engaged with the Evolve8
                platform will <span className="text-bone font-semibold">not be considered</span>.
                This is not a bureaucratic hurdle. It is how we ensure the people we bring on
                understand what we are building and are genuinely part of it.
              </p>
              <p className="text-bone/60 text-sm">
                Participation is tracked through your account activity. Engagement signals
                matter — passive sign-ups are not sufficient.
              </p>
            </div>
            <div className="card">
              <p className="eyebrow mb-4">What full participation means</p>
              <ul className="space-y-3 text-sm text-bone/75">
                {[
                  "Create an account and enroll in the Evolve8 programs relevant to you",
                  "Watch program videos and complete any available modules",
                  "When you receive emails from Evolve8, open them and respond where participation is requested",
                  "When new programs are published, review and accept participation where invited",
                  "Engage with the platform consistently — not just at sign-up",
                  "Complete the Work8 intake survey and run the Silent Apocalypse Simulator",
                  "Participate in any community actions or submissions you qualify for",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="text-accent font-mono shrink-0 mt-0.5">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5 pt-4 border-t border-line">
                <p className="text-bone/40 text-xs">
                  Your participation level is one of the primary filters we use when reviewing
                  applicants. Show us you are here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW THE FAIR WORKS ── */}
      <section className="border-b border-line bg-[#050505]">
        <div className="container-x py-16 md:py-20">
          <p className="eyebrow mb-4">What to expect</p>
          <h2 className="h-display text-bone text-3xl md:text-4xl mb-10 max-w-4xl">
            How the virtual job fair works.
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "Reserve your spot",
                body: "Select a session date from the May 2026 calendar. Enter your name and email. You will receive confirmation. Seats per session are limited — reserve early.",
              },
              {
                step: "02",
                title: "Show up live",
                body: "Join the virtual session at your selected date and time. Our team will walk through open roles, compensation, the housing and food programs, the Land Competition, and the funding timeline. Q&A is live.",
              },
              {
                step: "03",
                title: "Apply — if your participation is active",
                body: "After the fair, qualified attendees move to formal application review. Applications are only considered for participants with verified Evolve8 platform activity. Active members get priority.",
              },
            ].map((s) => (
              <div key={s.step} className="card">
                <span className="text-accent font-mono text-sm mb-3 block">{s.step}</span>
                <h3 className="h-display text-bone text-xl mb-3">{s.title}</h3>
                <p className="text-bone/75 text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="border-y border-line bg-[#0a0a0a]">
        <div className="container-x py-16 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Don&apos;t wait</p>
            <h3 className="h-display text-bone text-3xl md:text-4xl mb-3">
              Reserve your session now.
            </h3>
            <p className="text-bone/70 leading-relaxed">
              Four dates. Limited seats. Real careers — with free housing, free food, and a
              documented path to land. Watch the funding counter. Be ready when it moves.
            </p>
          </div>
          <div className="flex flex-col gap-3 shrink-0">
            <button onClick={() => setModalOpen(true)} className="btn-primary text-base px-8 py-4">
              Reserve Your Spot →
            </button>
            <Link href="/land" className="btn-secondary text-center text-sm">
              Land Competition Details
            </Link>
            <Link href="/work" className="btn-secondary text-center text-sm">
              Back to Work8
            </Link>
          </div>
        </div>
      </section>

      {/* ── DISCLAIMER ── */}
      <section>
        <div className="container-x py-8">
          <p className="text-bone/40 text-xs max-w-3xl leading-relaxed">
            Evolve8 Enterprises is not a licensed staffing agency. All roles, compensation
            ranges, and hiring timelines are contingent on funding and organizational
            capacity. The funding counter is updated as contributions are received and
            does not constitute a guarantee of hiring at any threshold. Resilience Points
            are non-cash internal credits with no guaranteed monetary value. Free housing
            is provided as part of campus employment compensation and is contingent on
            continued active employment. The Land Competition is a separate program with
            its own eligibility requirements; Live + Work track employment provides
            priority access, not a guaranteed land allocation.
          </p>
        </div>
      </section>
    </>
  );
}
