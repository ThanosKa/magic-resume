"use client";

import Link from "next/link";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { FileText, Download, Upload, FilePlus, ChevronDown } from "lucide-react";
import { useRef, type RefObject } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { ThemeToggle } from "@/components/theme-toggle";
import { useCVStore } from "@/store/cv-store";
import type { CVData } from "@/types/cv";

interface EditorHeaderProps {
  previewRef: RefObject<HTMLDivElement>;
}

export function EditorHeader({ previewRef }: EditorHeaderProps) {
  const { cv, setCVData, reset } = useCVStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleExportJSON = () => {
    const dataStr = JSON.stringify(cv, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${cv.title.replace(/\s+/g, "-").toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportPDF = async () => {
    if (!previewRef.current) {
      return;
    }

    try {
      const canvas = await html2canvas(previewRef.current, {
        scale: 2,
        useCORS: true,
      });

      const imageData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      });
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imageWidth = pageWidth;
      const imageHeight = (canvas.height * imageWidth) / canvas.width;
      let heightLeft = imageHeight;
      let position = 0;

      pdf.addImage(imageData, "PNG", 0, position, imageWidth, imageHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imageHeight;
        pdf.addPage();
        pdf.addImage(imageData, "PNG", 0, position, imageWidth, imageHeight);
        heightLeft -= pageHeight;
      }

      const safeTitle =
        cv.title && cv.title.trim().length > 0
          ? cv.title.replace(/\s+/g, "-").toLowerCase()
          : "cv";
      pdf.save(`${safeTitle}.pdf`);
    } catch {
      console.error("PDF export failed");
    }
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const data = JSON.parse(event.target?.result as string) as CVData;
        if (!data.personalInfo || !data.sections) {
          throw new Error("Invalid CV data structure");
        }
        setCVData(data);
      } catch {
        console.error("Failed to import CV");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur print:hidden">
      <div className="flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <FileText className="h-5 w-5" />
          <span className="font-semibold">CV Builder</span>
        </Link>

        <div className="flex items-center gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleFileChange}
            className="hidden"
          />

          <Button variant="ghost" size="sm" onClick={handleImportClick}>
            <Upload className="mr-2 h-4 w-4" />
            <span className="hidden sm:inline">Import</span>
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <Download className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Export</span>
                <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleExportJSON}>
                Export as JSON
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleExportPDF}>
                Export as PDF
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handlePrint}>Print</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <AlertDialog>
            <AlertDialogTrigger asChild>
              <Button variant="ghost" size="sm">
                <FilePlus className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">New</span>
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Create New CV?</AlertDialogTitle>
                <AlertDialogDescription>
                  This will replace your current CV with a fresh template. Make
                  sure to export your current work first if you want to keep it.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={reset}>
                  Create New
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
