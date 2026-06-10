import * as React from "react";
import { cn } from "@/lib/utils";

interface DeviceContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function DeviceContainer({ children, className, ...props }: DeviceContainerProps) {
  return (
    <div className={cn("relative w-full flex items-center justify-center p-4 md:p-8", className)} {...props}>
      {children}
    </div>
  );
}
