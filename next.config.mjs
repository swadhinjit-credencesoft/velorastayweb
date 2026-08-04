/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "bookonelocal.in",
      },
    ],
  },
  sassOptions: {
    includePaths: ["./src/styles"],
  },
};

export default nextConfig;
