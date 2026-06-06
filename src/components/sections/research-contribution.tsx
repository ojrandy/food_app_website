import * as React from "react";
import { Section, Container, ContentWrapper, Stack } from "@/components/layout";
import { FadeIn, SlideUp } from "@/components/motion/animations";
import { RESEARCH_CITATIONS } from "@/data/research";
import { BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ResearchContribution() {
  return (
    <Section id="research" className="bg-neutral-950 text-neutral-50 py-20 md:py-32">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <Stack spacing="md">
              <FadeIn>
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-white" />
                </div>
              </FadeIn>
              <SlideUp>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                  Academic Foundation.
                </h2>
              </SlideUp>
              <SlideUp delay={0.1}>
                <p className="text-neutral-400 leading-relaxed">
                  SmartMeal AI is built upon rigorous scientific methodology. The algorithms driving the nutritional modeling were developed as part of a comprehensive Final Year Research Project, translating complex dietetic science into accessible software.
                </p>
              </SlideUp>
              <SlideUp delay={0.2} className="pt-4">
                <Button variant="outline" className="bg-transparent border-neutral-700 text-white hover:bg-neutral-800">
                  Read the Whitepaper
                </Button>
              </SlideUp>
            </Stack>
          </div>
          
          <div className="lg:w-2/3">
            <Stack spacing="lg" className="w-full max-w-2xl">
              <h3 className="text-lg font-semibold text-neutral-300 border-b border-neutral-800 pb-2">Key Citations & Methodologies</h3>
              {RESEARCH_CITATIONS.map((citation, index) => (
                <SlideUp key={citation.id} delay={0.3 + (index * 0.1)}>
                  <a 
                    href={citation.doiUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-6 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-600 transition-colors group"
                  >
                    <h4 className="font-medium text-white mb-2 group-hover:text-smartOrange transition-colors">
                      {citation.title}
                    </h4>
                    <p className="text-sm text-neutral-400">
                      {citation.authors} — {citation.journal}, {citation.year}
                    </p>
                  </a>
                </SlideUp>
              ))}
            </Stack>
          </div>
        </div>
      </Container>
    </Section>
  );
}
