"use client"

import { Plus, Trash2, ChevronDown, ChevronUp, Eye, EyeOff } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { useCVStore } from "@/store/cv-store"
import { RichTextEditor } from "./rich-text-editor"

export function ProjectsForm() {
  const { cv, addProject, updateProject, removeProject } = useCVStore()
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
      {cv.projects.map((project) => (
        <Card key={project.id} className="overflow-hidden">
          <div
            className="flex cursor-pointer items-center justify-between p-4"
            onClick={() => toggleExpanded(project.id)}
          >
            <div className="flex-1 truncate">
              <p className="font-medium">{project.name || "New Project"}</p>
              <p className="text-sm text-muted-foreground">{project.role || "Add role"}</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={(e) => {
                  e.stopPropagation()
                  updateProject(project.id, { visible: !project.visible })
                }}
              >
                {project.visible ? <Eye className="h-4 w-4" /> : <EyeOff className="h-4 w-4 text-muted-foreground" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8 text-destructive"
                onClick={(e) => {
                  e.stopPropagation()
                  removeProject(project.id)
                }}
              >
                <Trash2 className="h-4 w-4" />
              </Button>
              {expandedIds.has(project.id) ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </div>
          </div>
          {expandedIds.has(project.id) && (
            <CardContent className="border-t pt-4">
              <div className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Project Name</Label>
                    <Input
                      value={project.name}
                      onChange={(e) => updateProject(project.id, { name: e.target.value })}
                      placeholder="Project name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Role</Label>
                    <Input
                      value={project.role}
                      onChange={(e) => updateProject(project.id, { role: e.target.value })}
                      placeholder="Your role"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Start Date</Label>
                    <Input
                      value={project.startDate}
                      onChange={(e) => updateProject(project.id, { startDate: e.target.value })}
                      placeholder="2022"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>End Date</Label>
                    <Input
                      value={project.endDate}
                      onChange={(e) => updateProject(project.id, { endDate: e.target.value })}
                      placeholder="Present"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label>Link (optional)</Label>
                  <Input
                    value={project.link || ""}
                    onChange={(e) => updateProject(project.id, { link: e.target.value })}
                    placeholder="https://github.com/..."
                  />
                </div>
                <div className="space-y-2">
                  <Label>Description</Label>
                  <RichTextEditor
                    content={project.description}
                    onChange={(content) => updateProject(project.id, { description: content })}
                    placeholder="Describe the project and your contributions..."
                  />
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      ))}
      <Button variant="outline" className="w-full bg-transparent" onClick={() => addProject()}>
        <Plus className="mr-2 h-4 w-4" />
        Add Project
      </Button>
    </div>
  )
}
