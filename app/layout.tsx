import "@mantine/core/styles.css";
import "./globals.css";
import React, { PropsWithChildren } from "react";
import { ColorSchemeScript } from "@mantine/core";
import AppProvider from "./app-providers";
import { AppLayout } from "@/components/layouts/app-layout";
import { FooterCentered } from "@/components/footer/footer-centered";

export const metadata = {
  title: "Abdurrahman Harits Ghiffary | Portfolio",
  description: "Portfolio Abdurrahman Harits Ghiffary",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <AppProvider>
          <AppLayout>
            {children}
            <FooterCentered />
          </AppLayout>
        </AppProvider>
      </body>
    </html>
  );
}
