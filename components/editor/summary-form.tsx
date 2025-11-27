'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useCVStore } from '@/store/cv-store';
import { AiPolishDialog } from './ai-polish-dialog';

export function SummaryForm() {
  const { cv, updateSummary } = useCVStore();
  const [showPolish, setShowPolish] = useState(false);
  const [expanded, setExpanded] = useState(true);

  return (
    <div className="space-y-4">
      <Card className="overflow-hidden">
        <div
          className="flex cursor-pointer items-center justify-between p-4"
          onClick={() => setExpanded((prev) => !prev)}
        >
          <div className="flex-1 truncate">
            <p className="font-medium">Professional Summary</p>
            <p className="text-sm text-muted-foreground">
              A brief overview highlighting your expertise and value
              proposition.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-xs"
              onClick={(e) => {
                e.stopPropagation();
                setShowPolish(true);
              }}
              disabled={!cv.summary}
            >
              <Sparkles className="mr-1 h-3 w-3" />
              AI Polish
            </Button>
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
              <Label>Summary</Label>
              <Textarea
                value={cv.summary}
                onChange={(e) => updateSummary(e.target.value)}
                placeholder="Write a brief professional summary highlighting your expertise, experience, and unique value..."
                className="min-h-[100px] resize-y"
              />
              <p className="text-xs text-muted-foreground">
                2-3 sentences that capture your professional identity and key
                achievements.
              </p>
            </div>
          </CardContent>
        )}
      </Card>

      <AiPolishDialog
        open={showPolish}
        onOpenChange={setShowPolish}
        originalContent={cv.summary}
        onApply={updateSummary}
        polishType="summary"
      />
    </div>
  );
}
