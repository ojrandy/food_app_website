"use client";

import * as React from "react";
import { Section, Container } from "@/components/layout";
import { createParallaxEffect } from "@/lib/gsap";
import Image from "next/image";

export function MobileShowcase() {
  const phoneRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    // Apply GSAP parallax to the phone mockup container
    const ctx = createParallaxEffect(phoneRef, 0.15);
    return () => ctx?.revert();
  }, []);

  return (
    <Section className="bg-background overflow-hidden py-24 md:py-32">
      <Container className="relative">
        
        <div className="text-center max-w-2xl mx-auto mb-16 relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
            Your pocket nutritionist.
          </h2>
          <p className="text-lg text-muted-foreground">
            Take your AI-generated meal plan to the grocery store. Check off items, view step-by-step recipes, and track your daily macro compliance natively on iOS and Android.
          </p>
        </div>

        {/* Parallax Phone Mockup Area */}
        <div className="relative h-[600px] md:h-[800px] w-full flex justify-center items-center">
          {/* Abstract background shapes */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-smartOrange/5 rounded-full blur-3xl" />
          
          <div ref={phoneRef} className="relative w-[300px] md:w-[380px] h-[600px] md:h-[780px] z-20 shadow-2xl rounded-[3rem] md:rounded-[3.5rem] border-8 border-neutral-900 bg-neutral-900 overflow-hidden">
            {/* iPhone Notch Simulator */}
            <div className="absolute top-0 inset-x-0 h-6 bg-neutral-900 z-30 flex justify-center rounded-b-3xl w-40 mx-auto" />
            
            <div className="relative w-full h-full bg-background overflow-hidden">
               {/* Replace with actual mobile UI screenshot */}
               <Image 
                src="https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=800&q=80"
                alt="SmartMeal Mobile App Interface"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

      </Container>
    </Section>
  );
}
