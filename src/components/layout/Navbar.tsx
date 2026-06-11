"use client";

import { useState } from "react";
import { useScrollY } from "@/hooks/useScrollProgress";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";
import LanguageToggle from "@/components/ui/LanguageToggle";
import Button from "@/components/ui/Button";
import { clsx } from "clsx";

export default function Navbar() {
  const scrollY = useScrollY();
  const { locale } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrolled = scrollY > 60;

  const navLinks = [
    { key: "nav.features", href: "#features" },
    { key: "nav.howItWorks", href: "#how-it-works" },
    { key: "nav.templates", href: "#templates" },
    { key: "nav.pricing", href: "#pricing" },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-[#1e1e2e]"
          : "bg-transparent"
      )}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#6366f1] flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="3" fill="white" />
              <path d="M9 2v3M9 13v3M2 9h3M13 9h3" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              <circle cx="4" cy="4" r="1.5" fill="white" fillOpacity="0.5" />
              <circle cx="14" cy="4" r="1.5" fill="white" fillOpacity="0.5" />
              <circle cx="4" cy="14" r="1.5" fill="white" fillOpacity="0.5" />
              <circle cx="14" cy="14" r="1.5" fill="white" fillOpacity="0.5" />
            </svg>
          </div>
          <span className="font-bold text-[#f1f5f9] text-lg tracking-tight">AgentForge</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              className="text-sm text-[#94a3b8] hover:text-[#f1f5f9] transition-colors duration-200"
            >
              {t(link.key, locale)}
            </a>
          ))}
        </nav>

        {/* Right */}
        <div className="hidden md:flex items-center gap-3">
          <LanguageToggle />
          <Button size="sm" href="#cta">{t("nav.cta", locale)}</Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-[#94a3b8] hover:text-[#f1f5f9] p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            {menuOpen ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" />
            ) : (
              <path fillRule="evenodd" clipRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#111118] border-b border-[#1e1e2e] px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-[#94a3b8] hover:text-[#f1f5f9] transition-colors"
            >
              {t(link.key, locale)}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2 border-t border-[#1e1e2e]">
            <LanguageToggle />
            <Button size="sm" href="#cta">{t("nav.cta", locale)}</Button>
          </div>
        </div>
      )}
    </header>
  );
}
