import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { FadeIn, SlideUp } from "@/components/motion/animations";
import { FloatingDevice } from "@/components/device/floating-device";
import { Play, ArrowRight, Search, Star, Clock, Flame, Tag, ShieldCheck, ChevronRight, Menu, Heart } from "lucide-react";

// Helper components for the Phone UI
const StatusBar = () => (
  <div className="flex justify-between items-center px-5 pt-3 pb-2 text-[10px] font-semibold text-slate-900">
    <span>9:41</span>
    <div className="flex items-center gap-1">
      <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor"><path d="M13 3C13 2.44772 12.5523 2 12 2H2C1.44772 2 1 2.44772 1 3V7C1 7.55228 1.44772 8 2 8H12C12.5523 8 13 7.55228 13 7V3Z"/><rect x="13" y="4" width="1" height="2"/></svg>
    </div>
  </div>
);

const Phone1UI = () => (
  <div className="w-full h-full bg-[#FDFDFD] flex flex-col font-sans overflow-hidden select-none pointer-events-none relative">
    {/* Glare overlay for premium aesthetic */}
    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/40 z-50 pointer-events-none mix-blend-overlay" />
    <StatusBar />
    <div className="px-5 pt-2 pb-4">
      <div className="flex justify-between items-center mb-1">
        <div>
          <h3 className="text-sm font-bold text-slate-900 flex items-center gap-1">Hello, Sarah <span className="text-sm">👋</span></h3>
          <p className="text-[10px] text-slate-500">What do you want to cook today?</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden relative">
          <Image src="https://i.pravatar.cc/100?img=5" alt="User" fill className="object-cover" />
        </div>
      </div>
      
      <div className="mt-4 relative">
        <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
        <input type="text" placeholder="Search recipes, ingredients..." className="w-full bg-slate-100 text-[10px] rounded-full py-2.5 pl-9 pr-4 outline-none placeholder:text-slate-400" readOnly />
      </div>

      <div className="mt-5">
        <div className="flex justify-between items-end mb-3">
          <h4 className="text-xs font-bold text-slate-900">AI Recommended for You</h4>
          <span className="text-[9px] font-semibold text-smartOrange">See all</span>
        </div>
        <div className="w-full bg-[#1C1C1C] rounded-2xl p-4 text-white relative overflow-hidden flex flex-col justify-between h-[120px]">
          <div className="z-10 w-[60%]">
            <h5 className="text-sm font-bold leading-tight mb-1">Grilled Salmon</h5>
            <p className="text-[9px] text-white/70">with Avocado Salad</p>
          </div>
          <div className="z-10 mt-auto flex items-center gap-2">
            <div className="px-2 py-1 bg-white/20 rounded-full text-[8px] backdrop-blur-sm flex items-center gap-1"><Flame className="w-2 h-2" /> 450 kcal</div>
            <div className="px-2 py-1 bg-white/20 rounded-full text-[8px] backdrop-blur-sm flex items-center gap-1"><Clock className="w-2 h-2" /> 20 min</div>
          </div>
          <div className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-[120px] h-[120px] rounded-full overflow-hidden shadow-2xl border-4 border-[#1c1c1c]">
            <Image src="https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&q=80" alt="Food" fill className="object-cover" />
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h4 className="text-xs font-bold text-slate-900 mb-3">Popular Categories</h4>
        <div className="flex justify-between">
          {[
            { n: "Breakfast", img: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=100&q=80" },
            { n: "Lunch", img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=100&q=80" },
            { n: "Dinner", img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=100&q=80" },
            { n: "Snacks", img: "https://images.unsplash.com/photo-1599490659213-e2b9527bd087?w=100&q=80" }
          ].map((cat, i) => (
            <div key={i} className="flex flex-col items-center gap-1.5">
              <div className="w-12 h-12 rounded-full bg-slate-100 overflow-hidden relative shadow-sm">
                <Image src={cat.img} alt={cat.n} fill className="object-cover" />
              </div>
              <span className="text-[9px] font-medium text-slate-600">{cat.n}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-5">
        <h4 className="text-xs font-bold text-slate-900 mb-3">Trending Recipes</h4>
        <div className="flex gap-3">
          <div className="w-32 h-32 rounded-xl overflow-hidden relative">
            <Image src="https://images.unsplash.com/photo-1621510456681-2330135e5871?w=300&q=80" alt="Pasta" fill className="object-cover" />
            <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-md rounded-lg p-1.5">
              <div className="text-[9px] font-bold text-slate-900">Creamy Pasta</div>
              <div className="text-[7px] text-slate-500 flex items-center gap-1"><Clock className="w-2 h-2"/> 25 min</div>
            </div>
          </div>
          <div className="w-32 h-32 rounded-xl overflow-hidden relative">
            <Image src="https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?w=300&q=80" alt="Chicken" fill className="object-cover" />
             <div className="absolute bottom-2 left-2 right-2 bg-white/90 backdrop-blur-md rounded-lg p-1.5">
              <div className="text-[9px] font-bold text-slate-900">Thai Basil Chicken</div>
              <div className="text-[7px] text-slate-500 flex items-center gap-1"><Clock className="w-2 h-2"/> 30 min</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const Phone2UI = () => (
  <div className="w-full h-full bg-[#FDFDFD] flex flex-col font-sans overflow-hidden select-none pointer-events-none relative">
    {/* Glare overlay for premium aesthetic */}
    <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/5 to-white/40 z-50 pointer-events-none mix-blend-overlay" />
    <div className="w-full h-[45%] relative">
      <Image src="https://images.unsplash.com/photo-1621510456681-2330135e5871?w=500&q=80" alt="Pasta" fill className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
      <StatusBar />
      <div className="absolute top-10 left-5 w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center">
        <ArrowRight className="w-4 h-4 text-white rotate-180" />
      </div>
      <div className="absolute top-10 right-5 w-8 h-8 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center">
        <Heart className="w-4 h-4 text-white" />
      </div>
    </div>
    
    <div className="flex-1 bg-white -mt-6 rounded-t-3xl relative z-10 p-6 flex flex-col">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-bold text-slate-900 leading-tight w-2/3">Creamy Garlic Pasta</h2>
        <div className="text-lg font-black text-smartOrange">$2.50</div>
      </div>
      
      <div className="flex items-center gap-3 text-[10px] text-slate-500 font-medium mb-5">
        <div className="flex items-center gap-1 text-amber-500"><Star className="w-3 h-3 fill-amber-500" /> 4.8 (1.2k)</div>
        <div className="w-1 h-1 rounded-full bg-slate-300" />
        <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> 25 min</div>
        <div className="w-1 h-1 rounded-full bg-slate-300" />
        <div>Easy</div>
      </div>

      <h3 className="text-xs font-bold text-slate-900 mb-4">Nutrition Facts <span className="font-normal text-slate-500">(per serving)</span></h3>
      
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex justify-between text-[10px] mb-1">
            <span className="font-semibold text-slate-700">Calories</span>
            <span className="font-bold text-slate-900">520 kcal</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="w-[60%] h-full bg-smartOrange rounded-full" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10px] mb-1">
            <span className="font-semibold text-slate-700">Protein</span>
            <span className="font-bold text-slate-900">35g</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="w-[80%] h-full bg-green-500 rounded-full" />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[10px] mb-1">
            <span className="font-semibold text-slate-700">Carbs</span>
            <span className="font-bold text-slate-900">45g</span>
          </div>
          <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="w-[45%] h-full bg-blue-500 rounded-full" />
          </div>
        </div>
      </div>
      
      <Button className="w-full bg-smartOrange text-white rounded-xl mt-auto py-5 shadow-lg shadow-smartOrange/20 font-bold">Start Cooking</Button>
    </div>
  </div>
);

export function Hero() {
  return (
    <section className="relative overflow-visible bg-[#FFFDFB] pt-16 pb-32 md:pt-24 md:pb-48 z-10">
      
      {/* Background Decorative Accents */}
      <div className="absolute right-0 top-1/4 w-[800px] h-[800px] bg-smartOrange/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-10 top-10 w-[300px] h-[300px] bg-amber-500/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Tiny abstract spark elements in background */}
      <svg className="absolute top-20 left-1/3 w-6 h-6 text-smartOrange/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" /></svg>
      <svg className="absolute top-1/4 right-1/4 w-4 h-4 text-smartOrange/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z" /></svg>

      <Container className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-12 lg:gap-8">
          
          {/* Left Column: Typography & CTAs */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-[50%] z-20">
            
            {/* Badge */}
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm mb-6 border border-slate-100">
                <span className="text-[13px] font-bold text-slate-800">✨ <span className="text-slate-600 font-semibold mx-1">AI Food Recommendation System</span> ✨</span>
              </div>
            </FadeIn>

            {/* Headline */}
            <SlideUp delay={0.2}>
              <h1 className="text-[2.75rem] sm:text-[3.5rem] lg:text-[4rem] xl:text-[4.75rem] leading-[1.05] font-extrabold tracking-tight text-slate-900 mb-6">
                Your Personal <br className="hidden sm:block" />
                <span className="text-[#FF7A00]">AI Chef, Nutritionist,</span> <br className="hidden sm:block" />
                & Meal Planner
              </h1>
            </SlideUp>

            {/* Subheadline */}
            <SlideUp delay={0.3}>
              <p className="text-lg text-slate-500 mb-10 max-w-[480px] leading-relaxed font-medium">
                Discover recipes tailored to your taste, health goals, budget, ingredients, and family needs using intelligent AI recommendations.
              </p>
            </SlideUp>

            {/* Buttons */}
            <SlideUp delay={0.4} className="flex flex-col sm:flex-row items-center gap-4 mb-14 w-full sm:w-auto">
              <Button size="lg" className="bg-[#FF7A00] hover:bg-[#E66E00] text-white rounded-full pl-8 pr-3 py-7 text-[15px] shadow-[0_10px_20px_rgba(255,122,0,0.2)] w-full sm:w-auto group flex items-center justify-between gap-5 transition-all">
                <span className="font-bold">Get Started</span>
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                  <ArrowRight className="w-5 h-5 text-white" />
                </div>
              </Button>
              <Button size="lg" variant="outline" className="bg-white rounded-full pl-6 pr-8 py-7 text-[15px] border-slate-200 text-slate-800 hover:bg-slate-50 w-full sm:w-auto shadow-sm flex items-center gap-3">
                <Play className="w-5 h-5 text-slate-900" />
                <span className="font-bold">Watch Demo</span>
              </Button>
            </SlideUp>

            {/* Trust Row */}
            <FadeIn delay={0.5} className="flex flex-col sm:flex-row items-center lg:items-center gap-8 sm:gap-10">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                  {[11, 12, 13, 14].map((i, idx) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative shadow-sm" style={{ zIndex: 4 - idx }}>
                      <Image src={`https://i.pravatar.cc/100?img=${i}`} alt="User" fill className="object-cover" />
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-xl font-bold text-slate-900 leading-tight">5M+</div>
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Happy Users</div>
                </div>
              </div>

              <div className="hidden sm:block w-px h-10 bg-slate-200" />

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 relative flex items-center justify-center text-amber-500">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 16c0-2.8 1.4-5.2 3.5-6.6M22 16c0-2.8-1.4-5.2-3.5-6.6M12 4v4M12 4L9 7M12 4l3 3"/><circle cx="12" cy="14" r="5"/></svg>
                </div>
                <div className="text-left">
                  <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide leading-tight">Final Year<br/>Research Project</div>
                </div>
              </div>
            </FadeIn>

            {/* App Store Badges */}
            <FadeIn delay={0.6} className="mt-12 flex flex-col items-center lg:items-start">
              <div className="text-[11px] font-semibold text-slate-500 mb-3 uppercase tracking-wider">Available on</div>
              <div className="flex flex-row items-center gap-4">
                <div className="bg-black hover:bg-neutral-800 transition-colors rounded-xl px-4 py-2 flex items-center gap-3 cursor-pointer shadow-md w-[140px]">
                  <Play className="w-6 h-6 text-white" fill="currentColor" />
                  <div className="text-left">
                    <div className="text-[8px] text-white/80 font-medium leading-none mb-1">GET IT ON</div>
                    <div className="text-xs text-white font-semibold leading-none">Google Play</div>
                  </div>
                </div>
                <div className="bg-black hover:bg-neutral-800 transition-colors rounded-xl px-4 py-2 flex items-center gap-3 cursor-pointer shadow-md w-[140px]">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24"><path d="M16.365 21.442c-1.282.887-2.618 1.83-4.041 1.83-1.488 0-2.607-.943-4.04-1.83-1.574-1.002-3.267-2.074-4.524-3.763-2.18-2.937-2.836-7.078-1.34-10.22 1.054-2.217 3.036-3.414 4.887-3.414 1.455 0 2.583.943 3.905.943 1.256 0 2.27-.943 3.84-.943 1.815 0 3.7.99 4.885 2.722-4.108 2.062-3.415 7.828.694 9.48-.68 1.96-1.748 3.86-2.96 5.195zM15.42 2.825c-.93 1.15-2.26 1.86-3.49 1.76-.23-1.42.54-2.87 1.4-3.88.88-1.07 2.37-1.77 3.52-1.63.15 1.43-.53 2.65-1.43 3.75z"/></svg>
                  <div className="text-left">
                    <div className="text-[8px] text-white/80 font-medium leading-none mb-1">Download on the</div>
                    <div className="text-xs text-white font-semibold leading-none">App Store</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Devices & Badges */}
          <div className="relative w-full lg:w-[50%] h-[700px] mt-20 lg:mt-0 flex items-center justify-center">
            
            {/* Tomato & Leaf Accents */}
            <div className="absolute top-[30%] -left-6 z-0 transform -rotate-12 w-16 h-16 drop-shadow-xl">
              <Image src="https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200&auto=format&fit=crop&q=80" alt="Tomato" fill className="object-cover rounded-full bg-transparent mix-blend-multiply" />
            </div>
            <div className="absolute top-10 right-10 z-0 transform rotate-12 w-14 h-14 drop-shadow-xl bg-red-500 rounded-full flex items-center justify-center shadow-[inset_0_-5px_10px_rgba(0,0,0,0.3)]">
              <div className="w-10 h-10 rounded-full border-4 border-red-400 opacity-50" />
            </div>
            <div className="absolute top-[15%] right-2 z-0 transform -rotate-45 w-10 h-10 drop-shadow-xl bg-green-500 rounded-full rounded-tl-sm" />
            <div className="absolute bottom-[20%] left-10 z-30 transform rotate-[60deg] w-8 h-8 drop-shadow-xl bg-green-500 rounded-full rounded-tr-sm" />

            {/* Back Device */}
            <SlideUp delay={0.5} className="absolute right-0 top-16 z-10 w-[270px]">
              <div className="transform rotate-3 shadow-[20px_20px_60px_rgba(0,0,0,0.15)] rounded-[2.5rem] bg-white border-[10px] border-[#1C1C1E] overflow-hidden aspect-[9/19.5]">
                <Phone2UI />
              </div>
            </SlideUp>

            {/* Front Device */}
            <SlideUp delay={0.4} className="absolute left-[10%] sm:left-[20%] lg:left-[5%] top-0 z-20 w-[290px]">
              <div className="transform -rotate-2 shadow-[0_30px_60px_rgba(0,0,0,0.25)] rounded-[2.5rem] bg-white border-[12px] border-[#1C1C1E] overflow-hidden aspect-[9/19.5]">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120px] h-6 bg-[#1C1C1E] rounded-b-3xl z-50 flex items-center justify-center">
                  <div className="w-16 h-1.5 rounded-full bg-[#333] mt-1" />
                  <div className="w-2 h-2 rounded-full bg-slate-800 ml-2 mt-1" />
                </div>
                <Phone1UI />
              </div>
            </SlideUp>

            {/* 1. 30 Min Cook Time Badge */}
            <FadeIn delay={0.8} className="absolute left-[-2rem] top-[25%] z-30">
              <FloatingDevice delay={0.2} yOffset={6}>
                <div className="flex items-center gap-3 bg-white rounded-3xl p-3 pr-5 shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-slate-50">
                  <div className="w-8 h-8 rounded-full bg-[#FF7A00]/10 flex items-center justify-center">
                    <Clock className="w-4 h-4 text-[#FF7A00]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900 leading-none mb-1">30 Min</span>
                    <span className="text-[9px] font-semibold text-slate-500 leading-none">Cook Time</span>
                  </div>
                </div>
              </FloatingDevice>
            </FadeIn>

            {/* 2. 520 Calories Badge */}
            <FadeIn delay={0.9} className="absolute right-[5%] top-[-2%] z-30">
              <FloatingDevice delay={0.4} yOffset={8}>
                <div className="flex flex-col items-center justify-center gap-1.5 bg-white rounded-[1.25rem] px-5 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-slate-50 min-w-[90px]">
                  <Flame className="w-5 h-5 text-[#FF7A00] mb-0.5" />
                  <span className="text-sm font-bold text-slate-900 leading-none">520</span>
                  <span className="text-[10px] font-semibold text-slate-500 leading-none">Calories</span>
                </div>
              </FloatingDevice>
            </FadeIn>

            {/* 3. Budget Friendly Badge */}
            <FadeIn delay={1.0} className="absolute right-[-2rem] top-[45%] z-30">
              <FloatingDevice delay={0.6} yOffset={10}>
                 <div className="flex items-center gap-3 bg-white rounded-3xl p-3 pr-5 shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-slate-50">
                  <div className="w-8 h-8 rounded-full bg-[#FF7A00]/10 flex items-center justify-center">
                    <Tag className="w-4 h-4 text-[#FF7A00]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-bold text-slate-900 leading-none mb-1">$2.50</span>
                    <span className="text-[9px] font-semibold text-slate-500 leading-none">Budget Friendly</span>
                  </div>
                </div>
              </FloatingDevice>
            </FadeIn>

            {/* 4. High Protein Badge */}
            <FadeIn delay={1.1} className="absolute right-[5%] bottom-[15%] z-30">
              <FloatingDevice delay={0.8} yOffset={12}>
                <div className="flex flex-col items-center justify-center gap-1.5 bg-white rounded-[1.25rem] px-5 py-3 shadow-[0_15px_35px_rgba(0,0,0,0.08)] border border-slate-50 min-w-[90px]">
                  <ShieldCheck className="w-5 h-5 text-[#FF7A00] mb-0.5" />
                  <span className="text-[10px] font-semibold text-slate-500 leading-none">High</span>
                  <span className="text-sm font-bold text-slate-900 leading-none">Protein</span>
                </div>
              </FloatingDevice>
            </FadeIn>

          </div>
        </div>
      </Container>
    </section>
  );
}
