import * as React from "react";
import { Section, Container, SectionHeader } from "@/components/layout";
import { FadeIn } from "@/components/motion/animations";
import { FAQS } from "@/data/faq";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <Section className="bg-muted/30 border-t border-border/50">
      <Container>
        <FadeIn>
          <SectionHeader
            title="Frequently Asked Questions."
            align="center"
            className="mb-12"
          />
          
          <div className="max-w-3xl mx-auto bg-background rounded-2xl p-6 md:p-8 border border-border/50 shadow-sm">
            <Accordion className="w-full">
              {FAQS.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-left font-medium text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </Container>
    </Section>
  );
}
