import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // If deploying to github.io subdirectory, uncomment and update:
  // basePath: '/personal-website',
  // assetPrefix: '/personal-website',
  trailingSlash: true,
};

export default nextConfig;
