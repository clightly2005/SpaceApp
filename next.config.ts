import type { NextConfig } from "next";
import createMDX from '@next/mdx'


const nextConfig: NextConfig = {
  //treats mdx files as pages 
  pageExtensions: ['ts', 'tsx'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov',
      },
    ],
  },
};

export default nextConfig;
