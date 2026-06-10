import * as React from "react";
import Image from "next/image";
import { Container } from "@/components/layout";
import { Button } from "@/components/ui/button";
import { FadeIn, SlideUp } from "@/components/motion/animations";
import { Download } from "lucide-react";

export function BottomCTA() {
  return (
    <section className="bg-gradient-to-b from-[#FAFAFA] to-white py-24 relative overflow-hidden rounded-t-[3rem] md:rounded-t-[5rem] -mt-10 z-30">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col">
            <SlideUp>
              <div className="w-16 h-16 bg-smartOrange/10 rounded-2xl flex items-center justify-center mb-8">
                {/* Chef Hat SVG icon */}
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C8.68629 2 6 4.68629 6 8C6 9.61053 6.63467 11.072 7.66986 12.1485C6.11545 13.0678 5 14.7735 5 16.75C5 19.0972 6.90278 21 9.25 21H14.75C17.0972 21 19 19.0972 19 16.75C19 14.7735 17.8845 13.0678 16.3301 12.1485C17.3653 11.072 18 9.61053 18 8C18 4.68629 15.3137 2 12 2Z" fill="#F97316"/>
                </svg>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
                Start Making Smarter <br />
                Food Decisions <span className="text-smartOrange">Today!</span>
              </h2>
              <p className="text-lg text-slate-600 mb-8 max-w-md">
                Join SmartMeal AI and transform the way you cook, eat and live.
              </p>
            </SlideUp>

            <SlideUp delay={0.2} className="flex flex-col sm:flex-row items-center gap-4">
              <Button size="lg" className="bg-smartOrange hover:bg-smartOrange-dark text-white rounded-full px-8 py-6 text-lg shadow-lg shadow-smartOrange/30 w-full sm:w-auto">
                Get Started For Free
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 py-6 text-lg border-slate-300 text-slate-700 hover:bg-slate-100 w-full sm:w-auto">
                <Download className="mr-2 w-5 h-5 text-slate-900" />
                Download App
              </Button>
            </SlideUp>
          </div>

          <FadeIn delay={0.3} className="relative h-[400px] md:h-[500px]">
             {/* Large Plate of Food Image */}
             <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[120%] h-[120%]">
               <Image 
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=1200&q=80" 
                  alt="Delicious Healthy Food" 
                  fill
                  className="object-contain"
               />
             </div>
          </FadeIn>

        </div>
      </Container>
    </section>
  );
}
