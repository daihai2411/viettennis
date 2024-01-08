"use client";

import { Spinner } from "@nextui-org/react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectLoading } from "../store/slice";
import { TAB } from "./constants";
import MatchList from "./matchDraw/MatchList";
import EvenCouple from "./template/evenCouple";

const Content = ({ listData, dataTabsRound }) => {
  const loading = useSelector(selectLoading);

  const [tab, setTab] = useState(TAB.TAB_1);

  // const onSelectionChange = (val) => {
  //   setTab(val);
  // };

  // const getDataRoundTwo = useMemo(() => {
  //   if (listData && listData.length) {
  //     return listData.slice(2);
  //     // .map((item) => Object.values(item.round_detail))
  //     // .flat()
  //     // ?.map((item) => item?.game_detail)
  //     // .flat();
  //   }
  //   return [];
  // }, [listData]);

  return (
    <>
      {/* <div className="flex justify-center mb-14 bg-[#e6e6e6] h-16 items-center">
        <Tabs
          key={tab}
          defaultSelectedKey={tab}
          radius="none"
          classNames={{
            tabList: "bg-[#e6e6e6]",
          }}
          size="lg"
          onSelectionChange={onSelectionChange}
        >
          <Tab key={TAB.TAB_1} title="Vòng ngoài" />
          <Tab key={TAB.TAB_2} title="Vòng trong" />
        </Tabs>
      </div> */}
      <div className="mx-auto hidden md:block">
        {loading ? (
          <Spinner className="flex justify-center" />
        ) : (
          <>
            <EvenCouple listData={listData} />
          </>
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
      {/* <GroupBtnTab tab={tab} onSelectionChange={onSelectionChange} /> */}
    </>
  );
};

export default Content;
