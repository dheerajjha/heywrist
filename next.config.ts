import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Watery was renamed Quench in the App Store, but its pages still live under
  // /watery because that is the slug the shipped app and the App Store
  // `privacyPolicyUrl` both point at. Anyone reading the app's name and typing
  // /quench/privacy got a 404, so send the whole /quench prefix to the pages
  // that exist. Strictly additive: /quench had no route of its own.
  async redirects() {
    return [
      {
        source: "/quench/:path*",
        destination: "/watery/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
