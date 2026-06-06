/**
 * SmartMeal AI - Animation Tokens
 */

export const animations = {
  // Durations (in seconds for Framer Motion / GSAP)
  durations: {
    fast: 0.2,
    normal: 0.4,
    slow: 0.8,
  },

  // Ease Curves (Cubic Bezier values for smooth transitions)
  curves: {
    // Standard UI transitions (Linear feel)
    standard: [0.4, 0.0, 0.2, 1],
    // Elements entering the screen (Deceleration)
    entrance: [0.0, 0.0, 0.2, 1],
    // Elements leaving the screen (Acceleration)
    exit: [0.4, 0.0, 1, 1],
    // Playful / Apple-like spring bounds
    elastic: [0.68, -0.6, 0.32, 1.6],
    // Super smooth signature curve
    smooth: [0.22, 1, 0.36, 1],
  },
};
