import { useState } from 'react';
import { pdf } from '@react-pdf/renderer';
import { CVDocument } from './cv-pdf-document';
import type { CVData } from '@/types/cv';

export function usePdfExport() {
    const [isExporting, setIsExporting] = useState(false);

    const exportPdf = async (cv: CVData) => {
        try {
            setIsExporting(true);

            // Generate the blob
            const blob = await pdf(<CVDocument cv={cv} />).toBlob();

            // Determine filename
            const safeTitle = (cv.title || cv.personalInfo.name || 'cv')
                .replace(/[^a-z0-9]/gi, '-')
                .toLowerCase();

            // 1. Create a URL for the blob
            const url = URL.createObjectURL(blob);

            // 2. Create a temporary anchor element
            const a = document.createElement("a");
            a.href = url;
            a.download = `${safeTitle}.pdf`;

            // 3. Trigger the click programmatically
            a.click();

            // 4. Clean up memory
            URL.revokeObjectURL(url);

        } catch (error) {
            console.error('Failed to generate PDF:', error);
            throw error;
        } finally {
            setIsExporting(false);
        }
    };

    return { exportPdf, isExporting };
}
