import { z } from "zod";

const RouteSchema = z.object({
  name: z.string().min(1, "Name is required"),
  href: z.string().startsWith("/", "Href must be an absolute internal path"),
  hasMegaMenu: z.boolean().optional(),
});

export type Route = z.infer<typeof RouteSchema>;

const rawMainRoutes = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#features", hasMegaMenu: true },
  { name: "How It Works", href: "/#how-it-works" },
  { name: "Screenshots", href: "/#screenshots" },
  { name: "Research", href: "/#research" },
  { name: "About", href: "/#about" },
];

const rawLegalRoutes = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

// Validate at build time
export const MAIN_ROUTES = z.array(RouteSchema).parse(rawMainRoutes);
export const LEGAL_ROUTES = z.array(RouteSchema).parse(rawLegalRoutes);
