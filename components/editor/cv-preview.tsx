"use client"

import { forwardRef } from "react"
import { Mail, Phone, MapPin, Linkedin, Github, Twitter, Globe, Link, ExternalLink } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import type { CVData } from "@/types/cv"
import { cn } from "@/lib/utils"

interface CVPreviewProps {
  cv: CVData
}

const platformIcons = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  portfolio: Globe,
  other: Link,
}

export const CVPreview = forwardRef<HTMLDivElement, CVPreviewProps>(({ cv }, ref) => {
  const { personalInfo, education, experience, projects, skills, sections } = cv

  const enabledSections = sections.filter((s) => s.enabled).sort((a, b) => a.order - b.order)

  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }[personalInfo.headerAlign || "center"]

  const contactJustify = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }[personalInfo.headerAlign || "center"]

  const renderSection = (section: (typeof sections)[0]) => {
    switch (section.type) {
      case "experience":
        return (
          <div key={section.id} className="mb-5">
            <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-black">{section.title}</h2>
            <Separator className="mb-3 bg-black" />
            <div className="space-y-4">
              {experience
                .filter((e) => e.visible)
                .map((exp) => (
                  <div key={exp.id}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-black">{exp.company || "Company Name"}</h3>
                        <p className="text-sm font-medium text-black">{exp.position || "Position"}</p>
                      </div>
                      <span className="text-sm font-medium text-black">
                        {exp.startDate}
                        {exp.startDate && exp.endDate && " – "}
                        {exp.endDate}
                      </span>
                    </div>
                    {exp.description && (
                      <div
                        className="cv-content mt-2 text-sm text-black"
                        dangerouslySetInnerHTML={{ __html: exp.description }}
                      />
                    )}
                  </div>
                ))}
            </div>
          </div>
        )

      case "education":
        return (
          <div key={section.id} className="mb-5">
            <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-black">{section.title}</h2>
            <Separator className="mb-3 bg-black" />
            <div className="space-y-4">
              {education
                .filter((e) => e.visible)
                .map((edu) => (
                  <div key={edu.id}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-black">{edu.institution || "Institution Name"}</h3>
                        <p className="text-sm font-medium text-black">
                          {edu.degree}
                          {edu.degree && edu.field && " in "}
                          {edu.field}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-black">
                        {edu.startDate}
                        {edu.startDate && edu.endDate && " – "}
                        {edu.endDate}
                      </span>
                    </div>
                    {edu.description && <p className="mt-1 text-sm text-black">{edu.description}</p>}
                  </div>
                ))}
            </div>
          </div>
        )

      case "projects":
        return (
          <div key={section.id} className="mb-5">
            <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-black">{section.title}</h2>
            <Separator className="mb-3 bg-black" />
            <div className="space-y-4">
              {projects
                .filter((p) => p.visible)
                .map((project) => (
                  <div key={project.id}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-black">{project.name || "Project Name"}</h3>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-black hover:text-gray-600"
                          >
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        )}
                      </div>
                      <span className="text-sm font-medium text-black">
                        {project.startDate}
                        {project.startDate && project.endDate && " – "}
                        {project.endDate}
                      </span>
                    </div>
                    {project.role && <p className="text-sm font-medium text-black">{project.role}</p>}
                    {project.description && <p className="mt-1 text-sm text-black">{project.description}</p>}
                  </div>
                ))}
            </div>
          </div>
        )

      case "skills":
        return (
          <div key={section.id} className="mb-5">
            <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-black">{section.title}</h2>
            <Separator className="mb-3 bg-black" />
            {skills && <div className="cv-content text-sm text-black" dangerouslySetInnerHTML={{ __html: skills }} />}
          </div>
        )

      default:
        return null
    }
  }

  return (
    <div
      ref={ref}
      className="mx-auto aspect-[1/1.414] w-full max-w-[210mm] origin-top bg-white text-black shadow-lg"
      style={{
        fontFamily: "system-ui, -apple-system, sans-serif",
      }}
    >
      <div className="p-8">
        {/* Header - with alignment support */}
        <div className={cn("mb-6", alignmentClass)}>
          <h1 className="text-2xl font-bold text-black">{personalInfo.name || "Your Name"}</h1>
          {personalInfo.title && <p className="mt-1 text-lg font-medium text-black">{personalInfo.title}</p>}

          {/* Contact info */}
          <div className={cn("mt-3 flex flex-wrap items-center gap-4 text-sm text-black", contactJustify)}>
            {personalInfo.email && (
              <span className="flex items-center gap-1">
                <Mail className="h-3.5 w-3.5" />
                {personalInfo.email}
              </span>
            )}
            {personalInfo.phone && (
              <span className="flex items-center gap-1">
                <Phone className="h-3.5 w-3.5" />
                {personalInfo.phone}
              </span>
            )}
            {personalInfo.location && (
              <span className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {personalInfo.location}
              </span>
            )}
          </div>

          {/* Social Links */}
          {personalInfo.socialLinks && personalInfo.socialLinks.length > 0 && (
            <div className={cn("mt-2 flex flex-wrap items-center gap-3 text-sm text-black", contactJustify)}>
              {personalInfo.socialLinks.map((link) => {
                const Icon = platformIcons[link.platform]
                // Extract display text from URL
                const displayText = link.url
                  .replace(/^https?:\/\//, "")
                  .replace(/^www\./, "")
                  .replace(/\/$/, "")
                return (
                  <a
                    key={link.id}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:underline"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {displayText}
                  </a>
                )
              })}
            </div>
          )}
        </div>

        {/* Sections */}
        {enabledSections.map(renderSection)}
      </div>
    </div>
  )
})

CVPreview.displayName = "CVPreview"
