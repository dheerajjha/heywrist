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
      "structured",
    ];

    return {
      beforeFiles: [
        // Strip double prefix: e.g. notes.heywrist.com/notes/privacy → /notes/privacy
        ...subdomainApps.map((app) => ({
          source: `/${app}/:subpath*`,
          has: [{ type: "host" as const, value: `${app}.heywrist.com` }],
          destination: `/${app}/:subpath*`,
        })),
        // Normal subdomain rewrite: e.g. notes.heywrist.com/privacy → /notes/privacy
        ...subdomainApps.map((app) => ({
          source: "/:path((?!_next|favicon\\.ico).*)",
          has: [{ type: "host" as const, value: `${app}.heywrist.com` }],
          destination: `/${app}/:path`,
        })),
      ],
    };
  },
};

export default nextConfig;
