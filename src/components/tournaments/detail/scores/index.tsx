"use client";

import { Spinner } from "@nextui-org/react";
import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import TabsRound from "../common/TabsRound";
import TabsTournament from "../common/TabsTournament";
import {
  selectDataScoresDraw,
  selectLoadingDataScoresDraw,
} from "../store/slice";
import ListMatchItem from "./ListMatchItem";

const ScoresTournamentModule = () => {
  const loadingDataScoresDraw = useSelector(selectLoadingDataScoresDraw);
  const dataScoresDraw = useSelector(selectDataScoresDraw);

  const [tab, setTab] = useState(undefined);
  const [tabRound, setTabRound] = useState(0);

  const listData = useMemo(() => {
    if (tab) {
      return dataScoresDraw[tab]?.game_result;
    }
  }, [tab, dataScoresDraw]);

  const tabsRoundName = useMemo(() => {
    if (listData) {
      return listData.map((item) => ({
        title: item?.round_name,
        id: item?.round_id.toString(),
      }));
    }
  }, [listData]);

  const dataTabsRound = useMemo(() => {
    if (listData) {
      const newArray = listData.reduce((obj, item) => {
        return { ...obj, [item["round_id"]]: item };
      }, {});
      return newArray[tabRound]?.round_detail;
    }
  }, [listData, tabRound]);

  return (
    <div className="">
      <TabsTournament setTab={setTab} className="bg-default-100" />
      <TabsRound
        tabRound={tabRound}
        list={tabsRoundName}
        setTabRound={setTabRound}
      />
      <div className="container mx-auto">
        {loadingDataScoresDraw ? (
          <Spinner className="w-full" />
        ) : (
          <>
            {Object.values(dataTabsRound || {}).length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mx-6 gap-4">
                <ListMatchItem list={Object.values(dataTabsRound)} />
              </div>
            ) : (
              <div className="flex justify-center py-5">Không có dữ liệu </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ScoresTournamentModule;
