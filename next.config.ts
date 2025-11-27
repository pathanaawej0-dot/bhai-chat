import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Enable react strict mode for better development experience
  reactStrictMode: true,
  
  // Configure trailing slash behavior
  trailingSlash: false,
  
  // Configure image optimization
  images: {
    // Add any domains you might use for images
    domains: [],
  },
};

export default nextConfig;