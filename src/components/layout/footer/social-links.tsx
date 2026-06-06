import * as React from "react";
import Link from "next/link";
import { socials } from "@/lib/config/socials";

export function SocialLinks() {
  return (
    <div className="flex items-center gap-4 text-slate-500">
      {socials.map((social) => (
        <Link 
          key={social.name}
          href={social.url} 
          className="hover:text-smartOrange transition-colors focus-ring rounded-sm p-1 -m-1"
          aria-label={`Follow us on ${social.name}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-sm font-medium">{social.name}</span>
        </Link>
      ))}
    </div>
  );
}
