"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema, FormData } from "@/lib/schemas";
import { CommentStyle } from "@/lib/comment-generator";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface FormCardProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

export function FormCard({ onSubmit, isLoading }: FormCardProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      postUrl: "",
      postContent: "",
      commentStyle: "professional",
    },
  });

  const commentStyle = watch("commentStyle");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="rounded-2xl">
        <CardHeader>
          <CardTitle>Input LinkedIn Post</CardTitle>
          <CardDescription>
            Paste the post content and select your preferred comment style
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="postUrl">
                LinkedIn Post URL{" "}
                <span className="text-muted-foreground">(optional)</span>
              </Label>
              <Input
                id="postUrl"
                placeholder="https://www.linkedin.com/posts/..."
                {...register("postUrl")}
                aria-invalid={errors.postUrl ? "true" : "false"}
                aria-describedby={errors.postUrl ? "postUrl-error" : undefined}
              />
              {errors.postUrl && (
                <p
                  id="postUrl-error"
                  className="text-sm text-destructive"
                  role="alert"
                >
                  {errors.postUrl.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="postContent">
                Post Content <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="postContent"
                placeholder="Paste the LinkedIn post content here..."
                className="min-h-[150px]"
                {...register("postContent")}
                aria-invalid={errors.postContent ? "true" : "false"}
                aria-describedby={
                  errors.postContent ? "postContent-error" : undefined
                }
                aria-required="true"
              />
              {errors.postContent && (
                <p
                  id="postContent-error"
                  className="text-sm text-destructive"
                  role="alert"
                >
                  {errors.postContent.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="commentStyle">
                Comment Style <span className="text-destructive">*</span>
              </Label>
              <Select
                value={commentStyle}
                onValueChange={(value) =>
                  setValue("commentStyle", value as CommentStyle)
                }
              >
                <SelectTrigger
                  id="commentStyle"
                  aria-label="Select comment style"
                  aria-required="true"
                >
                  <SelectValue placeholder="Select a style" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="professional">Professional</SelectItem>
                  <SelectItem value="engaging">Engaging</SelectItem>
                  <SelectItem value="supportive">Supportive</SelectItem>
                  <SelectItem value="insightful">Insightful</SelectItem>
                  <SelectItem value="question-based">Question-based</SelectItem>
                </SelectContent>
              </Select>
              {errors.commentStyle && (
                <p className="text-sm text-destructive" role="alert">
                  {errors.commentStyle.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full flex items-center gap-2"
              disabled={isLoading}
              aria-busy={isLoading}
            >
              <Sparkles className="h-4 w-4" />
              {isLoading ? "Generating..." : "Generate Comment"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
}
