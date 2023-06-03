"use client";
import MacDock from "@/components/macDock/macDock";
import "./globals.css";
import { Providers } from "./GlobalState/provider";
import { ParallaxProvider } from "react-scroll-parallax";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";

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
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_API_KEY}&libraries=services,clusterer&autoload=false`}
          strategy="beforeInteractive"
        />
        <SessionProvider>
          <Providers>
            <ParallaxProvider>{children}</ParallaxProvider>
            <MacDock />
          </Providers>
        </SessionProvider>
      </body>
    </html>
  );
}
