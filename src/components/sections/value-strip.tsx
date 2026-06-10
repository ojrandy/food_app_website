import * as React from "react";
import { Container } from "@/components/layout";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion/animations";
import { Sparkles, Activity, DollarSign, Users } from "lucide-react";

export function ValueStrip() {
  const values = [
    { icon: Sparkles, title: "AI Recommended", subtitle: "Personalized for you" },
    { icon: Activity, title: "Nutrition Focused", subtitle: "Healthier every day" },
    { icon: DollarSign, title: "Budget Friendly", subtitle: "Save money smartly" },
    { icon: Users, title: "Family Approved", subtitle: "Loved by everyone" },
  ];

  return (
    <div className="w-full relative z-30 -mt-10 px-4 md:px-8 mb-16">
      <Container>
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-50">
          <StaggerContainer className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
            {values.map((item, idx) => (
               <StaggerItem key={idx} className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left w-full sm:w-auto">
                 <div className="w-12 h-12 bg-[#FF7A00]/10 text-[#FF7A00] rounded-2xl flex items-center justify-center shrink-0">
                   <item.icon className="w-5 h-5 stroke-[2]" />
                 </div>
                 <div>
                   <div className="text-xs font-bold text-slate-900 mb-0.5">{item.title}</div>
                   <div className="text-[11px] font-medium text-slate-500">{item.subtitle}</div>
                 </div>
                 {idx !== values.length - 1 && (
                   <div className="hidden md:block w-px h-10 bg-slate-100 lg:mx-6" />
                 )}
               </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </Container>
    </div>
  );
}
