import ScrollToTop from "@/components/common/ScrollToTop";
import AppFooter from "@/components/footer";
import AppHeader from "@/components/header";
import { Providers } from "@/redux/provider";
import ChatBoxMesseger from "@/utils/ChatBoxMesseger";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../globals.css";

const avoFont = localFont({
  src: [
    {
      path: "../../fonts/Avo-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../fonts/Avo-Bold-Italic.ttf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../../fonts/Avo-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../fonts/Avo-Medium-Italic.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../fonts/Avo.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../fonts/Avo-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
});

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
      <body className={avoFont.className} suppressHydrationWarning={true}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <AppHeader params={locale} />
            {children}
          </Providers>
          <AppFooter />
          <ToastContainer autoClose={2000} />
          <ScrollToTop />
          <ChatBoxMesseger />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
