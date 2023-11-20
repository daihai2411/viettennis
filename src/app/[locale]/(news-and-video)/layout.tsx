import SubHeader from "@/components/subHeader";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Viettennis",
  description: "Viettennis",
};

export default function RankingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SubHeader
        routers={[
          { key: "1", title: "Tin mới nhất", router: "/news" },
          { key: "2", title: "Video mới nhất", router: "/video" },
        ]}
        showTab={false}
      />
      {children}
    </>
  );
}
