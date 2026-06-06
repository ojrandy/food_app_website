import * as React from "react";
import { HeroWrapper, Container, Stack } from "@/components/layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FadeIn, SlideUp } from "@/components/motion/animations";
import Image from "next/image";

export function Hero() {
  return (
    <HeroWrapper className="relative overflow-hidden bg-background pt-24 pb-16 md:pt-32 md:pb-24">
      {/* Background ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-smartOrange/20 blur-[120px] rounded-full pointer-events-none" />
      
      <Container className="relative z-10 text-center">
        <Stack spacing="lg" align="center" className="max-w-4xl mx-auto">
          <FadeIn delay={0.1}>
            <Badge variant="smart" className="px-4 py-1 text-sm rounded-full">
              Announcing SmartMeal AI 2.0
            </Badge>
          </FadeIn>
          
          <SlideUp delay={0.2}>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground text-balance">
              Your Personal AI Chef & <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-smartOrange to-smartOrange-light">
                Metabolic Nutritionist
              </span>
            </h1>
          </SlideUp>

          <SlideUp delay={0.3}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
              Stop guessing your macros. Our advanced ML models generate perfectly tailored weekly meal plans, optimize your budget, and automate your grocery shopping in seconds.
            </p>
          </SlideUp>

          <SlideUp delay={0.4} className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Button variant="smart" size="pill-lg">
              Start Free Trial
            </Button>
            <Button variant="outline" size="pill-lg" className="bg-background/50 backdrop-blur-md border-border/50">
              Read Research Paper
            </Button>
          </SlideUp>
        </Stack>
      </Container>

      {/* Floating Mockup Preview */}
      <div className="relative mt-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SlideUp delay={0.6}>
          <div className="relative rounded-2xl md:rounded-[2.5rem] overflow-hidden border border-border/50 shadow-2xl bg-card">
            {/* Mockup header bar */}
            <div className="h-12 bg-muted/50 border-b border-border/50 flex items-center px-6 gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive/50" />
              <div className="w-3 h-3 rounded-full bg-warning/50" />
              <div className="w-3 h-3 rounded-full bg-success/50" />
            </div>
            <div className="relative aspect-[16/9] w-full bg-muted/20">
              {/* Replace with actual high-res dashboard screenshot later */}
              <Image 
                src="https://images.unsplash.com/photo-1498837167922-41c54333b207?auto=format&fit=crop&w=1200&q=80"
                alt="SmartMeal AI Dashboard"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </SlideUp>
      </div>
    </HeroWrapper>
  );
}
