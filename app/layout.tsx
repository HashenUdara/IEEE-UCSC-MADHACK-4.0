import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { FloatingNav } from "@/components/common/floating-navbar";
import { navItems } from "@/data/nav-items";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "MADHACK 4.0 | IEEE UCSC",
  description: "MADHACK 4.0 By IEEE Student Branch of UCSC",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FloatingNav navItems={navItems} />
        <main className=" container mx-auto flex-grow min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
