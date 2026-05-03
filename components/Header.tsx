"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const LEGAL_ITEMS = [
  { href: "/legal", label: "Public Action & Class Actions" },
  { href: "/legal/help-platform", label: "Legal Help Platform" },
];

const MEDICAL_ITEMS = [
  { href: "/medical/food-prescription", label: "Food Prescription Campaign" },
  { href: "/medical/way-stations", label: "Way Stations" },
];

const MONEY_ITEMS = [
  { href: "/money/whitepaper", label: "Macro8 White Paper" },
  { href: "/money/families", label: "For Families & Beginners" },
  { href: "/money/investors", label: "For Investors & Coders" },
];

const EDUCATION_ITEMS = [
  { href: "/education-library", label: "All Lessons" },
  { href: "/education-library#silent-apocalypse", label: "Silent Apocalypse" },
  { href: "/education-library#work-ai", label: "Work & AI Readiness" },
  { href: "/education-library#food-water", label: "Food & Water Security" },
  { href: "/education-library#housing-land", label: "Housing & Land" },
  { href: "/education-library#health-medical", label: "Health & Medical" },
  { href: "/education-library#legal", label: "Legal Action" },
  { href: "/education-library#money", label: "Money & Financial Literacy" },
  { href: "/education-library#skills", label: "Skills & Community" },
];

const ABOUT_ITEMS = [
  { href: "/about", label: "About Us" },
  { href: "/blog", label: "Blog" },
  { href: "/press", label: "Media Kit" },
  { href: "/disclaimers", label: "Disclaimers" },
  { href: "/contact", label: "Contact Us" },
];

type DropdownName = "legal" | "medical" | "money" | "education" | "about" | null;

function NavDropdown({ label, items, open, onToggle, onClose }: {
  label: string;
  items: { href: string; label: string }[];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        className={`flex items-center gap-1 whitespace-nowrap select-none transition-colors ${
          open ? "text-accent" : "text-bone/85 hover:text-accent"
        }`}
      >
        {label}
        <span className={`text-[8px] opacity-50 transition-transform ${open ? "rotate-180" : ""}`}>▾</span>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-[#0d0d0d] border border-line z-50 shadow-2xl">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className="block px-4 py-2.5 text-xs text-bone/80 hover:text-accent hover:bg-white/4 transition-colors border-b border-line/40 last:border-b-0"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<DropdownName>(null);
  const [mobileExpanded, setMobileExpanded] = useState<DropdownName>(null);

  const toggle = (name: DropdownName) =>
    setActiveDropdown((prev) => (prev === name ? null : name));

  const close = () => setActiveDropdown(null);

  const toggleMobile = (name: DropdownName) =>
    setMobileExpanded((prev) => (prev === name ? null : name));

  return (
    <>
      {/* Transparent overlay — closes dropdown when clicking anywhere outside */}
      {activeDropdown && (
        <div
          className="fixed inset-0 z-40"
          onClick={close}
          aria-hidden="true"
        />
      )}

      <header className="sticky top-0 z-50 bg-ink border-b border-line">
        <div className="container-x flex items-center justify-between h-14 gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0" aria-label="Evolve8 Enterprises home">
            <Image src="/logo.jpg" alt="Evolve8 Enterprises" width={26} height={26} className="rounded-sm" priority />
            <span className="h-display text-bone text-sm tracking-tight hidden sm:block">Evolve8 Enterprises</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-5 text-xs flex-1 justify-center relative z-50">
            <Link href="/silent-apocalypse" className="hover:text-accent transition-colors whitespace-nowrap text-bone/85">
              Silent Apocalypse
            </Link>

            <NavDropdown label="Legal" items={LEGAL_ITEMS}
              open={activeDropdown === "legal"}
              onToggle={() => toggle("legal")}
              onClose={close} />

            <NavDropdown label="Medical" items={MEDICAL_ITEMS}
              open={activeDropdown === "medical"}
              onToggle={() => toggle("medical")}
              onClose={close} />

            <Link href="/food" className="hover:text-accent transition-colors whitespace-nowrap text-bone/85">Food</Link>

            <NavDropdown label="Money" items={MONEY_ITEMS}
              open={activeDropdown === "money"}
              onToggle={() => toggle("money")}
              onClose={close} />

            <Link href="/work" className="hover:text-accent transition-colors whitespace-nowrap text-bone/85">Work</Link>
            <Link href="/land" className="hover:text-accent transition-colors whitespace-nowrap text-bone/85">Land</Link>
            <Link href="/skills" className="hover:text-accent transition-colors whitespace-nowrap text-bone/85">Skills</Link>

            <NavDropdown label="Education" items={EDUCATION_ITEMS}
              open={activeDropdown === "education"}
              onToggle={() => toggle("education")}
              onClose={close} />

            <NavDropdown label="About" items={ABOUT_ITEMS}
              open={activeDropdown === "about"}
              onToggle={() => toggle("about")}
              onClose={close} />
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden xl:flex items-center gap-2 shrink-0 relative z-50">
            <Link href="/donate" className="btn-nav">Donate</Link>
            <Link href="/land" className="btn-nav">Apply for Land</Link>
            <Link href="/simulator" className="btn-nav-accent">Simulator →</Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="xl:hidden flex flex-col justify-center gap-[5px] p-1.5 text-bone"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span className={`block w-5 h-[1.5px] bg-bone transition-all duration-200 ${mobileOpen ? "rotate-45 translate-y-[6.5px]" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-bone transition-all duration-200 ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-[1.5px] bg-bone transition-all duration-200 ${mobileOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
          </button>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="xl:hidden border-t border-line bg-[#080808]">
            <div className="container-x py-5 flex flex-col gap-1">
              {[
                { href: "/silent-apocalypse", label: "Silent Apocalypse" },
                { href: "/food", label: "Food" },
                { href: "/work", label: "Work" },
                { href: "/land", label: "Land" },
                { href: "/skills", label: "Skills" },
              ].map((n) => (
                <Link key={n.href} href={n.href}
                  onClick={() => setMobileOpen(false)}
                  className="py-2.5 text-sm text-bone/85 border-b border-line/30 hover:text-accent transition-colors">
                  {n.label}
                </Link>
              ))}

              {([
                { name: "legal" as DropdownName, label: "Legal", items: LEGAL_ITEMS },
                { name: "medical" as DropdownName, label: "Medical", items: MEDICAL_ITEMS },
                { name: "money" as DropdownName, label: "Money", items: MONEY_ITEMS },
                { name: "education" as DropdownName, label: "Education Library", items: EDUCATION_ITEMS },
                { name: "about" as DropdownName, label: "About", items: ABOUT_ITEMS },
              ] as const).map(({ name, label, items }) => (
                <div key={name as string} className="border-b border-line/30">
                  <button
                    onClick={() => toggleMobile(name)}
                    className="w-full text-left py-2.5 text-sm text-bone/85 flex items-center justify-between"
                  >
                    {label}
                    <span className="text-[10px] opacity-50">{mobileExpanded === name ? "▴" : "▾"}</span>
                  </button>
                  {mobileExpanded === name && (
                    <div className="pb-2 pl-3 flex flex-col gap-1 border-l border-line/40 ml-1">
                      {items.map((item) => (
                        <Link key={item.href} href={item.href}
                          onClick={() => setMobileOpen(false)}
                          className="py-1.5 text-xs text-bone/65 hover:text-accent transition-colors">
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <div className="flex gap-2 pt-3 flex-wrap">
                <Link href="/donate" onClick={() => setMobileOpen(false)} className="btn-nav flex-1 justify-center">Donate</Link>
                <Link href="/land" onClick={() => setMobileOpen(false)} className="btn-nav flex-1 justify-center">Apply for Land</Link>
                <Link href="/simulator" onClick={() => setMobileOpen(false)} className="btn-nav-accent w-full justify-center">Simulator →</Link>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
