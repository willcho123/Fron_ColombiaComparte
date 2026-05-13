import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "colombiacomparte.com",
      },
    ],
  },
};

export default nextConfig;