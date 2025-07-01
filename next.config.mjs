/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // ✅ disables server-based optimization
  },
};

export default nextConfig;
