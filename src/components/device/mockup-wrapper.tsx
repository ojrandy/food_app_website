import * as React from "react";
import { cn } from "@/lib/utils";

interface MockupWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function MockupWrapper({ children, className, ...props }: MockupWrapperProps) {
  return (
    <div className={cn("relative w-full max-w-5xl mx-auto flex justify-center items-center perspective-1000", className)} {...props}>
      {children}
    </div>
  );
}
