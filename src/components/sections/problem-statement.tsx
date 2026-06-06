import * as React from "react";
import { Section, Container, ContentWrapper, SectionHeader } from "@/components/layout";
import { FadeIn } from "@/components/motion/animations";

export function ProblemStatement() {
  return (
    <Section size="lg" className="bg-background">
      <Container>
        <ContentWrapper align="center" className="max-w-3xl">
          <FadeIn>
            <SectionHeader
              title="Nutrition is a math problem. Humans are terrible at math."
              subtitle="The Problem"
              description="Balancing macronutrients, micronutrients, caloric intake, personal taste, dietary restrictions, and a grocery budget simultaneously is computationally impossible for the human brain to do on a daily basis. That's why 90% of diets fail."
              align="center"
              size="lg"
            />
          </FadeIn>
        </ContentWrapper>
      </Container>
    </Section>
  );
}
