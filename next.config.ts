import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const subdomainApps = [
      "screenaway",
      "autosleepy",
      "recordy",
      "streaky",
      "watery",
      "chatty",
      "notes",
      "chronofit",
      "lumina",
    ];

    return {
      beforeFiles: subdomainApps.map((app) => ({
        source: "/:path((?!_next|favicon\\.ico).*)",
        has: [{ type: "host" as const, value: `${app}.heywrist.com` }],
        destination: `/${app}/:path`,
      })),
    };
  },
};

export default nextConfig;
