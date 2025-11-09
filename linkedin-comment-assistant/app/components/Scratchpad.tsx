"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

interface ScratchpadProps {
  items: string[];
}

export function Scratchpad({ items }: ScratchpadProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Card className="rounded-2xl">
        <CardHeader>
          <div className="flex items-center gap-2">
            <FileText className="h-5 w-5 text-primary" aria-hidden="true" />
            <CardTitle>Analysis Scratchpad</CardTitle>
          </div>
          <CardDescription>
            Strategy and reasoning behind the generated comment
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3" role="list">
            {items.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.1 }}
                className="text-sm leading-relaxed text-muted-foreground"
                dangerouslySetInnerHTML={{ __html: item }}
              />
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
