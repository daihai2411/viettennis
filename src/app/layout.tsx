// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { NextAuthProvider } from "./Providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>{children}</NextAuthProvider>
        {/* <ToastContainer autoClose={2000} /> */}
      </body>
    </html>
  );
}
