import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Viettennis",
  description: "Viettennis",
};

export default function NewsDetailLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
