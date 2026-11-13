/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Keeps generateMetadata output in the initial <head>; vinext otherwise
  // streams it into the body.
  htmlLimitedBots: /.*/,
  images: {
    unoptimized: true,
  },
  serverExternalPackages: ['pino', 'pino-pretty'],
};

export default nextConfig;
