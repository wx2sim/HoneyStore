import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {
    root: process.cwd(),
  },
  allowedDevOrigins: ['*'],
};

export default nextConfig;
