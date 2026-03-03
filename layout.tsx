import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "香气测试 - 寻找你的专属香水",
  description: "通过25个精心设计的问题，发现最适合你的高端香水",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
