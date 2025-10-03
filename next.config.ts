import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'http',
        hostname: 'unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'cdn.ewebik.com',
      },
      {
        protocol: 'https',
        hostname: 'id-preview--cd435d9a-6844-44e6-8351-279acb86b107.lovable.app',
      },
      {
        protocol: 'https',
        hostname: 'example.com',
      },
    ],
  },
};

export default nextConfig;
