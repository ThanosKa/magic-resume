"use client";

import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface AlignSelectorProps {
  value: "left" | "center" | "right";
  onChange: (value: "left" | "center" | "right") => void;
  className?: string;
}

const alignments = [
  {
    value: "left" as const,
    icon: AlignLeft,
    label: "Left align",
  },
  {
    value: "center" as const,
    icon: AlignCenter,
    label: "Center align",
  },
  {
    value: "right" as const,
    icon: AlignRight,
    label: "Right align",
  },
];

export function AlignSelector({ value, onChange, className }: AlignSelectorProps) {
  return (
    <div className={cn("flex items-center gap-1", className)}>
      {alignments.map(({ value: alignValue, icon: Icon, label }) => (
        <Button
          key={alignValue}
          variant={value === alignValue ? "default" : "outline"}
          size="sm"
          onClick={() => onChange(alignValue)}
          className="h-8 w-8 p-0"
          title={label}
        >
          <Icon className="h-4 w-4" />
        </Button>
      ))}
    </div>
  );
}
