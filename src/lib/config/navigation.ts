import { z } from "zod";

const RouteSchema = z.object({
  name: z.string().min(1, "Name is required"),
  href: z.string().startsWith("/", "Href must be an absolute internal path"),
  hasMegaMenu: z.boolean().optional(),
});

export type Route = z.infer<typeof RouteSchema>;

const rawMainRoutes = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/features" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Screenshots", href: "/screenshots" },
  { name: "Research", href: "/research" },
  { name: "About Us", href: "/about" },
];

export const FOOTER_ROUTES = {
  product: [
    { name: "Features", href: "/features" },
    { name: "How it Works", href: "/how-it-works" },
    { name: "Screenshots", href: "/screenshots" },
    { name: "Mobile App", href: "/#mobile-app" },
  ],
  research: [
    { name: "Project Overview", href: "/research#overview" },
    { name: "Methodology", href: "/research#methodology" },
    { name: "AI Model", href: "/research#ai-model" },
    { name: "Evaluation", href: "/research#evaluation" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Contact Us", href: "/contact" },
    { name: "Support", href: "/support" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Use", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
  ]
};

// Validate at build time
export const MAIN_ROUTES = z.array(RouteSchema).parse(rawMainRoutes);
