import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import { defaultSiteMeta } from "@/utils/siteMeta";

const publicSans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(defaultSiteMeta.siteUrl),
  title: {
    default: defaultSiteMeta.title,
    template: `${defaultSiteMeta.title} > %s`,
  },
  description: defaultSiteMeta.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-screen">
      <body className={publicSans.className + "min-h-screen"}>{children}</body>
    </html>
  );
}
