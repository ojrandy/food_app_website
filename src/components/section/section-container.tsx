import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
}

export function SectionContainer({ children, className, as: Component = "section", ...props }: SectionContainerProps) {
  return (
    <Component className={cn("py-20 md:py-28 lg:py-32 w-full overflow-hidden relative", className)} {...props}>
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-10">
        {children}
      </div>
    </Component>
  );
}
