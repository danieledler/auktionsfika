// app/providers.tsx
"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";
// import { ColorModeScript } from "@chakra-ui/react";
import React from "react";
import theme from "./theme";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <React.Fragment>
      {/* <ColorModeScript initialColorMode={theme.config.initialColorMode} /> */}
      <CacheProvider>
        <ChakraProvider theme={theme}>{children}</ChakraProvider>
      </CacheProvider>
    </React.Fragment>
  );
}
