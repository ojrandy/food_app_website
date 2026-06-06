"use client";

import * as React from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const schema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

type FormValues = z.infer<typeof schema>;

export function NewsletterSignup() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    // Placeholder for future API integration
    await new Promise((resolve) => setTimeout(resolve, 800));
    console.log("Newsletter signup:", data.email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-sm font-medium text-successGreen bg-successGreen/10 p-3 rounded-lg border border-successGreen/20">
        Thanks for subscribing! We'll be in touch.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <Input
          type="email"
          placeholder="Enter your email"
          aria-label="Email address for newsletter"
          aria-invalid={!!errors.email}
          {...register("email")}
          className="w-full bg-white shadow-sm"
        />
        <Button 
          type="submit" 
          variant="smart" 
          disabled={isSubmitting}
          className="shrink-0 focus-ring"
        >
          {isSubmitting ? "..." : "Subscribe"}
        </Button>
      </div>
      {errors.email && (
        <p className="text-xs text-alertRed font-medium">
          {errors.email.message}
        </p>
      )}
    </form>
  );
}
