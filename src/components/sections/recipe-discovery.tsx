import * as React from "react";
import { Container } from "@/components/layout";
import { FadeIn, SlideUp } from "@/components/motion/animations";
import { PhoneFrame } from "@/components/device/phone-frame";
import { Screenshot } from "@/components/screenshots/screenshot-engine";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function RecipeDiscovery() {
  const screens = [
    { title: "Welcome", desc: "Get started with SmartMeal AI", img: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=800&q=80" },
    { title: "Preferences", desc: "Tell us what you love and your goals", img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80" },
    { title: "Home Feed", desc: "Personalized recipe recommendations", img: "https://images.unsplash.com/photo-1498837167922-41c54333b207?auto=format&fit=crop&w=800&q=80" },
    { title: "Recipe Details", desc: "Detailed recipe with nutrition facts", img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80" },
    { title: "AI Recommendation", desc: "AI suggests the best meals for you", img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" },
    { title: "Shopping List", desc: "Smart grocery list generator", img: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80" },
    { title: "Meal Planner", desc: "Plan your weekly meals easily", img: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80" },
  ];

  return (
    <section className="bg-[#FF7A00] text-white pt-24 pb-20 relative overflow-hidden rounded-[3rem] md:rounded-[4rem] z-20 shadow-[0_-20px_50px_rgba(0,0,0,0.05)] -mt-10 mx-2 md:mx-4">
      <Container className="relative z-10 max-w-[1600px] px-0">
        <FadeIn className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-[2.75rem] font-bold mb-4 tracking-tight leading-tight">
            A Smarter Way To Discover Recipes
          </h2>
          <p className="text-white/80 text-sm font-medium tracking-wide">
            Swipe, discover, cook and enjoy amazing meals every day
          </p>
        </FadeIn>

        <SlideUp className="relative">
          
          {/* Left / Right Navigation Buttons */}
          <div className="absolute left-4 md:left-8 top-[40%] -translate-y-1/2 w-12 h-12 bg-white rounded-full text-[#FF7A00] flex items-center justify-center shadow-xl z-30 cursor-pointer hover:bg-slate-50 transition-colors">
            <ChevronLeft className="w-6 h-6" />
          </div>
          <div className="absolute right-4 md:right-8 top-[40%] -translate-y-1/2 w-12 h-12 bg-white rounded-full text-[#FF7A00] flex items-center justify-center shadow-xl z-30 cursor-pointer hover:bg-slate-50 transition-colors">
            <ChevronRight className="w-6 h-6" />
          </div>

          {/* Carousel Scroll Area */}
          <div className="flex w-full overflow-x-auto snap-x snap-mandatory no-scrollbar pb-16 relative">
            
            <div className="flex flex-col relative min-w-max mx-auto">
              
              {/* Phones Row */}
              <div className="flex gap-4 sm:gap-6 px-16 md:px-24 z-20 relative pb-10">
                {screens.map((screen, idx) => (
                  <div key={idx} className="shrink-0 snap-center w-[220px] sm:w-[240px] flex flex-col items-center">
                    {/* The phone frame */}
                    <div className="w-full aspect-[9/19.5] bg-white rounded-[2rem] p-2 shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden relative">
                       {/* Notch Mockup */}
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-white rounded-b-xl z-10 flex items-center justify-center">
                         <div className="w-8 h-1 bg-slate-200 rounded-full"></div>
                       </div>
                       <Screenshot src={screen.img} alt={screen.title} type="static" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Massive White Pill */}
              <div className="absolute bottom-4 left-8 right-8 bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] flex px-8 md:px-16 z-30 pt-4 pb-4 items-center">
                 <div className="flex gap-4 sm:gap-6 w-full">
                    {screens.map((screen, idx) => (
                      <div key={`caption-${idx}`} className="w-[220px] sm:w-[240px] shrink-0 text-center flex flex-col items-center justify-center px-2">
                        <h3 className="font-bold text-slate-900 text-[13px] mb-0.5">{screen.title}</h3>
                        <p className="text-[9px] text-slate-500 font-medium leading-tight">{screen.desc}</p>
                      </div>
                    ))}
                 </div>
              </div>

            </div>

          </div>
        </SlideUp>
      </Container>
    </section>
  );
}
