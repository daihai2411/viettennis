"use client";

import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import TabsTournament from "../common/TabsTournament";
import { selectDataScoresDraw } from "../store/slice";
import Content from "./Content";

const TournamentsDrawComponent = () => {
  const dataScoresDraw = useSelector(selectDataScoresDraw);

  const [tab, setTab] = useState(undefined);

  const listData = useMemo(() => {
    if (tab) {
      return dataScoresDraw[tab]?.game_result;
    }
  }, [tab, dataScoresDraw]);

  return (
    <div>
      <TabsTournament setTab={setTab} className="bg-[#e6e6e6]" />
      <Content listData={listData} />
    </div>
  );
};

export default TournamentsDrawComponent;
