import * as React from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";

interface AIRecommendationBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  matchScore: number;
  reason?: string;
}

export function AIRecommendationBadge({ matchScore, reason, className, ...props }: AIRecommendationBadgeProps) {
  return (
    <div 
      className={cn(
        "flex items-center gap-3 bg-gradient-to-br from-smartOrange/10 to-transparent backdrop-blur-xl border border-smartOrange/20 rounded-2xl p-3 shadow-xl",
        className
      )}
      {...props}
    >
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-smartOrange text-white shadow-md shadow-smartOrange/30">
        <Sparkles size={20} />
      </div>
      <div className="flex flex-col">
        <span className="text-sm font-bold text-smartOrange">{matchScore}% Match</span>
        {reason && <span className="text-xs font-medium text-foreground">{reason}</span>}
      </div>
    </div>
  );
}
