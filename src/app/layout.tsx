import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "AgentForge — Build Custom AI Agents",
  description:
    "Customize intelligent AI agents tailored to your workflow. From research assistants to customer support bots — deploy in minutes, no code required.",
  keywords: ["AI agent", "custom agent", "automation", "no-code", "AI tools", "personal agent"],
  openGraph: {
    title: "AgentForge — Build Custom AI Agents",
    description: "Customize intelligent AI agents tailored to your workflow.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AgentForge — Build Custom AI Agents",
    description: "Customize intelligent AI agents tailored to your workflow.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen bg-[#0a0a0f] text-[#f1f5f9]">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
