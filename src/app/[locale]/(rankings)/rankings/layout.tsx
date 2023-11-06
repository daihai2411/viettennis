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
          { key: "1", title: "Xếp hạng đơn", router: "/vi/rankings/singles" },
          { key: "2", title: "Xếp hạng đôi", router: "/vi/rankings/doubles" },
          {
            key: "3",
            title: "Cuộc đua đơn",
            router: "/vi/rankings/race-singles",
          },
          { key: "4", title: "Đua đôi", router: "/vi/rankings/race-doubles" },
        ]}
      />
      {children}
    </>
  );
}
