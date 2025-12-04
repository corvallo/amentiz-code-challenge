import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/grandmaster",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [new URL("https://images.chesscomfiles.com/uploads/v1/**")],
  },
};

export default nextConfig;
