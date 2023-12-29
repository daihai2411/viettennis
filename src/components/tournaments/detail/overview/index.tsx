"use client";

import VTRComponent from "@/components/common/VTRComponent";
import YardComponent from "@/components/common/YardComponent";
import { checkEmptyVal } from "@/helpers/value";
import { Skeleton } from "@nextui-org/react";
import { useSelector } from "react-redux";
import {
  selectChildTournament,
  selectLoading,
  selectTournamentDetail,
} from "../store/slice";
import ListNewsInEvent from "./ListNewsInEvent";

const OverviewTournamentModule = () => {
  const loading = useSelector(selectLoading);
  const tournamentDetail = useSelector(selectTournamentDetail);
  const childTournament = useSelector(selectChildTournament);

  const listComponent = [
    {
      title: "Trình thi đấu",
      content: (
        <div className="grid gap-3 py-2">
          {childTournament?.map((item) => (
            <VTRComponent key={item} level={item} />
          ))}
        </div>
      ),
    },
    {
      title: "Tổng giải thưởng",
      content: (
        <div className="text-2xl font-bold text-green-common whitespace-nowrap flex justify-center items-center">
          {checkEmptyVal(tournamentDetail?.total_prize)} VNĐ
        </div>
      ),
    },
    {
      title: "Mặt sân",
      content: <YardComponent id={tournamentDetail?.surface} />,
    },
    {
      title: "Tổng trận đơn",
      content: (
        <div className="text-2xl font-bold text-green-common text-center flex justify-center items-center">
          {checkEmptyVal(tournamentDetail?.point)}
        </div>
      ),
    },
    {
      title: "Tổng trận đội",
      content: (
        <div className="text-2xl font-bold text-green-common text-center flex justify-center items-center">
          {checkEmptyVal(tournamentDetail?.point)}
        </div>
      ),
    },
  ];

  return (
    <div className="container mx-auto px-2 lg:px-14 mt-6">
      <div className="lg:flex justify-center gap-14 hidden">
        {listComponent.map((item) => (
          <div key={item.title} className="">
            <div className="text-lg font-bold flex justify-center mb-[10px] whitespace-nowrap">
              {item.title}
            </div>
            <>{item.content}</>
          </div>
        ))}
      </div>
      <div className="block lg:hidden">
        {listComponent.map((item) => (
          <div
            key={item.title}
            className="flex justify-between border-b-1 border-[#f2f2f2]"
          >
            <div className="text-lg font-bold flex justify-center my-[10px]">
              {item.title}
            </div>
            <Skeleton className="flex items-center" isLoaded={!loading}>
              {item.content}
            </Skeleton>
          </div>
        ))}
      </div>
      <div
        className="mt-14 px-2 md:px-0 2xl:px-10"
        dangerouslySetInnerHTML={{ __html: tournamentDetail?.overview }}
      />
      <ListNewsInEvent />
    </div>
  );
};

export default OverviewTournamentModule;
