"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Badge from "@/components/ui/Badge";

const faqKeys = [1, 2, 3, 4, 5, 6, 7];

export default function FAQ() {
  const { locale } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = faqKeys.map((k) => ({
    q: t(`faq.${k}.q`, locale),
    a: t(`faq.${k}.a`, locale),
  }));

  return (
    <section className="py-28 bg-[#0a0a0f]">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-4">
            <Badge variant="accent">{t("faq.badge", locale)}</Badge>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#f1f5f9] tracking-tight">
            {t("faq.title", locale)}
          </motion.h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col gap-3"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`rounded-xl border transition-all duration-200 overflow-hidden ${
                openIndex === i
                  ? "border-[#6366f1]/40 bg-[#6366f1]/5"
                  : "border-[#1e1e2e] bg-white/[0.02] hover:border-[#6366f1]/20"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer"
                aria-expanded={openIndex === i}
                aria-controls={`faq-panel-${i}`}
              >
                <span className="text-sm font-medium text-[#f1f5f9]">{faq.q}</span>
                <span
                  className={`flex-shrink-0 w-5 h-5 rounded-full border flex items-center justify-center transition-all duration-200 ${
                    openIndex === i
                      ? "border-[#6366f1] bg-[#6366f1] rotate-45"
                      : "border-[#64748b]"
                  }`}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M5 1v8M1 5h8" strokeLinecap="round" />
                  </svg>
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    id={`faq-panel-${i}`}
                    role="region"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <div className="px-6 pb-5">
                      <p className="text-sm text-[#94a3b8] leading-relaxed">{faq.a}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
