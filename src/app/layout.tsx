"use client";
import MacDock from "@/components/macDock/macDock";
import "./globals.css";
import { Providers } from "./GlobalState/provider";
import { ParallaxProvider } from "react-scroll-parallax";

// export const metadata = {
//   title: "박철련 포트폴리오",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 프로젝트 아이콘 */}
      <link rel="icon" href="/icons/index.png" />
      <body>
        <Providers>
          <ParallaxProvider>{children}</ParallaxProvider>
          <MacDock />
        </Providers>
      </body>
    </html>
  );
}
