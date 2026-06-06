import * as React from "react";
import { Section, Container, Grid } from "@/components/layout";
import { StatisticCard } from "@/components/ui/statistic-card";
import { StaggerContainer, StaggerItem } from "@/components/motion/animations";
import { STATISTICS } from "@/data/statistics";

export function TrustMetrics() {
  return (
    <Section className="bg-muted/30 border-y border-border/50 py-12 md:py-16">
      <Container>
        <StaggerContainer>
          <Grid cols={{ base: 2, md: 4 }} gap="lg">
            {STATISTICS.map((stat) => (
              <StaggerItem key={stat.id}>
                <StatisticCard
                  title={stat.label}
                  value={`${stat.prefix || ""}${stat.value}${stat.suffix || ""}`}
                  className="bg-transparent border-none shadow-none text-center"
                />
              </StaggerItem>
            ))}
          </Grid>
        </StaggerContainer>
      </Container>
    </Section>
  );
}
