import Header from "@/layout/Header";
import "./globals.css";
import type { Metadata } from "next";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-rubik ",
});

export const metadata: Metadata = {
  title: "سایت مشاور املاک",
  description: "مشاور املاک برای خانه و ویلا و ...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${rubik.variable} py-0 container`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
