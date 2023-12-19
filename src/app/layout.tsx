import FacebookMessenger from "@/utils/FacebookMessenger";
import { NextAuthProvider } from "./Providers";

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html suppressHydrationWarning={true}>
      <FacebookMessenger />
      <head lang={locale}>
        <script
          src="https://www.google.com/recaptcha/enterprise.js?render=6LcnZRMpAAAAAEh0oZYmTJhITYPXIdxSAJVFlsXA"
          async
          defer
        ></script>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning={true}>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
