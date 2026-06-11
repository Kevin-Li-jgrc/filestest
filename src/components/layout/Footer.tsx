"use client";

import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";
import { mailto } from "@/lib/site";

const footerLinks = {
  product: [
    { label: { en: "Features", zh: "功能特性" }, href: "#features" },
    { label: { en: "Pricing", zh: "定价方案" }, href: "#pricing" },
    { label: { en: "Templates", zh: "模板库" }, href: "#templates" },
    { label: { en: "Changelog", zh: "更新日志" }, href: "#" },
  ],
  company: [
    { label: { en: "About", zh: "关于我们" }, href: "#" },
    { label: { en: "Blog", zh: "博客" }, href: "#" },
    { label: { en: "Careers", zh: "招聘" }, href: "#" },
    { label: { en: "Contact", zh: "联系我们" }, href: mailto("AgentForge Contact") },
  ],
  legal: [
    { label: { en: "Privacy Policy", zh: "隐私政策" }, href: "#" },
    { label: { en: "Terms of Service", zh: "服务条款" }, href: "#" },
    { label: { en: "Cookie Policy", zh: "Cookie 政策" }, href: "#" },
  ],
};

export default function Footer() {
  const { locale } = useLanguage();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="border-t border-[#1e1e2e] bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
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
            </div>
            <p className="text-sm text-[#64748b] leading-relaxed mb-6">
              {t("footer.tagline", locale)}
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Kevin-Li-jgrc/filestest"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-[#64748b] hover:text-[#f1f5f9] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href={mailto("AgentForge Contact")}
                aria-label="Email"
                className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 text-[#64748b] hover:text-[#f1f5f9] transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-sm font-semibold text-[#f1f5f9] mb-4">{t("footer.product", locale)}</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label.en}>
                  <a href={link.href} className="text-sm text-[#64748b] hover:text-[#f1f5f9] transition-colors">
                    {locale === "zh" ? link.label.zh : link.label.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#f1f5f9] mb-4">{t("footer.company", locale)}</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label.en}>
                  <a href={link.href} className="text-sm text-[#64748b] hover:text-[#f1f5f9] transition-colors">
                    {locale === "zh" ? link.label.zh : link.label.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-[#f1f5f9] mb-4">{t("footer.legal", locale)}</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label.en}>
                  <a href={link.href} className="text-sm text-[#64748b] hover:text-[#f1f5f9] transition-colors">
                    {locale === "zh" ? link.label.zh : link.label.en}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-[#1e1e2e] gap-4">
          <p className="text-sm text-[#64748b]">{t("footer.copyright", locale)}</p>
          <button
            onClick={scrollToTop}
            className="text-sm text-[#64748b] hover:text-[#6366f1] transition-colors flex items-center gap-2 cursor-pointer"
          >
            {t("footer.back_top", locale)}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M7 11V3M3 7l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
