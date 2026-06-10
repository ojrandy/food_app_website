"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface ScreenshotCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function ScreenshotCarousel({ children, className, ...props }: ScreenshotCarouselProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full overflow-hidden group">
      <div 
        ref={scrollRef}
        className={cn(
          "flex w-full overflow-x-auto snap-x snap-mandatory no-scrollbar gap-6 pb-8 px-4 sm:px-8",
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child) => (
          <div className="shrink-0 snap-center w-[85%] sm:w-[60%] md:w-[40%] lg:w-[30%]">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
