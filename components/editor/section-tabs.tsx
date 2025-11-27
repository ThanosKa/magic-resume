'use client';

import {
  User,
  Briefcase,
  GraduationCap,
  FolderKanban,
  Wrench,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { useCVStore } from '@/store/cv-store';

const sections = [
  { type: 'personal' as const, label: 'Personal', icon: User },
  { type: 'experience' as const, label: 'Experience', icon: Briefcase },
  { type: 'education' as const, label: 'Education', icon: GraduationCap },
  { type: 'projects' as const, label: 'Projects', icon: FolderKanban },
  { type: 'skills' as const, label: 'Skills', icon: Wrench },
];

export function SectionTabs() {
  const { activeSection, setActiveSection } = useCVStore();

  return (
    <div className="flex flex-wrap gap-1 border-b border-border pb-4">
      {sections.map(({ type, label, icon: Icon }) => (
        <button
          key={type}
          onClick={() => setActiveSection(type === 'personal' ? null : type)}
          className={cn(
            'flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors',
            (type === 'personal' && activeSection === null) ||
              activeSection === type
              ? 'bg-primary text-primary-foreground'
              : 'text-muted-foreground hover:bg-muted hover:text-foreground'
          )}
        >
          <Icon className="h-4 w-4" />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  );
}
