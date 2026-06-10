import * as React from "react";
import { Section, Container } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/animations";

export function FoodChallenges() {
  const challenges = [
    {
      emoji: "😟",
      percentage: "67%",
      title: "People struggle to decide what to cook",
      subtitle: "Time wasted daily",
    },
    {
      emoji: "🗑️",
      percentage: "30%",
      title: "Food goes to waste due to poor planning",
      subtitle: "Money wasted monthly",
    },
    {
      emoji: "❤️",
      percentage: "58%",
      title: "Make poor nutritional choices regularly",
      subtitle: "Health at risk",
    },
    {
      emoji: "💲",
      percentage: "35%",
      title: "Increase in food costs in the last year",
      subtitle: "Budget getting tighter",
    },
  ];

  return (
    <Section className="bg-[#FAFAFA] py-20 md:py-32">
      <Container>
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Solving Real <span className="text-smartOrange">Food Challenges</span>
          </h2>
          <p className="text-lg text-slate-600">
            We address everyday food struggles with intelligent solutions.
          </p>
        </FadeIn>

        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {challenges.map((item, idx) => (
            <StaggerItem key={idx}>
              <div className="bg-white rounded-3xl p-8 flex flex-col items-center text-center shadow-sm border border-slate-100 hover:shadow-md transition-shadow h-full">
                <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-3xl mb-6 shadow-sm border border-slate-100">
                  {item.emoji}
                </div>
                <div className="text-4xl font-bold text-smartOrange mb-4">{item.percentage}</div>
                <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug">{item.title}</h3>
                <p className="text-xs text-slate-500 mt-auto">{item.subtitle}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
    </Section>
  );
}
