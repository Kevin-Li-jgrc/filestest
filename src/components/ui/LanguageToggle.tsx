"use client";

import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageToggle() {
  const { locale } = useLanguage();

  const base = "px-3 py-1 rounded-md text-xs font-semibold transition-all duration-200";
  const active = "bg-[#6366f1] text-white";
  const inactive = "text-[#94a3b8] hover:text-[#f1f5f9]";

  return (
    <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-lg p-1">
      <Link href="/" className={`${base} ${locale === "en" ? active : inactive}`}>
        EN
      </Link>
      <Link href="/zh" className={`${base} ${locale === "zh" ? active : inactive}`}>
        中文
      </Link>
    </div>
  );
}
