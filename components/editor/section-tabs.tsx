'use client';

import { Reorder, AnimatePresence, useDragControls } from 'framer-motion';
import {
  User,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Wrench,
  FileText,
  RotateCcw,
  GripVertical,
  Eye,
  EyeOff,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCVStore } from '@/store/cv-store';
import { Button } from '@/components/ui/button';
import type { Section } from '@/types/cv';

const typeIcons = {
  summary: FileText,
  experience: Briefcase,
  education: GraduationCap,
  projects: FolderKanban,
  skills: Wrench,
};

export function SectionTabs() {
  const { cv, activeSection, setActiveSection, reorderSections, resetSectionsOrder, toggleSection } = useCVStore();

  return (
    <div className="flex flex-col gap-3 border-b border-border pb-4">
      <div className="space-y-1">
        <button
          onClick={() => setActiveSection(null)}
          className={cn(
            'flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors',
            activeSection === null
              ? 'bg-primary text-primary-foreground shadow-sm'
              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
          )}
        >
          <div className="flex w-4 items-center justify-center">
            <User className="h-4 w-4" />
          </div>
          <span className="flex-1 text-left">Personal Information</span>
        </button>

        <Reorder.Group
          axis="y"
          values={cv.sections}
          onReorder={reorderSections}
          className="space-y-1"
        >
          <AnimatePresence initial={false}>
            {cv.sections.map((section) => (
              <SectionTabItem
                key={section.id}
                section={section}
                isActive={activeSection === section.type}
                onSelect={() => setActiveSection(section.type)}
                onToggle={() => toggleSection(section.id)}
              />
            ))}
          </AnimatePresence>
        </Reorder.Group>
      </div>

      <div className="flex items-center justify-between px-1">
        <p className="text-[10px] text-muted-foreground">
          Drag handles to reorder sections
        </p>
        <Button
          variant="ghost"
          size="sm"
          onClick={resetSectionsOrder}
          className="h-6 gap-1 px-2 text-[10px] text-muted-foreground hover:text-foreground"
        >
          <RotateCcw className="h-3 w-3" />
          Reset Order
        </Button>
      </div>
    </div>
  );
}

interface SectionTabItemProps {
  section: Section;
  isActive: boolean;
  onSelect: () => void;
  onToggle: () => void;
}

function SectionTabItem({ section, isActive, onSelect, onToggle }: SectionTabItemProps) {
  const dragControls = useDragControls();
  const Icon = typeIcons[section.type as keyof typeof typeIcons] || FileText;

  return (
    <Reorder.Item
      value={section}
      dragListener={false}
      dragControls={dragControls}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      whileDrag={{ 
        scale: 1.02, 
        zIndex: 50,
        boxShadow: "0px 5px 15px rgba(0,0,0,0.08)" 
      }}
      layout
      className="relative"
    >
      <div
        className={cn(
          'group flex items-center gap-1 rounded-md border border-transparent transition-all',
          isActive 
            ? 'bg-primary text-primary-foreground shadow-sm' 
            : 'text-muted-foreground hover:bg-muted hover:text-foreground',
          !section.enabled && 'opacity-60'
        )}
      >
        <div
          onPointerDown={(e) => dragControls.start(e)}
          className="cursor-grab px-1 py-2 active:cursor-grabbing opacity-40 group-hover:opacity-100 transition-opacity"
        >
          <GripVertical className="h-4 w-4" />
        </div>

        <button
          onClick={onSelect}
          className="flex flex-1 items-center gap-2 py-2 text-sm font-medium outline-none"
        >
          <Icon className="h-4 w-4 shrink-0" />
          <span className="truncate">{section.title}</span>
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggle();
          }}
          className={cn(
            'mr-1 rounded-sm p-1 transition-colors hover:bg-black/10 dark:hover:bg-white/10',
            !section.enabled && 'text-muted-foreground'
          )}
          title={section.enabled ? 'Hide section' : 'Show section'}
        >
          {section.enabled ? (
            <Eye className="h-3.5 w-3.5" />
          ) : (
            <EyeOff className="h-3.5 w-3.5" />
          )}
        </button>
      </div>
    </Reorder.Item>
  );
}
