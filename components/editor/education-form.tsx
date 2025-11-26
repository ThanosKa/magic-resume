"use client"

import { Plus, Trash2, ChevronDown, ChevronUp, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { useCVStore } from "@/store/cv-store"

export function EducationForm() {
  const { cv, addEducation, updateEducation, removeEducation } = useCVStore()
  const [expandedIds, setExpandedIds] = useState<Set<string>>(new Set())

  const toggleExpanded = (id: string) => {
    const next = new Set(expandedIds)
    if (next.has(id)) {
      next.delete(id)
    } else {
      next.add(id)
    }
    setExpandedIds(next)
  }

  return (
    <div className="space-y-4">
      {cv.education.map((edu) => (
        <Card key={edu.id} className="overflow-hidden">
          <div className="flex cursor-pointer items-center justify-between p-4" onClick={() => toggleExpanded(edu.id)}>
            <div className="flex-1 truncate">
              <p className="font-medium">{edu.institution || "New Education"}</p>
              <p className="text-sm text-muted-foreground">{edu.degree || "Add degree"}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={(e) => {
                  e.stopPropagation()
                  updateEducation(edu.id, { visible: !edu.visible })
                }}
              >
                {edu.visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4 text-muted-foreground" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-destructive"
                onClick={(e) => {
                  e.stopPropagation()
                  removeEducation(edu.id)
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              {expandedIds.has(edu.id) ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </div>
          </div>
          {expandedIds.has(edu.id) && (
            <CardContent className="border-t pt-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Institution</Label>
                  <Input
                    value={edu.institution}
                    onChange={(e) => updateEducation(edu.id, { institution: e.target.value })}
                    placeholder="University name"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Degree</Label>
                    <Input
                      value={edu.degree}
                      onChange={(e) => updateEducation(edu.id, { degree: e.target.value })}
                      placeholder="Bachelor of Science"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Field of Study</Label>
                    <Input
                      value={edu.field}
                      onChange={(e) => updateEducation(edu.id, { field: e.target.value })}
                      placeholder="Computer Science"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Input
                      value={edu.startDate}
                      onChange={(e) => updateEducation(edu.id, { startDate: e.target.value })}
                      placeholder="2014"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Input
                      value={edu.endDate}
                      onChange={(e) => updateEducation(edu.id, { endDate: e.target.value })}
                      placeholder="2018"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Description (optional)</Label>
                  <Textarea
                    value={edu.description}
                    onChange={(e) => updateEducation(edu.id, { description: e.target.value })}
                    placeholder="Achievements, GPA, relevant coursework..."
                    rows={3}
                  />
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      ))}
      <Button variant="outline" className="w-full bg-transparent" onClick={() => addEducation()}>
        <Plus className="mr-2 h-4 w-4" />
        Add Education
      </Button>
    </div>
  )
}
