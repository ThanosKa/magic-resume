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

const PDF_EXPORT_URL = '/api/generate-pdf';
const PDF_EXPORT_TIMEOUT_MS = 45_000;

const PRINT_STYLES = `
  @page {
    size: A4;
    margin: 16mm;
  }
  * {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
  html, body {
    margin: 0;
    background: #ffffff;
    color: #0f172a;
  }
  #cv-preview {
    width: 210mm;
    min-height: 297mm;
    margin: 0 auto;
    box-shadow: none;
    background: #ffffff;
  }
  .cv-section {
    break-inside: avoid;
    page-break-inside: avoid;
  }
  .cv-content ul {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-top: 0.25rem;
  }
  .cv-content li {
    margin-bottom: 0.25rem;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const STYLE_FILTER_PREFIXES = [
  'animation',
  'transition',
  'width',
  'height',
  'min-',
  'max-',
  'flex',
  'grid',
  'inline-size',
  'block-size',
];
const STYLE_FILTER_EXACT = [
  'font-family',
  'font-display',
  'font-variation-settings',
  'left',
  'right',
  'top',
  'bottom',
  'inset',
];

const stripUnsupportedRules = (css: string) =>
  css
    .replace(/@font-face[\s\S]*?}\s*/g, '')
    .replace(/@keyframes[\s\S]*?}\s*}/g, '')
    .replace(/animation:[^;]*;/g, '')
    .replace(/transition:[^;]*;/g, '');

const collectDocumentStyles = async () => {
  const inlineStyles = Array.from(document.querySelectorAll('style'))
    .map((style) => style.textContent ?? '')
    .join('\n');

  const externalStyles = await Promise.all(
    Array.from(
      document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]')
    ).map(async (link) => {
      if (!link.href) return '';
      try {
        const response = await fetch(link.href);
        if (!response.ok) return '';
        return await response.text();
      } catch {
        return '';
      }
    })
  );

  const mergedStyles = [inlineStyles, ...externalStyles, PRINT_STYLES]
    .filter(Boolean)
    .join('\n');

  return stripUnsupportedRules(mergedStyles);
};

const applyComputedStyles = (sourceEl: Element, targetEl: Element) => {
  const computed = window.getComputedStyle(sourceEl);
  const filteredStyles = Array.from(computed)
    .filter(
      (prop) =>
        !STYLE_FILTER_PREFIXES.some((prefix) => prop.startsWith(prefix)) &&
        !STYLE_FILTER_EXACT.includes(prop)
    )
    .map((prop) => `${prop}: ${computed.getPropertyValue(prop)};`)
    .join(' ');

  const existingStyle = targetEl.getAttribute('style');
  const mergedStyle = existingStyle
    ? `${existingStyle}; ${filteredStyles}`
    : filteredStyles;
  targetEl.setAttribute('style', mergedStyle);

  const sourceChildren = Array.from(sourceEl.children);
  const targetChildren = Array.from(targetEl.children);
  for (let i = 0; i < sourceChildren.length; i += 1) {
    const sourceChild = sourceChildren[i];
    const targetChild = targetChildren[i];
    if (sourceChild && targetChild) {
      applyComputedStyles(sourceChild, targetChild);
    }
  }
};

const toDataUrl = async (src: string) => {
  const response = await fetch(src);
  if (!response.ok) throw new Error('Image fetch failed');
  const blob = await response.blob();
  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result as string);
    reader.onerror = () => reject(new Error('Failed to convert image'));
    reader.readAsDataURL(blob);
  });
};

const inlineImages = async (root: HTMLElement) => {
  const images = Array.from(root.querySelectorAll('img'));
  await Promise.all(
    images.map(async (img) => {
      const src = img.getAttribute('src');
      if (!src || src.startsWith('data:')) return;
      try {
        const dataUrl = await toDataUrl(src);
        img.setAttribute('src', dataUrl);
      } catch {}
    })
  );
};

const buildPdfPayload = async (previewEl: HTMLElement) => {
  const cloned = previewEl.cloneNode(true) as HTMLElement;

  cloned.querySelectorAll('.page-break-line').forEach((el) => {
    (el as HTMLElement).style.display = 'none';
  });

  applyComputedStyles(previewEl, cloned);
  await inlineImages(cloned);
  const styles = await collectDocumentStyles();

  return {
    content: cloned.outerHTML,
    styles,
    margin: {
      top: '16mm',
      right: '16mm',
      bottom: '16mm',
      left: '16mm',
    },
  };
};

interface EditorHeaderProps {
  previewRef: RefObject<HTMLDivElement | null>;
}

export function EditorHeader({ previewRef }: EditorHeaderProps) {
  const { cv, setCVData, reset } = useCVStore();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isExportingPDF, setIsExportingPDF] = useState(false);
  const [isExportMenuOpen, setIsExportMenuOpen] = useState(false);
  const [isImportMenuOpen, setIsImportMenuOpen] = useState(false);
  const [isImportPdfDialogOpen, setIsImportPdfDialogOpen] = useState(false);
  const { toast } = useToast();

  const toSafeFilename = (value?: string) => {
    if (!value) return 'cv';
    const cleaned = value.replace(/[<>:"/\\|?*\u0000-\u001F]/g, '').trim();
    if (!cleaned) return 'cv';
    return cleaned.replace(/\s+/g, '-').toLowerCase();
  };

  const safeTitle = toSafeFilename(cv.title || cv.personalInfo.name);

  const handleExportJSON = () => {
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
    if (!previewRef.current) {
      window.print();
      return;
    }
    window.print();
  };

  const handleExportPDF = async () => {
    if (isExportingPDF) return;
    let timeoutId: number | undefined;

    if (!previewRef.current) {
      toast({
        variant: 'destructive',
        title: 'PDF export failed',
        description: 'Preview is not ready yet. Please try again.',
      });
      return;
    }

    try {
      setIsExportingPDF(true);
      setIsExportMenuOpen(true);
      const payload = await buildPdfPayload(previewRef.current);
      const controller = new AbortController();
      timeoutId = window.setTimeout(
        () => controller.abort(),
        PDF_EXPORT_TIMEOUT_MS
      );

      const response = await fetch(PDF_EXPORT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...payload,
          filename: safeTitle,
        }),
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`PDF generation failed with status ${response.status}`);
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `${safeTitle}.pdf`;
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      const description =
        error instanceof DOMException && error.name === 'AbortError'
          ? 'PDF export timed out. Please try again.'
          : 'Please try again in a moment.';

      toast({
        variant: 'destructive',
        title: 'PDF export failed',
        description,
      });
    } finally {
      if (timeoutId) {
        window.clearTimeout(timeoutId);
      }
      setIsExportingPDF(false);
      setIsExportMenuOpen(false);
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
                <Upload className="mr-2 h-4 w-4" />
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

          <DropdownMenu
            open={isExportMenuOpen}
            onOpenChange={setIsExportMenuOpen}
          >
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="sm"
                aria-busy={isExportingPDF}
                disabled={isExportingPDF}
              >
                {isExportingPDF ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <Download className="mr-2 h-4 w-4" />
                )}
                <span className="hidden sm:inline">
                  {isExportingPDF ? 'Exporting...' : 'Export'}
                </span>
                <ChevronDown className="ml-1 h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={handleExportJSON}>
                Export as JSON
              </DropdownMenuItem>
              <DropdownMenuItem
                disabled={isExportingPDF}
                onSelect={(event) => {
                  event.preventDefault();
                  void handleExportPDF();
                }}
              >
                {isExportingPDF ? (
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
