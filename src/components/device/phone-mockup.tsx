import * as React from "react";
import { DeviceFrame } from "./device-frame";
import { cn } from "@/lib/utils";

interface PhoneMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  imageSrc?: string;
  alt?: string;
  children?: React.ReactNode;
}

export function PhoneMockup({ imageSrc, alt = "App screenshot", children, className, ...props }: PhoneMockupProps) {
  return (
    <DeviceFrame type="mobile" className={cn("transform transition-transform duration-700 hover:-translate-y-2", className)} {...props}>
      {imageSrc ? (
        <img src={imageSrc} alt={alt} className="w-full h-full object-cover" loading="lazy" />
      ) : (
        children
      )}
    </DeviceFrame>
  );
}
