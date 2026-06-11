"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

const featureIcons = [
  // Custom Persona
  <svg key="1" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="7" r="4" />
    <path d="M3 19c0-4 3.6-7 8-7s8 3 8 7" />
    <path d="M15 5l1.5 1.5M15 9l1.5-1.5" stroke="currentColor" strokeOpacity="0.5" />
  </svg>,
  // Tool Integration
  <svg key="2" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14.5 2.5l-7 7M5 11l6 6M2.5 14.5l5 5 10-10L12.5 4.5l-10 10z" />
  </svg>,
  // Memory
  <svg key="3" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="11" cy="11" rx="8" ry="5" />
    <path d="M3 11v4c0 2.76 3.58 5 8 5s8-2.24 8-5v-4" />
    <path d="M3 15v4c0 2.76 3.58 5 8 5s8-2.24 8-5v-4" />
  </svg>,
  // Multi-Agent
  <svg key="4" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="3" />
    <circle cx="4" cy="4" r="2" />
    <circle cx="18" cy="4" r="2" />
    <circle cx="4" cy="18" r="2" />
    <circle cx="18" cy="18" r="2" />
    <path d="M7 7l2.5 2.5M13 7l-2.5 2.5M7 15l2.5-2.5M13 15l-2.5-2.5" />
  </svg>,
  // Security
  <svg key="5" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 2L4 5v6c0 4.4 3 8.5 7 9.5 4-1 7-5.1 7-9.5V5L11 2z" />
    <path d="M8 11l2 2 4-4" />
  </svg>,
  // Analytics
  <svg key="6" width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 18V10M8 18V6M12 18V12M16 18V8M20 18V4" />
    <path d="M2 18h20" />
  </svg>,
];

const accentColors = [
  "#6366f1", "#a78bfa", "#818cf8", "#f472b6", "#10b981", "#f59e0b",
];

export default function Features() {
  const { locale } = useLanguage();

  const features = Array.from({ length: 6 }, (_, i) => ({
    title: t(`features.${i + 1}.title`, locale),
    desc: t(`features.${i + 1}.desc`, locale),
    icon: featureIcons[i],
    color: accentColors[i],
  }));

  return (
    <section id="features" className="py-28 bg-[#0a0a0f] relative">
      {/* Subtle divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-transparent via-[#6366f1]/50 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-4">
            <Badge variant="accent">{t("features.badge", locale)}</Badge>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#f1f5f9] mb-4 tracking-tight">
            {t("features.title", locale)}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
            {t("features.subtitle", locale)}
          </motion.p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map((feature, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card className="group h-full">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${feature.color}18`, color: feature.color }}
                >
                  {feature.icon}
                </div>
                <h3 className="text-base font-semibold text-[#f1f5f9] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed">{feature.desc}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
