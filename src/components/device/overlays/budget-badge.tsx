import * as React from "react";
import { cn } from "@/lib/utils";
import { DollarSign } from "lucide-react";

interface BudgetBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  costPerMeal: number;
  savings?: number;
}

export function BudgetBadge({ costPerMeal, savings, className, ...props }: BudgetBadgeProps) {
  return (
    <div 
      className={cn(
        "flex items-center gap-3 bg-white/90 backdrop-blur-md border border-border/50 rounded-2xl p-3 shadow-xl",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-smartOrange/20 text-smartOrange">
        <DollarSign size={20} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-foreground">${costPerMeal.toFixed(2)} / meal</span>
        {savings && <span className="text-xs font-medium text-success">Saves ${savings}/wk</span>}
      </div>
    </div>
  );
}
