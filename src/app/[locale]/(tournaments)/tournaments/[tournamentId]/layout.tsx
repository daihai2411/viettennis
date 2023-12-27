"use client";

import HeaderTournaments from "@/components/tournaments/headerTournaments";

export default function TournamentsLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { tournamentId: string };
}) {
  return (
    <>
      <HeaderTournaments
        routers={[
          { key: "1", title: "Tổng quan", router: "overview" },
          // { key: "2", title: "Tỷ số", router: "scores" },
          // {
          //   key: "3",
          //   title: "Thứ tự thi đấu",
          //   router: "order-of-play",
          // },
          { key: "4", title: "Sơ đồ thi đấu", router: "draws" },
          {
            key: "5",
            title: "Danh sách vận động viên",
            router: "player-list",
          },
          // {
          //   key: "6",
          //   title: "Tổng hợp trận thắng trong quá khứ",
          //   router: "past-winners",
          // },
        ]}
        tournamentId={params.tournamentId}
      />
      {children}
    </>
  );
}
