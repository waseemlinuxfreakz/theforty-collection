import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Old commissions routes → new for-sale routes
      {
        source: "/commissions/:slug",
        destination: "/for-sale/fj/:slug",
        permanent: true,
      },
      // Old inventory page → new models overview
      {
        source: "/inventory",
        destination: "/models",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
