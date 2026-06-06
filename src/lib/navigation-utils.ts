import { MAIN_ROUTES, LEGAL_ROUTES } from "@/data/routes";

/**
 * Validates if a URL is a trusted internal route.
 * Prevents Open Redirect vulnerabilities.
 */
export function isValidInternalRoute(url: string): boolean {
  if (!url || typeof url !== "string") return false;
  
  // Allow root and fragment identifiers
  if (url === "/" || url.startsWith("/#")) return true;

  // Must strictly start with a single slash (prevent //malicious.com)
  if (!url.startsWith("/") || url.startsWith("//")) return false;

  const allValidHrefs = [...MAIN_ROUTES, ...LEGAL_ROUTES].map(r => r.href);
  
  // Exact match or sub-route match (e.g., /features/123)
  return allValidHrefs.some(href => url === href || url.startsWith(`${href}/`));
}

/**
 * Sanitizes search queries to prevent malicious injection
 */
export function sanitizeSearchQuery(query: string): string {
  if (!query) return "";
  // Strip HTML tags and limit length
  return query
    .replace(/[<>]/g, "") // remove < and >
    .slice(0, 100) // max 100 chars
    .trim();
}
