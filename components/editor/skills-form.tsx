'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { useCVStore } from '@/store/cv-store';
import { RichTextEditor } from './rich-text-editor';

export function SkillsForm() {
  const { cv, updateSkills } = useCVStore();
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="space-y-4">
      <Card className="overflow-hidden">
        <div
        className="flex cursor-pointer items-center justify-between p-4"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <div className="flex-1 truncate">
          <p className="font-medium">Technical Skills</p>
          <p className="text-sm text-muted-foreground">
            List your skills with bullets and emphasis.
          </p>
        </div>
          <div className="flex items-center gap-2">
            {expanded ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </div>
        </div>

        {expanded && (
          <CardContent className="border-t pt-4">
            <div className="space-y-2">
              <Label>Technical Skills</Label>
              <RichTextEditor
                content={cv.skills}
                onChange={updateSkills}
                placeholder="List your technical skills..."
              />
              <p className="text-xs text-muted-foreground">
                Use the toolbar to format your skills with bullets and bold
                text.
              </p>
            </div>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
