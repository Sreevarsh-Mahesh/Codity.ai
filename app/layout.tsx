import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/lib/theme-provider";
import { ClientScripts } from "@/components/ClientScripts";
import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';

export const metadata: Metadata = {
  title: "Codity - AI-powered code review platform",
  description: "AI-powered code reviewer to help spot the toughest bugs and save hours. Ship better code faster with intelligent code reviews.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <MantineProvider>
            <Navbar />
            {children}
            <Footer />
            <ClientScripts />
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}