import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../app/components/navbar";
import Sidebar from "../app/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trajectifi",
  description: "Trajectifi DApp",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#080a1f] text-white`}
      >
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex-1">
            <Navbar />
            <main>{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}