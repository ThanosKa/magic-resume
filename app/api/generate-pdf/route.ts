import chromium from '@sparticuz/chromium';
import puppeteer from 'puppeteer-core';
import { logger } from '../logger';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

const MAX_CONTENT_SIZE = 5 * 1024 * 1024; // ~5MB
const DEFAULT_MARGINS = {
  top: '20mm',
  right: '16mm',
  bottom: '20mm',
  left: '16mm',
};

const sanitizeFilename = (value?: string) => {
  if (!value) return 'cv';
  const cleaned = value.replace(/[<>:"/\\|?*\u0000-\u001F]/g, '').trim();
  return cleaned.length > 0 ? cleaned : 'cv';
};

const normalizeMarginValue = (
  value: string | number | undefined,
  fallback: string
) => {
  if (typeof value === 'number') {
    return `${value}mm`;
  }
  if (typeof value === 'string' && value.trim().length > 0) {
    return value;
  }
  return fallback;
};

const buildHtmlDocument = (content?: string, styles?: string, baseHref?: string) => {
  if (!content) return null;
  const safeStyles = styles ?? '';
  const baseTag = baseHref ? `<base href="${baseHref}/" />` : '';
  return `<!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      ${baseTag}
      <style>${safeStyles}</style>
    </head>
    <body>
      ${content}
    </body>
  </html>`;
};

export async function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: CORS_HEADERS,
  });
}

export async function POST(req: Request) {
  let browser: Awaited<ReturnType<typeof puppeteer.launch>> | null = null;

  try {
    const contentLengthHeader = req.headers.get('content-length');
    if (contentLengthHeader) {
      const contentLength = Number(contentLengthHeader);
      if (Number.isFinite(contentLength) && contentLength > MAX_CONTENT_SIZE) {
        logger.warn({ contentLength }, 'PDF request exceeds size limit');
        return new Response('Payload too large', {
          status: 413,
          headers: CORS_HEADERS,
        });
      }
    }

    const { html, filename, content, styles, margin } = (await req.json()) as {
      html?: string;
      filename?: string;
      content?: string;
      styles?: string;
      margin?: Partial<typeof DEFAULT_MARGINS>;
    };

    logger.info({ filename }, 'PDF generation request received');

    const { origin } = new URL(req.url);

    const normalizedHtml =
      html ?? buildHtmlDocument(content, styles, origin);

    if (!normalizedHtml || typeof normalizedHtml !== 'string') {
      logger.warn('Missing HTML content for PDF generation');
      return new Response('HTML content is required', {
        status: 400,
        headers: CORS_HEADERS,
      });
    }

    const htmlBytes = new TextEncoder().encode(normalizedHtml).length;
    if (htmlBytes > MAX_CONTENT_SIZE) {
      logger.warn({ htmlBytes }, 'HTML content exceeds size limit');
      return new Response('Payload too large', {
        status: 413,
        headers: CORS_HEADERS,
      });
    }

    const safeFilename = sanitizeFilename(filename);
    logger.info(
      {
        originalFilename: filename,
        safeFilename,
        htmlLength: normalizedHtml.length,
      },
      'Starting PDF generation'
    );

    const isServerless =
      process.env.VERCEL === '1' ||
      !!process.env.AWS_REGION ||
      !!process.env.LAMBDA_TASK_ROOT;

    const executablePath = isServerless
      ? await chromium.executablePath()
      : undefined;
    const channel = isServerless ? undefined : 'chrome';

    if (isServerless && !executablePath) {
      logger.error('Chromium executable path could not be resolved');
      return new Response('Failed to prepare PDF renderer', { status: 500 });
    }

    logger.debug(
      {
        isServerless,
        executablePath: executablePath ?? 'puppeteer default',
        channel: channel ?? 'none',
      },
      'Launching Puppeteer browser'
    );

    const launchOptions: Parameters<typeof puppeteer.launch>[0] = {
      headless: true,
      args: isServerless
        ? chromium.args
        : ['--no-sandbox', '--disable-setuid-sandbox'],
      executablePath,
      // channel is only used in non-serverless environments to pick a locally installed Chrome
      channel,
      // chromium.defaultViewport is available at runtime, cast to satisfy TS.
      defaultViewport: isServerless ? (chromium as unknown as { defaultViewport?: { width: number; height: number } }).defaultViewport : undefined,
    };

    browser = await puppeteer.launch(launchOptions);

    logger.debug('Creating new page and setting viewport');
    const page = await browser.newPage();
    await page.setViewport({ width: 1240, height: 1754 });

    logger.debug('Setting page content');
    await page.setContent(normalizedHtml, { waitUntil: 'networkidle0' });

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
    const marginTop = normalizeMarginValue(margin?.top, DEFAULT_MARGINS.top);
    const marginRight = normalizeMarginValue(
      margin?.right,
      DEFAULT_MARGINS.right
    );
    const marginBottom = normalizeMarginValue(
      margin?.bottom,
      DEFAULT_MARGINS.bottom
    );
    const marginLeft = normalizeMarginValue(margin?.left, DEFAULT_MARGINS.left);

    const pdfBuffer = await page.pdf({
      format: 'A4',
      printBackground: true,
      preferCSSPageSize: true,
      omitBackground: false,
      margin: {
        top: marginTop,
        right: marginRight,
        bottom: marginBottom,
        left: marginLeft,
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
        ...CORS_HEADERS,
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${safeFilename}.pdf"`,
      },
    });
  } catch (error) {
    logger.error({ err: error }, 'Failed to generate PDF');
    return new Response('Failed to generate PDF', {
      status: 500,
      headers: CORS_HEADERS,
    });
  } finally {
    if (browser) {
      logger.debug('Closing browser');
      await browser.close();
    }
  }
}
