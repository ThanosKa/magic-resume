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
  ],
};

export default nextConfig;
