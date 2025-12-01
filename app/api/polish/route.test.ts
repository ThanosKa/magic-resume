import { describe, test, expect, beforeEach, vi } from 'vitest';
import { POST } from './route';

vi.mock('../logger', () => ({
  logger: {
    info: vi.fn(),
    warn: vi.fn(),
    error: vi.fn(),
    debug: vi.fn(),
  },
}));

const mockFetch = vi.fn();
global.fetch = mockFetch;

describe('Polish API Route', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    process.env.OPENROUTER_API_KEY = 'test-api-key';
  });

  test('should successfully polish content with default type (description)', async () => {
    const mockApiResponse = {
      choices: [
        {
          message: {
            content: 'This is polished content with improved language.',
          },
        },
      ],
    };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
    });

    const request = new Request('http://localhost:3000/api/polish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: 'This is rough content that needs polishing.',
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.polished).toBe('This is polished content with improved language.');
    expect(mockFetch).toHaveBeenCalledTimes(1);
  });

  test('should successfully polish content with title type', async () => {
    const mockApiResponse = {
      choices: [
        {
          message: {
            content: 'Senior Full-Stack Developer',
          },
        },
      ],
    };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
    });

    const request = new Request('http://localhost:3000/api/polish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: 'Developer',
        polishType: 'title',
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.polished).toBe('Senior Full-Stack Developer');
    const fetchCall = mockFetch.mock.calls[0];
    const requestBody = JSON.parse(fetchCall[1].body);
    expect(requestBody.messages[0].content).toContain('job titles');
  });

  test('should successfully polish content with summary type', async () => {
    const mockApiResponse = {
      choices: [
        {
          message: {
            content:
              'Passionate software engineer with 5+ years of experience building scalable applications.',
          },
        },
      ],
    };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
    });

    const request = new Request('http://localhost:3000/api/polish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: 'I am a developer with some experience.',
        polishType: 'summary',
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.polished).toContain('software engineer');
    const fetchCall = mockFetch.mock.calls[0];
    const requestBody = JSON.parse(fetchCall[1].body);
    expect(requestBody.messages[0].content).toContain('professional summary');
  });

  test('should return 400 when content is missing', async () => {
    const request = new Request('http://localhost:3000/api/polish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({}),
    });

    const response = await POST(request);
    const text = await response.text();

    expect(response.status).toBe(400);
    expect(text).toBe('Content is required');
    expect(mockFetch).not.toHaveBeenCalled();
  });

  test('should return 500 when API key is missing', async () => {
    delete process.env.OPENROUTER_API_KEY;

    const request = new Request('http://localhost:3000/api/polish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: 'Test content' }),
    });

    const response = await POST(request);
    const text = await response.text();

    expect(response.status).toBe(500);
    expect(text).toContain('API key is not configured');
    expect(mockFetch).not.toHaveBeenCalled();
  });

  test('should handle OpenRouter API errors', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 429,
      statusText: 'Too Many Requests',
      text: async () => 'Rate limit exceeded',
    });

    const request = new Request('http://localhost:3000/api/polish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: 'Test content' }),
    });

    const response = await POST(request);
    const text = await response.text();

    expect(response.status).toBe(429);
    expect(text).toContain('Rate limit exceeded');
  });

  test('should handle empty response from OpenRouter', async () => {
    const mockApiResponse = {
      choices: [],
    };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
    });

    const request = new Request('http://localhost:3000/api/polish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: 'Test content' }),
    });

    const response = await POST(request);
    const text = await response.text();

    expect(response.status).toBe(500);
    expect(text).toContain('did not return content');
  });

  test('should handle network errors', async () => {
    mockFetch.mockRejectedValueOnce(new Error('Network error'));

    const request = new Request('http://localhost:3000/api/polish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: 'Test content' }),
    });

    const response = await POST(request);
    const text = await response.text();

    expect(response.status).toBe(500);
    expect(text).toBe('An unexpected error occurred');
  });

  test('should send correct headers to OpenRouter', async () => {
    const mockApiResponse = {
      choices: [{ message: { content: 'Polished content' } }],
    };

    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockApiResponse,
    });

    process.env.NEXT_PUBLIC_SITE_URL = 'https://example.com';

    const request = new Request('http://localhost:3000/api/polish', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: 'Test' }),
    });

    await POST(request);

    const fetchCall = mockFetch.mock.calls[0];
    const headers = fetchCall[1].headers;

    expect(headers.Authorization).toBe('Bearer test-api-key');
    expect(headers['Content-Type']).toBe('application/json');
    expect(headers['HTTP-Referer']).toBe('https://example.com');
    expect(headers['X-Title']).toBe('Magic Resume');
  });
});
