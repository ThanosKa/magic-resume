'use client';

import Link from 'next/link';
import { Download, Upload, FilePlus, ChevronDown, Loader2 } from 'lucide-react';
import { useRef, useState, type RefObject } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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
} from '@/components/ui/alert-dialog';
import { ThemeToggle } from '@/components/theme-toggle';
import { useCVStore } from '@/store/cv-store';
import type { CVData } from '@/types/cv';
import { useToast } from '@/components/hooks/use-toast';
import { ImportPdfDialog } from './import-pdf-dialog';
import { usePdfExport } from '@/components/pdf/use-pdf-export';

interface EditorHeaderProps {
  previewRef: RefObject<HTMLDivElement | null>;
}

export function EditorHeader({ previewRef: _previewRef }: EditorHeaderProps) {
  const { cv, setCVData, reset } = useCVStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isImportMenuOpen, setIsImportMenuOpen] = useState(false);
  const [isImportPdfDialogOpen, setIsImportPdfDialogOpen] = useState(false);
  const { toast } = useToast();

  const { exportPdf, isExporting } = usePdfExport();

  const handleExportJSON = () => {
    const safeTitle = (cv.title || cv.personalInfo.name || 'cv')
      .replace(/[^a-z0-9]/gi, '-')
      .toLowerCase();

    const dataStr = JSON.stringify(cv, null, 2);
    const blob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${safeTitle}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportPDF = async () => {
    try {
      await exportPdf(cv);
      toast({
        title: 'PDF exported successfully',
        description: 'Your CV has been downloaded.',
      });
    } catch (_error) {
      toast({
        variant: 'destructive',
        title: 'PDF export failed',
        description: 'There was an error generating your PDF. Please try again.',
      });
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
          throw new Error('Invalid CV data structure');
        }
        setCVData(data);
      } catch {
        toast({
          variant: 'destructive',
          title: 'Import failed',
          description: 'Please make sure the file is a valid CV export.',
        });
      }
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur print:hidden">
      <div className="flex h-14 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <img src="/icon.svg" alt="Magic Resume Logo" className="h-6 w-6" />
          <span className="font-semibold">Magic Resume</span>
        </Link>

        <div className="flex items-center gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept=".json"
            onChange={handleFileChange}
            className="hidden"
          />

          <DropdownMenu
            open={isImportMenuOpen}
            onOpenChange={setIsImportMenuOpen}
          >
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm">
                <Download className="mr-2 h-4 w-4" />
                <span className="hidden sm:inline">Import</span>
                <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleImportClick}>
                Import from JSON
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  setIsImportMenuOpen(false);
                  setIsImportPdfDialogOpen(true);
                }}
              >
                Import from PDF
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                disabled={isExporting}
              >
                {isExporting ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Upload className="mr-2 h-4 w-4" />
                )}
                <span className="hidden sm:inline">
                  {isExporting ? 'Exporting...' : 'Export'}
                </span>
                <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleExportJSON}>
                Export as JSON
              </DropdownMenuItem>
              <DropdownMenuItem
                disabled={isExporting}
                onSelect={(event) => {
                  event.preventDefault();
                  void handleExportPDF();
                }}
              >
                {isExporting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Exporting PDF...
                  </>
                ) : (
                  'Export as PDF'
                )}
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

      <ImportPdfDialog
        open={isImportPdfDialogOpen}
        onOpenChange={setIsImportPdfDialogOpen}
      />
    </header>
  );
}
