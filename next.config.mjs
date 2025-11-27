/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Add 'pino' and 'pino-pretty' to serverExternalPackages (moved from experimental in Next.js 16)
  serverExternalPackages: ['pino', 'pino-pretty', '@sparticuz/chromium'],
  experimental: {
    outputFileTracingIncludes: {
      // Ensure headless chromium binaries are bundled for the PDF route
      '/api/generate-pdf': [
        './node_modules/@sparticuz/chromium/bin/**/*',
        './node_modules/@sparticuz/chromium/lib/**/*',
      ],
    },
  },
};

export default nextConfig;
