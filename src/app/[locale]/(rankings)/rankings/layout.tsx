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
          { key: "1", title: "Xếp hạng đơn", router: "/rankings/singles" },
          { key: "2", title: "Xếp hạng đôi", router: "/rankings/doubles" },
          {
            key: "3",
            title: "Cuộc đua đơn",
            router: "/rankings/race-singles",
          },
          { key: "4", title: "Đua đôi", router: "/rankings/race-doubles" },
        ]}
      />
      {children}
    </>
  );
}
