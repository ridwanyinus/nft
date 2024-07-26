import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "animate.css";

export const metadata: Metadata = {
  title: "KNFT",
  description: "Discover, buy, and sell unique KNFTs on our platform. Explore a diverse collection of digital art, collectibles, and more. Join the KNFT revolution today! Design by Ridwan Yinus",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
// className={inter.className}
