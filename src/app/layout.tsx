import MacDock from "@/components/macDock/macDock";
import Header from "../components/header/Header";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

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
        {children}
        <MacDock></MacDock>
      </body>
    </html>
  );
}
