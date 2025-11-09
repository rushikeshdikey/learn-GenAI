"use client";

import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { FormCard } from "./components/FormCard";
import { Scratchpad } from "./components/Scratchpad";
import { OutputCard } from "./components/OutputCard";
import { FormData } from "@/lib/schemas";
import { generateComment, generateScratchpad } from "@/lib/comment-generator";

export const dynamic = "force-dynamic";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [scratchpadItems, setScratchpadItems] = useState<string[]>([]);
  const [generatedComment, setGeneratedComment] = useState("");
  const [lastFormData, setLastFormData] = useState<FormData | null>(null);

  const handleGenerate = async (data: FormData) => {
    setIsLoading(true);
    setLastFormData(data);

    // Simulate processing delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    const scratchpad = generateScratchpad(data.postContent, data.commentStyle);
    const comment = generateComment(data.postContent, data.commentStyle);

    setScratchpadItems(scratchpad);
    setGeneratedComment(comment);
    setIsLoading(false);
  };

  const handleRegenerate = async () => {
    if (!lastFormData) return;

    setIsLoading(true);

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    const scratchpad = generateScratchpad(
      lastFormData.postContent,
      lastFormData.commentStyle
    );
    const comment = generateComment(
      lastFormData.postContent,
      lastFormData.commentStyle
    );

    setScratchpadItems(scratchpad);
    setGeneratedComment(comment);
    setIsLoading(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          <FormCard onSubmit={handleGenerate} isLoading={isLoading} />
          <Scratchpad items={scratchpadItems} />
          <OutputCard
            comment={generatedComment}
            onRegenerate={handleRegenerate}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
