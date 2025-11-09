import { z } from "zod";

export const formSchema = z.object({
  postUrl: z
    .string()
    .url("Please enter a valid URL")
    .optional()
    .or(z.literal("")),
  postContent: z
    .string()
    .min(10, "Post content must be at least 10 characters")
    .max(5000, "Post content must be less than 5000 characters"),
  commentStyle: z.enum([
    "professional",
    "engaging",
    "supportive",
    "insightful",
    "question-based",
  ] as const),
});

export type FormData = z.infer<typeof formSchema>;
