"use client";

import * as React from "react";
import { m, HTMLMotionProps, useReducedMotion } from "framer-motion";
import { animations } from "@/constants/animations";

type BaseAnimationProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
};

export function FadeIn({ children, delay = 0, duration = animations.durations.normal, once = true, ...props }: BaseAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once, margin: "-10%" }}
      transition={{ 
        duration: shouldReduceMotion ? 0 : duration, 
        delay: shouldReduceMotion ? 0 : delay,
        ease: animations.curves.standard 
      }}
      {...props}
    >
      {children}
    </m.div>
  );
}

export function SlideUp({ children, delay = 0, duration = animations.durations.normal, once = true, ...props }: BaseAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10%" }}
      transition={{ 
        duration: shouldReduceMotion ? 0 : duration, 
        delay: shouldReduceMotion ? 0 : delay,
        ease: animations.curves.entrance 
      }}
      {...props}
    >
      {children}
    </m.div>
  );
}

export function SlideDown({ children, delay = 0, duration = animations.durations.normal, once = true, ...props }: BaseAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-10%" }}
      transition={{ 
        duration: shouldReduceMotion ? 0 : duration, 
        delay: shouldReduceMotion ? 0 : delay,
        ease: animations.curves.entrance 
      }}
      {...props}
    >
      {children}
    </m.div>
  );
}

export function SlideLeft({ children, delay = 0, duration = animations.durations.normal, once = true, ...props }: BaseAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, margin: "-10%" }}
      transition={{ 
        duration: shouldReduceMotion ? 0 : duration, 
        delay: shouldReduceMotion ? 0 : delay,
        ease: animations.curves.entrance 
      }}
      {...props}
    >
      {children}
    </m.div>
  );
}

export function SlideRight({ children, delay = 0, duration = animations.durations.normal, once = true, ...props }: BaseAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once, margin: "-10%" }}
      transition={{ 
        duration: shouldReduceMotion ? 0 : duration, 
        delay: shouldReduceMotion ? 0 : delay,
        ease: animations.curves.entrance 
      }}
      {...props}
    >
      {children}
    </m.div>
  );
}

export function ScaleIn({ children, delay = 0, duration = animations.durations.normal, once = true, ...props }: BaseAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <m.div
      initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once, margin: "-10%" }}
      transition={{ 
        duration: shouldReduceMotion ? 0 : duration, 
        delay: shouldReduceMotion ? 0 : delay,
        ease: animations.curves.elastic 
      }}
      {...props}
    >
      {children}
    </m.div>
  );
}

type StaggerContainerProps = HTMLMotionProps<"div"> & {
  children: React.ReactNode;
  delayChildren?: number;
  staggerChildren?: number;
  once?: boolean;
};

export function StaggerContainer({ 
  children, 
  delayChildren = 0, 
  staggerChildren = 0.1, 
  once = true,
  ...props 
}: StaggerContainerProps) {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerChildren,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      },
    },
  };

  return (
    <m.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-10%" }}
      {...props}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({ children, ...props }: HTMLMotionProps<"div">) {
  const shouldReduceMotion = useReducedMotion();

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        ease: animations.curves.entrance
      }
    },
  };

  return (
    <m.div variants={itemVariants} {...props}>
      {children}
    </m.div>
  );
}
