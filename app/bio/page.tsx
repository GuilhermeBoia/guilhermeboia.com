"use client";

import { useEffect, useState } from "react";
import { HeroSection } from "./components/HeroSection";
import { ProblemSection } from "./components/ProblemSection";
import { AboutSection } from "./components/AboutSection";
import { CTASection } from "./components/CTASection";
import FeaturesSection from "@/app/bio/components/FeaturesSection";
import SolutionSection from "./components/SolutionSection";

export default function Bio() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.documentElement.style.setProperty("--selection-color", "#FFFFFF");
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen text-black w-full">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <FeaturesSection />
      <AboutSection />
      <CTASection />
    </div>
  );
}