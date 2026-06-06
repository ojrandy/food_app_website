import * as React from "react";
import { cn } from "@/lib/utils";

export interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  fluid?: boolean;
}

export function Container({
  className,
  as: Component = "div",
  fluid = false,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "mx-auto w-full px-4 md:px-6 lg:px-8",
        !fluid && "max-w-7xl",
        className
      )}
      {...props}
    />
  );
}
