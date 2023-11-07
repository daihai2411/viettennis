import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
// import { Providers } from "./providers";
import AppFooter from "@/components/footer";
import AppHeader from "@/components/header";
import { Providers } from "@/redux/provider";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: "vi" }, { locale: "en" }];
}

export const metadata: Metadata = {
  title: "Viettennis",
  description: "Viettennis",
};

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppHeader params={locale} />
          <Providers>{children}</Providers>
          <AppFooter />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
