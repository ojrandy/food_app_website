import * as React from "react";
import { Section, Container, Grid, Stack } from "@/components/layout";
import { FadeIn, SlideUp } from "@/components/motion/animations";
import { PieChart, Zap, ActivitySquare } from "lucide-react";

export function NutritionIntelligence() {
  return (
    <Section className="bg-card border-y border-border/50">
      <Container>
        <Grid cols={{ base: 1, lg: 2 }} gap="2xl" className="items-center">
          
          <div className="order-2 lg:order-1">
            <Stack spacing="md">
              <span className="text-sm font-semibold tracking-wider text-smartOrange uppercase">Data-Driven Health</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Granular macro tracking without the manual logging.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Because the AI generates your meals, it already knows exactly what you are eating. No more searching databases or scanning barcodes. Your daily macros are tracked automatically with 100% precision.
              </p>
              
              <div className="space-y-4">
                {[
                  { icon: PieChart, text: "Perfectly balanced Protein, Carbs, and Fats." },
                  { icon: Zap, text: "Dynamic caloric adjustments based on weekly weigh-ins." },
                  { icon: ActivitySquare, text: "Micronutrient deficiency warnings." }
                ].map((item, i) => (
                  <SlideUp key={i} delay={i * 0.1}>
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-smartOrange/10 flex items-center justify-center text-smartOrange">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  </SlideUp>
                ))}
              </div>
            </Stack>
          </div>

          <div className="order-1 lg:order-2">
            <FadeIn>
              <div className="relative aspect-square md:aspect-auto md:h-[500px] w-full rounded-2xl bg-muted/30 border border-border/50 flex items-center justify-center p-8 overflow-hidden">
                {/* Abstract UI representation of macro rings */}
                <div className="relative w-64 h-64">
                  {/* Outer Ring - Protein */}
                  <svg className="absolute inset-0 w-full h-full -rotate-90">
                    <circle cx="128" cy="128" r="120" stroke="currentColor" strokeWidth="8" fill="none" className="text-border" />
                    <circle cx="128" cy="128" r="120" stroke="currentColor" strokeWidth="8" fill="none" className="text-smartOrange" strokeDasharray="753" strokeDashoffset="200" strokeLinecap="round" />
                  </svg>
                  {/* Middle Ring - Carbs */}
                  <svg className="absolute inset-4 w-[calc(100%-32px)] h-[calc(100%-32px)] -rotate-90">
                    <circle cx="112" cy="112" r="100" stroke="currentColor" strokeWidth="8" fill="none" className="text-border" />
                    <circle cx="112" cy="112" r="100" stroke="currentColor" strokeWidth="8" fill="none" className="text-success" strokeDasharray="628" strokeDashoffset="300" strokeLinecap="round" />
                  </svg>
                  {/* Inner Ring - Fats */}
                  <svg className="absolute inset-8 w-[calc(100%-64px)] h-[calc(100%-64px)] -rotate-90">
                    <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="8" fill="none" className="text-border" />
                    <circle cx="96" cy="96" r="80" stroke="currentColor" strokeWidth="8" fill="none" className="text-warning" strokeDasharray="502" strokeDashoffset="100" strokeLinecap="round" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold">2,450</span>
                    <span className="text-sm text-muted-foreground">KCAL</span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

        </Grid>
      </Container>
    </Section>
  );
}
