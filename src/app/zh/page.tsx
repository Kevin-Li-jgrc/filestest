import type { Metadata } from "next";
import Landing from "@/components/Landing";

export const metadata: Metadata = {
  title: "AgentForge — 定制你的专属 AI Agent",
  description:
    "定制专属 AI Agent，适配你的工作流程。从研究助手到客服机器人，几分钟内即可上线运行，无需编写代码。",
  openGraph: {
    title: "AgentForge — 定制你的专属 AI Agent",
    description: "定制专属 AI Agent，适配你的工作流程。",
    locale: "zh_CN",
  },
  alternates: {
    canonical: "/zh/",
    languages: {
      en: "/",
      "zh-CN": "/zh/",
    },
  },
};

export default function HomeZh() {
  return <Landing locale="zh" />;
}
