/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Keep these packages external so Vercel bundles their binaries correctly with pnpm
  serverExternalPackages: [
    'pino',
    'pino-pretty',
    '@sparticuz/chromium',
    'puppeteer-core',
  ],
  experimental: {
    // Force trace of Chromium binaries living inside pnpm's store for this route
    outputFileTracingIncludes: {
      '/api/generate-pdf/route': [
        './node_modules/.pnpm/@sparticuz+chromium@*/node_modules/@sparticuz/chromium/bin/**/*',
      ],
    },
  },
};

export default nextConfig;
