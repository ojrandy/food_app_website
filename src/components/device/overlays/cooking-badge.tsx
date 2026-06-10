import * as React from "react";
import { cn } from "@/lib/utils";
import { Clock } from "lucide-react";

interface CookingBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  timeMinutes: number;
  difficulty?: "Easy" | "Medium" | "Hard";
}

export function CookingBadge({ timeMinutes, difficulty = "Easy", className, ...props }: CookingBadgeProps) {
  return (
    <div 
      className={cn(
        "flex items-center gap-3 bg-white/90 backdrop-blur-md border border-border/50 rounded-2xl p-3 shadow-xl",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-warning/20 text-warning-foreground">
        <Clock size={20} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-foreground">{timeMinutes} Min</span>
        <span className="text-xs font-medium text-muted-foreground">{difficulty} Prep</span>
      </div>
    </div>
  );
}
