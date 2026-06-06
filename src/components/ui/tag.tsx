import * as React from "react"
import { Badge, BadgeProps } from "./badge"
import { cn } from "@/lib/utils"

export interface TagProps extends BadgeProps {
  onRemove?: () => void
}

export function Tag({ className, children, onRemove, ...props }: TagProps) {
  return (
    <Badge 
      className={cn("rounded-md px-2 py-1 flex items-center gap-1", className)} 
      {...props}
    >
      {children}
      {onRemove && (
        <button
          type="button"
          className="hover:bg-black/10 dark:hover:bg-white/10 rounded-full p-0.5 focus:outline-none focus:ring-2 focus:ring-ring"
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
          aria-label="Remove tag"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      )}
    </Badge>
  )
}
