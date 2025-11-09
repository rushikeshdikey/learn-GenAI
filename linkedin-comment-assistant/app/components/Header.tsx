"use client";

import { Moon, Sun, Sparkles } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <header className="border-b">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Sparkles className="h-8 w-8 text-primary" aria-hidden="true" />
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                LinkedIn Comment Assistant
              </h1>
              <p className="text-sm text-muted-foreground">
                Generate thoughtful, professional comments that add value
              </p>
            </div>
          </div>
          <div className="w-10 h-10" />
        </div>
      </header>
    );
  }

  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Sparkles className="h-8 w-8 text-primary" aria-hidden="true" />
          <div>
            <h1 className="text-2xl font-bold tracking-tight">
              LinkedIn Comment Assistant
            </h1>
            <p className="text-sm text-muted-foreground">
              Generate thoughtful, professional comments that add value
            </p>
          </div>
        </div>
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
      </div>
    </header>
  );
}
