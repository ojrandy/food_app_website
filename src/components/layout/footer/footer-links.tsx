import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Route } from "@/lib/config/navigation";

export function FooterLinks({ links }: { links: Route[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={cn(
              "text-sm text-slate-500 hover:text-smartOrange transition-colors focus-ring rounded-sm -mx-1 px-1 py-0.5 inline-block"
            )}
          >
            {link.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}
