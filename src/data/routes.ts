export interface Route {
  name: string;
  href: string;
  hasMegaMenu?: boolean;
}

export const MAIN_ROUTES: Route[] = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features", hasMegaMenu: true },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Screenshots", href: "/#screenshots" },
  { name: "Research", href: "/#research" },
  { name: "About", href: "/#about" },
];

export const LEGAL_ROUTES: Route[] = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];
