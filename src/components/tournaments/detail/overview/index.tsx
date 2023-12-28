"use client";

import VTRComponent from "@/components/common/VTRComponent";
import { checkEmptyVal } from "@/helpers/value";
import { Skeleton } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { selectLoading, selectTournamentDetail } from "../store/slice";
import ListNewsInEvent from "./ListNewsInEvent";

const OverviewTournamentModule = () => {
  const loading = useSelector(selectLoading);
  const tournamentDetail = useSelector(selectTournamentDetail);
  console.log(tournamentDetail);

  const listComponent = [
    {
      title: "Level",
      content: <VTRComponent level={1200} />,
    },
    {
      title: "Total $ Commitment",
      content: (
        <div className="text-2xl font-bold text-green-common whitespace-nowrap flex justify-center items-center">
          {checkEmptyVal(tournamentDetail?.total_prize)} VNĐ
        </div>
      ),
    },
    {
      title: "Surface",
      content: <div></div>,
    },
    {
      title: "Singles Draw",
      content: (
        <div className="text-2xl font-bold text-green-common text-center flex justify-center items-center">
          {checkEmptyVal(tournamentDetail?.point)}
        </div>
      ),
    },
    {
      title: "Doubles Draw",
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
            <div className="text-lg font-bold flex justify-center mb-[10px]">
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
            <Skeleton isLoaded={!loading}>{item.content}</Skeleton>
          </div>
        ))}
      </div>
      <ListNewsInEvent />
    </div>
  );
};

export default OverviewTournamentModule;
