import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow HMR/asset requests when dev server is opened via LAN IP (e.g. phone/tablet on same Wi‑Fi)
  allowedDevOrigins: [
    "192.168.1.11",
    "192.168.1.11:3000",
    "localhost",
    "127.0.0.1",
  ],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",

      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        port: '',
        pathname: '/photos/**',
      },
    ],
  },
};

export default nextConfig;
