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
          { key: "1", title: "Thông tin chung", router: "overview" },
          { key: "2", title: "Trận đấu", router: "scores" },
          { key: "3", title: "Sơ đồ thi đấu", router: "draws" },
          {
            key: "4",
            title: "Danh sách người chơi",
            router: "player-list",
          },
        ]}
        tournamentId={params.tournamentId}
      />
      {children}
    </>
  );
}
