import * as React from "react";
import { cn } from "@/lib/utils";

export interface PageWrapperProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
}

export function PageWrapper({
  className,
  as: Component = "main",
  ...props
}: PageWrapperProps) {
  return (
    <Component
      className={cn(
        "flex min-h-screen flex-col w-full overflow-hidden relative",
        className
      )}
      {...props}
    />
  );
}
