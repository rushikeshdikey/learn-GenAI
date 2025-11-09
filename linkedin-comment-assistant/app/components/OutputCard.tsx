"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Copy, RefreshCw, MessageSquare } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface OutputCardProps {
  comment: string;
  onRegenerate: () => void;
}

export function OutputCard({ comment, onRegenerate }: OutputCardProps) {
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(comment);
      toast({
        title: "Copied!",
        description: "Comment copied to clipboard",
      });
    } catch {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  if (!comment) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <Card className="rounded-2xl">
        <CardHeader>
          <div className="flex items-center gap-2">
            <MessageSquare
              className="h-5 w-5 text-primary"
              aria-hidden="true"
            />
            <CardTitle>Generated Comment</CardTitle>
          </div>
          <CardDescription>
            Ready to use—feel free to personalize before posting
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Textarea
            value={comment}
            readOnly
            className="min-h-[100px] resize-none bg-muted/50"
            aria-label="Generated comment"
          />
          <div className="flex gap-2 flex-wrap">
            <Button
              onClick={handleCopy}
              className="flex items-center gap-2"
              aria-label="Copy comment to clipboard"
            >
              <Copy className="h-4 w-4" />
              Copy
            </Button>
            <Button
              onClick={onRegenerate}
              variant="outline"
              className="flex items-center gap-2"
              aria-label="Regenerate comment"
            >
              <RefreshCw className="h-4 w-4" />
              Regenerate
            </Button>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
