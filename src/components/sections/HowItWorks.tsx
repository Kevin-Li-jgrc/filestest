"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Badge from "@/components/ui/Badge";

const stepIcons = [
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
  </svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <path d="M12 8v4l3 3" />
  </svg>,
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>,
];

export default function HowItWorks() {
  const { locale } = useLanguage();

  const steps = Array.from({ length: 4 }, (_, i) => ({
    number: `0${i + 1}`,
    title: t(`how.${i + 1}.title`, locale),
    desc: t(`how.${i + 1}.desc`, locale),
    icon: stepIcons[i],
  }));

  return (
    <section id="how-it-works" className="py-28 bg-[#111118] relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#6366f1]/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-20"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-4">
            <Badge variant="accent">{t("how.badge", locale)}</Badge>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#f1f5f9] mb-4 tracking-tight">
            {t("how.title", locale)}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
            {t("how.subtitle", locale)}
          </motion.p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-10 left-0 right-0 h-px">
            <div className="mx-[12.5%] h-px bg-gradient-to-r from-[#6366f1]/0 via-[#6366f1]/40 to-[#6366f1]/0" />
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, i) => (
              <motion.div key={i} variants={fadeUp} className="flex flex-col items-center text-center lg:items-start lg:text-left">
                {/* Number + icon */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-[#6366f1]/10 border border-[#6366f1]/20 flex items-center justify-center text-[#6366f1] relative z-10">
                    {step.icon}
                  </div>
                  <span className="absolute -top-2 -right-2 text-xs font-bold text-[#6366f1] bg-[#111118] border border-[#6366f1]/30 rounded-full w-6 h-6 flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>
                <div className="text-xs font-mono text-[#6366f1] mb-2 tracking-widest">{step.number}</div>
                <h3 className="text-lg font-semibold text-[#f1f5f9] mb-3">{step.title}</h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
