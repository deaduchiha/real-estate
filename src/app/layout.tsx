import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import Layout from "@/layout/Layout";
import "./globals.css";

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
      <body className={`${rubik.variable} py-0 container max-w-[1300px]`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
