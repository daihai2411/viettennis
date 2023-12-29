"use client";

import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { TOURNAMENT_TYPE } from "../../constants";
import TabsTournament from "../common/TabsTournament";
import { selectChildTournamentDetail } from "../store/slice";
import ItemPlayer from "./common/ItemPlayer";
import ItemPlayerDouble from "./common/ItemPlayerDouble";

const PlayerListModule = () => {
  const childTournamentDetail = useSelector(selectChildTournamentDetail);
  const [tab, setTab] = useState(undefined);

  const getListPlayer = useMemo(() => {
    if (tab) {
      return childTournamentDetail[tab]?.players;
    }
  }, [tab, childTournamentDetail]);

  const getTournamentType = useMemo(() => {
    if (tab) {
      return childTournamentDetail[tab]?.type;
    }
  }, [tab, childTournamentDetail]);

  return (
    <div className="">
      <TabsTournament setTab={setTab} />
      <div className="container mx-auto">
        {getListPlayer?.length ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {getTournamentType === TOURNAMENT_TYPE.SINGER
              ? getListPlayer?.map((item, index) => (
                  <ItemPlayer key={index} item={item} />
                ))
              : getListPlayer?.map((item, index) => (
                  <ItemPlayerDouble key={index} item={item} />
                ))}
          </div>
        ) : (
          <div className="pb-5 flex justify-center">
            Không có dữ liệu người chơi
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerListModule;
