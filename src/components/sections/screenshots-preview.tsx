import * as React from "react";
import { Section, Container, SectionHeader } from "@/components/layout";
import { FadeIn, SlideUp } from "@/components/motion/animations";
import { SCREENSHOTS } from "@/data/screenshots";
import Image from "next/image";

export function ScreenshotsPreview() {
  return (
    <Section id="screenshots" className="bg-muted/30 border-y border-border/50">
      <Container>
        <SectionHeader
          title="Designed for perfection."
          subtitle="Interface"
          description="A clean, intuitive, and blisteringly fast user experience across all devices."
          align="center"
          className="mb-16"
        />
        
        <div className="flex flex-col gap-12 md:gap-24">
          {SCREENSHOTS.map((screenshot, index) => (
            <div key={screenshot.id} className="relative group">
              <SlideUp delay={index * 0.1}>
                <div className="relative rounded-[2rem] overflow-hidden shadow-xl border border-border/50 bg-background transition-transform duration-500 hover:scale-[1.01]">
                  <div className="relative w-full" style={{ paddingBottom: `${(screenshot.height / screenshot.width) * 100}%` }}>
                    <Image
                      src={screenshot.src}
                      alt={screenshot.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                {screenshot.caption && (
                  <p className="text-center text-sm text-muted-foreground mt-4 font-medium">
                    {screenshot.caption}
                  </p>
                )}
              </SlideUp>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
