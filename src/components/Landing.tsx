"use client";

import { MotionConfig } from "framer-motion";
import { LanguageProvider, type Locale } from "@/context/LanguageContext";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import HowItWorks from "@/components/sections/HowItWorks";
import UseCases from "@/components/sections/UseCases";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";

export default function Landing({ locale }: { locale: Locale }) {
  return (
    <LanguageProvider locale={locale}>
      <MotionConfig reducedMotion="user">
        <main>
          <Navbar />
          <Hero />
          <Features />
          <HowItWorks />
          <UseCases />
          <Pricing />
          <FAQ />
          <CTA />
          <Footer />
        </main>
      </MotionConfig>
    </LanguageProvider>
  );
}
