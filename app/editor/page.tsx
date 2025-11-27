'use client';

import { useRef } from 'react';
import { useCVStore } from '@/store/cv-store';
import { CVPreview } from '@/components/editor/cv-preview';
import { EditorHeader } from '@/components/editor/editor-header';
import { SectionTabs } from '@/components/editor/section-tabs';
import { PersonalInfoForm } from '@/components/editor/personal-info-form';
import { SummaryForm } from '@/components/editor/summary-form';
import { ExperienceForm } from '@/components/editor/experience-form';
import { EducationForm } from '@/components/editor/education-form';
import { ProjectsForm } from '@/components/editor/projects-form';
import { SkillsForm } from '@/components/editor/skills-form';

export default function EditorPage() {
  const { cv, activeSection } = useCVStore();
  const previewRef = useRef<HTMLDivElement | null>(null);

  const renderForm = () => {
    switch (activeSection) {
      case null:
        return <PersonalInfoForm />;
      case 'summary':
        return <SummaryForm />;
      case 'experience':
        return <ExperienceForm />;
      case 'education':
        return <EducationForm />;
      case 'projects':
        return <ProjectsForm />;
      case 'skills':
        return <SkillsForm />;
      default:
        return <PersonalInfoForm />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <EditorHeader previewRef={previewRef} cv={cv} />
      <div className="flex flex-1 flex-col lg:flex-row">
        <div className="w-full border-r border-border bg-muted/30 lg:w-[400px] xl:w-[450px] print:hidden">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto p-4">
            <SectionTabs />
            <div className="mt-4">{renderForm()}</div>
          </div>
        </div>

        <div className="flex-1 bg-muted/50 p-4 lg:p-8 print:bg-transparent print:p-0">
          <div className="cv-preview-container mx-auto max-w-4xl print:max-w-none">
            <CVPreview ref={previewRef} cv={cv} />
          </div>
        </div>
      </div>

      <style>{`
        @page {
          size: A4;
          margin: 16mm;
        }
        #cv-preview {
          box-shadow: none;
        }
        .cv-content ul {
          list-style-type: disc;
          padding-left: 1.5rem;
          margin-top: 0.25rem;
        }
        .cv-content li {
          margin-bottom: 0.25rem;
        }
        @media print {
          * {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          body {
            background: white;
          }
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
          .cv-section {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          a {
            color: #2563eb;
            text-decoration: underline;
          }
        }
      `}</style>
    </div>
  );
}
