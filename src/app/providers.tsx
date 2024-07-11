"use client";

import * as React from "react";

import { Provider } from "jotai";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function Providers({
  children,
  ...props
}: Readonly<ThemeProviderProps>) {
  return (
    <Provider>
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </Provider>
  );
}
