"use client";

import * as React from "react";
import { Section, Container } from "@/components/layout";
import { PhoneFrame } from "@/components/device/phone-frame";
import { Screenshot } from "@/components/screenshots/screenshot-engine";
import { ScreenshotCarousel } from "@/components/gallery/screenshot-carousel";
import { FadeIn, SlideUp } from "@/components/motion/animations";

export function MobileShowcase() {
  return (
    <Section className="bg-muted/10 overflow-hidden py-24 md:py-32">
      <Container className="relative">
        
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <FadeIn>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Your pocket nutritionist.
            </h2>
          </FadeIn>
          <SlideUp delay={0.1}>
            <p className="text-lg text-muted-foreground text-balance">
              Take your AI-generated meal plan to the grocery store. Check off items, view step-by-step recipes, and track your daily macro compliance natively on iOS and Android.
            </p>
          </SlideUp>
        </div>

        {/* Carousel Showcase */}
        <SlideUp delay={0.3}>
          <ScreenshotCarousel className="pt-8 pb-16">
            <PhoneFrame className="scale-90 md:scale-100 transform origin-center transition-transform hover:scale-105 duration-500">
              <Screenshot 
                src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80" 
                alt="Meal Planner View" 
                type="static"
              />
            </PhoneFrame>
            <PhoneFrame className="scale-90 md:scale-100 transform origin-center transition-transform hover:scale-105 duration-500">
              <Screenshot 
                src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" 
                alt="Nutrition Details View" 
                type="scrollable"
              />
            </PhoneFrame>
            <PhoneFrame className="scale-90 md:scale-100 transform origin-center transition-transform hover:scale-105 duration-500">
              <Screenshot 
                src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80" 
                alt="Shopping List View" 
                type="static"
              />
            </PhoneFrame>
          </ScreenshotCarousel>
        </SlideUp>

      </Container>
    </Section>
  );
}
