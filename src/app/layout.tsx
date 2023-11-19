import { NextAuthProvider } from "./Providers";

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  return (
    <html>
      <head lang={locale}>
        <script
          src="https://www.google.com/recaptcha/enterprise.js?render=6LcnZRMpAAAAAEh0oZYmTJhITYPXIdxSAJVFlsXA"
          async
          defer
        ></script>
      </head>
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
