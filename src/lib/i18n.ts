type Locale = "en" | "zh";

type I18nMap = {
  [key: string]: { en: string; zh: string };
};

const strings: I18nMap = {
  // Navbar
  "nav.features": { en: "Features", zh: "功能特性" },
  "nav.howItWorks": { en: "How It Works", zh: "使用流程" },
  "nav.templates": { en: "Templates", zh: "模板库" },
  "nav.pricing": { en: "Pricing", zh: "定价" },
  "nav.cta": { en: "Get Early Access", zh: "立即体验" },

  // Hero
  "hero.badge": { en: "Now in Beta — Early access open", zh: "公测中 — 抢先体验开放" },
  "hero.headline1": { en: "Build Your Own", zh: "打造你的" },
  "hero.headline2": { en: "AI Agent.", zh: "专属 AI Agent。" },
  "hero.headline3": { en: "No Code Required.", zh: "无需代码。" },
  "hero.subheadline": {
    en: "Customize intelligent agents tailored to your workflow — from research assistants to customer support bots — and deploy them in minutes.",
    zh: "定制专属 AI Agent，适配你的工作流程。从研究助手到客服机器人，几分钟内即可上线运行。",
  },
  "hero.cta.primary": { en: "Start Building Free", zh: "免费开始构建" },
  "hero.cta.secondary": { en: "See How It Works", zh: "了解使用流程" },
  "hero.compatible": { en: "Works with your stack", zh: "兼容主流工具" },

  // Features
  "features.badge": { en: "Capabilities", zh: "核心能力" },
  "features.title": { en: "Everything you need to build powerful agents", zh: "构建强大 Agent 所需的一切" },
  "features.subtitle": {
    en: "AgentForge gives you the building blocks to create, deploy, and manage intelligent agents at any scale.",
    zh: "AgentForge 提供完整的工具链，让你创建、部署和管理各种规模的智能 Agent。",
  },
  "features.1.title": { en: "Custom Persona", zh: "自定义人格" },
  "features.1.desc": { en: "Give your agent a name, tone, and domain expertise. Define its personality and knowledge boundaries.", zh: "为 Agent 设定名称、语气和领域知识，定义其个性与能力边界。" },
  "features.2.title": { en: "Tool Integration", zh: "工具集成" },
  "features.2.desc": { en: "Connect to web search, code execution, databases, and custom webhooks.", zh: "接入网络搜索、代码执行、数据库和自定义 Webhook 等工具。" },
  "features.3.title": { en: "Persistent Memory", zh: "持久记忆" },
  "features.3.desc": { en: "Your agent remembers context across sessions. Build relationships and retain important information over time.", zh: "Agent 跨会话记忆上下文，随时间积累关系与知识。" },
  "features.4.title": { en: "Multi-Agent Orchestration", zh: "多 Agent 编排" },
  "features.4.desc": { en: "Spawn sub-agents and delegate specialized tasks. Build complex pipelines that work in parallel.", zh: "生成子 Agent 并分配专项任务，构建并行运行的复杂流水线。" },
  "features.5.title": { en: "Secure Execution", zh: "安全执行" },
  "features.5.desc": { en: "Sandboxed runtime environment. Data stays in your infrastructure — no information leaves without permission.", zh: "沙箱隔离运行环境，数据留在你的基础设施中，未经授权不会外泄。" },
  "features.6.title": { en: "Analytics Dashboard", zh: "分析看板" },
  "features.6.desc": { en: "Monitor agent performance, track costs, and visualize usage patterns with real-time dashboards.", zh: "实时监控 Agent 性能、追踪成本、可视化使用模式。" },

  // How It Works
  "how.badge": { en: "Process", zh: "使用流程" },
  "how.title": { en: "From idea to deployed agent in minutes", zh: "从想法到上线，只需几分钟" },
  "how.subtitle": {
    en: "Our streamlined workflow removes the complexity from agent development so you can focus on what matters.",
    zh: "我们简化了 Agent 开发流程，让你专注于真正重要的事情。",
  },
  "how.1.title": { en: "Define Your Agent", zh: "定义 Agent" },
  "how.1.desc": { en: "Choose a template or start from scratch. Describe the role, capabilities, and knowledge domain of your agent.", zh: "选择模板或从零开始，描述 Agent 的角色、能力和知识领域。" },
  "how.2.title": { en: "Connect Your Tools", zh: "连接工具" },
  "how.2.desc": { en: "One-click OAuth integrations with your existing services. Connect Slack, Notion, GitHub, and more.", zh: "一键 OAuth 授权，接入 Slack、Notion、GitHub 等现有服务。" },
  "how.3.title": { en: "Test & Refine", zh: "测试与优化" },
  "how.3.desc": { en: "Chat with your agent in a live sandbox. See its reasoning, adjust prompts, and iterate in real-time.", zh: "在实时沙箱中与 Agent 对话，查看推理过程，实时调整优化。" },
  "how.4.title": { en: "Deploy Anywhere", zh: "随处部署" },
  "how.4.desc": { en: "API endpoint, embedded widget, Slack bot, or CLI — deploy to any surface with a single click.", zh: "API 接口、嵌入组件、Slack 机器人或 CLI，一键部署到任意平台。" },

  // Use Cases
  "usecases.badge": { en: "Templates", zh: "模板库" },
  "usecases.title": { en: "Start with a proven template", zh: "从经过验证的模板开始" },
  "usecases.subtitle": {
    en: "Jump-start your agent with one of our pre-built templates, then customize to your exact needs.",
    zh: "使用我们的预构建模板快速启动，再根据你的具体需求进行定制。",
  },
  "usecases.filter.all": { en: "All", zh: "全部" },
  "usecases.filter.productivity": { en: "Productivity", zh: "效率" },
  "usecases.filter.development": { en: "Development", zh: "开发" },
  "usecases.filter.communication": { en: "Communication", zh: "沟通" },
  "usecases.use": { en: "Use Template", zh: "使用模板" },

  // Pricing
  "pricing.badge": { en: "Pricing", zh: "定价方案" },
  "pricing.title": { en: "Simple, transparent pricing", zh: "简单透明的定价" },
  "pricing.subtitle": {
    en: "Start for free and scale as you grow. No hidden fees, no surprises.",
    zh: "免费开始，按需扩展。没有隐藏费用，没有意外账单。",
  },
  "pricing.monthly": { en: "Monthly", zh: "按月" },
  "pricing.annual": { en: "Annual", zh: "按年" },
  "pricing.save": { en: "Save 20%", zh: "节省 20%" },
  "pricing.popular": { en: "Most Popular", zh: "最受欢迎" },
  "pricing.free.name": { en: "Hobby", zh: "个人版" },
  "pricing.free.price": { en: "Free", zh: "免费" },
  "pricing.free.desc": { en: "Perfect for exploring and personal projects.", zh: "适合个人探索与项目试验。" },
  "pricing.free.cta": { en: "Start Free", zh: "免费开始" },
  "pricing.pro.name": { en: "Pro", zh: "专业版" },
  "pricing.pro.desc": { en: "For teams and power users who need more.", zh: "适合需要更多资源的团队和高级用户。" },
  "pricing.pro.cta": { en: "Get Pro", zh: "升级专业版" },
  "pricing.enterprise.name": { en: "Enterprise", zh: "企业版" },
  "pricing.enterprise.price": { en: "Custom", zh: "定制报价" },
  "pricing.enterprise.desc": { en: "Dedicated support and custom integrations for large teams.", zh: "为大型团队提供专属支持与定制集成。" },
  "pricing.enterprise.cta": { en: "Contact Us", zh: "联系我们" },

  // FAQ
  "faq.badge": { en: "FAQ", zh: "常见问题" },
  "faq.title": { en: "Frequently asked questions", zh: "常见问题解答" },
  "faq.1.q": { en: "What AI models power the agents?", zh: "Agent 使用哪些 AI 模型？" },
  "faq.1.a": {
    en: "AgentForge supports leading models including Claude, GPT-4, and Gemini. You can bring your own API key or use our managed inference. Switch models per-agent at any time.",
    zh: "AgentForge 支持 Claude、GPT-4 和 Gemini 等主流模型。你可以使用自己的 API Key，也可以使用我们的托管推理服务，随时按 Agent 切换模型。",
  },
  "faq.2.q": { en: "Is my data private and secure?", zh: "我的数据安全吗？" },
  "faq.2.a": {
    en: "Yes. All agent executions run in isolated sandboxes. Your data is encrypted at rest and in transit. We do not train on your data, and enterprise plans support private deployments.",
    zh: "是的。所有 Agent 执行在隔离沙箱中运行，数据传输和存储均加密。我们不会用你的数据训练模型，企业版支持私有部署。",
  },
  "faq.3.q": { en: "Can I use my own API keys?", zh: "可以使用自己的 API Key 吗？" },
  "faq.3.a": {
    en: "Absolutely. Pro and Enterprise plans let you supply your own OpenAI, Anthropic, or Google keys. Your keys are stored encrypted and never logged.",
    zh: "当然可以。专业版和企业版支持使用自己的 OpenAI、Anthropic 或 Google API Key，密钥加密存储，不会被记录。",
  },
  "faq.4.q": { en: "How is this different from AutoGPT or LangChain?", zh: "与 AutoGPT 或 LangChain 有什么区别？" },
  "faq.4.a": {
    en: "AgentForge is a managed platform — no infrastructure to set up, no Python to write. It provides a visual editor, built-in integrations, and production-ready deployment. Think of it as the no-code layer on top of frameworks like LangChain.",
    zh: "AgentForge 是托管平台，无需搭建基础设施，无需编写 Python 代码。它提供可视化编辑器、内置集成和生产就绪的部署能力，相当于 LangChain 等框架之上的无代码层。",
  },
  "faq.5.q": { en: "Does it support Chinese language?", zh: "支持中文吗？" },
  "faq.5.a": {
    en: "Yes. AgentForge is fully bilingual (English and Chinese). Agents can be configured to respond in any language supported by the underlying model.",
    zh: "支持。AgentForge 完全支持双语（英文和中文）。Agent 可配置为使用底层模型支持的任何语言进行响应。",
  },
  "faq.6.q": { en: "What happens if I exceed my plan limits?", zh: "超出套餐限制怎么办？" },
  "faq.6.a": {
    en: "We'll send you a notification before you hit your limits. Agents pause gracefully rather than fail. You can upgrade at any time to restore service instantly.",
    zh: "达到限制前我们会发送通知。Agent 会优雅地暂停而不是直接报错。你可以随时升级套餐，立即恢复服务。",
  },
  "faq.7.q": { en: "Can I export or self-host my agents?", zh: "可以导出或自部署 Agent 吗？" },
  "faq.7.a": {
    en: "Pro and Enterprise users can export agent configurations as JSON and deploy them to any environment. Enterprise plans include a self-hosted option with full source access.",
    zh: "专业版和企业版用户可以将 Agent 配置导出为 JSON 并部署到任何环境。企业版还提供含完整源码访问权限的自部署选项。",
  },

  // CTA
  "cta.title": { en: "Ready to build your first agent?", zh: "准备好构建你的第一个 Agent 了吗？" },
  "cta.subtitle": {
    en: "Create your first custom agent today and automate the repetitive parts of your work. Start free, upgrade anytime.",
    zh: "立即创建你的第一个定制 Agent，把重复性工作交给自动化。免费开始，随时升级。",
  },
  "cta.primary": { en: "Start Building Free", zh: "免费开始构建" },
  "cta.secondary": { en: "Talk to Sales", zh: "联系销售" },

  // Footer
  "footer.tagline": { en: "Build smarter agents. Work less. Achieve more.", zh: "构建更智能的 Agent，少做重复工作，成就更多。" },
  "footer.product": { en: "Product", zh: "产品" },
  "footer.company": { en: "Company", zh: "公司" },
  "footer.legal": { en: "Legal", zh: "法律" },
  "footer.copyright": { en: "© 2025 AgentForge. All rights reserved.", zh: "© 2025 AgentForge 版权所有。" },
  "footer.back_top": { en: "Back to top", zh: "回到顶部" },
};

export function t(key: string, locale: Locale): string {
  const entry = strings[key];
  if (!entry) return key;
  return entry[locale] ?? entry.en;
}
