import type { Metadata } from "next";
import { Noto_Serif_SC, Noto_Sans_SC } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Providers } from "./providers";
import "./globals.css";

const _notoSerifSC = Noto_Serif_SC({
  subsets: ["latin", "chinese-simplified"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif-cn",
});

const _notoSansSC = Noto_Sans_SC({
  subsets: ["latin", "chinese-simplified"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans-cn",
});

export const metadata: Metadata = {
  title: "字体子集 - Font Subsetter",
  description: "字体优化工具 · Font Subsetter",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${_notoSansSC.className} font-sans-cn antialiased`}>
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  );
}
