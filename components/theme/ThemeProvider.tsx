// components/theme/ThemeProvider.tsx
"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-theme" // <= important avec @custom-variant dark (...)
      defaultTheme="system"
      enableSystem
    >
      {children}
    </NextThemesProvider>
  );
}
