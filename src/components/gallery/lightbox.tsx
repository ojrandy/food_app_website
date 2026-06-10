"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { X } from "lucide-react";

interface LightboxProps {
  src: string;
  alt: string;
  children: React.ReactNode;
}

export function Lightbox({ src, alt, children }: LightboxProps) {
  const [isOpen, setIsOpen] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  return (
    <>
      <div onClick={() => setIsOpen(true)} className="cursor-zoom-in">
        {children}
      </div>

      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 sm:p-8 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        >
          <button 
            className="absolute top-4 right-4 sm:top-8 sm:right-8 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>
          
          <div className="relative w-full max-w-5xl aspect-[9/19.5] sm:aspect-[4/3] rounded-2xl overflow-hidden" onClick={(e) => e.stopPropagation()}>
             <Image
                src={src}
                alt={alt}
                fill
                className="object-contain"
                sizes="100vw"
             />
          </div>
        </div>
      )}
    </>
  );
}
