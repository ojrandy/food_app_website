import * as React from "react";
import { cn } from "@/lib/utils";

export interface HeroWrapperProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  alignment?: "left" | "center";
}

export function HeroWrapper({
  className,
  as: Component = "header",
  alignment = "center",
  ...props
}: HeroWrapperProps) {
  const alignStyles = {
    left: "items-start text-left",
    center: "items-center text-center mx-auto",
  };

  return (
    <Component
      className={cn(
        "relative w-full overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:pt-40 lg:pb-32 flex flex-col",
        alignStyles[alignment],
        className
      )}
      {...props}
    />
  );
}
