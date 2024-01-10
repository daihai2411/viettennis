"use client";

import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { STATUS_PLAYER, TOURNAMENT_TYPE } from "../../constants";
import TabsTournament from "../common/TabsTournament";
import { selectChildTournamentDetail } from "../store/slice";
import FilterPlayerList from "./FilterPlayerList";
import ItemPlayer from "./common/ItemPlayer";
import ItemPlayerDouble from "./common/ItemPlayerDouble";

const PlayerListModule = () => {
  const childTournamentDetail = useSelector(selectChildTournamentDetail);
  const [tab, setTab] = useState(undefined);
  const [filterPlayer, setFilterPlayer] = useState(STATUS_PLAYER.ALL);

  const getListPlayer = useMemo(() => {
    if (tab) {
      const data = childTournamentDetail[tab]?.players;
      if (filterPlayer === STATUS_PLAYER.ALL) {
        return data;
      } else {
        return data.filter((item) => item?.status_player === filterPlayer);
      }
    }
  }, [tab, childTournamentDetail, filterPlayer]);

  const getTournamentType = useMemo(() => {
    if (tab) {
      return childTournamentDetail[tab]?.type;
    }
  }, [tab, childTournamentDetail]);

  return (
    <div className="">
      <TabsTournament setTab={setTab} />
      <div className="container mx-auto">
        <FilterPlayerList
          filterPlayer={filterPlayer}
          setFilterPlayer={setFilterPlayer}
        />
        {getListPlayer?.length ? (
          <div className="mx-0 sm:mx-2 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 sm:gap-4 gap-2">
            {getTournamentType === TOURNAMENT_TYPE.SINGER
              ? getListPlayer?.map((item, index) => (
                  <ItemPlayer key={index} item={item} />
                ))
              : getListPlayer?.map((item, index) => (
                  <ItemPlayerDouble key={index} item={item} />
                ))}
          </div>
        ) : (
          <div className="pb-5 flex justify-center mt-10">
            Không có dữ liệu người chơi
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerListModule;
