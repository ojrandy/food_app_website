import * as React from "react";
import { Section, Container, Stack } from "@/components/layout";
import { FadeIn } from "@/components/motion/animations";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <Section className="bg-smartOrange text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
      
      <Container className="relative z-10 text-center">
        <FadeIn>
          <Stack spacing="lg" align="center" className="max-w-3xl mx-auto py-12 md:py-20">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
              Ready to automate your health?
            </h2>
            <p className="text-xl md:text-2xl text-white/80 text-balance mb-4">
              Join thousands of users who have permanently outsourced their nutritional planning to SmartMeal AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="pill-lg" className="bg-white text-smartOrange hover:bg-neutral-100 text-lg shadow-xl hover:-translate-y-1 transition-transform">
                Start your 14-day free trial
              </Button>
              <Button size="pill-lg" variant="outline" className="text-white border-white/30 hover:bg-white/10 text-lg">
                View Pricing
              </Button>
            </div>
            <p className="text-sm text-white/60 mt-4">No credit card required. Cancel anytime.</p>
          </Stack>
        </FadeIn>
      </Container>
    </Section>
  );
}
