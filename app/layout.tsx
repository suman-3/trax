import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { GeistSans } from "geist/font/sans";
import { siteConfig } from "@/config/site";
import { RuntimeEdge } from "./_provider/runtime-edge-provider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: { icon: "/logo.svg" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <RuntimeEdge>
        <body className={cn(GeistSans.variable, "font-sans")}>{children}</body>
      </RuntimeEdge>
    </html>
  );
}
