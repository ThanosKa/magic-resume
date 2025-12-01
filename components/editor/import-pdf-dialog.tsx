'use client';

import { useState, useRef, useCallback } from 'react';
import { Upload, FileText, Loader2, X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { useCVStore } from '@/store/cv-store';
import { useToast } from '@/components/hooks/use-toast';
import type { CVData } from '@/types/cv';

const MAX_FILE_SIZE = 10 * 1024 * 1024;

interface ImportPdfDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ImportPdfDialog({ open, onOpenChange }: ImportPdfDialogProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { setCVData } = useCVStore();
  const { toast } = useToast();

  const validateFile = (file: File): string | null => {
    if (file.type !== 'application/pdf') {
      return 'Only PDF files are allowed';
    }
    if (file.size > MAX_FILE_SIZE) {
      return 'File size must be less than 10MB';
    }
    return null;
  };

  const handleFileSelect = useCallback(
    async (file: File) => {
      const error = validateFile(file);
      if (error) {
        toast({
          variant: 'destructive',
          title: 'Invalid file',
          description: error,
        });
        return;
      }

      setSelectedFile(file);
      setIsProcessing(true);

      try {
        const formData = new FormData();
        formData.append('file', file);

        const response = await fetch('/api/parse-pdf', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          throw new Error(
            errorData.error || `Failed to parse PDF: ${response.statusText}`
          );
        }

        const data = (await response.json()) as { cvData: CVData };
        setCVData(data.cvData);

        toast({
          title: 'PDF imported successfully',
          description: 'Your CV data has been loaded from the PDF.',
        });

        onOpenChange(false);
        setSelectedFile(null);
      } catch (error) {
        toast({
          variant: 'destructive',
          title: 'Import failed',
          description:
            error instanceof Error
              ? error.message
              : 'Failed to import PDF. Please try again.',
        });
      } finally {
        setIsProcessing(false);
      }
    },
    [setCVData, toast, onOpenChange]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setIsDragging(false);

      const file = e.dataTransfer.files[0];
      if (file) {
        void handleFileSelect(file);
      }
    },
    [handleFileSelect]
  );

  const handleFileInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) {
        void handleFileSelect(file);
      }
      e.target.value = '';
    },
    [handleFileSelect]
  );

  const handleBrowseClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = () => {
    setSelectedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Import from PDF</DialogTitle>
          <DialogDescription>
            Upload a PDF resume to automatically extract and populate your CV
            data.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,application/pdf"
            onChange={handleFileInputChange}
            className="hidden"
            disabled={isProcessing}
          />

          {selectedFile && !isProcessing ? (
            <div className="flex items-center gap-3 rounded-lg border border-border bg-muted/50 p-4">
              <FileText className="h-5 w-5 shrink-0 text-muted-foreground" />
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate">
                  {selectedFile.name}
                </p>
                <p className="text-xs text-muted-foreground">
                  {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleRemoveFile}
                className="h-8 w-8 shrink-0"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          ) : (
            <div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              className={`
                relative flex flex-col items-center justify-center gap-4 rounded-lg border-2 border-dashed p-8 transition-colors
                ${
                  isDragging
                    ? 'border-primary bg-primary/5'
                    : 'border-border bg-muted/30 hover:bg-muted/50'
                }
                ${isProcessing ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
              `}
              onClick={handleBrowseClick}
            >
              {isProcessing ? (
                <>
                  <Loader2 className="h-10 w-10 animate-spin text-primary" />
                  <div className="text-center">
                    <p className="text-sm font-medium">Processing PDF...</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Extracting and parsing your resume data
                    </p>
                  </div>
                </>
              ) : (
                <>
                  <div className="rounded-full bg-primary/10 p-4">
                    <Upload className="h-8 w-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-medium">
                      Drag and drop your PDF here
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      or click to browse
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Maximum file size: 10MB
                    </p>
                  </div>
                </>
              )}
            </div>
          )}

          {selectedFile && !isProcessing && (
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={handleRemoveFile}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button
                onClick={() => void handleFileSelect(selectedFile)}
                className="flex-1"
              >
                Import PDF
              </Button>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
