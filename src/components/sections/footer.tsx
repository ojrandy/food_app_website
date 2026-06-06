import * as React from "react";
import { Container, Grid } from "@/components/layout";
import { MAIN_ROUTES, LEGAL_ROUTES } from "@/data/navigation";
import Link from "next/link";
import { Leaf } from "lucide-react"; // Using leaf as a placeholder logo

export function Footer() {
  return (
    <footer className="bg-neutral-950 text-neutral-400 py-16 md:py-24 border-t border-neutral-900">
      <Container>
        <Grid cols={{ base: 1, md: 4 }} gap="xl" className="mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6 text-white w-fit">
              <div className="w-8 h-8 bg-smartOrange rounded-xl flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl tracking-tight">SmartMeal AI</span>
            </Link>
            <p className="max-w-xs text-neutral-500 mb-6">
              Your Personal AI Chef & Nutritionist. Automate meal planning, track macros, and discover recipes tailored exactly to your body.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              {MAIN_ROUTES.map((route) => (
                <li key={route.name}>
                  <Link href={route.href} className="hover:text-white transition-colors">
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Legal</h4>
            <ul className="space-y-4">
              {LEGAL_ROUTES.map((route) => (
                <li key={route.name}>
                  <Link href={route.href} className="hover:text-white transition-colors">
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </Grid>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-neutral-900 text-sm">
          <p>© {new Date().getFullYear()} SmartMeal AI. All rights reserved.</p>
          <p className="mt-4 md:mt-0 text-neutral-600">A Final Year Research Project.</p>
        </div>
      </Container>
    </footer>
  );
}
