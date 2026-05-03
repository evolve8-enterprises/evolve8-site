# Evolve8 Enterprises — Silent Apocalypse Campaign Site

Next.js 14 + Tailwind site for **evolve8enterprises.com**, the public face of the Silent Apocalypse Public Transparency Campaign.

Founder: Reya Porche · Dallas-Fort Worth, TX · reyaporche@vivinatefarms.org · 469-844-7627
Fiscal sponsor: Far Away Projects (501(c)(3), EIN 82-1917723)

---

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → http://localhost:3000

# 3. Build for production
npm run build
npm run start
```

Requires Node 18.17+ (Node 20 recommended).

---

## Project layout

```
evolve8-site/
├── app/                          # Next.js 14 App Router
│   ├── layout.tsx                # Root layout (header, footer)
│   ├── page.tsx                  # Homepage
│   ├── globals.css               # Design system (black / white / red)
│   │
│   ├── silent-apocalypse/        # Pillar page
│   ├── simulator/                # 5-min, 24-question simulator
│   │
│   ├── legal/                    # Public Action Network hub
│   │   ├── disclaimer/           # Master legal disclaimers
│   │   ├── public-defender-network/
│   │   └── categories/[slug]/    # 12 harm category pages
│   │
│   ├── medical/   food/   money/   work/   land/   skills/
│   ├── money/macro8/tao/         # TAO donation guide + wallet
│   │
│   ├── blog/                     # Blog index + dynamic posts
│   ├── press/   sponsor/   donate/   investors/
│   ├── about/   contact/
│   ├── transparency/   privacy/   terms/
│   │
│   └── api/
│       ├── simulator/score/      # POST simulator answers → score
│       ├── public-action/intake/ # POST a Public Action report
│       └── subscribe/            # Newsletter / contact / waitlist
│
├── components/                   # Shared UI
│   ├── Header.tsx                # Logo + category nav (sticky)
│   ├── Footer.tsx                # 4-inbox contact + disclaimer band
│   ├── Hero.tsx                  # "You Are Not Imagining It"
│   ├── PageHeader.tsx            # Reusable inner-page header + Section + CardLink + CalloutBand
│   ├── ProgramHub.tsx            # Reusable hub layout for /medical, /food, /work, /skills
│   ├── IntakeForm.tsx            # Public Action Network intake form
│   ├── InheritedCollapses.tsx, ProgramsGrid.tsx, SimulatorTeaser.tsx,
│   ├── QuoteBlock.tsx, SupportTriple.tsx, ContactBlock.tsx
│
├── lib/
│   ├── simulator.ts              # Scoring engine (8 sub-scores + Index)
│   ├── simulatorQuestions.ts     # 24 questions, 6 pages
│   └── legalCategories.ts        # 12 Public Action categories
│
├── public/
│   └── logo.jpg                  # Red triangle on black
│
├── tailwind.config.ts            # Brand colors: ink/bone/accent + line/muted
├── postcss.config.js
├── next.config.js
├── tsconfig.json
├── .env.example                  # Mailchimp / Resend / DB / inbox vars
└── package.json
```

---

## Design system

- **Background:** `#000000` (`bg-ink`)
- **Text:** `#F5F5F5` (`text-bone`)
- **Accent (red):** `#E11D2E` (`text-accent` / `bg-accent`)
- **Lines / borders:** `#1F1F1F` (`border-line`)
- **Fonts:** Inter Tight (display), Inter (body), Source Serif 4 (editorial), JetBrains Mono (eyebrow)

Reusable utilities in `globals.css`: `.btn-primary`, `.btn-secondary`, `.tag`, `.eyebrow`, `.card`, `.h-display`, `.h-serif`, `.gridline`, `.container-x`, `.disclaimer-band`.

---

## What's wired up vs. stubbed

| Surface | Status |
|---|---|
| All page routes | ✅ Built (homepage + 30+ inner pages) |
| 12 Public Action category pages | ✅ Dynamic route from `lib/legalCategories.ts` |
| Simulator (24 q, 6 pages, scoring, results) | ✅ Working in-browser; results computed locally |
| `/api/simulator/score` | ✅ Returns score; **TODO**: persist + email full report |
| `/api/public-action/intake` | ✅ Returns tracking ID; **TODO**: persist + notify reviewers |
| `/api/subscribe` | ✅ Accepts payloads; **TODO**: route to Mailchimp / Resend |
| Mailchimp integration | ⚠️ Stubbed — wire in `app/api/subscribe/route.ts` |
| Resend transactional email | ⚠️ Stubbed |
| Database (Postgres / Supabase) | ⚠️ Stubbed |
| TAO wallet copy-to-clipboard | ✅ Working on `/money/macro8/tao` |

Wallet on `/money/macro8/tao`: `5FA8wXmTkWPFD9nbijR3dpukA5qBgNLzQmAFZboceSX8jAmu` (Macro8 Donations).

---

## Editing in VS Code with the Perplexity extension

1. Open this folder in VS Code.
2. Run `npm install` then `npm run dev`.
3. Browse to http://localhost:3000.
4. Use Perplexity in-editor to ask: *"add a hero variant", "update the simulator weights", "wire Mailchimp to /api/subscribe"*, etc.
5. Live-reload happens automatically as you save files.

Files you'll edit most often:
- Copy / facts: `lib/legalCategories.ts`, `app/silent-apocalypse/page.tsx`, `app/about/page.tsx`
- Simulator: `lib/simulator.ts` (scoring), `lib/simulatorQuestions.ts` (questions)
- Header / nav: `components/Header.tsx`
- Footer / disclaimers: `components/Footer.tsx`
- API: `app/api/*/route.ts`

---

## Deploy

### Vercel (recommended)

```bash
# Install Vercel CLI once
npm i -g vercel

# From the project root
vercel
# Follow prompts; link to the evolve8-enterprises project.
```

Add the environment variables from `.env.example` in the Vercel dashboard (Project → Settings → Environment Variables).

Custom domain: point evolve8enterprises.com to Vercel via Squarespace DNS (A record `76.76.21.21` and CNAME `www → cname.vercel-dns.com`). Vercel will issue a TLS cert automatically.

### Cloudflare Pages, Netlify, or Render

All work the same. Build command: `next build`. Output: `.next`.

---

## Email routing (Cloudflare Email Routing)

The site references four addresses:

- `press@evolve8enterprises.com` — media
- `donate@evolve8enterprises.com` — donors / sponsors
- `founder@evolve8enterprises.com` — investors / partners
- `hello@evolve8enterprises.com` — everything else

**To make those addresses actually receive mail without paying Google Workspace:**
1. In your Squarespace DNS, add Cloudflare's MX records (Cloudflare provides them when you enable Email Routing).
2. In Cloudflare → Email → Email Routing, add each address and forward to `reyaporche@gmail.com`.
3. To **send from** these addresses, the cleanest free path is Gmail's "Send mail as" feature using a free SMTP like SendGrid (free tier) or Resend with a verified subdomain. See `app/api/subscribe/route.ts` for the backend hook.

---

## Legal & compliance

The site is engineered to satisfy four locked disclaimers (see `app/legal/disclaimer/page.tsx`):

1. **No government affiliation.** Evolve8 and Vivinate Farms are not government agencies.
2. **Public Action Network is not legal advice.** No attorney-client relationship.
3. **Macro8 is not investment advice.** No promised returns.
4. **Land Competition is merit-based, not a lottery.** Two tracks. No chance element. Not a sweepstakes, raffle, or guaranteed transfer of property. (Texas Penal Code Chapter 47.)

Resilience Points: non-cash internal participation credits. Not currency, securities, or wages.

---

## Contact

- Founder: Reya Porche · reyaporche@vivinatefarms.org · 469-844-7627
- Fiscal sponsor: [Far Away Projects](https://www.farawayprojects.org/) · 501(c)(3), EIN 82-1917723

---

© 2026 Evolve8 Enterprises. Dallas-Fort Worth, TX.
