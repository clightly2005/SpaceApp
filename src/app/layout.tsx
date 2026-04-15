import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/global/navigation";
import Background from "@/components/templates/Background"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Space",
  description: "Created by Charlotte Lightly ",
};

export default function RootLayout({ children,}: Readonly<{ children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <Background></Background>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
