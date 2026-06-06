import * as React from "react";
import { Section, Container, Grid, Stack } from "@/components/layout";
import { FadeIn, SlideUp } from "@/components/motion/animations";
import { ShoppingCart, CheckCircle2 } from "lucide-react";

export function ShoppingList() {
  return (
    <Section className="bg-muted/10">
      <Container>
        <Grid cols={{ base: 1, lg: 2 }} gap="2xl" className="items-center">
          
          <div>
            <Stack spacing="md">
              <span className="text-sm font-semibold tracking-wider text-smartOrange uppercase">Automation</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">The ultimate smart grocery list.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The moment you approve your generated meal plan, SmartMeal AI compiles every single ingredient, normalizes the measurements, and categorizes them by supermarket aisle.
              </p>
              
              <Stack spacing="sm">
                {[
                  "Categorized by Produce, Meat, Dairy, etc.",
                  "Automatically scales quantities based on your exact caloric needs.",
                  "Export to Instacart, Walmart, or Amazon Fresh in one click."
                ].map((item, i) => (
                  <SlideUp key={i} delay={i * 0.1} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-smartOrange mt-0.5 shrink-0" />
                    <span className="font-medium text-foreground">{item}</span>
                  </SlideUp>
                ))}
              </Stack>
            </Stack>
          </div>

          <div className="flex justify-center lg:justify-end">
            <FadeIn>
              <div className="relative w-full max-w-md rounded-2xl bg-card border border-border/50 shadow-xl p-6">
                <div className="flex items-center justify-between mb-6 border-b border-border/50 pb-4">
                  <div className="flex items-center gap-2">
                    <ShoppingCart className="w-5 h-5" />
                    <span className="font-bold">Weekly Groceries</span>
                  </div>
                  <span className="text-sm text-muted-foreground">34 Items</span>
                </div>
                
                <div className="space-y-6">
                  {/* Category 1 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Produce</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="w-5 h-5 rounded-md border-2 border-smartOrange bg-smartOrange flex items-center justify-center">
                          <CheckCircle2 className="w-3 h-3 text-white" />
                        </div>
                        <span className="line-through text-muted-foreground">Spinach (200g)</span>
                      </div>
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="w-5 h-5 rounded-md border-2 border-border" />
                        <span>Avocado (3 units)</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Category 2 */}
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider">Proteins</h4>
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
                        <div className="w-5 h-5 rounded-md border-2 border-border" />
                        <span>Chicken Breast (1.5 kg)</span>
                      </div>
                    </div>
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
