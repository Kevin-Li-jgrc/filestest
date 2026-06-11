"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";
import { fadeUp, staggerContainer } from "@/lib/motion";
import { mailto } from "@/lib/site";
import Button from "@/components/ui/Button";

export default function CTA() {
  const { locale } = useLanguage();

  return (
    <section id="cta" className="py-28 bg-[#111118] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#6366f1]/12 blur-[100px]" />
        <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-purple-500/8 blur-[80px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center"
        >
          {/* Decorative dots */}
          <motion.div variants={fadeUp} className="flex justify-center gap-2 mb-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-[#6366f1]"
                style={{ opacity: 0.3 + i * 0.35 }}
              />
            ))}
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold text-[#f1f5f9] tracking-tight mb-6 leading-tight"
          >
            {t("cta.title", locale)}
          </motion.h2>

          <motion.p variants={fadeUp} className="text-lg text-[#94a3b8] mb-10 max-w-2xl mx-auto leading-relaxed">
            {t("cta.subtitle", locale)}
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" href={mailto("AgentForge Early Access")}>
              {t("cta.primary", locale)}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Button>
            <Button variant="outline" size="lg" href={mailto("AgentForge Sales Inquiry")}>
              {t("cta.secondary", locale)}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
