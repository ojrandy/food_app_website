import * as React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown } from "lucide-react"

export interface StatisticCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  value: string | number
  trend?: number // positive or negative percentage
  trendLabel?: string
  icon?: React.ReactNode
}

export const StatisticCard = React.forwardRef<HTMLDivElement, StatisticCardProps>(
  ({ className, title, value, trend, trendLabel, icon, ...props }, ref) => {
    const isPositive = trend && trend > 0
    const isNegative = trend && trend < 0

    return (
      <Card ref={ref} className={cn("overflow-hidden", className)} {...props}>
        <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
          <CardTitle className="text-sm font-medium text-muted-foreground">
            {title}
          </CardTitle>
          {icon && <div className="text-muted-foreground">{icon}</div>}
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-foreground tracking-tight">
            {value}
          </div>
          {(trend !== undefined) && (
            <div className="mt-2 flex items-center text-sm">
              <span
                className={cn(
                  "flex items-center font-medium",
                  isPositive && "text-success",
                  isNegative && "text-destructive",
                  !isPositive && !isNegative && "text-muted-foreground"
                )}
              >
                {isPositive && <TrendingUp className="mr-1 h-3 w-3" />}
                {isNegative && <TrendingDown className="mr-1 h-3 w-3" />}
                {Math.abs(trend)}%
              </span>
              {trendLabel && (
                <span className="ml-2 text-muted-foreground">{trendLabel}</span>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    )
  }
)
StatisticCard.displayName = "StatisticCard"
