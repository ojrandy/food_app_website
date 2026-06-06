import { z } from "zod";

const TestimonialSchema = z.object({
  id: z.string(),
  name: z.string(),
  role: z.string(),
  content: z.string(),
  avatarUrl: z.string().url().or(z.string().startsWith("/")),
  rating: z.number().min(1).max(5),
});

export type Testimonial = z.infer<typeof TestimonialSchema>;

const rawTestimonials = [
  {
    id: "t1",
    name: "Sarah Jenkins",
    role: "Marathon Runner",
    content: "SmartMeal completely changed how I fuel for races. The macro precision is unmatched, and the recipe generation saves me hours every Sunday.",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
  {
    id: "t2",
    name: "Dr. Marcus Wei",
    role: "Sports Nutritionist",
    content: "I recommend this platform to all my clients. The underlying algorithm correctly adheres to modern clinical nutritional standards.",
    avatarUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    rating: 5,
  },
];

export const TESTIMONIALS = z.array(TestimonialSchema).parse(rawTestimonials);
