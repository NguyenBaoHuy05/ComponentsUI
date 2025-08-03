import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Components UI",
  description: "A collection of reusable UI components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
