import * as React from "react";
import { Section, Container, Grid, SectionHeader } from "@/components/layout";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { StaggerContainer, StaggerItem } from "@/components/motion/animations";
import { TESTIMONIALS } from "@/data/testimonials";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <Section className="bg-background">
      <Container>
        <SectionHeader
          title="Don't just take our word for it."
          subtitle="Testimonials"
          align="center"
          className="mb-16"
        />
        
        <StaggerContainer>
          <Grid cols={{ base: 1, md: 2 }} gap="lg" className="max-w-5xl mx-auto">
            {TESTIMONIALS.map((testimonial) => (
              <StaggerItem key={testimonial.id}>
                <Card className="h-full bg-muted/20 border-border/50">
                  <CardContent className="p-8 flex flex-col justify-between h-full">
                    <div>
                      <div className="flex gap-1 mb-6 text-smartOrange">
                        {Array.from({ length: testimonial.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-lg text-foreground mb-8">
                        "{testimonial.content}"
                      </blockquote>
                    </div>
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border border-border">
                        <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold text-foreground">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </StaggerItem>
            ))}
          </Grid>
        </StaggerContainer>
      </Container>
    </Section>
  );
}
