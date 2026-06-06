import * as React from "react";
import { Section, Container, ContentWrapper, SectionHeader } from "@/components/layout";
import { FadeIn } from "@/components/motion/animations";

export function BudgetOptimization() {
  return (
    <Section className="bg-background border-y border-border/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-success/5 blur-3xl rounded-bl-[100%] pointer-events-none" />
      
      <Container>
        <ContentWrapper align="center" className="max-w-3xl">
          <FadeIn>
            <SectionHeader
              title="Eat perfectly. Spend less."
              subtitle="Budget Optimization"
              description="SmartMeal AI doesn't just optimize for health; it optimizes for cost. By utilizing overlapping ingredients across your weekly recipes, the algorithm inherently minimizes food waste and drastically reduces your grocery bill."
              align="center"
              size="lg"
            />
          </FadeIn>
        </ContentWrapper>
      </Container>
    </Section>
  );
}
