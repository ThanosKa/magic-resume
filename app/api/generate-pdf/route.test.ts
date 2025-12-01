import { describe, test, expect, beforeEach, vi } from 'vitest';
import type { Browser } from 'puppeteer-core';
import { POST, OPTIONS } from './route';

// Mock types for test mocks
type MockPage = {
  setViewport: ReturnType<typeof vi.fn>;
  setContent: ReturnType<typeof vi.fn>;
  addStyleTag: ReturnType<typeof vi.fn>;
  emulateMediaType: ReturnType<typeof vi.fn>;
  pdf: ReturnType<typeof vi.fn>;
};

type MockBrowser = {
  newPage: ReturnType<typeof vi.fn>;
  close: ReturnType<typeof vi.fn>;
};

// Mock dependencies
vi.mock('@sparticuz/chromium', () => ({
  default: {
    executablePath: vi.fn().mockResolvedValue('/usr/bin/chromium'),
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
    defaultViewport: { width: 1240, height: 1754 },
  },
}));

vi.mock('../logger', () => ({
  logger: {
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
    debug: vi.fn(),
  },
}));

// Mock puppeteer - all objects must be created inline to avoid hoisting issues
vi.mock('puppeteer-core', () => {
  const mockPage = {
    setViewport: vi.fn(),
    setContent: vi.fn(),
    addStyleTag: vi.fn(),
    emulateMediaType: vi.fn(),
    pdf: vi.fn().mockResolvedValue(Buffer.from('mock-pdf-content')),
  };

  const mockBrowser = {
    newPage: vi.fn().mockResolvedValue(mockPage),
    close: vi.fn(),
  };

  return {
    default: {
      launch: vi.fn().mockResolvedValue(mockBrowser),
    },
  };
});

describe('Generate PDF API - OPTIONS', () => {
  test('should return 204 with CORS headers', async () => {
    const response = await OPTIONS();

    expect(response.status).toBe(204);
    expect(response.headers.get('Access-Control-Allow-Origin')).toBe('*');
    expect(response.headers.get('Access-Control-Allow-Methods')).toContain(
      'POST'
    );
  });
});

describe('Generate PDF API - POST', () => {
  let mockPage: MockPage;
  let mockBrowser: MockBrowser;

  beforeEach(async () => {
    vi.clearAllMocks();

    // Create fresh mocks for each test
    mockPage = {
      setViewport: vi.fn(),
      setContent: vi.fn(),
      addStyleTag: vi.fn(),
      emulateMediaType: vi.fn(),
      pdf: vi.fn().mockResolvedValue(Buffer.from('mock-pdf-content')),
    } as MockPage;

    mockBrowser = {
      newPage: vi.fn().mockResolvedValue(mockPage),
      close: vi.fn(),
    } as MockBrowser;

    // Re-setup the puppeteer mock
    const puppeteer = await import('puppeteer-core');
    vi.mocked(puppeteer.default.launch).mockResolvedValue(mockBrowser as unknown as Browser);
  });

  test('should successfully generate PDF from HTML content', async () => {
    const request = new Request('http://localhost:3000/api/generate-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        html: '<html><body><h1>My CV</h1></body></html>',
        filename: 'my-resume',
      }),
    });

    const response = await POST(request);

    expect(response.status).toBe(200);
    expect(response.headers.get('Content-Type')).toBe('application/pdf');
    expect(response.headers.get('Content-Disposition')).toContain(
      'my-resume.pdf'
    );

    // Verify browser was launched and closed
    const puppeteer = await import('puppeteer-core');
    expect(puppeteer.default.launch).toHaveBeenCalled();
    expect(mockBrowser.close).toHaveBeenCalled();
  });

  test('should successfully generate PDF from content + styles', async () => {
    const request = new Request('http://localhost:3000/api/generate-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: '<div>CV Content</div>',
        styles: 'body { font-family: Arial; }',
        filename: 'styled-cv',
      }),
    });

    const response = await POST(request);

    expect(response.status).toBe(200);
    expect(mockPage.setContent).toHaveBeenCalled();

    const setContentCall = mockPage.setContent.mock.calls[0];
    const html = setContentCall[0];

    // Should contain the styles and content
    expect(html).toContain('body { font-family: Arial; }');
    expect(html).toContain('<div>CV Content</div>');
  });

  test('should return 400 when HTML content is missing', async () => {
    const request = new Request('http://localhost:3000/api/generate-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        filename: 'test',
      }),
    });

    const response = await POST(request);
    const text = await response.text();

    expect(response.status).toBe(400);
    expect(text).toBe('HTML content is required');
  });

  test('should sanitize unsafe filenames', async () => {
    const request = new Request('http://localhost:3000/api/generate-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        html: '<html><body>CV</body></html>',
        filename: '../../../etc/passwd',
      }),
    });

    const response = await POST(request);

    expect(response.status).toBe(200);
    const disposition = response.headers.get('Content-Disposition');
    // Should not contain path traversal characters
    expect(disposition).not.toContain('../');
    expect(disposition).toContain('.pdf');
  });

  test('should use default filename when not provided', async () => {
    const request = new Request('http://localhost:3000/api/generate-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        html: '<html><body>CV</body></html>',
      }),
    });

    const response = await POST(request);

    expect(response.status).toBe(200);
    const disposition = response.headers.get('Content-Disposition');
    expect(disposition).toContain('cv.pdf');
  });

  test('should apply custom margins', async () => {
    const request = new Request('http://localhost:3000/api/generate-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        html: '<html><body>CV</body></html>',
        margin: {
          top: '10mm',
          right: '15mm',
          bottom: '10mm',
          left: '15mm',
        },
      }),
    });

    const response = await POST(request);

    expect(response.status).toBe(200);
    expect(mockPage.pdf).toHaveBeenCalled();

    const pdfOptions = mockPage.pdf.mock.calls[0][0];
    expect(pdfOptions.margin.top).toBe('10mm');
    expect(pdfOptions.margin.right).toBe('15mm');
  });

  test('should handle payload size limits', async () => {
    const largeContent = 'x'.repeat(6 * 1024 * 1024); // 6MB

    const request = new Request('http://localhost:3000/api/generate-pdf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': (6 * 1024 * 1024).toString(),
      },
      body: JSON.stringify({
        html: largeContent,
      }),
    });

    const response = await POST(request);
    const text = await response.text();

    expect(response.status).toBe(413);
    expect(text).toBe('Payload too large');
  });

  test('should close browser even if PDF generation fails', async () => {
    mockPage.pdf.mockRejectedValueOnce(new Error('PDF generation failed'));

    const request = new Request('http://localhost:3000/api/generate-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        html: '<html><body>CV</body></html>',
      }),
    });

    const response = await POST(request);

    expect(response.status).toBe(500);
    // Browser should still be closed
    expect(mockBrowser.close).toHaveBeenCalled();
  });

  test('should set correct PDF options', async () => {
    const request = new Request('http://localhost:3000/api/generate-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        html: '<html><body>CV</body></html>',
      }),
    });

    await POST(request);

    expect(mockPage.pdf).toHaveBeenCalled();

    const pdfOptions = mockPage.pdf.mock.calls[0][0];
    expect(pdfOptions.format).toBe('A4');
    expect(pdfOptions.printBackground).toBe(true);
    expect(pdfOptions.preferCSSPageSize).toBe(true);
    expect(pdfOptions.omitBackground).toBe(false);
  });

  test('should set viewport and media type', async () => {
    const request = new Request('http://localhost:3000/api/generate-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        html: '<html><body>CV</body></html>',
      }),
    });

    await POST(request);

    expect(mockPage.setViewport).toHaveBeenCalledWith({
      width: 1240,
      height: 1754,
    });
    expect(mockPage.emulateMediaType).toHaveBeenCalledWith('screen');
  });

  test('should inject print-specific styles', async () => {
    const request = new Request('http://localhost:3000/api/generate-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        html: '<html><body>CV</body></html>',
      }),
    });

    await POST(request);

    expect(mockPage.addStyleTag).toHaveBeenCalled();

    const styleOptions = mockPage.addStyleTag.mock.calls[0][0];
    expect(styleOptions.content).toContain('background:rgb(255, 255, 255)');
    expect(styleOptions.content).toContain('-webkit-print-color-adjust: exact');
  });

  test('should handle browser launch failures', async () => {
    const puppeteer = await import('puppeteer-core');
    vi.mocked(puppeteer.default.launch).mockRejectedValueOnce(
      new Error('Browser launch failed')
    );

    const request = new Request('http://localhost:3000/api/generate-pdf', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        html: '<html><body>CV</body></html>',
      }),
    });

    const response = await POST(request);
    const text = await response.text();

    expect(response.status).toBe(500);
    expect(text).toBe('Failed to generate PDF');
  });
});
