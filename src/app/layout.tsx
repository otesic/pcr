import MacDock from "@/components/macDock/macDock";
import "./globals.css";
import { Providers } from "./GlobalState/provider";

export const metadata = {
  title: "박철련 포트폴리오",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* 프로젝트 아이콘 */}
      <link rel="icon" href="/food0.png" />
      <body>
        <Providers>
          {children}

          <MacDock></MacDock>
        </Providers>
      </body>
    </html>
  );
}
