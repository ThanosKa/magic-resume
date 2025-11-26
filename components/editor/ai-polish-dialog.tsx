"use client"

import { useState, useCallback } from "react"
import { Sparkles, RefreshCw, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface AiPolishDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  originalContent: string
  onApply: (content: string) => void
}

export function AiPolishDialog({ open, onOpenChange, originalContent, onApply }: AiPolishDialogProps) {
  const [polishedContent, setPolishedContent] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const polish = useCallback(
    async () => {
      setIsLoading(true)
      setPolishedContent("")

      try {
        const response = await fetch("/api/polish", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ content: originalContent }),
        })

        if (!response.ok) {
          const errorText = await response.text()
          throw new Error(errorText || "Failed to polish content")
        }

        const reader = response.body?.getReader()
        const decoder = new TextDecoder()

        if (reader) {
          while (true) {
            const { done, value } = await reader.read()
            if (done) break
            const chunk = decoder.decode(value)
            setPolishedContent((prev) => prev + chunk)
          }
        }
      } catch (error) {
        console.error("Polish error:", error)
        setPolishedContent(
          "Error: Failed to polish content. Please verify the server OpenRouter API key configuration and try again.",
        )
      } finally {
        setIsLoading(false)
      }
    },
    [originalContent],
  )

  const handlePolish = useCallback(() => {
    polish()
  }, [polish])

  const handleApply = () => {
    onApply(polishedContent)
    onOpenChange(false)
    setPolishedContent("")
  }

  const handleClose = () => {
    onOpenChange(false)
    setPolishedContent("")
  }

  return (
    <>
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="max-w-4xl">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5" />
              AI Polish
            </DialogTitle>
          </DialogHeader>

          <div className="grid gap-4 py-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">Original</h4>
              <div
                className="min-h-[200px] max-h-[400px] overflow-auto rounded-md border bg-muted/50 p-3 text-sm"
                dangerouslySetInnerHTML={{ __html: originalContent || "<em>No content</em>" }}
              />
            </div>
            <div className="space-y-2">
              <h4 className="text-sm font-medium text-muted-foreground">Polished</h4>
              <div className="min-h-[200px] max-h-[400px] overflow-auto rounded-md border bg-muted/50 p-3 text-sm">
                {isLoading && !polishedContent && (
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <RefreshCw className="h-4 w-4 animate-spin" />
                    Polishing...
                  </div>
                )}
                {polishedContent ? (
                  <div dangerouslySetInnerHTML={{ __html: polishedContent }} />
                ) : !isLoading ? (
                  <p className="text-muted-foreground">Click the Polish button to enhance your content with AI</p>
                ) : null}
              </div>
            </div>
          </div>

          <DialogFooter className="flex-col gap-2 sm:flex-row">
            <Button variant="outline" onClick={handlePolish} disabled={isLoading || !originalContent}>
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
              <Button onClick={handleApply} disabled={!polishedContent || isLoading}>
                <Check className="mr-2 h-4 w-4" />
                Apply
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
