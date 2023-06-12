"use client";
import MacDock from "@/components/macDock/macDock";
import "./globals.css";
import { Providers } from "./GlobalState/provider";
import { ParallaxProvider } from "react-scroll-parallax";
import { SessionProvider } from "next-auth/react";
import Script from "next/script";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "@material-tailwind/react";
// export const metadata = {
//   title: "박철련 포트폴리오",
// };

const queryClient = new QueryClient();

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
        <QueryClientProvider client={queryClient}>
          <SessionProvider>
            <ThemeProvider>
              <Providers>
                <ParallaxProvider>{children}</ParallaxProvider>
                <MacDock />
              </Providers>
            </ThemeProvider>
          </SessionProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
