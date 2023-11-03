import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { Providers } from "./providers";
import AppHeader from "@/components/header";
import { Providers } from "@/redux/provider";
import AppFooter from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Viettennis",
  description: "Viettennis",
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html lang={params.locale}>
      <body className={inter.className}>
        <AppHeader />
        <Providers>{children}</Providers>
        <AppFooter />
      </body>
    </html>
  );
}
