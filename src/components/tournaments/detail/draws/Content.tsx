"use client";

import { Spinner } from "@nextui-org/react";
import { useSelector } from "react-redux";
import { selectLoading } from "../store/slice";
import MatchList from "./matchDraw/MatchList";
import EvenCouple from "./template/evenCouple";

const Content = ({ listData, dataTabsRound }) => {
  const loading = useSelector(selectLoading);

  return (
    <>
      <div className="mx-auto hidden md:block">
        {loading ? (
          <Spinner className="flex justify-center" />
        ) : (
          <EvenCouple listData={listData} />
        )}
      </div>
      <div className="container mx-auto md:hidden">
        {loading ? (
          <Spinner className="w-full" />
        ) : (
          <>
            {Object.values(dataTabsRound || {}).length ? (
              <div className="flex gap-20 h-full">
                <MatchList
                  listData={Object.values(dataTabsRound)}
                  className="!w-full"
                  noSpacing={true}
                />
              </div>
            ) : (
              <div className="flex justify-center py-5">Không có dữ liệu </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Content;
