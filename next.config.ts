import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        // screenaway.heywrist.com → /screenaway
        {
          source: "/:path*",
          has: [{ type: "host", value: "screenaway.heywrist.com" }],
          destination: "/screenaway/:path*",
        },
      ],
    };
  },
};

export default nextConfig;
