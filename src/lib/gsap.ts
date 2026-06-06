import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animations } from "@/constants/animations";

// Register ScrollTrigger if running in browser
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Creates a standard hero sequence staggering child elements.
 * Best used for complex initial page loads where Framer Motion is insufficient.
 */
export function createHeroSequence(
  containerRef: React.RefObject<HTMLElement | null>,
  childSelector: string = ".hero-anim"
) {
  if (!containerRef.current) return;
  
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const ctx = gsap.context(() => {
    gsap.from(childSelector, {
      y: prefersReducedMotion ? 0 : 30,
      opacity: 0,
      duration: prefersReducedMotion ? 0 : animations.durations.normal,
      stagger: prefersReducedMotion ? 0 : 0.1,
      ease: "power3.out",
    });
  }, containerRef);

  return ctx; // Return context for cleanup
}

/**
 * High-performance parallax scroll effect.
 * Uses transform-only properties to prevent CLS.
 */
export function createParallaxEffect(
  targetRef: React.RefObject<HTMLElement | null>,
  speed: number = 0.5
) {
  if (!targetRef.current) return;
  
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (prefersReducedMotion) return;

  const ctx = gsap.context(() => {
    gsap.to(targetRef.current, {
      y: () => -100 * speed,
      ease: "none",
      scrollTrigger: {
        trigger: targetRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });
  });

  return ctx;
}

/**
 * Standard scroll reveal using GSAP.
 */
export function createScrollReveal(
  targetRef: React.RefObject<HTMLElement | null>,
  direction: "up" | "down" | "left" | "right" = "up"
) {
  if (!targetRef.current) return;

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let x = 0;
  let y = 0;

  if (!prefersReducedMotion) {
    if (direction === "up") y = 30;
    if (direction === "down") y = -30;
    if (direction === "left") x = 30;
    if (direction === "right") x = -30;
  }

  const ctx = gsap.context(() => {
    gsap.from(targetRef.current, {
      x,
      y,
      opacity: 0,
      duration: prefersReducedMotion ? 0 : animations.durations.normal,
      ease: "power2.out",
      scrollTrigger: {
        trigger: targetRef.current,
        start: "top 85%", // Trigger slightly before it comes into full view
        once: true,
      },
    });
  });

  return ctx;
}
