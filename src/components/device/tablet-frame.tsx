import * as React from "react";
import { cn } from "@/lib/utils";

interface TabletFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  theme?: "light" | "dark";
}

export function TabletFrame({ children, theme = "light", className, ...props }: TabletFrameProps) {
  return (
    <div 
      className={cn(
        "relative mx-auto w-[600px] sm:w-[768px] aspect-[4/3] rounded-[2rem] border-[16px] shadow-2xl overflow-hidden shrink-0",
        theme === "light" ? "border-slate-900 shadow-slate-900/20" : "border-slate-800 shadow-black/50",
        className
      )} 
      {...props}
    >
      {/* Camera Hole */}
      <div className={cn(
        "absolute left-1/2 -translate-x-1/2 top-0 w-3 h-3 rounded-full z-20 mt-2",
        theme === "light" ? "bg-slate-800" : "bg-black"
      )}></div>

      {/* Screen Area */}
      <div className="w-full h-full bg-slate-50 relative overflow-hidden rounded-[1rem]">
        {children}
      </div>
    </div>
  );
}
