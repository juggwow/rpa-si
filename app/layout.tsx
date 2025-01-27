import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import NextAuthProvider from "@/providers/auth";
import ResponsiveAppBar from "@/components/nav";
import FontProvider from "@/providers/font";

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  weight: ["400", "500", "600", "700"],
  variable: "--ibm-plex-sans-thai",
  subsets: ["thai", "latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body className={ibmPlexSansThai.className}>
          <FontProvider>
            <ResponsiveAppBar/>
            {children}
          </FontProvider>
        </body>
      </html>
    </NextAuthProvider>
  );
}
