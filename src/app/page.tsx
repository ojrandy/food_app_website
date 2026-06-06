import * as React from "react";
import {
  Hero,
  TrustMetrics,
  ProblemStatement,
  AIEngine,
  FeatureHighlights,
  HowItWorks,
  MobileShowcase,
  NutritionIntelligence,
  BudgetOptimization,
  ShoppingList,
  ResearchContribution,
  ScreenshotsPreview,
  Testimonials,
  FAQ,
  CTA,
  Footer,
} from "@/components/sections";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col w-full overflow-hidden">
      <Hero />
      <TrustMetrics />
      <ProblemStatement />
      <AIEngine />
      <FeatureHighlights />
      <HowItWorks />
      <MobileShowcase />
      <NutritionIntelligence />
      <BudgetOptimization />
      <ShoppingList />
      <ResearchContribution />
      <ScreenshotsPreview />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
