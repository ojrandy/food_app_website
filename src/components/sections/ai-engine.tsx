import * as React from "react";
import { Section, Container, Grid, Stack } from "@/components/layout";
import { FadeIn, SlideRight, SlideLeft } from "@/components/motion/animations";
import { BrainCircuit, Activity, Database } from "lucide-react";

export function AIEngine() {
  return (
    <Section size="lg" className="bg-muted/10 overflow-hidden">
      <Container>
        <Grid cols={{ base: 1, lg: 2 }} gap="2xl" className="items-center">
          
          <SlideRight className="order-2 lg:order-1">
            <div className="relative rounded-2xl bg-card border border-border/50 p-8 shadow-xl">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:32px_32px] rounded-2xl" />
              <Stack spacing="lg" className="relative z-10">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50 border border-border">
                  <Activity className="w-6 h-6 text-smartOrange" />
                  <div>
                    <div className="font-mono text-sm text-muted-foreground">Input Matrix</div>
                    <div className="font-medium">Biometrics + TDEE + Preferences</div>
                  </div>
                </div>
                <div className="w-px h-8 bg-border ml-8" />
                <div className="flex items-center gap-4 p-4 rounded-xl bg-smartOrange/10 border border-smartOrange/20">
                  <BrainCircuit className="w-6 h-6 text-smartOrange" />
                  <div>
                    <div className="font-mono text-sm text-smartOrange">Processing Engine</div>
                    <div className="font-medium text-foreground">Multi-objective Optimization</div>
                  </div>
                </div>
                <div className="w-px h-8 bg-border ml-8" />
                <div className="flex items-center gap-4 p-4 rounded-xl bg-success/10 border border-success/20">
                  <Database className="w-6 h-6 text-success" />
                  <div>
                    <div className="font-mono text-sm text-success">Output Vector</div>
                    <div className="font-medium text-foreground">7-Day Perfect Macro Plan</div>
                  </div>
                </div>
              </Stack>
            </div>
          </SlideRight>

          <SlideLeft className="order-1 lg:order-2">
            <Stack spacing="md">
              <span className="text-sm font-semibold tracking-wider text-smartOrange uppercase">The Architecture</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Clinical precision driven by Machine Learning.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                SmartMeal AI doesn't just pull random recipes from a database. It utilizes multi-objective optimization algorithms to solve the knapsack problem of your daily nutrition. 
                <br /><br />
                It cross-references your Basal Metabolic Rate (BMR) with the Harris-Benedict equation, then precisely maps million-recipe datasets to generate a meal plan that hits your specific protein, carb, and fat targets within a 2% margin of error.
              </p>
            </Stack>
          </SlideLeft>

        </Grid>
      </Container>
    </Section>
  );
}
