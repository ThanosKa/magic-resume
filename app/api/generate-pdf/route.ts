import chromium from '@sparticuz/chromium';
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

    logger.info({ filename }, 'PDF generation request received');

    if (!html || typeof html !== 'string') {
      logger.warn('Missing HTML content for PDF generation');
      return new Response('HTML content is required', { status: 400 });
    }

    const safeFilename = sanitizeFilename(filename);
    logger.info(
      { originalFilename: filename, safeFilename, htmlLength: html.length },
      'Starting PDF generation'
    );

    const isServerless =
      process.env.VERCEL === '1' ||
      !!process.env.AWS_REGION ||
      !!process.env.LAMBDA_TASK_ROOT;

    const executablePath = isServerless
      ? await chromium.executablePath()
      : undefined;

    if (isServerless && !executablePath) {
      logger.error('Chromium executable path could not be resolved');
      return new Response('Failed to prepare PDF renderer', { status: 500 });
    }

    logger.debug(
      {
        isServerless,
        executablePath: executablePath ?? 'puppeteer default',
      },
      'Launching Puppeteer browser'
    );

    const launchOptions: Parameters<typeof puppeteer.launch>[0] = {
      headless: true,
      args: isServerless
        ? chromium.args
        : ['--no-sandbox', '--disable-setuid-sandbox'],
      executablePath,
      // chromium.defaultViewport is available at runtime, cast to satisfy TS.
      defaultViewport: isServerless ? (chromium as unknown as { defaultViewport?: any }).defaultViewport : undefined,
    };

    browser = await puppeteer.launch(launchOptions);

    logger.debug('Creating new page and setting viewport');
    const page = await browser.newPage();
    await page.setViewport({ width: 1240, height: 1754 });

    logger.debug('Setting page content');
    await page.setContent(html, { waitUntil: 'networkidle0' });

    logger.debug('Adding CSS styles for proper PDF rendering');
    await page.addStyleTag({
      content: `
        html, body, #cv-preview {
          background:rgb(255, 255, 255) !important;
          color: #0f172a !important;
          -webkit-print-color-adjust: exact !important;
        }
        body {
          margin: 0;
        }
      `,
    });

    logger.debug('Emulating screen media type');
    await page.emulateMediaType('screen');

    logger.debug('Generating PDF with Puppeteer');
    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      omitBackground: false,
      margin: {
        top: '20mm',
        right: '16mm',
        bottom: '20mm',
        left: '16mm',
      },
    });

    logger.info({ pdfSize: pdfBuffer.length }, 'PDF generated successfully');

    const pdfBytes = new Uint8Array(pdfBuffer.byteLength);
    pdfBytes.set(pdfBuffer);

    logger.info(
      { filename: safeFilename },
      'PDF generation completed, sending response'
    );

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
      logger.debug('Closing browser');
      await browser.close();
    }
  }
}
