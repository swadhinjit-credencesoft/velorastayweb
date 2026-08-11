/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ["./src/styles"],
  },
};

export default nextConfig;
