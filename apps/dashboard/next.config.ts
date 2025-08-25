import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
    clientSegmentCache: true,
    reactCompiler: true,
    useCache: true,
    staleTimes: {
      dynamic: 30,
      static: 180,
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },

  output: "standalone",
};

export default nextConfig;
