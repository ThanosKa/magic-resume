import puppeteer from 'puppeteer';
import { logger } from '../logger';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const sanitizeFilename = (value?: string) => {
  if (!value) return 'cv';
  const cleaned = value.replace(/[<>:"/\\|?*\u0000-\u001F]/g, '').trim();
  return cleaned.length > 0 ? cleaned : 'cv';
};

export async function POST(req: Request) {
  let browser: Awaited<ReturnType<typeof puppeteer.launch>> | null = null;

  try {
    const { html, filename } = (await req.json()) as {
      html?: string;
      filename?: string;
    };

    if (!html || typeof html !== 'string') {
      logger.warn('Missing HTML content for PDF generation');
      return new Response('HTML content is required', { status: 400 });
    }

    const safeFilename = sanitizeFilename(filename);

    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1240, height: 1754 }); // Approx A4 at 150 DPI
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.emulateMediaType('screen');

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      margin: {
        top: '20mm',
        right: '16mm',
        bottom: '20mm',
        left: '16mm',
      },
    });

    const pdfBytes = new Uint8Array(pdfBuffer.byteLength);
    pdfBytes.set(pdfBuffer);

    return new Response(pdfBytes.buffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${safeFilename}.pdf"`,
      },
    });
  } catch (error) {
    logger.error({ err: error }, 'Failed to generate PDF');
    return new Response('Failed to generate PDF', { status: 500 });
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
