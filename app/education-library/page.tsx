import Link from "next/link";

export const metadata = {
  title: "Education Library — Evolve8 Enterprises",
  description:
    "A planned offline-first public education library covering all eight Evolve8 programs — Silent Apocalypse, Legal, Medical, Food, Land, Financial Literacy, Work, and Skills.",
};

type VideoCard = {
  id: string;
  title: string;
  category: string;
  duration: string;
  color: string;
};

function PlaceholderThumb({ color, duration }: { color: string; duration: string }) {
  return (
    <div className="aspect-video relative overflow-hidden flex items-end p-2" style={{ background: color }}>
      <div className="absolute inset-0 opacity-25" style={{ background: "repeating-linear-gradient(45deg, #ffffff08, #ffffff08 1px, transparent 1px, transparent 8px)" }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center">
          <span className="text-white text-sm ml-0.5">▶</span>
        </div>
      </div>
      <span className="relative z-10 text-[11px] font-mono text-white/70 bg-black/50 px-1.5 py-0.5 rounded ml-auto">{duration}</span>
    </div>
  );
}

function VideoCard({ video }: { video: VideoCard }) {
  return (
    <div className="group cursor-pointer">
      <PlaceholderThumb color={video.color} duration={video.duration} />
      <div className="mt-2">
        <span className="text-[10px] font-mono uppercase tracking-wider text-accent">{video.category}</span>
        <h3 className="text-bone text-sm font-medium leading-snug mt-0.5 group-hover:text-accent transition-colors">{video.title}</h3>
      </div>
    </div>
  );
}

function ProgramSection({
  id,
  eyebrow,
  title,
  description,
  videos,
  cta,
}: {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  videos: VideoCard[];
  cta?: { href: string; label: string };
}) {
  return (
    <section id={id} className="scroll-mt-20 pt-2 pb-12 border-b border-line last:border-b-0">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-2 mb-6">
        <div>
          <p className="eyebrow mb-2">{eyebrow}</p>
          <h2 className="h-display text-bone text-2xl md:text-3xl">{title}</h2>
          <p className="text-bone/55 text-sm mt-2 max-w-xl leading-relaxed">{description}</p>
        </div>
        {cta && (
          <Link href={cta.href} className="btn-secondary text-sm shrink-0">{cta.label}</Link>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videos.map((v) => (
          <VideoCard key={v.id} video={v} />
        ))}
      </div>
    </section>
  );
}

const SECTION_NAV = [
  { href: "#silent-apocalypse", label: "Silent Apocalypse" },
  { href: "#work-ai", label: "Work & AI" },
  { href: "#food-water", label: "Food & Water" },
  { href: "#housing-land", label: "Housing & Land" },
  { href: "#health-medical", label: "Health & Medical" },
  { href: "#legal", label: "Legal Action" },
  { href: "#money", label: "Money" },
  { href: "#skills", label: "Skills" },
];

export default function EducationLibraryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative border-b border-line bg-[#050505]">
        <div className="absolute inset-0 gridline opacity-20 pointer-events-none" />
        <div className="container-x relative pt-14 pb-10 md:pt-20 md:pb-14">
          <p className="eyebrow mb-4">Education Library</p>
          <h1 className="h-display text-bone text-[36px] sm:text-[52px] md:text-[64px] leading-[1.02] max-w-4xl mb-4">
            Learn the systems. <span className="text-accent">Understand your options.</span>
          </h1>
          <p className="text-bone/75 max-w-2xl text-lg leading-relaxed h-serif mb-6">
            A planned offline-first public education library organized around Evolve8's eight programs. Every series is free. First version uses placeholder lessons while original content is produced.
          </p>

          {/* Status callout */}
          <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 px-4 py-2 text-sm text-bone/80 mb-8">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse inline-block"></span>
            Building original content — placeholder library active. Video hosting and offline downloads coming.
          </div>

          {/* Search */}
          <div className="flex gap-3 max-w-xl">
            <input
              type="text"
              placeholder="Search lessons, topics, programs..."
              className="flex-1 px-4 py-2.5 text-sm text-bone placeholder:text-bone/40 focus:outline-none focus:border-accent"
            />
            <button className="btn-primary text-sm px-5">Search</button>
          </div>
        </div>
      </section>

      {/* Section navigation */}
      <nav className="border-b border-line bg-[#080808] sticky top-[56px] z-40">
        <div className="container-x py-3 overflow-x-auto">
          <div className="flex gap-1 min-w-max">
            {SECTION_NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-xs font-mono uppercase tracking-wider px-3 py-1.5 border border-transparent text-bone/55 hover:text-accent hover:border-accent/40 transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <div className="container-x py-12 space-y-0">

        <ProgramSection
          id="silent-apocalypse"
          eyebrow="Foundation"
          title="Silent Apocalypse"
          description="Start here. These videos explain the framework — what the Silent Apocalypse is, why it's happening, and how the simulator measures your household's exposure."
          cta={{ href: "/simulator", label: "Run the Simulator →" }}
          videos={[
            { id: "sa1", title: "What Is the Silent Apocalypse?", category: "Silent Apocalypse", duration: "12:04", color: "#1a0a0a" },
            { id: "sa2", title: "Run the Simulator — Step-by-Step Walkthrough", category: "Silent Apocalypse", duration: "4:30", color: "#1a0505" },
            { id: "sa3", title: "Understanding Your Silent Apocalypse Index Score", category: "Silent Apocalypse", duration: "11:30", color: "#0f0000" },
            { id: "sa4", title: "The Eight Systems in Active Collapse", category: "Silent Apocalypse", duration: "9:50", color: "#150808" },
          ]}
        />

        <ProgramSection
          id="work-ai"
          eyebrow="Work8 Program"
          title="Work & AI Readiness"
          description="AI is eliminating work faster than any transition in modern history. These videos cover which jobs are at risk, which skills are AI-resistant, how to use AI tools, and how to find the right Work8 track for your situation."
          cta={{ href: "/work/apply", label: "Take Work8 Intake →" }}
          videos={[
            { id: "w1", title: "AI Literacy for Families — Where to Start", category: "AI Literacy", duration: "13:00", color: "#0a0010" },
            { id: "w2", title: "Which Jobs AI Is Eliminating First — and Which It Can't Touch", category: "Work & AI", duration: "11:20", color: "#08000f" },
            { id: "w3", title: "Work8 Labor Network — How to Earn and Build Reputation", category: "Work8", duration: "8:45", color: "#00100a" },
            { id: "w4", title: "Track A: AI-Resistant Roles — What They Are and How to Get Them", category: "Work8", duration: "9:30", color: "#05000d" },
            { id: "w5", title: "Track B: Building Independent Income You Own and Control", category: "Work8", duration: "10:15", color: "#08000a" },
            { id: "w6", title: "Track C: Full Reskilling — A 90-Day Plan", category: "Work8", duration: "12:45", color: "#060010" },
          ]}
        />

        <ProgramSection
          id="food-water"
          eyebrow="Vivinate Farms"
          title="Food & Water Security"
          description="Most American households are three supply chain disruptions from food insecurity. These videos cover the 14-day minimum buffer, container farming, local sourcing, and water storage."
          cta={{ href: "/food", label: "Join Vivinate Farms →" }}
          videos={[
            { id: "fw1", title: "Food & Water Resilience — Your Household Baseline", category: "Food & Water", duration: "8:15", color: "#0a1000" },
            { id: "fw2", title: "Container Farms 101 — Vivinate Farms Intro", category: "Vivinate Farms", duration: "7:30", color: "#100500" },
            { id: "fw3", title: "The 14-Day Food Buffer — How to Build It This Week", category: "Food & Water", duration: "6:40", color: "#0d0f00" },
            { id: "fw4", title: "Family Module 1: Kale, Tomatoes, Peppers, Herbs", category: "Vivinate Farms", duration: "5:55", color: "#0a1200" },
            { id: "fw5", title: "Emergency Water Storage — The FEMA Standard Explained", category: "Food & Water", duration: "4:20", color: "#001508" },
            { id: "fw6", title: "Finding Local Farms, Co-ops, and Community Gardens in DFW", category: "Food & Water", duration: "7:10", color: "#081000" },
          ]}
        />

        <ProgramSection
          id="housing-land"
          eyebrow="Land Program"
          title="Housing & Land Access"
          description="Housing cost is the largest structural vulnerability for most American families. These videos cover the two-track land access program, what to do if rent is over 35% of income, and how to start building a path to land ownership."
          cta={{ href: "/land", label: "Apply for Land Access →" }}
          videos={[
            { id: "hl1", title: "Two Tracks to Land Access: Live + Work vs Just Live", category: "Land Access", duration: "8:22", color: "#0a0f1a" },
            { id: "hl2", title: "Apply for Live + Work — Step by Step", category: "Live + Work", duration: "10:40", color: "#150a00" },
            { id: "hl3", title: "Just Live Track — What to Expect", category: "Just Live", duration: "6:50", color: "#100010" },
            { id: "hl4", title: "What to Do When Rent Is Over 35% of Income", category: "Housing", duration: "9:05", color: "#0f0a00" },
          ]}
        />

        <ProgramSection
          id="health-medical"
          eyebrow="Medical Program"
          title="Health & Medical Access"
          description="Healthcare costs are the leading cause of financial ruin in the United States. These videos cover Way Stations, the Food Prescription campaign, how to dispute medical bills, and how to navigate care without adequate insurance."
          cta={{ href: "/medical/way-stations", label: "Find a Way Station →" }}
          videos={[
            { id: "hm1", title: "What Is a Way Station?", category: "Way Stations", duration: "7:18", color: "#001015" },
            { id: "hm2", title: "Food Prescription — What It Means for Your Family", category: "Food Prescription", duration: "8:55", color: "#001508" },
            { id: "hm3", title: "How to Dispute a Medical Bill — Step by Step", category: "Medical", duration: "10:10", color: "#0f0005" },
            { id: "hm4", title: "Navigating Care Without Adequate Insurance", category: "Medical", duration: "9:40", color: "#080010" },
          ]}
        />

        <ProgramSection
          id="legal"
          eyebrow="Legal Program"
          title="Legal Action & Documentation"
          description="Most families experiencing institutional harm never document it — and lose their legal standing as a result. These videos cover the Public Action Network, class action basics, the Legal Help Platform, and how to build your evidence file."
          cta={{ href: "/legal", label: "Open Public Action Network →" }}
          videos={[
            { id: "la1", title: "What Is a Class Action? A Family Guide", category: "Public Action", duration: "6:45", color: "#10001a" },
            { id: "la2", title: "How to Use the Evidence Vault", category: "Public Action", duration: "5:10", color: "#0a0015" },
            { id: "la3", title: "Legal Help Platform — Organize Your Case", category: "Legal Help", duration: "9:05", color: "#080018" },
            { id: "la4", title: "Twelve Harm Categories — How to File Your First Report", category: "Public Action", duration: "7:35", color: "#120010" },
          ]}
        />

        <ProgramSection
          id="money"
          eyebrow="Macro8 / Money Program"
          title="Money & Financial Literacy"
          description="Inflation, debt, and the five economic squeezers are destroying household purchasing power. These videos cover the Macro8 framework, Bittensor and TAO donations, Resilience Points, and practical financial education for families at every income level."
          cta={{ href: "/money/families", label: "Read Macro8 for Families →" }}
          videos={[
            { id: "mo1", title: "Macro8 Explained in 5 Minutes", category: "Macro8", duration: "5:02", color: "#1a1500" },
            { id: "mo2", title: "Sit Mode vs Active Mode — Which Macro8 Path Is Right for You", category: "Macro8", duration: "7:40", color: "#100a00" },
            { id: "mo3", title: "Financial Literacy: What Inflation Actually Means for Your Groceries", category: "Financial Literacy", duration: "9:10", color: "#050010" },
            { id: "mo4", title: "What Is Bittensor? Plain-Language Explainer", category: "Bittensor", duration: "9:15", color: "#0a1a0f" },
            { id: "mo5", title: "What Is TAO? A Non-Technical Explainer", category: "TAO", duration: "5:40", color: "#001000" },
            { id: "mo6", title: "TAO Donations: How It Works", category: "TAO", duration: "6:20", color: "#00080f" },
            { id: "mo7", title: "How Resilience Points Work", category: "Resilience Points", duration: "5:55", color: "#001500" },
          ]}
        />

        <ProgramSection
          id="skills"
          eyebrow="Skills & Community"
          title="Skills Academy & Community Resilience"
          description="Every skill you can teach or trade reduces your dependence on systems that are failing. These videos cover the Skills Academy curriculum, home preparedness, community network building, and global resilience options."
          cta={{ href: "/skills", label: "Explore Skills Academy →" }}
          videos={[
            { id: "sk1", title: "Home Preparedness: Your 72-Hour Plan", category: "Home Preparedness", duration: "10:20", color: "#0f0a00" },
            { id: "sk2", title: "Building a Real Community Network — Not a Social Media Following", category: "Community", duration: "8:30", color: "#0a1000" },
            { id: "sk3", title: "Global Resilience — Mexico, Caribbean, and Beyond", category: "Global Resilience", duration: "11:25", color: "#001010" },
            { id: "sk4", title: "Practical Skills That Cannot Be Automated: A Household Audit", category: "Skills", duration: "7:55", color: "#050a00" },
          ]}
        />

        {/* Offline Library Goal */}
        <section className="border border-line bg-[#070707] p-8 md:p-12 mt-12">
          <p className="eyebrow mb-3">Offline Library Goal</p>
          <h2 className="h-display text-bone text-2xl md:text-3xl mb-4 max-w-3xl">
            Built to work without the internet.
          </h2>
          <p className="text-bone/75 max-w-2xl leading-relaxed mb-6">
            The long-term goal is an offline-accessible public education library with hundreds of videos explaining the systems families depend on. Video content will be available for download to phones, tablets, and USB drives for use in areas with limited or no internet access.
          </p>
          <div className="grid md:grid-cols-3 gap-4 mb-6">
            {[
              { name: "Downloadable Learning Packs", body: "Curated bundles by topic — Silent Apocalypse, Legal, Food, Land — available as offline downloads." },
              { name: "Way Station Access", body: "Every Way Station will have offline educational content accessible via QR code, tablet, or physical media." },
              { name: "Original Content Production", body: "We are building original video content across all eight program categories. Rights-cleared, family-appropriate, publicly available." },
            ].map((f) => (
              <div key={f.name} className="bg-[#0a0a0a] border border-line p-5">
                <h3 className="h-display text-bone text-lg mb-2">{f.name}</h3>
                <p className="text-bone/65 text-sm leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary text-sm">Join the Education Waitlist →</Link>
            <Link href="/donate" className="btn-secondary text-sm">Support Content Production</Link>
          </div>
          <p className="mt-6 text-bone/35 text-xs max-w-2xl">
            Video hosting and uploading copyrighted content are not part of the plan. All content will be original or rights-cleared. The first version uses placeholder lessons while we build. Offline access requires storage, funding, and device partnerships.
          </p>
        </section>

      </div>
    </div>
  );
}
