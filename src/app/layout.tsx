import iransans from "@/font/iransans";
import type { Metadata } from "next";
import "./globals.css";
import GlobalProviders from "@/providers/global.provider";
import Header from "@/components/Header";
import { Toaster } from "@/ui/toaster.ui";
import TopLoader from "@/components/TopLoader";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={iransans.className + ` bg-background text-right`}>
        <GlobalProviders>
          <TopLoader />
          <Header />
          <main className="md:max-w-[90vw] mx-auto p-3 xl:p-0">{children}</main>
          <Toaster />
        </GlobalProviders>
      </body>
    </html>
  );
}
