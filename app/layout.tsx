import "./globals.css";
import type { Metadata } from "next";
import { Header } from "@/widgets/header/header";
import { Main } from "@/widgets/main";

export const metadata: Metadata = {
  title: "Chess GM Wiki",
  description: "Browse Chess.com grandmasters, their titles, and live activity summaries.",
  icons: {
    icon: [
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", rel: "shortcut icon" },
    ],
    apple: { url: "/apple-touch-icon.png", sizes: "180x180" },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <Main>{children}</Main>
      </body>
    </html>
  );
}
