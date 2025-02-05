import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  env: {
    GA_TRACKING_ID: process.env.GA_TRACKING_ID,
  },
};

export default nextConfig;
