"use client";

import { createContext, useContext, useEffect, ReactNode } from "react";

export type Locale = "en" | "zh";

const LanguageContext = createContext<Locale>("en");

// Locale is determined by the route (/ = en, /zh/ = zh) so both languages
// exist as static HTML for search engines — no client-side language state.
export function LanguageProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: ReactNode;
}) {
  useEffect(() => {
    document.documentElement.lang = locale === "zh" ? "zh-CN" : "en";
  }, [locale]);

  return (
    <LanguageContext.Provider value={locale}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return { locale: useContext(LanguageContext) };
}
