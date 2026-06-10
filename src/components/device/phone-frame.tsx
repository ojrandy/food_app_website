import * as React from "react";
import { cn } from "@/lib/utils";

interface PhoneFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme?: "light" | "dark";
}

export function PhoneFrame({ children, theme = "light", className, ...props }: PhoneFrameProps) {
  return (
    <div 
      className={cn(
        "relative mx-auto w-[280px] sm:w-[320px] aspect-[9/19.5] rounded-[2.5rem] border-[12px] shadow-2xl overflow-hidden shrink-0",
        theme === "light" ? "border-slate-900 shadow-slate-900/20" : "border-slate-800 shadow-black/50",
        className
      )} 
      {...props}
    >
      {/* Notch */}
      <div className={cn(
        "absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[24px] rounded-b-xl z-20",
        theme === "light" ? "bg-slate-900" : "bg-slate-800"
      )}></div>
      
      {/* Screen Area */}
      <div className="w-full h-full bg-slate-50 relative overflow-hidden rounded-[1.5rem]">
        {children}
      </div>
    </div>
  );
}
