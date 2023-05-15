import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "박철련 포트폴리오",
  // description: "Generated by create next app",
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
      <body className={inter.className}>{children}</body>
    </html>
  );
}
