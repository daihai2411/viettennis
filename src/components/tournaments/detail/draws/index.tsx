"use client";

import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import SearchPlayer from "../common/SearchPlayer";
import TabsRound from "../common/TabsRound";
import TabsTournament from "../common/TabsTournament";
import {
  selectChildTournamentDetail,
  selectDataScoresDraw,
} from "../store/slice";
import Content from "./Content";

const TournamentsDrawComponent = () => {
  const dataScoresDraw = useSelector(selectDataScoresDraw);
  const childTournamentDetail = useSelector(selectChildTournamentDetail);

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

  const getListPlayer = useMemo(() => {
    if (tab) {
      return childTournamentDetail[tab]?.players
        .map((item) => ({
          first_player: { ...item.first_player, couple_id: item.couple_id },
          second_player: { ...item.second_player, couple_id: item.couple_id },
        }))
        .map((item) => Object.values(item))
        .flat();
    }
  }, [tab, childTournamentDetail]);

  return (
    <div>
      <TabsTournament setTab={setTab} className="bg-[#e6e6e6] mb-0" />
      <TabsRound
        tabRound={tabRound}
        list={tabsRoundName}
        setTabRound={setTabRound}
        className="block md:hidden !mb-0 !bg-white"
        classNameCoverTab="!justify-start"
      />
      <SearchPlayer data={getListPlayer} />
      <Content listData={listData} dataTabsRound={dataTabsRound} />
    </div>
  );
};

export default TournamentsDrawComponent;
