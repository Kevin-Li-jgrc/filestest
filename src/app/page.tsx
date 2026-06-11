import type { Metadata } from "next";
import Landing from "@/components/Landing";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      "zh-CN": "/zh/",
    },
  },
};

export default function Home() {
  return <Landing locale="en" />;
}
