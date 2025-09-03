/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['via.placeholder.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  // Configure turbopack root to silence warning
  turbo: {
    root: __dirname,
  },
  // Optimize for production
  swcMinify: true,
  compress: true,
  // Enable strict mode
  reactStrictMode: true,
  // Disable x-powered-by header
  poweredByHeader: false,
}

module.exports = nextConfig
