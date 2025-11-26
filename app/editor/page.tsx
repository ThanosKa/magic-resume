"use client"

import { useRef } from "react"
import { useCVStore } from "@/store/cv-store"
import { CVPreview } from "@/components/editor/cv-preview"
import { EditorHeader } from "@/components/editor/editor-header"
import { SectionTabs } from "@/components/editor/section-tabs"
import { PersonalInfoForm } from "@/components/editor/personal-info-form"
import { ExperienceForm } from "@/components/editor/experience-form"
import { EducationForm } from "@/components/editor/education-form"
import { ProjectsForm } from "@/components/editor/projects-form"
import { SkillsForm } from "@/components/editor/skills-form"

export default function EditorPage() {
  const { cv, activeSection } = useCVStore()
  const previewRef = useRef<HTMLDivElement>(null)

  const renderForm = () => {
    switch (activeSection) {
      case null:
        return <PersonalInfoForm />
      case "experience":
        return <ExperienceForm />
      case "education":
        return <EducationForm />
      case "projects":
        return <ProjectsForm />
      case "skills":
        return <SkillsForm />
      default:
        return <PersonalInfoForm />
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <EditorHeader />

      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Editor Panel */}
        <div className="w-full border-r border-border bg-muted/30 lg:w-[400px] xl:w-[450px] print:hidden">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto p-4">
            <SectionTabs />
            <div className="mt-4">{renderForm()}</div>
          </div>
        </div>

        {/* Preview Panel */}
        <div className="flex-1 bg-muted/50 p-4 lg:p-8 print:bg-transparent print:p-0">
          <div className="cv-preview-container mx-auto max-w-4xl print:max-w-none">
            <CVPreview ref={previewRef} cv={cv} />
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .cv-preview-container,
          .cv-preview-container * {
            visibility: visible;
          }
          .cv-preview-container {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
        .cv-content ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-top: 0.25rem;
        }
        .cv-content li {
          margin-bottom: 0.25rem;
        }
      `}</style>
    </div>
  )
}
