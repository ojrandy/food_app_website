import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ScreenshotProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  alt: string;
  type?: "static" | "scrollable" | "animated";
  width?: number;
  height?: number;
}

export function Screenshot({ src, alt, type = "static", width = 1200, height = 2600, className, ...props }: ScreenshotProps) {
  if (type === "scrollable") {
    return (
      <div className={cn("w-full h-full overflow-y-auto no-scrollbar", className)} {...props}>
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="w-full h-auto object-top"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    );
  }

  return (
    <div className={cn("relative w-full h-full", className)} {...props}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-top"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
