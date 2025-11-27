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
};

export default nextConfig;
