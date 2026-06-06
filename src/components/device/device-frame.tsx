import * as React from "react";
import { cn } from "@/lib/utils";

interface DeviceFrameProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  type?: "mobile" | "tablet" | "desktop";
}

export function DeviceFrame({ children, type = "mobile", className, ...props }: DeviceFrameProps) {
  const types = {
    mobile: "w-[300px] sm:w-[320px] aspect-[9/19.5] rounded-[2.5rem] border-[12px] border-slate-900 shadow-2xl shadow-slate-900/20",
    tablet: "w-[600px] sm:w-[768px] aspect-[4/3] rounded-[2rem] border-[14px] border-slate-900 shadow-2xl shadow-slate-900/20",
    desktop: "w-full max-w-[1024px] aspect-video rounded-t-xl border-[16px] border-b-0 border-slate-900 shadow-2xl shadow-slate-900/20",
  };

  return (
    <div className={cn("relative mx-auto bg-slate-900", types[type], className)} {...props}>
      {/* Dynamic Screen Area */}
      <div className={cn(
        "w-full h-full bg-slate-50 relative overflow-hidden",
        type === "mobile" ? "rounded-[1.5rem]" : type === "tablet" ? "rounded-[1rem]" : "rounded-t-sm"
      )}>
        {/* Mobile Notch Placeholder */}
        {type === "mobile" && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-[24px] bg-slate-900 rounded-b-xl z-20"></div>
        )}
        {children}
      </div>
    </div>
  );
}
