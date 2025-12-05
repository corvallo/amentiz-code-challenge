import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Chess GM Wiki",
    short_name: "GM Wiki",
    description: "Browse Chess.com grandmasters, their titles, and live activity summaries.",
    start_url: "/grandmaster",
    display: "standalone",
    background_color: "#06060b",
    theme_color: "#06060b",
    icons: [
      {
        src: "/favicon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/favicon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
