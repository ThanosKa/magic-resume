"use client";

import { useState, useCallback } from "react";
import { Sparkles, RefreshCw, Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useToast } from "@/components/hooks/use-toast";

interface AiPolishDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  originalContent: string;
  onApply: (content: string) => void;
  polishType?: "title" | "summary" | "description";
}


export function AiPolishDialog({
  open,
  onOpenChange,
  originalContent,
  onApply,
  polishType = "description",
}: AiPolishDialogProps) {
  const [polishedContent, setPolishedContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { toast } = useToast();

  const polish = useCallback(async () => {
    setIsLoading(true);
    setPolishedContent("");
    setError(null);

    try {
      const response = await fetch("/api/polish", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: originalContent, polishType }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || "Failed to polish content");
      }

      const data = (await response.json()) as { polished?: string };
      const polished = data.polished?.trim();

      if (!polished) {
        throw new Error("No content returned from AI polish");
      }

      setPolishedContent(polished);
      toast({
        title: "AI polish complete",
        description: "Review the suggested improvements before applying.",
      });
    } catch (error) {
      console.error("Polish error:", error);
      const message =
        error instanceof Error && error.message
          ? error.message
          : "Failed to polish content. Please try again in a moment.";
      setError(message);
      toast({
        variant: "destructive",
        title: "AI polish failed",
        description: message,
      });
    } finally {
      setIsLoading(false);
    }
  }, [originalContent, polishType]);

  const handlePolish = useCallback(() => {
    polish();
  }, [polish]);

  const handleApply = () => {
    onApply(polishedContent);
    onOpenChange(false);
    setPolishedContent("");
    setError(null);
  };

  const handleClose = () => {
    onOpenChange(false);
    setPolishedContent("");
    setError(null);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              {polishType === "title"
                ? "Polish Professional Title"
                : polishType === "summary"
                  ? "Polish Professional Summary"
                  : "AI Polish"}
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">
                Original
              </h4>
              <div
                className="min-h-[200px] max-h-[400px] overflow-auto rounded-md border bg-muted/50 p-3 text-sm"
                dangerouslySetInnerHTML={{
                  __html: originalContent || "<em>No content</em>",
                }}
              />
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">
                Polished
              </h4>
              <div className="min-h-[200px] max-h-[400px] overflow-auto rounded-md border bg-muted/50 p-3 text-sm">
                {isLoading && !polishedContent && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    {polishType === "title"
                      ? "Optimizing your professional title..."
                      : polishType === "summary"
                        ? "Crafting a compelling summary..."
                        : "Polishing..."}
                  </div>
                )}
                {polishedContent ? (
                  <div dangerouslySetInnerHTML={{ __html: polishedContent }} />
                ) : error ? (
                  <p className="text-destructive">{error}</p>
                ) : !isLoading ? (
                  <p className="text-muted-foreground">
                    {polishType === "title"
                      ? "Click the Polish button to optimize your professional title"
                      : polishType === "summary"
                        ? "Click the Polish button to create a compelling professional summary"
                        : "Click the Polish button to enhance your content with AI"}
                  </p>
                ) : null}
              </div>
            </div>
          </div>

          <DialogFooter className="flex-col gap-2 sm:flex-row">
            <Button
              variant="outline"
              onClick={handlePolish}
              disabled={isLoading || !originalContent}
            >
              {isLoading ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Polishing...
                </>
              ) : polishedContent ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Regenerate
                </>
              ) : (
                <>
                  <Sparkles className="mr-2 h-4 w-4" />
                  Polish
                </>
              )}
            </Button>
            <div className="flex gap-2">
              <Button variant="ghost" onClick={handleClose}>
                <X className="mr-2 h-4 w-4" />
                Cancel
              </Button>
              <Button
                onClick={handleApply}
                disabled={!polishedContent || isLoading}
              >
                <Check className="mr-2 h-4 w-4" />
                Apply
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
