import * as React from "react";
import { Container } from "@/components/layout";
import { FadeIn, SlideUp } from "@/components/motion/animations";
import { ChefHat, Search, HeartPulse, DollarSign, Users, ShoppingCart } from "lucide-react";

export function WhyChooseUs() {
  const features = [
    { icon: ChefHat, title: "AI Meal Recommendations", desc: "Personalized recipes just for you" },
    { icon: Search, title: "Smart Search", desc: "Find recipes by ingredients, diet, or preferences" },
    { icon: HeartPulse, title: "Nutrition Insights", desc: "Detailed nutritional information for every meal" },
    { icon: DollarSign, title: "Budget Planning", desc: "Smart meal planning that fits your budget" },
    { icon: Users, title: "Family Meal Planning", desc: "Plan meals for the whole family" },
    { icon: ShoppingCart, title: "Shopping List", desc: "Auto-generate shopping lists in seconds" },
  ];

  return (
    <section className="bg-white py-24 md:py-32 relative z-20 overflow-hidden">
      <Container className="max-w-[1600px] px-0 md:px-8">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16 px-4">
          <h2 className="text-3xl md:text-[2.5rem] font-bold text-slate-900 mb-4 tracking-tight">
            Why Choose <span className="text-[#FF7A00]">SmartMeal AI?</span>
          </h2>
          <p className="text-sm md:text-base text-slate-500 font-medium">
            Powerful features designed to make your food journey smarter and easier
          </p>
        </FadeIn>

        <SlideUp>
          {/* Horizontal scroll container to perfectly match the single strip layout */}
          <div className="flex w-full overflow-x-auto snap-x snap-mandatory no-scrollbar px-4 lg:px-8 pb-12">
            <div className="flex gap-4 min-w-max mx-auto">
              {features.map((item, idx) => (
                <div 
                  key={idx} 
                  className="snap-center bg-white rounded-3xl p-5 border border-slate-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] transition-all flex flex-row items-center text-left gap-4 w-[240px] shrink-0 cursor-pointer"
                >
                  <div className="w-12 h-12 bg-[#FF7A00]/10 text-[#FF7A00] rounded-2xl flex items-center justify-center shrink-0 relative">
                    <item.icon className="w-5 h-5 stroke-[2]" />
                    <div className="absolute -bottom-1 -right-1 w-2.5 h-2.5 bg-[#FF7A00] rounded-full ring-[3px] ring-white" />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-[12px] font-bold text-slate-900 mb-1 leading-tight">{item.title}</h3>
                    <p className="text-[10px] text-slate-500 leading-snug font-medium pr-2">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SlideUp>
      </Container>
    </section>
  );
}
