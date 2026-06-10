import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/layout";
import { FadeIn, SlideUp } from "@/components/motion/animations";
import { Users, BookOpen, Star, Apple, Play, ChefHat, Utensils } from "lucide-react";

export function DownloadApp() {
  return (
    <section className="bg-[#1C1C1C] text-white pt-24 pb-32 relative overflow-hidden rounded-b-[4rem] md:rounded-b-[6rem] z-30 shadow-2xl">
      
      {/* Decorative background doodles (Food outlines like mockup) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.04] z-0">
        <Apple className="absolute top-20 left-[35%] w-20 h-20 text-white" strokeWidth={1} />
        <ChefHat className="absolute bottom-32 left-[10%] w-24 h-24 text-white transform -rotate-12" strokeWidth={1} />
        <Utensils className="absolute top-[40%] right-[15%] w-32 h-32 text-white transform rotate-12" strokeWidth={1} />
        <div className="absolute bottom-[20%] right-[30%] w-16 h-16 border-2 border-white rounded-full opacity-50" />
      </div>

      <Container className="max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Visual (Woman + Orange Circle) */}
          <div className="lg:col-span-5 relative flex justify-center items-center h-[500px]">
            {/* Massive Orange Circle Backdrop */}
            <FadeIn delay={0.1} className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-[#FF7A00] rounded-full shadow-[0_0_80px_rgba(255,122,0,0.3)]" />
            
            {/* The Cutout Image */}
            <FadeIn delay={0.2} className="relative z-10 w-[350px] h-[450px] md:w-[400px] md:h-[500px]">
              <div className="w-full h-full relative overflow-visible flex items-center justify-center">
                {/* 
                  IMPORTANT: In production, replace this Unsplash image with your transparent PNG cutout 
                  and remove the `rounded-full` class to allow the person to break out of the orange circle.
                */}
                <Image 
                  src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80" 
                  alt="SmartMeal App" 
                  fill
                  className="object-cover rounded-full shadow-2xl"
                />
              </div>
            </FadeIn>
          </div>

          {/* Right Column: Content */}
          <div className="lg:col-span-7 flex flex-col pt-8 lg:pl-12">
            <SlideUp>
              <div className="text-[#FF7A00] font-bold text-xs tracking-wide mb-4 flex items-center gap-2">
                {/* 4-point star / diamond icon */}
                <svg className="w-3.5 h-3.5 text-[#FF7A00]" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0l2.5 9.5L24 12l-9.5 2.5L12 24l-2.5-9.5L0 12l9.5-2.5z"/></svg>
                Get The App
              </div>
              <h2 className="text-4xl md:text-5xl xl:text-[3.5rem] font-bold mb-6 leading-[1.15] text-white tracking-tight">
                Download <span className="text-[#FF7A00]">SmartMeal AI</span> <br />
                & Start Your Journey
              </h2>
              <p className="text-slate-300 text-base md:text-[17px] mb-10 max-w-[480px] leading-relaxed font-medium">
                Join millions of users who are eating better, saving time and money with AI.
              </p>
            </SlideUp>

            {/* Stats Row */}
            <SlideUp delay={0.2} className="flex flex-wrap items-center gap-10 mb-12 w-fit">
              <div className="flex flex-col items-start gap-1">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center mb-1">
                  <Users className="text-white w-4 h-4" />
                </div>
                <div className="text-[15px] font-bold text-white leading-none">5 Million+</div>
                <div className="text-[10px] text-slate-400 font-medium">Active Users</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col items-start gap-1">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center mb-1">
                  <BookOpen className="text-white w-4 h-4" />
                </div>
                <div className="text-[15px] font-bold text-white leading-none">1250+</div>
                <div className="text-[10px] text-slate-400 font-medium">Daily Recipes</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div className="flex flex-col items-start gap-1">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center mb-1">
                  <Star className="text-white w-4 h-4" />
                </div>
                <div className="text-[15px] font-bold text-white leading-none">4.8★</div>
                <div className="text-[10px] text-slate-400 font-medium">User Rating</div>
              </div>
            </SlideUp>

            {/* Download Cards */}
            <SlideUp delay={0.3} className="flex flex-col sm:flex-row gap-6">
              
              {/* iOS Card */}
              <div className="bg-[#2B2B2B] hover:bg-[#333333] transition-colors rounded-3xl p-5 flex flex-col w-[210px] shadow-2xl relative border border-white/5 group cursor-pointer">
                <div className="text-white font-bold text-base mb-0.5">For iOS</div>
                <div className="text-slate-400 text-[10px] mb-4 font-medium">iOS 13.0+</div>
                
                {/* App Store Badge - Fit content, not full width */}
                <div className="bg-black rounded-lg px-3 py-2 flex items-center justify-center gap-2 mb-6 w-fit border border-white/10 group-hover:bg-neutral-900 transition-colors">
                  <Apple className="w-5 h-5 text-white" fill="currentColor" />
                  <div className="flex flex-col items-start">
                    <span className="text-[8px] text-white/80 leading-none mb-0.5">Download on the</span>
                    <span className="text-xs text-white font-semibold leading-none">App Store</span>
                  </div>
                </div>

                <div className="flex justify-between items-end mt-auto w-full pt-2">
                  <div className="bg-white p-1.5 rounded-xl shrink-0">
                    <Image src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://apple.com" alt="iOS QR Code" width={55} height={55} className="rounded-md" />
                  </div>
                  <div className="w-11 h-11 rounded-full bg-[#181818] flex items-center justify-center text-white shrink-0 group-hover:bg-black transition-colors">
                    <Apple className="w-5 h-5" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Android Card */}
              <div className="bg-[#2B2B2B] hover:bg-[#333333] transition-colors rounded-3xl p-5 flex flex-col w-[210px] shadow-2xl relative border border-white/5 group cursor-pointer">
                <div className="text-white font-bold text-base mb-0.5">For Android</div>
                <div className="text-slate-400 text-[10px] mb-4 font-medium">Android 8.0+</div>
                
                {/* Google Play Badge - Fit content, not full width */}
                <div className="bg-black rounded-lg px-3 py-2 flex items-center justify-center gap-2 mb-6 w-fit border border-white/10 group-hover:bg-neutral-900 transition-colors">
                  <Play className="w-4 h-4 text-white" fill="currentColor" />
                  <div className="flex flex-col items-start">
                    <span className="text-[8px] text-white/80 leading-none mb-0.5">GET IT ON</span>
                    <span className="text-xs text-white font-semibold leading-none">Google Play</span>
                  </div>
                </div>

                <div className="flex justify-between items-end mt-auto w-full pt-2">
                  <div className="bg-white p-1.5 rounded-xl shrink-0">
                    <Image src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://google.com" alt="Android QR Code" width={55} height={55} className="rounded-md" />
                  </div>
                  <div className="w-11 h-11 rounded-full bg-[#181818] flex items-center justify-center text-white shrink-0 group-hover:bg-black transition-colors">
                    <Play className="w-4 h-4 ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>

            </SlideUp>

          </div>
        </div>
      </Container>
    </section>
  );
}
