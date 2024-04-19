"use client";

import { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import { createContext, PropsWithChildren, useContext } from "react";


const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  weight: ["400", "500", "600", "700"],
  variable: "--ibm-plex-sans-thai",
  subsets: ["thai", "latin"],
});

interface FontCtx {
  ibmPlexSansThai: NextFontWithVariable;
}

const FontContext = createContext<FontCtx | null>(null);

export const useFontContext = () => useContext(FontContext);

export default function FontProvider({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const value = {
    ibmPlexSansThai,
  };
  return (
    <FontContext.Provider value={value}>
      <main className={ibmPlexSansThai.className}>
        {children}
      </main>
    </FontContext.Provider>
  );
};