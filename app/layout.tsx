import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aryan Dahiya | Software Engineer",
  description:
    "Portfolio of Aryan Dahiya, Software Engineer. Explore experience, product builds, and full-stack projects across Next.js, Node.js, Go, and modern web technologies.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased lg:snap-y lg:snap-proximity">{children}</body>
    </html>
  );
}
