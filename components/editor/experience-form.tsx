"use client"

import { Plus, Trash2, ChevronDown, ChevronUp, Eye, EyeOff, Sparkles } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { useCVStore } from "@/store/cv-store"
import { AiPolishDialog } from "./ai-polish-dialog"
import { RichTextEditor } from "./rich-text-editor"

export function ExperienceForm() {
  const { cv, addExperience, updateExperience, removeExperience } = useCVStore()
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set())
  const [polishingId, setPolishingId] = useState<string | null>(null)

  const toggleExpanded = (id: string) => {
    const next = new Set(expandedIds)
    if (next.has(id)) {
      next.delete(id)
    } else {
      next.add(id)
    }
    setExpandedIds(next)
  }

  const currentExp = cv.experience.find((e) => e.id === polishingId)

  return (
    <div className="space-y-4">
      {cv.experience.map((exp) => (
        <Card key={exp.id} className="overflow-hidden">
          <div className="flex cursor-pointer items-center justify-between p-4" onClick={() => toggleExpanded(exp.id)}>
            <div className="flex-1 truncate">
              <p className="font-medium">{exp.company || "New Experience"}</p>
              <p className="text-sm text-muted-foreground">{exp.position || "Add position"}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={(e) => {
                  e.stopPropagation()
                  updateExperience(exp.id, { visible: !exp.visible })
                }}
              >
                {exp.visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4 text-muted-foreground" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-destructive"
                onClick={(e) => {
                  e.stopPropagation()
                  removeExperience(exp.id)
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              {expandedIds.has(exp.id) ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </div>
          </div>
          {expandedIds.has(exp.id) && (
            <CardContent className="border-t pt-4">
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Company</Label>
                    <Input
                      value={exp.company}
                      onChange={(e) => updateExperience(exp.id, { company: e.target.value })}
                      placeholder="Company name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Position</Label>
                    <Input
                      value={exp.position}
                      onChange={(e) => updateExperience(exp.id, { position: e.target.value })}
                      placeholder="Your role"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Input
                      value={exp.startDate}
                      onChange={(e) => updateExperience(exp.id, { startDate: e.target.value })}
                      placeholder="2020"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Input
                      value={exp.endDate}
                      onChange={(e) => updateExperience(exp.id, { endDate: e.target.value })}
                      placeholder="Present"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label>Description</Label>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="h-7 text-xs"
                      onClick={() => setPolishingId(exp.id)}
                      disabled={!exp.description}
                    >
                      <Sparkles className="mr-1 h-3 w-3" />
                      AI Polish
                    </Button>
                  </div>
                  <RichTextEditor
                    content={exp.description}
                    onChange={(content) => updateExperience(exp.id, { description: content })}
                    placeholder="Describe your responsibilities and achievements..."
                  />
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      ))}
      <Button variant="outline" className="w-full bg-transparent" onClick={() => addExperience()}>
        <Plus className="mr-2 h-4 w-4" />
        Add Experience
      </Button>

      <AiPolishDialog
        open={!!polishingId}
        onOpenChange={(open) => !open && setPolishingId(null)}
        originalContent={currentExp?.description || ""}
        onApply={(content) => {
          if (polishingId) {
            updateExperience(polishingId, { description: content })
          }
        }}
      />
    </div>
  )
}
