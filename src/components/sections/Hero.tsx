"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { t } from "@/lib/i18n";
import { fadeUp, fadeIn, staggerContainer } from "@/lib/motion";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import GradientText from "@/components/ui/GradientText";

const platforms = ["Notion", "Slack", "GitHub", "Gmail", "Jira", "Figma"];

export default function Hero() {
  const { locale } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] rounded-full bg-[#6366f1]/8 blur-[120px]" />
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] rounded-full bg-purple-500/5 blur-[100px]" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-pink-500/5 blur-[100px]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-6 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.div variants={fadeUp}>
              <Badge variant="accent">
                <span className="w-1.5 h-1.5 rounded-full bg-[#818cf8] animate-pulse" />
                {t("hero.badge", locale)}
              </Badge>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-5xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
            >
              <span className="text-[#f1f5f9]">{t("hero.headline1", locale)} </span>
              <GradientText animate>{t("hero.headline2", locale)}</GradientText>
              <br />
              <span className="text-[#94a3b8]">{t("hero.headline3", locale)}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-[#94a3b8] leading-relaxed max-w-xl"
            >
              {t("hero.subheadline", locale)}
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
              <Button size="lg" href="#cta">
                {t("hero.cta.primary", locale)}
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Button>
              <Button variant="outline" size="lg" href="#">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm-1.5 11.5v-7l5 3.5-5 3.5z" />
                </svg>
                {t("hero.cta.secondary", locale)}
              </Button>
            </motion.div>

            {/* Platform logos */}
            <motion.div variants={fadeIn} className="pt-6">
              <p className="text-xs text-[#64748b] mb-3 uppercase tracking-widest font-medium">
                {t("hero.compatible", locale)}
              </p>
              <div className="flex flex-wrap gap-2">
                {platforms.map((p) => (
                  <span
                    key={p}
                    className="px-3 py-1.5 text-xs font-medium text-[#94a3b8] bg-white/5 border border-white/8 rounded-lg"
                  >
                    {p}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Agent flow diagram */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex items-center justify-center animate-float"
          >
            <AgentDiagram />
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-[#1e1e2e] pt-12"
        >
          {[
            { value: "2,400+", label: locale === "zh" ? "活跃构建者" : "Active Builders" },
            { value: "50+", label: locale === "zh" ? "内置集成" : "Built-in Integrations" },
            { value: "99.9%", label: locale === "zh" ? "正常运行率" : "Uptime SLA" },
            { value: "< 200ms", label: locale === "zh" ? "平均响应时间" : "Avg Response Time" },
          ].map((stat) => (
            <motion.div key={stat.label} variants={fadeUp} className="text-center">
              <div className="text-3xl font-bold text-[#f1f5f9] mb-1">{stat.value}</div>
              <div className="text-sm text-[#64748b]">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function AgentDiagram() {
  const nodes = [
    { id: "input", label: "Input", x: 50, y: 180, color: "#6366f1" },
    { id: "memory", label: "Memory", x: 230, y: 80, color: "#a78bfa" },
    { id: "brain", label: "Agent Brain", x: 230, y: 220, color: "#818cf8", large: true },
    { id: "tools", label: "Tools", x: 230, y: 360, color: "#f472b6" },
    { id: "output", label: "Output", x: 410, y: 220, color: "#10b981" },
  ];

  const edges = [
    { x1: 100, y1: 180, x2: 210, y2: 220 },
    { x1: 100, y1: 180, x2: 210, y2: 80 },
    { x1: 100, y1: 180, x2: 210, y2: 360 },
    { x1: 280, y1: 220, x2: 390, y2: 220 },
    { x1: 250, y1: 100, x2: 250, y2: 200 },
    { x1: 250, y1: 240, x2: 250, y2: 340 },
  ];

  return (
    <div className="relative w-full max-w-lg">
      {/* Outer glow card */}
      <div className="card-glass rounded-3xl p-8 glow-accent">
        <svg
          viewBox="0 0 480 460"
          className="w-full h-auto"
          style={{ overflow: "visible" }}
        >
          {/* Animated edges */}
          {edges.map((edge, i) => (
            <g key={i}>
              <line
                x1={edge.x1}
                y1={edge.y1}
                x2={edge.x2}
                y2={edge.y2}
                stroke="#1e1e2e"
                strokeWidth="2"
              />
              <line
                x1={edge.x1}
                y1={edge.y1}
                x2={edge.x2}
                y2={edge.y2}
                stroke="#6366f1"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeOpacity="0.6"
                className="animate-dash"
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            </g>
          ))}

          {/* Nodes */}
          {nodes.map((node) => (
            <g key={node.id} transform={`translate(${node.x}, ${node.y})`}>
              {/* Pulse ring */}
              <circle
                r={node.large ? 44 : 34}
                fill="none"
                stroke={node.color}
                strokeWidth="1"
                opacity="0.15"
              />
              <circle
                r={node.large ? 34 : 26}
                fill={`${node.color}15`}
                stroke={node.color}
                strokeWidth="1.5"
                strokeOpacity="0.5"
              />
              {node.large && (
                <circle r="34" fill={`${node.color}25`} stroke={node.color} strokeWidth="2" strokeOpacity="0.8" />
              )}
              {/* Label */}
              <text
                textAnchor="middle"
                dominantBaseline="middle"
                fill={node.large ? "#f1f5f9" : "#94a3b8"}
                fontSize={node.large ? "11" : "9"}
                fontWeight={node.large ? "700" : "500"}
                fontFamily="Inter, system-ui, sans-serif"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>

      {/* Floating stat cards */}
      <div className="absolute -top-4 -right-4 bg-[#111118] border border-[#1e1e2e] rounded-xl px-3 py-2 text-xs font-medium text-[#10b981]">
        ● Live
      </div>
      <div className="absolute -bottom-4 -left-4 bg-[#111118] border border-[#1e1e2e] rounded-xl px-3 py-2 text-xs text-[#94a3b8]">
        <span className="text-[#f1f5f9] font-semibold">3 </span>tools active
      </div>
    </div>
  );
}
