"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";
import { fadeUp, staggerContainer } from "@/lib/motion";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";

type Category = "all" | "productivity" | "development" | "communication";

const templates = [
  {
    emoji: "🔍",
    name: { en: "Research Assistant", zh: "研究助手" },
    desc: { en: "Searches the web, summarizes papers, and generates comprehensive reports on any topic.", zh: "搜索网络、总结论文，就任意主题生成综合报告。" },
    tags: ["productivity"],
    badge: "Popular",
    badgeVariant: "accent" as const,
  },
  {
    emoji: "💻",
    name: { en: "Code Reviewer", zh: "代码审查员" },
    desc: { en: "Reviews pull requests, explains diffs, suggests improvements, and catches bugs automatically.", zh: "审查 Pull Request、解释差异、提出改进建议并自动发现 Bug。" },
    tags: ["development"],
    badge: "Popular",
    badgeVariant: "accent" as const,
  },
  {
    emoji: "💬",
    name: { en: "Customer Support", zh: "客服助理" },
    desc: { en: "Answers FAQs from your docs, handles common queries, and escalates complex cases to humans.", zh: "从文档中回答常见问题，处理常规查询，并将复杂案例转交人工处理。" },
    tags: ["communication"],
    badge: "New",
    badgeVariant: "new" as const,
  },
  {
    emoji: "📊",
    name: { en: "Data Analyst", zh: "数据分析师" },
    desc: { en: "Queries databases, builds charts, identifies trends, and narrates findings in plain language.", zh: "查询数据库、构建图表、识别趋势，并用通俗语言阐述分析结论。" },
    tags: ["productivity", "development"],
    badge: undefined,
    badgeVariant: undefined,
  },
  {
    emoji: "📅",
    name: { en: "Personal Secretary", zh: "个人秘书" },
    desc: { en: "Manages your calendar, drafts emails, tracks action items, and keeps your schedule optimized.", zh: "管理日历、起草邮件、追踪待办事项，持续优化你的日程安排。" },
    tags: ["productivity", "communication"],
    badge: undefined,
    badgeVariant: undefined,
  },
  {
    emoji: "✍️",
    name: { en: "Content Creator", zh: "内容创作者" },
    desc: { en: "Writes blog posts, social copy, and marketing materials. Translates content to any language.", zh: "撰写博客文章、社交媒体文案和营销材料，支持翻译为任意语言。" },
    tags: ["communication"],
    badge: "New",
    badgeVariant: "new" as const,
  },
];

const categoryFilters: { key: Category; i18n: string }[] = [
  { key: "all", i18n: "usecases.filter.all" },
  { key: "productivity", i18n: "usecases.filter.productivity" },
  { key: "development", i18n: "usecases.filter.development" },
  { key: "communication", i18n: "usecases.filter.communication" },
];

export default function UseCases() {
  const { locale } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filtered = templates.filter(
    (tmpl) => activeFilter === "all" || tmpl.tags.includes(activeFilter)
  );

  return (
    <section id="templates" className="py-28 bg-[#0a0a0f]">
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
            <Badge variant="accent">{t("usecases.badge", locale)}</Badge>
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl font-bold text-[#f1f5f9] mb-4 tracking-tight">
            {t("usecases.title", locale)}
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-[#94a3b8] max-w-2xl mx-auto">
            {t("usecases.subtitle", locale)}
          </motion.p>
        </motion.div>

        {/* Filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {categoryFilters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 cursor-pointer ${
                activeFilter === filter.key
                  ? "bg-[#6366f1] text-white"
                  : "bg-white/5 text-[#94a3b8] hover:text-[#f1f5f9] border border-white/8"
              }`}
            >
              {t(filter.i18n, locale)}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <motion.div
          key={activeFilter}
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((tmpl, i) => (
            <motion.div key={i} variants={fadeUp}>
              <Card className="group flex flex-col h-full">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{tmpl.emoji}</span>
                  {tmpl.badge && (
                    <Badge variant={tmpl.badgeVariant ?? "default"}>{tmpl.badge}</Badge>
                  )}
                </div>
                <h3 className="text-base font-semibold text-[#f1f5f9] mb-2">
                  {locale === "zh" ? tmpl.name.zh : tmpl.name.en}
                </h3>
                <p className="text-sm text-[#94a3b8] leading-relaxed flex-1">
                  {locale === "zh" ? tmpl.desc.zh : tmpl.desc.en}
                </p>
                <div className="mt-4 pt-4 border-t border-white/5">
                  <a
                    href="#cta"
                    className="text-sm font-medium text-[#6366f1] hover:text-[#818cf8] transition-colors flex items-center gap-1.5 group"
                  >
                    {t("usecases.use", locale)}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.8" className="transition-transform group-hover:translate-x-0.5">
                      <path d="M3 7h8M7 3l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
