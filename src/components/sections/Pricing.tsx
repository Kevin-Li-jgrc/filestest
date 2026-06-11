"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

const tiers = [
  {
    key: "free",
    priceMonthly: 0,
    priceAnnual: 0,
    features: [
      { en: "1 Agent", zh: "1 个 Agent" },
      { en: "1,000 API calls/mo", zh: "每月 1,000 次 API 调用" },
      { en: "7-day memory", zh: "7 天记忆存储" },
      { en: "5 integrations", zh: "5 个集成" },
      { en: "Community support", zh: "社区支持" },
    ],
    highlighted: false,
    cta: "pricing.free.cta",
    ctaVariant: "outline" as const,
  },
  {
    key: "pro",
    priceMonthly: 19,
    priceAnnual: 15,
    features: [
      { en: "10 Agents", zh: "10 个 Agent" },
      { en: "50,000 API calls/mo", zh: "每月 50,000 次 API 调用" },
      { en: "90-day memory", zh: "90 天记忆存储" },
      { en: "All 50+ integrations", zh: "全部 50+ 集成" },
      { en: "Email support", zh: "邮件支持" },
      { en: "Custom personas", zh: "自定义人格" },
      { en: "Priority inference", zh: "优先推理" },
    ],
    highlighted: true,
    cta: "pricing.pro.cta",
    ctaVariant: "primary" as const,
  },
  {
    key: "enterprise",
    priceMonthly: null,
    priceAnnual: null,
    features: [
      { en: "Unlimited Agents", zh: "无限 Agent" },
      { en: "Unlimited API calls", zh: "无限 API 调用" },
      { en: "Forever memory", zh: "永久记忆存储" },
      { en: "Custom integrations", zh: "定制集成" },
      { en: "Dedicated support", zh: "专属支持" },
      { en: "Self-hosted option", zh: "自托管选项" },
      { en: "SLA guarantee", zh: "SLA 保障" },
    ],
    highlighted: false,
    cta: "pricing.enterprise.cta",
    ctaVariant: "outline" as const,
  },
];

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-[#10b981] flex-shrink-0">
      <circle cx="8" cy="8" r="7" fill="currentColor" fillOpacity="0.15" />
      <path d="M5 8l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Pricing() {
  const { locale } = useLanguage();
  const [annual, setAnnual] = useState(false);

  return (
    <section id="pricing" className="py-28 bg-[#111118]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <motion.div variants={fadeUp} className="flex justify-center mb-4">
            <Badge variant="accent">{t("pricing.badge", locale)}</Badge>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#f1f5f9] mb-4 tracking-tight">
            {t("pricing.title", locale)}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
            {t("pricing.subtitle", locale)}
          </motion.p>

          {/* Billing toggle */}
          <motion.div variants={fadeUp} className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-sm ${!annual ? "text-[#f1f5f9]" : "text-[#64748b]"}`}>
              {t("pricing.monthly", locale)}
            </span>
            <button
              onClick={() => setAnnual(!annual)}
              className={`relative w-12 h-6 rounded-full transition-colors duration-300 cursor-pointer ${annual ? "bg-[#6366f1]" : "bg-white/10"}`}
            >
              <span
                className={`absolute top-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-300 ${annual ? "translate-x-6" : "translate-x-0.5"}`}
              />
            </button>
            <span className={`text-sm flex items-center gap-2 ${annual ? "text-[#f1f5f9]" : "text-[#64748b]"}`}>
              {t("pricing.annual", locale)}
              <Badge variant="success" className="text-xs">{t("pricing.save", locale)}</Badge>
            </span>
          </motion.div>
        </motion.div>

        {/* Tiers */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
        >
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.key}
              variants={fadeUp}
              className={`relative rounded-2xl p-8 flex flex-col gap-6 ${
                tier.highlighted
                  ? "bg-[#6366f1]/8 border-2 border-[#6366f1]/60 shadow-2xl shadow-[#6366f1]/20 md:scale-105 md:-mt-4"
                  : "card-glass"
              }`}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge variant="accent">{t("pricing.popular", locale)}</Badge>
                </div>
              )}

              {/* Plan name & price */}
              <div>
                <div className="text-sm font-semibold text-[#6366f1] mb-2">
                  {t(`pricing.${tier.key}.name`, locale)}
                </div>
                <div className="flex items-end gap-2 mb-2">
                  {tier.priceMonthly === null ? (
                    <span className="text-4xl font-bold text-[#f1f5f9]">
                      {t(`pricing.enterprise.price`, locale)}
                    </span>
                  ) : tier.priceMonthly === 0 ? (
                    <span className="text-4xl font-bold text-[#f1f5f9]">
                      {t("pricing.free.price", locale)}
                    </span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold text-[#f1f5f9]">
                        ${annual ? tier.priceAnnual : tier.priceMonthly}
                      </span>
                      <span className="text-[#64748b] text-sm mb-1">/mo</span>
                    </>
                  )}
                </div>
                <p className="text-sm text-[#94a3b8]">{t(`pricing.${tier.key}.desc`, locale)}</p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1">
                {tier.features.map((feat, j) => (
                  <li key={j} className="flex items-center gap-2.5 text-sm text-[#94a3b8]">
                    <CheckIcon />
                    {locale === "zh" ? feat.zh : feat.en}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant={tier.ctaVariant} href="#cta" className="w-full justify-center">
                {t(tier.cta, locale)}
              </Button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
