'use client';

import { useEffect, useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { AlignSelector } from '@/components/editor/align-selector';
import { useCVStore } from '@/store/cv-store';
import {
  Plus,
  Trash2,
  Linkedin,
  Github,
  Twitter,
  Globe,
  Link,
  Sparkles,
} from 'lucide-react';
import { AiPolishDialog } from './ai-polish-dialog';

const platformIcons = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  portfolio: Globe,
  other: Link,
};

const platformLabels = {
  linkedin: 'LinkedIn',
  github: 'GitHub',
  twitter: 'Twitter',
  portfolio: 'Portfolio',
  other: 'Other',
};

export function PersonalInfoForm() {
  const {
    cv,
    updatePersonalInfo,
    updateSummary,
    clearSummary,
    addSocialLink,
    updateSocialLink,
    removeSocialLink,
  } = useCVStore();
  const { personalInfo } = cv;
  const [showSummaryPolish, setShowSummaryPolish] = useState(false);

  const socialLinks = personalInfo.socialLinks ?? [];
  const socialItemRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const previousSocialCount = useRef(socialLinks.length);

  useEffect(() => {
    const addedLink =
      socialLinks.length > previousSocialCount.current
        ? socialLinks[socialLinks.length - 1]
        : null;

    if (addedLink) {
      const target = socialItemRefs.current[addedLink.id];
      requestAnimationFrame(() => {
        target?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        const firstInput = target?.querySelector('input');
        if (firstInput instanceof HTMLElement) {
          firstInput.focus({ preventScroll: true });
        }
      });
    }

    previousSocialCount.current = socialLinks.length;
  }, [socialLinks]);

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label className="text-sm font-medium">Header Alignment</Label>
        <AlignSelector
          value={personalInfo.headerAlign ?? 'center'}
          onChange={(value) => updatePersonalInfo({ headerAlign: value })}
        />
      </div>

      <Separator />

      <div className="space-y-4">
        <Label className="text-sm font-medium">Basic Information</Label>
        <div className="space-y-3">
          <div className="space-y-2">
            <Label className="text-muted-foreground">Full Name</Label>
            <Input
              value={personalInfo.name}
              onChange={(e) => updatePersonalInfo({ name: e.target.value })}
              placeholder="Full Name"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-muted-foreground">Professional Title</Label>
            <Input
              value={personalInfo.title}
              onChange={(e) => updatePersonalInfo({ title: e.target.value })}
              placeholder="Professional Title"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-muted-foreground">Email</Label>
            <Input
              type="email"
              value={personalInfo.email}
              onChange={(e) => updatePersonalInfo({ email: e.target.value })}
              placeholder="Email"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-muted-foreground">Phone</Label>
            <Input
              value={personalInfo.phone}
              onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
              placeholder="Phone"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-muted-foreground">Location</Label>
            <Input
              value={personalInfo.location}
              onChange={(e) => updatePersonalInfo({ location: e.target.value })}
              placeholder="Location"
            />
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Professional Summary</Label>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-xs"
              onClick={() => setShowSummaryPolish(true)}
              disabled={!cv.summary}
            >
              <Sparkles className="mr-1 h-3 w-3" />
              AI Polish
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-destructive"
              onClick={() => clearSummary()}
              disabled={!cv.summary}
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="space-y-2">
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
      </div>

      <Separator />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Social Links</Label>
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => addSocialLink()}
          >
            <Plus className="mr-1 h-4 w-4" />
            Add
          </Button>
        </div>

        <div className="space-y-3">
          {socialLinks.map((link) => {
            const Icon = platformIcons[link.platform];
            return (
              <div
                key={link.id}
                ref={(node) => {
                  socialItemRefs.current[link.id] = node;
                }}
                className="flex items-center gap-2"
              >
                <Select
                  value={link.platform}
                  onValueChange={(value) =>
                    updateSocialLink(link.id, {
                      platform: value as typeof link.platform,
                    })
                  }
                >
                  <SelectTrigger className="w-[130px]">
                    <SelectValue>
                      <span className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        {platformLabels[link.platform]}
                      </span>
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {Object.entries(platformLabels).map(([key, label]) => {
                      const PlatformIcon =
                        platformIcons[key as keyof typeof platformIcons];
                      return (
                        <SelectItem key={key} value={key}>
                          <span className="flex items-center gap-2">
                            <PlatformIcon className="h-4 w-4" />
                            {label}
                          </span>
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <Input
                  className="flex-1"
                  value={link.url}
                  onChange={(e) =>
                    updateSocialLink(link.id, { url: e.target.value })
                  }
                  placeholder="https://..."
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  onClick={() => removeSocialLink(link.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            );
          })}

          {socialLinks.length === 0 && (
            <p className="text-sm text-muted-foreground">
              No social links added yet.
            </p>
          )}
        </div>
      </div>

      <AiPolishDialog
        open={showSummaryPolish}
        onOpenChange={setShowSummaryPolish}
        originalContent={cv.summary}
        onApply={updateSummary}
        polishType="summary"
      />
    </div>
  );
}
