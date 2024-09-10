"use client";
import { MantineProvider } from "@mantine/core";
import React, { PropsWithChildren } from "react";
import { theme } from "../theme";

export default function AppProvider({ children }: PropsWithChildren) {
  return (
    <MantineProvider defaultColorScheme="dark" theme={theme}>
      {children}
    </MantineProvider>
  );
}
