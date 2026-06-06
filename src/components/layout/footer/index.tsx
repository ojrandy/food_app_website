import * as React from "react";
import { FooterContainer } from "./footer-container";
import { FooterBrand } from "./footer-brand";
import { FooterColumn } from "./footer-column";
import { FooterLinks } from "./footer-links";
import { NewsletterSignup } from "./newsletter-signup";
import { SocialLinks } from "./social-links";
import { FooterBottomBar } from "./footer-bottom-bar";
import { FOOTER_ROUTES } from "@/lib/config/navigation";

export function Footer() {
  return (
    <footer className="bg-slate-50 pt-16 md:pt-24 border-t border-slate-200 mt-auto" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <FooterContainer>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Column 1: Brand */}
          <div className="lg:col-span-1">
            <FooterBrand />
          </div>

          {/* Column 2: Product */}
          <FooterColumn title="Product">
            <FooterLinks links={FOOTER_ROUTES.product} />
          </FooterColumn>

          {/* Column 3: Research */}
          <FooterColumn title="Research">
            <FooterLinks links={FOOTER_ROUTES.research} />
          </FooterColumn>

          {/* Column 4: Company */}
          <FooterColumn title="Company">
            <FooterLinks links={FOOTER_ROUTES.company} />
          </FooterColumn>

          {/* Column 5: Contact & Newsletter */}
          <div className="flex flex-col gap-6">
            <h4 className="font-semibold text-slate-900 tracking-tight">Stay Updated</h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              Subscribe to our newsletter for the latest AI nutrition research and platform updates.
            </p>
            <NewsletterSignup />
            <div className="mt-2">
              <SocialLinks />
            </div>
          </div>
        </div>

        <FooterBottomBar />
      </FooterContainer>
    </footer>
  );
}
