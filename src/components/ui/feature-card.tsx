import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./card"
import { cn } from "@/lib/utils"
import { LucideIcon } from "lucide-react"

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description: string
  icon?: LucideIcon
  iconClassName?: string
}

export const FeatureCard = React.forwardRef<HTMLDivElement, FeatureCardProps>(
  ({ className, title, description, icon: Icon, iconClassName, ...props }, ref) => {
    return (
      <Card 
        ref={ref} 
        className={cn(
          "group relative overflow-hidden transition-all duration-300 hover:shadow-floatingCard hover:-translate-y-1 border-border/50",
          className
        )} 
        {...props}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-smartOrange/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <CardHeader className="relative z-10 space-y-4">
          {Icon && (
            <div className={cn(
              "w-12 h-12 rounded-xl bg-smartOrange/10 flex items-center justify-center text-smartOrange mb-2 group-hover:scale-110 transition-transform duration-300",
              iconClassName
            )}>
              <Icon className="w-6 h-6" />
            </div>
          )}
          <CardTitle className="text-xl group-hover:text-smartOrange transition-colors duration-300">
            {title}
          </CardTitle>
          <CardDescription className="text-base leading-relaxed">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    )
  }
)
FeatureCard.displayName = "FeatureCard"
