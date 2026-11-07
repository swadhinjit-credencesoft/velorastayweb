/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Keep dynamic app routes available while using `next dev`; export the site on production builds.
  output: process.env.NODE_ENV === "production" ? "export" : undefined,
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  sassOptions: {
    includePaths: ["./src/styles"],
  },
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
