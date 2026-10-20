
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow your mobile device to access Next.js development resources
  allowedDevOrigins: ["10.200.4.176"],

  // External images configuration
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;