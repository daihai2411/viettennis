import ScrollToTop from "@/components/common/ScrollToTop";
import AppFooter from "@/components/footer";
import AppHeader from "@/components/header";
import { Providers } from "@/redux/provider";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return [{ locale: "vi" }];
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
    <html lang={locale} suppressHydrationWarning={true}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppHeader params={locale} />
          <Providers>{children}</Providers>
          <AppFooter />
          <ToastContainer autoClose={2000} />
          <ScrollToTop />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
