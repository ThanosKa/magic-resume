"use client";

import { forwardRef } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Globe,
  Link,
  ExternalLink,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import type { CVData } from "@/types/cv";
import { cn } from "@/lib/utils";

interface CVPreviewProps {
  cv: CVData;
}

const platformIcons = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  portfolio: Globe,
  other: Link,
};

const platformLabels: Record<keyof typeof platformIcons, string> = {
  linkedin: "LinkedIn",
  github: "GitHub",
  twitter: "Twitter",
  portfolio: "Portfolio",
  other: "Link",
};

export const CVPreview = forwardRef<HTMLDivElement, CVPreviewProps>(
  ({ cv }, ref) => {
    const { personalInfo, summary, education, experience, projects, skills, sections } =
      cv;

    const visibleExperience = experience.filter((item) => item.visible);
    const visibleEducation = education.filter((item) => item.visible);
    const visibleProjects = projects.filter((item) => item.visible);
    const hasSummaryContent =
      !!summary &&
      summary.trim().length > 0;
    const hasSkillsContent =
      !!skills &&
      skills
        .replace(/<[^\u003e]*\u003e/g, "")
        .replace(/&nbsp;/g, " ")
        .trim().length > 0;

    const enabledSections = sections
      .filter((s) => s.enabled)
      .sort((a, b) => a.order - b.order);

    const alignmentClass = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    }[personalInfo.headerAlign || "center"];

    const contactJustify = {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
    }[personalInfo.headerAlign || "center"];

    const renderSection = (section: (typeof sections)[0]) => {
      switch (section.type) {
        case "experience":
          if (visibleExperience.length === 0) return null;

          return (
            <div key={section.id} className="mb-5">
              <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-black">
                {section.title}
              </h2>
              <Separator className="mb-4 h-[0.5px] w-full" />
              <div className="space-y-4">
                {visibleExperience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-black">
                          {exp.company || "Company Name"}
                        </h3>
                        <p className="text-sm font-medium text-black">
                          {exp.position || "Position"}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-black">
                        {exp.startDate}
                        {exp.startDate && exp.endDate && " - "}
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
          );

        case "education":
          if (visibleEducation.length === 0) return null;

          return (
            <div key={section.id} className="mb-5">
              <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-black">
                {section.title}
              </h2>
              <Separator className="mb-4 h-[0.5px] w-full" />
              <div className="space-y-4">
                {visibleEducation.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="font-bold text-black">
                          {edu.institution || "Institution Name"}
                        </h3>
                        <p className="text-sm font-medium text-black">
                          {edu.degree}
                          {edu.degree && edu.field && " in "}
                          {edu.field}
                        </p>
                      </div>
                      <span className="text-sm font-medium text-black">
                        {edu.startDate}
                        {edu.startDate && edu.endDate && " - "}
                        {edu.endDate}
                      </span>
                    </div>
                    {edu.description && (
                      <div
                        className="cv-content mt-1 text-sm text-black"
                        dangerouslySetInnerHTML={{ __html: edu.description }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          );

        case "projects":
          if (visibleProjects.length === 0) return null;

          return (
            <div key={section.id} className="mb-5">
              <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-black">
                {section.title}
              </h2>
              <Separator className="mb-4 h-[0.5px] w-full" />
              <div className="space-y-4">
                {visibleProjects.map((project) => (
                  <div key={project.id}>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-black">
                          {project.name || "Project Name"}
                        </h3>
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
                        {project.startDate && project.endDate && " - "}
                        {project.endDate}
                      </span>
                    </div>
                    {project.role && (
                      <p className="text-sm font-medium text-black">
                        {project.role}
                      </p>
                    )}
                    {project.description && (
                      <div
                        className="cv-content mt-1 text-sm text-black"
                        dangerouslySetInnerHTML={{ __html: project.description }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          );

        case "skills":
          if (!hasSkillsContent) return null;

          return (
            <div key={section.id} className="mb-5">
              <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-black">
                {section.title}
              </h2>
              <Separator className="mb-4 h-[0.5px] w-full" />
              <div className="space-y-4">
                {skills && (
                  <div
                    className="cv-content text-sm text-black"
                    dangerouslySetInnerHTML={{ __html: skills }}
                  />
                )}
              </div>
            </div>
          );

        case "summary":
          if (!hasSummaryContent) return null;

          return (
            <div key={section.id} className="mb-5">
              <h2 className="mb-2 text-sm font-bold uppercase tracking-wide text-black">
                {section.title}
              </h2>
              <Separator className="mb-4 h-[0.5px] w-full" />
              <div className="space-y-4">
                <p className="text-sm italic text-black">{summary}</p>
              </div>
            </div>
          );

        default:
          return null;
      }
    };

    return (
      <div
        ref={ref}
        className="mx-auto aspect-[1/1.414] w-full max-w-[210mm] origin-top bg-white text-black shadow-lg"
        style={{
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <div className="p-8">
          {/* Header - with Framer Motion alignment support */}
          <motion.div layout="position" className={cn("mb-6", alignmentClass)}>
            <motion.h1
              layout="position"
              className="text-2xl font-bold text-black"
            >
              {personalInfo.name || "Your Name"}
            </motion.h1>
            {personalInfo.title && (
              <motion.p
                layout="position"
                className="mt-1 text-lg font-medium text-black"
              >
                {personalInfo.title}
              </motion.p>
            )}

            {/* Contact info - Split layout for left/right alignment */}
            {personalInfo.headerAlign === "center" ? (
              <>
                {/* Center alignment - single row */}
                <motion.div
                  layout="position"
                  className={cn(
                    "mt-3 flex flex-wrap items-center gap-4 text-sm text-black",
                    contactJustify
                  )}
                >
                  {personalInfo.email && (
                    <motion.span
                      key="email"
                      layoutId="email"
                      layout="position"
                      className="flex items-center gap-1"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      {personalInfo.email}
                    </motion.span>
                  )}
                  {personalInfo.phone && (
                    <motion.span
                      key="phone"
                      layoutId="phone"
                      layout="position"
                      className="flex items-center gap-1"
                    >
                      <Phone className="h-3.5 w-3.5" />
                      {personalInfo.phone}
                    </motion.span>
                  )}
                  {personalInfo.location && (
                    <motion.span
                      key="location"
                      layoutId="location"
                      layout="position"
                      className="flex items-center gap-1"
                    >
                      <MapPin className="h-3.5 w-3.5" />
                      {personalInfo.location}
                    </motion.span>
                  )}
                </motion.div>

                {/* Social Links - Center alignment */}
                {personalInfo.socialLinks &&
                  personalInfo.socialLinks.length > 0 && (
                    <motion.div
                      layout="position"
                      className={cn(
                        "mt-3 flex flex-wrap items-center gap-2 text-sm text-black",
                        contactJustify
                      )}
                    >
                      {personalInfo.socialLinks.map((link) => {
                        const Icon = platformIcons[link.platform];
                        const label = platformLabels[link.platform];
                        return (
                          <motion.a
                            key={link.id}
                            layoutId={`social-${link.id}`}
                            layout="position"
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${label} profile`}
                            className="flex items-center gap-1 text-black"
                          >
                            <Icon className="h-3.5 w-3.5" />
                            <span className="text-xs font-medium">{label}</span>
                          </motion.a>
                        );
                      })}
                    </motion.div>
                  )}
              </>
            ) : (
              /* Left/Right alignment - split layout */
              <motion.div
                layout="position"
                className="mt-3 flex justify-between items-start text-sm text-black"
              >
                {/* Left column */}
                <div className="flex flex-col gap-2">
                  {personalInfo.headerAlign === "left" ? (
                    <>
                      {/* Left alignment: Email and Phone on left */}
                      {personalInfo.email && (
                        <motion.span
                          key="email"
                          layoutId="email"
                          layout="position"
                          className="flex items-center gap-1"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          {personalInfo.email}
                        </motion.span>
                      )}
                      {personalInfo.phone && (
                        <motion.span
                          key="phone"
                          layoutId="phone"
                          layout="position"
                          className="flex items-center gap-1"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          {personalInfo.phone}
                        </motion.span>
                      )}
                    </>
                  ) : (
                    <>
                      {/* Right alignment: Location and Social Links on left */}
                      {personalInfo.location && (
                        <motion.span
                          key="location"
                          layoutId="location"
                          layout="position"
                          className="flex items-center gap-1"
                        >
                          <MapPin className="h-3.5 w-3.5" />
                          {personalInfo.location}
                        </motion.span>
                      )}
                      {/* Social Links in left column for right alignment */}
                      {personalInfo.socialLinks &&
                        personalInfo.socialLinks.length > 0 && (
                          <div className="flex flex-wrap items-center gap-2">
                            {personalInfo.socialLinks.map((link) => {
                              const Icon = platformIcons[link.platform];
                              const label = platformLabels[link.platform];
                              return (
                                <motion.a
                                  key={link.id}
                                  layoutId={`social-${link.id}`}
                                  layout="position"
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${label} profile`}
                                  className="flex items-center gap-1 text-black"
                                >
                                  <Icon className="h-3.5 w-3.5" />
                                  <span className="text-xs font-medium">
                                    {label}
                                  </span>
                                </motion.a>
                              );
                            })}
                          </div>
                        )}
                    </>
                  )}
                </div>

                {/* Right column */}
                <div className="flex flex-col gap-2">
                  {personalInfo.headerAlign === "left" ? (
                    <>
                      {/* Left alignment: Location and Social Links on right */}
                      {personalInfo.location && (
                        <motion.span
                          key="location"
                          layoutId="location"
                          layout="position"
                          className="flex items-center gap-1"
                        >
                          <MapPin className="h-3.5 w-3.5" />
                          {personalInfo.location}
                        </motion.span>
                      )}
                      {/* Social Links in right column for left alignment */}
                      {personalInfo.socialLinks &&
                        personalInfo.socialLinks.length > 0 && (
                          <div className="flex flex-wrap items-center gap-2">
                            {personalInfo.socialLinks.map((link) => {
                              const Icon = platformIcons[link.platform];
                              const label = platformLabels[link.platform];
                              return (
                                <motion.a
                                  key={link.id}
                                  layoutId={`social-${link.id}`}
                                  layout="position"
                                  href={link.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  aria-label={`${label} profile`}
                                  className="flex items-center gap-1 text-black"
                                >
                                  <Icon className="h-3.5 w-3.5" />
                                  <span className="text-xs font-medium">
                                    {label}
                                  </span>
                                </motion.a>
                              );
                            })}
                          </div>
                        )}
                    </>
                  ) : (
                    <>
                      {/* Right alignment: Email and Phone on right */}
                      {personalInfo.email && (
                        <motion.span
                          key="email"
                          layoutId="email"
                          layout="position"
                          className="flex items-center gap-1"
                        >
                          <Mail className="h-3.5 w-3.5" />
                          {personalInfo.email}
                        </motion.span>
                      )}
                      {personalInfo.phone && (
                        <motion.span
                          key="phone"
                          layoutId="phone"
                          layout="position"
                          className="flex items-center gap-1"
                        >
                          <Phone className="h-3.5 w-3.5" />
                          {personalInfo.phone}
                        </motion.span>
                      )}
                    </>
                  )}
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Sections */}
          {enabledSections.map(renderSection)}
        </div>
      </div>
    );
  }
);

CVPreview.displayName = "CVPreview";
