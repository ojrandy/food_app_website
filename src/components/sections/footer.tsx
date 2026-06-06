"use client";

import * as React from "react";
import { Container } from "@/components/layout";
import { FOOTER_ROUTES } from "@/data/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-8 gap-8 mb-16">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-lg bg-smartOrange flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <span className="font-bold text-xl tracking-tight text-slate-900">SmartMeal AI</span>
            </Link>
            <p className="text-sm text-slate-500 mb-6 max-w-xs">
              An AI-powered food recommendation and meal planning platform developed as a Final Year Research Project.
            </p>
            <div className="flex items-center gap-4 text-slate-400">
              <Link href="#" className="hover:text-smartOrange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </Link>
              <Link href="#" className="hover:text-smartOrange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </Link>
              <Link href="#" className="hover:text-smartOrange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </Link>
              <Link href="#" className="hover:text-smartOrange transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </Link>
            </div>
          </div>

          {/* Links Cols */}
          <div>
            <h4 className="font-bold text-slate-900 mb-6">Product</h4>
            <ul className="space-y-4">
              {FOOTER_ROUTES.product.map((route) => (
                <li key={route.name}>
                  <Link href={route.href} className="text-sm text-slate-500 hover:text-smartOrange transition-colors">
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Research</h4>
            <ul className="space-y-4">
              {FOOTER_ROUTES.research.map((route) => (
                <li key={route.name}>
                  <Link href={route.href} className="text-sm text-slate-500 hover:text-smartOrange transition-colors">
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Company</h4>
            <ul className="space-y-4">
              {FOOTER_ROUTES.company.map((route) => (
                <li key={route.name}>
                  <Link href={route.href} className="text-sm text-slate-500 hover:text-smartOrange transition-colors">
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
            <ul className="space-y-4">
              {FOOTER_ROUTES.legal.map((route) => (
                <li key={route.name}>
                  <Link href={route.href} className="text-sm text-slate-500 hover:text-smartOrange transition-colors">
                    {route.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Col */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-slate-900 mb-6">Stay Updated</h4>
            <p className="text-sm text-slate-500 mb-4">
              Subscribe to get the latest updates about our research and app.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-slate-50 border-slate-200"
              />
              <Button type="submit" className="bg-smartOrange hover:bg-smartOrange-dark text-white rounded-md px-6">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-100 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} SmartMeal AI. All rights reserved. | Final Year Research Project</p>
          <p className="mt-4 md:mt-0 flex items-center gap-1">
            Made with <span className="text-alertRed">♥</span> for smarter meals
          </p>
        </div>
      </Container>
    </footer>
  );
}
