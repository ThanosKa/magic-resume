"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { useCVStore } from "@/store/cv-store"
import { AiPolishDialog } from "./ai-polish-dialog"
import { RichTextEditor } from "./rich-text-editor"

export function SkillsForm() {
  const { cv, updateSkills } = useCVStore()
  const [showPolish, setShowPolish] = useState(false)
  const [expanded, setExpanded] = useState(true)

  return (
    <div className="space-y-4">
      <Card className="overflow-hidden">
        <div
          className="flex cursor-pointer items-center justify-between p-4"
          onClick={() => setExpanded((prev) => !prev)}
        >
          <div className="flex-1 truncate">
            <p className="font-medium">Skills</p>
            <p className="text-sm text-muted-foreground">List your skills with bullets and emphasis.</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-xs"
              onClick={(e) => {
                e.stopPropagation()
                setShowPolish(true)
              }}
              disabled={!cv.skills}
            >
              <Sparkles className="mr-1 h-3 w-3" />
              AI Polish
            </Button>
            {expanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </div>
        </div>

        {expanded && (
          <CardContent className="border-t pt-4">
            <div className="space-y-2">
              <Label>Skills</Label>
              <RichTextEditor content={cv.skills} onChange={updateSkills} placeholder="List your skills..." />
              <p className="text-xs text-muted-foreground">
                Use the toolbar to format your skills with bullets and bold text.
              </p>
            </div>
          </CardContent>
        )}
      </Card>

      <AiPolishDialog
        open={showPolish}
        onOpenChange={setShowPolish}
        originalContent={cv.skills}
        onApply={updateSkills}
      />
    </div>
  )
}
