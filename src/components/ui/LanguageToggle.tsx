"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { locale, setLocale } = useLanguage();

  return (
    <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1">
      <button
        onClick={() => setLocale("en")}
        className={`px-3 py-1 rounded-md text-xs font-semibold transition-all duration-200 cursor-pointer ${
          locale === "en"
            ? "bg-[#6366f1] text-white"
            : "text-[#94a3b8] hover:text-[#f1f5f9]"
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale("zh")}
        className={`px-3 py-1 rounded-md text-xs font-semibold transition-all duration-200 cursor-pointer ${
          locale === "zh"
            ? "bg-[#6366f1] text-white"
            : "text-[#94a3b8] hover:text-[#f1f5f9]"
        }`}
      >
        中文
      </button>
    </div>
  );
}
