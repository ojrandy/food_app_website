import * as React from "react";
import { Section, Container, Grid, SectionHeader } from "@/components/layout";
import { FeatureCard } from "@/components/ui/feature-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/animations";
import { FEATURES } from "@/data/features";

export function FeatureHighlights() {
  return (
    <Section id="features" className="bg-background">
      <Container>
        <SectionHeader
          title="Everything you need to automate your nutrition."
          subtitle="Features"
          description="A complete suite of tools designed to take the cognitive load out of eating healthy. Built with React and powered by AI."
          align="center"
          className="mb-16"
        />
        
        <StaggerContainer>
          <Grid cols={{ base: 1, md: 2, lg: 3 }} gap="lg">
            {FEATURES.map((feature) => (
              <StaggerItem key={feature.id}>
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  className="h-full"
                />
              </StaggerItem>
            ))}
          </Grid>
        </StaggerContainer>
      </Container>
    </Section>
  );
}
