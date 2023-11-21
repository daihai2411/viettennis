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
  return (
    <div style={{ boxShadow: "0 450px 0 -100px #2DA46B inset" }}>
      {children}
    </div>
  );
}
