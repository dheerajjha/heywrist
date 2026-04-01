import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // screenaway.heywrist.com → /screenaway (skip static assets)
        {
          source: "/:path((?!_next|favicon\\.ico).*)",
          has: [{ type: "host", value: "screenaway.heywrist.com" }],
          destination: "/screenaway/:path",
        },
      ],
    };
  },
};

export default nextConfig;
