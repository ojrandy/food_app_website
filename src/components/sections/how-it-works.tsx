import * as React from "react";
import { Section, Container, SectionHeader, Stack } from "@/components/layout";
import { FadeIn, SlideUp } from "@/components/motion/animations";

const STEPS = [
  {
    number: "01",
    title: "Input your Biometrics",
    description: "Enter your age, weight, height, activity level, and specific goals (fat loss, maintenance, muscle gain).",
  },
  {
    number: "02",
    title: "Set Dietary Boundaries",
    description: "Select your allergies, dislikes, and preferred diet types (e.g., Keto, Vegan, Mediterranean).",
  },
  {
    number: "03",
    title: "AI Generates Your Plan",
    description: "Our algorithm calculates your TDEE and instantly maps thousands of recipes to hit your exact macro targets for the week.",
  },
];

export function HowItWorks() {
  return (
    <Section id="how-it-works" className="bg-muted/30 border-y border-border/50">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <FadeIn>
              <SectionHeader
                title="Three steps to nutritional freedom."
                subtitle="How It Works"
                description="We've reduced the complex science of dietetics into a frictionless, 60-second onboarding process."
              />
            </FadeIn>
          </div>
          
          <div className="lg:w-2/3">
            <Stack spacing="2xl">
              {STEPS.map((step, index) => (
                <SlideUp key={step.number} delay={index * 0.1} className="relative pl-12 md:pl-16">
                  {/* Timeline Line */}
                  {index !== STEPS.length - 1 && (
                    <div className="absolute left-[1.15rem] top-12 bottom-[-4rem] w-px bg-border hidden md:block" />
                  )}
                  {/* Number Badge */}
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full bg-smartOrange/10 text-smartOrange font-bold border border-smartOrange/20 shadow-sm">
                    {step.number}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </SlideUp>
              ))}
            </Stack>
          </div>
        </div>
      </Container>
    </Section>
  );
}
