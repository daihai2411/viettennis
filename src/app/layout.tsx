import { NextAuthProvider } from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
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
