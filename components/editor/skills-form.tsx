"use client"

import { useState } from "react"
import { Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { useCVStore } from "@/store/cv-store"
import { AiPolishDialog } from "./ai-polish-dialog"
import { RichTextEditor } from "./rich-text-editor"

export function SkillsForm() {
  const { cv, updateSkills } = useCVStore()
  const [showPolish, setShowPolish] = useState(false)

  return (
    <div className="space-y-4">
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <Label>Skills</Label>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 text-xs"
            onClick={() => setShowPolish(true)}
            disabled={!cv.skills}
          >
            <Sparkles className="mr-1 h-3 w-3" />
            AI Polish
          </Button>
        </div>
        <RichTextEditor content={cv.skills} onChange={updateSkills} placeholder="List your skills..." />
        <p className="text-xs text-muted-foreground">
          Use the toolbar to format your skills with bullets and bold text.
        </p>
      </div>

      <AiPolishDialog
        open={showPolish}
        onOpenChange={setShowPolish}
        originalContent={cv.skills}
        onApply={updateSkills}
      />
    </div>
  )
}
