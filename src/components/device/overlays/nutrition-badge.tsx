import * as React from "react";
import { cn } from "@/lib/utils";
import { Activity } from "lucide-react";

interface NutritionBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  calories: number;
  protein?: number;
}

export function NutritionBadge({ calories, protein, className, ...props }: NutritionBadgeProps) {
  return (
    <div 
      className={cn(
        "flex items-center gap-3 bg-white/90 backdrop-blur-md border border-border/50 rounded-2xl p-3 shadow-xl",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-success/20 text-success">
        <Activity size={20} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-foreground">{calories} kcal</span>
        {protein && <span className="text-xs font-medium text-muted-foreground">{protein}g Protein</span>}
      </div>
    </div>
  );
}
