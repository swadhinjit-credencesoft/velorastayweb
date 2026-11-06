/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  distDir: process.env.NEXT_DIST_DIR || ".next",
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ["./src/styles"],
  },
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
