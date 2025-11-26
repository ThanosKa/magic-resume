"use client"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCVStore } from "@/store/cv-store"
import { AlignLeft, AlignCenter, AlignRight, Plus, Trash2, Linkedin, Github, Twitter, Globe, Link } from "lucide-react"
import { cn } from "@/lib/utils"

const platformIcons = {
  linkedin: Linkedin,
  github: Github,
  twitter: Twitter,
  portfolio: Globe,
  other: Link,
}

const platformLabels = {
  linkedin: "LinkedIn",
  github: "GitHub",
  twitter: "Twitter",
  portfolio: "Portfolio",
  other: "Other",
}

export function PersonalInfoForm() {
  const { cv, updatePersonalInfo, addSocialLink, updateSocialLink, removeSocialLink } = useCVStore()
  const { personalInfo } = cv

  const socialLinks = personalInfo.socialLinks ?? []

  return (
    <div className="space-y-6">
      {/* Align Section */}
      <div className="space-y-3">
        <Label className="text-sm font-medium">Header Alignment</Label>
        <div className="flex gap-2">
          {(["left", "center", "right"] as const).map((align) => {
            const Icon = align === "left" ? AlignLeft : align === "center" ? AlignCenter : AlignRight
            return (
              <button
                key={align}
                type="button"
                onClick={() => updatePersonalInfo({ headerAlign: align })}
                className={cn(
                  "flex h-12 w-16 items-center justify-center rounded-lg border-2 transition-colors",
                  (personalInfo.headerAlign ?? "left") === align
                    ? "border-primary bg-primary/10"
                    : "border-border hover:border-primary/50",
                )}
              >
                <Icon className="h-5 w-5" />
              </button>
            )
          })}
        </div>
      </div>

      <Separator />

      {/* Basic Info */}
      <div className="space-y-4">
        <Label className="text-sm font-medium">Basic Information</Label>
        <div className="space-y-3">
          <Input
            value={personalInfo.name}
            onChange={(e) => updatePersonalInfo({ name: e.target.value })}
            placeholder="Full Name"
          />
          <Input
            value={personalInfo.title}
            onChange={(e) => updatePersonalInfo({ title: e.target.value })}
            placeholder="Professional Title"
          />
          <Input
            type="email"
            value={personalInfo.email}
            onChange={(e) => updatePersonalInfo({ email: e.target.value })}
            placeholder="Email"
          />
          <Input
            value={personalInfo.phone}
            onChange={(e) => updatePersonalInfo({ phone: e.target.value })}
            placeholder="Phone"
          />
          <Input
            value={personalInfo.location}
            onChange={(e) => updatePersonalInfo({ location: e.target.value })}
            placeholder="Location"
          />
        </div>
      </div>

      <Separator />

      {/* Social Links */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <Label className="text-sm font-medium">Social Links</Label>
          <Button type="button" variant="outline" size="sm" onClick={() => addSocialLink()}>
            <Plus className="mr-1 h-4 w-4" />
            Add
          </Button>
        </div>

        <div className="space-y-3">
          {socialLinks.map((link) => {
            const Icon = platformIcons[link.platform]
            return (
              <div key={link.id} className="flex items-center gap-2">
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
                      const PlatformIcon = platformIcons[key as keyof typeof platformIcons]
                      return (
                        <SelectItem key={key} value={key}>
                          <span className="flex items-center gap-2">
                            <PlatformIcon className="h-4 w-4" />
                            {label}
                          </span>
                        </SelectItem>
                      )
                    })}
                  </SelectContent>
                </Select>
                <Input
                  className="flex-1"
                  value={link.url}
                  onChange={(e) => updateSocialLink(link.id, { url: e.target.value })}
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
            )
          })}

          {socialLinks.length === 0 && <p className="text-sm text-muted-foreground">No social links added yet.</p>}
        </div>
      </div>
    </div>
  )
}
